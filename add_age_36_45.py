# -*- coding: utf-8 -*-
"""
添加36-45岁年龄段的完整翻译
Add complete translations for 36-45 age group
"""

# 36-45岁年龄段的完整翻译
age_36_45_translation = """
  // ==================== 36-45岁：中年期 ====================
  // Mid-Career: All 10 questions fully translated
  '36-45': [
    {
      id: 1,
      category: {
        'zh-CN': '子女教育',
        'en-US': 'Children\\'s Education'
      },
      scenario: {
        'zh-CN': '孩子期中考试成绩不理想，老师在家长群里点名要求"家长加强监督"。你白天工作已经很累了，晚上还要陪孩子写作业到深夜。此刻你：',
        'en-US': 'Child\\'s midterm exam results disappointing, teacher names you in parent group demanding "parents strengthen supervision." You\\'re already exhausted from work, still need to supervise homework until midnight. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着群消息，眉头皱起来',
            'en-US': 'Staring at group message, frowning'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里一阵烦躁，又担心孩子',
            'en-US': 'Feeling irritated inside, yet worried about child'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '焦虑、愧疚、疲惫、对能力的怀疑："是不是我没尽到责任？我到底哪里做错了？"既担心孩子前途，又感到心力交瘁，想哭又哭不出来',
            'en-US': 'Anxiety, guilt, exhaustion, doubting abilities: "did I fail my responsibility? Where did I go wrong?" worrying about child\\'s future while feeling mentally drained, wanting to cry but can\\'t'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然压力大，但保持理智深吸一口气："成绩不是全部，要和孩子好好沟通状态"，关注的是孩子本身而不只是分数',
            'en-US': 'Though stressed, staying rational, taking deep breath: "grades aren\\'t everything, need to communicate with child about their state," focusing on child themselves not just scores'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '冷静分析问题根源："可能是学习方法有问题"，决定分别和孩子、老师都聊聊，找到真正的原因而不是盲目施压',
            'en-US': 'Calmly analyzing root cause: "maybe study method is the problem," deciding to talk with both child and teacher, finding real reason instead of blindly pressuring'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 2,
      category: {
        'zh-CN': '父母养老',
        'en-US': 'Elderly Care'
      },
      scenario: {
        'zh-CN': '父亲突发疾病住院，你在外地工作。哥哥姐姐都说很忙，医院需要有人陪护，工作又正值项目关键期，孩子也要人照顾。此刻你：',
        'en-US': 'Father suddenly hospitalized, you work in another city. Siblings all say they\\'re busy, hospital needs someone for care, work at critical project phase, children also need care. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '拿着手机来回走动，不知道该怎么办',
            'en-US': 'Pacing with phone, not knowing what to do'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '脑子像要炸了一样，压力巨大',
            'en-US': 'Mind feels like exploding, enormous pressure'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '被多重责任撕扯得喘不过气、深深的无力感、愧疚感："工作、父母、孩子...我分身乏术，顾了这头丢那头"，感觉自己要崩溃了',
            'en-US': 'Torn by multiple responsibilities, suffocating, deep powerlessness, guilt: "work, parents, children... can\\'t be in multiple places, taking care of one means neglecting another," feeling about to break down'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然艰难但迅速决策："父母优先"，立刻给领导打电话请假，连夜安排工作交接，订最早的票回家照顾父亲',
            'en-US': 'Though difficult, deciding quickly: "parents first," immediately calling manager for leave, arranging work handover overnight, booking earliest ticket home to care for father'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '冷静协调所有资源：一边打电话联系护工，一边安排周末回去，平时视频关心，尽力在各方需求中找平衡点',
            'en-US': 'Calmly coordinating all resources: calling to arrange caregiver while planning weekend trip back, staying connected via video normally, trying to find balance among all needs'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 3,
      category: {
        'zh-CN': '职场危机',
        'en-US': 'Career Crisis'
      },
      scenario: {
        'zh-CN': '公司招了一批年轻人，个个都是名校毕业、加班不抱怨、工资要求还低。部门会议上，你明显感觉到老板开始更重视他们的意见。此刻你：',
        'en-US': 'Company hired a batch of young people, all prestigious university graduates, don\\'t complain about overtime, salary demands low. In department meetings, you clearly feel boss starting to value their opinions more. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '坐在会议室里，手握着笔越来越紧',
            'en-US': 'Sitting in meeting room, gripping pen tighter and tighter'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口发紧，有种被边缘化的感觉',
            'en-US': 'Chest tightening, feeling marginalized'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的危机感、恐慌、对未来的恐惧："我会不会被替代？40岁失业怎么办？上有老下有小..."年龄焦虑被无限放大，甚至失眠',
            'en-US': 'Deep crisis sense, panic, fear of future: "will I be replaced? What if unemployed at 40? Elderly parents above, young children below..." age anxiety infinitely amplified, even losing sleep'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然有压力但认清自己的优势："年轻人有冲劲，但我有经验和资源"，深吸一口气，调整策略发挥自己的核心价值',
            'en-US': 'Though pressured, recognizing own advantages: "young people have energy, but I have experience and resources," taking deep breath, adjusting strategy to leverage core value'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '把压力转为推动力："不能停止学习"，下班后开始报班学新技能，保持竞争力而不是坐以待毙',
            'en-US': 'Converting pressure to motivation: "can\\'t stop learning," after work starting to enroll in classes for new skills, maintaining competitiveness instead of waiting passively'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 4,
      category: {
        'zh-CN': '身体健康',
        'en-US': 'Physical Health'
      },
      scenario: {
        'zh-CN': '年度体检报告出来：血压偏高、血脂异常、脂肪肝、颈椎问题...医生建议你"改善生活方式，定期复查"。此刻你：',
        'en-US': 'Annual checkup results: high blood pressure, abnormal blood lipids, fatty liver, cervical spine issues... doctor advises "improve lifestyle, regular follow-ups." Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '看了看报告，放进抽屉里',
            'en-US': 'Glanced at report, putting it in drawer'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里一紧，开始担心身体',
            'en-US': 'Heart sinking, starting to worry about body'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '对健康的恐惧、对家庭的责任感、对死亡的焦虑："我不能倒下，家里还靠我...万一真的得了大病怎么办？"深夜失眠反复想各种最坏的可能',
            'en-US': 'Fear for health, sense of family responsibility, death anxiety: "I can\\'t fall, family still relies on me... what if I really get serious illness?" losing sleep at night repeatedly imagining worst scenarios'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然紧张手心出汗，但立刻行动起来：当天就办了健身卡，制定运动计划，调整饮食，设定复查提醒',
            'en-US': 'Though nervous with sweaty palms, immediately taking action: getting gym membership same day, making exercise plan, adjusting diet, setting checkup reminders'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '接受身体的警示信号："年纪大了，该慢下来了"，开始重新审视工作和生活的平衡，考虑是不是要调整生活节奏',
            'en-US': 'Accepting body\\'s warning signals: "getting older, time to slow down," starting to re-examine work-life balance, considering whether to adjust life pace'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 5,
      category: {
        'zh-CN': '婚姻/中年危机',
        'en-US': 'Marriage/Midlife Crisis'
      },
      scenario: {
        'zh-CN': '结婚10年，你和伴侣除了孩子，似乎没什么可聊的了。TA看手机，你看电视，各自沉默。你想起刚在一起时的样子，恍如隔世。此刻你：',
        'en-US': 'Married 10 years, you and partner seem to have nothing to talk about except children. They look at phone, you watch TV, both silent. Recalling how you were when first together, feels like another lifetime. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '看了对方一眼，继续看电视',
            'en-US': 'Glancing at partner, continuing to watch TV'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里有点空落落的，说不出的失落',
            'en-US': 'Heart feeling empty, indescribable loss'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的孤独、对婚姻的失望、对过去的怀念、对未来的迷茫："我们怎么变成最熟悉的陌生人？当初的选择对吗？"甚至开始怀疑人生',
            'en-US': 'Deep loneliness, disappointment in marriage, nostalgia for past, confusion about future: "how did we become familiar strangers? Was the choice right?" even starting to doubt life'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '意识到问题的严重性："不能再这样下去了"，关掉电视走过去坐在对方旁边："我们谈谈好吗？"决定主动改变',
            'en-US': 'Realizing problem\\'s severity: "can\\'t continue like this," turning off TV, walking over to sit beside partner: "can we talk?" deciding to proactively change'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '接受感情的平淡期："激情会褪，但陪伴也是一种爱"，用另一种视角看待婚姻，不再执着于当初的浪漫',
            'en-US': 'Accepting emotional plateau: "passion fades, but companionship is also love," viewing marriage from different perspective, no longer attached to initial romance'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 6,
      category: {
        'zh-CN': '经济压力',
        'en-US': 'Financial Pressure'
      },
      scenario: {
        'zh-CN': '盘点家庭开支：房贷5000、孩子教育4000、父母赡养3000、家庭日常3000、车贷车险2000。你的工资18000，配偶12000。账面看似平衡，但没有任何抗风险能力。此刻你：',
        'en-US': 'Tallying family expenses: mortgage 5000, children\\'s education 4000, supporting parents 3000, daily household 3000, car loan and insurance 2000. Your salary 18000, spouse 12000. Appears balanced on paper, but no risk resistance. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着Excel表格发呆，关掉电脑',
            'en-US': 'Staring blankly at Excel, closing computer'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口发闷，总觉得钱不够用',
            'en-US': 'Chest feeling stuffy, always feeling money isn\\'t enough'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的不安全感、对未来的恐惧："万一有人生病或失业...家里立刻就垮了"，这种恐惧在夜深人静时常常把自己惊醒',
            'en-US': 'Deep insecurity, fear of future: "if anyone gets sick or loses job... family immediately collapses," this fear often jolting awake in quiet night'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然压力大手心都在出汗，但开始规划："必须建立应急储备"，当晚就列出削减非必要开支的计划，强制储蓄',
            'en-US': 'Though stressed with sweaty palms, starting to plan: "must build emergency fund," that night listing plan to cut non-essential expenses, forced savings'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '冷静面对现实深吸一口气："这就是中年的负重前行"，接受压力的同时，开始研究副业和投资，寻找开源机会',
            'en-US': 'Calmly facing reality, taking deep breath: "this is midlife bearing burden forward," while accepting pressure, starting to research side hustles and investments, seeking income opportunities'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 7,
      category: {
        'zh-CN': '子女青春期',
        'en-US': 'Children\\'s Adolescence'
      },
      scenario: {
        'zh-CN': '14岁的孩子摔门而出，吼着"你们根本不理解我！"。你只是说了一句"别总玩手机"。这样的冲突最近越来越频繁。此刻你：',
        'en-US': '14-year-old child slams door and storms out, shouting "you don\\'t understand me at all!" You only said "don\\'t always play with phone." Such conflicts increasingly frequent recently. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '愣在原地，不知道该追出去还是等一等',
            'en-US': 'Frozen in place, not knowing whether to chase or wait'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '又气又伤心，眼眶有点发热',
            'en-US': 'Both angry and hurt, eyes heating up'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '愤怒、委屈、无力感、被否定的痛苦："我这么辛苦都是为了TA...为什么不理解？"想不通为什么好心换来反抗，甚至怀疑自己的教育',
            'en-US': 'Anger, grievance, powerlessness, pain of being rejected: "I work so hard all for them... why don\\'t they understand?" can\\'t figure why good intentions met with rebellion, even doubting own parenting'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然心痛但试图理解：深呼吸冷静下来"这是青春期的正常反应"，开始反思自己的沟通方式是不是有问题',
            'en-US': 'Though heartbroken, trying to understand: deep breath to calm down "this is normal adolescent reaction," starting to reflect whether own communication style has problems'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '意识到需要学习："我需要了解如何和青春期孩子相处"，打开手机开始搜索相关书籍或者咨询专家',
            'en-US': 'Realizing need to learn: "I need to understand how to get along with adolescent children," opening phone to search for books or consult experts'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 8,
      category: {
        'zh-CN': '同学聚会',
        'en-US': 'Class Reunion'
      },
      scenario: {
        'zh-CN': '20年同学聚会，有人事业有成，有人移民国外，有人自由职业环游世界。轮到你，只能说"还是在原来的公司，挺稳定的"。此刻你：',
        'en-US': '20-year class reunion, some succeeded in careers, some emigrated abroad, some freelancing traveling the world. Your turn, can only say "still at same company, quite stable." Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '笑了笑，快速把话题转给下一个人',
            'en-US': 'Smiled and quickly passed topic to next person'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '脸有点发烫，觉得自己没什么好说的',
            'en-US': 'Face feeling hot, feeling have nothing worth saying'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '强烈的挫败感、人生虚无感、中年危机："这就是我的人生？这么多年就这样了？"开始质疑过去所有的选择，怀疑人生意义',
            'en-US': 'Strong sense of defeat, life futility, midlife crisis: "this is my life? So many years just this?" starting to question all past choices, doubting life meaning'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '短暂失落后释然："稳定也是一种成功，我有我的价值"，不被别人的光环影响，坚守自己的评价体系',
            'en-US': 'After brief disappointment, finding relief: "stability is also success, I have my value," not influenced by others\\' halos, holding to own evaluation system'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '坦然面对："每个人定义成功的标准不同，我觉得现在挺好"，真正接受并认可自己的人生选择',
            'en-US': 'Facing calmly: "everyone defines success differently, I think now is quite good," truly accepting and affirming own life choices'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 9,
      category: {
        'zh-CN': '职业瓶颈',
        'en-US': 'Career Plateau'
      },
      scenario: {
        'zh-CN': '在同一家公司工作了15年，职位和工资都到了天花板。想跳槽又担心年龄不占优势，想创业又怕风险，想躺平又不甘心。此刻你：',
        'en-US': 'Worked at same company for 15 years, position and salary hit ceiling. Want to job-hop but worried age disadvantage, want to start business but afraid of risk, want to give up but unwilling. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着电脑屏幕发呆，机械地完成工作',
            'en-US': 'Staring blankly at computer screen, mechanically completing work'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里堵得慌，像被困在笼子里',
            'en-US': 'Feeling stifled inside, like trapped in cage'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的无力感、对未来的恐惧、对过去的后悔："剩下的20年就这样了吗？我的人生还有可能吗？"陷入中年职场困境的深度焦虑',
            'en-US': 'Deep powerlessness, fear of future, regret about past: "remaining 20 years just like this? Does my life still have possibilities?" trapped in deep anxiety of midlife career predicament'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然纠结但开始探索可能性："可以尝试内部转岗或者兼职咨询"，在保持稳定的同时寻找小的突破口',
            'en-US': 'Though conflicted, starting to explore possibilities: "can try internal transfer or part-time consulting," seeking small breakthroughs while maintaining stability'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '接受现实但保持生命力："职场可能到顶了，但人生还有其他维度"，开始认真培养新的兴趣和技能，重新定义成功',
            'en-US': 'Accepting reality but maintaining vitality: "career may have peaked, but life has other dimensions," seriously cultivating new interests and skills, redefining success'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 10,
      category: {
        'zh-CN': '生活意义',
        'en-US': 'Life Meaning'
      },
      scenario: {
        'zh-CN': '孩子住校了，父母身体还好不需要太多照顾，工作也进入自动驾驶模式。你突然发现不知道自己要干什么，生活好像失去了目标。此刻你：',
        'en-US': 'Children boarding at school, parents still healthy not needing much care, work entered autopilot mode. You suddenly realize don\\'t know what to do with yourself, life seems to have lost purpose. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '坐在沙发上发呆，不知道该做什么',
            'en-US': 'Sitting on sofa spacing out, not knowing what to do'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里空落落的，有种失去方向的感觉',
            'en-US': 'Heart feeling empty, sense of losing direction'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的空虚感、存在主义焦虑、对生命意义的怀疑："我的人生意义是什么？我为什么活着？"陷入对生命价值的深层怀疑',
            'en-US': 'Deep emptiness, existential anxiety, doubting life meaning: "what is my life\\'s meaning? Why am I alive?" falling into deep doubt about life\\'s value'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '把这当成重新发现自己的机会："终于有时间做自己想做的事了"，打开笔记本开始列想尝试的兴趣和梦想',
            'en-US': 'Taking this as opportunity to rediscover self: "finally have time to do what I want," opening notebook to list interests and dreams to try'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '平静接受人生的阶段性："这是新的开始，不是结束"，深吸一口气，开始认真规划下半场人生',
            'en-US': 'Calmly accepting life\\'s phases: "this is new beginning, not ending," taking deep breath, seriously planning second half of life'
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

# 替换36-45岁年龄段的占位符
content = content.replace(
    "  '36-45': TEST_DATA_BY_AGE['36-45'] || [],",
    age_36_45_translation
)

# 更新头部注释
if "// - 36-45岁：使用中文，英文待补充 ⏳" in content:
    content = content.replace(
        "// - 36-45岁：使用中文，英文待补充 ⏳",
        "// - 36-45岁：全部10题已完整翻译 ✅"
    )
else:
    content = content.replace(
        "// - 其他年龄段：使用中文，英文待补充 ⏳",
        "// - 36-45岁：全部10题已完整翻译 ✅\n// - 其他年龄段：使用中文，英文待补充 ⏳"
    )

# 写入文件
with open('test-data-i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("OK - Added 36-45 age group translations")
print("36-45 age group: 10 questions complete")
print("Progress: 4/5 age groups completed (18-22, 23-28, 29-35, 36-45)")
print("Only 1 more age group to go!")
