#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""更新 i18n.js 中英文版本的ageSelect部分"""

with open('i18n.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 更新英文版本的ageSelect部分
old_text = """            // Age Selection
            ageSelect: {
                title: 'Select Your Age Group',
                subtitle: 'We\\'ll provide more accurate analysis based on your age',
                age1: '18-24 years',
                age1desc: 'Exploration phase, rich emotional experiences',
                age2: '25-28 years',
                age2desc: 'Growth phase, career and life transition',
                age3: '29-35 years',
                age3desc: 'Stability phase, balancing multiple roles',
                age4: '36-45 years',
                age4desc: 'Maturity phase, accumulating life wisdom',
                age5: '46+ years',
                age5desc: 'Reflection phase, calm emotion management',
            },"""

new_text = """            // Age Selection
            ageSelect: {
                title: 'Let\\'s Get to Know You',
                subtitle: 'Match you with the most relevant emotional scenarios\\nFor more accurate results',
                age1: '18-22 years',
                age1desc: 'College student / Fresh graduate / Entering society',
                age2: '23-28 years',
                age2desc: 'Career starter / Exploration / Self-establishment',
                age3: '29-35 years',
                age3desc: 'Career development / Building life / Life choices',
                age4: '36-45 years',
                age4desc: 'Core strength / Sandwich generation / Multiple roles',
                age5: '46+ years',
                age5desc: 'Rich life experience / Seeking balance & wisdom',
                privacyNote: 'Your selection is only used for personalized testing and will not be shared',
            },"""

content = content.replace(old_text, new_text)

# 写回文件
with open('i18n.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('i18n.js updated for age selection!')
