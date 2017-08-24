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
            message.channel.send(":signal_strength: Pong!")
            break;

        case "pingtime":
            message.channel.send(":signal_strength: Pong! Response Time: " + client.ping + "ms")
            break;

case "help":
message.channel.send("Note all commands start with **tb:** **ping**-shows you the current speed of the bot **help**-displays the help guide **this bot is a work in progress**")
break;

            case "update":
message.channel.send("**the current verson is 0.1** whats been added is the ping command, the help command and the update command")
Break;
