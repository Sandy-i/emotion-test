# -*- coding: utf-8 -*-
"""
添加18-22岁年龄段第6-10题的翻译
"""

# 读取原始文件
with open('test-data-i18n.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 第6-10题的翻译内容
questions_6_10 = """    },
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
            'en-US': 'Envy, inferiority, and unwillingness surge together: "Why is the gap between peers so huge..." can\\'t help comparing family backgrounds, feeling worse the more I think about it, even resenting not being born into a better family'
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
            'en-US': 'After brief envy, emotions shift: "When I have the means, I\\'ll see the world too," converting envy into concrete goals, starting to calculate how much to save'
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
        'en-US': 'In junior year, you realize you have zero interest in your major, and every class feels like prison. But it\\'s too late to change majors. Right now you:'
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
            'en-US': 'Accepting reality but having Plan B: figured out "get the degree first, work doesn\\'t have to match the major," actually feeling more settled inside'
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
            'en-US': 'Though very embarrassed and face burning, quickly jotting down the criticism points, mind analyzing: "Indeed I didn\\'t think it through, need to watch these points next time"'
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
        'en-US': 'Your good friend secretly got together with your crush, and you\\'re the last to know. The three of you have attended many classes and shared many meals together. Right now you:'
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
            'en-US': 'Disappointment and relief contradictorily intertwined: disappointed in friend\\'s actions, but also relieved thinking "since they chose someone else, we weren\\'t meant to be," though sad, choosing to let go'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '难过中保持理性："感情不能强求，谁也没错"，虽然心痛但能接受现实，只是需要时间一个人静静疗伤',
            'en-US': 'Staying rational amid sadness: "Love can\\'t be forced, no one\\'s at fault," though heartbroken, can accept reality, just needing time alone to quietly heal'
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
        'en-US': '100 days until graduation, some roommates already signed with big companies, some preparing to study abroad, some taking civil service exams, while you still don\\'t know what to do. Right now you:'
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
    }"""

# 替换内容
content = content.replace(
    "    }    // 其他题目待翻译...",
    questions_6_10
)

# 更新头部注释
content = content.replace(
    "// - 18-22岁：前5题已完整翻译 ✅",
    "// - 18-22岁：全部10题已完整翻译 ✅"
)
content = content.replace(
    "  // Translation Status: First 5 questions fully translated",
    "  // Translation Status: All 10 questions fully translated"
)

# 写入文件
with open('test-data-i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("OK - Added questions 6-10")
print("18-22 age group: 10 questions complete")
