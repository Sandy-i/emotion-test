#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 landing.html 添加多语言支持"""

with open('landing.html', 'r', encoding='utf-8') as f:
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
    '    <style>\n        .landing-container {',
    f'    <style>{lang_switcher_css}\n        .landing-container {{'
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
    ('<h1 class="hero-title">你的情绪颗粒度<br>有多细？</h1>',
     '<h1 class="hero-title" data-i18n="landing.title"></h1>'),

    ('<p class="hero-subtitle">\n                2分钟测试，了解你识别和表达情绪的能力<br>\n                发现情绪背后的真实自己\n            </p>',
     '<p class="hero-subtitle" data-i18n="landing.subtitle"></p>'),

    ('<div class="stat-label">道精选场景</div>',
     '<div class="stat-label" data-i18n="landing.stat1"></div>'),

    ('<div class="stat-label">种结果类型</div>',
     '<div class="stat-label" data-i18n="landing.stat2"></div>'),

    ('<div class="stat-label">分钟完成</div>',
     '<div class="stat-label" data-i18n="landing.stat3"></div>'),

    ('<h3>什么是情绪颗粒度？</h3>',
     '<h3 data-i18n="landing.infoTitle1"></h3>'),

    ('<p>指的是你识别和区分细微情绪差异的能力。颗粒度越高，越能准确表达感受，而不只是"开心"或"不开心"。</p>',
     '<p data-i18n="landing.infoDesc1"></p>'),

    ('<h3>为什么重要？</h3>',
     '<h3 data-i18n="landing.infoTitle2"></h3>'),

    ('<p>研究表明，情绪颗粒度高的人更善于情绪调节，心理韧性更强，人际关系更好，抑郁和焦虑程度更低。</p>',
     '<p data-i18n="landing.infoDesc2"></p>'),

    ('<h3>你将获得什么？</h3>',
     '<h3 data-i18n="landing.infoTitle3"></h3>'),

    ('<p>个性化的情绪颗粒度分析报告，包括雷达图、优势分析和提升建议，帮助你更好地认识自己。</p>',
     '<p data-i18n="landing.infoDesc3"></p>'),

    ('<div class="example-title">🔍 举个例子</div>',
     '<div class="example-title"><span data-i18n="landing.exampleTitle"></span></div>'),

    ('<div class="example-label">❌ 低颗粒度表达</div>',
     '<div class="example-label"><span data-i18n="landing.exampleLow"></span></div>'),

    ('<div class="example-text low">"今天心情不太好"</div>',
     '<div class="example-text low" data-i18n="landing.exampleLowText"></div>'),

    ('<div class="example-label">✅ 高颗粒度表达</div>',
     '<div class="example-label"><span data-i18n="landing.exampleHigh"></span></div>'),

    ('<div class="example-text high">"我因为项目延期感到焦虑，同时对自己的拖延感到失望和愧疚"</div>',
     '<div class="example-text high" data-i18n="landing.exampleHighText"></div>'),

    ('开始测试 →',
     '<span data-i18n="landing.ctaButton"></span>'),

    ('<div class="cta-info">\n                完全免费 · 无需登录 · 立即查看结果\n            </div>',
     '<div class="cta-info" data-i18n="landing.ctaInfo"></div>'),
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
            document.title = i18n.t('landing.title').replace('\\n', ' ');

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

            // 特殊处理：example标题中的emoji
            const exampleTitle = document.querySelector('.example-title [data-i18n="landing.exampleTitle"]');
            if (exampleTitle) {
                exampleTitle.parentElement.innerHTML = '🔍 ' + exampleTitle.textContent;
            }

            // 特殊处理：example标签中的emoji
            const exampleLabels = document.querySelectorAll('.example-label [data-i18n]');
            exampleLabels.forEach(label => {
                const key = label.getAttribute('data-i18n');
                if (key === 'landing.exampleLow') {
                    label.parentElement.innerHTML = '❌ ' + label.textContent;
                } else if (key === 'landing.exampleHigh') {
                    label.parentElement.innerHTML = '✅ ' + label.textContent;
                }
            });
        }

'''

content = content.replace(
    '        // 页面加载动画\n        document.addEventListener(\'DOMContentLoaded\', function() {',
    script_addition + '        // 页面加载时初始化语言\n        document.addEventListener(\'DOMContentLoaded\', function() {\n            updateLanguage();\n            \n            // 更新语言按钮状态\n            const currentLang = i18n.getLang();\n            document.querySelectorAll(\'.lang-btn\').forEach(btn => {\n                if (btn.dataset.lang === currentLang) {\n                    btn.classList.add(\'active\');\n                } else {\n                    btn.classList.remove(\'active\');\n                }\n            });\n'
)

# 写回文件
with open('landing.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Landing page i18n integration completed!')
print('Changes:')
print('1. Added i18n.js script reference')
print('2. Added language switcher UI (top-right corner)')
print('3. Added data-i18n attributes to all text elements')
print('4. Added switchLanguage() and updateLanguage() functions')
