// pages/compare/compare.js
const { calculateNameScore } = require('../../utils/nameData.js');

Page({
  data: {
    name1: '',
    name2: '',
    result: null
  },

  onName1Input(e) {
    this.setData({ name1: e.detail.value, result: null });
  },

  onName2Input(e) {
    this.setData({ name2: e.detail.value, result: null });
  },

  compareNames() {
    const name1 = this.data.name1.trim();
    const name2 = this.data.name2.trim();
    
    if (!name1 || !name2) {
      wx.showToast({
        title: '请输入两个名字',
        icon: 'none'
      });
      return;
    }

    // 计算评分（只用姓氏作为前缀）
    const score1 = calculateNameScore('', name1).总分;
    const score2 = calculateNameScore('', name2).总分;

    // 确定胜出者
    let winner, reason;
    if (score1 > score2) {
      winner = name1;
      reason = `${name1}在寓意、读音、书写等方面更胜一筹`;
    } else if (score2 > score1) {
      winner = name2;
      reason = `${name2}在寓意、读音、书写等方面更胜一筹`;
    } else {
      winner = '平局！';
      reason = '两个名字评分相当，都是好名字~';
    }

    this.setData({
      result: {
        winner,
        reason,
        score1,
        score2
      }
    });
  },

  onShareAppMessage() {
    const { name1, name2, result } = this.data;
    return {
      title: `帮我看看${name1}和${name2}哪个名字更好？`,
      path: '/pages/compare/compare'
    };
  }
});