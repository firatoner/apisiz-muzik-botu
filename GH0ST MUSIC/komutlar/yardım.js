const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

module.exports = {
    name: "yardım",
    aliases: ["yardım"],
    description: "yardım menüsü",
    usage: "yardım",
    ownerOnly: false,
    run: async (message,args,client) => {

        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle(':musical_note: Müzik Komutları :musical_note:')
        .addField(`${ayarlar.prefix}oynat`,`Adını yazdığınız şarkıyı oynatır`)
        .addField(`${ayarlar.prefix}kapat`,'Oynatılan şarkıyı kapatır')
        .addField(`${ayarlar.prefix}geç`,'Sıradaki şarkıya geçiş yapar')
        .addField(`${ayarlar.prefix}kuyruk`,'Sırada olan şarkıları gösterir')
        .addField(`${ayarlar.prefix}kuyruğu-temizle`,'Kuyruğu temizler')
        .setFooter(`${ayarlar.ad}`, client.user.avatarURL())
        .setThumbnail(client.user.avatarURL())
        message.channel.send(embed)
     

    }}