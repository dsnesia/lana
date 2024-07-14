/**
  * Created by Lana
  * Base : Dittaz & Irfan Haryanto
  * Contact me on WhatsApp wa.me/6281775445373
  * Subscribe me on Youtube : https://youtube.com/@maulanabot
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/

/**
INGAT BANG , INI SCRIPT GRATIS BUAT SEMUA ORANG , JANGAN DI JUAL!! JIKA SCRIPT DI JUAL NERAKA MENUNGGUMU!! 

SCRIPT ORI BUATAN LANA!!
BASE ORI By IRFAN x Ditaz!!

*/


"use strict";
import {generateWAMessageFromContent} from "baileys"
import toMs from 'ms'
import chalk from 'chalk'
import fs from "fs"
import fse from 'fs-extra'
import moment from "moment-timezone"
import util from "util"
import { exec, spawn } from "child_process"
import axios from "axios"
import yts from "yt-search"
import speed from "performance-now"
import ms from "parse-ms"
import ytdl from 'ytdl-core'
import os from 'os'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import cheerio from  'cheerio'
import request from "request"
import { join, dirname } from 'path'
import path  from 'path'
import { delRequireCache } from 'delete-node-require-cache'
import * as logs from './logs.js'
import { createRequire } from 'module'
import { fileURLToPath, URL } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
var require = createRequire(import.meta.url) //Bring in the ability to create the 'require' method


//----------------- LIB FILE ------------------\\
import {formatp, getRandom,generateProfilePicture, getCase,runtime,FileSize,h2k, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson,pickRandom,getGroupAdmins, sleep,getBuffer} from "../lib/myfunc.js" 
import {TelegraPh} from '../lib/uploader.js'
import _data from "../lib/totalcmd.js"
import _sewa from '../lib/sewa.js'
import _prem from "../lib/premium.js"
import _scrape from '../lib/scraper.js'
import _error from "../lib/totalerror.js"
import _blockcmd from "../lib/blockcmd.js"
import _spam from '../lib/antispam.js'
import _ban from "../lib/banned.js"
//import mess from "./message.js" 
import {register} from "./register.js"


const thumb = fs.readFileSync('./stik/thumb.jpeg')
var publik = true

