#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 age-select.html 添加多语言支持"""

with open('age-select.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 添加 i18n.js 引用
content = content.replace(
    '<link rel="stylesheet" href="common.css">',
    '<link rel="stylesheet" href="common.css">\n    <script src="i18n.js"></script>'
)

# 2. 在 <style> 标签后添加语言切换器样式
lang_switcher_css = '''
        /* 语言切换器 */
        .lang-switcher {
            position: fixed;
            top: var(--space-2);
            right: var(--space-3);
            z-index: 1000;
            background: white;
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-md);
            display: flex;
            padding: 4px;
            gap: 4px;
        }

        .lang-btn {
            padding: 6px 12px;
            border: none;
            background: transparent;
            color: var(--gray-600);
            font-size: 14px;
            font-weight: 500;
            border-radius: var(--radius-md);
            cursor: pointer;
            transition: all var(--transition-base);
        }

        .lang-btn:hover {
            background: var(--gray-100);
        }

        .lang-btn.active {
            background: var(--gradient-warm);
            color: white;
        }
'''

content = content.replace(
    '    <style>\n        .age-container {',
    f'    <style>{lang_switcher_css}\n        .age-container {{'
)

# 3. 在 wave-decoration 后添加语言切换器HTML
lang_switcher_html = '''
    <!-- 语言切换器 -->
    <div class="lang-switcher">
        <button class="lang-btn active" data-lang="zh-CN" onclick="switchLanguage('zh-CN')">中文</button>
        <button class="lang-btn" data-lang="en-US" onclick="switchLanguage('en-US')">EN</button>
    </div>
'''

content = content.replace(
    '    <div class="wave-decoration"></div>',
    f'    <div class="wave-decoration"></div>{lang_switcher_html}'
)

# 4. 给所有文本元素添加 data-i18n 属性
replacements = [
    ('<h1 class="age-title">先了解一下你</h1>',
     '<h1 class="age-title" data-i18n="ageSelect.title"></h1>'),

    ('<p class="age-subtitle">为你匹配最贴合的情绪场景<br>让测试结果更精准</p>',
     '<p class="age-subtitle" data-i18n="ageSelect.subtitle"></p>'),

    ('<div class="age-option-label">18-22岁</div>',
     '<div class="age-option-label" data-i18n="ageSelect.age1"></div>'),

    ('<div class="age-option-desc">大学生 / 应届生 / 初入社会</div>',
     '<div class="age-option-desc" data-i18n="ageSelect.age1desc"></div>'),

    ('<div class="age-option-label">23-28岁</div>',
     '<div class="age-option-label" data-i18n="ageSelect.age2"></div>'),

    ('<div class="age-option-desc">职场新人 / 探索期 / 自我建立</div>',
     '<div class="age-option-desc" data-i18n="ageSelect.age2desc"></div>'),

    ('<div class="age-option-label">29-35岁</div>',
     '<div class="age-option-label" data-i18n="ageSelect.age3"></div>'),

    ('<div class="age-option-desc">职场发展期 / 成家立业 / 人生选择</div>',
     '<div class="age-option-desc" data-i18n="ageSelect.age3desc"></div>'),

    ('<div class="age-option-label">36-45岁</div>',
     '<div class="age-option-label" data-i18n="ageSelect.age4"></div>'),

    ('<div class="age-option-desc">中坚力量 / 上有老下有小 / 多重角色</div>',
     '<div class="age-option-desc" data-i18n="ageSelect.age4desc"></div>'),

    ('<div class="age-option-label">46岁以上</div>',
     '<div class="age-option-label" data-i18n="ageSelect.age5"></div>'),

    ('<div class="age-option-desc">人生阅历丰富 / 追求平衡与智慧</div>',
     '<div class="age-option-desc" data-i18n="ageSelect.age5desc"></div>'),

    ('开始测试 →',
     '<span data-i18n="landing.ctaButton"></span>'),

    ('<p class="privacy-note">你的选择仅用于个性化测试，不会被分享</p>',
     '<p class="privacy-note" data-i18n="ageSelect.privacyNote"></p>'),
]

for old, new in replacements:
    content = content.replace(old, new)

# 5. 添加语言切换和更新函数
script_addition = '''
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
            document.title = i18n.t('ageSelect.title') + ' - ' + i18n.t('landing.title').replace(/\\n/g, ' ');

            // 更新所有带 data-i18n 属性的元素
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                const text = i18n.t(key);

                // 处理包含 <br> 的文本
                if (text.includes('\\n')) {
                    element.innerHTML = text.replace(/\\n/g, '<br>');
                } else {
                    element.textContent = text;
                }
            });
        }

        // 页面加载时初始化语言
        document.addEventListener('DOMContentLoaded', function() {
            updateLanguage();

            // 更新语言按钮状态
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

content = content.replace(
    '    <script>\n        let selectedAge = null;',
    f'    <script>{script_addition}\n        let selectedAge = null;'
)

# 写回文件
with open('age-select.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Age select page i18n integration completed!')
