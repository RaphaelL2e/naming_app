// pages/poetic/poetic.js
const { getPoeticNames } = require('../../utils/poeticData.js');

Page({
  data: {
    names: []
  },

  // 生成诗意名字
  generatePoetic() {
    const poeticNames = getPoeticNames(8);
    this.setData({ names: poeticNames });
    
    wx.showToast({
      title: '生成成功',
      icon: 'success'
    });
  },

  // 收藏
  addToFavorites(e) {
    const { name, meaning } = e.currentTarget.dataset;
    
    // 获取现有收藏
    let favorites = wx.getStorageSync('favorites') || [];
    
    // 检查是否已收藏
    const exists = favorites.some(f => f.name === name);
    if (exists) {
      wx.showToast({
        title: '已收藏过啦',
        icon: 'none'
      });
      return;
    }
    
    // 添加收藏
    favorites.push({ name, meaning, time: Date.now() });
    wx.setStorageSync('favorites', favorites);
    
    wx.showToast({
      title: '收藏成功',
      icon: 'success'
    });
  }
});