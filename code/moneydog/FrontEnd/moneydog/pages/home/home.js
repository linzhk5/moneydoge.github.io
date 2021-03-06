//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'), 
    imgUrls: [
      '../../images/scroll-image1.jpeg',
      '../../images/scroll-image2.jpg',
      '../../images/kuaidi_menu.png'
    ],
    showDialog: false, //弹窗
    biaobai_text: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goToWenjuanPage: function() {
    wx.navigateTo({
      url: '../questionnaire/create_questionnaire',
    })
  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://moneydog.club:3336/LoveWall/getLoveWall',
      success: function (res) {
        that.setData({ biaobai_text: res.data.data[0].detail })
      }
    })
    wx.hideTabBar({})
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      wx.showTabBar({})
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        wx.showTabBar({})
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          wx.showTabBar({})
        }
      })
    }
  },
  //跳转到快递代拿接单界面
  goToReceiptPage1: function () {
    wx.navigateTo({
      url: '../receipt/receipt?id=1',
    })
  },
  //跳转到跑腿接单界面
  goToReceiptPage2: function () {
    wx.navigateTo({
      url: '../receipt/receipt?id=2',
    })
  },
  //跳转到求助接单界面
  goToReceiptPage3: function () {
    wx.navigateTo({
      url: '../receipt/receipt?id=3',
    })
  },
  //跳转到闲置接单界面
  goToReceiptPage4: function () {
    wx.navigateTo({
      url: '../receipt/receipt?id=4',
    })
  },
  //跳转到问卷接单界面
  goToReceiptPage5: function () {
    wx.navigateTo({
      url: '../receipt/receipt?id=5',
    })
  },
  //跳转到快递代拿发布界面
  goToPublishPage1: function() {
    wx.navigateTo({
      url: '../publish/publish?id=1',
    })
  },
  //跳转到求助发布界面
  goToPublishPage2: function () {
    wx.navigateTo({
      url: '../publish/publish?id=2',
    })
  },
  //跳转到跑腿发布界面
  goToPublishPage3: function () {
    wx.navigateTo({
      url: '../publish/publish?id=3',
    })
  },
  //跳转到闲置发布界面
  goToPublishPage4: function () {
    wx.navigateTo({
      url: '../publish/publish?id=4',
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.showTabBar({})
    if (app.globalData.code) {
      // ------ 发送凭证 ------
      var t = {
        code: app.globalData.code,
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl,
        gender: e.detail.userInfo.gender
      }
      console.log('register code is ' + app.globalData.code)
      wx.request({
        url: 'https://moneydog.club:3030/Create/User',
        data: t,
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log("返回：", res.data)
          if (res.data.SessionId) {
            app.globalData.sessionID = res.data.SessionId//获取sessionID并保存在全局变量sessionID中
            wx.setStorageSync('SessionId', res.data.SessionId)
            console.log("注册时获取的SessionId：" + res.data.SessionId)
          }
        },
      })
    } else {
      console.log('获取用户登录失败');
    }
  }
})