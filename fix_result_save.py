# -*- coding: utf-8 -*-
# 修复result.html中的图片保存问题

with open('c:/tmp/emotion-share/result.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到要替换的代码段
old_code = """            try {
                // 显示加载状态
                button.disabled = true;
                button.textContent = '生成中...';

                // 获取要截图的元素
                const element = document.getElementById('app');

                // 配置选项
                const options = {
                    backgroundColor: '#ffffff', // 纯白背景
                    scale: 2, // 提高清晰度
                    useCORS: true, // 允许跨域图片
                    logging: false,
                    width: element.scrollWidth,
                    height: element.scrollHeight,
                    windowWidth: element.scrollWidth,
                    windowHeight: element.scrollHeight
                };

                // 生成截图
                const canvas = await html2canvas(element, options);

                // 转换为blob并下载
                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.download = `情绪颗粒度测试结果_${new Date().getTime()}.png`;
                    link.href = url;
                    link.click();

                    // 清理
                    URL.revokeObjectURL(url);

                    // 恢复按钮状态
                    button.disabled = false;
                    button.innerHTML = '💾 保存图片';
                }, 'image/png', 1.0);

            } catch (error) {
                console.error('截图失败:', error);
                alert('截图失败，请重试或使用长按截图方式保存');

                // 恢复按钮状态
                button.disabled = false;
                button.innerHTML = '💾 保存图片';
            }"""

new_code = """            try {
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
                element.style.backgroundColor = '#F8F9FA';

                // 配置选项
                const options = {
                    backgroundColor: '#F8F9FA', // 浅灰背景，与页面一致
                    scale: 2, // 提高清晰度
                    useCORS: true, // 允许跨域图片
                    allowTaint: true, // 允许污染的canvas
                    logging: false,
                    width: element.scrollWidth,
                    height: element.scrollHeight,
                    windowWidth: element.scrollWidth,
                    windowHeight: element.scrollHeight,
                    // 忽略波浪装饰元素
                    ignoreElements: (el) => {
                        return el.classList && el.classList.contains('wave-decoration');
                    }
                };

                // 生成截图
                const canvas = await html2canvas(element, options);

                // 恢复原始样式
                if (waveDecoration) {
                    waveDecoration.style.display = originalWaveDisplay;
                }
                element.style.backgroundColor = originalBg;

                // 转换为blob并下载
                canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.download = `情绪颗粒度测试结果_${new Date().getTime()}.png`;
                    link.href = url;
                    link.click();

                    // 清理
                    URL.revokeObjectURL(url);

                    // 恢复按钮状态
                    button.disabled = false;
                    button.innerHTML = '💾 保存图片';
                }, 'image/png', 1.0);

            } catch (error) {
                console.error('截图失败:', error);
                alert('截图失败，请重试或使用长按截图方式保存');

                // 恢复按钮状态
                button.disabled = false;
                button.innerHTML = '💾 保存图片';

                // 确保恢复原始样式
                const waveDecoration = document.querySelector('.wave-decoration');
                if (waveDecoration) {
                    waveDecoration.style.display = '';
                }
                const element = document.getElementById('app');
                if (element) {
                    element.style.backgroundColor = '';
                }
            }"""

# 替换
new_content = content.replace(old_code, new_code)

if new_content == content:
    print("错误：未找到要替换的代码")
else:
    # 写入文件
    with open('c:/tmp/emotion-share/result.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("✅ 图片保存问题已修复！")
    print("修复内容：")
    print("1. 截图前隐藏波浪装饰元素")
    print("2. 添加浅灰色背景（#F8F9FA）替代纯白背景")
    print("3. 截图后恢复原始样式")
    print("4. 添加 ignoreElements 配置忽略波浪装饰")
