const fetch = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: {},
    shop: [],
    pageIndex: 0,
    pageSize: 10,
    hasMore: true
  },
  loadMore() {
    if(!this.data.hasMore) return
    let {pageIndex,pageSize} = this.data
    const params = {_page:++pageIndex,_limit:10}
    return fetch(`categories/${this.data.category.id}/shops?`,params).then(res => {
      const shop = this.data.shop.concat(res.data)
      const totalCount = parseInt(res.header['X-Total-Count'])
      const hasMore = pageIndex * pageSize < totalCount 
      this.setData({ shop: shop, pageIndex, hasMore })
      // console.log(res.header['X-Total-Count'])
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // 加载分类信息
    fetch(`categories/${options.cat}`).then(res => {
      this.setData({category: res.data})
      // console.log(this.data.category)
      wx.setNavigationBarTitle({
        title: this.data.category.name,
      })
      // 加载商铺信息
      this.loadMore()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.category.name) {
      wx.setNavigationBarTitle({
        title: this.data.category.name,
      })
    }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore()
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 把数据清空，然后loadMore（）
    this.setData({shop:[],pageIndex:0,hasMore:true})
    this.loadMore().then(()=> {
        // 默认下拉会持续3秒钟，如果加载完了，立马收回下拉样式
        wx.stopPullDownRefresh()
    })
  }
})