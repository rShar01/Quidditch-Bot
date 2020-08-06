# Quidditch-Bot
A Discord Quidditch bot made using Discord.js for the UBC Quidditch Server.
![UBC Banner](https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png)

# Features

## On user join 
Bot displays a message to the channel 'welcome' promting new user to use !role or !help to get started



## Bot responds to the following commands:
  1. !help [name of command] --> outputs information about the command to the channel !help was typed in.
  
  2. !help --> General help command. Direct messages the user all commands the bot is capable of executing.
  
  3. !role [name of role] --> sets the user to have the given role. There are one of three roles: Beater, Chase, Seeker, and Keeper.
                              NOTE: bot made with specific rold ID's, to use in your own server you must change these values using
                                    \@[name of role] in any channel to get the ID
                                    
  4. !faq --> displays frequently asked questions about Quidditch and UBC and answers to said questions.
  
  5. !ping --> responds with Pong. Created to test bot.