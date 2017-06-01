from custom_imports import import_bot

def getresponse(text):
    bot = import_bot()
    return bot.compute_response(text)