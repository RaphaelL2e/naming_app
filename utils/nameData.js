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
  '宇': '出自《庄子》"宇泰定者，发乎天光"，宇宙广阔',
  '轩': '出自《孔子家语》"气宇轩昂"，气度不凡',
  '浩': '出自《正气歌》"浩浩如流水"，浩瀚无边',
  '睿': '出自《尚书》"睿作圣"，睿智聪慧',
  '哲': '出自《尚书》"知人则哲"，明智通达',
  '俊': '出自《春秋》"俊才"，才能出众',
  '豪': '出自《论语》"鲁无君子者，斯焉取斯"，豪迈大气',
  '麟': '出自《诗经》"麟之趾"，仁兽吉祥',
  '麒': '出自《孟子》"麒麟"，仁兽献瑞',
  '骏': '出自《诗经》"骏极于天"，高大威猛',
  '毅': '出自《论语》"士不可以不弘毅"，坚毅刚强',
  '博': '出自《论语》"君子博学于文"，学识渊博',
  '文': '出自《论语》"文质彬彬"，文雅有礼',
  '武': '出自《左传》"文武之道"，文治武功',
  '翔': '出自《论语》"羽翩四十，鸿飞东西"，展翅高飞',
  '龙': '出自《易经》"飞龙在天"，尊贵威严',
  '虎': '出自《论语》"虎豹之鞟"，威武勇猛',
  '麟': '出自《礼记》"麟凤龟龙"，四灵之首',
  
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
  '颖': '出自《后汉书》"颖悟绝伦"，聪颖过人',
  '雅': '出自《诗经》"雅言雅行"，优雅大方',
  '欣': '出自《诗经》"欣欣然"，喜悦快乐',
  '瑶': '出自《诗经》"报我以琼瑶"，美玉无瑕',
  '彤': '出自《诗经》"彤管有炜"，红光闪耀',
  '琪': '出自《左传》"玉有九德"，美玉珍贵',
  '瑾': '出自《左传》"瑾瑜匿瑕"，美玉无瑕',
  '琳': '出自《诗经》"琳琅满目"，美玉光彩',
  '珊': '出自《本草纲目》"珊瑚"，海中瑰宝',
  '珍': '出自《说文》"珍，宝也"，珍贵稀少',
  ' Pearl': '出自《楚辞》"被明月兮佩宝璐"，珍贵美玉',
  '芸': '出自《说文》"芸，香草也"，香气清新',
  '萱': '出自《诗经》"萱草忘忧"，忘忧草象征',
  '苒': '出自《本草纲目》"苒苒"，轻柔美好',
  '澜': '出自《孟子》"波澜壮阔"，水波荡漾',
  '滢': '出自《说文》"滢，荣也"，清澈明亮',
  '汐': '出自《观潮》"潮汐"，海水涨落',
  '萌': '出自《说文》"萌，草芽也"，生机勃勃',
  '蕾': '出自《说文》"蕾，花蓓也"，含苞待放',
  '薇': '出自《史记》"采薇采薇"，蔷薇花语',
};

// 寓意分类
const meaningCategories = {
  success: ['伟', '强', '杰', '超', '勇', '鹏', '骏', '豪', '龙', '虎', '毅', '博', '俊'],
  wisdom: ['明', '睿', '哲', '颖', '慧', '博', '文', '俊', '颖'],
  beauty: ['娜', '丽', '秀', '雅', '欣', '瑶', '琪', '瑾', '琳', '珊', '珍', '芸', '萱'],
  peace: ['静', '安', '宁', '怡', '安然', '康', '宁'],
  nature: ['涛', '浩', '宇', '轩', '浩', '澜', '汐', '雨', '晴', '云', '山', '风', '月'],
  noble: ['宇', '轩', '浩', '俊', '豪', '龙', '麟', '麒', '鹏', '君', '王']
};

// 五行属性能量
const wuxingMap = {
  '木': ['伟', '强', '杰', '林', '森', '荣', '华', '凯', '宸', '霖', '秀', '芸', '萱', '蕾', '薇', '楠', '桐', '松', '柏', '榕'],
  '火': ['明', '亮', '辉', '旭', '耀', '灿', '炜', '炎', '烽', '彤', '丹', '曦', '晗', '曈', '烨', '熠'],
  '土': ['磊', '坤', '垚', '岩', '岚', '峻', '巍', '岳', '轩', '安', '宁', '培', '增', '城', '基', '堂'],
  '金': ['铭', '锋', '刚', '铁', '瑞', '玉', '琛', '钧', '铎', '铖', '鑫', '铜', '银', '珠', '珍', '琳', '瑾', '琪', '瑶'],
  '水': ['涛', '波', '浩', '瀚', '澜', '涌', '泉', '泽', '润', '浚', '洁', '清', '滢', '汐', '雨', '雪', '云', '霏', '漫']
};

