#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量翻译脚本 - 分年龄段处理
Batch translation script - process by age group
"""

import re
import json

# 年龄段范围配置
AGE_GROUPS_CONFIG = {
    '18-22': {'start_line': 5, 'end_line': 126, 'name': 'College/Fresh Graduates'},
    '23-28': {'start_line': 129, 'end_line': 280, 'name': 'Young Professionals'},
    '29-35': {'start_line': 283, 'end_line': 480, 'name': 'Established Professionals'},
    '36-45': {'start_line': 483, 'end_line': 680, 'name': 'Mid-Career'},
    '46+': {'start_line': 683, 'end_line': 859, 'name': 'Mature/Senior'}
}

def extract_age_group_data(filename, age_group):
    """提取指定年龄段的数据"""
    config = AGE_GROUPS_CONFIG[age_group]

    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # 提取指定范围的行
    start = config['start_line'] - 1  # 转为0索引
    end = config['end_line']
    group_lines = lines[start:end]

    return ''.join(group_lines)

def parse_questions(text):
    """解析题目数据"""
    questions = []
    # 使用正则提取每个题目块
    question_blocks = re.split(r'},\s*\{', text)

    for block in question_blocks:
        # 确保块完整
        if not block.strip().startswith('{'):
            block = '{' + block
        if not block.strip().endswith('}'):
            block = block + '}'

        # 提取ID
        id_match = re.search(r'id:\s*(\d+)', block)
        if not id_match:
            continue

        # 提取category
        category_match = re.search(r"category:\s*'([^']+)'", block)

        # 提取scenario
        scenario_match = re.search(r"scenario:\s*'([^']+?)'(?=,\s*options:)", block, re.DOTALL)

        # 提取options
        options_match = re.search(r'options:\s*\[(.*?)\]', block, re.DOTALL)

        if id_match and category_match and scenario_match and options_match:
            questions.append({
                'id': int(id_match.group(1)),
                'category': category_match.group(1),
                'scenario': scenario_match.group(1),
                'options_raw': options_match.group(1)
            })

    return questions

# 示例：提取18-22岁年龄段数据
print("正在提取18-22岁年龄段数据...")
data_18_22 = extract_age_group_data('test-data-by-age.js', '18-22')
questions_18_22 = parse_questions(data_18_22)
print(f"提取到 {len(questions_18_22)} 个题目")

for q in questions_18_22:
    print(f"\nQ{q['id']}: {q['category']}")
    print(f"  场景: {q['scenario'][:50]}...")

print("\n✓ 数据提取完成，准备进行翻译")
