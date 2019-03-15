const app = getApp()

Page({
  data: {
    history: []
  },
  onTapItem:function(e){
    // console.log(e.currentTarget)
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },
  onShow: function(e){
    let obj =wx.getStorageSync('history') //query,result
    // console.log(obj)
    this.setData({history:obj})
  }
})