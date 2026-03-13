// pages/index/index.js
Page({
  data: {
    surname: '',
    names: [],
    meanings: []
  },

  // 姓氏输入
  onSurnameInput(e) {
    this.setData({
      surname: e.detail.value
    });
  },

  // 生成名字
  generateNames() {
    const surname = this.data.surname;
    if (!surname) {
      wx.showToast({
        title: '请输入姓氏',
        icon: 'none'
      });
      return;
    }

    // 名字库
    const nameOptions = {
      boy: ['伟', '强', '磊', '军', '杰', '涛', '明', '超', '勇', '鹏'],
      girl: ['娜', '丽', '芳', '敏', '静', '秀', '英', '娟', '玲', '颖']
    };

    // 含义库
    const meaningMap = {
      '伟': '伟大、卓尔不群',
      '强': '强壮、坚强有力',
      '磊': '光明磊落、刚正不阿',
      '军': '军人、气概非凡',
      '杰': '杰出、才能出众',
      '涛': '波涛汹涌、气势磅礴',
      '明': '聪明、睿智',
      '超': '超越、出类拔萃',
      '勇': '勇敢、胆识过人',
      '鹏': '大鹏展翅、前程远大',
      '娜': '美丽、优雅',
      '丽': '美丽、秀丽',
      '芳': '芳香、美好',
      '敏': '敏捷、聪慧',
      '静': '文静、娴雅',
      '秀': '秀丽、秀美',
      '英': '才华出众',
      '娟': '娟秀、美好',
      '玲': '玲珑、可爱',
      '颖': '聪颖、颖悟'
    };

    // 随机生成5个名字
    const allNames = [...nameOptions.boy, ...nameOptions.girl];
    const shuffled = allNames.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);

    const names = selected.map(name => surname + name);
    const meanings = selected.map(name => meaningMap[name]);

    this.setData({
      names,
      meanings
    });

    wx.showToast({
      title: '生成成功',
      icon: 'success'
    });
  }
});