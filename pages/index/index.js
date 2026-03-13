// pages/index/index.js
const { nameOrigins, calculateNameScore } = require('../../utils/nameData.js');

Page({
  data: {
    surname: '',
    gender: 'boy',
    names: [],
    meanings: [],
    origins: [],
    scores: [],
    wuxings: []
  },

  // 姓氏输入
  onSurnameInput(e) {
    this.setData({
      surname: e.detail.value
    });
  },

  // 性别选择
  onGenderChange(e) {
    this.setData({
      gender: e.detail.value
    });
  },

  // 生成名字
  generateNames() {
    const surname = this.data.surname;
    const gender = this.data.gender;
    
    if (!surname) {
      wx.showToast({
        title: '请输入姓氏',
        icon: 'none'
      });
      return;
    }

    // 名字库
    const nameOptions = {
      boy: ['伟', '强', '磊', '军', '杰', '涛', '明', '超', '勇', '鹏', '铭', '浩', '睿', '博', '轩', '宇', '俊', '豪', '麟', '麒', '骏', '毅', '文', '武', '翔', '龙', '虎', '哲', '霖', '宸'],
      girl: ['娜', '丽', '芳', '敏', '静', '秀', '英', '娟', '玲', '颖', '雅', '欣', '瑶', '彤', '琪', '瑾', '琳', '珊', '珍', '芸', '萱', '苒', '澜', '滢', '汐', '萌', '蕾', '薇', '芸']
    };

    // 含义库
    const meaningMap = {
      '伟': '伟大、卓尔不群', '强': '强壮、坚强有力', '磊': '光明磊落、刚正不阿',
      '军': '军人、气概非凡', '杰': '杰出、才能出众', '涛': '波涛汹涌、气势磅礴',
      '明': '聪明、睿智', '超': '超越、出类拔萃', '勇': '勇敢、胆识过人',
      '鹏': '大鹏展翅、前程远大', '铭': '铭记、铭刻于心', '浩': '浩瀚、宽广无边',
      '睿': '睿智、聪慧过人', '博': '博学、知识渊博', '轩': '气宇轩昂',
      '宇': '宇宙广阔、气度不凡', '俊': '才貌双全、气宇轩昂', '豪': '豪迈大气、尊贵威严',
      '麟': '仁兽吉祥、珍贵异常', '麒': '仁兽献瑞、吉祥如意', '骏': '骏马奔腾、才华出众',
      '毅': '坚毅刚强、意志坚定', '文': '文雅有礼、博学多才', '武': '文治武功、智勇双全',
      '翔': '展翅高飞、自由自在', '龙': '尊贵威严、吉祥如意', '虎': '威武勇猛、气概非凡',
      '哲': '明智通达、睿智过人', '霖': '甘霖、恩泽四方', '宸': '帝王居所、尊贵无比',
      '娜': '美丽、优雅', '丽': '美丽、秀丽', '芳': '芳香、美好',
      '敏': '敏捷、聪慧', '静': '文静、娴雅', '秀': '秀丽、秀美',
      '英': '才华出众', '娟': '娟秀、美好', '玲': '玲珑、可爱',
      '颖': '聪颖、颖悟', '雅': '优雅、高雅', '欣': '欣喜、快乐',
      '瑶': '美玉、珍贵', '彤': '红彤彤、活泼', '琪': '美玉、珍贵',
      '瑾': '美玉无瑕', '琳': '美玉光彩', '珊': '海中瑰宝',
      '珍': '珍贵稀少', '芸': '香气清新', '萱': '忘忧草象征',
      '苒': '轻柔美好', '澜': '水波荡漾', '滢': '清澈明亮',
      '汐': '海水涨落', '萌': '生机勃勃', '蕾': '含苞待放', '薇': '蔷薇花语'
    };

    // 根据性别筛选
    const options = nameOptions[gender];
    
    // 随机生成10个名字
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);

    // 生成名字、含义、典故、评分
    const names = selected.map(name => surname + name);
    const meanings = selected.map(name => meaningMap[name] || '美好寓意');
    const origins = selected.map(name => nameOrigins[name] || '');
    
    const scoreData = selected.map(name => {
      const result = calculateNameScore(surname, name);
      return result.总分;
    });
    
    const wuxings = selected.map(name => {
      const result = calculateNameScore(surname, name);
      return result.nameWuxing + '属性';
    });

    this.setData({
      names,
      meanings,
      origins,
      scores: scoreData,
      wuxings
    });

    wx.showToast({
      title: '生成成功',
      icon: 'success'
    });
  },

  // 查看详情
  showDetail(e) {
    const name = e.currentTarget.dataset.name;
    const index = e.currentTarget.dataset.index;
    const score = this.data.scores[index];
    const origin = this.data.origins[index];
    const meaning = this.data.meanings[index];
    const wuxing = this.data.wuxings[index];
    
    wx.showModal({
      title: name + ' 详解',
      content: `综合评分: ${score}分\n\n五行: ${wuxing}\n\n寓意: ${meaning}\n\n典故: ${origin || '暂无典故'}`,
      showCancel: false
    });
  },

  // 分享
  onShareAppMessage() {
    const { names, surname, scores } = this.data;
    const topName = names[0] || '好名字';
    return {
      title: `给我家宝宝取了个${topName}的名字，快来看看！`,
      path: '/pages/index/index'
    };
  }
});