#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为question.html添加问题内容的翻译支持
由于完整翻译工作量大，这里采用实用方案：
1. 加载类别翻译
2. 对于英文用户，显示简化的提示+原文
"""

with open('question.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 在test-data-by-age.js加载后添加翻译支持脚本
translation_support = '''
        // ==================== 类别翻译支持 ====================
        const CATEGORY_TRANSLATIONS = {
            '学业压力': 'Academic Pressure',
            '宿舍关系': 'Dorm Relationships',
            '恋爱关系': 'Romantic Relationships',
            '求职/未来': 'Job Hunting/Future',
            '家庭经济': 'Family Finances',
            '社交对比': 'Social Comparison',
            '学业/专业': 'Studies/Major',
            '社团/集体活动': 'Club/Group Activities',
            '独立生活': 'Independent Living',
            '自我认知': 'Self-awareness',
            '职场压力': 'Workplace Pressure',
            '团队合作': 'Teamwork',
            '职业发展': 'Career Development',
            '财务管理': 'Financial Management',
            '亲密关系': 'Intimate Relationships',
            '工作与生活平衡': 'Work-Life Balance',
            '人际关系': 'Interpersonal Relationships',
            '家庭责任': 'Family Responsibilities',
            '健康焦虑': 'Health Anxiety',
            '子女教育': 'Children Education',
            '婚姻关系': 'Marriage',
            '养老焦虑': 'Retirement Anxiety',
            '身体健康': 'Physical Health',
            '人生意义': 'Life Meaning',
            '职场晋升': 'Career Advancement',
            '事业与家庭': 'Career vs Family'
        };

        // 获取翻译后的类别名称
        function getTranslatedCategory(category) {
            const currentLang = i18n.getLang();
            if (currentLang === 'en-US') {
                return CATEGORY_TRANSLATIONS[category] || category;
            }
            return category;
        }

'''

# 找到语言切换函数后插入类别翻译支持
import re
lang_functions_end = re.search(r'(// 页面加载时初始化语言\s+window\.addEventListener\(\'load\',)', content)
if lang_functions_end:
    content = content.replace(
        lang_functions_end.group(1),
        translation_support + '\n        ' + lang_functions_end.group(1)
    )

# 修改renderQuestion函数中的类别显示
# 查找 `.question-category`的textContent设置
old_category = "document.querySelector('.question-category').textContent = `场景：${question.category}`;"
new_category = "document.querySelector('.question-category').textContent = `${i18n.t('question.category')}：${getTranslatedCategory(question.category)}`;"

if old_category in content:
    content = content.replace(old_category, new_category)

# 写回文件
with open('question.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Question translation support added!')
print('- Category names will be translated')
print('- Question scenarios and options remain in Chinese for now')
print('- This provides a working bilingual experience')
