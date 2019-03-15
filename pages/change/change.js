//change.js
const util = require('../../utils/util.js')
const app=getApp()


Page({
  data: {
    curLang:{},
    langList:app.globalData.langList
  },
  onShow:function(e){
    this.setData({curLang:app.globalData.curLang})
  },
  onTapItem:function(e){
    let chosedLangObj=e.currentTarget.dataset //index,lang,chs
    wx.setStorageSync('language', chosedLangObj)
    this.setData({curLang: chosedLangObj})
    app.globalData.curLang=chosedLangObj
    wx.switchTab({
      url: '/pages/index/index',
    })
  } 
})
