const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

var version = '1.0.1';

bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    } 
    (msg.content);{
         const generalChannel = msg.guild.channels.find(channel => channel.name === "logs")
    generalChannel.send(msg.content)
   }

})

bot.on("messageUpdate", async(oldMessage, newMessage) => {
    if(oldMessage.content === newMessage.content){
        return;
    }
    var logchannel = bot.channels.get("551949295784296448");
    let logembed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Edited")
    .addField("Before", oldMessage.content, true)
    .addField("After", newMessage.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
bot.on("messageDelete", async message => {
    var logchannel = bot.channels.get("551949295784296448"); 
    let logembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Deleted")
    .addField("Message", message.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
,bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('your PC camera.', { type: "WATCHING"}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{ 
    const channel = member.guild.channels.find(channel => channel.name === "new-joins");
    if(!channel) return;

    channel.send(`Howdy ${member}, welcome to Dubz's Server!`);
})
,let ,censor = "African American" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/nigger/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "fun time" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/sex/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "female organs" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/pussy/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "manhood" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/dick/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "manhood" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/penis/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})     
,let ,censor = "doggone" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/goddamn/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "doggone" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/god damn/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "friend" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/slut/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "liquid" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/nigger/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "I dont have any balls" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/lmb/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "African American" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/nigga/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})     
,let ,censor = "prison wallet" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/anal/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "female parts" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/vagina/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "friend" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/whore/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,let ,censor = "bundle of firewood" /* Replace this with what you want */
,bot.on('message', message => {
    if (message.author == bot.user) {
        return
    }
    let edit = message.content.replace(/faggot/gi, censor);
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);
})
,bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case 'NOTHINGHERE':
            message.channel.sendMessage('EMPTY')
            break;
        case 'youtube':
            message.channel.sendMessage('https://www.youtube.com/channel/UCktQJSuA5qzJ8Au2vi7tFJA')
            break;
        case 'info':{
                 message.channel.sendMessage('Version ' + version);
             }
             break;
        case 'clear':
            if(!args[1]) return message.reply('Please define a number of messages to be cleared.')
            if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send('YOU AINT AN ADMIN YOU IDIOT!!')
            message.channel.bulkDelete(args[1]);
            return message.reply('Messages cleared!')
            break;
        case 'agree'
             :message.member.addRole('553784081255628810')
             console.log
             console.error
             break;
        case 'bannedwords'
            :if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send('YOU AINT AN ADMIN YOU IDIOT!!')
            return message.reply('List of words currently banned from use in the server: https://cdn.discordapp.com/attachments/517476893088546818/606989380824858642/unknown.png')
        case 'take'
            :message.member.addRole('557251519154487296')
            console.log
            console.error
            break;
        case 'bot':
            message.channel.sendMessage('Hay!  I am this servers discord bot, owned and coded entiredly by McDublets.')
            break;
        case 'spamrules':
            message.channel.sendMessage('Do not send invites to pornographic servers.  Keep it to once a day, at maximum, and only if your link is now either invalid or buried.  If your link is still one of the first links, do not resend it.')
            break;
        case 'vctext':
            message.channel.sendMessage('This channel is for sending messages or photos pertaining to the conversations going on in the voice chat.')
            break;
        case 'commands':
            message.channel.sendMessage('Prefix: !.  Commands: commands, vctext, spamrules, bot, bannedwords, agree, info, youtube, rules.')
            break;
        case 'rules':
            message.channel.sendMessage('Be respectful and friendly. Do not spam messages.  Do not mass ping roles.  Do not send porn or explicit photos/videos/jokes in to the chat.  Do not ask to be made admin/moderator.  Links to other chats and self-promotion is not allowed in #main, it is only allowed in #spam-channel.  Keep it to once a day, at most.')
            break;
                
                
    }
})
,bot.login(token);
