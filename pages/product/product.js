Page ({
  data: {
    items: [
      { value: '美国', name: '美国' },
      { value: '中国', name: '中国' },
      { value: '巴西', name: '巴西' },
      { value: '日本', name: '日本' },
      { value: '英国', name: '英国' },
      { value: '法国', name: '法国' }
    ]
  },

  checkboxChange (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      items
    })
  }

})