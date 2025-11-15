#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 question.html 添加多语言支持（仅UI部分）"""

with open('question.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 添加 i18n.js 引用
content = content.replace(
    '<link rel="stylesheet" href="common.css">',
    '<link rel="stylesheet" href="common.css">\n    <script src="i18n.js"></script>'
)

# 2. 在 <body> 标签后添加语言切换器
lang_switcher_html = '''
    <!-- 语言切换器 -->
    <div class="lang-switcher" style="position: fixed; top: 16px; right: 24px; z-index: 1000; background: white; border-radius: 24px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12); display: flex; padding: 4px; gap: 4px;">
        <button class="lang-btn active" data-lang="zh-CN" onclick="switchLanguage('zh-CN')" style="padding: 6px 12px; border: none; background: transparent; color: #6C757D; font-size: 14px; font-weight: 500; border-radius: 12px; cursor: pointer; transition: all 300ms ease-out;">中文</button>
        <button class="lang-btn" data-lang="en-US" onclick="switchLanguage('en-US')" style="padding: 6px 12px; border: none; background: transparent; color: #6C757D; font-size: 14px; font-weight: 500; border-radius: 12px; cursor: pointer; transition: all 300ms ease-out;">EN</button>
    </div>
    <style>
        .lang-btn:hover { background: #F1F3F5 !important; }
        .lang-btn.active { background: linear-gradient(135deg, #6C7CE7 0%, #AB7BF7 100%) !important; color: white !important; }
    </style>
'''

content = content.replace(
    '<body>\n    <div class="question-container">',
    f'<body>{lang_switcher_html}\n    <div class="question-container">'
)

# 3. 添加语言切换函数（在script标签开始处）
language_functions = '''
        // 语言切换和更新
        function switchLanguage(lang) {
            i18n.setLang(lang);
            updateLanguage();

            // 更新按钮状态
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        function updateLanguage() {
            // 更新页面标题
            document.title = i18n.t('landing.title').replace(/\\n/g, ' ');

            // 更新进度文本
            const progressText = document.querySelector('.progress-text');
            if (progressText && !progressText.textContent.includes('/')) {
                progressText.textContent = i18n.t('question.progressText');
            }

            // 更新提示文本
            const hintElements = document.querySelectorAll('.question-hint');
            hintElements.forEach(hint => {
                if (hint.textContent.includes('选择') || hint.textContent.includes('Choose')) {
                    hint.innerHTML = `${i18n.t('question.hint')} <strong>${i18n.t('question.hintBold')}</strong> ${i18n.t('question.hintSuffix')}`;
                }
            });

            // 更新所有带 data-i18n 属性的元素
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = i18n.t(key);
            });
        }

        // 页面加载时初始化语言
        window.addEventListener('load', function() {
            updateLanguage();

            // 初始化语言按钮状态
            const currentLang = i18n.getLang();
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.dataset.lang === currentLang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });

'''

# 找到 <script> 标签并在其后插入函数
import re
script_match = re.search(r'(<script src="test-data-by-age\.js"></script>\s*<script>)', content)
if script_match:
    content = content.replace(
        script_match.group(1),
        script_match.group(1) + language_functions
    )

# 4. 修改renderQuestion函数中的提示文本和按钮
old_hint = '''                <div class="question-hint">
                    选择<strong>最符合</strong>你真实感受的选项
                </div>'''

new_hint = '''                <div class="question-hint">
                    <span data-i18n="question.hint"></span> <strong data-i18n="question.hintBold"></strong> <span data-i18n="question.hintSuffix"></span>
                </div>'''

content = content.replace(old_hint, new_hint)

# 5. 修改按钮文本（查找renderQuestion函数中的按钮）
# 修改进度文本
content = content.replace(
    'document.querySelector(\'.progress-text\').textContent = \'答题进度\';',
    'document.querySelector(\'.progress-text\').textContent = i18n.t(\'question.progressText\');'
)

# 修改"上一题"按钮
content = content.replace(
    '← 上一题',
    '<span data-i18n="question.prevButton"></span>'
)

# 修改"下一题"按钮
content = content.replace(
    '下一题 →',
    '<span data-i18n="question.nextButton"></span>'
)

# 修改"查看结果"按钮
content = content.replace(
    '查看结果 →',
    '<span data-i18n="question.submitButton"></span>'
)

# 6. 在renderQuestion函数末尾添加updateLanguage调用
content = content.replace(
    '            // 渲染选项\n            renderOptions();',
    '            // 渲染选项\n            renderOptions();\n            \n            // 更新语言\n            updateLanguage();'
)

# 写回文件
with open('question.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Question page i18n integration completed!')
print('Note: Question content itself remains in original language.')
print('Only UI elements (progress, buttons, hints) are translated.')
