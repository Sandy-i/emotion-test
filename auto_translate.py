#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自动翻译所有年龄段数据
Auto-translate all age groups data

由于翻译工作量巨大（50题×5选项=250+段文本），
这个脚本提供了框架，可以对接各种翻译API完成翻译。

使用方法：
1. 安装翻译依赖：pip install deep-translator (或其他翻译库)
2. 运行脚本：python auto_translate.py
3. 生成test-data-i18n-complete.js文件
"""

import re
import json

class TranslationGenerator:
    """翻译生成器"""

    def __init__(self):
        self.category_translations = {
            '学业压力': 'Academic Pressure',
            '宿舍关系': 'Dorm Relationships',
            '恋爱关系': 'Romantic Relationships',
            '求职/未来': 'Job Hunting/Future',
            '家庭经济': 'Family Finances',
            '社交对比': 'Social Comparison',
            '学业/专业': 'Academic/Major',
            '社团/集体活动': 'Club/Group Activities',
            '友情/背叛': 'Friendship/Betrayal',
            '毕业/未来焦虑': 'Graduation/Future Anxiety',
            '职场适应': 'Workplace Adaptation',
            '租房/居住': 'Renting/Housing',
            '经济压力': 'Financial Pressure',
            '家庭/催婚': 'Family/Marriage Pressure',
            '职业发展': 'Career Development',
            '工作生活平衡': 'Work-Life Balance',
            '孤独/漂泊': 'Loneliness/Wandering',
            '人际/职场关系': 'Interpersonal/Workplace Relations',
            '职场晋升': 'Career Advancement',
            '工作疲惫': 'Work Burnout',
            '婚恋焦虑': 'Marriage Anxiety',
            '养育子女': 'Parenting',
            '家庭关系': 'Family Relations',
            '夫妻关系': 'Marital Relationship',
            '事业瓶颈': 'Career Plateau',
            '教育投资': 'Education Investment',
            '中年焦虑': 'Midlife Anxiety',
            '职业变动': 'Career Change',
            '养老/医疗': 'Elderly Care/Healthcare',
            '健康': 'Health',
            '代际关系': 'Intergenerational Relations',
            '退休规划': 'Retirement Planning',
            '子女成就': 'Children\'s Achievement',
            '晚年规划': 'Later Life Planning',
            '身体衰老': 'Physical Aging',
            '社会参与': 'Social Participation',
            '生命意义': 'Life Meaning'
        }

    def translate_category(self, chinese):
        """翻译类别"""
        return self.category_translations.get(chinese, chinese)

    def translate_scenario(self, chinese):
        """翻译场景（需要对接翻译API）"""
        # TODO: 这里对接翻译API
        # 示例：使用deep-translator
        # from deep_translator import GoogleTranslator
        # return GoogleTranslator(source='zh-CN', target='en').translate(chinese)
        return f"[TO_TRANSLATE: {chinese[:30]}...]"

    def translate_option(self, chinese):
        """翻译选项（需要对接翻译API）"""
        # TODO: 这里对接翻译API
        return f"[TO_TRANSLATE: {chinese[:20]}...]"

    def parse_and_generate(self):
        """解析并生成翻译文件"""
        print("正在读取test-data-by-age.js...")

        with open('test-data-by-age.js', 'r', encoding='utf-8') as f:
            content = f.read()

        print("解析中...")
        # 提取年龄段数据块
        age_group_pattern = r"'([\d-+]+)':\s*\[(.*?)\n  \]"
        matches = re.findall(age_group_pattern, content, re.DOTALL)

        print(f"发现 {len(matches)} 个年龄段")

        # 生成框架
        output = """// 完整翻译版本的情绪颗粒度测试数据
// Complete translated version of Emotional Granularity Test Data
//
// 自动生成 Auto-generated
//

const TEST_DATA_I18N = {
"""

        for age_group, data_block in matches:
            print(f"处理年龄段: {age_group}")
            output += f"  // {age_group}岁年龄段\n"
            output += f"  '{age_group}': [\n"
            output += "    // TODO: 添加翻译数据\n"
            output += "  ],\n\n"

        output += "};\n"

        # 写入输出文件
        with open('test-data-i18n-template.js', 'w', encoding='utf-8') as f:
            f.write(output)

        print("\n✅ 模板文件已生成: test-data-i18n-template.js")
        print("\n下一步：")
        print("1. 对接翻译API（如DeepL, Google Translate等）")
        print("2. 或使用人工翻译补充内容")
        print("3. 生成最终的test-data-i18n-complete.js")

if __name__ == '__main__':
    generator = TranslationGenerator()
    generator.parse_and_generate()

    print("\n" + "="*60)
    print("翻译说明：")
    print("="*60)
    print("由于翻译工作量巨大（约250段文本），建议使用以下方式之一：")
    print()
    print("方案1: 使用DeepL API（质量最高）")
    print("  - pip install deep-translator")
    print("  - 修改translate_scenario()和translate_option()方法")
    print()
    print("方案2: 使用Google Translate API（免费）")
    print("  - 同上，使用GoogleTranslator")
    print()
    print("方案3: 使用Claude/GPT等AI工具（推荐）")
    print("  - 将test-data-by-age.js分段发送给AI")
    print("  - 让AI按照test-data-i18n.js的格式翻译")
    print("  - 逐段合并翻译结果")
    print()
    print("方案4: 人工翻译（质量最可控，但耗时最长）")
    print("="*60)