// 姓氏拼音映射（常见姓五行）
const surnameWuxing = {
  '李': '木', '王': '土', '张': '火', '刘': '火', '陈': '火',
  '杨': '木', '赵': '火', '黄': '土', '周': '金', '吴': '木',
  '徐': '木', '孙': '金', '马': '水', '朱': '木', '胡': '土',
  '郭': '金', '何': '木', '高': '木', '林': '木', '罗': '火',
  '郑': '火', '梁': '水', '谢': '金', '宋': '金', '唐': '金',
  '许': '金', '韩': '水', '邓': '火', '冯': '水', '曹': '金',
  '彭': '水', '曾': '金', '萧': '金', '蔡': '木', '潘': '水'
};

// 获取名字五行
function getWuXing(name) {
  for (const [element, names] of Object.entries(wuxingMap)) {
    if (names.includes(name)) return element;
  }
  return '土'; // 默认
}

// 获取姓氏五行
function getSurnameWuxing(surname) {
  return surnameWuxing[surname] || '土';
}

// 计算名字评分
function calculateNameScore(surname, name) {
  const fullName = surname + name;
  
  let score = {
    寓意: 0,
    读音: 0,
    书写: 0,
    五行: 0,
    文化: 0,
    总分: 0
  };
  
  // 1. 寓意评分 (25%)
  if (meaningCategories.success.includes(name)) {
    score.寓意 = 90 + Math.floor(Math.random() * 10);
  } else if (meaningCategories.wisdom.includes(name)) {
    score.寓意 = 88 + Math.floor(Math.random() * 10);
  } else if (meaningCategories.beauty.includes(name)) {
    score.寓意 = 85 + Math.floor(Math.random() * 12);
  } else if (meaningCategories.nature.includes(name)) {
    score.寓意 = 82 + Math.floor(Math.random() * 13);
  } else if (meaningCategories.peace.includes(name)) {
    score.寓意 = 80 + Math.floor(Math.random() * 15);
  } else {
    score.寓意 = 65 + Math.floor(Math.random() * 20);
  }
  
  // 2. 读音评分 (20%)
  const goodInitials = ['l', 'm', 'n', 'r', 'y', 'w', 'j', 'q', 'x', 'h'];
  const firstChar = name.charCodeAt(0);
  const letterIndex = firstChar % 26;
  const firstLetter = String.fromCharCode(97 + letterIndex);
  
  if (goodInitials.includes(firstLetter) && name.length === 1) {
    score.读音 = 88 + Math.floor(Math.random() * 12);
  } else if (name.length >= 2) {
    // 双字名读音更好
    score.读音 = 85 + Math.floor(Math.random() * 12);
  } else {
    score.读音 = 70 + Math.floor(Math.random() * 20);
  }
  
  // 3. 书写评分 (15%)
  const simpleNames = ['一', '二', '三', '大', '小', '上', '下'];
  if (!simpleNames.includes(name) && name.length <= 2) {
    score.书写 = 80 + Math.floor(Math.random() * 15);
  } else {
    score.书写 = 65 + Math.floor(Math.random() * 20);
  }
  
  // 4. 五行评分 (20%)
  const nameWuxing = getWuXing(name);
  const surnameWx = getSurnameWuxing(surname);
  
  // 相生相克评分
  const generating = { '木生火': true, '火生土': true, '土生金': true, '金生水': true, '水生木': true };
  const controlling = { '木克土': true, '土克水': true, '水克火': true, '火克金': true, '金克木': true };
  
  const pair = surnameWx + nameWuxing;
  if (generating[pair]) {
    score.五行 = 95; // 相生大吉
  } else if (controlling[pair]) {
    score.五行 = 60; // 相克
  } else if (surnameWx === nameWuxing) {
    score.五行 = 85; // 相同
  } else {
    score.五行 = 75 + Math.floor(Math.random() * 15);
  }
  
  // 5. 文化评分 (10%)
  if (nameOrigins[name]) {
    score.文化 = 90 + Math.floor(Math.random() * 10);
  } else {
    score.文化 = 70 + Math.floor(Math.random() * 20);
  }
  
  // 6. 总分
  score.总分 = Math.round(
    score.寓意 * 0.25 + 
    score.读音 * 0.20 + 
    score.书写 * 0.15 + 
    score.五行 * 0.20 + 
    score.文化 * 0.10
  );
  
  return {
    ...score,
    nameWuxing,
    surnameWuxing
  };
}

module.exports = {
  nameOrigins,
  meaningCategories,
  wuxingMap,
  getWuXing,
  getSurnameWuxing,
  calculateNameScore
};