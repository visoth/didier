const csv = require('csvtojson')
const alasql = require('alasql')
const _ = require('lodash')
const jsonfile = require('jsonfile')

csv({ trim:true, delimiter:';' })
.fromFile('product-name.csv')
.on('end_parsed',(data)=> {
    const family_name = data.reduce((results, d) => Object.assign(results, {[d.familyId] : d}), {})

    csv({ trim:true, delimiter:';' })
    .fromFile('product-sales.csv')
    .on('end_parsed',(data)=> {
        jsonfile.writeFile(
            '../bot/data/vente/didier.corpus.json', 
            { "didier": static_questions })
        jsonfile.writeFile(
            '../bot/data/vente/didier.products.corpus.json', 
            { "didier.products": [
                ..._.flatten(limit(group_by('type', data)).map(group => gen_question_answer(ask_product, group, 'OperationCode'))),
                ..._.flatten(limit(group_by('segment', data)).slice(0, 80).map(group => gen_question_answer(ask_product, group, 'OperationCode'))),
                ..._.flatten(limit(group_by('family', data)).slice(0, 80).map(group => gen_question_answer(ask_product, group, 'OperationCode'))),
                ..._.flatten(limit(group_by('classe', data)).slice(0, 80).map(group => gen_question_answer(ask_product, group, 'OperationCode'))),
                ..._.flatten(limit(group_by('brick', data)).slice(0, 80).map(group => gen_question_answer(ask_product, group, 'OperationCode'))),
            ]})
        jsonfile.writeFile(
            '../bot/data/vente/didier.sales.corpus.json', 
            { "didier.products": [
                ..._.flatten(group_by('OperationCode', data).map(group => gen_question_answer(ask_sale, group, 'FamilyId'))),
            ]})
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
    const group_by = (type, data) => alasql(`SELECT ${type} as name, ARRAY(_) as children from ? GROUP BY ${type}`, [data])

    const display_family = (id) => `[${id}] ${family_name[id] ? family_name[id].name.trim() || family_name[id].altName.trim() : 'XX'}`

    // Questions & answsers
    const static_questions = [
        ["Comment t'appelles tu ?", "Je m'appelle Didier ! fier d'être un Bot !"],
        ["Je souhaite savoir si les paiements sont sécurisés.", "Tout vos paiements sont sécurisés !"],
        ["Comment tu t'appelles ?", "Je m'appelle Didier"],
        ["Quel est ton nom ?", "Mon nom est Didier"],
        ["Quel age as-tu ?", "Je ne me souvient pas de mon dernier anniversaire !"],
    ]

    const ask_sale = [
        {
            question: (name) => `Donne moi les produit de la vente ${name}`,
            answer: (familyIds) => `Ok! voici les produits : ${uniq(familyIds).map(display_family).join(', ')}`
        },
        {
            question: (name) => `Montre moi les produit de la vente ${name}`,
            answer: (familyIds) => `Bien! voici les produits : ${uniq(familyIds).map(display_family).join(', ')}`
        },
        {
            question: (name) => `Montre moi la vente ${name}`,
            answer: (familyIds) => `D'accord! voici les produits : ${uniq(familyIds).map(display_family).join(', ')}`
        },
    ]

    const ask_product = [
        {
            question: (name) => `Je cherche des ${name}`,
            answer: (sales) => `Ok! on a les ventes : ${uniq(sales).map(remove_number).join(', ')}`
        },
        {
            question: (name) => `J'aimerais acheter des ${name}`,
            answer: (sales) => `Bien! on a les ventes : ${uniq(sales).map(remove_number).join(', ')}`,
        },
        {
            question: (name) => `Je viens acheter des ${name}`,
            answer: (sales) => `Bien! on a les ventes : ${uniq(sales).map(remove_number).join(', ')}`,
        },
    ]
})