const request = require('request')
const jsonfile = require('jsonfile')

const corpus_name = 'noris'

request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;nb:50', function (error, response, body) {
    var data = JSON.parse(body);

    var corpus = { };

    corpus[corpus_name] = [];
    
    data.forEach(function(fact) {
        var question = 'Que ferai Chuck Noris ?';
        var answer = fact.fact;

        corpus[corpus_name].push([question, answer]);
    }, this);

    jsonfile.writeFile(`../bot/data/vente/didier.${corpus_name}.corpus.json`, corpus);
});