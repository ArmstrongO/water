import plugin from '../../lib/plugins/plugin.js'
import { segment } from 'oicq'
import fs from 'fs'

/**
 * 云崽插件库：https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index （gitee）   https://github.com/yhArcadia/Yunzai-Bot-plugins-index  （github）
 * 插件目前仅在小范围点对点共享，请勿传播
 */

let Botname = '水儿';
let mag = '咏唱ing...'
let timeout = 35000;

export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '给我康康',
      /** 功能描述 */
      dsc: '快给我看看',
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 50,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^看看黑丝',
          /** 执行方法 */
          fnc: 'meinv'
        },
        {
          reg:'^美图',
          fnc:'meitu'
        },
        {
          reg:'^看看白丝',
          fnc:'jur'
        },
        {
          reg:'^大水风',
          fnc:'mcn'
        },
        {
          reg:'^动漫',
          fnc:'erci'
        },
        {
          reg:'^(#|来个)+(福利图)$',
          fnc:'ppurl'
        },
        {
          reg:'^#*设定撤回(开启|关闭)',
          fnc:'onoff'
        },
		{
          reg:'^#?#查账号(.*)$',
          fnc:'shegong'
        },
        {
          reg:'^涩涩帮助',
          fnc:'Help'
        },
		{
          reg:'^社工库启动',
          fnc:'ShegongHelp'
        }
		
      ]
    })
  }

  async Chehui(msgRes,e){
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


  async meinv(e){
    await e.reply(`${Botname}${mag}`)
    let meinv = fs.readFileSync('./resources/result/meinv.txt','UTF-8')
    meinv = meinv.split('\n')
    let num= Math.round(Math.random() * (meinv.length -1))
    let msg = [
      segment.image(meinv[num])
    ]
    let msgRes =await e.reply(msg);
    if (!msgRes){return e.reply('咏唱失败了呢QwQ')}
    this.Chehui(msgRes,e)
    return true
  }


  async meitu(e){
    await e.reply(`${Botname}${mag}`)
    let meitu = fs.readFileSync('./resources/result/meitu.txt','UTF-8')
    meitu = meitu.split('\n')
    let num= Math.round(Math.random() * (meitu.length -1))
    let msg = [
      segment.image(meitu[num])
    ]
    let msgRes =await e.reply(msg);
    if (!msgRes){return e.reply('咏唱失败了呢QwQ')}
    this.Chehui(msgRes,e)
    return true
  }


  async jur(e){
    await e.reply(`${Botname}${mag}`)
    let jur = fs.readFileSync('./resources/result/jur.txt','UTF-8')
    jur = jur.split('\n')
    let num= Math.round(Math.random() * (jur.length -1))
    let msg = [
      segment.image(jur[num])
    ]
    let msgRes =await e.reply(msg);
    if (!msgRes){return e.reply('咏唱失败了呢QwQ')}
    this.Chehui(msgRes,e)
    return true
  }


  async mcn(e){
    await e.reply(`${Botname}${mag}`)
    let mcn = fs.readFileSync('./resources/result/mcn.txt','UTF-8')
    mcn = mcn.split('\n')
    let num= Math.round(Math.random() * (mcn.length -1))
    let msg = [
      segment.image(mcn[num])
    ]
    let msgRes =await e.reply(msg);
    if (!msgRes){return e.reply('咏唱失败了呢QwQ')}
    this.Chehui(msgRes,e)
    return true
  }


  async erci(e){
    await e.reply(`${Botname}${mag}`)
    let erci = fs.readFileSync('./resources/result/erci.txt','UTF-8')
    erci = erci.split('\n')
    let num= Math.round(Math.random() * (erci.length -1))
    let msg = [
      segment.image(erci[num])
    ]
    let msgRes =await e.reply(msg);
    if (!msgRes){return e.reply('咏唱失败了呢QwQ')}
    this.Chehui(msgRes,e)
    return true
  }


  async ppurl(e){
    await e.reply(`${Botname}${mag}`)
    let ppurl = fs.readFileSync('./resources/result/ppurl.txt','UTF-8')
    ppurl = ppurl.split('\n')
    let num= Math.round(Math.random() * (ppurl.length -1))
    let msg = [
      segment.image(ppurl[num])
    ]
    let msgRes =await e.reply(msg);
    if (!msgRes){return e.reply('咏唱失败了呢QwQ')}
    this.Chehui(msgRes,e)
    return true
  }


  async onoff(e) {
    let onoff;
    if (e.msg.indexOf("设定") > -1) {
      onoff = e.msg.replace("设定撤回", "");
    } else if (e.msg.indexOf("设置") > -1) {
      onoff = e.msg.replace("设置撤回", "");
    }  if (onoff == '关闭' && e.isMaster) {
      e.reply(`自动撤回已关闭`);
      timeout = 0;
    }  else if  (onoff == '开启' && e.isMaster) {
      e.reply(`自动撤回已开启`);
      timeout = 15000;
    }
  }

  async shegong(e) {
	/** e.msg 用户的命令消息 */
	logger.info('[用户命令]', e.msg)
	let msg = e.msg.replace("#查账号", "").trim()
	try {
		await e.reply(`正在查找……`)
		let url = `http://zy.xywlapi.cc/qqapi?qq=${msg}`
		let res = await fetch(url)
		if (!res.ok) {
			throw new Error('网络请求错误');
		}
		res = await res.json()
		await e.reply(`返回状态：${res.status}\n\n关联手机：${res.phone}\n\ntxt归属地解析：\n${res.phonediqu}`)
		this.Chehui(msgRes, e)
		return true;
	} catch (error) {
    logger.error(error);
    e.reply('查询发生错误，请稍后再试。');
    return false;
  }
}


  
  async Help(e){// 声明一个异步函数 Help，接收一个参数 e
    let msg = [ // 定义字符数组 msg，包含一个字符串
      '已收藏以下好看的，输入',
      '\n',
      '看看白丝,',
	  '看看黑丝，',
      '美图,',
	  '动漫,',
      '\n',
      '设定撤回开启',
      '\n',
      '设定撤回关闭',
    ]
    await e.reply(msg,true)//通过 e.reply() 方法回复消息，过滤掉 @bot 判断条件
  }
  
  async ShegongHelp(e){// 声明一个异步函数 Help，接收一个参数 e
  
    let msg = [ // 定义字符数组 msg，包含一个字符串
      '\n',
	  '社工系统',
      '\n',
      '直接输入:查账号***',

    ]
    await e.reply(msg,true)//通过 e.reply() 方法回复消息，过滤掉 @bot 判断条件
  } 
  
  
}

