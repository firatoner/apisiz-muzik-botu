module.exports = (client) => {

const ayarlar = require("../ayarlar.json")

var oynuyorkısımları = [
`Prefix: ${ayarlar.prefix}`,
`${ayarlar.ad}`,
`Developed By FIRAT#9999`
]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'LISTENING' });
        }, 2 * 3000);

    console.log("Bot başarı ile giriş yaptı.")
}
