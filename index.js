//const
const discord = require("discord.js");
const botconfig = require("./botconfig.json")

const bot = new discord.Client({disableEveeryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity('in videois of fucking Queefer', {type: 'WATCHING'})
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let prefix = botconfig.prefix
    let messageArry = message.content.split(" ")
    let cmd = messageArry[0];
    let args = messageArry.slice(1)

    if(cmd === `${prefix}hello`){
         return message.reply(`hello to you! nice to meet you!`)
    }
})


//token

bot.login(botconfig.token)
