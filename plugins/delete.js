/* Codded by @Dinuka

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Whats bot - Adeesha
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DEL_DESC = "Deletes The Replied Message Send By The Bot"

Asena.addCommand({pattern: 'del', fromMe: false, desc: DEL_DESC}, (async (message, match) => {

  await message.reply_message.delete();

}));