//=================================================//
export const lanaBot = async(conn, m, chatUpdate, store) => {
try {
	
//Database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []


  
var Ownerin ="628@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`62@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))

const { type,args, reply,sender,ucapanWaktu,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body } = m

const prefix = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd?body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || _data.checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false 
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const user = global.db.data.users[m.sender] 
const settings = global.db.data.settings['settingbot']
await (await import('./lanaabot.js')).default(prefix,command)
await (await import('./allfake.js')).default(m)
  
//Register terlebih dahulu sebelom pakai bot
register(m,makeid,isCmd,isOwner)
  
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isReaction = (type == 'reactionMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

//Security / Keamanan
const isBotGroupAdmins = isGroup ? m.isBotAdmin : false
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntihidetag = isGroup ? db.data.chats[from].antihidetag : false
const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
const isBanned = sender? _ban.check(senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const updateGempa = isGroup ? db.data.chats[from].updateGempa : false
  
//User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false

  
//Bot hanya merespon jika button miliknya saja yang di tekan 
if(m.myButton) {return}

//AUTO Read Message  
conn.readMessages([m.key])

//Presence Online
if (isCmd){
conn.sendPresenceUpdate('composing', from)
} else {
conn.sendPresenceUpdate('available', from)
}


//Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) {return} 
if (isGroup && isBanchat && !itsMe && !isOwner) {return}

//Console log
if(!isCmd && !isAllMedia && !isReaction && budy.length < 8000 && type !== 'protocolMessage') logs.message(conn,m,budy,AntiSpam)
if(isCmd) logs.commands(m,command) 
    

//-------- ONLY GROUP ---------\\
//By lana
const onlyGroup = async() => {
conn.sendMessage(from, {
text: `${ucapanWaktu}kak ${pushname}\nFitur ini hanya dapat digunakan di group\n\n *Silahkan Menggunakan Fitur Tersebut Di Dalam Group*!\n

- Link Channel : https://whatsapp.com/channel/0029VagJFAn1dAwCQYKodZ14
- Link Group Bot : https://chat.whatsapp.com/LFbp0YPFkdNJ9kIx43VK1t`}, {quoted: m})
  }

//----------------- REPLY TYPE 1 ------------------\\
  
//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "m"){
var setQuoted = m
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}

 async function setReply(teks,member = []){
//let photo = fotoRandom.getRandom()
let contextInfo = {
forwardingScore: 1,
isForwarded: true,
mentionedJid:member,
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName
},
externalAdReply:{
showAdAttribution: false,
title: `BOT WHATSAPP `,
body:`By Dees Pedia`,
sourceUrl:`des.pw`,
mediaType: 1,
renderLargerThumbnail : false,
thumbnail: fs.readFileSync('./stik/reply.jpg'),
}
}
conn.sendMessage(from, { contextInfo,mentions: member, text: teks}, { quoted: m })

}

 //----------------- REPLY TYPE 2 ------------------\\

const setReply2 = async(result,member = []) =>{ 
let translate = require('@vitalets/google-translate-api');
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
  
if (language == "id"){
  
if (!sender.startsWith("62")){
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: language,})
var teks = toks.text
} 

let contextInfo = {
forwardingScore: 999, 
isForwarded: false, 
mentionedJid: member,
externalAdReply:{
showAdAttribution: true, 
title: `${lananih}`,
body:`${lannn}`,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`${lanabotz}`
}
}
if(replyType === "web"){
conn.sendMessage(from, { contextInfo,mentions: member, text: teks }, { quoted: m })
} else if(replyType === "web2"){
conn.sendMessageV2(from, {contextInfo,mentions: member,text: teks},{quoted: m })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: m });
} else if(replyType === "quoted"){
conn.sendMessage(from,{ mentions: member,text: teks}, { quoted: setQuoted });
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
 
	
const math = (teks) => {
return Math.floor(teks)
}  
      


//onlyOwner
const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}

  
//Bot tidak bisa di akses di pc kecuali premium



 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
await sleep(3000)
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
await conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   

  
 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
const antivirus  = require('./antivirus.js')  
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await conn.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
}

  
//ANTI DELETE 
if(type == 'protocolMessage' && isAntidelete){
//Log(m.message.protocolMessage)
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] == undefined) return
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
}
}


//ANTI VIEWONCE 
if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
const { downloadContentFromMessage } = (await import('baileys')).default
if(isQuotedViewOnce){
var view = m.quoted.message
} else {
var view = m.message.viewOnceMessage.message
} 

let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
} else if (/image/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
}
}

  
  
//===================================================================//




const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

  
//ANTI SPAM BERAKHIR
if(_spam.Expired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}

_spam.Expired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && _spam.check("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
return console.log(chalk.bgYellowBright(chalk.black("[  SPAM  ]")),"antispam Case aktif")
}

//ANTI SPAM PRIVATE CHAT
if(antiSpam && isCmd && _spam.isFiltered(from) && !isGroup && !itsMe && !isOwner){
_spam.add("Case",senderNumber, "15 s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && _spam.isFiltered(from) && isGroup && !itsMe && !isOwner) {
_spam.add("Case",senderNumber, "15s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) _spam.addFilter(from)



//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 


//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}

		
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: m})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await conn.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mpeg' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//AUTO BIO BOT
if(settings){
} else global.db.data.settings['settingbot'] = { status: new Date() * 1, }
if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
const {kyun} = await import("../lib/myfunc.js")
let _uptime = process.uptime() 
let uptime = kyun(_uptime);
let bio = `Runtime ${uptime} | Mode: ${publik? 'Public' : 'self'} | user total ${Object.keys(db.data.users).length}`
await conn.updateProfileStatus(bio).catch(_ => _)
settings.status = new Date() * 1
}

 

