Page({
  data: {
    region: ['天津市', '天津市', '西青区']
  },
  
  pickerCancel () {
    this.setData({
      // pickerHidden: true
    })
  },

  pickerShow () {
    this.setData({
      // pickerHidden: false
    })
  },

  formSubmit (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      // chosen: ''
    })
  },

  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }
})