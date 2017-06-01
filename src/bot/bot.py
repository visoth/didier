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
    input_adapter="chatterbot.input.TerminalAdapter",
    output_adapter="chatterbot.output.TerminalAdapter",
    database="chatterbot-database"
)

bot.train('data/vente/greetings.corpus.json')
bot.train('data/vente/trivia.corpus.json')
bot.train('data/vente/didier.corpus.json')
bot.train('data/vente/didier.products.corpus.json')

print("Bonjour, Didier a votre service, en quoi pourrai-je vous etre utile ?")

# The following loop will execute each time the user enters input
while True:
    try:
        # We pass None to this method because the parameter
        # is not used by the TerminalAdapter
        bot_input = bot.get_response(None)

    # Press ctrl-c or ctrl-d on the keyboard to exit
    except (KeyboardInterrupt, EOFError, SystemExit):
        break


def compute_response (text): 
    response = bot.get_response(text)
    print(response)
    return response.serialize()["text"]
