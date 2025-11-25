// 修复result.html中保存图片的白色覆盖问题
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'result.html');
let content = fs.readFileSync(filePath, 'utf8');

// 查找并替换saveImage函数
const oldCode = `            try {
                // 显示加载状态
                button.disabled = true;
                button.textContent = '生成中...';

                // 获取要截图的元素
                const element = document.getElementById('app');

                // 隐藏波浪装饰，避免截图时出现白色覆盖层
                const waveDecoration = document.querySelector('.wave-decoration');
                const originalWaveDisplay = waveDecoration ? waveDecoration.style.display : '';
                if (waveDecoration) {
                    waveDecoration.style.display = 'none';
                }

                // 给截图元素临时添加背景，确保截图清晰
                const originalBg = element.style.backgroundColor;
                element.style.backgroundColor = '#F8F9FA';`;

const newCode = `            try {
                // 显示加载状态
                button.disabled = true;
                button.textContent = '生成中...';

                // 获取要截图的元素
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
                element.style.padding = '32px 24px';`;

// 替换第一部分
content = content.replace(oldCode, newCode);

// 替换恢复样式的部分
const oldRestore = `                // 恢复原始样式
                if (waveDecoration) {
                    waveDecoration.style.display = originalWaveDisplay;
                }
                element.style.backgroundColor = originalBg;`;

const newRestore = `                // 恢复原始样式
                if (waveDecoration) {
                    waveDecoration.style.display = originalWaveDisplay;
                }
                if (resultContent) {
                    resultContent.style.paddingTop = originalPaddingTop;
                }
                element.style.backgroundColor = originalBg;
                element.style.padding = originalPadding;`;

content = content.replace(oldRestore, newRestore);

// 替换错误处理中的恢复部分
const oldErrorRestore = `                // 确保恢复原始样式
                const waveDecoration = document.querySelector('.wave-decoration');
                if (waveDecoration) {
                    waveDecoration.style.display = '';
                }
                const element = document.getElementById('app');
                if (element) {
                    element.style.backgroundColor = '';
                }`;

const newErrorRestore = `                // 确保恢复原始样式
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
                }`;

content = content.replace(oldErrorRestore, newErrorRestore);

// 写回文件
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ 修复完成！已解决保存图片时的白色覆盖问题。');
