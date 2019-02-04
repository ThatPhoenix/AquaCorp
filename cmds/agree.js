const Discord = require("discord.js");



module.exports.run = async (Aqua, message, args) => {
message.channel.send(`Hello!, you have agreed to the Rules of Aqua Corporation  and there for you must follow them. Enjoy!`)

let role = message.guild.roles.find("name", "Members");

let member = message.member;

message.channel.send("Verifying...")
member.addRole(role).catch(console.error);
message.channel.send(`Welcome to Aqua Corporation ${member}! If you still dont have access to the server please contact a admin. `) 

       }

module.exports.help = {
  name: "removerole"
}