//AUTO DEL VIRTEX
if(m.virtex) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(chalk.black("[ VIRTEXT ]")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
 

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('+212')
if (nomerAsing) {
console.log(`Nomer asing dari ${senderNumber}`)
await m.reply("you are not allowed to using this bot")
if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
return conn.updateBlockStatus(sender, "block") 
} 


//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!_data.checkDataName("premium", "", DataId)) { 
await _data.createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!_data.checkDataName("commands", "", DataId)) { 
await _data.createDataId("commands", DataId)
}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!_data.checkDataName("limit", "", DataId)) { 
await _data.createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
conn.sendMessage(from,{text:`Limit kamu tersisa ${user.limit}`}, {quoted: m})
}
  
}
}

//USER AFK
if (user && user.afk > -1) {
setReply(`Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 setReply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
} 

//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!_spam.check("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
conn.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}


  

//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}})
}

//Auto VN Online  
if(db.data.audio[budy]) {
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, waveform:  [
0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,
35, 51, 67, 73, 73, 25, 18, 58, 75, 72, 26,  0,
27, 56, 58, 43, 12, 23, 35, 49, 62, 67, 63, 18,
2, 16, 39, 45, 43, 31, 21, 36, 57, 71, 70, 67,
23, 49, 36,  6, 17, 39, 50, 52, 45, 27, 26, 50,
51, 49, 49, 49
], mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}








//NEW ANTI SPAM
conn.spam = conn.spam ? conn.spam : {}
let chat = global.db.data.chats[m.chat]
if (chat && chat.antispam) {
if (m.sender in conn.spam) {
conn.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - conn.spam[m.sender].lastspam > 10) {
if (conn.spam[m.sender].count > 10) {
//global.db.data.users[m.sender].banned = true
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let caption = `Kamu telah di banned *@${who.split("@")[0]}* karena melakukan spam, Jangan spam kak!`
setReply(caption,conn.parseMention(caption) )
  //conn.sendButton(m.chat, caption, wm, null, [['Matikan AntiSpam', '/disable antispam']], m, { mentions: conn.parseMention(caption) })
}
conn.spam[m.sender].count = 0
conn.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}
} else conn.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}
}
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/lana.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}
  
//Auto Hit 
_data.expiredCmd(hitnya, dash)
const thisHit = `${_data.getHit("run", hitnya)}` 
if(isCmd){
db.data.users[sender].hit += 1
_data.cmdAdd("run", "1d", hitnya)
_data.Succes(toFirstCase(command), dash, allcommand)
}








try{
switch(command) {

//---------------- BATAS DARI AREA CASE -------------------\
    

  /**
  * Created by Maulana / Lana
  * Base : Dittaz & Irfan Haryanto
  * Contact me on WhatsApp wa.me/6281775445373
  * Subscribe me on Youtube : https://youtube.com/@maulanabot
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/

  case 'help':
  case 'menu': {
let anu = `「 Hi, ${pushname}👋 」
 「 ${ucapanWaktu} 」

> Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
> Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
> Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
> Balance : Rp  *${db.data.users[sender].balance.toLocaleString()}*
> Library : ${baileysVersion}
> Total Feature : ${totalFitur()}
≻ Total User : ${Object.keys(db.data.users).length}

 `+readmore+`

${nan}
${non} *OTHER MENU*
${nin} tqto 
${nin} sc  _<gratis>_
${nin} del
${nin} donate
${nin} donasi
${nin} sewa _<sewabot>_
${nin} ping
${nin} speed
${nin} owner
${nin} rules
${nin} runtime
${nin} 
${nah}


${nan} AI MENU
${nin} ai  _<teks>_
${nin} remini  _<Image>_
${nin} tohd  _<image>_
${nah}


${nan}
${non} *STALKER MENU*
${nin} igstalk
${nin} ttstalk
${nin}
${nah}

${nan}
${non} *DOWNLOAD MENU*
${nin} play  _<text>_
${nin} tiktok  _<url>_
${nin} ytmp3  _<url>_
${nin} ytmp4  _<url>_
${nah}


${nan}
${non} *GROUP MENU*
${nin} add   _*<number>*_
${nin} kick 
${nin} gc  _*open/close*_
${nin} revoke
${nin} linkgc
${nin} antilink
${nin} promote  _*<tag>*_
${nin} demote   _*<tag>*_
${nin} setppgrup
${nin} tagall 
${nin} hidetag
${nin} 
${nah}

${nan}
${non} *USER MENU*
${nin} limit
${nin} claim
${nin} shop
${nin} buyglimit
${nin} buylimit
${nah} 

${nan}
${non} *FUNN MENU*
${nin} jadian
${nin} tagme
${nin} jodohku
${nin} totag
${nin} reqtag
${nin} ngaceng
${nin} silit
${nin} bodoh
${nin} lesby
${nin} playboy
${nin} playgirl
${nin} monyet
${nin} mastah
${nin} newbie
${nin} bangke
${nin} sange
${nin} sangean
${nin} wibu
${nin} bocep
${nin} jomblo
${nin} slebew
${nin} kentut
${nin} bencong
${nin} ngakak
${nin} nganggur
${nin} pantek
${nah}



${nan}
${non} *MAKER MENU*
${nin} qc  _*<text>*_
${nin} sticker  _*<reply image>*_
${nin} toimg   _*<reply image>*_
${nin} toptt  _*<reply audio>*_
${nin} tomp3  _*<reply>*_
${nin} tomp4  _*<reply>*_
${nah}


${nan}
${non} *RANDOM MENU*
${nin} pinterest   _*<search>*_
${nin} wallpaper   _*<search>*_
${nin} quotesimage  _*<search>*_
${nin}
${nin}
${nin} 
${nah}


${nan}
${non} TOLS MENU
${nin} ss
${nin} ssfull
${nin} githubdl
${nin} gitclone
${nah} 

${nan}
${non} *OWNER MENU*
${nin} clearsesi
${nin} hapususer
${nin} hapuserror
${nin} hapusban
${nin} bcgc  _*<teks>*_
${nin} join   _*<link>*_
${nin} out
${nin} band   _*<tag/reply/number>*_
${nin} unban   _*<tag/reply/number>*_
${nin} setppbot   _*<image>*_
${nin} self    _*<owner>*_
${nin} public _*<owner>*_
${nin} >   _*<owner>*_
${nin} $  _*<owner>*_
${nah}


❏ *THANKS TO*
• *Lana Bot* ( Author )
• *Ditaz*
• *Irfan Haryanto*


📝 Note : _*Script ini gratis buat kalian , tidak untuk di perjual belikan!!*_
 
`
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `Nero Md`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`https://chat.whatsapp.com/Cca030FqbWc0IjBO9PqnbA`
}}, image: { url: `${maulana}` }, caption: anu}, { quoted: m })
}
break

        
        
    
case  'clearsesi':{
if (!itsMe && !isOwner) return onlyOwner()
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah di folder session")     
});

}
break

    case 'ssfull':{
        if (!q) return reply(`Contoh:\n${prefix + command} https://des.pw`);   
        reply(mess.wait)
        conn.sendMessage(from, { image: { url: `https://image.thum.io/get/width/1900/crop/1000/fullpage/${q}`}, caption: "Nih bang" }, { quoted: m });
        }
        break;

    
