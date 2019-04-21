const app = getApp()
Page({
  data: {
    message: 'hello world',
    flag: true,
    students: [
      { id: 1, name: "zhangsan", age: 18},
      { id: 2, name: "lisi", age: 19 },
      { id: 3, name: "wangwu", age: 20 },
      { id: 4, name: "zhaoliu", age: 21 }
    ],
    foo1: 'hello'
  },
  onLoad: function() {
    this.setData({foo: 'bear'})
    console.log(app.foo)
    app.say()
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: '小熊',
    })
    console.log('页面数据渲染完了')
    setTimeout(() => {
      this.setData({flag: false})
    },2000)
  },
  tapHandle(e){
    console.log(e)
  },
  inputChange(e) {
    console.log(e.detail.value)
    this.setData({foo1: e.detail.value})
  }
})
