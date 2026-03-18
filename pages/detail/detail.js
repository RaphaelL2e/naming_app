const { getNameMeaning, getWuxingPersonality } = require('../../utils/nameMeanings.js');
const { getWuXing, calculateNameScore } = require('../../utils/nameData.js');

Page({
  data: {
    fullName: '',
    surname: '',
    name: '',
    meaning: {},
    score: {},
    wuxingPersonality: ''
  },

  onLoad(options) {
    const fullName = options.name || '';
    const surname = fullName.charAt(0);
    const name = fullName.charAt(1) || fullName.charAt(0);
    
    const meaning = getNameMeaning(name);
    const scoreResult = calculateNameScore(surname, name);
    const wuxing = getWuXing(name);
    const wuxingPersonality = getWuxingPersonality(wuxing);
    
    this.setData({
      fullName,
      surname,
      name,
      meaning,
      score: scoreResult,
      wuxingPersonality
    });
  },

  // 收藏名字
  addToFavorites() {
    const fullName = this.data.fullName;
    let favorites = wx.getStorageSync('favorites') || [];
    
    if (!favorites.includes(fullName)) {
      favorites.push(fullName);
      wx.setStorageSync('favorites', favorites);
      wx.showToast({
        title: '已收藏',
        icon: 'success'
      });
    } else {
      wx.showToast({
        title: '已存在',
        icon: 'none'
      });
    }
  },

  // 分享给朋友
  onShareAppMessage() {
    return {
      title: `名字「${this.data.fullName}」的寓意解读`,
      path: `/pages/detail/detail?name=${this.data.fullName}`
    };
  }
});
