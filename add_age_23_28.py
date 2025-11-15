# -*- coding: utf-8 -*-
"""
添加23-28岁年龄段的完整翻译
Add complete translations for 23-28 age group
"""

# 23-28岁年龄段的完整翻译
age_23_28_translation = """
  // ==================== 23-28岁：职场新人 ====================
  // Young Professionals: All 10 questions fully translated
  '23-28': [
    {
      id: 1,
      category: {
        'zh-CN': '职场适应',
        'en-US': 'Workplace Adaptation'
      },
      scenario: {
        'zh-CN': '入职3个月，你负责的项目在周会上被领导当众指出问题。其他同事都是工作2-3年的老员工，只有你是新人。此刻你：',
        'en-US': 'Three months into the job, your project was publicly criticized by your manager in the weekly meeting. All other colleagues are veterans with 2-3 years of experience, only you are the newbie. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '低头快速记录，手握着笔越握越紧',
            'en-US': 'Head down taking notes quickly, gripping the pen tighter and tighter'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '脸烧得厉害，耳朵嗡嗡作响',
            'en-US': 'Face burning intensely, ears ringing'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '羞愧、恐慌、自我怀疑三种感觉同时爆发：脸烫手抖，脑子里闪过"我不适合这工作吗"，同时又想"怎么解释"，心跳快到能听见',
            'en-US': 'Shame, panic, and self-doubt exploding simultaneously: face burning, hands shaking, thinking "am I not suited for this job," while also wondering "how to explain," heartbeat so fast it\\'s audible'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然手在抖、脸在烫，但快速记下问题要点，脑子开始分析："哪些是我的问题，哪些是资源不足"，准备会后请教老员工',
            'en-US': 'Though hands shaking and face burning, quickly jotting down key issues, mind starts analyzing: "which are my problems, which are resource limitations," preparing to consult senior colleagues after the meeting'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '委屈大过羞愧：喉咙发紧，眼眶发热，脑子里在想"我也很努力了，作为新人没人教就直接批评"，拿笔的手僵在半空中',
            'en-US': 'Grievance greater than shame: throat tightening, eyes heating up, thinking "I worked hard too, as a newbie getting criticized without any guidance," hand holding pen frozen mid-air'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 2,
      category: {
        'zh-CN': '租房/居住',
        'en-US': 'Renting/Housing'
      },
      scenario: {
        'zh-CN': '租了2年的房子，房东突然通知下个月要涨房租500块，不接受就要你搬走。而你刚稳定下来，又要面临找房、搬家的麻烦。此刻你：',
        'en-US': 'The apartment you\\'ve rented for 2 years, the landlord suddenly notifies you of a 500 yuan rent increase next month, or you have to move out. Just when you\\'ve settled in, now facing the hassle of finding a new place and moving. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着消息看了好几遍，没回复',
            'en-US': 'Staring at the message several times, not replying'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '气得想摔手机，但又无可奈何',
            'en-US': 'Angry enough to want to throw the phone, but feeling helpless'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '愤怒、无力、疲惫、不安全感交织："在这个城市连个稳定的住处都没有...永远都是漂着的"，深深的漂泊感让人想哭',
            'en-US': 'Anger, powerlessness, exhaustion, and insecurity intertwined: "can\\'t even have a stable place to live in this city... forever drifting," the deep sense of rootlessness makes me want to cry'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然不满但开始务实思考：打开计算器算接受涨价和重新找房哪个更划算，冷静评估利弊，该止损就止损',
            'en-US': 'Though dissatisfied, starting to think practically: opening calculator to figure out whether accepting the increase or finding new place is more cost-effective, calmly assessing pros and cons, cutting losses when needed'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望但早有准备："这就是租房的现实"，深吸一口气，打开租房APP开始刷房源，动作很麻利但心里还是有点累',
            'en-US': 'Disappointed but prepared: "this is the reality of renting," taking a deep breath, opening rental app to browse listings, moving efficiently but feeling a bit weary inside'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 3,
      category: {
        'zh-CN': '经济压力',
        'en-US': 'Financial Pressure'
      },
      scenario: {
        'zh-CN': '发工资当天：房租3500、信用卡账单4000、花呗2000、朋友婚礼随份子1000。工资到账9000，扣完只剩几百块，离下次发工资还有30天。此刻你：',
        'en-US': 'Payday: rent 3500, credit card bill 4000, Huabei 2000, friend\\'s wedding gift 1000. Salary deposited 9000, after deductions only a few hundred left, 30 days until next paycheck. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着银行短信看了好几遍，关掉手机',
            'en-US': 'Staring at the bank SMS several times, turning off phone'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口像压了块石头，脑子里反复出现"怎么办"',
            'en-US': 'Chest feels like a stone is pressing on it, "what do I do" keeps repeating in my mind'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '无力感、对未来的恐慌、自责混在一起：心跳加快，手心出汗，脑子里闪过"万一生病""万一失业""永远存不到钱"好几个画面，越想越慌',
            'en-US': 'Powerlessness, panic about the future, self-blame mixed together: heartbeat quickening, palms sweating, mind flashing through scenarios "what if I get sick" "what if I lose my job" "never able to save money," getting more panicked the more I think'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然紧张到手都在抖，但深吸一口气打开Excel开始列这个月的支出计划，至少手上有事做让心里稍微踏实一点',
            'en-US': 'Though nervous to the point of shaking hands, taking a deep breath and opening Excel to list this month\\'s expense plan, at least having something to do makes me feel slightly more settled'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望和自责："我到底把钱花哪了？"打开记账APP开始翻过去一个月的账单，试图找到可以节省的地方',
            'en-US': 'Disappointment and self-blame: "where did I spend all the money?" opening budget app to review last month\\'s expenses, trying to find areas to cut back'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 4,
      category: {
        'zh-CN': '恋爱关系',
        'en-US': 'Romantic Relationships'
      },
      scenario: {
        'zh-CN': '交往1年的对象向你提出AA制：约会、吃饭、看电影都要AA。而你之前一直主动买单，现在对方说"我们应该更独立"。此刻你：',
        'en-US': 'Your partner of 1 year proposes going Dutch: dating, dining, movies all split bills. You\\'ve always paid before, now they say "we should be more independent." Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '愣了一下，说了声"哦"，没再说什么',
            'en-US': 'Stunned for a moment, said "oh," nothing more'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里像被什么扎了一下，有点说不出的失落',
            'en-US': 'Heart feels like it was pricked by something, an indescribable sense of loss'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '失落、委屈、被拒绝的感觉一起涌来："是不是不爱了？这是想分手的前兆吗？"开始过度解读对方的每句话每个表情',
            'en-US': 'Loss, grievance, and feeling rejected all surge: "do they not love me anymore? Is this a precursor to breaking up?" starting to over-analyze every word and expression'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然有点不舒服，但理性在分析："AA制本身没问题，但ta的态度和突然提出让我不舒服"，决定找时间认真谈一次',
            'en-US': 'Though a bit uncomfortable, rational mind analyzing: "going Dutch itself isn\\'t the problem, but their attitude and sudden proposal make me uncomfortable," deciding to have a serious talk'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理解对方的想法："确实，经济独立也是一种尊重"，虽然一开始有点别扭，但想通后反而觉得这样更平等',
            'en-US': 'Understanding their perspective: "true, financial independence is also a form of respect," though initially awkward, after thinking it through actually feels more equal'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 5,
      category: {
        'zh-CN': '社交/对比',
        'en-US': 'Social/Comparison'
      },
      scenario: {
        'zh-CN': '同学聚会上，有人开公司了、有人已经买房了、有人在大厂拿高薪。轮到你介绍工作时，你说"在一家小公司做销售/运营"，气氛突然有点尴尬。此刻你：',
        'en-US': 'At a class reunion, some started companies, some already bought houses, some earn high salaries at big tech. When it\\'s your turn to introduce your job, you say "working in sales/operations at a small company," the atmosphere suddenly becomes awkward. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '笑了笑，快速转移话题',
            'en-US': 'Smiled and quickly changed the topic'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '脸有点发烫，坐立不安',
            'en-US': 'Face feeling a bit hot, fidgeting'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '强烈的自卑和羞愧感："同样的起点，差距怎么这么大...我是不是太失败了"，表面维持微笑，内心在疯狂自我否定',
            'en-US': 'Strong inferiority and shame: "same starting point, how is the gap so huge... am I too much of a failure," maintaining smile on surface, frantically self-deprecating inside'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然有点落差感觉脸有点烫，但还算坦然："每个人的路不同，我也在努力"，不会被同辈压力完全击垮',
            'en-US': 'Though feeling some gap and face a bit hot, relatively composed: "everyone\\'s path is different, I\\'m also working hard," not completely crushed by peer pressure'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '短暂失落后迅速调整心态："别人的成功不代表我的失败"，甚至能真心为同学高兴，同时暗自激励自己更努力',
            'en-US': 'After brief disappointment, quickly adjusting mindset: "others\\' success doesn\\'t mean my failure," even genuinely happy for classmates, while secretly motivating myself to work harder'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 6,
      category: {
        'zh-CN': '家庭/催婚',
        'en-US': 'Family/Marriage Pressure'
      },
      scenario: {
        'zh-CN': '妈妈开始经常"不经意"地提起："你看谁谁谁都准备结婚了"、"有对象了吗"。你刚工作2年，还在适应职场，根本没精力想这些。此刻你：',
        'en-US': 'Mom starts "casually" mentioning: "look who\\'s getting married," "do you have someone yet." You\\'ve only worked 2 years, still adapting to workplace, no energy to think about this. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '敷衍回应"嗯嗯，知道了"，戴上耳机',
            'en-US': 'Responding perfunctorily "yeah yeah, got it," putting on headphones'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '烦躁地皱起眉头，不想听这些',
            'en-US': 'Frowning irritably, not wanting to hear this'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '被催促的压力、不被理解的委屈、对自己的怀疑："我现在工作都不稳定，哪有心思谈恋爱？但是不是我真的落后了？"想反驳但又怕伤害父母',
            'en-US': 'Pressure from nagging, grievance of not being understood, self-doubt: "my job isn\\'t even stable, how can I think about dating? But am I really falling behind?" wanting to argue back but afraid of hurting parents'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理解父母的关心，但需要守住边界，深吸一口气："妈，这是我自己的事，我有自己的节奏"，温和但坚定',
            'en-US': 'Understanding parents\\' concern, but needing to maintain boundaries, taking a deep breath: "Mom, this is my own matter, I have my own pace," gentle but firm'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '妈妈的话触发了内心的焦虑："是不是我真的该找对象了？"开始怀疑自己的人生节奏是不是有问题',
            'en-US': 'Mom\\'s words trigger inner anxiety: "should I really be looking for someone?" starting to doubt whether my life pace is problematic'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 7,
      category: {
        'zh-CN': '职业发展',
        'en-US': 'Career Development'
      },
      scenario: {
        'zh-CN': '工作2年多，工资只涨了500块。同期进来的同事有的升职了，有的跳槽涨薪50%。你每天加班到很晚，但好像看不到前景。此刻你：',
        'en-US': 'Worked for over 2 years, salary only increased by 500 yuan. Peers who joined at the same time, some got promoted, some job-hopped with 50% raise. You work late every day, but can\\'t see prospects. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着工资条发呆，关掉页面继续工作',
            'en-US': 'Staring blankly at pay stub, closing the page and continuing work'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里堵得慌，感觉看不到希望',
            'en-US': 'Feeling stifled inside, can\\'t see hope'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '失望、不甘、对未来的焦虑、自我怀疑："我的努力都白费了吗？是我能力不行还是选错了？"开始怀疑自己的选择和能力',
            'en-US': 'Disappointment, unwillingness, anxiety about future, self-doubt: "were all my efforts in vain? Am I incapable or did I choose wrong?" starting to doubt my choices and abilities'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望但保持冷静："该是时候做出改变了"，打开招聘网站开始更新简历，同时评估内部转岗的可能性',
            'en-US': 'Disappointed but staying calm: "time to make a change," opening job sites to update resume, while evaluating internal transfer possibilities'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然不满，但决定先沟通："要先了解领导对我的职业发展规划"，约了领导的1对1会议，给公司一次机会也给自己一个明确答案',
            'en-US': 'Though dissatisfied, deciding to communicate first: "need to understand manager\\'s career development plan for me," scheduling 1-on-1 with manager, giving company a chance and myself a clear answer'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 8,
      category: {
        'zh-CN': '工作生活平衡',
        'en-US': 'Work-Life Balance'
      },
      scenario: {
        'zh-CN': '连续加班2周，周末还要开会。你约好的朋友聚会取消了3次，健身卡从来没用过，父母的电话也总是匆匆挂断。此刻你：',
        'en-US': 'Working overtime for 2 weeks straight, meetings even on weekends. Canceled plans with friends 3 times, gym membership never used, parents\\' calls always hurriedly hung up. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '躺在床上刷手机到凌晨，脑子空空的',
            'en-US': 'Lying in bed scrolling phone until dawn, mind empty'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '身体累到麻木，只想什么都不想',
            'en-US': 'Body exhausted to numbness, just want to think about nothing'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '疲惫、愤怒、失控感、对生活意义的怀疑："这还是我想要的生活吗？"感觉被工作绑架，失去了自我，甚至不知道自己是谁',
            'en-US': 'Exhaustion, anger, loss of control, doubting life\\'s meaning: "is this still the life I want?" feeling kidnapped by work, lost myself, not even knowing who I am'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然累但理解现状："可能是项目关键期，熬过这段就好了"，给自己设定了时间底线，如果一个月后还是这样就要做改变',
            'en-US': 'Though tired, understanding the situation: "probably project crunch time, just get through this," setting a time limit, if still like this after a month, need to make changes'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '清醒地意识到问题的严重性："长期这样下去会出问题"，开始起草给领导的邮件，准备谈谈工作量，或者同时在看其他机会',
            'en-US': 'Clearly aware of the problem\\'s severity: "continuing like this will cause problems," starting to draft email to manager, preparing to discuss workload, or simultaneously looking at other opportunities'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 9,
      category: {
        'zh-CN': '孤独/漂泊',
        'en-US': 'Loneliness/Wandering'
      },
      scenario: {
        'zh-CN': '深夜加班回到出租屋，打开冰箱空空如也。朋友圈看到老家的朋友聚餐，而你一个人在异地打拼，连说话的人都没有。此刻你：',
        'en-US': 'Late night after overtime returning to rental apartment, opening fridge to find it empty. Seeing hometown friends gathering on social media, while you\\'re alone struggling in a distant city, not even someone to talk to. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '点了份外卖，继续刷手机',
            'en-US': 'Ordered takeout, continuing to scroll phone'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '突然很想哭，但又哭不出来',
            'en-US': 'Suddenly want to cry, but can\\'t'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的孤独感、漂泊感、对意义的怀疑："我在这个城市到底是为了什么？值得吗？"想哭，喉咙发紧，甚至动了回老家的念头',
            'en-US': 'Deep loneliness, sense of drifting, doubting meaning: "what am I even doing in this city? Is it worth it?" wanting to cry, throat tightening, even thinking about going back home'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然孤独，但相信这是成长的必经之路："熬过这段就好了"，给父母打个电话，听到熟悉的声音感觉好了一些',
            'en-US': 'Though lonely, believing this is a necessary path for growth: "just get through this phase," calling parents, feeling better hearing familiar voices'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '短暂失落后意识到问题："明天约朋友吃饭"，主动打开微信开始约人，意识到要主动建立社交圈而不是被动等待',
            'en-US': 'After brief disappointment, realizing the problem: "make dinner plans with friends tomorrow," proactively opening WeChat to reach out, realizing need to actively build social circle instead of passively waiting'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 10,
      category: {
        'zh-CN': '人际/职场关系',
        'en-US': 'Interpersonal/Workplace Relations'
      },
      scenario: {
        'zh-CN': '你精心准备的提案，同事换了个包装在领导面前展示，被表扬了。你有证据，但不知道该不该说出来。此刻你：',
        'en-US': 'Your carefully prepared proposal, a colleague repackaged and presented to the manager, got praised. You have evidence, but don\\'t know whether to speak up. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '坐在工位上，握紧了鼠标',
            'en-US': 'Sitting at desk, gripping the mouse tightly'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '气得发抖，但又不敢发作',
            'en-US': 'Shaking with anger, but not daring to act'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '愤怒、被背叛的痛苦、无力感、对职场的失望："职场就是这么黑暗吗？"想要维护公正但又怕被孤立，想说但又不敢说',
            'en-US': 'Anger, pain of betrayal, powerlessness, disillusionment with workplace: "is the workplace this dark?" wanting to uphold justice but afraid of isolation, wanting to speak but not daring'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然愤怒到手都在抖，但保持冷静：开始截图保存证据，准备私下找领导沟通"这个方案其实是我做的"，用事实说话，不卑不亢',
            'en-US': 'Though angry to the point of shaking hands, staying calm: starting to screenshot and save evidence, preparing to privately communicate with manager "this proposal was actually made by me," letting facts speak, neither servile nor overbearing'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '愤怒之后是反思："下次一定要留痕迹，保护自己的成果"，虽然不满但选择从这次事件中学习，吃一堑长一智',
            'en-US': 'After anger comes reflection: "next time must leave trail to protect my work," though dissatisfied, choosing to learn from this incident, gaining wisdom from setback'
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

# 替换23-28岁年龄段的占位符
content = content.replace(
    "  '23-28': TEST_DATA_BY_AGE['23-28'] || [],",
    age_23_28_translation
)

# 更新头部注释
if "// - 23-28岁：使用中文，英文待补充 ⏳" in content:
    content = content.replace(
        "// - 23-28岁：使用中文，英文待补充 ⏳",
        "// - 23-28岁：全部10题已完整翻译 ✅"
    )
else:
    content = content.replace(
        "// - 其他年龄段：使用中文，英文待补充 ⏳",
        "// - 23-28岁：全部10题已完整翻译 ✅\n// - 其他年龄段：使用中文，英文待补充 ⏳"
    )

# 写入文件
with open('test-data-i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("OK - Added 23-28 age group translations")
print("23-28 age group: 10 questions complete")
print("Progress: 2/5 age groups completed (18-22, 23-28)")
