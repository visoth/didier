from chatterbot import ChatBot

conversation = [
    "Hello",
    "Hi there!",

    "How are you doing?",
    "I'm doing great.",

    "That is good to hear",
    "Thank you.",

    "You're welcome."
]

bot = ChatBot("Didier",
    storage_adapter="chatterbot.storage.JsonFileStorageAdapter",
    logic_adapters=[
        "chatterbot.logic.BestMatch",
        {
            'import_path': 'chatterbot.logic.LowConfidenceAdapter',
            'threshold': 0.65,
            'default_response': 'covfefe'
        }
    ],
    trainer='chatterbot.trainers.ChatterBotCorpusTrainer',
    input_adapter="chatterbot.input.TerminalAdapter",
    output_adapter="chatterbot.output.TerminalAdapter",
    database="database.db"
)


bot.train('chatterbot.corpus.french')

print("Type something to begin...")

# The following loop will execute each time the user enters input
while True:
    try:
        # We pass None to this method because the parameter
        # is not used by the TerminalAdapter
        bot_input = bot.get_response(None)

    # Press ctrl-c or ctrl-d on the keyboard to exit
    except (KeyboardInterrupt, EOFError, SystemExit):
        break