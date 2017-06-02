import glob

from chatterbot import ChatBot
bot = ChatBot("Didier",
    # storage_adapter="chatterbot.storage.JsonFileStorageAdapter",
    storage_adapter='chatterbot.storage.MongoDatabaseAdapter',
    logic_adapters=[
        "chatterbot.logic.BestMatch",
        {
            'import_path': 'chatterbot.logic.LowConfidenceAdapter',
            'threshold': 0.65,
            'default_response': 'Je n\'ai pas bien compris votre demande, pouvez-vous la reformuler ?'
        }
    ],
    trainer='chatterbot.trainers.ChatterBotCorpusTrainer',
    database="chatterbot-database"
)

print('Importing corpuses')
for corpusFile in glob.glob('data/**/*.json'):
    print('Importing corpus : ' + corpusFile)
    bot.train(corpusFile)

print("Import of corpus done !")

def compute_response (text): 
    response = bot.get_response(text)
    print(response)
    return response.serialize()["text"]