case 'remini':
case 'tohd':{
 try{
 if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if (isImage || isQuotedImage) {
setReply(mess.wait)
const media = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
let a = `https://skizo.tech/api/remini?apikey=lanagalau&url=${anu}`

conn.sendMessage(m.chat, { image: { url: a}, caption: `Nih` }, { quoted: m})
} else {
reply(`Kirim/Reply gambar dengan Caption ${prefix + command}`);
}
  } catch (e){
    console.log(e)
    reply('Maaf foto kurang jelas, coba foto lain')
  }
}
db.data.users[sender].limit -= 1 // -1 limit
break
        
case  'ttstalk':
			if (args.length == 0) return reply(`Example: ${prefix + command} whyzzzxy`)
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Nickname : ${data.result.nickname}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Followings : ${data.result.followings}\n`
				caption += `Likes : ${data.result.likes}\n`
				caption += `Video : ${data.result.video}\n`
				caption += `Bio : ${data.result.bio}\n`
				conn.sendMessage(from, { image: { url: data.result.user_picture }, caption })
			})
			break
    


 
	
	
	
	case 'githubdl':{
	if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
	let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
	console.log("Done")
	setReply(`Waiting for compress to zip`)
	await conn.sendMedia (from, url, dev, {fileName: q.split("|")[1]})
	}
	break 
	  
	      

	  
	case 'gitclone':
	try{
	let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
	if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
	if (!regex.test(q)) return setReply('link salah!')
	let [, user, repos] = q.match(regex) || []
	let repo = repos.replace(/.git$/, '')
	let url = `https://api.github.com/repos/${user}/${repos}/zipball`
	let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
	setReply(`*Mohon tunggu, sedang mengirim repository..*`)
	await conn.sendMedia (from, url, dev, {fileName: filename})
	} catch (err){
	setReply(mess.error.link)
	}
	break  
    

