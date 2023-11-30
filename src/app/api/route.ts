export async function GET(request: Request) {
  const appId = 'wxb71da21cc9ed0ed0'
  const appsecret = '2903aead8e302e069e13d66e8824ba7b'
  const tokenRes = await fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appId+'&secret='+appsecret)
  const token = await tokenRes.json()

  const ticketRes = await fetch('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+token.access_token+'&type=jsapi')
  const ticket = await ticketRes.json()

  const t = ticket.ticket
  let o = {
    appId: appId,
    nonceStr: 'hello word',
    timestamp: new Date().getTime() / 1000 + '',
    signature: ''
  }
  //o.signature =
  return Response.json({ ticket })

}

