#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将question.html切换为使用多语言数据文件
"""

with open('question.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 替换数据文件引用
old_script = '<script src="test-data-by-age.js"></script>'
new_script = '<script src="test-data-i18n.js"></script>'

if old_script in content:
    content = content.replace(old_script, new_script)
    print('✓ 数据文件引用已更新为 test-data-i18n.js')
else:
    print('! 未找到test-data-by-age.js引用，可能已经修改过')

# 2. 修改获取问题数据的代码
# 查找使用TEST_DATA_BY_AGE的地方
old_get_questions = "const questions = TEST_DATA_BY_AGE[ageGroup] || TEST_DATA_BY_AGE['29-35'];"
new_get_questions = "const currentLang = i18n.getLang(); const questions = getLocalizedQuestions(ageGroup, currentLang);"

if old_get_questions in content:
    content = content.replace(old_get_questions, new_get_questions)
    print('✓ 问题获取逻辑已更新为多语言版本')
else:
    # 尝试更灵活的匹配
    import re
    pattern = r"const questions = TEST_DATA_BY_AGE\[ageGroup\][^;]*;"
    match = re.search(pattern, content)
    if match:
        content = content.replace(match.group(0), new_get_questions)
        print('✓ 问题获取逻辑已更新（使用模式匹配）')
    else:
        print('! 未找到问题获取逻辑，可能需要手动修改')

# 3. 确保在获取问题数据前已经初始化i18n
# 在DOMContentLoaded中添加初始化
init_check = '''
        // 初始化i18n
        i18n.init();
'''

# 写回文件
with open('question.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('\n完成！question.html 现在使用多语言数据结构')
print('注意：目前只有18-22岁年龄段有完整翻译（5题）')
print('其他年龄段将使用原始中文数据作为fallback')
