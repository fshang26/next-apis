"use client"
import styles from './page.module.css'
import { useEffect } from 'react'
import wx from 'weixin-js-sdk'

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const r = await fetch('https://next-apis-five.vercel.app/api')
      //const r = await fetch('http://localhost:3000//api')
      const j = await r.json()
      setTimeout(() => {
        wx.config({
          //beta: true,
          debug: true,
          appId: j.appId,
          nonceStr: j.nonceStr,
          timestamp: j.timestamp,
          signature: j.signature,
          jsApiList: [
            'downloadImage'
          ]
        })
        wx.ready(() => {
          alert('1')
          wx.downloadImage({
            serverId: 'https://www.apple.com/v/home/bf/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg',
            isShowProgressTips: 1,
            success: function (res: any) {
              alert('3')
              alert(res)
            },
            fail: function (err: any) {
              alert(JSON.stringify(err))
            }
          })
        })

        wx.error((result: any) => {
          const error = new Error(`wx.config error: ${JSON.stringify(result)}`)
          //error.result = result
          alert(JSON.stringify(result.errMsg))
          //alert(JSON.stringify(result))
        })

      }, 1000)
    }
    fetchData().catch(console.error);
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Node API test
      </div>
    </main>
  )
}
