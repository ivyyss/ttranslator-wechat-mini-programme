import md5 from './md5.min.js'
const appid ='20190312000276402'
const key ='bHPsmODVhCuElk_V2WZ6'

module.exports = function translate(q, { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' }){
  return new Promise((resolve,reject)=>{
    let salt = Date.now()
    let sign = md5(`${appid}${q}${salt}${key}`)

    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate', 
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res) {
        // console.log('哈哈哈成功，拿到了翻译结果')
        // console.log(res)
        if(res.data&&res.data.trans_result){
          resolve(res.data)
          }else{
            reject({status:'error',msg:'翻译失败'})
            wx.showToast({
              title: '翻译失败',
              icon: 'none',
              duration:3000
            })
          }
      },

      fail(){
        reject({ status: 'error', msg: '翻译失败' })
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000
        })
      }

    })
  })
}

