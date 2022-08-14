const tokens = require(`../tokens.json`);
const Discord = require(`discord.js`);
const client = new Discord.Client();
const log = require(`../handlers/logHandler.js`);
const ms = require('ms');

module.exports = async client => {
  try {
    setTimeout(async function() {
      log.info(`En cours de connection...`)
    }, ms('1s'));
    setTimeout(async function() {
      log.info(`Connecter en tant que : ${client.user.tag}`)
    }, ms('3s'));
    client.user.setActivity(`DM MOI pour support!`, { type: 'WATCHING' })
    log.info(`${client.users.keyArray().length} utilisateurs online`);
    log.info(`${client.guilds.keyArray().length} serveurs`);
  } catch(e) {
    log.error(e.stack)
  }
}
