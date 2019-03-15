//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
   
  globalData: {
    curLang: {},
    langList: [
      {
        'chs': '英文',
        "lang": 'en',
        "index": 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        "index": 1
      },
      {
        'chs': '日语',
        'lang': 'jp',
        "index": 2
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        "index": 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 5
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 6
      },
      {
        'chs': '粤语',
        'lang': 'yue',
        "index": 7
      },
      {
        'chs': '德语',
        'lang': 'de',
        "index": 8
      },
      {
        'chs': '意大利语',
        'lang': 'it',
        "index": 9
      },
      {
        'chs': '俄语',
        'lang': 'ru',
        "index": 10
      },
      {
        'chs': '繁体中文',
        'lang': 'cht',
        "index": 11
      }
    ]
  }
})