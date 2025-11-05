// 按年龄段分组的情绪颗粒度测试数据

const TEST_DATA_BY_AGE = {
  // ==================== 18-22岁：大学生/应届生 ====================
  '18-22': [
    {
      id: 1,
      category: '学业压力',
      scenario: '期末考试周，你同时要准备4门考试，还有一篇论文deadline就在后天。凌晨2点，宿舍只有你的台灯还亮着。此刻你：',
      options: [
        { text: '叹口气，心想"好烦啊" - 感觉压力大', score: 0, type: 'vague' },
        { text: '焦虑到睡不着，大脑一片混乱', score: 1, type: 'single' },
        { text: '焦虑和恐慌交织："时间完全不够，我肯定要挂科了..." - 手心冒汗，心跳加速，想哭又哭不出来', score: 2, type: 'detailed' },
        { text: '压力很大，但列了个复习清单："先搞定明天的考试，其他的一步步来" - 虽然累但还算冷静', score: 2, type: 'detailed' },
        { text: '紧张中带着一丝兴奋："这就是最后一战了，拼了！" - 反而有点肾上腺素飙升的感觉', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 2,
      category: '宿舍关系',
      scenario: '你的室友每天晚上打游戏语音到凌晨1点，第二天你要早起上课。你提醒过3次了，对方每次都说"不好意思"，但第二天照样继续。此刻你：',
      options: [
        { text: '默默戴上耳塞，心里有点不爽', score: 0, type: 'vague' },
        { text: '很烦躁，睡不着', score: 1, type: 'single' },
        { text: '愤怒中夹杂着无力感："为什么总是不尊重别人？" - 想发火但又怕破坏宿舍关系，憋屈又委屈', score: 2, type: 'detailed' },
        { text: '失望且坚定："这次必须严肃谈一次了" - 决定第二天正式沟通，该守的边界要守住', score: 2, type: 'detailed' },
        { text: '理解对方可能没意识到影响，决定换个方式沟通："要不我们定个作息时间表？" - 寻找解决方案', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 3,
      category: '恋爱关系',
      scenario: '你的初恋对象突然发消息说"我们不太合适"，然后就不再回复。你们在一起才3个月，昨天还一起吃饭看电影。此刻你：',
      options: [
        { text: '盯着手机发呆，心里难受', score: 0, type: 'vague' },
        { text: '心很痛，不知道发生了什么', score: 1, type: 'single' },
        { text: '心碎、困惑、愤怒一起涌来："为什么连个理由都不给？我做错了什么？" - 反复翻看聊天记录，越看越难过', score: 2, type: 'detailed' },
        { text: '很难过，但同时有点释然："至少不用继续猜测了" - 虽然心痛，但接受了结果', score: 2, type: 'detailed' },
        { text: '被拒绝的羞愧感和自我怀疑："是我不够好吗？" - 开始质疑自己在感情中的价值', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 4,
      category: '求职/未来',
      scenario: '你投了20份简历，参加了5场面试，全都石沉大海。眼看室友都拿到offer了，你还在刷招聘网站。此刻你：',
      options: [
        { text: '有点丧，心想"找工作好难" - 没什么信心', score: 0, type: 'vague' },
        { text: '特别焦虑，对未来很迷茫', score: 1, type: 'single' },
        { text: '挫败感混合着对未来的恐慌："我是不是能力不行？毕业就失业怎么办？" - 越想越害怕，甚至想放弃', score: 2, type: 'detailed' },
        { text: '虽然受挫，但开始反思："可能是我的简历和面试技巧有问题" - 决定找学长学姐请教', score: 2, type: 'detailed' },
        { text: '失望但还算平静："可能时机未到，我再调整调整" - 相信只要坚持就会有转机', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 5,
      category: '家庭经济',
      scenario: '你想买个心仪已久的东西（鞋/游戏装备），但价格是你一个月生活费的1/3。你犹豫要不要向父母开口要钱。此刻你：',
      options: [
        { text: '纠结，不知道该不该买', score: 0, type: 'vague' },
        { text: '很想要，但又觉得不好意思', score: 1, type: 'single' },
        { text: '欲望和愧疚拉扯："好想要，但爸妈挣钱也不容易..." - 加购物车又删除，反复纠结', score: 2, type: 'detailed' },
        { text: '渴望经济独立："什么时候我才能想买什么就买什么..." - 更激发了想要兼职赚钱的动力', score: 2, type: 'detailed' },
        { text: '冷静分析："不是必需品，还是算了" - 虽然有点遗憾，但能克制自己的欲望', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 6,
      category: '社交对比',
      scenario: '朋友圈看到高中同学发旅游照片：新加坡、日本、欧洲...而你暑假只能在家待着，或者打工挣生活费。此刻你：',
      options: [
        { text: '随手划过，心想"真好啊" - 有点羡慕', score: 0, type: 'vague' },
        { text: '挺羡慕的，有点失落', score: 1, type: 'single' },
        { text: '羡慕中夹杂着自卑："同龄人的生活差距怎么这么大..." - 忍不住对比家境，越想越不是滋味', score: 2, type: 'detailed' },
        { text: '虽然羡慕，但能接受现实："每个人的起点不同，我有我的节奏" - 心态还算平和', score: 2, type: 'detailed' },
        { text: '短暂羡慕后转为动力："等我有能力了，也要去看世界" - 把羡慕转化为目标', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 7,
      category: '学业/专业',
      scenario: '大三了，你发现自己对所学专业完全没兴趣，每天上课都像坐牢。但转专业已经来不及了。此刻你：',
      options: [
        { text: '无奈地继续上课，心里很烦', score: 0, type: 'vague' },
        { text: '很痛苦，不知道怎么办', score: 1, type: 'single' },
        { text: '深深的后悔和对未来的恐慌："当初怎么选了这个专业？" - 觉得浪费了时间，对未来一片迷茫', score: 2, type: 'detailed' },
        { text: '虽然不喜欢专业，但开始找其他出路："可以考研换方向，或者毕业转行" - 迷茫中寻找可能性', score: 2, type: 'detailed' },
        { text: '接受现实："先把学位拿到手，工作不一定要对口" - 已经想好了Plan B', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 8,
      category: '社团/集体活动',
      scenario: '你在社团/学生会策划的活动出了问题，部长在例会上当着所有人的面批评了你。其他成员都低头不语。此刻你：',
      options: [
        { text: '低头道歉，脸有点红 - 感觉很尴尬', score: 0, type: 'vague' },
        { text: '特别羞愧，恨不得消失', score: 1, type: 'single' },
        { text: '羞愧、委屈、愤怒混合在一起："我也很努力了，为什么要这样..." - 眼眶泛红，强忍着不哭出来', score: 2, type: 'detailed' },
        { text: '虽然很尴尬，但认真记下问题："确实是我没考虑周全" - 受挫但愿意改进', score: 2, type: 'detailed' },
        { text: '感到被冒犯："当众批评太不尊重人了" - 心里记下这笔账，开始重新评估这个组织值不值得继续待', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 9,
      category: '友情/背叛',
      scenario: '你的好朋友偷偷和你暗恋的对象在一起了，你是最后一个知道的。你们三个一起上过很多次课，一起吃过很多次饭。此刻你：',
      options: [
        { text: '心里不是滋味，说不出的难受', score: 0, type: 'vague' },
        { text: '被背叛的感觉，很生气', score: 1, type: 'single' },
        { text: '被背叛的痛苦、嫉妒、失落一起爆发："所谓的好朋友..." - 既心碎又愤怒，甚至想割席绝交', score: 2, type: 'detailed' },
        { text: '失望和释然交织："既然TA选择了别人，说明我们不合适" - 虽然难过，但选择放下', score: 2, type: 'detailed' },
        { text: '难过但理性："感情不能强求，怪不了任何人" - 虽然心痛，但能接受现实，只是需要时间疗伤', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 10,
      category: '毕业/未来焦虑',
      scenario: '毕业倒计时100天，宿舍里有人已经签约大厂，有人准备出国，有人要考公，而你还不知道自己要做什么。此刻你：',
      options: [
        { text: '感觉迷茫，心里没底', score: 0, type: 'vague' },
        { text: '很焦虑，不知道该怎么办', score: 1, type: 'single' },
        { text: '对未来深深的恐慌和自我怀疑："别人都有方向了，我怎么还这么迷茫？" - 焦虑到失眠，感觉被时代抛弃', score: 2, type: 'detailed' },
        { text: '焦虑但开始行动："我得抓紧时间想清楚了" - 列出所有选项，逐个分析利弊', score: 2, type: 'detailed' },
        { text: '虽然还没方向，但不那么慌："慢慢来，每个人的节奏不同" - 相信自己最终会找到答案', score: 2, type: 'detailed' }
      ]
    }
  ],

  // ==================== 23-28岁：职场新人 ====================
  '23-28': [
    {
      id: 1,
      category: '职场适应',
      scenario: '入职3个月，你负责的项目在周会上被领导当众指出问题。其他同事都是工作2-3年的老员工，只有你是新人。此刻你：',
      options: [
        { text: '低头记录，心里有点难受', score: 0, type: 'vague' },
        { text: '特别尴尬，脸都红了', score: 1, type: 'single' },
        { text: '羞愧、自我怀疑、恐慌混合："我是不是不适合这份工作？" - 担心被认为能力不行，甚至怀疑自己的职业选择', score: 2, type: 'detailed' },
        { text: '虽然尴尬但迅速调整："是我经验不足" - 会后主动请教老员工，把这当成学习机会', score: 2, type: 'detailed' },
        { text: '感到委屈："作为新人，没人教就直接批评..." - 觉得公司没有新人培养机制，开始重新评估这份工作', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 2,
      category: '租房/居住',
      scenario: '租了2年的房子，房东突然通知下个月要涨房租500块，不接受就要你搬走。而你刚稳定下来，又要面临找房、搬家的麻烦。此刻你：',
      options: [
        { text: '很烦，又要折腾了', score: 0, type: 'vague' },
        { text: '非常生气，觉得很不公平', score: 1, type: 'single' },
        { text: '愤怒、无力、疲惫交织："在这个城市连个稳定的住处都没有..." - 深深的漂泊感和不安全感', score: 2, type: 'detailed' },
        { text: '虽然不满但务实思考："要么接受，要么重新找房" - 冷静评估两种选择的利弊，该止损就止损', score: 2, type: 'detailed' },
        { text: '失望但平静："这就是租房的现实" - 早有心理准备，立刻开始刷租房APP', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 3,
      category: '经济压力',
      scenario: '发工资当天：房租3500、信用卡账单4000、花呗2000、朋友婚礼随份子1000。工资到账9000，扣完只剩几百块，离下次发工资还有30天。此刻你：',
      options: [
        { text: '叹口气，心想"又是月光" - 有点无奈', score: 0, type: 'vague' },
        { text: '焦虑，不知道这个月怎么过', score: 1, type: 'single' },
        { text: '深深的无力感和对未来的恐慌："这样下去什么时候能存到钱？万一生病怎么办？" - 焦虑到失眠', score: 2, type: 'detailed' },
        { text: '虽然紧张但立刻制定计划："这个月严格控制支出，下个月一定要存下2000" - 化焦虑为行动', score: 2, type: 'detailed' },
        { text: '失望和自责："我到底把钱花哪了？" - 开始反思消费习惯，下载记账APP', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 4,
      category: '恋爱关系',
      scenario: '交往1年的对象向你提出AA制：约会、吃饭、看电影都要AA。而你之前一直主动买单，现在对方说"我们应该更独立"。此刻你：',
      options: [
        { text: '有点不舒服，但也没说什么', score: 0, type: 'vague' },
        { text: '感觉不被重视，有些失落', score: 1, type: 'single' },
        { text: '失落、委屈、被拒绝的感觉："是不是不爱了？" - 开始过度解读，怀疑对方是不是想分手的前兆', score: 2, type: 'detailed' },
        { text: '理性分析这个请求："AA制本身没问题，但ta的态度和沟通方式让我不舒服" - 决定认真谈一次', score: 2, type: 'detailed' },
        { text: '能理解对方的想法："确实，经济独立也是一种尊重" - 接受这个提议，甚至觉得这样更平等', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 5,
      category: '社交/对比',
      scenario: '同学聚会上，有人开公司了、有人已经买房了、有人在大厂拿高薪。轮到你介绍工作时，你说"在一家小公司做销售/运营"，气氛突然有点尴尬。此刻你：',
      options: [
        { text: '笑了笑，心里有点不是滋味', score: 0, type: 'vague' },
        { text: '很自卑，觉得自己混得不好', score: 1, type: 'single' },
        { text: '强烈的自卑和羞愧感："同样的起点，差距怎么这么大..." - 表面维持微笑，内心在自我否定', score: 2, type: 'detailed' },
        { text: '虽然有点落差，但还算坦然："每个人的路不同，我也在努力" - 不会被同辈压力完全击垮', score: 2, type: 'detailed' },
        { text: '短暂失落后迅速调整："别人的成功不代表我的失败" - 甚至能真心为同学高兴，同时激励自己更努力', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 6,
      category: '家庭/催婚',
      scenario: '妈妈开始经常"不经意"地提起："你看谁谁谁都准备结婚了"、"有对象了吗"。你刚工作2年，还在适应职场，根本没精力想这些。此刻你：',
      options: [
        { text: '敷衍回应"嗯嗯，知道了" - 不想讨论', score: 0, type: 'vague' },
        { text: '很烦躁，不想听这些', score: 1, type: 'single' },
        { text: '被催促的压力和不被理解的委屈："我现在工作都不稳定，哪有心思谈恋爱？" - 想反驳但又怕伤害父母', score: 2, type: 'detailed' },
        { text: '理解父母的关心，但坚守边界："妈，这是我自己的事，我有自己的节奏" - 温和但坚定地沟通', score: 2, type: 'detailed' },
        { text: '感到焦虑："是不是我真的落后了？" - 开始怀疑自己是不是应该尽快找对象', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 7,
      category: '职业发展',
      scenario: '工作2年多，工资只涨了500块。同期进来的同事有的升职了，有的跳槽涨薪50%。你每天加班到很晚，但好像看不到前景。此刻你：',
      options: [
        { text: '有点迷茫，不知道该不该继续待', score: 0, type: 'vague' },
        { text: '很失落，觉得看不到希望', score: 1, type: 'single' },
        { text: '失望、不甘、对未来的焦虑："我的努力都白费了吗？" - 开始怀疑自己的选择和能力', score: 2, type: 'detailed' },
        { text: '冷静评估现状："该是时候做出改变了" - 开始更新简历，准备跳槽或内部转岗', score: 2, type: 'detailed' },
        { text: '虽然不满，但先和领导沟通："我想了解我的职业发展规划" - 给公司一次机会，也给自己一个明确答案', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 8,
      category: '工作生活平衡',
      scenario: '连续加班2周，周末还要开会。你约好的朋友聚会取消了3次，健身卡从来没用过，父母的电话也总是匆匆挂断。此刻你：',
      options: [
        { text: '很累，感觉生活被工作占满了', score: 0, type: 'vague' },
        { text: '身心俱疲，特别想逃离', score: 1, type: 'single' },
        { text: '疲惫、愤怒、失控感交织："这还是我想要的生活吗？" - 感觉被工作绑架，失去了自我', score: 2, type: 'detailed' },
        { text: '虽然累但理解现状："可能是项目关键期，熬过这段就好了" - 给自己设定了时间底线', score: 2, type: 'detailed' },
        { text: '清醒地意识到问题："长期这样下去会出问题" - 决定和领导谈谈工作量，或者考虑换工作', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 9,
      category: '孤独/漂泊',
      scenario: '深夜加班回到出租屋，打开冰箱空空如也。朋友圈看到老家的朋友聚餐，而你一个人在异地打拼，连说话的人都没有。此刻你：',
      options: [
        { text: '有点孤单，点了份外卖', score: 0, type: 'vague' },
        { text: '很孤独，特别想家', score: 1, type: 'single' },
        { text: '深深的孤独感和漂泊感："我在这个城市到底是为了什么？" - 想哭，甚至动了回老家的念头', score: 2, type: 'detailed' },
        { text: '虽然孤独，但相信这是成长的一部分："熬过这段就好了" - 给父母打个电话，感觉好了一些', score: 2, type: 'detailed' },
        { text: '短暂失落后调整心态："明天约朋友吃饭" - 意识到要主动建立社交圈，而不是被动等待', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 10,
      category: '人际/职场关系',
      scenario: '你精心准备的提案，同事换了个包装在领导面前展示，被表扬了。你有证据，但不知道该不该说出来。此刻你：',
      options: [
        { text: '憋着气，心里很不舒服', score: 0, type: 'vague' },
        { text: '非常愤怒，觉得被背叛了', score: 1, type: 'single' },
        { text: '愤怒、被背叛的痛苦、无力感："职场就是这么黑暗吗？" - 想要维护公正，又怕被孤立', score: 2, type: 'detailed' },
        { text: '冷静地收集证据，私下找领导沟通："这个方案其实是我做的" - 用事实说话，不卑不亢', score: 2, type: 'detailed' },
        { text: '虽然不满，但选择从这次事件中学习："下次一定留痕，保护自己的成果" - 吃一堑长一智', score: 2, type: 'detailed' }
      ]
    }
  ],

  // ==================== 29-35岁：成家立业 ====================
  '29-35': [
    {
      id: 1,
      category: '家庭关系',
      scenario: '春节家庭聚餐上，父母第三次追问你的结婚计划，七大姑八大姨都在旁边看着你。你的第一反应是：',
      options: [
        { text: '敷衍回应："还在看，不着急" - 心里有点不耐烦', score: 0, type: 'vague' },
        { text: '感觉压力很大，只想尽快结束这个话题', score: 1, type: 'single' },
        { text: '内心矛盾挣扎：既想立刻逃离这个尴尬场面，又怕直接离开会伤害父母的面子，焦虑和愧疚让你坐立难安', score: 2, type: 'detailed' },
        { text: '理解他们的关心出于爱，但真的厌倦了反复解释同样的问题，试图温和转移话题："妈，这个菜真好吃，您怎么做的？"', score: 2, type: 'detailed' },
        { text: '面不改色，早就准备好了标准答案："缘分到了自然就结婚了，您就放心吧" - 内心平静，已经习惯这种场面', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 2,
      category: '金钱/经济压力',
      scenario: '发工资当天晚上，你打开手机银行：房贷8000、车贷3000、父母赡养2000、日常开销3000，工资到账15000。此刻你：',
      options: [
        { text: '看一眼就关掉，心想"还行吧，够用" - 没多想', score: 0, type: 'vague' },
        { text: '心里一紧，感到明显的焦虑', score: 1, type: 'single' },
        { text: '瞬间陷入对未来的恐慌：每个月都是紧绷，万一失业或家人生病怎么办？肩上的重担让人喘不过气', score: 2, type: 'detailed' },
        { text: '虽然紧张但还算有规划："已经是家庭支柱了，得想办法开源节流" - 开始思考副业或投资', score: 2, type: 'detailed' },
        { text: '失望中带着动力："不能一直这样，必须想办法提升收入" - 开始规划职业发展或创业计划', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 3,
      category: '买房/安家',
      scenario: '看房一年多，好的买不起，能买的不满意。首付攒够了，但贷款意味着未来30年的压力。身边人都说"再不买就晚了"。此刻你：',
      options: [
        { text: '很纠结，不知道该不该下手', score: 0, type: 'vague' },
        { text: '焦虑，怕买了后悔，不买也后悔', score: 1, type: 'single' },
        { text: '深深的焦虑和对未来的恐惧：买了就是30年房奴，不买就永远漂泊 - 被撕扯得睡不着觉', score: 2, type: 'detailed' },
        { text: '冷静分析利弊："买房不只是经济决策，还关乎生活质量和安全感" - 和伴侣/家人深入沟通，共同决策', score: 2, type: 'detailed' },
        { text: '虽然压力大，但想清楚了："有个家比什么都重要" - 接受压力，准备下定决心', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 4,
      category: '生育/子女',
      scenario: '你和伴侣讨论要不要孩子：要了经济压力大、事业受影响、自由时间没了；不要又担心将来后悔、父母失望。你们已经争论了3个月。此刻你：',
      options: [
        { text: '很矛盾，真的不知道怎么选', score: 0, type: 'vague' },
        { text: '很焦虑，感觉怎么选都不对', score: 1, type: 'single' },
        { text: '深深的撕裂感和对未来的不确定："这个决定会影响一辈子..." - 想要又不敢要，恐惧、责任、压力交织', score: 2, type: 'detailed' },
        { text: '理性评估："我们得先算清楚经济账和时间账" - 列出详细的养育成本和资源规划', score: 2, type: 'detailed' },
        { text: '虽然害怕，但内心已有答案："人生不只有理性，有些事情跟着心走" - 开始倾向某一个选择', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 5,
      category: '职场晋升',
      scenario: '等了2年的晋升机会，最终被比你晚来1年的同事拿到了。领导说"你已经很优秀了，但TA更适合"。此刻你：',
      options: [
        { text: '表面平静，心里很失落', score: 0, type: 'vague' },
        { text: '非常失望，觉得不公平', score: 1, type: 'single' },
        { text: '强烈的挫败感和被否定的痛苦："我这么努力却不如别人？" - 开始怀疑自己的能力和付出的价值', score: 2, type: 'detailed' },
        { text: '失望但冷静分析："可能是我的方向错了" - 主动找领导详细了解差距，制定改进计划', score: 2, type: 'detailed' },
        { text: '虽然不甘，但看清现实："这里可能没有我的空间了" - 开始考虑跳槽或转型', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 6,
      category: '社交/对比',
      scenario: '朋友圈看到大学同学发了新房钥匙照片，配文"30岁前的小目标达成✓"，而你还在还房贷第一年，存款为0。此刻你：',
      options: [
        { text: '随手点个赞，心想"真好啊" - 有点羡慕', score: 0, type: 'vague' },
        { text: '心里一阵羡慕和失落', score: 1, type: 'single' },
        { text: '瞬间陷入自我怀疑："同样起点，为什么差距这么大？是我能力不行吗？" - 羡慕、焦虑、失落一起涌上心头', score: 2, type: 'detailed' },
        { text: '短暂羡慕后恢复平静："每个人的路不同，我也有我的节奏" - 不被同辈压力绑架', score: 2, type: 'detailed' },
        { text: '真心为朋友高兴："恭喜！🎉" - 能够欣赏别人的成功，不会过度与自己对比', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 7,
      category: '婚姻/亲密关系',
      scenario: '结婚3年，生活变成了"早上各自上班，晚上各玩手机"。你想好好聊聊，对方说"累了，改天吧"。这样的对话已经重复了很多次。此刻你：',
      options: [
        { text: '有点失望，但也没再说什么', score: 0, type: 'vague' },
        { text: '很失落，感觉对方不在乎', score: 1, type: 'single' },
        { text: '深深的孤独和被忽视的痛苦："我们的婚姻怎么变成这样了？" - 想要沟通却被拒绝，感到无力和绝望', score: 2, type: 'detailed' },
        { text: '意识到问题的严重性："不能再拖了，这周末必须认真谈一次" - 决定正式提出婚姻状态的讨论', score: 2, type: 'detailed' },
        { text: '理解对方可能也很累，但坚持沟通："我们找个时间好好聊聊，这对我们都重要" - 温和而坚定', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 8,
      category: '父母健康',
      scenario: '妈妈体检查出指标异常，需要进一步检查。你在外地工作，一边要请假回家，一边担心检查结果，一边还要安慰父母。此刻你：',
      options: [
        { text: '心里很担心，但还是要正常工作', score: 0, type: 'vague' },
        { text: '非常焦虑，什么都做不了', score: 1, type: 'single' },
        { text: '深深的恐惧和愧疚交织："父母老了，而我不在身边..." - 担心失去至亲，后悔没有多陪伴他们', score: 2, type: 'detailed' },
        { text: '虽然担心，但保持冷静："先订票回去，陪他们做检查" - 焦虑但行动力强，优先解决问题', score: 2, type: 'detailed' },
        { text: '强撑着镇定安慰父母，但挂了电话就哭了 - 在责任和恐惧之间挣扎着', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 9,
      category: '职场任务',
      scenario: '周一早上8点，刚到办公室就看到老板连发3条催促消息，桌上还堆着5个没完成的项目。此时你：',
      options: [
        { text: '叹口气坐下，心想"又是忙碌的一周" - 有点烦', score: 0, type: 'vague' },
        { text: '大脑一片空白，只觉得压力山大', score: 1, type: 'single' },
        { text: '瞬间陷入焦虑和无力感：任务太多、时间太少、不知道从哪里开始 - 拖延症发作', score: 2, type: 'detailed' },
        { text: '深呼吸三秒，打开清单开始排优先级："先回老板，然后处理最紧急的" - 虽然忙但条理清晰', score: 2, type: 'detailed' },
        { text: '反而来劲了："挑战来了！" - 泡杯咖啡，撸起袖子准备高效处理', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 10,
      category: '年龄焦虑',
      scenario: '今天是你33岁生日，回顾这一年：事业遇到瓶颈，身体开始出小毛病，同学群里都在讨论孩子和房子。此刻你：',
      options: [
        { text: '叹口气，发个朋友圈"又老了一岁" - 有点失落', score: 0, type: 'vague' },
        { text: '感到强烈的焦虑和不安', score: 1, type: 'single' },
        { text: '对时间流逝的恐慌："人生已经过去三分之一，我还有多少机会？" - 深深的中年危机感', score: 2, type: 'detailed' },
        { text: '平静地接受现状："虽然有遗憾，但每一步都有意义" - 相信过程的价值', score: 2, type: 'detailed' },
        { text: '认真反思和规划："接下来的10年，我要为这3件事努力" - 化焦虑为目标', score: 2, type: 'detailed' }
      ]
    }
  ],

  // ==================== 36-45岁：中年期 ====================
  '36-45': [
    {
      id: 1,
      category: '子女教育',
      scenario: '孩子期中考试成绩不理想，老师在家长群里点名要求"家长加强监督"。你白天工作已经很累了，晚上还要陪孩子写作业到深夜。此刻你：',
      options: [
        { text: '有点烦躁，但还是得管', score: 0, type: 'vague' },
        { text: '很焦虑，担心孩子的未来', score: 1, type: 'single' },
        { text: '焦虑、愧疚、疲惫交织："是不是我没尽到责任？" - 既担心孩子前途，又感到心力交瘁', score: 2, type: 'detailed' },
        { text: '虽然压力大，但保持理智："成绩不是全部，要和孩子好好沟通" - 关注孩子的状态而不只是分数', score: 2, type: 'detailed' },
        { text: '冷静分析问题："可能是学习方法有问题" - 决定和孩子、老师都聊聊，找到根本原因', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 2,
      category: '父母养老',
      scenario: '父亲突发疾病住院，你在外地工作。哥哥姐姐都说很忙，医院需要有人陪护，工作又正值项目关键期，孩子也要人照顾。此刻你：',
      options: [
        { text: '非常为难，不知道怎么安排', score: 0, type: 'vague' },
        { text: '压力巨大，感觉快崩溃了', score: 1, type: 'single' },
        { text: '被责任撕扯得喘不过气："工作、父母、孩子...我分身乏术" - 深深的无力感和愧疚感', score: 2, type: 'detailed' },
        { text: '虽然艰难但迅速决策："父母优先" - 立刻请假安排工作交接，回家照顾父亲', score: 2, type: 'detailed' },
        { text: '冷静协调资源："请护工，我周末回去，平时视频关心" - 尽力平衡各方需求', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 3,
      category: '职场危机',
      scenario: '公司招了一批年轻人，个个都是名校毕业、加班不抱怨、工资要求还低。部门会议上，你明显感觉到老板开始更重视他们的意见。此刻你：',
      options: [
        { text: '有点不安，担心自己的位置', score: 0, type: 'vague' },
        { text: '很焦虑，害怕被淘汰', score: 1, type: 'single' },
        { text: '深深的危机感和恐慌："我会不会被替代？40岁失业怎么办？" - 年龄焦虑被放大', score: 2, type: 'detailed' },
        { text: '虽然有压力，但认清优势："年轻人有冲劲，但我有经验和资源" - 调整策略，发挥自己的价值', score: 2, type: 'detailed' },
        { text: '把压力转为动力："不能停止学习" - 开始学新技能，保持竞争力', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 4,
      category: '身体健康',
      scenario: '年度体检报告出来：血压偏高、血脂异常、脂肪肝、颈椎问题...医生建议你"改善生活方式，定期复查"。此刻你：',
      options: [
        { text: '有点担心，但想着"应该没大事" - 安慰自己', score: 0, type: 'vague' },
        { text: '很害怕，担心身体出大问题', score: 1, type: 'single' },
        { text: '对健康的恐惧和对家庭的责任感交织："我不能倒下，家里还靠我..." - 深夜失眠想着各种最坏的可能', score: 2, type: 'detailed' },
        { text: '虽然紧张，但立刻行动："必须重视起来了" - 制定运动计划，调整饮食，定期复查', score: 2, type: 'detailed' },
        { text: '接受身体的警示："年纪大了，该慢下来了" - 开始重新审视工作和生活的平衡', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 5,
      category: '婚姻/中年危机',
      scenario: '结婚10年，你和伴侣除了孩子，似乎没什么可聊的了。TA看手机，你看电视，各自沉默。你想起刚在一起时的样子，恍如隔世。此刻你：',
      options: [
        { text: '有点遗憾，但想着"大家都这样" - 习以为常', score: 0, type: 'vague' },
        { text: '很失落，怀念以前的感觉', score: 1, type: 'single' },
        { text: '深深的孤独和对婚姻的失望："我们怎么变成最熟悉的陌生人？" - 甚至怀疑当初的选择', score: 2, type: 'detailed' },
        { text: '意识到问题的严重性："不能再这样下去了" - 决定主动改变，重新经营这段关系', score: 2, type: 'detailed' },
        { text: '接受感情的平淡期："激情会褪，但陪伴也是一种爱" - 用另一种方式看待婚姻', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 6,
      category: '经济压力',
      scenario: '盘点家庭开支：房贷5000、孩子教育4000、父母赡养3000、家庭日常3000、车贷车险2000。你的工资18000，配偶12000。账面看似平衡，但没有任何抗风险能力。此刻你：',
      options: [
        { text: '有点紧张，但还能应付', score: 0, type: 'vague' },
        { text: '很焦虑，总觉得钱不够', score: 1, type: 'single' },
        { text: '深深的不安全感："万一有人生病或失业..." - 夜深人静时常常被这种恐惧惊醒', score: 2, type: 'detailed' },
        { text: '虽然压力大，但开始规划："必须建立应急储备" - 削减非必要开支，强制储蓄', score: 2, type: 'detailed' },
        { text: '冷静面对现实："这就是中年的负重前行" - 接受压力，同时寻找开源机会', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 7,
      category: '子女青春期',
      scenario: '14岁的孩子摔门而出，吼着"你们根本不理解我！"。你只是说了一句"别总玩手机"。这样的冲突最近越来越频繁。此刻你：',
      options: [
        { text: '生气又无奈，不知道怎么办', score: 0, type: 'vague' },
        { text: '很受伤，觉得孩子不理解自己', score: 1, type: 'single' },
        { text: '愤怒、委屈、无力感混合："我这么辛苦都是为了TA..." - 想不通为什么好心却换来反抗', score: 2, type: 'detailed' },
        { text: '虽然心痛，但试图理解："这是青春期的正常反应" - 深呼吸冷静下来，思考沟通方式是不是有问题', score: 2, type: 'detailed' },
        { text: '意识到代沟的存在："我需要学习如何和青春期孩子相处" - 主动寻求专业建议或读相关书籍', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 8,
      category: '同学聚会',
      scenario: '20年同学聚会，有人事业有成，有人移民国外，有人自由职业环游世界。轮到你，只能说"还是在原来的公司，挺稳定的"。此刻你：',
      options: [
        { text: '有点尴尬，觉得自己没啥好说的', score: 0, type: 'vague' },
        { text: '很失落，觉得自己一事无成', score: 1, type: 'single' },
        { text: '强烈的挫败感和人生没有意义的空虚："这就是我的人生？" - 中年危机爆发，开始质疑过去的选择', score: 2, type: 'detailed' },
        { text: '短暂失落后释然："稳定也是一种成功，我有我的价值" - 不被别人的光环影响', score: 2, type: 'detailed' },
        { text: '坦然面对："每个人定义成功的标准不同，我觉得挺好" - 真正接受并认可自己的人生', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 9,
      category: '职业瓶颈',
      scenario: '在同一家公司工作了15年，职位和工资都到了天花板。想跳槽又担心年龄不占优势，想创业又怕风险，想躺平又不甘心。此刻你：',
      options: [
        { text: '很迷茫，不知道该怎么办', score: 0, type: 'vague' },
        { text: '感到困顿，像被困在笼子里', score: 1, type: 'single' },
        { text: '深深的无力感和对未来的恐惧："剩下的20年就这样了吗？" - 陷入中年职场困境的焦虑', score: 2, type: 'detailed' },
        { text: '虽然纠结，但开始探索："可以尝试内部转岗或者兼职咨询" - 在稳定中寻找突破', score: 2, type: 'detailed' },
        { text: '接受现实但保持活力："职场可能到顶了，但人生还有其他可能" - 培养新的兴趣和技能', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 10,
      category: '生活意义',
      scenario: '孩子住校了，父母身体还好不需要太多照顾，工作也进入自动驾驶模式。你突然发现不知道自己要干什么，生活好像失去了目标。此刻你：',
      options: [
        { text: '有点空虚，感觉生活没意思', score: 0, type: 'vague' },
        { text: '很迷茫，不知道活着为了什么', score: 1, type: 'single' },
        { text: '深深的空虚感和存在主义焦虑："我的人生意义是什么？" - 陷入对生命价值的怀疑', score: 2, type: 'detailed' },
        { text: '把这当成重新发现自己的机会："终于有时间做自己想做的事了" - 开始探索新的爱好和兴趣', score: 2, type: 'detailed' },
        { text: '平静接受人生的阶段性："这是新的开始，不是结束" - 开始规划下半场人生', score: 2, type: 'detailed' }
      ]
    }
  ],

  // ==================== 46岁以上：成熟期 ====================
  '46+': [
    {
      id: 1,
      category: '退休焦虑',
      scenario: '还有3年就要退休了，公司开始安排年轻人接手你的工作。你感觉自己在公司的话语权越来越小，很多会议都不再邀请你参加。此刻你：',
      options: [
        { text: '有点失落，但想着"快退休了" - 安慰自己', score: 0, type: 'vague' },
        { text: '很失落，感觉被边缘化了', score: 1, type: 'single' },
        { text: '被抛弃的痛苦和对未来的恐慌："退休后我还有价值吗？" - 身份认同危机，感到自己被时代抛弃', score: 2, type: 'detailed' },
        { text: '虽然失落，但看开了："是时候交棒了" - 主动帮助年轻人成长，做好传承', score: 2, type: 'detailed' },
        { text: '反而轻松："正好减少工作压力，有更多时间做自己的事" - 开始规划退休生活', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 2,
      category: '空巢期',
      scenario: '孩子出国/外地工作了，家里突然变得很安静。你做了一桌子菜，却只有你和老伴两个人。此刻你：',
      options: [
        { text: '有点不习惯，房子太安静了', score: 0, type: 'vague' },
        { text: '很孤独，想念孩子', score: 1, type: 'single' },
        { text: '深深的空虚和失落："孩子不需要我了..." - 长期养育孩子的使命突然消失，不知道如何定义自己', score: 2, type: 'detailed' },
        { text: '虽然想念，但为孩子骄傲："这是TA的人生，我得学会放手" - 祝福孩子，同时重建自己的生活', score: 2, type: 'detailed' },
        { text: '反而觉得轻松："终于可以过自己的生活了" - 和老伴计划旅行、培养兴趣', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 3,
      category: '健康/衰老',
      scenario: '膝盖开始疼，爬楼梯会喘，看近处的字要戴老花镜，体检报告一年比一年多红字。你清晰地感受到身体在衰老。此刻你：',
      options: [
        { text: '有点无奈，心想"老了" - 接受现实', score: 0, type: 'vague' },
        { text: '很害怕，担心身体垮掉', score: 1, type: 'single' },
        { text: '对衰老的恐惧和对死亡的焦虑："我还能健康多久？" - 每个小毛病都让你担心是大病的前兆', score: 2, type: 'detailed' },
        { text: '虽然担心，但积极应对："必须好好保养身体了" - 调整生活习惯，规律锻炼，定期检查', score: 2, type: 'detailed' },
        { text: '平静接受自然规律："衰老是必然的，重要的是活好当下" - 关注生活质量而不只是长度', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 4,
      category: '老朋友离世',
      scenario: '得知大学室友突发疾病去世了，你们上个月还在微信聊天。葬礼上看着遗照，你意识到"下一个会是谁？"此刻你：',
      options: [
        { text: '很难过，心里沉重', score: 0, type: 'vague' },
        { text: '非常震惊和悲伤', score: 1, type: 'single' },
        { text: '深深的悲伤和对死亡的恐惧："生命如此脆弱..." - 开始认真思考生死问题，对自己的死亡产生焦虑', score: 2, type: 'detailed' },
        { text: '悲痛中领悟："生命无常，要珍惜当下" - 开始重新审视自己的生活，想要活得更有意义', score: 2, type: 'detailed' },
        { text: '虽然悲伤，但平静接受："这是生命的一部分" - 用更豁达的态度面对生死', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 5,
      category: '照顾父母',
      scenario: '80多岁的老母亲被确诊老年痴呆，有时候认不出你，有时候半夜走失。你一边工作一边照顾，身心俱疲。此刻你：',
      options: [
        { text: '非常疲惫，感觉撑不下去了', score: 0, type: 'vague' },
        { text: '心力交瘁，很绝望', score: 1, type: 'single' },
        { text: '深深的无力感和悲痛："妈妈在一点点消失..." - 既心疼母亲，又被照护压力压垮，甚至会产生不该有的烦躁', score: 2, type: 'detailed' },
        { text: '虽然艰难，但坚持陪伴："这是我最后能为她做的" - 调整心态，寻求外部帮助，平衡照护和生活', score: 2, type: 'detailed' },
        { text: '在痛苦中学会接受："陪伴就是最好的孝顺" - 珍惜能在一起的每一天，记录美好瞬间', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 6,
      category: '孙辈教育',
      scenario: '你觉得孩子应该多吃饭少吃零食，但儿媳/女婿说"现在都科学育儿了"，不让你插手。你帮忙带孩子，却处处被指责"观念落后"。此刻你：',
      options: [
        { text: '有点委屈，但也不好说什么', score: 0, type: 'vague' },
        { text: '很委屈，觉得不被尊重', score: 1, type: 'single' },
        { text: '强烈的委屈和不被认可的痛苦："我的经验就这么不值钱？" - 既想帮忙又怕做错，吃力不讨好', score: 2, type: 'detailed' },
        { text: '虽然不舒服，但愿意学习："时代不同了，我也要与时俱进" - 主动了解新的育儿理念', score: 2, type: 'detailed' },
        { text: '保持边界："这是你们的孩子，你们决定" - 提供帮助但不干涉，守住和谐关系', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 7,
      category: '财务/养老',
      scenario: '盘算退休后的钱：退休金每月5000，存款30万，还有一套房。孩子要买房希望你支持，但你担心自己的养老储备不够。此刻你：',
      options: [
        { text: '很为难，不知道该不该帮', score: 0, type: 'vague' },
        { text: '很焦虑，担心钱不够', score: 1, type: 'single' },
        { text: '被撕扯的痛苦："帮孩子就是掏空自己..." - 想帮又怕拖累孩子，不帮又怕孩子埋怨，深深的两难', score: 2, type: 'detailed' },
        { text: '虽然心疼孩子，但要守住底线："量力而为，不能透支养老钱" - 和孩子坦诚沟通能力范围', score: 2, type: 'detailed' },
        { text: '理性评估："可以支持一部分，但不能全给" - 在帮助孩子和保障自己之间找平衡', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 8,
      category: '婚姻/老年生活',
      scenario: '和老伴一起生活了30多年，现在每天相对无言。你们很少吵架，但也很少交流，就这样平淡地过着每一天。此刻你：',
      options: [
        { text: '觉得还行，习惯了', score: 0, type: 'vague' },
        { text: '有点孤独，想要更多陪伴', score: 1, type: 'single' },
        { text: '深深的孤独感："我们怎么变成了室友？" - 想要重新连接，但不知道从何开始，甚至怀疑还有没有必要', score: 2, type: 'detailed' },
        { text: '虽然平淡，但珍惜陪伴："能一起慢慢变老就是幸福" - 用新的方式经营老年婚姻', score: 2, type: 'detailed' },
        { text: '接受感情的自然状态："不需要太多话，能在一起就好" - 陪伴本身就是最长情的告白', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 9,
      category: '社会脱节',
      scenario: '和孙子聊天，TA说的"YYDS"、"绝绝子"你完全听不懂。用智能手机总是出错，网购不会操作。你感觉自己和这个时代脱节了。此刻你：',
      options: [
        { text: '有点无奈，心想"老了跟不上" - 算了', score: 0, type: 'vague' },
        { text: '很沮丧，觉得被时代抛弃', score: 1, type: 'single' },
        { text: '强烈的挫败感和被边缘化的恐惧："我已经跟不上这个时代了..." - 觉得自己成了时代的局外人', score: 2, type: 'detailed' },
        { text: '虽然困难，但愿意学习："让孙子教教我" - 保持好奇心和学习欲望，拉近和年轻人的距离', score: 2, type: 'detailed' },
        { text: '看开了："每代人有每代人的语言" - 不强求全懂，但保持开放的心态', score: 2, type: 'detailed' }
      ]
    },
    {
      id: 10,
      category: '人生意义',
      scenario: '退休后的某个下午，你坐在公园长椅上晒太阳。回顾这一生：有成就也有遗憾，有快乐也有痛苦。你开始思考"这辈子值得吗？"此刻你：',
      options: [
        { text: '想起很多往事，心情复杂', score: 0, type: 'vague' },
        { text: '有些遗憾，但也还好', score: 1, type: 'single' },
        { text: '深深的遗憾和对未完成心愿的痛苦："要是当初...就好了" - 陷入对过去的后悔和对未来的迷茫', score: 2, type: 'detailed' },
        { text: '虽然有遗憾，但整体满意："虽不完美，但也精彩" - 接受人生的不完美，感恩拥有过的一切', score: 2, type: 'detailed' },
        { text: '内心平静："无论好坏，这就是我的人生" - 完全接纳和解，对生命有了深刻的领悟', score: 2, type: 'detailed' }
      ]
    }
  ]
};

// 结果类型定义（与原来相同，但适用于所有年龄段）
const RESULT_TYPES = [
  // 高水平 (16-20分)
  {
    level: 'high',
    orientation: 'positive',
    scoreRange: [16, 20],
    icon: '🌟',
    title: '情绪表达高手（阳光型）',
    description: '你倾向于从积极的角度感受生活，同时能够精确地识别和表达自己的情绪。你不仅能说出"我很开心"，还能区分"满足的喜悦"和"期待的兴奋"。这种能力让你在人际交往中更容易被理解，也更善于处理复杂的情绪状态。',
    advice: '继续保持这份难得的特质。建议尝试帮助身边的人提升情绪表达能力，你可以成为很好的情绪教练。同时也要警惕过度积极可能带来的情绪压抑——负面情绪同样需要被细腻地感知和表达。'
  },
  {
    level: 'high',
    orientation: 'negative',
    scoreRange: [16, 20],
    icon: '🎭',
    title: '情绪表达高手（深度型）',
    description: '你对负面情绪有着细腻的感知力，能够准确区分"焦虑"、"恐慌"、"不安"之间的微妙差异。这种敏感度让你在艺术创作、心理咨询等领域可能有独特优势。你不回避痛苦，反而善于剖析它。',
    advice: '你的情绪颗粒度很高，但要注意不要过度沉浸在负面情绪中。建议尝试用同样细腻的方式去感受生活中的美好瞬间。记录情绪日记可能很适合你，帮助你看到情绪的流动性。'
  },
  {
    level: 'high',
    orientation: 'balanced',
    scoreRange: [16, 20],
    icon: '🧘',
    title: '情绪表达高手（平衡型）',
    description: '你拥有出色的情绪认知能力，既能感受积极情绪的层次，也不回避负面感受。你理解情绪没有好坏之分，重要的是如何准确识别和表达。这种平衡让你在面对复杂情境时更加从容。',
    advice: '你已经具备了很好的情绪素养。可以尝试将这种能力应用到更多场景，比如在冲突沟通时用精准的情绪表达替代指责，或者在重要决策前细致分析自己的真实感受。'
  },

  // 中高水平 (12-15分)
  {
    level: 'medium-high',
    orientation: 'positive',
    scoreRange: [12, 15],
    icon: '☀️',
    title: '情绪认知者（乐观型）',
    description: '你对积极情绪有较好的识别能力，能够区分不同类型的快乐和满足。但在面对负面情绪时，可能还习惯用"不太好"这类模糊表达。整体来说，你的情绪表达能力处于中上水平。',
    advice: '尝试在感到不适时，给自己3秒钟时间细化感受："这是焦虑？愤怒？还是失望？"你会发现，准确命名情绪本身就有疗愈作用。推荐使用情绪词汇表来扩展你的表达库。'
  },
  {
    level: 'medium-high',
    orientation: 'negative',
    scoreRange: [12, 15],
    icon: '🌙',
    title: '情绪认知者（敏感型）',
    description: '你对痛苦和不适有较强的感知力，能够识别负面情绪的细微差别。但可能对积极情绪的表达相对笼统。你是一个善于观察的人，容易察觉到他人和自己的情绪波动。',
    advice: '尝试用同样的精细度去感受生活中的小确幸——不只是"开心"，而是"因为完成任务的成就感"或"收到认可的欣慰"。平衡地发展对积极和负面情绪的认知能力会让你更全面。'
  },
  {
    level: 'medium-high',
    orientation: 'balanced',
    scoreRange: [12, 15],
    icon: '🌈',
    title: '情绪认知者（成长型）',
    description: '你正在建立更精细的情绪认知系统。虽然有时还会用模糊词汇，但你已经开始尝试更准确地表达感受。你对情绪的态度开放而好奇，这是很好的成长基础。',
    advice: '保持这种探索的好奇心！推荐每天花3分钟写"情绪日记"，用3个具体的情绪词汇描述今天的感受。坚持21天，你会明显感觉到表达能力的提升。'
  },

  // 中等水平 (8-11分)
  {
    level: 'medium',
    orientation: 'positive',
    scoreRange: [8, 11],
    icon: '🌤️',
    title: '情绪探索者（积极型）',
    description: '你倾向于用积极的方式看待生活，但情绪表达还比较基础。你能感受到快乐和满足，但可能还不太习惯细化这些感受。有时会用"挺好的"、"还不错"来概括复杂的心情。',
    advice: '开始练习"情绪分层"：当你说"我很开心"时，追问自己"这是哪种开心？"是因为成就感、归属感，还是期待感？推荐使用星火奇缘APP的情绪词选择功能来扩展你的情绪词汇库。'
  },
  {
    level: 'medium',
    orientation: 'negative',
    scoreRange: [8, 11],
    icon: '🌧️',
    title: '情绪探索者（谨慎型）',
    description: '你对负面情绪的感知可能更敏感，但表达时倾向于使用基础词汇。"不开心"、"难受"是你的常用表达，但背后可能包含着焦虑、失望、愤怒等不同情绪。',
    advice: '尝试建立"情绪词汇库"——当感到不适时，问自己："除了不开心，还能用什么词描述？"可以参考情绪轮盘图，找到更精确的表达。同时也要关注积极情绪，培养对快乐的敏感度。'
  },
  {
    level: 'medium',
    orientation: 'balanced',
    scoreRange: [8, 11],
    icon: '⛅',
    title: '情绪探索者（发展型）',
    description: '你的情绪表达处于发展阶段，有时能精确表达，有时还在用模糊词汇。这很正常——情绪颗粒度是可以训练的技能。你已经迈出了认识自己情绪的第一步。',
    advice: '从日常小事开始练习：今天的咖啡让你感觉如何？不只是"好喝"，而是"温暖"、"满足"还是"兴奋"？每天刻意练习3次精确表达，一个月后你会看到显著变化。'
  },

  // 中低水平 (4-7分)
  {
    level: 'medium-low',
    orientation: 'positive',
    scoreRange: [4, 7],
    icon: '🌥️',
    title: '情绪启蒙者（乐天型）',
    description: '你习惯用简单的词汇表达感受，"开心"、"还行"是你的常用词。这并不意味着你感受不到复杂的情绪，而是可能还没有形成精细化表达的习惯。你的乐观是优点，但情绪颗粒度有待提升。',
    advice: '从现在开始，每天记录一个"情绪瞬间"：发生了什么？你感觉如何？尝试用2-3个具体的情绪词描述。星火奇缘的65个情绪词可以帮助你找到更准确的表达。'
  },
  {
    level: 'medium-low',
    orientation: 'negative',
    scoreRange: [4, 7],
    icon: '🌩️',
    title: '情绪启蒙者（压抑型）',
    description: '你可能习惯用"不太好"、"有点烦"来表达所有负面感受。这种模糊表达可能让你难以准确识别问题的根源——是焦虑、愤怒，还是失望？提升情绪颗粒度可以帮助你更好地应对困难。',
    advice: '当情绪涌现时，不要急于压抑或逃避。停下来问自己："我现在感受到的是什么？"如果说不清，可以参考情绪词汇表。建议寻求专业的情绪教练或心理咨询帮助。'
  },
  {
    level: 'medium-low',
    orientation: 'balanced',
    scoreRange: [4, 7],
    icon: '☁️',
    title: '情绪启蒙者（朴素型）',
    description: '你倾向于用最简单的词汇表达感受："好"、"不好"、"还行"。这可能源于文化背景、家庭教育，或者只是缺乏练习的机会。好消息是，情绪表达能力是可以快速提升的。',
    advice: '不用担心，每个人都可以学会更精确地表达情绪。推荐从阅读情绪相关的书籍开始，比如《情绪的解析》。同时使用星火奇缘APP每天记录情绪，两周后你就会看到变化。'
  },

  // 低水平 (0-3分)
  {
    level: 'low',
    orientation: 'positive',
    scoreRange: [0, 3],
    icon: '😶',
    title: '情绪觉醒者（模糊型）',
    description: '你可能很少关注自己的内心感受，习惯用"还行"、"挺好"来应付所有情绪询问。这并不意味着你没有情绪，而是可能还没有建立觉察和表达情绪的习惯。',
    advice: '是时候开始关注内心了！情绪颗粒度低可能导致情绪堆积，最终以身体症状或突然爆发的形式出现。建议每天睡前花5分钟回顾："今天我感受到了什么？"不要评判，只是观察和记录。'
  },
  {
    level: 'low',
    orientation: 'negative',
    scoreRange: [0, 3],
    icon: '😐',
    title: '情绪觉醒者（麻木型）',
    description: '你可能长期压抑情绪，或者在情感表达上存在障碍。"不知道"、"没什么感觉"是常见回答。这种情绪麻木可能是一种自我保护机制，但长期来看不利于心理健康。',
    advice: '强烈建议寻求专业心理咨询帮助，探索情绪麻木背后的原因。同时可以从简单的身体觉察开始：感受心跳、呼吸、肌肉紧张度，逐步建立与内心的连接。记住，每个人都值得被温柔对待，包括你自己。'
  },
  {
    level: 'low',
    orientation: 'balanced',
    scoreRange: [0, 3],
    icon: '🤔',
    title: '情绪觉醒者（启蒙型）',
    description: '你可能是第一次认真思考"我的感受是什么"这个问题。情绪颗粒度对你来说是一个全新的概念，但不用担心，任何时候开始都不晚。',
    advice: '欢迎来到情绪觉察的旅程！建议从最基础的开始：学会区分"开心、难过、生气、害怕、厌恶"这5种基本情绪。使用星火奇缘APP记录每天的情绪，配合情绪词汇表学习，你会逐步建立情绪认知能力。'
  }
];

// 计算测试结果的函数
function calculateResult(answers, ageGroup) {
  // 计算总分
  let totalScore = 0;
  let detailedCount = 0; // 2分选项次数
  let singleCount = 0;   // 1分选项次数
  let vagueCount = 0;    // 0分选项次数

  let positiveCount = 0;  // 积极情绪倾向题目数量
  let negativeCount = 0;  // 消极情绪倾向题目数量

  const questions = TEST_DATA_BY_AGE[ageGroup];

  answers.forEach((answer, index) => {
    const question = questions[index];
    const selectedOption = question.options[answer];

    totalScore += selectedOption.score;

    if (selectedOption.score === 2) detailedCount++;
    else if (selectedOption.score === 1) singleCount++;
    else vagueCount++;

    // 简单判断情绪倾向
    if (selectedOption.text.includes('开心') ||
        selectedOption.text.includes('兴奋') ||
        selectedOption.text.includes('满足') ||
        selectedOption.text.includes('期待') ||
        selectedOption.text.includes('平静') ||
        selectedOption.text.includes('轻松') ||
        selectedOption.text.includes('骄傲') ||
        selectedOption.text.includes('高兴')) {
      positiveCount++;
    } else if (selectedOption.text.includes('焦虑') ||
               selectedOption.text.includes('愤怒') ||
               selectedOption.text.includes('失望') ||
               selectedOption.text.includes('委屈') ||
               selectedOption.text.includes('恐慌') ||
               selectedOption.text.includes('孤独') ||
               selectedOption.text.includes('痛苦') ||
               selectedOption.text.includes('恐惧')) {
      negativeCount++;
    }
  });

  // 判断情绪导向
  let orientation;
  if (positiveCount > negativeCount + 2) {
    orientation = 'positive';
  } else if (negativeCount > positiveCount + 2) {
    orientation = 'negative';
  } else {
    orientation = 'balanced';
  }

  // 根据分数和导向找到对应的结果类型
  const resultType = RESULT_TYPES.find(type =>
    type.orientation === orientation &&
    totalScore >= type.scoreRange[0] &&
    totalScore <= type.scoreRange[1]
  );

  // 计算雷达图数据
  const radarData = {
    '情绪细致度': Math.round((detailedCount / 10) * 100),
    '积极导向': Math.round((positiveCount / 10) * 100),
    '情绪稳定性': Math.round(((10 - vagueCount) / 10) * 80),
    '共情能力': Math.round((detailedCount / 10) * 85)
  };

  return {
    ...resultType,
    score: totalScore,
    maxScore: 20,
    percentage: Math.round((totalScore / 20) * 100),
    stars: Math.ceil(totalScore / 4), // 0-5星评级
    radarData,
    detailedCount,
    singleCount,
    vagueCount
  };
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TEST_DATA_BY_AGE, RESULT_TYPES, calculateResult };
}
