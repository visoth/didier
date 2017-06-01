const csv = require('csvtojson')
const alasql = require('alasql')
const _ = require('lodash')
const jsonfile = require('jsonfile')

csv({ trim:true, delimiter:';' })
.fromFile('product-sales.csv')
.on('end_parsed',(data)=> {
    jsonfile.writeFile(
        '../bot/data/vente/didier.corpus.json', 
        { "didier": static_questions })
    jsonfile.writeFile(
        '../bot/data/vente/didier.products.corpus.json', 
        { "didier.products": [
            ..._.flatten(group_by('type', data).slice(0, 80).map(gen_question_answer)),
            ..._.flatten(group_by('segment', data).slice(0, 80).map(gen_question_answer)),
            ..._.flatten(group_by('family', data).slice(0, 80).map(gen_question_answer)),
            ..._.flatten(group_by('classe', data).slice(0, 80).map(gen_question_answer)),
            ..._.flatten(group_by('brick', data).slice(0, 80).map(gen_question_answer)),
        ]})
})

// question & answer
const gen_question_answer = group => ask_product.map(item => [
    item.question(group.name.trim()),
    item.answer(get_operations(group.children))
])

// utils
const uniq = (data) => _.uniq(data).slice(0, 5) 
const remove_number = (text) => text.replace(/[0-9]/g, '')
const get_operations = (item) => item.map(i => i.OperationCode)
const group_by = (type, data) => alasql(`SELECT ${type} as name, ARRAY(_) as children from ? GROUP BY ${type}`, [data])

// Questions & answsers
const static_questions = [
    ["Comment t'appelles tu ?", "Je m'appelle Didier ! fier d'être un Bot !"],
    ["Je souhaite savoir si les paiements sont sécurisés.", "Tout vos paiements sont sécurisés !"],
    ["Comment tu t'appelles ?", "Je m'appelle Didier"],
    ["Quel est ton nom ?", "Mon nom est Didier"],
    ["Quel age as-tu ?", "Je ne me souvient pas de mon dernier anniversaire !"],
]

const ask_product = [
    {
        question: (name) => `Je cherche des ${name}`,
        answer: (sales) => `Ok! on a les ventes ${uniq(sales).map(remove_number).join(', ')}`
    },
    {
        question: (name) => `J'aimerais acheter des ${name}`,
        answer: (sales) => `Bien! on a les ventes ${uniq(sales).map(remove_number).join(', ')}`,
    },
    {
        question: (name) => `Je viens acheter des ${name}`,
        answer: (sales) => `Bien! on a les ventes ${uniq(sales).map(remove_number).join(', ')}`,
    },
]

// const question = {
//     `Je viens acheter des [questions]`,
//     `d'accord! je `
//     `Comment t'appelle tu ?`,
//     `Je m'appelle didier ! fiers d'être un Bot !`,
//     `Je souhaite savoir si les paiements sont sécurisés.`,
//     `Tout vos paiements sont sécurisés !`,
//     `Quels sont les ventes qui peuvent être livrer rapidement ?`,
//     `Les ventes [responses] peuvent être livrées en 72 heures.`,
//     `Est-ce qu'il y a des VP lounge ?`,
//     `Oui il y a des ventes lounges.`
// }