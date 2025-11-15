#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 result.html 添加多语言支持"""

with open('result.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 添加 i18n.js 引用（在 html2canvas 之前）
content = content.replace(
    '    <!-- html2canvas 库用于生成截图 -->',
    '    <!-- i18n 多语言支持 -->\n    <script src="i18n.js"></script>\n    <!-- html2canvas 库用于生成截图 -->'
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
    '<body>\n    <div class="wave-decoration"></div>',
    f'<body>{lang_switcher_html}\n    <div class="wave-decoration"></div>'
)

# 3. 修改加载文本
content = content.replace(
    '<div class="loading">正在加载结果</div>',
    '<div class="loading" data-i18n="result.loading"></div>'
)

# 4. 修改按钮文本（保存图片和重新测试按钮）
content = content.replace(
    '💾 保存图片',
    '<span data-i18n-icon="💾">💾</span> <span data-i18n="result.saveButton"></span>'
)

content = content.replace(
    '🔄 我也要测',
    '<span data-i18n-icon="🔄">🔄</span> <span data-i18n="result.retestButton"></span>'
)

# 5. 修改renderResult函数以使用i18n
old_render = '''            app.innerHTML = `
                <div class="result-header fade-in">
                    <div class="result-icon">${data.icon}</div>
                    <div class="result-title">${data.title}</div>
                    <div class="result-stars">${stars}</div>
                    <div class="result-score">总分：${data.score}/${data.maxScore}</div>
                    <div class="result-percentage">击败了 ${data.percentage}% 的人</div>
                </div>

                <div class="radar-card fade-in">
                    <div class="radar-card-title">📊 你的情绪模式</div>'''

new_render = '''            app.innerHTML = `
                <div class="result-header fade-in">
                    <div class="result-icon">${data.icon}</div>
                    <div class="result-title">${data.title}</div>
                    <div class="result-stars">${stars}</div>
                    <div class="result-score" data-i18n="result.scoreLabel"></div>
                    <div class="result-score-value">${data.score}/${data.maxScore}</div>
                    <div class="result-percentage"><span data-i18n="result.beatLabel"></span> ${data.percentage}% <span data-i18n="result.beatSuffix"></span></div>
                </div>

                <div class="radar-card fade-in">
                    <div class="radar-card-title">📊 <span data-i18n="result.radarTitle"></span></div>'''

content = content.replace(old_render, new_render)

# 6. 修改特质和建议卡片
content = content.replace(
    '<div class="content-card-title">💎 你的特质</div>',
    '<div class="content-card-title">💎 <span data-i18n="result.traitsTitle"></span></div>'
)

content = content.replace(
    '<div class="content-card-title">💡 给你的建议</div>',
    '<div class="content-card-title">💡 <span data-i18n="result.adviceTitle"></span></div>'
)

# 7. 修改CTA卡片
old_cta = '''                <div class="cta-card fade-in">
                    <div class="cta-card-title">✨ 在「星火奇缘」小程序中</div>
                    <div class="qrcode-container">
                        <img src="./qrcode.jpg" alt="小程序码" class="qrcode-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23F8F9FA%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236C7CE7%22 font-size=%2216%22 font-weight=%22600%22%3E星火奇缘%3C/text%3E%3C/svg%3E'">
                    </div>
                    <div class="cta-features">
                        <div class="cta-feature">✓ 记录你的情绪模式</div>
                        <div class="cta-feature">✓ 发现更多关于自己的洞察</div>
                        <div class="cta-feature">✓ 用65个情绪词精准表达</div>
                        <div class="cta-feature">✓ 查看情绪趋势和分析</div>
                    </div>
                    <div class="cta-hint">长按识别小程序码</div>
                </div>'''

new_cta = '''                <div class="cta-card fade-in">
                    <div class="cta-card-title">✨ <span data-i18n="result.ctaTitle"></span></div>
                    <div class="qrcode-container">
                        <img src="./qrcode.jpg" alt="小程序码" class="qrcode-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23F8F9FA%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236C7CE7%22 font-size=%2216%22 font-weight=%22600%22%3E星火奇缘%3C/text%3E%3C/svg%3E'">
                    </div>
                    <div class="cta-features">
                        <div class="cta-feature">✓ <span data-i18n="result.feature1"></span></div>
                        <div class="cta-feature">✓ <span data-i18n="result.feature2"></span></div>
                        <div class="cta-feature">✓ <span data-i18n="result.feature3"></span></div>
                        <div class="cta-feature">✓ <span data-i18n="result.feature4"></span></div>
                    </div>
                    <div class="cta-hint" data-i18n="result.ctaHint"></div>
                </div>'''

content = content.replace(old_cta, new_cta)

# 8. 修改"未找到结果"页面
old_not_found = '''                    document.getElementById('app').innerHTML = `
                        <div class="content-card" style="text-align: center; margin-top: 100px;">
                            <div style="font-size: 48px; margin-bottom: 16px;">🤔</div>
                            <div class="content-card-title" style="justify-content: center;">未找到测试结果</div>
                            <div class="content-card-body" style="margin-bottom: 24px;">请先完成测试</div>
                            <button class="btn-primary" onclick="window.location.href='landing.html'">
                                开始测试 →
                            </button>
                        </div>
                    `;'''

new_not_found = '''                    document.getElementById('app').innerHTML = `
                        <div class="content-card" style="text-align: center; margin-top: 100px;">
                            <div style="font-size: 48px; margin-bottom: 16px;">🤔</div>
                            <div class="content-card-title" style="justify-content: center;" data-i18n="result.notFoundTitle"></div>
                            <div class="content-card-body" style="margin-bottom: 24px;" data-i18n="result.notFoundDesc"></div>
                            <button class="btn-primary" onclick="window.location.href='landing.html'">
                                <span data-i18n="result.startButton"></span>
                            </button>
                        </div>
                    `;
                    updateLanguage();'''

content = content.replace(old_not_found, new_not_found)

# 9. 在drawRadarChart函数之前添加语言切换函数
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
            document.title = i18n.t('result.loading') + ' - ' + i18n.t('landing.title').replace(/\\n/g, ' ');

            // 更新所有带 data-i18n 属性的元素
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                let text = i18n.t(key);

                // 处理特殊格式
                if (key === 'result.scoreLabel') {
                    element.textContent = text + '：';
                } else if (key === 'result.beatSuffix') {
                    element.textContent = text;
                } else {
                    element.textContent = text;
                }
            });
        }

'''

content = content.replace(
    '        // 绘制雷达图\n        function drawRadarChart(data) {',
    language_functions + '        // 绘制雷达图\n        function drawRadarChart(data) {'
)

# 10. 在页面加载后调用updateLanguage
content = content.replace(
    '            // 延迟绘制雷达图，确保canvas已挂载\n            setTimeout(() => {\n                drawRadarChart(data.radarData);\n            }, 100);',
    '''            // 延迟绘制雷达图，确保canvas已挂载
            setTimeout(() => {
                drawRadarChart(data.radarData);
                updateLanguage(); // 更新语言
            }, 100);'''
)

# 11. 在DOMContentLoaded中初始化语言按钮状态
content = content.replace(
    '        window.addEventListener(\'DOMContentLoaded\', () => {\n            loadAndRenderResult();\n        });',
    '''        window.addEventListener('DOMContentLoaded', () => {
            loadAndRenderResult();

            // 初始化语言按钮状态
            const currentLang = i18n.getLang();
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.dataset.lang === currentLang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });'''
)

# 写回文件
with open('result.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Result page i18n integration completed!')
