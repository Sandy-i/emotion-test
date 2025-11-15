/**
 * 多语言配置文件
 * Internationalization (i18n) Configuration
 */

const i18n = {
    // 当前语言
    currentLang: 'zh-CN',

    // 翻译数据
    translations: {
        'zh-CN': {
            // 通用
            common: {
                loading: '加载中',
                confirm: '确认',
                cancel: '取消',
                next: '下一题',
                previous: '上一题',
                submit: '提交',
                retry: '重试',
                close: '关闭',
            },

            // 首页
            landing: {
                title: '你的情绪颗粒度\n有多细？',
                subtitle: '2分钟测试，了解你识别和表达情绪的能力\n发现情绪背后的真实自己',
                stat1: '道精选场景',
                stat2: '种结果类型',
                stat3: '分钟完成',
                infoTitle1: '什么是情绪颗粒度？',
                infoDesc1: '指的是你识别和区分细微情绪差异的能力。颗粒度越高，越能准确表达感受，而不只是"开心"或"不开心"。',
                infoTitle2: '为什么重要？',
                infoDesc2: '研究表明，情绪颗粒度高的人更善于情绪调节，心理韧性更强，人际关系更好，抑郁和焦虑程度更低。',
                infoTitle3: '你将获得什么？',
                infoDesc3: '个性化的情绪颗粒度分析报告，包括雷达图、优势分析和提升建议，帮助你更好地认识自己。',
                exampleTitle: '举个例子',
                exampleLow: '低颗粒度表达',
                exampleLowText: '"今天心情不太好"',
                exampleHigh: '高颗粒度表达',
                exampleHighText: '"我因为项目延期感到焦虑，同时对自己的拖延感到失望和愧疚"',
                ctaButton: '开始测试 →',
                ctaInfo: '完全免费 · 无需登录 · 立即查看结果',
            },

            // 年龄选择页
            ageSelect: {
                title: '先了解一下你',
                subtitle: '为你匹配最贴合的情绪场景\n让测试结果更精准',
                age1: '18-22岁',
                age1desc: '大学生 / 应届生 / 初入社会',
                age2: '23-28岁',
                age2desc: '职场新人 / 探索期 / 自我建立',
                age3: '29-35岁',
                age3desc: '职场发展期 / 成家立业 / 人生选择',
                age4: '36-45岁',
                age4desc: '中坚力量 / 上有老下有小 / 多重角色',
                age5: '46岁以上',
                age5desc: '人生阅历丰富 / 追求平衡与智慧',
                privacyNote: '你的选择仅用于个性化测试，不会被分享',
            },

            // 问题页
            question: {
                progressText: '答题进度',
                category: '场景',
                hint: '选择',
                hintBold: '最符合',
                hintSuffix: '你真实感受的选项',
                prevButton: '上一题',
                nextButton: '下一题',
                submitButton: '查看结果',
            },

            // 结果页
            result: {
                loading: '正在加载结果',
                scoreLabel: '总分',
                beatLabel: '击败了',
                beatSuffix: '的人',
                radarTitle: '你的情绪模式',
                traitsTitle: '你的特质',
                adviceTitle: '给你的建议',
                ctaTitle: '在「星火奇缘」小程序中',
                feature1: '记录你的情绪模式',
                feature2: '发现更多关于自己的洞察',
                feature3: '用65个情绪词精准表达',
                feature4: '查看情绪趋势和分析',
                ctaHint: '长按识别小程序码',
                saveButton: '保存图片',
                retestButton: '我也要测',
                notFoundTitle: '未找到测试结果',
                notFoundDesc: '请先完成测试',
                startButton: '开始测试 →',
            },
        },

        'en-US': {
            // Common
            common: {
                loading: 'Loading',
                confirm: 'Confirm',
                cancel: 'Cancel',
                next: 'Next',
                previous: 'Previous',
                submit: 'Submit',
                retry: 'Retry',
                close: 'Close',
            },

            // Landing Page
            landing: {
                title: 'How Fine is Your\nEmotional Granularity?',
                subtitle: '2-minute test to understand your ability to identify and express emotions\nDiscover your authentic self behind emotions',
                stat1: 'Curated Scenarios',
                stat2: 'Result Types',
                stat3: 'Minutes',
                infoTitle1: 'What is Emotional Granularity?',
                infoDesc1: 'It refers to your ability to identify and distinguish subtle emotional differences. Higher granularity means more accurate expression of feelings, beyond just "happy" or "unhappy".',
                infoTitle2: 'Why Does It Matter?',
                infoDesc2: 'Research shows that people with high emotional granularity are better at emotion regulation, have stronger psychological resilience, better relationships, and lower levels of depression and anxiety.',
                infoTitle3: 'What Will You Get?',
                infoDesc3: 'A personalized emotional granularity analysis report, including radar charts, strength analysis, and improvement suggestions to help you better understand yourself.',
                exampleTitle: 'For Example',
                exampleLow: 'Low Granularity',
                exampleLowText: '"I\'m not feeling great today"',
                exampleHigh: 'High Granularity',
                exampleHighText: '"I feel anxious about the project delay, and disappointed and guilty about my procrastination"',
                ctaButton: 'Start Test →',
                ctaInfo: 'Completely Free · No Login Required · Instant Results',
            },

            // Age Selection
            ageSelect: {
                title: 'Let\'s Get to Know You',
                subtitle: 'Match you with the most relevant emotional scenarios\nFor more accurate results',
                age1: '18-22 years',
                age1desc: 'College student / Fresh graduate / Entering society',
                age2: '23-28 years',
                age2desc: 'Career starter / Exploration / Self-establishment',
                age3: '29-35 years',
                age3desc: 'Career development / Building life / Life choices',
                age4: '36-45 years',
                age4desc: 'Core strength / Sandwich generation / Multiple roles',
                age5: '46+ years',
                age5desc: 'Rich life experience / Seeking balance & wisdom',
                privacyNote: 'Your selection is only used for personalized testing and will not be shared',
            },

            // Question Page
            question: {
                progressText: 'Progress',
                category: 'Scenario',
                hint: 'Choose the option that',
                hintBold: 'best matches',
                hintSuffix: 'your true feelings',
                prevButton: 'Previous',
                nextButton: 'Next',
                submitButton: 'View Results',
            },

            // Result Page
            result: {
                loading: 'Loading results',
                scoreLabel: 'Total Score',
                beatLabel: 'Beat',
                beatSuffix: 'of people',
                radarTitle: 'Your Emotional Pattern',
                traitsTitle: 'Your Traits',
                adviceTitle: 'Advice for You',
                ctaTitle: 'In "Xinghuo Qiyuan" Mini Program',
                feature1: 'Track your emotional patterns',
                feature2: 'Discover more insights about yourself',
                feature3: 'Express precisely with 65 emotion words',
                feature4: 'View emotion trends and analysis',
                ctaHint: 'Long press to identify QR code',
                saveButton: 'Save Image',
                retestButton: 'Take Test',
                notFoundTitle: 'No Test Results Found',
                notFoundDesc: 'Please complete the test first',
                startButton: 'Start Test →',
            },
        },
    },

    // 获取翻译文本
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // 如果找不到，返回key本身
            }
        }

        return value || key;
    },

    // 设置语言
    setLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('emotion_test_lang', lang);
            return true;
        }
        return false;
    },

    // 获取当前语言
    getLang() {
        return this.currentLang;
    },

    // 初始化语言（从localStorage读取）
    init() {
        const savedLang = localStorage.getItem('emotion_test_lang');
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else {
            // 自动检测浏览器语言
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang.startsWith('en')) {
                this.currentLang = 'en-US';
            } else {
                this.currentLang = 'zh-CN';
            }
        }
    },

    // 获取所有可用语言
    getAvailableLanguages() {
        return [
            { code: 'zh-CN', name: '中文', nativeName: '简体中文' },
            { code: 'en-US', name: 'English', nativeName: 'English' }
        ];
    }
};

// 初始化语言设置
i18n.init();
