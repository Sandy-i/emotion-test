#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
完整翻译所有年龄段的情绪测试数据
Translate all age groups' emotional test data
"""

import re
import json

# 翻译映射表
TRANSLATIONS = {
    # 年龄段翻译
    'ages': {
        '18-22': '18-22',
        '23-28': '23-28',
        '29-35': '29-35',
        '36-45': '36-45',
        '46+': '46+'
    },

    # 类别翻译
    'categories': {
        '学业压力': 'Academic Pressure',
        '宿舍关系': 'Dorm Relationships',
        '恋爱关系': 'Romantic Relationships',
        '求职/未来': 'Job Hunting/Future',
        '家庭经济': 'Family Finances',
        '社交对比': 'Social Comparison',
        '学业/专业': 'Academic/Major',
        '社团/集体活动': 'Club/Group Activities',
        '友情/背叛': 'Friendship/Betrayal',
        '毕业/未来焦虑': 'Graduation/Future Anxiety',
        '职场适应': 'Workplace Adaptation',
        '租房/居住': 'Renting/Housing',
        '经济压力': 'Financial Pressure',
        '家庭/催婚': 'Family/Marriage Pressure',
        '职场晋升': 'Career Advancement',
        '工作疲惫': 'Work Burnout',
        '婚恋焦虑': 'Marriage Anxiety',
        '养育子女': 'Parenting',
        '家庭关系': 'Family Relations',
        '夫妻关系': 'Marital Relationship',
        '事业瓶颈': 'Career Plateau',
        '教育投资': 'Education Investment',
        '中年焦虑': 'Midlife Anxiety',
        '职业变动': 'Career Change',
        '养老/医疗': 'Elderly Care/Healthcare',
        '健康': 'Health',
        '代际关系': 'Intergenerational Relations',
        '退休规划': 'Retirement Planning',
        '子女成就': 'Children\'s Achievement',
        '晚年规划': 'Later Life Planning',
        '身体衰老': 'Physical Aging',
        '社会参与': 'Social Participation',
        '生命意义': 'Life Meaning'
    }
}

def translate_text(chinese_text):
    """
    翻译中文文本为英文
    由于这是情绪测试，需要保持情感的准确性
    """
    # 基础翻译映射
    phrase_map = {
        # 第6题 - 社交对比
        '朋友圈看到高中同学发旅游照片：新加坡、日本、欧洲...而你暑假只能在家待着，或者打工挣生活费。此刻你：':
        'You see high school classmates posting travel photos on social media: Singapore, Japan, Europe... while you can only stay home during summer break, or work part-time to earn living expenses. Right now you:',

        '划过去了，继续往下刷':
        'Scroll past it and keep browsing',

        '心里有点酸酸的，停留了几秒':
        'Feeling a bit sour inside, pausing for a few seconds',

        '羡慕、自卑、不甘心一起涌上来："同龄人的生活差距怎么这么大..."忍不住对比家境，越想越不是滋味，甚至有点恨自己没有投好胎':
        'Envy, inferiority, and unwillingness surge together: "Why is the gap between peers so huge..." can\'t help comparing family backgrounds, feeling worse the more I think, even resenting not being born into a better family',

        '羡慕中保持清醒："每个人的起点不同，我有我的节奏"，虽然心里还是有点失落，但能接受这个现实':
        'Staying clear-minded amid envy: "Everyone has different starting points, I have my own pace," though still a bit disappointed, can accept this reality',

        '短暂羡慕后情绪转向："等我有能力了，也要去看世界"，把羡慕转化为具体目标，开始盘算要存多少钱':
        'After brief envy, emotion shifts: "When I have the means, I\'ll see the world too," converting envy into concrete goals, starting to calculate savings needed',

        # 第7题 - 学业/专业
        '大三了，你发现自己对所学专业完全没兴趣，每天上课都像坐牢。但转专业已经来不及了。此刻你：':
        'In junior year, you realize you have zero interest in your major, and every class feels like prison. But it\'s too late to change majors. Right now you:',

        '坐在教室最后一排，眼神空洞地看着黑板':
        'Sitting in the back row, staring blankly at the blackboard',

        '听着听着就走神了，脑子里一片混乱':
        'Mind wanders while listening, brain in chaos',

        '后悔、恐慌、对未来的迷茫交织："当初怎么选了这个专业？浪费了这么多时间，毕业后怎么办？"感觉人生被困住了，找不到出路':
        'Regret, panic, and confusion about future intertwined: "Why did I choose this major? Wasted so much time, what after graduation?" feeling life is trapped with no way out',

        '虽然不喜欢专业，但脑子开始活跃起来："可以考研换方向，或者毕业转行"，在迷茫中努力寻找其他可能性':
        'Though disliking the major, mind becomes active: "Can switch directions in grad school, or change careers after graduation," striving to find alternatives amid confusion',

        '接受了现实但有了Plan B：想通了"先把学位拿到手，工作不一定要专业对口"，心里反而踏实了一些':
        'Accepting reality but having Plan B: figured out "get the degree first, work doesn\'t have to match the major," feeling more settled',

        # 第8题 - 社团/集体活动
        '你在社团/学生会策划的活动出了问题，部长在例会上当着所有人的面批评了你。其他成员都低头不语。此刻你：':
        'The event you planned for the club/student council had problems, and the president criticized you publicly in the meeting. Other members all keep their heads down in silence. Right now you:',

        '低头盯着笔记本，脸有点发烫':
        'Head down staring at notebook, face feeling hot',

        '耳朵嗡嗡作响，恨不得立刻消失':
        'Ears ringing, wishing to disappear immediately',

        '羞愧、委屈、愤怒同时爆发：脸烫得厉害，喉咙发紧，脑子里闪过"我也很努力了，为什么要当众说"，眼眶泛红但拼命忍着不哭出来':
        'Shame, grievance, and anger exploding together: face burning badly, throat tightening, thinking "I worked hard too, why criticize publicly," eyes reddening but desperately holding back tears',

        '虽然很尴尬脸也在发烫，但快速记下批评的要点，脑子里在分析："确实是我没考虑周全，下次要注意这几点"':
        'Though embarrassed and face burning, quickly noting criticism points, mind analyzing: "Indeed I didn\'t think thoroughly, need to watch these points next time"',

        '羞愧之外更多的是被冒犯："当众批评太不尊重人了"，表面平静但心里记下这笔账，开始重新评估这个组织值不值得继续待':
        'Beyond shame, more feeling offended: "Public criticism is too disrespectful," outwardly calm but mentally noting this, starting to reassess if this organization is worth staying in',

        # 第9题 - 友情/背叛
        '你的好朋友偷偷和你暗恋的对象在一起了，你是最后一个知道的。你们三个一起上过很多次课，一起吃过很多次饭。此刻你：':
        'Your good friend secretly got together with your crush, and you\'re the last to know. The three of you have attended many classes and meals together. Right now you:',

        '听到消息时愣住了，半天说不出话':
        'Stunned upon hearing the news, speechless for a long time',

        '胸口像被什么东西堵住了，呼吸都有点困难':
        'Chest feels blocked by something, even breathing slightly difficult',

        '被背叛的痛苦、嫉妒、失落、愤怒一起爆发："所谓的好朋友...我算什么？"既心碎于失恋，又愤怒于被蒙在鼓里，甚至想割席绝交':
        'Pain of betrayal, jealousy, loss, and anger exploding together: "So-called good friend... what am I to them?" heartbroken over the crush and furious at being kept in the dark, even wanting to cut ties',

        '失望和释然矛盾地交织：失望于朋友的做法，但也有种"既然ta选择了别人，说明我们不合适"的释然，虽然难过但选择放下':
        'Disappointment and relief contradictorily intertwined: disappointed in friend\'s actions, but also relieved thinking "since they chose someone else, we weren\'t meant to be," though sad, choosing to let go',

        '难过中保持理性："感情不能强求，谁也没错"，虽然心痛但能接受现实，只是需要时间一个人静静疗伤':
        'Staying rational amid sadness: "Love can\'t be forced, no one\'s at fault," though heartbroken, can accept reality, just needing time alone to heal',

        # 第10题 - 毕业/未来焦虑
        '毕业倒计时100天，宿舍里有人已经签约大厂，有人准备出国，有人要考公，而你还不知道自己要做什么。此刻你：':
        '100 days until graduation, some roommates already signed with big companies, some preparing to study abroad, some taking civil service exams, while you still don\'t know what to do. Right now you:',

        '躺在床上刷手机，越刷越空虚':
        'Lying in bed scrolling phone, feeling emptier',

        '心里慌得很，但又不知道该做什么':
        'Panicking inside, but not knowing what to do',

        '对未来深深的恐慌、自我怀疑、被抛弃感："别人都有方向了，我怎么还这么迷茫？是我太废了吗？"焦虑到失眠，感觉要被时代抛弃':
        'Deep panic about future, self-doubt, and feeling abandoned: "Others all have directions, why am I still so lost? Am I too useless?" anxious to the point of insomnia, feeling left behind by the times',

        '焦虑催生行动力："我得抓紧时间想清楚了"，打开备忘录开始列所有可能的选项，逐个分析利弊，虽然还是紧张但至少在做事':
        'Anxiety catalyzes action: "I need to figure it out quickly," opening notes app to list all possible options, analyzing pros and cons one by one, though still nervous, at least taking action',

        '虽然还没方向，但内心相对平静："慢慢来，每个人的节奏不同"，相信自己最终会找到答案，只是需要更多时间':
        'Though still directionless, relatively calm inside: "Take it slow, everyone has different paces," believing will eventually find the answer, just needing more time',
    }

    # 如果在映射表中找到直接翻译
    if chinese_text in phrase_map:
        return phrase_map[chinese_text]

    # 否则返回原文（需要人工翻译）
    return chinese_text


print("翻译脚本准备完成")
print("准备翻译18-22岁年龄段剩余题目...")
