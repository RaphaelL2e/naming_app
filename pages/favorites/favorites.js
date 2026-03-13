// pages/favorites/favorites.js
Page({
  data: {
    favorites: []
  },

  onShow() {
    this.loadFavorites();
  },

  loadFavorites() {
    const favorites = wx.getStorageSync('favorites') || [];
    this.setData({ favorites });
  },

  removeFavorite(e) {
    const index = e.currentTarget.dataset.index;
    let favorites = this.data.favorites;
    favorites.splice(index, 1);
    
    wx.setStorageSync('favorites', favorites);
    this.setData({ favorites });
    
    wx.showToast({
      title: '已删除',
      icon: 'success'
    });
  }
});