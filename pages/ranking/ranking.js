// pages/ranking/ranking.js
Page({
  data: {
    currentTab: 0,
    ranking: [],
    updateTime: ''
  },

  onLoad() {
    this.loadRanking(0);
    this.setData({ updateTime: this.formatDate() });
  },

  switchTab(e) {
    const idx = parseInt(e.currentTarget.dataset.idx);
    this.setData({ currentTab: idx });
    this.loadRanking(idx);
  },

  loadRanking(type) {
    const rankings = {
      0: [ // 男孩热门
        { name: '宇轩', meaning: '气宇轩昂', hot: 9823 },
        { name: '浩然', meaning: '浩然正气', hot: 8541 },
        { name: '子墨', meaning: '文雅飘逸', hot: 7985 },
        { name: '一鸣', meaning: '一鸣惊人', hot: 7654 },
        { name: '奕辰', meaning: '光明俊朗', hot: 7123 },
        { name: '思远', meaning: '思虑深远', hot: 6890 },
        { name: '皓宇', meaning: '广阔天地', hot: 6543 },
        { name: '睿哲', meaning: '睿智卓越', hot: 6123 },
        { name: '沐晨', meaning: '清新早晨', hot: 5987 },
        { name: '嘉瑞', meaning: '美好祥瑞', hot: 5654 }
      ],
      1: [ // 女孩热门
        { name: '欣怡', meaning: '欣喜愉快', hot: 9234 },
        { name: '梦琪', meaning: '梦幻美丽', hot: 8765 },
        { name: '诗涵', meaning: '诗意盎然', hot: 8123 },
        { name: '雅婷', meaning: '优雅婷婷', hot: 7654 },
        { name: '雨晴', meaning: '雨后初晴', hot: 7234 },
        { name: '思雨', meaning: '思绪如雨', hot: 6876 },
        { name: '佳怡', meaning: '美好愉快', hot: 6543 },
        { name: '紫萱', meaning: '紫色浪漫', hot: 6123 },
        { name: '语汐', meaning: '言语柔美', hot: 5987 },
        { name: '安然', meaning: '安然无恙', hot: 5654 }
      ],
      2: [ // 诗意热门
        { name: '云起', meaning: '行到水穷处，坐看云起时', hot: 7654 },
        { name: '明月', meaning: '举头望明月，低头思故乡', hot: 7123 },
        { name: '沧海', meaning: '东临碣石，以观沧海', hot: 6876 },
        { name: '南山', meaning: '采菊东篱下，悠然见南山', hot: 6543 },
        { name: '清风', meaning: '清风徐来，水波不兴', hot: 6123 },
        { name: '阑珊', meaning: '灯火阑珊处', hot: 5987 },
        { name: '烟雨', meaning: '烟雨江南', hot: 5654 },
        { name: '晴川', meaning: '晴川历历汉阳树', hot: 5432 },
        { name: '远山', meaning: '远山如黛', hot: 5213 },
        { name: '悠然', meaning: '悠然自得', hot: 5098 }
      ]
    };

    this.setData({ ranking: rankings[type] });
  },

  formatDate() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return `${month}月${day}日`;
  },

  onShareAppMessage() {
    return {
      title: '2026热门名字排行榜，看看大家都在用什么名字',
      path: '/pages/ranking/ranking'
    };
  }
});