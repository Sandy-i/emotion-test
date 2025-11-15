// 多语言版本的情绪颗粒度测试数据
// Multilingual Emotional Granularity Test Data
//
// 翻译状态：
// - 18-22岁：前5题已完整翻译 ✅
// - 其他年龄段：使用中文，英文待补充 ⏳
//
// 使用方法：
// const questions = getLocalizedQuestions(ageGroup, lang);

const TEST_DATA_I18N = {
  // ==================== 18-22岁：大学生/应届生 ====================
  // Translation Status: First 5 questions fully translated
  '18-22': [

    {
      id: 1,
      category: {
        'zh-CN': '学业压力',
        'en-US': 'Academic Pressure'
      },
      scenario: {
        'zh-CN': '期末考试周，你同时要准备4门考试，还有一篇论文deadline就在后天。凌晨2点，宿舍只有你的台灯还亮着。此刻你：',
        'en-US': 'During finals week, you need to prepare for 4 exams simultaneously, and a paper is due in two days. It\'s 2 AM, and only your desk lamp is still on in the dorm. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着书本发呆，脑子转不动了',
            'en-US': 'Staring blankly at the textbook, mind won\'t work'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口发闷，呼吸有点急促，翻来覆去睡不着',
            'en-US': 'Chest feels tight, breathing slightly rapid, tossing and turning unable to sleep'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '焦虑、恐慌、自责同时涌上来：担心考试挂科，恐慌时间不够，自责为什么不早点准备，手心冒汗，心跳得能听见',
            'en-US': 'Anxiety, panic, and self-blame all surge at once: worried about failing exams, panicked about insufficient time, blaming myself for not preparing earlier, palms sweating, heartbeat audible'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '紧张到极点，但反而冷静下来，拿出纸笔开始列明天要复习的章节，虽然手还在抖',
            'en-US': 'Extremely tense, but paradoxically calm down, taking out paper and pen to list tomorrow\'s review chapters, though hands still trembling'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '压力大到一个临界点，反而有种兴奋感，像是肾上腺素飙升，感觉自己进入了"战斗模式"',
            'en-US': 'Pressure reaches a critical point, but instead feel a sense of excitement, like an adrenaline rush, feeling like entering "battle mode"'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 2,
      category: {
        'zh-CN': '宿舍关系',
        'en-US': 'Dorm Relationships'
      },
      scenario: {
        'zh-CN': '你的室友每天晚上打游戏语音到凌晨1点，第二天你要早起上课。你提醒过3次了，对方每次都说"不好意思"，但第二天照样继续。此刻你：',
        'en-US': 'Your roommate plays games with voice chat until 1 AM every night, while you have early classes the next day. You\'ve reminded them 3 times, and they always say "sorry," but continue the next day anyway. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '戴上耳塞，翻个身继续试图入睡',
            'en-US': 'Put on earplugs, roll over and try to sleep'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '躺在床上越想越气，盯着天花板睡不着',
            'en-US': 'Lying in bed getting angrier, staring at the ceiling unable to sleep'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '愤怒、委屈、无力感三种情绪在打架：愤怒"为什么不尊重人"，委屈"我已经说了3次"，无力"又怕破坏宿舍关系"，心里憋得难受',
            'en-US': 'Anger, grievance, and helplessness battling: angry "why no respect," aggrieved "I\'ve said it 3 times," helpless "afraid to damage dorm harmony," feeling suppressed and uncomfortable'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望多过愤怒，脑子里在想"这次必须严肃谈一次了，该守的边界要守住"，同时又有点紧张明天怎么开口',
            'en-US': 'More disappointed than angry, thinking "must have a serious talk this time, need to maintain boundaries," while also nervous about how to bring it up tomorrow'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理解和不满交织：理解对方可能没意识到影响这么大，但不满为什么要自己一直忍，身体紧绷着躺在床上',
            'en-US': 'Understanding and dissatisfaction intertwined: understanding they may not realize the impact, but dissatisfied with having to keep tolerating, lying in bed with body tense'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 3,
      category: {
        'zh-CN': '恋爱关系',
        'en-US': 'Romantic Relationships'
      },
      scenario: {
        'zh-CN': '你的初恋对象突然发消息说"我们不太合适"，然后就不再回复。你们在一起才3个月，昨天还一起吃饭看电影。此刻你：',
        'en-US': 'Your first love suddenly messages "we\'re not quite right for each other" and stops replying. You\'ve only been together for 3 months, and just had dinner and watched a movie together yesterday. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着聊天界面发呆，手指悬在键盘上不知道该打什么',
            'en-US': 'Staring blankly at the chat interface, fingers hovering over keyboard not knowing what to type'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心像被什么东西狠狠揪了一下，喉咙发紧',
            'en-US': 'Heart feels like it\'s been sharply squeezed, throat tightening'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '心碎、困惑、愤怒、自我怀疑一起爆发：心碎"怎么突然就不爱了"，困惑"连个理由都不给"，愤怒"我做错了什么"，自责"是我不够好吗"，反复翻聊天记录，越看越难过',
            'en-US': 'Heartbreak, confusion, anger, and self-doubt all explode: heartbroken "how did love suddenly end," confused "not even giving a reason," angry "what did I do wrong," self-blaming "am I not good enough," scrolling through chat history repeatedly, getting sadder'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '难过中夹杂着一丝解脱：虽然心痛，但也有种"至少不用继续猜测ta的想法了"的感觉，矛盾地松了口气',
            'en-US': 'Sadness mixed with a hint of relief: though heartbroken, also feeling "at least don\'t have to keep guessing their thoughts," paradoxically relieved'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '被拒绝的羞耻感和对自我价值的怀疑："是我在感情中不够好吗？"开始回想自己做过的每件事，试图找到答案',
            'en-US': 'Shame of rejection and self-worth doubt: "am I not good enough in relationships?" start recalling every action, trying to find answers'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 4,
      category: {
        'zh-CN': '求职/未来',
        'en-US': 'Job Hunting/Future'
      },
      scenario: {
        'zh-CN': '你投了20份简历，参加了5场面试，全都石沉大海。眼看室友都拿到offer了，你还在刷招聘网站。此刻你：',
        'en-US': 'You\'ve sent 20 resumes and attended 5 interviews, all with no response. Watching roommates get offers while you\'re still browsing job sites. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '机械地刷新页面，眼神有点空',
            'en-US': 'Mechanically refreshing pages, eyes somewhat vacant'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口像压了块石头，对着电脑屏幕走神',
            'en-US': 'Chest feels like a stone is pressing on it, spacing out at the computer screen'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '挫败感、对未来的恐慌、自我怀疑混在一起："是我能力不行吗？毕业就失业怎么办？父母会怎么看我？"越想越害怕，甚至想放弃',
            'en-US': 'Frustration, panic about future, self-doubt mixed together: "am I not capable? What if I graduate unemployed? What will parents think?" getting more scared, even wanting to give up'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然很受挫，但开始反思问题出在哪，打开Word开始修改简历，脑子里想着要不要找学长学姐请教面试技巧',
            'en-US': 'Though frustrated, starting to reflect on what went wrong, opening Word to revise resume, thinking about asking seniors for interview tips'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望但保持克制："可能是时机未到，我再调整策略"，深吸一口气，给自己定了个小目标：这周再投10家',
            'en-US': 'Disappointed but restrained: "maybe timing isn\'t right, I\'ll adjust strategy," taking a deep breath, setting a small goal: apply to 10 more this week'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 5,
      category: {
        'zh-CN': '家庭经济',
        'en-US': 'Family Finances'
      },
      scenario: {
        'zh-CN': '你想买个心仪已久的东西（鞋/游戏装备），但价格是你一个月生活费的1/3。你犹豫要不要向父母开口要钱。此刻你：',
        'en-US': 'You want to buy something you\'ve desired for a long time (shoes/gaming gear), but the price is 1/3 of your monthly allowance. You hesitate whether to ask parents for money. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着购物车发呆，鼠标在"结算"按钮上悬停',
            'en-US': 'Staring at shopping cart, mouse hovering over "checkout" button'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里痒痒的，但又有种说不出的别扭感',
            'en-US': 'Itching inside, but also an indescribable awkward feeling'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '欲望、愧疚、依赖感拉扯："好想要，但爸妈挣钱也不容易...我都这么大了还要伸手要钱"，加购物车又删除，反复纠结了好几次',
            'en-US': 'Desire, guilt, and dependency pulling: "really want it, but parents work hard for money...I\'m this old still asking for money," adding to cart then deleting, struggling repeatedly'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '渴望中带着挫败感："什么时候我才能想买什么就买什么..."这种念头反而激发了想要兼职赚钱的动力，开始搜索兼职信息',
            'en-US': 'Longing mixed with frustration: "when can I buy whatever I want..." this thought actually motivates desire to work part-time, starting to search for part-time jobs'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '欲望和理性在博弈：虽然很想要，但冷静分析"不是必需品，还是算了"，关掉页面时有点遗憾，但也有种克制住自己的成就感',
            'en-US': 'Desire and rationality competing: though wanting it badly, calmly analyzing "not a necessity, better not," closing page with some regret, but also a sense of achievement from self-control'
          },
          score: 2,
          type: 'detailed'
        }
      ]
