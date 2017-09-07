const Discord = require('discord.js');
const client = new Discord.Client()

var prefix = "t:";

// Bot user status
function setGame() {
    var games = [
		"t help",
		"annoying PixaBot",
		"annoying ChromeBot",
		"annoying Discord",
		"annoying Tyson"
    ]

    client.user.setPresence({
        status: 'online',
        afk: false,
        game: {
            type: 0,
            name: games[Math.floor(Math.random() * games.length)]
        }
    })
}

// Bot ready
client.on("ready", () => {
    console.log(`Bot Ready`);
	
	client.on('guildMemberAdd', member => {
		
		const channel = member.guild.channels.find('name', 'logs');
		if (!channel) return;
		channel.send(`Welcome to the server hope you have a great time, ${member}`);
			
})
    setGame();
    client.setInterval(setGame, 1000);
})

client.login("");

client.on("message", function(message) {

    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith(prefix)) return;
	
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        //ping command
        case "ping":
            message.channel.send("Pong!");
            break;

        case "pingtime":
            message.channel.send("Pong! Response Time: " + client.ping + "mms");
            break;
			
		case "help":
			var embed = new Discord.RichEmbed()
                .setAuthor("Help Guide", "https://images-ext-2.discordapp.net/external/KLnOX8cIR8Fe6aRozJDuwtMC4NQttUMJu3MQRy2nTvM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/354594001736957954/b7259f4a3009c964cae30157176bc2ac.png?width=250&height=250")
                .setDescription("My prefix is t:")
                .addField("General Commands", "ping\nserver\nupdate\npingtime\navatar\nicon\nsay\ninfomation\npurge\nwebsite")
                .addField("Music Commands", "play\nskip\nstop\nvol\nresume\npause")
                .setColor("#01FFC")   
           message.author.send({embed});
			var embed = new Discord.RichEmbed()
					.setColor("#00c9ff") 
					 .setAuthor("I Sent You A DM with a list of commands")
                message.channel.send({embed})
            break;
  
		case "server":
			message.channel.send("you asked for my invite link https://discord.gg/9mydqx4");
			break;
			
			case "update-log":
			message.author.send("**Version 0.9**\n Added Music Commands and say commands");
			break;
			
		case "avatar":
		 if (message.mentions.users.first()) {
            	var mentionmembers = message.mentions.members.first()
            	var mentionusers = message.mentions.users.first()
            	var embed = new Discord.RichEmbed()
                    .setImage(mentionusers.displayAvatarURL)
					.setColor("#01FFC")
            	message.channel.send({embed})
            } else {
                var embed = new Discord.RichEmbed()
                    .setImage(message.author.displayAvatarURL)
					.setColor("#01FFC")
                message.channel.send({embed})
            }
            break;
			
			case "say":
           try {
                    if(message.content.length < prefix.length + 4) {
                        message.channel.send("Come on, say something!")
                        break
                    } else { 
                            message.channel.send(message.content.replace(prefix + "say ", ''));
                    message.delete();
                            }
                    } catch(err) {
                        message.channel.send(error)
                    }
            break;
			
			case "icon":
			        var embed = new Discord.RichEmbed()
                    .setImage(message.guild.iconURL)
                    .setColor("#1E90FF")
                message.channel.send({embed})
                break;
				
				case "Infomation":
				var embed = new Discord.RichEmbed()
                .setAuthor("Information")
                .setDescription("This information command will tell you all the information you need about T-BOT")
                .addField("Bot Creators/Helpers", "Kaiss-Fixing Errors in the bot\nTyson-Making and developng the Bot\nChromeBot-for Being a great bot")
                .addField("Why was this bot made and when was this bot made", "This bot was made on the 4th of September 2017 the bot was made because i have always wanted to code a great standing public bot and becuase i love coding discord bots")
                .setColor("#ff0000") 
message.author.send ({embed})
message.channel.send ("i send you all the info you need by DM");			
            break;
			
			case "purge":
  const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Please Add An Amount to Delete');
if (!amount && !user) return message.reply('Please Add An Amount to Delete');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});

break;

case "website":
message.channel.send ("check out my website here https://sites.google.com/view/tbot/");			
            break;
			
			case "jokes":
			if(message.content.length < prefix.length + 6) {
                message.channel.send("type (t:jokes !) to grab a joke from me")
                break;
            }  else {        
                var choices = ["I dont know a joke to say to you right now", "T-BOT= Tysons Battle of Trees", "WHAT I DONT DO JOKES CAUSE IM AM MAN not funny", "why are you asking me ask ChromeBot","DabCentral is awesome **not** **dab central is not a discord server** ___yet___"]
                var rand = choices[Math.floor(Math.random() * choices.length)];                    
                message.reply(rand)  
                break;
				
				case "user":
			var embed = new Discord.RichEmbed()
                .setAuthor("${mentionusers.username}s user info")
                .addField("Name") 
               .client 
			   .addField("User Connection")
			   .connections
			 .addField("Servers that i am in")
			  .mutualGuilds
			  .addField("Does this user have premium")
			  .premium
			   .premiumSince
			    .addField("User")
				.user
                .setColor("#0007ff")   
           message.author.send({embed});
			var embed = new Discord.RichEmbed()
					.setColor("#00c9ff") 
					 .setAuthor("I Sent You A DM with a list of commands")
                message.channel.send({embed})
            break;
	}
	}
})
