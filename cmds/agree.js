const Discord = require("discord.js");

module.exports.run = async (Aqua, message, args) => {
Aqua.users.get(`${message.author}`).send(`Hello!, you have agreed to the Rules of Aqua Corporation  and there for you must follow them. Enjoy!`)
Aqua.users.get(`${message.author}`).addRole(role)
  
       }

module.exports.help = {
  name: "removerole"
}
