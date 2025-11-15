#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
分批完成所有年龄段的翻译
Complete translations for all age groups in batches
"""

import re

# 读取原始数据文件
with open('test-data-by-age.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取年龄段数据的正则表达式
print("正在分析数据结构...")
print("\n已发现的年龄段:")
age_groups = re.findall(r"'(\d+-?\d*\+?)':", content)
for age in set(age_groups):
    print(f"  - {age}")

print(f"\n总共发现 {len(set(age_groups))} 个年龄段")
print("文件总行数:", content.count('\n') + 1)

# 统计每个年龄段的题目数量
print("\n正在统计题目数量...")
questions = re.findall(r'id:\s*(\d+),', content)
print(f"总共发现 {len(questions)} 个题目")

print("\n✅ 数据分析完成")
print("\n下一步：使用Claude分批翻译每个年龄段")
