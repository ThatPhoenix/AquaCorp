const Discord = require("discord.js");



module.exports.run = async (Aqua, message, args) => {
message.channel.send(`Hello!, You have activated roblox channel activation Enjoy the channels!`)

let role = message.guild.roles.find("name", "Developer");

let member = message.member;

message.channel.send("Enabling...")
member.addRole(role).catch(console.error);
message.channel.send(`Welcome to Aqua Corporation Roblox Channels! ${member}! If you still dont have access to the server please contact a admin. `) 

       }

module.exports.help = {
  name: "removerole"
}