//==========endCaseAi==========//
    
/**
  * script Created by Maulana
  * Base : Dittaz & Irfan Haryanto
  * Contact me on WhatsApp wa.me/6281775445373
  * Subscribe me on Youtube : https://youtube.com/@maulanabot
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/

case 'speed':
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break   
		   
case 'runtime':{
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
let teks =`
- System aktif selama ${runtime(process.uptime())}
- Bot aktif selama ${clockString(time)}
`
setReply(teks)
}
break
    

  case 'ubahreply':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/reply.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah thumbnail`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}u ahreply`);
	}
	}
	break;

    
//  ========= *FUNN MENU* =========//
case 'hapuserror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
_error.clear(listerror)
break
case 'hapususer':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all User")
db.data.users = {}
break
case 'hapusban':{
if (!isOwner) return onlyOwner()
setReply("Sukses clear all Ban")
ban.length = 0
}
break
//=========== maker menu ============//

case 's':
case   'sticker':
if (isImage || isQuotedImage || isVideo || isQuotedVideo) {
if (quoted.seconds > 11) return m.reply('Maksimal 10 detik!')
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: kualitas, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break 

case 'toimg': {
if (!isQuotedSticker) return setReply('Reply stickernya')
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await conn.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break 

case 'tomp3':
if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: m })
fs.unlinkSync(run)
})
} else {
setReply("Reply videonya")
}
break 






  case 'donate':
  case 'donasi':
    let sii = `

Haii *${pushname}*, jika kamu ingin bantu donasi untuk bot ini, kamu bisa top up di web des.pw
    
    `
  reply(sii)
    break

  
case 'buylimit':{

if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].limit += math(q)
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}`)
}
break
case 'buyglimit':{

if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 700)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].glimit += math(q)
setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}`)
}
break

case 'limit':    
case 'ceklimit':{
let teks = `*Name :* ${pushname}\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
Saldo : *Rp ${db.data.users[sender].balance.toLocaleString()}*
Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}

Kamu dapat membeli limit dengam kirim balik perintah di bawah ini: !
.claim


dan jika kamu ingin membeli limit langsung kirim balik perintah :

.shop.`

conn.sendMessage(from, {text: teks }, {quoted: m})
}
break
    
case 'claim':
case 'daily':{

const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
 global.db.data.users[m.sender].exp += isPremium ? prem : free
 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
setReply(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break 
  
case 'tomp4':
case 'tovideo':
if (isQuotedSticker) {
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${baileysVersion}`,
body:`Runtime ${clockString(time)} `,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`${fakeUrl}`
}}, video: fs.readFileSync(outMp4), caption: `*[ Done kak ]*`}, { quoted: m })	
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
}) 
}
break
    


//  ========= *FUNN MENU* =========//
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
case 'tagme':{
if (!isGroup) return onlyGroup()
let menst = [sender]
conn.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'totag':{
if (!isGroup) return onlyGroup()
if (!mentionByReply) return setReply('Reply targetnya')
let menst = [mentionByReply]
conn.sendMessage(from, { text: `@${mentionByReply.split('@')[0]}`, mentions: menst })
}
break
case 'reqtag':{
if (!isGroup) return onlyGroup()
if (!mentionByReply) return setReply('Reply targetnya')
if (!q) return setReply('Text nya ?')
let menst = [mentionByReply]
conn.sendMessage(from, { text: `${q} @${mentionByReply.split('@')[0]}`, mentions: menst })
}
break
case 'jadian': {
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee 🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
case 'ngaceng':
case 'silit':
case 'bodoh':
case 'lesby':
case 'playboy':
case 'playgirl':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangke':
case 'sange':
case 'sangean':
case 'wibu':
case 'jomblo':
case 'slebew':
case 'kentut':
case 'bencong':
case 'ngakak':
case 'nganggur':
case 'pantek': {
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let org = member[Math.floor(Math.random() * member.length)]
conn.sendMessage(from, { text: `Yang paling *${command}* di sini Adalah @${org.split("@")[0]}\n`, mentions: [org]}, { quoted: m }) 
}
break
    

    
case  'qc':{
let tekscuy = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!tekscuy) return setReply(`Uhm... teksnya mana?`)

const text = `${tekscuy}`
const username = await conn.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await conn.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
conn.sendImageAsSticker(m.chat, buffer, m)
})
}
break

//=========== owner menu ============//



case 'join':{
if(!isOwner) return setReply(mess.only.owner)
let link = q.startsWith("http")
if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
let Url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break

case 'out':
if (!isGroup) return 
if (!isOwner) return onlyOwner()
await conn.groupLeave(from)
break 

case 'ban':
case    'banned':{
if (!isOwner) return onlyOwner()
let alasan = ""
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
let Name = await conn.getName(woke)
if(_ban.check(woke, ban)) return setReply("User sudah di ban sebelumnya")
_ban.add(Name,calender,woke,alasan, ban)
setReply( `Berhasil banned ${woke}`);
} else if(users){
let alasan = mentionByReply? q : mentionByTag? q.split("|")[1] : ""
if(alasan == undefined) alasan = "Tidak ada"
let Nomer = `${users.split("@")[0]}`
if(_ban.check(Nomer, ban)) return setReply("User sudah di ban sebelumnya")
let Name = await conn.getName(users)
if(ownerNumber.includes(users)) return setReply("Tidak bisa membanned owner")
_ban.add(Name,calender,Nomer,alasan, ban)
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'unban':
case   'delban':
case   'unbanned':{
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner') 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if(!_ban.check(woke, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else if(users){
let Nomer =`${users.split("@")[0]}`
if(!_ban.check(Nomer, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(Nomer, ban)             
setReply(`Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break 

case 'setppbot':{
if (!isOwner) return setReply(mess.only.owner)
if (isImage || isQuotedImage) {
if(q == 'full'){
const media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
} else{
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let data =  await conn.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
}
} else  {
setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
}
}
break 



case 'public':
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break
			   
case 'self':
if (!isOwner) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break 

case '>': {
if (!isOwner) return setReply(mess.only.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break 
case  '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break

//=========== group menu ============//

  case 'kick': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'add': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
}).catch((err) => setReply(jsonformat(err)))
}
break 

case 'revoke':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupRevokeInvite(from).then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break

 case 'linkgc':{
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.Badmin)
let Url = await conn.groupInviteCode(from).catch(() => setReply(mess.error.api))
let asu = 'https://chat.whatsapp.com/'+Url
setReply(asu)
}
break

    case  'linkgc':{
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return reply(mess.Badmin)
	var url = await conn.groupInviteCode(from).catch(() => reply(mess.error.api))
	let link = 'https://chat.whatsapp.com/'+url
	setReply(link)
	 }
	break
  
case 'antilink':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antilink = true
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
db.data.chats[from].antilink = false
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
  
}
}
break;  

case 'demote': 
case    'unadmin':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'promote':
case     'admin': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break 

case 'setppgroup': 
case 'setppgrup': 
case 'setppgc':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(isQuotedImage){
const media = await conn.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to : from, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
} else setReply("Reply fotonya")
}
break 

  case 'gc':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!q) return reply(`Contoh : ${command} close/open`)
if (args[0] == "close") {
conn.groupSettingUpdate(from, 'announcement')

} else if (args[0] == "open") {
conn.groupSettingUpdate(from, 'not_announcement')
} else {
setReply(`Contoh : ${command} close/open`)
}
break 

	case 'infoall': case 'tagall':
    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if(!q) {
	var inpo = "No inpo"
	} else var inpo = q
	let members_id = []
	let tes = '\n'
	await groupMembers.map( i => {
	tes += `┣ ⬣@${i.id.split('@')[0]}\n`
	members_id.push(i.id) })
	mentions(`
	*From :* ${pushname}
	
	 Info :  ${inpo}
	
	Total Member : ${groupMembers.length} 
	
	┏━⬣`+tes+`┗━⬣`, members_id, false)
	break 

case 'hidetag':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
	let mem = [];
	groupMembers.map( i => mem.push(i.id) )
	conn.sendMessage(from, { text: q ? q : '', mentions: mem })
	break 

//========= random menu ============//

case 'pinterest':
			if (args.length == 0) return reply(`Example: ${prefix + command} cewek cantik `)
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${args}` } })
			break

	case 'wallpaper':
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
			break

case 'elaina':
		case 'quotesimage':
			conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` } })
			break
//=========== other menu ============//

case 'd':
case 'del':
case 'delete':{

if (!isGroup) return onlyGroup()
//if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
Log(chatUpdate)
if (!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
} 
}
break 

case 'owner':{
					conn.sendKontak(from, global.nomerOwner, global.ownerName)
				}
				break

/**
  * Created by Maulana / Lana
  * Base : Dittaz & Irfan Haryanto
  * Contact me on WhatsApp wa.me/6281775445373
  * Subscribe me on Youtube : https://youtube.com/@maulanabot
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/

case 'ping':{
const used = process.memoryUsage()
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`.trim()
conn.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption: respon,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: fs.readFileSync('./stik/reply.jpg'),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
}
}
}} , { quoted: m })
}
break



//========= download menu ==========//

case  'tiktok': case 'ttnowm': case 'tiktoknowm':  { 

if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
//setReply (mess.wait) 
let data = await fetchJson (`https://skizo.tech/api/tiktok?apikey=lanagalau&url=${q}`)

let tkes = `*------------ TIKTOKNOWM ]-----------*

𖦹 *Region:* ${data.data.region}
𖦹 *Judul:* ${data.data.title}
𖦹 *Durasi:* ${data.data.duration}
𖦹 *Music:* ${data.data.music}` 
conn.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: m})
 if (data.type === "image") {
for (let i of data.fallback.images) {
await conn.sendMessage(from, {image: {url: i}}, {quoted: m})
}
}
    
await conn.sendMessage(from, { audio: {url: data.data.music}, mimetype: 'audio/mp4'}, { quoted: m}) 
await sleep(2000)
} 

db.data.users[sender].limit -= 1 // -1 limit
break

case  'play':{
if(!q) return setReply("Teksnya mana")
setReply(`_L O A D I N G . . . . ., tungguin napa ett dah kaga sabaran banget loh_`)
let rus = await yts(q)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(audio[0].contentLength) > 100000000 ) return setReply(`Bjir sizenya ${FileSize(audio[0].contentLength)}\nAu ah ga mao download 😤`)
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}
var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

    downloadMp33(res.url) 

	}
	break
    


case 'ytmp4':
try{
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")

if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}

let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

Title : ${anu.all[0].title}
Ext : 360p
Size : ${FileSize(format.contentLength)}
ID : ${videoId}
Duration : ${anu.all[0].timestamp}
Viewers : ${h2k(anu.all[0].views)}
Upload At : ${anu.all[0].ago}
Author : ${anu.all[0].author.name}
Channel : ${anu.all[0].author.url}
Url : ${anu.all[0].url}
Description : ${anu.all[0].description}`
await conn.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: m})
downloadMp4(q)
} catch(err){
setReply(`${err}`)
}
break



case 'ytmp3':
{
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Musik tidak di temukan")
try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
}

try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

Title : ${info.videoDetails.title}
Size : ${FileSize(format[0].contentLength)}
ID : ${videoId}
Duration : ${anu.all[0].timestamp}
Viewers : ${h2k(anu.all[0].views)}
Upload At : ${anu.all[0].ago}
Author : ${anu.all[0].author.name}
Channel : ${anu.all[0].author.url}
Url : ${anu.all[0].url}
Description : ${anu.all[0].description}`
await conn.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: m})
downloadMp3(q)
} catch(err){
setReply(err)
}
}
break 



case 'rules':
reply(`Syarat dan Ketentuan menggunakan *${global.botName} Adalah :*

1. Nama dan nomer user ${global.botName}
     akan Kami simpan di dalam 
     server selama bot aktif
     

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${botName}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau bisa
     juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
7. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke owner
      
8. User dilarng keras menelpon, video call, 
     spam, jika melanggar maka kamu akan 
     terkena block dan banned

9. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`)
     break

  case 'sewa':
  case 'sewabot':
  let lanaa = `Haii kak, Berikut adalah list harga untuk sewa botz


*Harga 1*
- Pengguna baru Rp. 3.000 
- Masa aktif 15 Hari

*Harga 2*
- Pengguna baru Rp. 6.000
- Masa aktif 30 Hari

𝗡𝗢𝗧𝗘 : 

Bot on 24 jam tapi kadang 
juga mati klo lgi ada error 
atau lgi perbaikan bug.

Kalo mau sewa bisa chat
owner Bot`

conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `Nero-Md`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`https://chat.whatsapp.com/Cca030FqbWc0IjBO9PqnbA`
}}, image: { url: `${maulana}` }, caption: lanaa}, { quoted: m })
break


//------ BATAS DARI AREA CASE ------\\   
default:
if (isCmd) {
await _data.Nothing(toFirstCase(command), dash, allcommand)
const stringSimilarity = require("string-similarity");
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
setReply(`Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`)
} 


    
}//Akhir switch command

/*


*/

