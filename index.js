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

bot.on('message', message => {
    if (message.author == bot.user) {
        return}
    if (message.content.toUpperCase() === ('nigger').toUpperCase()) {
    let edit = message.content.replace(/nigger/gi, "[Pardon me, I am racist]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('nigga').toUpperCase()){
    let edit = message.content.replace(/nigga/gi, "[Pardon me, I am racist]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('pussy').toUpperCase()){
    let edit = message.content.replace(/pussy/gi, "[pimple]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('vagina').toUpperCase()){
    let edit = message.content.replace(/vagina/gi, "[pimple]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('boob').toUpperCase()){
    let edit = message.content.replace(/boop/gi, "[2 pipe set]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('tits').toUpperCase()){
    let edit = message.content.replace(/tits/gi, "[2 pipe set]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('dick').toUpperCase()){
    let edit = message.content.replace(/dick/gi, "[manhood]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('penis').toUpperCase()){
    let edit = message.content.replace(/penis/gi, "[manhood]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('anal').toUpperCase()){
    let edit = message.content.replace(/anal/gi, "[prison wallet]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('motherfuck').toUpperCase()){
    let edit = message.content.replace(/motherfuck/gi, "[oops]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('queer').toUpperCase()){
    let edit = message.content.replace(/queer/gi, "[unstable]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('slut').toUpperCase()){
    let edit = message.content.replace(/slut/gi, "[friend]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('whore').toUpperCase()){
    let edit = message.content.replace(/whore/gi, "[friend]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}
    if (message.content.toUpperCase() === ('gay').toUpperCase()){
    let edit = message.content.replace(/gay/gi, "[insecure]");
    message.delete();
    message.channel.send(`${message.author.username}: ${edit}`);}


bot.on('message', message=>{
  
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
,bot.login(token);})
