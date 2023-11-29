export async function GET(request: Request) {
  const appId = 'wxb71da21cc9ed0ed0'
  const appsecret = '2903aead8e302e069e13d66e8824ba7b'
  const res = await fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appId+'&secret='+appsecret)
  const data = await res.json()
  return Response.json({ data })

}

