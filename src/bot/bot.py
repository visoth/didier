import glob
import random

from chatterbot import ChatBot

def select_response(statement, statement_list):
    return random.choice (statement_list)

bot = ChatBot("Didier",
    # storage_adapter="chatterbot.storage.JsonFileStorageAdapter",
    storage_adapter='chatterbot.storage.MongoDatabaseAdapter',
    logic_adapters=[
        {
            "import_path": "chatterbot.logic.BestMatch",
            "statement_comparison_function": "chatterbot.comparisons.levenshtein_distance",
            "response_selection_method": select_response
        },
        {
            'import_path': 'chatterbot.logic.LowConfidenceAdapter',
            'threshold': 0.65,
            'default_response': 'Je n\'ai pas bien compris votre demande, pouvez-vous la reformuler ?',
        }
    ],
    trainer='chatterbot.trainers.ChatterBotCorpusTrainer',
    input_adapter="chatterbot.input.TerminalAdapter",
    output_adapter="chatterbot.output.TerminalAdapter",
    database="chatterbot-database"
)

print('Importing corpuses')
for corpusFile in glob.glob('data/**/*.json'):
    print('Importing corpus : ' + corpusFile)
    bot.train(corpusFile)

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
