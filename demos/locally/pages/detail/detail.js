const fetch = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shop: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    fetch(`shops/${options.item}`)
      .then(res => {
        this.setData({ shop: res.data })
        wx.setNavigationBarTitle({ title: res.data.name })
      })
  },
  // API接口，在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
  previewHandle(e) {
    wx.previewImage({
      current: e.target.dataset.src,
      urls: this.data.shop.images
    })
  }
})