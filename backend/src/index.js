// const {WebClient} = require('@slack/web-api');
// const { channel } = require('diagnostics_channel');
// require('dotenv').config();

// async function sendMessage (message) {
//     try {
//         const webClient = new WebClient(process.env.SLACK_TOKEN)
//         const result = await webClient.chat.postMessage({
//             text: message,
//             channel: process.env.CHANNEL_ID
//         })
//         console.log('Mensaje enviado,', result);
//     } catch (error) {
//         console.error('error en el envio del mensaje: ', error)
//     }
// }

// sendMessage('Hola a todos, espero se encuentren muy bien')