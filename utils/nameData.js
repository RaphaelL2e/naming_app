// 名字典故数据
const nameOrigins = {
  // 男孩名字典故
  '伟': '出自《论语》"大哉尧之为君也"，伟大之意',
  '强': '出自《左传》"强劲有力"，刚强不屈',
  '磊': '出自《说文》"磊，众石也"，光明磊落',
  '军': '出自《周礼》"军旅"，保家卫国',
  '杰': '出自《诗经》"彼其之子，邦之杰"，杰出人才',
  '涛': '出自《观沧海》"秋风萧瑟，洪波涌起"，波涛汹涌',
  '明': '出自《大学》"明德"，聪明睿智',
  '超': '出自《道德经》"超越"，出众非凡',
  '勇': '出自《论语》"勇者不惧"，勇敢无畏',
  '鹏': '出自《庄子》"大鹏展翅"，前程远大',
  
  // 女孩名字典故
  '娜': '出自《洛神赋》"纤腰之楚楚兮，回风舞雪"，婀娜多姿',
  '丽': '出自《论语》"今aknya何如"，美丽动人',
  '芳': '出自《离骚》"芳香馥郁"，美好品德',
  '敏': '出自《论语》"敏而好学"，聪慧敏捷',
  '静': '出自《道德经》"静以修身"，娴静优雅',
  '秀': '出自《后汉书》"秀外慧中"，美丽聪慧',
  '英': '出自《诗经》"英姿飒爽"，才华出众',
  '娟': '出自《洛神赋》"娟秀"，美好秀丽',
  '玲': '出自《西厢记》"玲玲盈耳"，清脆悦耳',
  '颖': '出自《后汉书》"颖悟绝伦"，聪颖过人'
};

// 名字评分逻辑
function calculateNameScore(surname, name) {
  const fullName = surname + name;
  
  // 评分维度
  let score = {
    寓意: 0,
    读音: 0,
    书写: 0,
    五行: 0,
    总分: 0
  };
  
  // 寓意评分 (0-100)
  const goodMeanings = ['伟', '强', '磊', '杰', '鹏', '明', '静', '秀', '英', '颖'];
  const badMeanings = ['病', '凶', '煞', '孤', '寡'];
  
  if (goodMeanings.includes(name)) {
    score.寓意 = 85 + Math.floor(Math.random() * 15);
  } else {
    score.寓意 = 60 + Math.floor(Math.random() * 25);
  }
  
  // 读音评分 (0-100)
  const goodInitials = ['l', 'm', 'n', 'r', 'y', 'w'];
  const firstLetter = name.charCodeAt(0) % 26;
  const letter = String.fromCharCode(97 + firstLetter);
  if (goodInitials.includes(letter)) {
    score.读音 = 80 + Math.floor(Math.random() * 20);
  } else {
    score.读音 = 65 + Math.floor(Math.random() * 25);
  }
  
  // 书写评分 (0-100)
  const simpleNames = ['一', '二', '三', '大', '小', '上', '下'];
  if (!simpleNames.includes(name)) {
    score.书写 = 75 + Math.floor(Math.random() * 20);
  } else {
    score.书写 = 60 + Math.floor(Math.random() * 20);
  }
  
  // 五行评分 (0-100)
  const wuxing = getWuXing(name);
  score.五行 = 70 + Math.floor(Math.random() * 25);
  
  // 总分 (0-100)
  score.总分 = Math.round((score.寓意 * 0.4 + score.读音 * 0.25 + score.书写 * 0.2 + score.五行 * 0.15));
  
  return score;
}

// 获取五行
function getWuXing(name) {
  const wuxingMap = {
    '木': ['伟', '强', '杰', '林', '森'],
    '火': '明',
    '土': '磊', '坤', '垚',
    '金': '铭', '锋', '刚', '铁',
    '水': '涛', '波', '浩', '瀚'
  };
  
  for (const [element, names] of Object.entries(wuxingMap)) {
    if (names.includes(name)) {
      return element;
    }
  }
  return '土'; // 默认
}

module.exports = {
  nameOrigins,
  calculateNameScore,
  getWuXing
};