// 名字详细寓意库
const nameMeanings = {
  // 男孩名字
  '伟': { meaning: '伟大、卓越', origin: '出自《论语》"大哉尧之为君也"，伟大之意', personality: '胸怀宽广，有领导力，做事有魄力' },
  '强': { meaning: '坚强、强壮', origin: '出自《左传》"强劲有力"，刚强不屈', personality: '意志坚定，不轻易放弃，有进取心' },
  '杰': { meaning: '杰出、优秀', origin: '出自《诗经》"彼其之子，邦之杰"，杰出人才', personality: '才华出众，有责任感，敢于担当' },
  '超': { meaning: '超越、超众', origin: '出自《道德经》"超越"，出众非凡', personality: '思维敏捷，追求卓越，不甘落后' },
  '勇': { meaning: '勇敢、勇猛', origin: '出自《论语》"勇者不惧"，勇敢无畏', personality: '胆识过人，敢于冒险，正义感强' },
  '豪': { meaning: '豪迈、气派', origin: '出自《论语》"豪迈大气"，气度不凡', personality: '性格开朗，慷慨大方，喜欢结交朋友' },
  '俊': { meaning: '俊秀、优秀', origin: '出自《春秋》"俊才"，才能出众', personality: '外表俊朗，头脑聪明，多才多艺' },
  '卓': { meaning: '卓越、非凡', origin: '出自《论语》"卓尔不群"，卓越非凡', personality: '出类拔萃，有独立思考能力' },
  '鹏': { meaning: '大鹏展翅', origin: '出自《庄子》"大鹏展翅"，前程远大', personality: '志向远大，有抱负，敢于拼搏' },
  '龙': { meaning: '龙腾虎跃', origin: '出自《易经》"飞龙在天"，尊贵威严', personality: '气宇轩昂，有领导气质、事業心强' },
  '虎': { meaning: '虎虎生威', origin: '出自《论语》"虎豹之鞟"，威武勇猛', personality: '威风凛凛，有正义感，敢于出头' },
  '宇': { meaning: '宇宙广阔', origin: '出自《庄子》"宇泰定者"，宇宙广阔', personality: '心胸宽广，视野开阔，有格局' },
  '轩': { meaning: '气宇轩昂', origin: '出自《孔子家语》"气宇轩昂"，气度不凡', personality: '仪表不凡，举止优雅，有品位' },
  '浩': { meaning: '浩瀚无边', origin: '出自《正气歌》"浩浩如流水"，浩瀚无边', personality: '心胸开阔，包容力强，正直坦荡' },
  '涛': { meaning: '波涛汹涌', origin: '出自《观沧海》"洪波涌起"，波涛汹涌', personality: '有冲劲，精力充沛，敢于挑战' },
  '明': { meaning: '聪明睿智', origin: '出自《大学》"明德"，聪明睿智', personality: '头脑清晰，看问题透彻，心思细腻' },
  '睿': { meaning: '睿智聪慧', origin: '出自《尚书》"睿作圣"，睿智聪慧', personality: '智慧过人，判断力强，善于分析' },
  '哲': { meaning: '明智通达', origin: '出自《尚书》"知人则哲"，明智通达', personality: '思想深刻，有哲理思维，善于引导' },
  '博': { meaning: '学识渊博', origin: '出自《论语》"君子博学于文"，学识渊博', personality: '爱好学习，知识面广，善于思考' },
  '文': { meaning: '文雅有礼', origin: '出自《论语》"文质彬彬"，文雅有礼', personality: '温文尔雅，举止得体，有教养' },
  '智': { meaning: '智慧超群', origin: '出自《孟子》"智仁勇"，智慧超群', personality: '聪明机智，反应灵敏，解决问题能力强' },
  '磊': { meaning: '光明磊落', origin: '出自《说文》"磊，众石也"，光明磊落', personality: '为人正直，坦坦荡荡，光明正大' },
  '刚': { meaning: '坚强刚毅', origin: '出自《论语》"刚毅木讷"，坚强刚毅', personality: '意志坚定，有原则，不轻易妥协' },
  '毅': { meaning: '坚毅刚强', origin: '出自《论语》"士不可以不弘毅"，坚毅刚强', personality: '有恒心，有毅力，不达目的不罢休' },
  '安': { meaning: '平安健康', origin: '出自《论语》"君子安贫"，平安健康', personality: '性格温和，追求平稳，易满足' },
  '宁': { meaning: '安宁平静', origin: '出自《论语》"宁静致远"，安宁平静', personality: '内心平静，善于思考，有远见' },
  '康': { meaning: '健康长寿', origin: '出自《尚书》"康年"，健康长寿', personality: '乐观开朗，注重健康，生活有序' },
  '瑞': { meaning: '吉祥如意', origin: '出自《说文》"瑞，以玉为信也"，吉祥如意', personality: '乐观积极，常带好运，人缘好' },
  '祥': { meaning: '祥和如意', origin: '出自《说文》"祥，福也"，祥和如意', personality: '与人为善，脾气好，容易相处' },
  '福': { meaning: '福气满满', origin: '出自《尚书》"五福"，福气满满', personality: '知足常乐，心态好，容易满足' },
  
  // 女孩名字
  '娜': { meaning: '婀娜多姿', origin: '出自《洛神赋》"纤腰楚楚"，婀娜多姿', personality: '身材苗条，气质优雅，柔美动人' },
  '丽': { meaning: '美丽动人', origin: '出自《论语》"何如"，美丽动人', personality: '外表出众，魅力四射，爱美爱生活' },
  '秀': { meaning: '秀外慧中', origin: '出自《后汉书》"秀外慧中"，美丽聪慧', personality: '外表美丽，内心聪慧，才貌双全' },
  '雅': { meaning: '优雅大方', origin: '出自《诗经》"雅言雅行"，优雅大方', personality: '举止得体，有气质，有品位' },
  '美': { meaning: '美丽动人', origin: '出自《孟子》"美目盼兮"，美丽动人', personality: '追求美善于发现美，心灵手巧' },
  '婷': { meaning: '婷婷玉立', origin: '出自《说文》"婷，和好也"，婷婷玉立', personality: '身材高挑，气质优雅，温柔如水' },
  '雅': { meaning: '优雅文静', origin: '出自《诗经》"雅尔"，优雅文静', personality: '文静优雅，有内涵，有修养' },
  '倩': { meaning: '笑容甜美', origin: '出自《诗经》"巧笑倩兮"，笑容甜美', personality: '笑容迷人，性格开朗，亲和力强' },
  '欣': { meaning: '欣喜愉悦', origin: '出自《诗经》"欣欣然"，喜悦快乐', personality: '乐观开朗，爱笑，常带给人快乐' },
  '怡': { meaning: '愉快欣喜', origin: '出自《论语》"不亦悦乎"，愉快欣喜', personality: '性格温和，容易相处，心态平和' },
  '瑶': { meaning: '美玉珍贵', origin: '出自《诗经》"报我以琼瑶"，美玉无瑕', personality: '纯洁无瑕，珍贵难得，有气质' },
  '琳': { meaning: '美玉光彩', origin: '出自《诗经》"琳琅满目"，美玉光彩', personality: '光彩照人，有才华，气质高雅' },
  '琪': { meaning: '美玉珍贵', origin: '出自《左传》"玉有九德"，美玉珍贵', personality: '珍贵美好，独一无二，有魅力' },
  '瑾': { meaning: '美玉无瑕', origin: '出自《左传》"瑾瑜匿瑕"，美玉无瑕', personality: '纯洁无瑕，完美主义者，有追求' },
  '玉': { meaning: '玉洁冰清', origin: '出自《说文》"玉，石之美者"，玉洁冰清', personality: '纯洁无瑕，品质高洁，有气质' },
  '静': { meaning: '娴静优雅', origin: '出自《道德经》"静以修身"，娴静优雅', personality: '内心平静，举止稳重，善于思考' },
  '柔': { meaning: '温柔柔和', origin: '出自《说文》"柔，弱也"，温柔柔和', personality: '性格温柔，柔情似水，容易相处' },
  '温': { meaning: '温和友善', origin: '出自《论语》"温故而知新"，温和友善', personality: '脾气好，温暖如春，善于照顾人' },
  '婉': { meaning: '温柔婉约', origin: '出自《诗经》"婉兮清扬"，温柔婉约', personality: '温柔似水，委婉动听，有女人味' },
  '贤': { meaning: '贤良淑德', origin: '出自《论语》"见贤思齐"，贤良淑德', personality: '品德优良，温柔贤惠，持家有道' },
  '淑': { meaning: '温柔贤惠', origin: '出自《诗经》"淑女"，温柔贤惠', personality: '温柔善良，贤惠持家，孝顺父母' },
  '慧': { meaning: '聪慧过人', origin: '出自《论语》"慧心巧思"，聪慧过人', personality: '聪明伶俐，智慧超群，思维敏捷' },
  '颖': { meaning: '聪颖过人', origin: '出自《后汉书》"颖悟绝伦"，聪颖过人', personality: '悟性高，学习能力强，反应快' },
  '敏': { meaning: '聪慧敏捷', origin: '出自《论语》"敏而好学"，聪慧敏捷', personality: '头脑灵活，反应迅速，动手能力强' },
  '诗': { meaning: '诗意盎然', origin: '出自《诗经》"诗言志"，诗意盎然', personality: '浪漫多情，有才华，追求艺术' },
  '颖': { meaning: '聪明灵巧', origin: '出自《说文》"颖，禾末也"，聪明灵巧', personality: '心灵手巧，多才多艺，富有创意' },
  '甜': { meaning: '甜美可爱', origin: '出自《说文》"甜，美也"，甜美可爱', personality: '甜美可爱，活泼开朗招人喜欢' },
  '萌': { meaning: '可爱萌态', origin: '网络流行字，可爱萌态', personality: '可爱呆萌，阳光活泼讨人喜欢' },
  '昕': { meaning: '黎明曙光', origin: '出自《说文》"昕，明也"，黎明曙光', personality: '充满希望，积极向上，阳光开朗' },
  '诺': { meaning: '一诺千金', origin: '出自《说文》"诺，应也"，一诺千金', personality: '守信重诺，有责任感，靠谱可信' },
  '汐': { meaning: '潮汐之力', origin: '出自《说文》"汐，暮潮也"，潮汐之力', personality: '外表柔美内心坚强，有力量' },
  '珞': { meaning: '玉石坚硬', origin: '出自《说文》"珞，石之次玉"，玉石坚硬', personality: '外柔内刚，坚强独立，有主见' },
};

// 获取名字寓意
function getNameMeaning(name) {
  return nameMeanings[name] || {
    meaning: '寓意美好',
    origin: '中华传统取名',
    personality: '善良可爱，聪明伶俐'
  };
}

// 获取五行对应的性格特点
function getWuxingPersonality(wuxing) {
  const personalities = {
    '木': '性格温和，富有同情心，有仁爱之心，适合从事教育、医疗、艺术类工作',
    '火': '热情开朗，充满活力，做事有冲劲，适合从事销售、管理、演艺类工作',
    '土': '稳重踏实，为人忠厚，值得信赖，适合从事管理、金融、建筑类工作',
    '金': '坚强果断，有决断力，适合从事法律、金融、军事类工作',
    '水': '聪明灵活，善于变通，适合从事商业、科技、贸易类工作'
  };
  return personalities[wuxing] || '性格平和，与人为善';
}

module.exports = {
  nameMeanings,
  getNameMeaning,
  getWuxingPersonality
};
