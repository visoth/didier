const csv = require('csvtojson')
const alasql = require('alasql')
const _ = require('lodash')
const jsonfile = require('jsonfile')

csv({ trim:true, delimiter:';' })
    .fromFile('product-name.csv')
    .on('end_parsed', (data)=> {
        const family_name = data.reduce((results, d) => Object.assign(results, {[d.familyId] : d}), {})

        csv({ trim:true, delimiter:';' })
            .fromFile('product-sales.csv')
            .on('end_parsed', (data)=> {
                jsonfile.writeFile(
                    '../bot/data/vente/didier.sales.corpus.json', 
                    { "didier.sales": [
                        ..._.flatten(limit(group_by('type', data)).map(group => gen_question_answer(ask_sales, group, 'OperationCode'))),
                        ..._.flatten(limit(group_by('segment', data)).slice(0, 80).map(group => gen_question_answer(ask_sales, group, 'OperationCode'))),
                        ..._.flatten(limit(group_by('family', data)).slice(0, 80).map(group => gen_question_answer(ask_sales, group, 'OperationCode'))),
                        ..._.flatten(limit(group_by('classe', data)).slice(0, 80).map(group => gen_question_answer(ask_sales, group, 'OperationCode'))),
                        ..._.flatten(limit(group_by('brick', data)).slice(0, 80).map(group => gen_question_answer(ask_sales, group, 'OperationCode'))),
                    ]})
                jsonfile.writeFile(
                    '../bot/data/vente/didier.products.corpus.json', 
                    { "didier.products": [
                        ..._.flatten(group_by('OperationCode', data).map(group => gen_question_answer(ask_product, group, 'FamilyId'))),
                    ]})

                console.log('Corpus generation ended successfully.')
            })

        csv({ trim:true, delimiter:';' })
            .fromFile('72H.csv')
            .on('end_parsed', (data)=> {
                const res = { name: '', children: data }
                jsonfile.writeFile(
                    '../bot/data/vente/didier.72h.corpus.json', 
                    { "didier.sales72h": gen_question_answer(ask_next_sales, res, 'OperationCode') })
                    
                console.log('Corpus generation ended successfully.')
            })
        
        // question & answer
        const gen_question_answer = (questions, group, property) => questions.map(item => [
            item.question(group.name.trim()),
            item.answer(group.children.map(item => item[property]))
        ])

        // utils
        const limit = (data, size = 80) => data.slice(0, size)
        const uniq = (data) => _.uniq(data).slice(0, 5) 
        const remove_number = (text) => text.replace(/[0-9]/g, '')
        const group_by = (type, data) => alasql(`SELECT ${type} as name, ARRAY(_) as children from ? WHERE OperationCode != 'AAPPAREL5' GROUP BY ${type}`, [data])

        const display_family = (id) => `[${id}] ${family_name[id] ? family_name[id].name.trim() || family_name[id].altName.trim() : 'XX'}`

        // Generated corpus from CSV files
        const format_product_list = (familyIds) => `Voici les produits : ${uniq(familyIds).map(display_family).join(', ')}`
        const ask_product = [
            {
                question: (name) => `Décris moi la vente ${name}`,
                answer: (familyIds) => `D'accord! ${format_product_list(familyIds)}`
            },
            {
                question: (name) => `Quel sont les produits de la vente ${name}`,
                answer: (familyIds) => `${format_product_list(familyIds)}`
            },
            {
                question: (name) => `Donne moi les produits de la vente ${name}`,
                answer: (familyIds) => `D'accord! ${format_product_list(familyIds)}`
            },
            {
                question: (name) => `Montre moi les produits de la vente ${name}`,
                answer: (familyIds) => `D'accord! ${format_product_list(familyIds)}`
            },
            {
                question: (name) => `Décris moi la vente ${name}`,
                answer: (familyIds) => `D'accord! ${format_product_list(familyIds)}`
            },
        ]

        const format_sales_list = (sales) => `Voici les ventes en cours concernant ce produit : ${uniq(sales).map(remove_number).join(', ')}`
        const ask_sales = [
            {
                question: (name) => `Y a-t-il des ${name}`,
                answer: (sales) => `Oui, bien sure ! ${format_sales_list(sales)}`
            },
            {
                question: (name) => `Avez-vous des ${name}`,
                answer: (sales) => `Oui, bien sure ! ${format_sales_list(sales)}`
            },
            {
                question: (name) => `Je cherche des ${name}`,
                answer: (sales) => `D'accord ! ${format_sales_list(sales)}`
            },
            {
                question: (name) => `J'aimerais acheter des ${name}`,
                answer: (sales) => `D'accord ! ${format_sales_list(sales)}`,
            },
            {
                question: (name) => `Je viens acheter des ${name}`,
                answer: (sales) => `D'accord ! ${format_sales_list(sales)}`,
            },
        ]

        const ask_next_sales = [
            {
                question: (name) => `Je veux être livré rapidement`,
                answer: (sales) => `Je vous propose les ventes suivantes, livrées en 72h : ${format_sales_list(sales)}`
            },
            {
                question: (name) => `Quelles sont les ventes à 72 heure ?`,
                answer: (sales) => `Les ventes suivantes : ${format_sales_list(sales)}`
            },
            {
                question: (name) => `Je suis pressé`,
                answer: (sales) => `D'accord ! Voici les ventes livrées en 72h : ${format_sales_list(sales)}`,
            },
        ]
    })