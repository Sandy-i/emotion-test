// 多语言版本的情绪颗粒度测试数据
// Multilingual Emotional Granularity Test Data
//
// 翻译状态：
// - 18-22岁：全部10题已完整翻译 ✅
// - 23-28岁：全部10题已完整翻译 ✅
// - 29-35岁：全部10题已完整翻译 ✅
// - 36-45岁：全部10题已完整翻译 ✅
// - 46+岁：全部10题已完整翻译 ✅
//
// 🎉 所有年龄段翻译完成！Total: 50 questions translated
// - 46+岁：全部10题已完整翻译 ✅
//
// 🎉 所有年龄段翻译完成！Total: 50 questions translated
// - 其他年龄段：使用中文，英文待补充 ⏳
//
// 使用方法：
// const questions = getLocalizedQuestions(ageGroup, lang);

const TEST_DATA_I18N = {
  // ==================== 18-22岁：大学生/应届生 ====================
  // Translation Status: All 10 questions fully translated
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
    },
    {
      id: 6,
      category: {
        'zh-CN': '社交对比',
        'en-US': 'Social Comparison'
      },
      scenario: {
        'zh-CN': '朋友圈看到高中同学发旅游照片：新加坡、日本、欧洲...而你暑假只能在家待着，或者打工挣生活费。此刻你：',
        'en-US': 'Seeing high school classmates posting travel photos on social media: Singapore, Japan, Europe... while you can only stay home during summer break, or work part-time to earn living expenses. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '划过去了，继续往下刷',
            'en-US': 'Scroll past and keep browsing'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里有点酸酸的，停留了几秒',
            'en-US': 'Feeling a bit sour inside, pausing for a few seconds'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '羡慕、自卑、不甘心一起涌上来："同龄人的生活差距怎么这么大..."忍不住对比家境，越想越不是滋味，甚至有点恨自己没有投好胎',
            'en-US': 'Envy, inferiority, and unwillingness surge together: "Why is the gap between peers so huge..." can\'t help comparing family backgrounds, feeling worse the more I think about it, even resenting not being born into a better family'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '羡慕中保持清醒："每个人的起点不同，我有我的节奏"，虽然心里还是有点失落，但能接受这个现实',
            'en-US': 'Staying clear-minded amid envy: "Everyone has different starting points, I have my own pace," though still a bit disappointed, can accept this reality'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '短暂羡慕后情绪转向："等我有能力了，也要去看世界"，把羡慕转化为具体目标，开始盘算要存多少钱',
            'en-US': 'After brief envy, emotions shift: "When I have the means, I\'ll see the world too," converting envy into concrete goals, starting to calculate how much to save'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 7,
      category: {
        'zh-CN': '学业/专业',
        'en-US': 'Academic/Major'
      },
      scenario: {
        'zh-CN': '大三了，你发现自己对所学专业完全没兴趣，每天上课都像坐牢。但转专业已经来不及了。此刻你：',
        'en-US': 'In junior year, you realize you have zero interest in your major, and every class feels like prison. But it\'s too late to change majors. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '坐在教室最后一排，眼神空洞地看着黑板',
            'en-US': 'Sitting in the back row, staring blankly at the blackboard'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '听着听着就走神了，脑子里一片混乱',
            'en-US': 'Mind wandering while listening, brain in chaos'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '后悔、恐慌、对未来的迷茫交织："当初怎么选了这个专业？浪费了这么多时间，毕业后怎么办？"感觉人生被困住了，找不到出路',
            'en-US': 'Regret, panic, and confusion about the future intertwined: "Why did I choose this major? Wasted so much time, what after graduation?" feeling life is trapped with no way out'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然不喜欢专业，但脑子开始活跃起来："可以考研换方向，或者毕业转行"，在迷茫中努力寻找其他可能性',
            'en-US': 'Though disliking the major, mind starts becoming active: "Can switch directions in grad school, or change careers after graduation," striving to find other possibilities amid confusion'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '接受了现实但有了Plan B：想通了"先把学位拿到手，工作不一定要专业对口"，心里反而踏实了一些',
            'en-US': 'Accepting reality but having Plan B: figured out "get the degree first, work doesn\'t have to match the major," actually feeling more settled inside'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 8,
      category: {
        'zh-CN': '社团/集体活动',
        'en-US': 'Club/Group Activities'
      },
      scenario: {
        'zh-CN': '你在社团/学生会策划的活动出了问题，部长在例会上当着所有人的面批评了你。其他成员都低头不语。此刻你：',
        'en-US': 'The event you planned for the club/student council had problems, and the president criticized you publicly in the meeting. Other members all keep their heads down in silence. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '低头盯着笔记本，脸有点发烫',
            'en-US': 'Head down staring at notebook, face feeling hot'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '耳朵嗡嗡作响，恨不得立刻消失',
            'en-US': 'Ears ringing, wishing to disappear immediately'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '羞愧、委屈、愤怒同时爆发：脸烫得厉害，喉咙发紧，脑子里闪过"我也很努力了，为什么要当众说"，眼眶泛红但拼命忍着不哭出来',
            'en-US': 'Shame, grievance, and anger exploding simultaneously: face burning badly, throat tightening, thinking "I worked hard too, why criticize publicly," eyes reddening but desperately holding back tears'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然很尴尬脸也在发烫，但快速记下批评的要点，脑子里在分析："确实是我没考虑周全，下次要注意这几点"',
            'en-US': 'Though very embarrassed and face burning, quickly jotting down the criticism points, mind analyzing: "Indeed I didn\'t think it through, need to watch these points next time"'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '羞愧之外更多的是被冒犯："当众批评太不尊重人了"，表面平静但心里记下这笔账，开始重新评估这个组织值不值得继续待',
            'en-US': 'Beyond shame, more feeling offended: "Public criticism is too disrespectful," outwardly calm but mentally noting this down, starting to reassess whether this organization is worth staying in'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 9,
      category: {
        'zh-CN': '友情/背叛',
        'en-US': 'Friendship/Betrayal'
      },
      scenario: {
        'zh-CN': '你的好朋友偷偷和你暗恋的对象在一起了，你是最后一个知道的。你们三个一起上过很多次课，一起吃过很多次饭。此刻你：',
        'en-US': 'Your good friend secretly got together with your crush, and you\'re the last to know. The three of you have attended many classes and shared many meals together. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '听到消息时愣住了，半天说不出话',
            'en-US': 'Stunned upon hearing the news, speechless for a long time'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口像被什么东西堵住了，呼吸都有点困难',
            'en-US': 'Chest feels blocked by something, even breathing slightly difficult'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '被背叛的痛苦、嫉妒、失落、愤怒一起爆发："所谓的好朋友...我算什么？"既心碎于失恋，又愤怒于被蒙在鼓里，甚至想割席绝交',
            'en-US': 'Pain of betrayal, jealousy, loss, and anger exploding together: "So-called good friend... what am I to them?" heartbroken over lost love and furious about being kept in the dark, even wanting to cut ties completely'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望和释然矛盾地交织：失望于朋友的做法，但也有种"既然ta选择了别人，说明我们不合适"的释然，虽然难过但选择放下',
            'en-US': 'Disappointment and relief contradictorily intertwined: disappointed in friend\'s actions, but also relieved thinking "since they chose someone else, we weren\'t meant to be," though sad, choosing to let go'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '难过中保持理性："感情不能强求，谁也没错"，虽然心痛但能接受现实，只是需要时间一个人静静疗伤',
            'en-US': 'Staying rational amid sadness: "Love can\'t be forced, no one\'s at fault," though heartbroken, can accept reality, just needing time alone to quietly heal'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 10,
      category: {
        'zh-CN': '毕业/未来焦虑',
        'en-US': 'Graduation/Future Anxiety'
      },
      scenario: {
        'zh-CN': '毕业倒计时100天，宿舍里有人已经签约大厂，有人准备出国，有人要考公，而你还不知道自己要做什么。此刻你：',
        'en-US': '100 days until graduation, some roommates already signed with big companies, some preparing to study abroad, some taking civil service exams, while you still don\'t know what to do. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '躺在床上刷手机，越刷越空虚',
            'en-US': 'Lying in bed scrolling through phone, feeling emptier and emptier'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里慌得很，但又不知道该做什么',
            'en-US': 'Panicking inside, but not knowing what to do'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '对未来深深的恐慌、自我怀疑、被抛弃感："别人都有方向了，我怎么还这么迷茫？是我太废了吗？"焦虑到失眠，感觉要被时代抛弃',
            'en-US': 'Deep panic about the future, self-doubt, and feeling abandoned: "Others all have directions, why am I still so lost? Am I too useless?" anxious to the point of insomnia, feeling left behind by the times'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '焦虑催生行动力："我得抓紧时间想清楚了"，打开备忘录开始列所有可能的选项，逐个分析利弊，虽然还是紧张但至少在做事',
            'en-US': 'Anxiety catalyzing action: "I need to figure it out quickly," opening memo app to list all possible options, analyzing pros and cons one by one, though still nervous, at least taking action'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然还没方向，但内心相对平静："慢慢来，每个人的节奏不同"，相信自己最终会找到答案，只是需要更多时间',
            'en-US': 'Though still without direction, relatively calm inside: "Take it slow, everyone has different paces," believing will eventually find the answer, just needing more time'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    }
  ],

  // ==================== 其他年龄段 ====================
  // 注意：以下年龄段暂时使用中文数据，英文翻译进行中
  // Note: Following age groups temporarily use Chinese, English translation in progress


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
            'en-US': 'Shame, panic, and self-doubt exploding simultaneously: face burning, hands shaking, thinking "am I not suited for this job," while also wondering "how to explain," heartbeat so fast it\'s audible'
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
        'en-US': 'The apartment you\'ve rented for 2 years, the landlord suddenly notifies you of a 500 yuan rent increase next month, or you have to move out. Just when you\'ve settled in, now facing the hassle of finding a new place and moving. Right now you:'
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
            'en-US': 'Anger, powerlessness, exhaustion, and insecurity intertwined: "can\'t even have a stable place to live in this city... forever drifting," the deep sense of rootlessness makes me want to cry'
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
        'en-US': 'Payday: rent 3500, credit card bill 4000, Huabei 2000, friend\'s wedding gift 1000. Salary deposited 9000, after deductions only a few hundred left, 30 days until next paycheck. Right now you:'
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
            'en-US': 'Though nervous to the point of shaking hands, taking a deep breath and opening Excel to list this month\'s expense plan, at least having something to do makes me feel slightly more settled'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失望和自责："我到底把钱花哪了？"打开记账APP开始翻过去一个月的账单，试图找到可以节省的地方',
            'en-US': 'Disappointment and self-blame: "where did I spend all the money?" opening budget app to review last month\'s expenses, trying to find areas to cut back'
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
        'en-US': 'Your partner of 1 year proposes going Dutch: dating, dining, movies all split bills. You\'ve always paid before, now they say "we should be more independent." Right now you:'
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
            'en-US': 'Though a bit uncomfortable, rational mind analyzing: "going Dutch itself isn\'t the problem, but their attitude and sudden proposal make me uncomfortable," deciding to have a serious talk'
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
        'en-US': 'At a class reunion, some started companies, some already bought houses, some earn high salaries at big tech. When it\'s your turn to introduce your job, you say "working in sales/operations at a small company," the atmosphere suddenly becomes awkward. Right now you:'
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
            'en-US': 'Though feeling some gap and face a bit hot, relatively composed: "everyone\'s path is different, I\'m also working hard," not completely crushed by peer pressure'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '短暂失落后迅速调整心态："别人的成功不代表我的失败"，甚至能真心为同学高兴，同时暗自激励自己更努力',
            'en-US': 'After brief disappointment, quickly adjusting mindset: "others\' success doesn\'t mean my failure," even genuinely happy for classmates, while secretly motivating myself to work harder'
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
        'en-US': 'Mom starts "casually" mentioning: "look who\'s getting married," "do you have someone yet." You\'ve only worked 2 years, still adapting to workplace, no energy to think about this. Right now you:'
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
            'en-US': 'Pressure from nagging, grievance of not being understood, self-doubt: "my job isn\'t even stable, how can I think about dating? But am I really falling behind?" wanting to argue back but afraid of hurting parents'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理解父母的关心，但需要守住边界，深吸一口气："妈，这是我自己的事，我有自己的节奏"，温和但坚定',
            'en-US': 'Understanding parents\' concern, but needing to maintain boundaries, taking a deep breath: "Mom, this is my own matter, I have my own pace," gentle but firm'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '妈妈的话触发了内心的焦虑："是不是我真的该找对象了？"开始怀疑自己的人生节奏是不是有问题',
            'en-US': 'Mom\'s words trigger inner anxiety: "should I really be looking for someone?" starting to doubt whether my life pace is problematic'
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
        'en-US': 'Worked for over 2 years, salary only increased by 500 yuan. Peers who joined at the same time, some got promoted, some job-hopped with 50% raise. You work late every day, but can\'t see prospects. Right now you:'
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
            'en-US': 'Feeling stifled inside, can\'t see hope'
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
            'en-US': 'Though dissatisfied, deciding to communicate first: "need to understand manager\'s career development plan for me," scheduling 1-on-1 with manager, giving company a chance and myself a clear answer'
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
        'en-US': 'Working overtime for 2 weeks straight, meetings even on weekends. Canceled plans with friends 3 times, gym membership never used, parents\' calls always hurriedly hung up. Right now you:'
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
            'en-US': 'Exhaustion, anger, loss of control, doubting life\'s meaning: "is this still the life I want?" feeling kidnapped by work, lost myself, not even knowing who I am'
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
            'en-US': 'Clearly aware of the problem\'s severity: "continuing like this will cause problems," starting to draft email to manager, preparing to discuss workload, or simultaneously looking at other opportunities'
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
        'en-US': 'Late night after overtime returning to rental apartment, opening fridge to find it empty. Seeing hometown friends gathering on social media, while you\'re alone struggling in a distant city, not even someone to talk to. Right now you:'
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
            'en-US': 'Suddenly want to cry, but can\'t'
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
        'en-US': 'Your carefully prepared proposal, a colleague repackaged and presented to the manager, got praised. You have evidence, but don\'t know whether to speak up. Right now you:'
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
            'en-US': 'Anxiety, embarrassment, guilt, and anger mixed: wanting to escape this awkward scene immediately, yet afraid leaving directly would hurt parents\' face, plus anger at privacy invasion, neither sitting nor standing feels right'
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
            'en-US': 'Unfazed, giving standard answer: "when fate arrives, marriage will naturally happen, don\'t worry," calm inside, long used to such scenes'
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
            'en-US': 'Disappointment mixed with motivation: "can\'t continue like this, must increase income," taking a deep breath, seriously planning career development path or startup plan'
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
        'en-US': 'House hunting for over a year, can\'t afford the good ones, unsatisfied with affordable ones. Down payment saved, but mortgage means 30 years of pressure ahead. Everyone around says "if you don\'t buy now it\'ll be too late." Right now you:'
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
            'en-US': 'Deep fear of future, pain of being torn: "buy and become mortgage slave for 30 years, don\'t buy and drift forever... either choice feels like a dead end," this torment causing insomnia, tossing and turning'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '焦虑但保持理性：和伴侣/家人坐下来深入沟通"买房不只是经济决策，还关乎生活质量和安全感"，列出所有利弊共同决策',
            'en-US': 'Anxious but staying rational: sitting down with partner/family for deep discussion "buying home isn\'t just economic decision, it\'s about quality of life and sense of security," listing all pros and cons for joint decision'
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
        'en-US': 'You and partner discussing whether to have kids: having them means financial pressure, career impact, losing free time; not having them worrying about future regret, disappointing parents. You\'ve been debating for 3 months. Right now you:'
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
            'en-US': 'Though scared, already have answer inside: "life isn\'t only rational, some things follow the heart," starting to lean toward one choice, no longer so conflicted'
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
        'en-US': 'The promotion you\'ve waited 2 years for ultimately went to a colleague who joined 1 year after you. Manager says "you\'re already excellent, but they\'re more suitable." Right now you:'
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
            'en-US': 'Frustration, pain of rejection, self-doubt: "I worked so hard yet not as good as others? Where am I not good enough?" starting to doubt own abilities and value of two years\' effort'
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
        'en-US': 'Seeing college classmate post new house keys photo on social media, caption "goal before 30 achieved ✓," while you\'re still in first year of mortgage, savings at 0. Right now you:'
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
            'en-US': 'After brief envy, regaining calm: "everyone\'s path is different, I have my own pace," taking a deep breath, reminding myself not to be held hostage by peer pressure'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '真心为朋友高兴，打字"恭喜！🎉"，能够欣赏别人的成功而不过度与自己对比',
            'en-US': 'Genuinely happy for friend, typing "Congratulations! 🎉," able to appreciate others\' success without excessive self-comparison'
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
            'en-US': 'Feeling stifled inside, but can\'t say anything'
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
            'en-US': 'Realizing problem\'s severity: "can\'t delay anymore," determined to have serious talk this weekend, even if partner unwilling, must bring up discussion about marriage state'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理解对方可能也很累，但需要坚持："我们找个时间好好聊聊，这对我们都重要"，语气温和但态度坚定',
            'en-US': 'Understanding partner may also be tired, but need to persist: "let\'s find time to talk properly, this is important for both of us," tone gentle but attitude firm'
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
        'en-US': 'Parents\' Health'
      },
      scenario: {
        'zh-CN': '妈妈体检查出指标异常，需要进一步检查。你在外地工作，一边要请假回家，一边担心检查结果，一边还要安慰父母。此刻你：',
        'en-US': 'Mom\'s checkup shows abnormal indicators, needs further examination. You work in another city, need to take leave to go home, worrying about test results, while also comforting parents. Right now you:'
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
            'en-US': 'Mind blank, can\'t do anything'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的恐惧、愧疚、无力感交织："父母老了，而我不在身边...万一是大病怎么办？"担心失去至亲，后悔没有多陪伴，心跳加速手心出汗',
            'en-US': 'Deep fear, guilt, and powerlessness intertwined: "parents are aging, and I\'m not beside them... what if it\'s serious illness?" worried about losing loved ones, regretting not spending more time, heartbeat racing palms sweating'
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
            'en-US': 'Forcing composure to call parents and comfort "it\'s okay, I\'m coming back now," but breaking down after hanging up, struggling between responsibility and fear'
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
            'en-US': 'Anxiety, powerlessness, fear of losing control: "too many tasks, too little time, don\'t know where to start..." more panicked less knowing what to do, procrastination kicking in, fingers hovering over keyboard unable to type'
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



  // ==================== 36-45岁：中年期 ====================
  // Mid-Career: All 10 questions fully translated
  '36-45': [
    {
      id: 1,
      category: {
        'zh-CN': '子女教育',
        'en-US': 'Children\'s Education'
      },
      scenario: {
        'zh-CN': '孩子期中考试成绩不理想，老师在家长群里点名要求"家长加强监督"。你白天工作已经很累了，晚上还要陪孩子写作业到深夜。此刻你：',
        'en-US': 'Child\'s midterm exam results disappointing, teacher names you in parent group demanding "parents strengthen supervision." You\'re already exhausted from work, still need to supervise homework until midnight. Right now you:'
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
            'en-US': 'Anxiety, guilt, exhaustion, doubting abilities: "did I fail my responsibility? Where did I go wrong?" worrying about child\'s future while feeling mentally drained, wanting to cry but can\'t'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然压力大，但保持理智深吸一口气："成绩不是全部，要和孩子好好沟通状态"，关注的是孩子本身而不只是分数',
            'en-US': 'Though stressed, staying rational, taking deep breath: "grades aren\'t everything, need to communicate with child about their state," focusing on child themselves not just scores'
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
        'en-US': 'Father suddenly hospitalized, you work in another city. Siblings all say they\'re busy, hospital needs someone for care, work at critical project phase, children also need care. Right now you:'
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
            'en-US': 'Torn by multiple responsibilities, suffocating, deep powerlessness, guilt: "work, parents, children... can\'t be in multiple places, taking care of one means neglecting another," feeling about to break down'
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
        'en-US': 'Company hired a batch of young people, all prestigious university graduates, don\'t complain about overtime, salary demands low. In department meetings, you clearly feel boss starting to value their opinions more. Right now you:'
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
            'en-US': 'Converting pressure to motivation: "can\'t stop learning," after work starting to enroll in classes for new skills, maintaining competitiveness instead of waiting passively'
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
            'en-US': 'Fear for health, sense of family responsibility, death anxiety: "I can\'t fall, family still relies on me... what if I really get serious illness?" losing sleep at night repeatedly imagining worst scenarios'
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
            'en-US': 'Accepting body\'s warning signals: "getting older, time to slow down," starting to re-examine work-life balance, considering whether to adjust life pace'
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
            'en-US': 'Realizing problem\'s severity: "can\'t continue like this," turning off TV, walking over to sit beside partner: "can we talk?" deciding to proactively change'
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
        'en-US': 'Tallying family expenses: mortgage 5000, children\'s education 4000, supporting parents 3000, daily household 3000, car loan and insurance 2000. Your salary 18000, spouse 12000. Appears balanced on paper, but no risk resistance. Right now you:'
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
            'en-US': 'Chest feeling stuffy, always feeling money isn\'t enough'
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
        'en-US': 'Children\'s Adolescence'
      },
      scenario: {
        'zh-CN': '14岁的孩子摔门而出，吼着"你们根本不理解我！"。你只是说了一句"别总玩手机"。这样的冲突最近越来越频繁。此刻你：',
        'en-US': '14-year-old child slams door and storms out, shouting "you don\'t understand me at all!" You only said "don\'t always play with phone." Such conflicts increasingly frequent recently. Right now you:'
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
            'en-US': 'Anger, grievance, powerlessness, pain of being rejected: "I work so hard all for them... why don\'t they understand?" can\'t figure why good intentions met with rebellion, even doubting own parenting'
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
            'en-US': 'After brief disappointment, finding relief: "stability is also success, I have my value," not influenced by others\' halos, holding to own evaluation system'
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
        'en-US': 'Children boarding at school, parents still healthy not needing much care, work entered autopilot mode. You suddenly realize don\'t know what to do with yourself, life seems to have lost purpose. Right now you:'
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
            'en-US': 'Deep emptiness, existential anxiety, doubting life meaning: "what is my life\'s meaning? Why am I alive?" falling into deep doubt about life\'s value'
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
            'en-US': 'Calmly accepting life\'s phases: "this is new beginning, not ending," taking deep breath, seriously planning second half of life'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    }
  ],


  // 46+ age group
  '46+': [
    {
      id: 1,
      category: {
        'zh-CN': '退休焦虑',
        'en-US': 'Retirement Anxiety'
      },
      scenario: {
        'zh-CN': '还有3年就要退休了，公司开始安排年轻人接手你的工作。你感觉自己在公司的话语权越来越小，很多会议都不再邀请你参加。此刻你：',
        'en-US': '3 years until retirement, the company starts having younger people take over your work. You feel your influence diminishing, and many meetings no longer include you. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '坐在办公桌前发呆，手指无意识地敲击桌面',
            'en-US': 'Sitting at desk spacing out, fingers unconsciously tapping the surface'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口像被什么东西压着，呼吸有点不畅',
            'en-US': 'Chest feeling pressed by something, breathing slightly difficult'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '被抛弃的痛苦、对未来的恐慌、身份认同危机同时涌现：心跳加快，脑子里反复闪过"退休后我还有价值吗？我还是谁？"，感觉自己被时代抛弃了',
            'en-US': 'Pain of being abandoned, panic about the future, and identity crisis surging together: heart racing, mind repeatedly flashing "Will I still have value after retirement? Who am I then?" feeling left behind by the times'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '失落中带着释然：虽然心里有点不舒服，但能理解这是自然规律，开始主动帮年轻人熟悉业务，在传承中找到新的意义',
            'en-US': 'Loss mixed with relief: though somewhat uncomfortable inside, understanding this is natural law, proactively helping young people learn the business, finding new meaning in mentorship'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '反而轻松和期待交织：一边庆幸"终于可以少操心了"，一边兴奋地盘算退休后要做的事情，手机里已经收藏了好几个旅行攻略',
            'en-US': 'Relief and anticipation intertwined: both glad "finally can worry less" and excitedly planning post-retirement activities, phone already bookmarked with several travel guides'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 2,
      category: {
        'zh-CN': '空巢期',
        'en-US': 'Empty Nest'
      },
      scenario: {
        'zh-CN': '孩子出国/外地工作了，家里突然变得很安静。你做了一桌子菜，却只有你和老伴两个人。此刻你：',
        'en-US': 'Your child went abroad/to another city for work, home suddenly became very quiet. You prepared a table full of dishes, but only you and your spouse are there. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着满桌的菜发呆，筷子夹起又放下',
            'en-US': 'Staring blankly at the table of food, chopsticks picking up and putting down'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '喉咙发紧，鼻子有点酸',
            'en-US': 'Throat tightening, nose feeling sour'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的空虚、失落、失去人生意义的恐慌："二十多年的养育使命突然消失了，我还剩下什么？"眼眶发热，食物咽不下去，感觉整个人被掏空了',
            'en-US': 'Deep emptiness, loss, and panic about losing life purpose: "Over twenty years of parenting mission suddenly disappeared, what do I have left?" eyes burning, food unable to swallow, feeling completely hollowed out'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '想念中夹杂着骄傲和欣慰：虽然眼睛有点湿润，但想到孩子有了自己的天地，嘴角还是忍不住上扬，给孩子发了条消息"注意身体"就没再打扰',
            'en-US': 'Longing mixed with pride and comfort: though eyes slightly moist, thinking of child having their own world, corners of mouth still curling up, sent a message "take care of yourself" and didn\'t disturb further'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '轻松感和一丝愧疚混合：暗自庆幸"终于可以过自己的生活了"，但又觉得不该这么想，和老伴相视一笑，开始计划起久违的二人世界',
            'en-US': 'Relief mixed with slight guilt: secretly glad "finally can live our own life," but feeling shouldn\'t think this way, exchanging smiles with spouse, starting to plan long-overdue time together'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 3,
      category: {
        'zh-CN': '健康/衰老',
        'en-US': 'Health/Aging'
      },
      scenario: {
        'zh-CN': '膝盖开始疼，爬楼梯会喘，看近处的字要戴老花镜，体检报告一年比一年多红字。你清晰地感受到身体在衰老。此刻你：',
        'en-US': 'Knees starting to hurt, getting breathless climbing stairs, needing reading glasses for close text, health check reports showing more red flags each year. You clearly feel your body aging. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着体检报告发呆，眼神有点空',
            'en-US': 'Staring blankly at the health report, gaze somewhat empty'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里沉甸甸的，脑子里一片混乱',
            'en-US': 'Heart feeling heavy, mind in chaos'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '对衰老的恐惧、对死亡的焦虑、对失去自主能力的惊恐交织：手微微发抖，心跳加速，每看到一个红字就想"这是不是大病的征兆？我还能活多久？"',
            'en-US': 'Fear of aging, anxiety about death, and terror of losing autonomy intertwined: hands slightly trembling, heart racing, each red flag triggering thoughts "Is this a sign of serious illness? How much longer do I have?"'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '担心但保持行动力：虽然心里紧张，但立刻上网搜索如何改善各项指标，给自己列了运动计划和饮食调整方案，在掌控感中缓解焦虑',
            'en-US': 'Worried but maintaining agency: though nervous inside, immediately searching online how to improve each indicator, making exercise plans and dietary adjustments, alleviating anxiety through sense of control'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '平静接受中带着豁达：深吸一口气，把报告放下，想着"这是自然规律，重要的是当下还能动能走"，关注生活质量而不只是数字',
            'en-US': 'Calm acceptance with openness: taking a deep breath, putting down the report, thinking "this is natural law, what matters is I can still move and walk now," focusing on life quality rather than just numbers'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 4,
      category: {
        'zh-CN': '老朋友离世',
        'en-US': 'Old Friends Passing'
      },
      scenario: {
        'zh-CN': '得知大学室友突发疾病去世了，你们上个月还在微信聊天。葬礼上看着遗照，你意识到"下一个会是谁？"此刻你：',
        'en-US': 'Learning your college roommate suddenly passed away from illness, you were chatting on WeChat just last month. At the funeral looking at the portrait, you wonder "who will be next?" Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '呆站在遗照前，眼神失焦',
            'en-US': 'Standing motionless before the portrait, eyes unfocused'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口像被重锤砸了一下，呼吸困难',
            'en-US': 'Chest feeling like struck by a heavy hammer, breathing difficult'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的悲伤、震惊、对自己死亡的恐惧一齐爆发：双腿发软，脑子里不断闪回和他的聊天记录，接着涌上"生命如此脆弱，我还能活多久？"的恐慌，喉咙哽咽说不出话',
            'en-US': 'Deep sorrow, shock, and fear of own mortality exploding together: legs weakening, mind constantly replaying chat conversations, then flooding with panic "life is so fragile, how much longer do I have?" throat choking unable to speak'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '悲痛中领悟到生命的意义：虽然眼泪止不住，但心里有个声音在说"要珍惜当下，好好活着"，葬礼结束后立刻给家人打了电话，声音还在颤抖',
            'en-US': 'Understanding life\'s meaning through grief: though tears won\'t stop, inner voice saying "cherish the present, live well," immediately calling family after funeral, voice still trembling'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '悲伤但保持哲学性的平静：默默流泪，心里反复想着"这就是生命的一部分"，对生死有了更深的接纳，甚至开始思考自己想要怎样的告别',
            'en-US': 'Sad but maintaining philosophical calm: silently crying, mind repeatedly thinking "this is part of life," deeper acceptance of mortality, even starting to contemplate own preferred farewell'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 5,
      category: {
        'zh-CN': '照顾父母',
        'en-US': 'Caring for Elderly Parents'
      },
      scenario: {
        'zh-CN': '80多岁的老母亲被确诊老年痴呆，有时候认不出你，有时候半夜走失。你一边工作一边照顾，身心俱疲。此刻你：',
        'en-US': 'Your 80-year-old mother diagnosed with dementia, sometimes doesn\'t recognize you, sometimes wanders off at night. Juggling work and caregiving, physically and mentally exhausted. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '瘫坐在沙发上，眼神空洞地看着天花板',
            'en-US': 'Collapsed on sofa, staring blankly at ceiling'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '浑身像被掏空了一样，眼皮重得睁不开',
            'en-US': 'Whole body feeling drained, eyelids too heavy to open'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的无力感、悲痛、愧疚、甚至压抑的烦躁混在一起：身体和精神都到了极限，看着陌生的母亲心如刀割，脑子里闪过"撑不下去了"，但又立刻自责"我怎么能这么想"，眼泪无声滑落',
            'en-US': 'Deep powerlessness, grief, guilt, even suppressed irritation mixed together: body and mind at limits, heart breaking seeing mother as a stranger, thoughts flashing "can\'t hold on," but immediately self-blaming "how can I think this," tears silently falling'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然疲惫到极限，但坚持中有爱支撑：身体在抗议，心里却很清楚"这是我最后能为她做的"，一边联系护工分担压力，一边珍惜妈妈还在的每一天',
            'en-US': 'Though exhausted to the limit, persistence sustained by love: body protesting, but heart clear "this is the last thing I can do for her," contacting caregivers to share burden while cherishing every day mother is still here'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '在痛苦中找到意义和接纳：虽然艰难，但内心相对平和，理解了"陪伴本身就是孝顺"，每天记录妈妈的小片段，在照顾中学会了放下执念',
            'en-US': 'Finding meaning and acceptance in pain: though difficult, relatively peaceful inside, understanding "companionship itself is filial piety," recording mother\'s small moments daily, learning to let go of attachments through caregiving'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 6,
      category: {
        'zh-CN': '孙辈教育',
        'en-US': 'Grandchildren Education'
      },
      scenario: {
        'zh-CN': '你觉得孩子应该多吃饭少吃零食，但儿媳/女婿说"现在都科学育儿了"，不让你插手。你帮忙带孩子，却处处被指责"观念落后"。此刻你：',
        'en-US': 'You think children should eat more meals and fewer snacks, but your daughter-in-law/son-in-law says "parenting is scientific now," not letting you intervene. You help with childcare but are constantly criticized for "outdated views." Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '转身走进卧室，关上了门',
            'en-US': 'Turning to walk into bedroom, closing the door'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里像堵了块石头，说不出的难受',
            'en-US': 'Heart feeling blocked by a stone, indescribably uncomfortable'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '强烈的委屈、不被认可的痛苦、自我怀疑混杂：鼻子发酸，喉咙哽咽，脑子里反复想"我带大了你，现在我的经验就这么不值钱？我是不是真的老了跟不上了？"既想帮忙又怕做错，吃力不讨好',
            'en-US': 'Intense grievance, pain of not being valued, and self-doubt mixed: nose stinging, throat choking, mind repeatedly thinking "I raised you, now my experience is worthless? Am I really too old to keep up?" wanting to help but afraid of doing wrong, thankless effort'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '不舒服但愿意调整：虽然心里有点委屈，但能理解时代确实不同了，主动问"那你教教我新的方法"，在学习中重建价值感',
            'en-US': 'Uncomfortable but willing to adapt: though somewhat aggrieved, understanding times have indeed changed, proactively asking "then teach me the new methods," rebuilding sense of value through learning'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '守住边界保持和谐：虽然被否定有点不是滋味，但很快想通"这是你们的孩子，你们做主"，退到旁观者位置，只提供帮助不干涉决策',
            'en-US': 'Maintaining boundaries to preserve harmony: though being denied feels unpleasant, quickly realizing "this is your child, you decide," stepping back to observer position, only offering help without interfering in decisions'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 7,
      category: {
        'zh-CN': '财务/养老',
        'en-US': 'Financial/Retirement'
      },
      scenario: {
        'zh-CN': '盘算退休后的钱：退休金每月5000，存款30万，还有一套房。孩子要买房希望你支持，但你担心自己的养老储备不够。此刻你：',
        'en-US': 'Calculating post-retirement finances: pension 5000/month, savings 300k, one property. Child wants to buy house hoping for your support, but you worry about insufficient retirement reserves. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着存款数字发呆，来回划拉计算器',
            'en-US': 'Staring blankly at savings numbers, repeatedly tapping calculator'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '胸口发闷，脑子里一团乱麻',
            'en-US': 'Chest feeling stuffy, mind in a tangled mess'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '被撕扯的痛苦、对未来的恐慌、两难的煎熬：心跳加快，手心出汗，一边心疼孩子"不帮他们买房太难了"，一边恐慌"万一我生病钱不够怎么办？会不会反而拖累孩子？"，翻来覆去睡不着',
            'en-US': 'Pain of being torn, panic about future, and torment of dilemma: heart racing, palms sweating, both feeling for child "not helping them buy house is too hard" and panicking "what if I get sick and money isn\'t enough? Will I instead burden the children?" tossing and turning unable to sleep'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然心疼孩子但守住底线：反复盘算后下定决心"可以帮一部分，但养老钱不能动"，准备好了和孩子坦诚沟通的说辞，虽然预想到孩子可能失望但心里踏实',
            'en-US': 'Though feeling for child, holding the line: after repeated calculations, determined "can help partially, but retirement money untouchable," prepared for honest conversation with child, though anticipating child might be disappointed but feeling settled inside'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '理性评估找到平衡点：把各项开支列了个表，计算出可以支持的上限，既不让孩子完全靠自己，也不掏空家底，在帮助和自保之间找到了平衡',
            'en-US': 'Rationally assessing to find balance: listing all expenses in a table, calculating maximum support possible, neither leaving child completely on their own nor depleting savings, finding balance between helping and self-preservation'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 8,
      category: {
        'zh-CN': '婚姻/老年生活',
        'en-US': 'Marriage/Later Life'
      },
      scenario: {
        'zh-CN': '和老伴一起生活了30多年，现在每天相对无言。你们很少吵架，但也很少交流，就这样平淡地过着每一天。此刻你：',
        'en-US': 'Living with spouse for over 30 years, now facing each other in silence daily. Rarely arguing but also rarely communicating, just passing each day plainly. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '坐在沙发两端，各看各的手机',
            'en-US': 'Sitting at opposite ends of sofa, each looking at own phone'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里空落落的，想说什么又咽了回去',
            'en-US': 'Heart feeling empty, wanting to say something but swallowing it back'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的孤独感、对关系的失望、想改变又无力的矛盾："我们怎么变成了最熟悉的陌生人？"想要重新连接但不知从何开始，甚至怀疑"还有必要吗？"，喉咙发紧说不出话',
            'en-US': 'Deep loneliness, disappointment in relationship, and contradictory desire to change but feeling powerless: "How did we become the most familiar strangers?" wanting to reconnect but not knowing where to start, even doubting "is it still necessary?" throat tightening unable to speak'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然平淡但珍惜陪伴：看着老伴的侧脸，心里涌起温暖和感恩，主动伸手握了握对方的手，开始尝试用散步、一起做饭等小事重建连接',
            'en-US': 'Though plain, cherishing companionship: looking at spouse\'s profile, warmth and gratitude welling up inside, proactively reaching to hold their hand, starting to rebuild connection through small things like walks and cooking together'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '接受感情的自然状态：内心平和，理解了"陪伴本身就是最长情的告白"，不需要太多话，能一起慢慢变老就是幸福，倒了杯茶递过去',
            'en-US': 'Accepting the natural state of relationship: peaceful inside, understanding "companionship itself is the longest confession," no need for many words, being able to grow old together slowly is happiness, pouring and passing over a cup of tea'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 9,
      category: {
        'zh-CN': '社会脱节',
        'en-US': 'Social Disconnection'
      },
      scenario: {
        'zh-CN': '和孙子聊天，TA说的"YYDS"、"绝绝子"你完全听不懂。用智能手机总是出错，网购不会操作。你感觉自己和这个时代脱节了。此刻你：',
        'en-US': 'Chatting with grandchild, they say "YYDS" and "juejuezi" which you completely don\'t understand. Always making mistakes with smartphone, can\'t operate online shopping. You feel disconnected from this era. Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '笑着摆摆手，转身走开了',
            'en-US': 'Smiling and waving hand, turning to walk away'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里堵得慌，感觉自己被落下了',
            'en-US': 'Heart feeling blocked, feeling left behind'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '强烈的挫败感、被边缘化的恐惧、自我否定：脸上发烫，手足无措，脑子里反复响起"我已经跟不上这个时代了，成了时代的局外人"，感觉自己越来越没用',
            'en-US': 'Strong sense of defeat, fear of being marginalized, and self-denial: face burning, at a loss, mind repeatedly echoing "I can no longer keep up with this era, become an outsider of the times," feeling increasingly useless'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '虽然困难但保持好奇心：笑着对孙子说"你教教爷爷/奶奶"，拿出纸笔认真记下来，在学习中拉近和年轻人的距离，也找回了学习的乐趣',
            'en-US': 'Though difficult, maintaining curiosity: smiling to grandchild saying "teach grandpa/grandma," taking out paper and pen to earnestly note it down, drawing closer to young people through learning, also rediscovering joy of learning'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '看开了代际差异：理解"每代人有每代人的语言"，不强求全懂但保持开放心态，对听不懂的新词一笑置之，关注的是孙子开心就好',
            'en-US': 'Accepting generational differences: understanding "each generation has its own language," not forcing full comprehension but maintaining open mind, dismissing unfamiliar new terms with a smile, what matters is grandchild being happy'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    },
    {
      id: 10,
      category: {
        'zh-CN': '人生意义',
        'en-US': 'Life Meaning'
      },
      scenario: {
        'zh-CN': '退休后的某个下午，你坐在公园长椅上晒太阳。回顾这一生：有成就也有遗憾，有快乐也有痛苦。你开始思考"这辈子值得吗？"此刻你：',
        'en-US': 'One afternoon after retirement, you sit on a park bench soaking in sun. Reviewing this life: achievements and regrets, joy and pain. You start pondering "was this life worth it?" Right now you:'
      },
      options: [
        {
          text: {
            'zh-CN': '盯着远处发呆，脑子里闪过很多画面',
            'en-US': 'Staring into distance spacing out, many scenes flashing through mind'
          },
          score: 0,
          type: 'vague'
        },
        {
          text: {
            'zh-CN': '心里五味杂陈，说不清是什么感觉',
            'en-US': 'Heart filled with mixed feelings, can\'t articulate what it is'
          },
          score: 1,
          type: 'single'
        },
        {
          text: {
            'zh-CN': '深深的遗憾、对未完成心愿的痛苦、对虚度光阴的自责："要是当初...就好了"，胸口发闷，眼眶发热，陷入了对过去的悔恨和对剩余时光的迷茫',
            'en-US': 'Deep regret, pain over unfulfilled wishes, and self-blame for wasted time: "if only back then... it would have been better," chest feeling stuffy, eyes burning, trapped in remorse over past and confusion about remaining time'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '遗憾和满意交织：虽然有些事情没做成让人叹息，但想到养大了孩子、有了孙子、也经历了风雨，嘴角不自觉上扬，"虽不完美，但也精彩"',
            'en-US': 'Regret and satisfaction intertwined: though some things left undone bring sighs, thinking of raising children, having grandchildren, weathering storms, corners of mouth involuntarily curling up, "though imperfect, also splendid"'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '内心深深的平静和接纳：长长地呼出一口气，所有好的坏的都成了人生的一部分，"无论如何，这就是我的人生"，对生命有了彻底的领悟和和解',
            'en-US': 'Deep inner peace and acceptance: exhaling a long breath, all good and bad becoming part of life, "regardless, this is my life," having complete understanding and reconciliation with existence'
          },
          score: 2,
          type: 'detailed'
        }
      ]
    }
  ]
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEST_DATA_I18N;
}


// 后备数据：原始中文数据（用于未翻译的年龄段）
// 注意：这个需要test-data-by-age.js先加载
const TEST_DATA_BY_AGE = window.TEST_DATA_BY_AGE || {};

// 获取当前语言的问题文本
function getLocalizedQuestion(question, lang) {
  // 如果问题已经有多语言结构
  if (question.category && typeof question.category === 'object') {
    return {
      id: question.id,
      category: question.category[lang] || question.category['zh-CN'],
      scenario: question.scenario[lang] || question.scenario['zh-CN'],
      options: question.options.map(opt => ({
        text: opt.text[lang] || opt.text['zh-CN'],
        score: opt.score,
        type: opt.type
      }))
    };
  }

  // 否则使用原始格式（中文）
  return question;
}

// 获取指定年龄段的本地化问题
function getLocalizedQuestions(ageGroup, lang) {
  let questions = TEST_DATA_I18N[ageGroup];

  // 如果没有找到，使用默认数据
  if (!questions || questions.length === 0) {
    questions = TEST_DATA_BY_AGE[ageGroup] || TEST_DATA_BY_AGE['29-35'] || [];
  }

  return questions.map(q => getLocalizedQuestion(q, lang));
}
