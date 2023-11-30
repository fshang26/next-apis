"use client"
import styles from './page.module.css'
import { useEffect } from 'react'

export default function Home() {
  let j = {}
  useEffect(() => {
    const fetchData = async () => {
      const r = await fetch('https://next-apis-five.vercel.app/api')
      //const r = await fetch('http://localhost:3000//api')
      j = await r.json()
    }
    fetchData().catch(console.error);
    setTimeout(() => {
      window.wx.config({
        //beta: true,
        debug: true,
        appId: j.appId,
        nonceStr: j.nonceStr,
        timestamp: j.timestamp,
        signature: j.signature,
        jsApiList: [
          'checkJSApi',
          'downloadImage'
        ]
      })
      window.wx.ready(() => {
        window.wx.downloadImage({
          serverId: 'https://www.apple.com/v/home/bf/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg',
          isShowProgressTips: 1,
          success: function (res) {
            alert('3')
            alert(res)
          },
          fail: function (err) {
            alert(JSON.stringify(err))
          }
        })
      })

      window.wx.error((result) => {
        const error = new Error(`wx.config error: ${JSON.stringify(result)}`)
        error.result = result
        alert(JSON.stringify(result.errMsg))
        alert(JSON.stringify(result))
      })

    }, 3000)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Node API test
      </div>
    </main>
  )
}
