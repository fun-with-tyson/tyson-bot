const Discord = require('discord.js');
const client = new Discord.Client()

client.login("MzQ5NTA5NjY1MDQ0MDM3NjMz.DH4zTQ.w3EQafkyqYBlGGCMXYyEgZo1RQM")

var prefix = "mb:"

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
}
})
