const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
module.exports = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://locally.uieee.com/${url}`,
      data: data,
      header: {
        'ContentType': 'json'
      },
      success: resolve,
      fail: reject
    })
  })
}
