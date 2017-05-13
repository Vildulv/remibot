/**
 * Created by hev on 13.05.17.
 */

var telegramBot = require('node-telegram-bot-api');
var token ='385530771:AAHg6Y2OYHlPbP7AfpaeB9V-RjWI1W52Q2I';
var api = new telegramBot(token, {polling: true});

api.onText(/\/help/, function(msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "I can help you remind your notes by date of any text you send to me.");
});

api.onText(/\/start/, function(msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "They call me RemiBot. " +
        "I can help you remind your notes by date of any text you send to me. "+
        "To help you i just have few commands.\n/help\n/start\n/note");

});

api.onText(/\/note/, function(msg, match) {
    var fromId = msg.from.id;

    console.log(msg);
    console.log(msg.text);

    api.sendMessage(fromId, "Your note is saved.");

});


console.log("RemiBot has started. Start conversations in your Telegram.");