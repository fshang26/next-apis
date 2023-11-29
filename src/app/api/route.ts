export async function GET(request: Request) {
  const appId = 'wx5b33d66eeaf3e794'
  const appsecret = '84c23d69a89cb38c4d61ec825714e2d4'
  const res = await fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appId+'&secret='+appsecret)
  const data = await res.json()
  return Response.json({ data })

}

