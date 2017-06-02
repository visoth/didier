from bot import compute_response

while True:
    try:
        question = input()
        answer = compute_response(question)
        print(answer)
        # Press ctrl-c or ctrl-d on the keyboard to exit
    except (KeyboardInterrupt, EOFError, SystemExit):
        break