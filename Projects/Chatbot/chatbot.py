from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

# This is an example of creating and naming a chatbot
my_bot = ChatBot('Chatbot')

# This is an example of how to train your bot
list_trainer = ListTrainer(my_bot)
small_talk = ['hi there',
              'hi!',
              'how do you do',
              'how are you',
              'i\'m fine',
              'glad to hear that.',
              'i feel awesome',
              'excellent, glad to hear that.',
              'not so good',
              'sorry to hear that.',
              'wha\'s your name',
              'My name is Chatbot, ask me a math question.',
              "Hi, can I help you?",
                "Sure, I'd like to book a flight to Iceland.",
                "Your flight has been booked."]


math_talk_1 = ['pythagorean theorem',
               'a squared plus b squared equals c squared']
math_talk_2 = ['2+2',
               '4 ask me a harder one.']
math_talk_3 = ['law of cosines',
               'c**2 = a**2 + b**2 - 2 * a * b * cos(gamma)']

# You can use this for each loop to train the chatbot in every of the things you want it to respond.
for item in (small_talk, math_talk_1, math_talk_2, math_talk_3):
        list_trainer.train(item)

# This trains the chatbot with a library that chatterbot already has in github called "english".
corpus_trainer = ChatterBotCorpusTrainer(my_bot)
corpus_trainer.train('chatterbot.corpus.english')

# This creates the environment to communicate with the chatbot.
def conversation():
        while True:
                user_input = input("Talk to me")
                if (user_input == "QUIT"):
                        break;
                else:
                        response = my_bot.get_response(user_input)
                        print(f"{response}")

conversation()
