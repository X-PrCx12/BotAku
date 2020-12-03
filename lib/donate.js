exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${pushname}!* 👋️

❉──────────❉
⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*
        ❉──────────❉

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: 081260899819
⚜ *DANA*: 081260899819
⚜ *PULSA*: 081260899819
⚜ *GOPAY*: 081260899819

📺 *Iklan* : WHWHWHEHWHEH

👼Follow akun instagram admin ${instagramlu}

😱INFORMASI COVID-19 TERBARU!

 🤒POSITIF: *${corohelp.confirmed.value}*
 😄SEMBUH: *${corohelp.recovered.value}*
 ☠️MENINGGAL: *${corohelp.deaths.value}*
 📉UPDATE: *${corohelp.lastUpdate}*

😷 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

📺 Mau pasang iklan di *${BotName} ?*
📞 WA : *${whatsapplu}*
  
😄 Gunakan dengan bijak ‼️
🤖 Bot ini berjalan ${kapanbotaktif} ‼️

🛡 Official Grub [1] : ${grupch1}

🛡 Official Grub [2] : ${grupch2}

  
⚙️ -----[ *${BotName}* ]----- ⚙️`
}
