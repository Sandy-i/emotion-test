#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix language switching issue in question.html
"""

import os

file_path = r'c:/tmp/emotion-share/question.html'

# Read file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: Change const to let for currentQuestions
old_str1 = "        const currentQuestions = getLocalizedQuestions(ageGroup, i18n.getLang());"
new_str1 = "        let currentQuestions = getLocalizedQuestions(ageGroup, i18n.getLang());"

if old_str1 in content:
    content = content.replace(old_str1, new_str1)
    print("Fix 1: Changed const to let for currentQuestions")
else:
    print("Fix 1: Pattern not found or already fixed")

# Fix 2: Update switchLanguage function
old_str2 = """        // 语言切换和更新
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
        }"""

new_str2 = """        // 语言切换和更新
        function switchLanguage(lang) {
            i18n.setLang(lang);

            // 重新获取本地化的问题数据
            const ageGroup = localStorage.getItem('emotion_test_age_group') || '29-35';
            currentQuestions = getLocalizedQuestions(ageGroup, lang);

            updateLanguage();

            // 重新渲染当前问题（包括选项）
            renderQuestion();

            // 更新按钮状态
            document.querySelectorAll('.lang-btn').forEach(btn => {
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }"""

if old_str2 in content:
    content = content.replace(old_str2, new_str2)
    print("Fix 2: Updated switchLanguage function")
else:
    print("Fix 2: Pattern not found or already fixed")

# Write file
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! File updated successfully.")
