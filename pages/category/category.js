// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex:0,
    navlist:[
      {
        id: 18, cate_name: "配件设备",
        child: [
          { id: 4, cate_name: "新品上线", pic: "/images/d.jpg" },
          { id: 3, cate_name: "折扣专区", pic: "/images/d.jpg" },
          { id: 2, cate_name: "热门促销", pic: "/images/d.jpg" }]
      },
      { id: 17, cate_name: "出行交通", child: [] },
      { id: 16, cate_name: "日杂用品", child: [] },
      { id: 15, cate_name: "洗护健康", child: [] },
      { id: 14, cate_name: "餐厨厨房", child: [] },
      { id: 13, cate_name: "服饰鞋帽", child: [] },
      { id: 12, cate_name: "影音音响", child: [] },
      { id: 11, cate_name: "智能设备", child: [] },
      { id: 10, cate_name: "手机数码", child: [] },
      { id: 9, cate_name: "家电电器", child: [] },
      { id: 1, cate_name: "热门推荐", child: [] },
      { id: 6, cate_name: "居家生活", child: [] }
    ]
  },
  changeTap(e){
    console.log(e)
    this.setData({
      activeIndex: e.currentTarget.dataset.index,
      elId:"a"+e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})