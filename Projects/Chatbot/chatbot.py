from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from chatterbot.trainers import ChatterBotCorpusTrainer

my_bot = ChatBot('Chatbot')

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
            
list_trainer = ListTrainer(my_bot)

for item in (small_talk, math_talk_1, math_talk_2, math_talk_3):
        list_trainer.train(item)

name = "Bot Number 286" 
monsoon = "rainy" 
mood = "Smiley"
resp = { 
"what's your name?": [ 
"They call me {0}".format(name), 
"I usually go by {0}".format(name), 
"My name is the {0}".format(name) ],
"what's today's weather?": [ 
"The weather is {0}".format(monsoon), 
"It's {0} today".format(monsoon)], 
"how are you?": [ 
"I am feeling {0}".format(mood), 
"{0}! How about you?".format(mood), 
"I am {0}! How about yourself?".format(mood), ],
"": [ 
"Hey! Are you there?", 
"What do you mean by these?", 
 ],
"default": [
"This is a default message"] }

corpus_trainer = ChatterBotCorpusTrainer(my_bot)
corpus_trainer.train('chatterbot.corpus.english')


def conversation():
        while True:
                user_input = input("Talk to me")
                if (user_input == "QUIT"):
                        break;
                else:
                        response = my_bot.get_response(user_input)
                        print(f"{response}")

conversation()
