const Discord = require('discord.js');
const client = new Discord.Client()

client.login("not here")

var prefix = "tb:"

if client.on("message", function(message) 

   if message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {  
        //ping command
        case "ping":
            message.channel.send(":Pong!")
            break;

        case "pingtime":
            message.channel.send("Pong! Response Time: " + client.ping + "mms")
            break;

case "help":
message.channel.send("Note all commands start with **tb:**\n**ping**-shows you the current speed of the bot connection time\n **Server** shows you my main server invite link\n **update** show the current verson of the bot")
  break;
  
  case "server":
message.channel.send("you asked for my invite link https://discord.gg/NFjngMF")
break;

}
})
