
import { segment } from 'oicq';
import fs from 'fs';

/**
 * 云崽插件库：https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index （gitee）   https://github.com/yhArcadia/Yunzai-Bot-plugins-index  （github）
 * 插件目前仅在小范围点对点共享，请勿传播
 */

const Botname = '水儿';
const mag = '咏唱中...'
const timeout = 15000;

export const rule = {
  meinv: {
    reg: "^(#|来点)+(美女)$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  },
   meitu: {
    reg: "^(#|来点)+(美图)$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  },
   jur: {
    reg: "^(#|来点)+(巨乳)$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  },
   mcn: {
    reg: "^(#|来点)+(网红图)$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  },
    erci: {
    reg: "^(#|来点)+(二次元)$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  },
    ppurl: {
    reg: "^(#|来点)+(福利图)$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  },
    onoff: {
    reg: "^#*设置撤回(开启|关闭)$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  },
     Help: {
    reg: "^#*涩涩帮助$",  //匹配消息正则，命令正则
    priority: 50, //优先级，越小优先度越高
    describe: "", //【命令】功能说明
  }
}
  export async function Chehui(msgRes,e){
    if (timeout!=0 && msgRes && msgRes.message_id){
      let target = null;
      if (e.isGroup) {
        target = e.group;
      }else{
        target = e.friend;
      }	
    if (target != null){
        setTimeout(() => {
          target.recallMsg(msgRes.message_id);
        },timeout);
       }
    }
    }
  export async function meinv(e){
    await e.reply(`${Botname}${mag}`)
    let heis = fs.readFileSync('./resources/result/meinv.txt','UTF-8')
    meinv = meinv.split('\n')
    let num= Math.round(Math.random() * (meinv.length -1))
    let msg = [
      segment.image(meinv[num])
    ]
        let msgRes =await e.reply(msg);
        this.Chehui(msgRes,e)
        return true
      }
  export async function meitu(e){
    await e.reply(`${Botname}${mag}`)
        let meitu = fs.readFileSync('./resources/result/meitu.txt','UTF-8')
        meitu = meitu.split('\n')
        let num= Math.round(Math.random() * (meitu.length -1))
        let msg = [
          segment.image(meitu[num])
        ]
        let msgRes =await e.reply(msg);
        this.Chehui(msgRes,e)
        return true
      }
  export async function jur(e){
    await e.reply(`${Botname}${mag}`)
    let jur = fs.readFileSync('./resources/result/jur.txt','UTF-8')
    jur = jur.split('\n')
    let num= Math.round(Math.random() * (jur.length -1))
    let msg = [
      segment.image(jur[num])
    ]
    let msgRes =await e.reply(msg);
    this.Chehui(msgRes,e)
    return true
  }
  export async function mcn(e){
    await e.reply(`${Botname}${mag}`)
    let mcn = fs.readFileSync('./resources/result/mcn.txt','UTF-8')
    mcn = mcn.split('\n')
    let num= Math.round(Math.random() * (mcn.length -1))
    let msg = [
      segment.image(mcn[num])
    ]
    let msgRes =await e.reply(msg);
    this.Chehui(msgRes,e)
    return true
  }
  export async function erci(e){
    await e.reply(`${Botname}${mag}`)
    let erci = fs.readFileSync('./resources/result/erci.txt','UTF-8')
    erci = erci.split('\n')
    let num= Math.round(Math.random() * (erci.length -1))
    let msg = [
      segment.image(erci[num])
    ]
    let msgRes =await e.reply(msg);
    this.Chehui(msgRes,e)
    return true
  }
  export async function ppurl(e){
    await e.reply(`${Botname}${mag}`)
    let ppurl = fs.readFileSync('./resources/result/ppurl.txt','UTF-8')
    ppurl = ppurl.split('\n')
    let num= Math.round(Math.random() * (ppurl.length -1))
    let msg = [
      segment.image(ppurl[num])
    ]
    let msgRes =await e.reply(msg);
    this.Chehui(msgRes,e)
    return true
  }
  export async function onoff(e) {
    let onoff;
    if (e.msg.indexOf("设定") > -1) {
      onoff = e.msg.replace("设定撤回", "");
    } else if (e.msg.indexOf("设置") > -1) {
      onoff = e.msg.replace("设置撤回", "");
    }  if (onoff == '关闭' && e.isMaster) {
      e.reply(`自动撤回已关闭`);
      timeout = 0;
    }
  }
  export async function Help(e){
    const msg = [
      '已收藏以下好看的',
      '\n',
      '美女,',
      '美图,',
	  '二次元',
      '福利,',
      '网红图',
    ]
    await e.reply(msg,true)
  }

