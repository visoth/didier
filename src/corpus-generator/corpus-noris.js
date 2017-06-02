const request = require('request')
const jsonfile = require('jsonfile')

const corpus_name = 'noris'

request('https://www.chucknorrisfacts.fr/api/get?data=type:txt;nb:50', function (error, response, body) {
    var data = JSON.parse(body);

    var corpus = { };

    corpus[corpus_name] = [];
    
    data.forEach(function(fact) {
        var questions = [
            'Que ferai Chuck Noris ?',
            'Chuck Noris ?',
            'Qui est Chuck Noris ?',
        ];

        var answer = fact.fact;

        questions.forEach(function (question) {
            corpus[corpus_name].push([question, answer]);
        });
    }, this);

    jsonfile.writeFile(`../bot/data/vente/didier.${corpus_name}.corpus.json`, corpus);
});