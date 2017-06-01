import importlib.util

def import_bot ():
    spec = importlib.util.spec_from_file_location("module.name", "../bot/bot.py")    
    foo = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(foo)
    return foo