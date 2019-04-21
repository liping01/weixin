const fetch = require('../../utils/util.js')
Page({
  data: {
    slides: [],
    categories: []
  },
  onLoad: function(options) {
      // 微信提供的请求方式，这里没有跨域概念
    fetch('slides').then(res => {
      this.setData({ slides: res.data })
    })
    fetch('categories').then(res => {
      this.setData({ categories: res.data })
    })
    // 多了就不利于维护和优化了，故在公共utils中定义一个公共格式
    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   header: {
    //     'ContentType': 'json'
    //   },
    //   success: (res) => {
    //     this.setData({ categories: res.data })
    //     // console.log(this.data.categories)
    //   }
    // })
  } 
})
