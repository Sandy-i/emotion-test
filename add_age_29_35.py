# -*- coding: utf-8 -*-
"""
添加29-35岁年龄段的完整翻译
Add complete translations for 29-35 age group
"""

# 29-35岁年龄段的完整翻译
age_29_35_translation = """
  // ==================== 29-35岁：成家立业 ====================
  // Established Professionals: All 10 questions fully translated
  '29-35': [
    {
      id: 1,
      category: {
        'zh-CN': '家庭关系',
        'en-US': 'Family Relations'
      },
      scenario: {
        'zh-CN': '春节家庭聚餐上，父母第三次追问你的结婚计划，七大姑八大姨都在旁边看着你。你的第一反应是：',
        'en-US': 'At Spring Festival family dinner, parents ask about your marriage plans for the third time, with all the aunts and uncles watching. Your first reaction:'
      },
      options: [
        {
          text: {
            'zh-CN': '低头夹菜，含糊回应"还在看"',
            'en-US': 'Head down picking up food, vaguely responding "still looking"'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '坐立不安，只想尽快离开这个场合',
            'en-US': 'Fidgeting, just wanting to leave this situation quickly'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '焦虑、尴尬、愧疚、愤怒混杂：既想立刻逃离这个尴尬场面，又怕直接离开伤害父母的面子，还有对隐私被侵犯的愤怒，坐也不是站也不是',
            'en-US': 'Anxiety, embarrassment, guilt, and anger mixed: wanting to escape this awkward scene immediately, yet afraid leaving directly would hurt parents\\' face, plus anger at privacy invasion, neither sitting nor standing feels right'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理解他们的关心出于爱，但真的厌倦了反复解释，温和地转移话题："妈，这个菜真好吃，您怎么做的？"试图化解尴尬',
            'en-US': 'Understanding their concern comes from love, but truly tired of repeated explanations, gently redirecting: "Mom, this dish is delicious, how did you make it?" trying to diffuse the awkwardness'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '面不改色给出标准答案："缘分到了自然就结婚了，您就放心吧"，内心平静，早就习惯了这种场面',
            'en-US': 'Unfazed, giving standard answer: "when fate arrives, marriage will naturally happen, don\\'t worry," calm inside, long used to such scenes'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 2,
      category: {
        'zh-CN': '金钱/经济压力',
        'en-US': 'Money/Financial Pressure'
      },
      scenario: {
        'zh-CN': '发工资当天晚上，你打开手机银行：房贷8000、车贷3000、父母赡养2000、日常开销3000，工资到账15000。此刻你：',
        'en-US': 'Payday evening, opening mobile banking: mortgage 8000, car loan 3000, supporting parents 2000, daily expenses 3000, salary deposited 15000. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '看一眼就关掉了，躺回床上',
            'en-US': 'Glanced once and closed it, lying back in bed'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口像被什么勒紧了，呼吸都有点困难',
            'en-US': 'Chest feels strangled by something, even breathing a bit difficult'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '对未来的恐慌、无力感、责任感的重压："每个月都是紧绷，万一失业怎么办？万一家人生病怎么办？"肩上的重担让人喘不过气，心跳加速',
            'en-US': 'Panic about future, powerlessness, heavy burden of responsibility: "every month is tight, what if I lose my job? What if family gets sick?" the weight on shoulders suffocating, heartbeat accelerating'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然紧张但开始规划："已经是家庭支柱了，得想办法开源节流"，打开Excel开始计算副业和投资的可能性',
            'en-US': 'Though nervous, starting to plan: "already the family pillar, need to find ways to increase income and reduce expenses," opening Excel to calculate side hustle and investment possibilities'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望中带着推动力："不能一直这样，必须提升收入"，深吸一口气，开始认真规划职业发展路径或者创业计划',
            'en-US': 'Disappointment mixed with motivation: "can\\'t continue like this, must increase income," taking a deep breath, seriously planning career development path or startup plan'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 3,
      category: {
        'zh-CN': '买房/安家',
        'en-US': 'Buying Home/Settling Down'
      },
      scenario: {
        'zh-CN': '看房一年多，好的买不起，能买的不满意。首付攒够了，但贷款意味着未来30年的压力。身边人都说"再不买就晚了"。此刻你：',
        'en-US': 'House hunting for over a year, can\\'t afford the good ones, unsatisfied with affordable ones. Down payment saved, but mortgage means 30 years of pressure ahead. Everyone around says "if you don\\'t buy now it\\'ll be too late." Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着房源信息发呆，刷了又刷',
            'en-US': 'Staring blankly at listings, refreshing again and again'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '脑子里一片混乱，越想越焦虑',
            'en-US': 'Mind in chaos, getting more anxious the more I think'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '对未来深深的恐惧、被撕扯的痛苦："买了就是30年房奴，不买就永远漂泊...怎么选都是死路"，这种撕扯让人失眠，辗转反侧',
            'en-US': 'Deep fear of future, pain of being torn: "buy and become mortgage slave for 30 years, don\\'t buy and drift forever... either choice feels like a dead end," this torment causing insomnia, tossing and turning'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '焦虑但保持理性：和伴侣/家人坐下来深入沟通"买房不只是经济决策，还关乎生活质量和安全感"，列出所有利弊共同决策',
            'en-US': 'Anxious but staying rational: sitting down with partner/family for deep discussion "buying home isn\\'t just economic decision, it\\'s about quality of life and sense of security," listing all pros and cons for joint decision'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然压力大到手心出汗，但想清楚了："有个家比什么都重要"，深吸一口气，接受了这个压力，准备下定决心',
            'en-US': 'Though pressure making palms sweat, thought it through: "having a home is more important than anything," taking a deep breath, accepting this pressure, ready to commit'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 4,
      category: {
        'zh-CN': '生育/子女',
        'en-US': 'Childbearing/Children'
      },
      scenario: {
        'zh-CN': '你和伴侣讨论要不要孩子：要了经济压力大、事业受影响、自由时间没了；不要又担心将来后悔、父母失望。你们已经争论了3个月。此刻你：',
        'en-US': 'You and partner discussing whether to have kids: having them means financial pressure, career impact, losing free time; not having them worrying about future regret, disappointing parents. You\\'ve been debating for 3 months. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '躺在床上看着天花板，脑子一片混乱',
            'en-US': 'Lying in bed staring at ceiling, mind in chaos'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '焦虑到睡不着，怎么想都不对',
            'en-US': 'Anxious to the point of insomnia, nothing feels right'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的撕裂感、对未来的不确定、对选择的恐惧："这个决定会影响一辈子...选错了怎么办？"想要又不敢要，恐惧、责任、压力像三座大山',
            'en-US': 'Deep sense of being torn, uncertainty about future, fear of choice: "this decision affects entire life... what if we choose wrong?" wanting yet not daring, fear, responsibility, pressure like three mountains'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然矛盾但保持理性："我们得先算清楚账"，拿出纸笔开始列详细的养育成本、时间成本和现有资源，试图用数据做决策',
            'en-US': 'Though conflicted, staying rational: "we need to calculate clearly first," taking out paper and pen to list detailed parenting costs, time costs and available resources, trying to make data-driven decision'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然害怕但内心已有答案："人生不只有理性，有些事情跟着心走"，开始倾向某一个选择，不再那么纠结',
            'en-US': 'Though scared, already have answer inside: "life isn\\'t only rational, some things follow the heart," starting to lean toward one choice, no longer so conflicted'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 5,
      category: {
        'zh-CN': '职场晋升',
        'en-US': 'Career Advancement'
      },
      scenario: {
        'zh-CN': '等了2年的晋升机会，最终被比你晚来1年的同事拿到了。领导说"你已经很优秀了，但TA更适合"。此刻你：',
        'en-US': 'The promotion you\\'ve waited 2 years for ultimately went to a colleague who joined 1 year after you. Manager says "you\\'re already excellent, but they\\'re more suitable." Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '面无表情地点头，转身回工位',
            'en-US': 'Nodding expressionlessly, turning back to desk'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里像被什么击中了，一下子空了',
            'en-US': 'Heart feels like it was struck by something, suddenly empty'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '挫败感、被否定的痛苦、自我怀疑："我这么努力却不如别人？我到底哪里不够好？"开始怀疑自己的能力和这两年付出的价值',
            'en-US': 'Frustration, pain of rejection, self-doubt: "I worked so hard yet not as good as others? Where am I not good enough?" starting to doubt own abilities and value of two years\\' effort'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然失望到手都在发抖，但冷静分析："可能是我的方向错了"，鼓起勇气主动找领导详细了解差距在哪，准备制定改进计划',
            'en-US': 'Though disappointed to the point of shaking hands, calmly analyzing: "maybe my direction was wrong," mustering courage to proactively ask manager about the gaps, preparing improvement plan'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '不甘心但看清了现实："这里可能没有我的空间了"，深吸一口气，打开招聘网站开始考虑跳槽或者转型',
            'en-US': 'Unwilling but seeing reality clearly: "there may be no space for me here," taking a deep breath, opening job sites to consider job-hopping or career change'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 6,
      category: {
        'zh-CN': '社交/对比',
        'en-US': 'Social/Comparison'
      },
      scenario: {
        'zh-CN': '朋友圈看到大学同学发了新房钥匙照片，配文"30岁前的小目标达成✓"，而你还在还房贷第一年，存款为0。此刻你：',
        'en-US': 'Seeing college classmate post new house keys photo on social media, caption "goal before 30 achieved ✓," while you\\'re still in first year of mortgage, savings at 0. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '点个赞，继续往下刷',
            'en-US': 'Liking it and scrolling on'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里一阵酸涩，停留了几秒',
            'en-US': 'Heart feeling sour, pausing for a few seconds'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '自我怀疑、羡慕、焦虑、失落一起涌上心头："同样起点，为什么差距这么大？是我能力不行吗？"开始质疑自己的人生选择',
            'en-US': 'Self-doubt, envy, anxiety, and loss surging together: "same starting point, why such big gap? Am I not capable?" starting to question own life choices'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '短暂羡慕后恢复平静："每个人的路不同，我也有我的节奏"，深吸一口气，提醒自己不要被同辈压力绑架',
            'en-US': 'After brief envy, regaining calm: "everyone\\'s path is different, I have my own pace," taking a deep breath, reminding myself not to be held hostage by peer pressure'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '真心为朋友高兴，打字"恭喜！🎉"，能够欣赏别人的成功而不过度与自己对比',
            'en-US': 'Genuinely happy for friend, typing "Congratulations! 🎉," able to appreciate others\\' success without excessive self-comparison'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 7,
      category: {
        'zh-CN': '婚姻/亲密关系',
        'en-US': 'Marriage/Intimate Relationships'
      },
      scenario: {
        'zh-CN': '结婚3年，生活变成了"早上各自上班，晚上各玩手机"。你想好好聊聊，对方说"累了，改天吧"。这样的对话已经重复了很多次。此刻你：',
        'en-US': 'Married 3 years, life has become "separate to work in morning, separate on phones at night." You want to talk seriously, partner says "tired, another day." This conversation has repeated many times. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '沉默地坐回沙发，继续刷手机',
            'en-US': 'Silently sitting back on sofa, continuing to scroll phone'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里堵得慌，但又说不出什么',
            'en-US': 'Feeling stifled inside, but can\\'t say anything'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的孤独、被忽视的痛苦、对婚姻的失望："我们的婚姻怎么变成这样了？"想要沟通却被拒绝，感到无力和绝望，甚至怀疑当初的选择',
            'en-US': 'Deep loneliness, pain of being ignored, disappointment in marriage: "how did our marriage become like this?" wanting to communicate but being rejected, feeling powerless and desperate, even doubting the initial choice'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '意识到问题的严重性："不能再拖了"，定下决心这周末一定要认真谈一次，哪怕对方不愿意也要提出婚姻状态的讨论',
            'en-US': 'Realizing problem\\'s severity: "can\\'t delay anymore," determined to have serious talk this weekend, even if partner unwilling, must bring up discussion about marriage state'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理解对方可能也很累，但需要坚持："我们找个时间好好聊聊，这对我们都重要"，语气温和但态度坚定',
            'en-US': 'Understanding partner may also be tired, but need to persist: "let\\'s find time to talk properly, this is important for both of us," tone gentle but attitude firm'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 8,
      category: {
        'zh-CN': '父母健康',
        'en-US': 'Parents\\' Health'
      },
      scenario: {
        'zh-CN': '妈妈体检查出指标异常，需要进一步检查。你在外地工作，一边要请假回家，一边担心检查结果，一边还要安慰父母。此刻你：',
        'en-US': 'Mom\\'s checkup shows abnormal indicators, needs further examination. You work in another city, need to take leave to go home, worrying about test results, while also comforting parents. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着体检报告，手有点发抖',
            'en-US': 'Staring at medical report, hands slightly shaking'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '脑子一片空白，什么都做不了',
            'en-US': 'Mind blank, can\\'t do anything'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的恐惧、愧疚、无力感交织："父母老了，而我不在身边...万一是大病怎么办？"担心失去至亲，后悔没有多陪伴，心跳加速手心出汗',
            'en-US': 'Deep fear, guilt, and powerlessness intertwined: "parents are aging, and I\\'m not beside them... what if it\\'s serious illness?" worried about losing loved ones, regretting not spending more time, heartbeat racing palms sweating'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然担心到手都在抖，但保持冷静处理："先订票回去，陪他们做检查"，焦虑但行动力强，把焦虑转化为实际行动',
            'en-US': 'Though worried to the point of shaking hands, staying calm to handle: "book tickets first, go back to accompany them for tests," anxious but action-oriented, converting anxiety into practical action'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '强撑着镇定给父母打电话安慰"没事的，我马上回来"，但挂了电话就崩溃了，在责任和恐惧之间挣扎',
            'en-US': 'Forcing composure to call parents and comfort "it\\'s okay, I\\'m coming back now," but breaking down after hanging up, struggling between responsibility and fear'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 9,
      category: {
        'zh-CN': '职场任务',
        'en-US': 'Workplace Tasks'
      },
      scenario: {
        'zh-CN': '周一早上8点，刚到办公室就看到老板连发3条催促消息，桌上还堆着5个没完成的项目。此时你：',
        'en-US': 'Monday morning 8 AM, just arrived at office seeing boss sent 3 urgent messages, desk piled with 5 unfinished projects. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着桌面发呆，不知道从哪开始',
            'en-US': 'Staring blankly at desk, not knowing where to start'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '脑子像浆糊一样，越看越慌',
            'en-US': 'Mind like mush, getting more panicked the more I look'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '焦虑、无力感、对失控的恐惧："任务太多、时间太少、不知道从哪开始..."越慌越不知道该做什么，拖延症发作，手指悬在键盘上打不出字',
            'en-US': 'Anxiety, powerlessness, fear of losing control: "too many tasks, too little time, don\\'t know where to start..." more panicked less knowing what to do, procrastination kicking in, fingers hovering over keyboard unable to type'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然压力大但深呼吸三秒，打开清单开始排优先级："先回老板，然后处理最紧急的"，虽然忙但条理清晰',
            'en-US': 'Though stressed, taking three deep breaths, opening to-do list to prioritize: "reply to boss first, then handle most urgent," busy but organized'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '反而来劲了，感觉肾上腺素飙升："挑战来了！"，泡杯咖啡，撸起袖子准备高效处理',
            'en-US': 'Actually getting energized, feeling adrenaline rush: "challenge accepted!" making coffee, rolling up sleeves ready to handle efficiently'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 10,
      category: {
        'zh-CN': '年龄焦虑',
        'en-US': 'Age Anxiety'
      },
      scenario: {
        'zh-CN': '今天是你33岁生日，回顾这一年：事业遇到瓶颈，身体开始出小毛病，同学群里都在讨论孩子和房子。此刻你：',
        'en-US': 'Today is your 33rd birthday, reviewing this year: career hitting plateau, body starting minor issues, classmates group discussing kids and houses. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '看着蛋糕发呆，没什么心情庆祝',
            'en-US': 'Staring blankly at cake, no mood to celebrate'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里空落落的，有种说不出的感觉',
            'en-US': 'Heart feeling empty, an indescribable feeling'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '对时间流逝的恐慌、对未完成目标的焦虑、中年危机感："人生已经过去三分之一，我还有多少机会？我到底想要什么？"深深的迷茫和恐慌',
            'en-US': 'Panic about time passing, anxiety about unfinished goals, midlife crisis: "life already one-third over, how many chances do I have left? What do I really want?" deep confusion and panic'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然有遗憾，但平静接受："虽然不完美，但每一步都有意义"，相信过程的价值，不再只看结果',
            'en-US': 'Though with regrets, calmly accepting: "though not perfect, every step has meaning," believing in process value, no longer only looking at results'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '认真反思后开始规划：拿出笔记本"接下来的10年，我要为这3件事努力"，把焦虑转化为具体的目标',
            'en-US': 'After serious reflection, starting to plan: taking out notebook "in the next 10 years, I will work toward these 3 things," converting anxiety into concrete goals'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    }
  ],
"""

# 读取原始文件
with open('test-data-i18n.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 替换29-35岁年龄段的占位符
content = content.replace(
    "  '29-35': TEST_DATA_BY_AGE['29-35'] || [],",
    age_29_35_translation
)

# 更新头部注释
if "// - 29-35岁：使用中文，英文待补充 ⏳" in content:
    content = content.replace(
        "// - 29-35岁：使用中文，英文待补充 ⏳",
        "// - 29-35岁：全部10题已完整翻译 ✅"
    )
else:
    content = content.replace(
        "// - 其他年龄段：使用中文，英文待补充 ⏳",
        "// - 29-35岁：全部10题已完整翻译 ✅\n// - 其他年龄段：使用中文，英文待补充 ⏳"
    )

# 写入文件
with open('test-data-i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("OK - Added 29-35 age group translations")
print("29-35 age group: 10 questions complete")
print("Progress: 3/5 age groups completed (18-22, 23-28, 29-35)")
