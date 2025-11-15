#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""修复 result.html 中保存图片的白色覆盖问题"""

import re

# 读取文件
with open('result.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义需要修改的部分
# 第1处修改：在截图前添加移除padding-top的代码
old_pattern_1 = r'''                // 获取要截图的元素
                const element = document\.getElementById\('app'\);

                // 隐藏波浪装饰，避免截图时出现白色覆盖层
                const waveDecoration = document\.querySelector\('\.wave-decoration'\);
                const originalWaveDisplay = waveDecoration \? waveDecoration\.style\.display : '';
                if \(waveDecoration\) \{
                    waveDecoration\.style\.display = 'none';
                \}

                // 给截图元素临时添加背景，确保截图清晰
                const originalBg = element\.style\.backgroundColor;
                element\.style\.backgroundColor = '#F8F9FA';'''

new_pattern_1 = '''                // 获取要截图的元素
                const element = document.getElementById('app');
                const resultContent = document.querySelector('.result-content');

                // 隐藏波浪装饰，避免截图时出现白色覆盖层
                const waveDecoration = document.querySelector('.wave-decoration');
                const originalWaveDisplay = waveDecoration ? waveDecoration.style.display : '';
                if (waveDecoration) {
                    waveDecoration.style.display = 'none';
                }

                // 移除result-content的padding-top，避免顶部空白
                const originalPaddingTop = resultContent ? resultContent.style.paddingTop : '';
                if (resultContent) {
                    resultContent.style.paddingTop = '0';
                }

                // 给截图元素临时添加背景和内边距，确保截图美观
                const originalBg = element.style.backgroundColor;
                const originalPadding = element.style.padding;
                element.style.backgroundColor = '#F8F9FA';
                element.style.padding = '32px 24px';'''

content = re.sub(old_pattern_1, new_pattern_1, content)

# 第2处修改：恢复原始样式
old_pattern_2 = r'''                // 恢复原始样式
                if \(waveDecoration\) \{
                    waveDecoration\.style\.display = originalWaveDisplay;
                \}
                element\.style\.backgroundColor = originalBg;'''

new_pattern_2 = '''                // 恢复原始样式
                if (waveDecoration) {
                    waveDecoration.style.display = originalWaveDisplay;
                }
                if (resultContent) {
                    resultContent.style.paddingTop = originalPaddingTop;
                }
                element.style.backgroundColor = originalBg;
                element.style.padding = originalPadding;'''

content = re.sub(old_pattern_2, new_pattern_2, content)

# 第3处修改：错误处理中的恢复
old_pattern_3 = r'''                // 确保恢复原始样式
                const waveDecoration = document\.querySelector\('\.wave-decoration'\);
                if \(waveDecoration\) \{
                    waveDecoration\.style\.display = '';
                \}
                const element = document\.getElementById\('app'\);
                if \(element\) \{
                    element\.style\.backgroundColor = '';
                \}'''

new_pattern_3 = '''                // 确保恢复原始样式
                const waveDecoration = document.querySelector('.wave-decoration');
                if (waveDecoration) {
                    waveDecoration.style.display = '';
                }
                const resultContent = document.querySelector('.result-content');
                if (resultContent) {
                    resultContent.style.paddingTop = '';
                }
                const element = document.getElementById('app');
                if (element) {
                    element.style.backgroundColor = '';
                    element.style.padding = '';
                }'''

content = re.sub(old_pattern_3, new_pattern_3, content)

# 写回文件
with open('result.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fix completed!')
print('Changes:')
print('1. Remove padding-top from result-content before screenshot')
print('2. Add padding to screenshot element')
print('3. Restore all styles after screenshot')
