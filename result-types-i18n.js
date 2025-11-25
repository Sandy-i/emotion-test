// 结果类型多语言版本
// Multilingual Result Types

const RESULT_TYPES_I18N = {
  // 高水平 (16-20分) - High Level
  'high-positive': {
    level: 'high',
    orientation: 'positive',
    scoreRange: [16, 20],
    icon: '🌟',
    title: {
      'zh-CN': '情绪表达高手（阳光型）',
      'en-US': 'Emotional Expression Expert (Positive Type)'
    },
    description: {
      'zh-CN': '你倾向于从积极的角度感受生活，同时能够精确地识别和表达自己的情绪。面对压力和挑战时，你不仅能感受到紧张，还能区分这种紧张是"对未知的焦虑"还是"对挑战的兴奋"。这种细腻的情绪觉察让你在人际交往中更容易被理解，也更善于找到问题的解决路径。',
      'en-US': 'You tend to experience life from a positive perspective while being able to precisely identify and express your emotions. When facing pressure and challenges, you can not only feel the tension, but also distinguish whether it\'s "anxiety about the unknown" or "excitement for the challenge". This nuanced emotional awareness makes you easier to understand in interpersonal interactions and better at finding solutions.'
    },
    advice: {
      'zh-CN': '你已经具备了很好的情绪素养。建议尝试帮助身边的人提升情绪表达能力，分享你如何理解和表达情绪。同时也要注意：负面情绪同样值得被细腻地感知和表达，不要因为乐观而忽视了内心真实的不适。',
      'en-US': 'You already have excellent emotional literacy. Try helping those around you improve their emotional expression skills by sharing how you understand and express emotions. Also note: negative emotions deserve to be perceived and expressed with equal delicacy. Don\'t ignore genuine inner discomfort due to optimism.'
    }
  },

  'high-negative': {
    level: 'high',
    orientation: 'negative',
    scoreRange: [16, 20],
    icon: '🎭',
    title: {
      'zh-CN': '情绪表达高手（深度型）',
      'en-US': 'Emotional Expression Expert (Depth Type)'
    },
    description: {
      'zh-CN': '你对内心世界有着深刻的觉察力，能够准确区分"失望"、"沮丧"、"自责"之间的微妙差异。即便面对困境，你也不回避痛苦，反而能清晰地剖析这些感受。这种敏感度让你能够深刻理解自己和他人，在需要共情的场合有独特优势。',
      'en-US': 'You have profound awareness of your inner world, able to accurately distinguish subtle differences between "disappointment", "frustration", and "self-blame". Even when facing difficulties, you don\'t avoid pain but can clearly analyze these feelings. This sensitivity allows you to deeply understand yourself and others, giving you unique advantages in situations requiring empathy.'
    },
    advice: {
      'zh-CN': '你的情绪颗粒度很高，这是难得的天赋。但要注意平衡：不要过度沉浸在负面情绪的分析中。建议用同样细腻的方式去捕捉生活中的美好瞬间——那些微小的欣慰、放松、满足。记录情绪日记可以帮助你看到情绪的流动和转变。',
      'en-US': 'Your emotional granularity is very high, which is a rare gift. But maintain balance: don\'t become overly immersed in analyzing negative emotions. Use the same delicate approach to capture beautiful moments in life—those small feelings of comfort, relaxation, and satisfaction. Keeping an emotion journal can help you see the flow and transformation of emotions.'
    }
  },

  'high-balanced': {
    level: 'high',
    orientation: 'balanced',
    scoreRange: [16, 20],
    icon: '🧘',
    title: {
      'zh-CN': '情绪表达高手（平衡型）',
      'en-US': 'Emotional Expression Expert (Balanced Type)'
    },
    description: {
      'zh-CN': '你拥有出色的情绪认知能力，既能感受积极情绪的层次，也不回避负面感受。你理解情绪没有好坏之分，重要的是如何准确识别和恰当表达。这种平衡让你在面对复杂情境时能够保持清醒，做出更明智的选择。',
      'en-US': 'You have excellent emotional cognitive abilities, able to feel the nuances of positive emotions while not avoiding negative feelings. You understand that emotions aren\'t good or bad—what matters is how accurately you identify and appropriately express them. This balance allows you to stay clear-headed in complex situations and make wiser choices.'
    },
    advice: {
      'zh-CN': '你已经具备了很好的情绪素养。可以将这种能力应用到更多场景：在冲突中用"我感到被忽视"替代"你不在乎我"，在决策前问问自己"这个选择让我感到兴奋还是不安"。这些细微的觉察会为你的人生带来显著改变。',
      'en-US': 'You already have strong emotional literacy. Apply this ability to more scenarios: in conflicts, use "I feel overlooked" instead of "You don\'t care about me"; before making decisions, ask yourself "Does this choice make me feel excited or uneasy?" These subtle awarenesses will bring significant changes to your life.'
    }
  },

  // 中高水平 (12-15分) - Medium-High Level
  'medium-high-positive': {
    level: 'medium-high',
    orientation: 'positive',
    scoreRange: [12, 15],
    icon: '☀️',
    title: {
      'zh-CN': '情绪认知者（乐观型）',
      'en-US': 'Emotion Recognizer (Optimistic Type)'
    },
    description: {
      'zh-CN': '你对积极情绪有较好的识别能力，能够区分不同层次的快乐和满足。但在面对负面情绪时，可能还习惯用"不太好"、"有点烦"这类模糊表达。整体来说，你的情绪表达能力处于中上水平，继续提升会看到明显改善。',
      'en-US': 'You have good ability to recognize positive emotions and can distinguish different levels of happiness and satisfaction. However, when facing negative emotions, you may still habitually use vague expressions like "not great" or "a bit annoying". Overall, your emotional expression ability is at a medium-high level, and continued improvement will show significant results.'
    },
    advice: {
      'zh-CN': '下次感到不适时，给自己10秒钟：深呼吸，问问"这具体是什么感受？"——是担心某件事失败的焦虑？还是对某人行为的失望？你会发现，准确命名情绪本身就能带来缓解。可以随身准备一张情绪词汇卡，帮助扩展表达。',
      'en-US': 'Next time you feel uncomfortable, give yourself 10 seconds: take a deep breath and ask "What exactly is this feeling?"—is it anxiety about something failing? Or disappointment with someone\'s behavior? You\'ll find that accurately naming the emotion itself brings relief. Consider carrying an emotion vocabulary card to help expand your expression.'
    }
  },

  'medium-high-negative': {
    level: 'medium-high',
    orientation: 'negative',
    scoreRange: [12, 15],
    icon: '🌙',
    title: {
      'zh-CN': '情绪认知者（敏感型）',
      'en-US': 'Emotion Recognizer (Sensitive Type)'
    },
    description: {
      'zh-CN': '你对痛苦和不适有较强的感知力，能够识别负面情绪的细微差别。这让你很善于觉察问题，但可能对积极情绪的表达相对笼统。你是一个细腻的观察者，容易察觉到他人和自己的情绪波动。',
      'en-US': 'You have strong perception of pain and discomfort, able to identify subtle differences in negative emotions. This makes you good at detecting problems, though your expression of positive emotions may be relatively general. You\'re a nuanced observer, easily noticing emotional fluctuations in yourself and others.'
    },
    advice: {
      'zh-CN': '尝试用同样的精细度去感受生活中的小确幸——不只是"还可以"，而是具体的"因为完成工作的轻松感"或"被朋友关心的温暖"。每天记录3个具体的积极感受，一个月后你会发现自己对美好的敏感度提升了。',
      'en-US': 'Try using the same level of precision to feel life\'s small joys—not just "okay", but specific feelings like "the relief of completing work" or "the warmth of a friend\'s care". Record 3 specific positive feelings daily, and after a month you\'ll find your sensitivity to beauty has increased.'
    }
  },

  'medium-high-balanced': {
    level: 'medium-high',
    orientation: 'balanced',
    scoreRange: [12, 15],
    icon: '🌈',
    title: {
      'zh-CN': '情绪认知者（成长型）',
      'en-US': 'Emotion Recognizer (Growth Type)'
    },
    description: {
      'zh-CN': '你正在建立更精细的情绪认知系统。虽然有时还会用模糊词汇，但你已经开始尝试更准确地表达感受。你对情绪的态度开放而好奇，这是非常好的成长基础。',
      'en-US': 'You\'re building a more refined emotional recognition system. While you sometimes still use vague vocabulary, you\'ve already begun trying to express feelings more accurately. Your open and curious attitude toward emotions is an excellent foundation for growth.'
    },
    advice: {
      'zh-CN': '保持这种探索的好奇心！建议每天睡前写3分钟"情绪日记"：今天经历了什么？当时的感受是什么？用3个具体的情绪词描述。坚持21天，你会明显感觉到表达能力的提升。',
      'en-US': 'Maintain this exploratory curiosity! Try writing a 3-minute "emotion journal" before bed: What did you experience today? What were your feelings? Describe using 3 specific emotion words. After 21 days, you\'ll notice significant improvement in your expression ability.'
    }
  },

  // 中等水平 (8-11分) - Medium Level
  'medium-positive': {
    level: 'medium',
    orientation: 'positive',
    scoreRange: [8, 11],
    icon: '🌤️',
    title: {
      'zh-CN': '情绪探索者（积极型）',
      'en-US': 'Emotion Explorer (Positive Type)'
    },
    description: {
      'zh-CN': '你倾向于用积极的方式看待生活，但情绪表达还比较基础。你能感受到快乐和满足，但可能还不太习惯细化这些感受。面对复杂心情时，常用"挺好的"、"还不错"来概括。',
      'en-US': 'You tend to view life positively, but your emotional expression is still quite basic. You can feel happiness and satisfaction, but may not yet be accustomed to refining these feelings. When facing complex emotions, you often summarize with "pretty good" or "not bad".'
    },
    advice: {
      'zh-CN': '开始练习"情绪分层"：当你说"我很开心"时，暂停一下，追问自己"具体是哪种开心？"——是完成目标的成就感、和朋友相处的愉悦、还是对未来的期待？这种练习每天做3次，一个月后会有明显变化。',
      'en-US': 'Start practicing "emotional layering": when you say "I\'m happy", pause and ask yourself "What kind of happy specifically?"—is it the sense of accomplishment from completing a goal, the joy of spending time with friends, or anticipation for the future? Practice this 3 times daily, and you\'ll see noticeable changes after a month.'
    }
  },

  'medium-negative': {
    level: 'medium',
    orientation: 'negative',
    scoreRange: [8, 11],
    icon: '🌧️',
    title: {
      'zh-CN': '情绪探索者（谨慎型）',
      'en-US': 'Emotion Explorer (Cautious Type)'
    },
    description: {
      'zh-CN': '你对负面情绪的感知可能更敏感，但表达时倾向于使用基础词汇。"不开心"、"难受"、"烦"是常用表达，但这些简单的词背后，可能包含着焦虑、失望、愤怒、委屈等非常不同的情绪。',
      'en-US': 'You may be more sensitive to negative emotions, but tend to use basic vocabulary when expressing them. "Unhappy", "uncomfortable", "annoyed" are common expressions, but behind these simple words may lie very different emotions like anxiety, disappointment, anger, or feeling wronged.'
    },
    advice: {
      'zh-CN': '当感到不适时，尝试这个练习：停下来，深呼吸，问"除了不开心，我还能用什么词描述这种感觉？"可以从"失望、焦虑、愤怒、委屈、无助"中选择更贴近的词。准确命名后，你会更清楚如何应对。',
      'en-US': 'When feeling uncomfortable, try this exercise: pause, take a deep breath, and ask "Besides unhappy, what other words can I use to describe this feeling?" Choose from words like "disappointed, anxious, angry, wronged, helpless" for a closer match. After accurately naming it, you\'ll be clearer on how to respond.'
    }
  },

  'medium-balanced': {
    level: 'medium',
    orientation: 'balanced',
    scoreRange: [8, 11],
    icon: '⛅',
    title: {
      'zh-CN': '情绪探索者（发展型）',
      'en-US': 'Emotion Explorer (Development Type)'
    },
    description: {
      'zh-CN': '你的情绪表达处于发展阶段，有时能精确表达，有时还在用模糊词汇。这很正常——情绪颗粒度是可以训练的技能，不是天生的特质。你已经迈出了认识自己情绪的第一步。',
      'en-US': 'Your emotional expression is in the development stage—sometimes precise, sometimes still using vague vocabulary. This is normal—emotional granularity is a trainable skill, not an innate trait. You\'ve already taken the first step in recognizing your emotions.'
    },
    advice: {
      'zh-CN': '从日常小事开始练习：早晨醒来的感觉如何？午餐时的心情怎样？不要满足于"还行"，尝试用更具体的词——"困倦但平静"、"疲惫但满足"。每天刻意练习3次，你的情绪词汇库会快速扩展。',
      'en-US': 'Start practicing with daily small things: How do you feel when you wake up? What\'s your mood during lunch? Don\'t settle for "okay"—try more specific words like "tired but calm" or "exhausted but satisfied". Practice deliberately 3 times daily, and your emotion vocabulary will expand rapidly.'
    }
  },

  // 中低水平 (4-7分) - Medium-Low Level
  'medium-low-positive': {
    level: 'medium-low',
    orientation: 'positive',
    scoreRange: [4, 7],
    icon: '🌥️',
    title: {
      'zh-CN': '情绪启蒙者（乐天型）',
      'en-US': 'Emotion Beginner (Optimistic Type)'
    },
    description: {
      'zh-CN': '你习惯用简单的词汇表达感受，"开心"、"还行"、"挺好"是常用词。这并不意味着你感受不到复杂的情绪，而是可能还没有形成精细化表达的习惯。你的乐观是优点，情绪颗粒度有很大提升空间。',
      'en-US': 'You\'re accustomed to expressing feelings with simple words—"happy", "okay", "pretty good" are common. This doesn\'t mean you can\'t feel complex emotions, but rather that you may not yet have developed the habit of refined expression. Your optimism is a strength, and there\'s great room for improving emotional granularity.'
    },
    advice: {
      'zh-CN': '从今天开始，每天记录一个"情绪时刻"：发生了什么让你有感觉的事？当时的感受是什么？尝试用2-3个具体的情绪词描述，比如"轻松+满足"、"期待+紧张"。坚持一周就会看到进步。',
      'en-US': 'Starting today, record one "emotion moment" daily: What happened that made you feel something? What was the feeling? Try describing it with 2-3 specific emotion words, like "relaxed + satisfied" or "anticipating + nervous". You\'ll see progress after just one week.'
    }
  },

  'medium-low-negative': {
    level: 'medium-low',
    orientation: 'negative',
    scoreRange: [4, 7],
    icon: '⛈️',
    title: {
      'zh-CN': '情绪启蒙者（压抑型）',
      'en-US': 'Emotion Beginner (Suppressed Type)'
    },
    description: {
      'zh-CN': '你可能习惯于压抑或简化情绪感受，对负面情绪更多用"不舒服"、"不好"来一笔带过。这可能是为了快速恢复正常，或者是不习惯细致感受。但长期如此，可能会积累情绪问题。',
      'en-US': 'You may be accustomed to suppressing or simplifying emotional feelings, glossing over negative emotions with "uncomfortable" or "not good". This might be to quickly return to normal, or because you\'re not used to feeling in detail. But long-term, this may accumulate emotional issues.'
    },
    advice: {
      'zh-CN': '给自己一个"情绪时段"：每天晚上，用5分钟回顾今天的情绪低点。不是为了沉浸其中，而是练习命名："今天开会时，我感到的是被否定的挫败感，还是被误解的委屈？"准确识别是改变的第一步。',
      'en-US': 'Give yourself an "emotion period": every evening, spend 5 minutes reviewing today\'s emotional low points. Not to dwell on them, but to practice naming: "In today\'s meeting, did I feel the frustration of being rejected, or the grievance of being misunderstood?" Accurate identification is the first step toward change.'
    }
  },

  'medium-low-balanced': {
    level: 'medium-low',
    orientation: 'balanced',
    scoreRange: [4, 7],
    icon: '🌫️',
    title: {
      'zh-CN': '情绪启蒙者（朴素型）',
      'en-US': 'Emotion Beginner (Simple Type)'
    },
    description: {
      'zh-CN': '你的情绪表达相对朴素和直白，可能更关注外部事件而非内在感受。"还行"、"不错"、"有点累"是常用词汇。这种方式简单高效，但可能会错过一些重要的情绪信号。',
      'en-US': 'Your emotional expression is relatively simple and straightforward, possibly focusing more on external events than internal feelings. "Okay", "not bad", "a bit tired" are common phrases. This approach is simple and efficient, but you might miss some important emotional signals.'
    },
    advice: {
      'zh-CN': '建立"情绪觉察时刻"：设置每天3个固定时间点（比如上午10点、下午3点、晚上8点），停下来问自己："现在我的感受是什么？"用一个具体的词来回答。不需要分析，只需要觉察和命名。21天后，这会成为自然习惯。',
      'en-US': 'Establish "emotion awareness moments": set 3 fixed times daily (like 10am, 3pm, 8pm), pause and ask yourself: "What am I feeling right now?" Answer with one specific word. No need to analyze, just notice and name. After 21 days, this will become a natural habit.'
    }
  },

  // 低水平 (0-3分) - Low Level
  'low-vague': {
    level: 'low',
    orientation: 'balanced',
    scoreRange: [0, 3],
    icon: '🌁',
    title: {
      'zh-CN': '情绪觉醒者（模糊型）',
      'en-US': 'Emotion Awakener (Vague Type)'
    },
    description: {
      'zh-CN': '你目前对情绪的感知和表达比较模糊，可能更习惯于用"还行"、"没什么感觉"、"不知道"来回应。这不是缺点，只是还没有建立起细致感受情绪的习惯。好消息是，情绪颗粒度完全可以通过练习提升。',
      'en-US': 'Your current perception and expression of emotions is quite vague, possibly more accustomed to responding with "okay", "don\'t feel much", "don\'t know". This isn\'t a flaw, just that you haven\'t yet developed the habit of feeling emotions in detail. Good news is, emotional granularity can be completely improved through practice.'
    },
    advice: {
      'zh-CN': '从最基础开始：每天选一个时刻，问自己"我现在是感觉好，还是不好？"如果是好，试着说"我感到轻松/满意/平静"；如果不好，试着说"我感到疲惫/烦躁/担心"。从二选一开始，慢慢扩展词汇。可以把常用情绪词写在手机备忘录里，随时参考。',
      'en-US': 'Start from the basics: each day, choose one moment and ask yourself "Am I feeling good or not good right now?" If good, try saying "I feel relaxed/satisfied/calm"; if not good, try "I feel tired/irritated/worried". Start with choosing between two, then gradually expand your vocabulary. You can write common emotion words in your phone notes for reference anytime.'
    }
  },

  'low-numb': {
    level: 'low',
    orientation: 'negative',
    scoreRange: [0, 3],
    icon: '😶',
    title: {
      'zh-CN': '情绪觉醒者（麻木型）',
      'en-US': 'Emotion Awakener (Numb Type)'
    },
    description: {
      'zh-CN': '你可能经常感到情绪麻木，或者难以察觉自己的真实感受。"没感觉"、"无所谓"、"都行"是常用表达。这可能是长期压抑情绪的结果，也可能是应对压力的自我保护机制。',
      'en-US': 'You may often feel emotionally numb, or find it difficult to perceive your true feelings. "Don\'t feel anything", "doesn\'t matter", "whatever" are common expressions. This might be the result of long-term emotional suppression, or a self-protection mechanism for coping with stress.'
    },
    advice: {
      'zh-CN': '建议寻求专业帮助（心理咨询师），他们能提供更系统的情绪觉察训练。同时可以尝试：每天用5分钟关注身体感受——肩膀紧吗？呼吸急促吗？胃部舒适吗？身体往往比大脑更诚实地反映情绪。从身体感觉开始，慢慢重建与情绪的连接。',
      'en-US': 'Consider seeking professional help (therapist), who can provide more systematic emotion awareness training. Meanwhile, try: spend 5 minutes daily focusing on body sensations—are your shoulders tense? Is your breathing rapid? Is your stomach comfortable? The body often reflects emotions more honestly than the mind. Start with body sensations to slowly rebuild connection with emotions.'
    }
  },

  'low-awakening': {
    level: 'low',
    orientation: 'positive',
    scoreRange: [0, 3],
    icon: '🌱',
    title: {
      'zh-CN': '情绪觉醒者（启蒙型）',
      'en-US': 'Emotion Awakener (Enlightenment Type)'
    },
    description: {
      'zh-CN': '你刚刚开始意识到情绪的重要性，或者正在尝试建立与情绪的连接。虽然现在还不太能准确描述感受，但你愿意尝试，这本身就是很大的进步。情绪颗粒度的提升是一个渐进的过程。',
      'en-US': 'You\'re just beginning to realize the importance of emotions, or are trying to establish a connection with your emotions. While you may not yet accurately describe feelings, your willingness to try is itself significant progress. Improving emotional granularity is a gradual process.'
    },
    advice: {
      'zh-CN': '推荐从"情绪卡片"开始：准备20张卡片，每张写一个基础情绪词（开心、难过、生气、害怕、惊讶等）。每天晚上，选出今天经历过的情绪，不需要解释，只需要选择和命名。一周后增加到30个词，一个月后50个。这个游戏化的方式能帮你快速建立情绪词汇库。',
      'en-US': 'Start with "emotion cards": prepare 20 cards, each with a basic emotion word (happy, sad, angry, afraid, surprised, etc.). Each evening, select the emotions you experienced today—no need to explain, just choose and name. After a week, increase to 30 words, after a month to 50. This gamified approach helps you quickly build an emotion vocabulary.'
    }
  }
};

// 根据level、orientation、score查找对应的结果类型（多语言版本）
function getResultType(level, orientation, score, lang = 'zh-CN') {
  const key = `${level}-${orientation}`;
  const resultType = RESULT_TYPES_I18N[key];

  if (!resultType) {
    console.error('No matching result type found for:', key);
    return null;
  }

  return {
    level: resultType.level,
    orientation: resultType.orientation,
    scoreRange: resultType.scoreRange,
    icon: resultType.icon,
    title: resultType.title[lang] || resultType.title['zh-CN'],
    description: resultType.description[lang] || resultType.description['zh-CN'],
    advice: resultType.advice[lang] || resultType.advice['zh-CN']
  };
}
