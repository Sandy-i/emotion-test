# -*- coding: utf-8 -*-
"""
Add 46+ age group translations (all 10 questions)
"""

# Read the original file
with open('test-data-i18n.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 46+ age group translations
age_46plus = """  // 46+ age group
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
            'en-US': 'Longing mixed with pride and comfort: though eyes slightly moist, thinking of child having their own world, corners of mouth still curling up, sent a message "take care of yourself" and didn\\'t disturb further'
          },
          score: 2,
          type: 'detailed'
        },
        {
          text: {
            'zh-CN': '轻松感和一丝愧疚混合：暗自庆幸"终于可以过自己的生活了"，但又觉得不该这么想，和老伴相视一笑，开始计划起久违的二人世界',
            'en-US': 'Relief mixed with slight guilt: secretly glad "finally can live our own life," but feeling shouldn\\'t think this way, exchanging smiles with spouse, starting to plan long-overdue time together'
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
            'en-US': 'Understanding life\\'s meaning through grief: though tears won\\'t stop, inner voice saying "cherish the present, live well," immediately calling family after funeral, voice still trembling'
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
        'en-US': 'Your 80-year-old mother diagnosed with dementia, sometimes doesn\\'t recognize you, sometimes wanders off at night. Juggling work and caregiving, physically and mentally exhausted. Right now you:'
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
            'en-US': 'Deep powerlessness, grief, guilt, even suppressed irritation mixed together: body and mind at limits, heart breaking seeing mother as a stranger, thoughts flashing "can\\'t hold on," but immediately self-blaming "how can I think this," tears silently falling'
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
            'en-US': 'Finding meaning and acceptance in pain: though difficult, relatively peaceful inside, understanding "companionship itself is filial piety," recording mother\\'s small moments daily, learning to let go of attachments through caregiving'
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
            'en-US': 'Pain of being torn, panic about future, and torment of dilemma: heart racing, palms sweating, both feeling for child "not helping them buy house is too hard" and panicking "what if I get sick and money isn\\'t enough? Will I instead burden the children?" tossing and turning unable to sleep'
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
            'en-US': 'Though plain, cherishing companionship: looking at spouse\\'s profile, warmth and gratitude welling up inside, proactively reaching to hold their hand, starting to rebuild connection through small things like walks and cooking together'
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
        'en-US': 'Chatting with grandchild, they say "YYDS" and "juejuezi" which you completely don\\'t understand. Always making mistakes with smartphone, can\\'t operate online shopping. You feel disconnected from this era. Right now you:'
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
            'en-US': 'Heart filled with mixed feelings, can\\'t articulate what it is'
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
"""

# Replace the placeholder
content = content.replace(
    "  '46+': TEST_DATA_BY_AGE['46+'] || [],\n\n};",
    age_46plus
)

# Update header comments
content = content.replace(
    "// - 36-45岁：全部10题已完整翻译 ✅",
    "// - 36-45岁：全部10题已完整翻译 ✅\n// - 46+岁：全部10题已完整翻译 ✅\n//\n// 🎉 所有年龄段翻译完成！Total: 50 questions translated"
)
content = content.replace(
    "  // Translation Status: All questions for 36-45 age group fully translated",
    "  // Translation Status: ALL AGE GROUPS COMPLETE! 50/50 questions translated ✅"
)

# Write the file
with open('test-data-i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("OK - Added 46+ age group translations")
print("46+ age group: 10 questions complete")
print("")
print("="*60)
print("TRANSLATION PROJECT COMPLETE!")
print("="*60)
print("Total: 50 questions across 5 age groups")
print("  - 18-22: 10 questions")
print("  - 23-28: 10 questions")
print("  - 29-35: 10 questions")
print("  - 36-45: 10 questions")
print("  - 46+  : 10 questions")
print("="*60)
