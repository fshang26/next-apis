import sha1 from 'sha1'

export async function GET(request: Request) {
  const appId = 'wxb71da21cc9ed0ed0'
  const appsecret = '2903aead8e302e069e13d66e8824ba7b'
  const url = 'https://next-apis-five.vercel.app'
  const tokenRes = await fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appId+'&secret='+appsecret)
  const token = await tokenRes.json()

  return Response.json({ token })
  // const ticketRes = await fetch('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+token.access_token+'&type=jsapi')
  // const ticket = await ticketRes.json()

  // const t = ticket.ticket
  // let o = {
  //   appId: appId,
  //   nonceStr: 'hello word',
  //   timestamp: new Date().getTime() / 1000 + '',
  //   signature: ''
  // }
  // o.signature = sha1('jsapi_ticket='+t+'&noncestr='+o.nonceStr+'&timestamp='+o.timestamp+'&url='+url).toString();
  // return Response.json({ o })

}

