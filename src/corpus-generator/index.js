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
        { "didier.products": _.flatten(group_by_type(data).slice(0, 100).map(gen_question_answer)) })
})

// question & answer
const gen_question_answer = group => ask_product.map(item => [
    item.question(group.type),
    item.answer(get_operations(group.children))
])

// utils
const uniq = (data) => _.uniq(data) 
const remove_number = (text) => text.replace(/[0-9]/g, '')
const get_operations = (item) => item.map(i => i.OperationCode)
const group_by_type = (data) => alasql(`SELECT type, ARRAY(_) as children from ? GROUP BY type`, [data])

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
        question: (type) => `Je cherche des ${type}`,
        answer: (sales) => `Ok! on a les ventes ${uniq(sales).map(remove_number).join(', ')}`
    },
    {
        question: (type) => `J'aimerais acheter des ${type}`,
        answer: (sales) => `Bien! on a les ventes ${uniq(sales).map(remove_number).join(', ')}`,
    },
    {
        question: (type) => `Je viens acheter des ${type}`,
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