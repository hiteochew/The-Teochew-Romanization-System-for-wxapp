//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    book: {
            title: '潮州話羅馬字注音方案',
            author: '潮州話正音正字促進會',
            english: 'The Teochew Romanization System',
            pic: '../../static/fO5MW5r8f8M7WMmFZ7Er58He8U2MRm.jpg',
            cate: {

                  }
            },
    userInfo: {}
  },
  enter: function(){
    wx.switchTab({
      url: '/pages/index/cate'
    })
  },
  previewImage: function(e){
    var img = e.currentTarget.dataset.src;
    var localsrc = '';
    wx.getImageInfo({
      src: img,
      success: function (res) {
        localsrc = res.path;

        wx.previewImage({
          current: localsrc,
          urls: [localsrc],
          success: function (resa) {
            wx.showModal({
             title: '詢問',
              content: '封面好看嗎？',
              showCancel: true,
              cancelText: '超好看',
              cancelColor: '#969696',
             confirmText: '好看',
             confirmColor: '#0168B7'
           })
         },
         fail: function (resa) {
           wx.showModal({
             title: '查看照片失敗',
             content: '請稍後重試...',
             showCancel: false,
             confirmText: '準了',
             confirmColor: '#0168B7'
           })
          }
       })

      },
      fail: function (res) {
        wx.showModal({
          title: '獲取封面失敗',
          content: '請稍後重試...',
          showCancel: false,
          confirmText: '準了',
          confirmColor: '#0168B7'
        })
      }
    });
    
  },
  onShareAppMessage: function () {
    return {
      title: '潮州話羅馬字注音方案',
      desc: '潮州話正音正字促進會',
      path: 'pages/index/index'
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.showLoading({
      title: '正在進入',
      mask: true
    });
    var that = this;
  },
  onReady:function(){
    // 页面渲染完成
    wx.hideLoading();
  },
  onShow:function(){
    // 页面显示

  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