//Auto sticker  
if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await conn.sendMessage(from, { sticker: sticBuffer }, {
quoted: m,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}



//ketika ada yang invite/kirim link grup di chat pribadi
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let lana = `*Mau Ngapain bang kirim link group* 🗿🗿😋`
//conn.sendMessage(from, image: { url: 'https://telegra.ph/file/fef62722d61914841c6ce.jpg' }, caption: lanaa},  quoted: m })
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `Nero Md`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`https://chat.whatsapp.com/Cca030FqbWc0IjBO9PqnbA`
}}, image: { url: 'https://telegra.ph/file/41fcab9da653ec49dd2e5.jpg' }, caption: lana}, { quoted: m })
}

//User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}
 




} catch (err){
Log(err)
//add to dashboard
if(isCmd) _data.Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Waduh Bangg!! Gawat Module ${module} belom di install
silakan Pilih salah satu di bawah ini

> ${prefix}$ npm i ${module} `
  
let nono = {
  text: teks,
  headerType: 1
  }
  
  return await conn.sendMessage(m.key.remoteJid, nono , {quoted: m})
}
await setReply(`*SYSTEM BOTZ ERROR*

\n\n${e}\n\n© Nero-Md`) 
if(_error.check(err.message, db.data.listerror)) return
_error.add(err.message, command, db.data.listerror)
if(autoblockcmd){        
_blockcmd.add(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`* Laporan Bug ⚠️ *
Nama : ${pushname}
Nomer : wa.me/${senderNumber}
Info Laporan :\n       _${e}_
Command : ${prefix}${command}
Time : ${timeWib} Wib
Query : ${tetek}
Quoted : ${media}
Group : ${isGroup?`${groupName}`:'Di private chat'}
ID : ${from}
Link Group : ${yeh}
`

let tolol = {
text: teks,
headerType: 1
}

await conn.sendMessage(Ownerin, tolol , {quoted: fkontak})

if(!autoblockcmd){
await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, m, {caption: "System Error bg"})
await fs.unlinkSync(media)
}

} 
}		







} catch(err){
Log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
}

  

}//Akhir export default




const __filename = new URL('', import.meta.url).pathname
//const __dirname = new URL('.', import.meta.url).pathname
let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(chalk.black("[  UPDATE ]")),chalk.white(`${__filename}`) )
delRequireCache(file)
delete require.cache[file]
import(`${file}?update=${Date.now()}`)
})

/**
  * Created by Maulana / Lana
  * Base : Dittaz & Irfan Haryanto
  * Contact me on WhatsApp wa.me/6281775445373
  * Subscribe me on Youtube : https://youtube.com/@maulanabot
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/