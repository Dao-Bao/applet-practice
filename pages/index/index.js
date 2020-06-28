Page({
  onShareAppMessage () {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: [
      'https://s1.ax1x.com/2020/06/24/NdvQ4x.jpg',
      'https://s1.ax1x.com/2020/06/24/NdxAII.jpg',
      'https://s1.ax1x.com/2020/06/28/NcHMIH.jpg',
      'https://s1.ax1x.com/2020/06/28/NcH1JA.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    loading: false,
    lock: true,
    
    region: ['天津市', '天津市', '西青区']
  },

  changelock () {
    this.setData({
      lock: !this.data.lock
    })
  }

})
