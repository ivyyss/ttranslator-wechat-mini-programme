//index.js
//获取应用实例
var translate = require('../../utils/api.js')
const app = getApp()

Page({
  data: {
    query: '',
    hideClearIcon: true,
    result:[],
    curLang:{}
  },
  onLoad: function (options) {
    // console.log('loading')
    // console.log(options.query)
    if (options.query) {
      this.setData({ query: options.query })
    }
  },
  onShow: function () { 
    // console.log(app.globalData)
    if (this.data.curLang!== app.globalData.curLang) {
     this.setData({curLang: app.globalData.curLang })
     this.onConfirm()
    }
  },

  onInput:function(e){
    this.setData({ 'query': e.detail.value})
    if(this.data.query.length > 0){
      this.setData({'hideClearIcon':false})
    }else{
      this.setData({ 'hideClearIcon': true})
    }
    // console.log(this.data.hideClearIcon)
  },
  onConfirm:function(e){
    if(!this.data.query) return
    translate(this.data.query,{from: 'auto', to: this.data.curLang.lang}).then(res=>{
      this.setData({'result':res.trans_result})

      let history =wx.getStorageSync('history')||[]
      history.unshift({query: this.data.query, result: res.trans_result[0].dst})
      history.length=history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    })
  },
  onTextClear:function(e){
    this.setData({'query':'',hideClearIcon:true})
  }
})
