const Discord = require('discord.js');
const client = new Discord.Client()

client.login("")

var prefix = "tb:"

client.on("message", function(message) {

    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;
	
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {  
        //ping command
        case "ping":
            message.channel.send("Pong!")
            break;

        case "pingtime":
            message.channel.send("Pong! Response Time: " + client.ping + "mms")
            break;

case "help":
message.channel.send("Note all commands start with **tb:**\n**ping**-shows you the current speed of the bot connection time\n **Server** shows you my main server invite link\n **update** shows the current verson of the bot\n **Status** shows you what Tyson Bot is doing right now ")
  break;
  
  case "server":
message.channel.send("you asked for my invite link https://discord.gg/vfFYNAt")
break;
 case "status":
			if(message.content.length < prefix.length + 6) {
                message.channel.send("when today yesterday I'd recommend typing tb:status today")
                break
            } else {        
                var choices = ["Eating a burger at mcdonalds", "trying to stop running.", "playing with tyson", "playing with pixabot"]
                var rand = choices[Math.floor(Math.random() * choices.length)];                    
                message.reply(rand)  
                break
				
			case "avatar":
            message.channel.send("user.avatarURL")
            break;
}
})
