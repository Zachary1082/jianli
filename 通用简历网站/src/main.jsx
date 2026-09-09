import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, Phone, MapPin, Menu, X, Play, Copy, Check, Bike, Camera } from 'lucide-react';
import Grainient from './Grainient/Grainient';
import BorderGlow from './BorderGlow';
import ProfileCard from './ProfileCard/ProfileCard';
import './styles.css';

const ASSET_BASE = import.meta.env.BASE_URL === '/jianli/resume/' ? '/jianli/' : import.meta.env.BASE_URL;
const A = `${ASSET_BASE}assets/`;
const M = `${A}media/`;
const P = `${ASSET_BASE}prototypes/`;

const cases = {
  skillshare: {
    kicker: 'BUSINESS · COMMUNITY · INNOVATION',
    title: 'SkillShare / 技能交换社区',
    intro: '面向在校大学生与职场新人打造 C2C 技能互助平台，以“技能换技能 + 价值补差”连接供需双方。平台包含智能匹配、技能估值、沟通与钱包托管，解决技能价值不对等与陌生人交易信任问题。',
    role: '商业模式 / 用户场景 / 产品表达',
    result: 'BUS 课程满分 · 入围深科创（HSITP）优秀创业项目路演',
    video: `${M}skillshare-prototype.mp4`,
    images: [`${M}skillshare-phone.png`, `${M}skillshare-home.jpg`, `${M}skillshare-discover.jpg`],
    en: { title: 'SkillShare / Skill Exchange Community', intro: 'A C2C mutual-learning platform for university students and early-career professionals. Skill exchange, value top-ups, smart matching, skill pricing, messaging and escrow address unequal value and trust between strangers.', role: 'Business Model / User Scenarios / Product Storytelling', result: 'Full marks in BUS · Selected for the HSITP outstanding startup pitch' },
  },
  icare: {
    kicker: 'PRODUCT · STRATEGY · COMPETITION',
    title: 'iCare / 财富与人生规划平台',
    intro: '基于 CTF Life 生态资源，为香港内地留学生打造兴趣社交、财务赋权与健康管理一站式平台。核心功能包括兴趣活动、奶茶微储蓄、步数积分与真人规划师，将社交流量转化为可持续金融服务。',
    role: '产品策略 / 用户研究 / 商业路演',
    result: 'CTF Life 香港商赛第四名 · 150+ 支参赛队伍',
    video: `${M}icare-app-demo.mp4`,
    evidenceVideo: `${M}icare-competition.mp4`,
    images: [`${M}icare-cover.jpg`, `${M}icare-award.jpg`, `${M}icare-stage.jpg`, `${M}icare-team.jpg`],
    en: { title: 'iCare / Life & Financial Planning Platform', intro: 'Built around the CTF Life ecosystem for mainland students in Hong Kong, iCare combines interest-based social discovery, financial empowerment, health management and access to human advisers in one experience.', role: 'Product Strategy / User Research / Business Pitch', result: '4th place in the CTF Life Hong Kong Business Competition · 150+ teams' },
  },
  gaokao: {
    kicker: 'AI · USER INSIGHT · PRODUCT',
    title: '高考择学通 / AI 志愿填报',
    intro: '面向高考考生与家长的 AI 志愿导航平台，集职业测评、趋势分析、智能志愿填报与自然语言问答于一体，降低信息不对称和志愿决策焦虑。',
    role: '项目负责人 / 商业分析 / 产品原型',
    result: '全国大学生电子商务“三创赛”省级银奖',
    video: `${M}gaokao-demo.mp4`,
    images: [`${M}gaokao-phone.png`, `${M}gaokao-features.jpg`, `${M}gaokao-flows.jpg`, `${M}gaokao-pitch.jpg`, `${M}gaokao-scenes.jpg`],
    en: { title: 'Gaokao PathFinder / AI College Application Guide', intro: 'An AI decision platform for students and parents, integrating career assessment, trend analysis, intelligent application planning and natural-language Q&A to reduce information gaps and decision anxiety.', role: 'Project Lead / Business Analysis / Product Prototype', result: 'Provincial Silver Award · National E-commerce Innovation Competition' },
  },
};

const workExperience = [
  {
    company: '珠海金山办公软件有限公司',
    role: 'AI 产品经理实习生',
    period: '2024.11—2025.04',
    summary: '负责西山居 GMA 游戏告警平台“AI 健康度智能分析”模块从 0 到 1。',
    metrics: ['准确率与覆盖率 >95%', '10+ 份 PRD', '10+ 次需求评审'],
    detail: '设计基于大语言模型的 Agent 分析链路，构建“异常诊断—归因—日报生成”自动化工作流；建立 Prompt、效果评估与全局埋点体系，统筹前后端、UI 与测试团队完成上线。',
    en: { company: 'Kingsoft · Seasun Games', role: 'AI Product Manager Intern', summary: 'Owned the 0-to-1 AI health analysis module for the GMA game alert platform.', metrics: ['>95% accuracy & coverage', '10+ PRDs', '10+ requirement reviews'], detail: 'Designed an LLM-based agent workflow covering anomaly diagnosis, root-cause analysis and automated daily reports. Built prompt, evaluation and analytics frameworks, and coordinated engineering, UI and QA through launch.' },
  },
  {
    company: '新东方教育科技集团有限公司',
    role: '跨境市场营销实习生',
    period: '2023.09—2024.02',
    summary: '负责海外教育拉新、渠道分发及跨区域增长复盘。',
    metrics: ['Leads 增长 40%', '业务分销率 +25%', '10+ 场活动'],
    detail: '通过实地调研优化区域转化漏斗，构建中英双语 SEO 关键词与多语言内容矩阵；搭建市场数据看板和周度复盘机制，协同跨时区团队持续调整策略。',
    en: { company: 'New Oriental Education & Technology Group', role: 'Cross-border Marketing Intern', summary: 'Owned overseas education acquisition, channel distribution and regional growth reviews.', metrics: ['Leads +40%', 'Distribution +25%', '10+ campaigns'], detail: 'Used field research to optimise regional conversion funnels, built bilingual SEO and multilingual content matrices, and established dashboards and weekly reviews with cross-time-zone teams.' },
  },
  {
    company: '广州趣丸网络科技有限公司 · TT 语音',
    role: '产品经理实习生',
    period: '2023.06—2023.09',
    summary: '参与 TT 语音核心业务闭环、运营后台与游戏化功能迭代。',
    metrics: ['玩法使用率 +24%', '后台效率 +400%', '触达 10W+ 核心用户'],
    detail: '策划“卡包随机抽取”等变现玩法；拆解 5 款竞品并输出 10+ 份 PRD/MRD；建立服务号分层触达体系，优化认证、封面排序与厂牌标识配置。',
    en: { company: 'Quwan Technology · TT Voice', role: 'Product Manager Intern', summary: 'Contributed to TT Voice monetisation loops, operations tooling and gamified feature iterations.', metrics: ['Feature usage +24%', 'Ops efficiency +400%', '100K+ users reached'], detail: 'Designed monetisation mechanics such as random card packs, benchmarked five products and delivered 10+ PRDs/MRDs. Built segmented service-account engagement and improved verification, cover ranking and label configuration.' },
  },
];

const workBadges = [
  { company: '金山软件', short: 'KINGSOFT', role: 'AI 产品经理实习生', period: '2024—2025', tone: 'kingsoft', en: { company: 'Kingsoft', role: 'AI Product Manager Intern' } },
  { company: '新东方', short: 'NEW ORIENTAL', role: '跨境市场营销实习生', period: '2023—2024', tone: 'xdf', en: { company: 'New Oriental', role: 'Cross-border Marketing Intern' } },
  { company: '趣丸科技', short: 'QUWAN · TT', role: '产品经理实习生', period: '2023', tone: 'quwan', en: { company: 'Quwan · TT Voice', role: 'Product Manager Intern' } },
];

const roleFits = [
  {
    id: 'business',
    label: '商业判断',
    summary: '从用户与数据中判断机会，把产品方案连接到可验证的商业结果。',
    proof: [['3 项', '商业项目'], ['第 4 名', '香港商赛'], ['BUS 满分', 'HSITP 路演']],
    en: { label: 'Business Judgement', summary: 'Identify opportunities through users and data, then connect product decisions to measurable business outcomes.', proof: [['3', 'Business projects'], ['4th', 'Hong Kong competition'], ['Full marks', 'BUS · HSITP pitch']] },
  },
  {
    id: 'execution',
    label: '项目执行',
    summary: '把模糊问题拆成路径、责任人与节点，推动方案从 0 到 1 完成交付。',
    proof: [['10+', 'PRD 输出'], ['10+', '需求评审'], ['1 个 AI 模块', '从 0 到 1 上线']],
    en: { label: 'Execution', summary: 'Turn ambiguous problems into clear paths, owners and milestones, moving ideas from zero to delivered outcomes.', proof: [['10+', 'PRDs delivered'], ['10+', 'Requirement reviews'], ['1 AI module', 'Launched 0—1']] },
  },
  {
    id: 'collaboration',
    label: '团队协同',
    summary: '在产品、技术、市场与跨文化团队之间对齐目标，让协作持续向结果收敛。',
    proof: [['3 段', '跨职能实习'], ['3 次', '项目负责人'], ['中英双语', '跨境协作']],
    en: { label: 'Collaboration', summary: 'Align product, engineering, marketing and cross-cultural teams around shared goals and measurable delivery.', proof: [['3', 'Cross-functional internships'], ['3×', 'Project lead'], ['Bilingual', 'Cross-border teamwork']] },
  },
];

const productLabs = [
  {
    id: 'icare', number: '01', tab: 'iCare', title: '港漂生活与金融生态平台',
    intro: '把兴趣社交、财富赋权、健康管理与真人规划服务连接成一站式港漂生活入口。',
    result: '香港商赛第四名 · 150+ 队伍', role: '产品策略 · 用户研究 · 商业路演',
    prototype: 'icare.html', cover: `${M}icare-cover.jpg`, theme: 'crimson', features: ['兴趣活动与找搭子', '微储蓄与步数积分', '真人财富规划服务'],
    en: { title: 'Life & Financial Ecosystem for Hong Kong Students', intro: 'Combines interest-based social discovery, financial empowerment, health management and human advisory services into one student-life gateway.', result: '4th in Hong Kong business competition · 150+ teams', role: 'Product Strategy · User Research · Business Pitch', features: ['Discover activities and companions', 'Micro-savings and step rewards', 'Human financial planning'] },
  },
  {
    id: 'skillshare', number: '02', tab: 'SkillShare', title: '技能交换与价值补差社区',
    intro: '以“技能换技能 + 价值补差”连接供需双方，用智能匹配与托管机制解决陌生人交易信任问题。',
    result: 'BUS 满分 · HSITP 优秀项目路演', role: '商业模式 · 用户场景 · 产品表达',
    prototype: 'skillshare.html', cover: `${M}skillshare-phone.png`, theme: 'violet', features: ['技能供需智能匹配', '技能估值与价值补差', '沟通与钱包托管'],
    en: { title: 'Skill Exchange & Value Top-up Community', intro: 'Matches skill supply and demand through exchange plus value top-ups, with smart matching and escrow to build trust between strangers.', result: 'Full marks in BUS · HSITP outstanding project pitch', role: 'Business Model · User Scenarios · Product Storytelling', features: ['Smart skill matching', 'Skill pricing and value top-ups', 'Messaging and wallet escrow'] },
  },
  {
    id: 'gaokao', number: '03', tab: '高考择学通', title: 'AI 志愿决策与升学导航',
    intro: '从职业测评出发，把趋势分析、院校推荐、智能填报和 AI 问答整合为完整升学决策路径。',
    result: '全国大学生三创赛省级银奖', role: '项目负责人 · 商业分析 · 产品原型',
    prototype: 'gaokao.html', cover: `${M}gaokao-phone.png`, theme: 'orange', features: ['职业与能力测评', 'AI 趋势及院校推荐', '智能填报与规划师服务'],
    en: { tab: 'Gaokao PathFinder', title: 'AI College Application Decision Platform', intro: 'Links career assessment, trend analysis, university recommendations, intelligent application planning and AI Q&A into one decision journey.', result: 'Provincial Silver Award · National E-commerce Innovation Competition', role: 'Project Lead · Business Analysis · Product Prototype', features: ['Career and ability assessment', 'AI trends and university matching', 'Application planning and adviser service'] },
  },
];

const ui = {
  zh: {
    nav: [['经历', 'experience'], ['项目', 'projects'], ['优势', 'strengths']], contact: '联系我', language: 'EN', brand: '27届应届毕业生',
    heroEyebrow: 'ZHANG JUNHAO / PERSONAL RESUME', heroLine1: '把想法，', heroLine2: '推到结果。', heroDesc1: '香港浸会大学商业管理硕士', heroDesc2: '产品 · 增长 · 跨境协作 · 项目推进', quick: '快速了解我', candidate: '2027届应届毕业生', status: '深圳 / 香港 · 已获 IANG',
    experienceLabel: '01 / 个人经历', about: '关于我 / ABOUT', aboutTitle1: '跨文化、跨职能，', aboutTitle2: '也跨过从 0 到 1。', aboutText: '我是张峻豪，27届应届毕业生。香港浸会大学商业管理硕士，拥有 AI 产品、跨境营销与用户运营的复合实践，习惯在不确定中拆解问题、组织协作，并把想法推进到可验证的结果。',
    availability: ['27届应届毕业生', '意向城市：深圳 / 香港', '已获得香港 IANG 签证', '已完成课程，可快速到岗'], workKicker: 'WORK EXPERIENCE / 实习经历', workTitle1: '用结果说明', workTitle2: '我做过什么。', workHint: '悬浮工牌即可切换对应经历；点击右侧经历可继续查看职责、方法和完整交付。', badgeAlt: '张峻豪证件照',
    stats: [['3', '产品与市场实习'], ['3', '完整创业项目'], ['3', '核心竞赛成果'], ['6.5', 'IELTS / 英语工作能力']],
    careerKicker: 'CAREER MAP / 01—05', careerTitle1: '每一次经历，', careerTitle2: '都在靠近“经营全局”。', career: [['2025—26', '商业管理硕士 · 香港浸会大学', 'GPA 3.54 / 4.00 · 前 10% · 全英授课'], ['2024—25', '金山西山居 · AI 产品实习', '推动 AI 产品从 0 到 1，完成 10+ 次需求访谈与 10+ 轮测试。'], ['2023—24', '新东方 · 跨境市场营销实习', '执行 10+ 场跨境活动，带来 Leads 增长 40%。'], ['2023', '趣丸科技 · TT 语音产品实习', '推动活跃提升 24%，累计触达 10W+ 用户。'], ['2022—26', '项目 / 竞赛 / 领导力', '3 个从 0 到 1 项目 · 省级竞赛奖项 · 多次团队路演。']],
    projectLabel: '02 / INTERACTIVE PRODUCT LAB', projectTitle1: '不只看界面，', projectTitle2: '直接体验产品。', projectIntro: '选择项目并点击中间的手机，即可像真实 App 一样操作；按 ESC 随时退出交互。', choose: '选择一个项目，进入真实原型', live: '正在展示', switch: '点击切换', result: '项目结果', myRole: '我的职责', caseButton: '查看完整案例', enter: '点击进入产品', enterHint: '可直接点击、滑动与填写', exit: '退出交互', path: '建议体验路径', tip: '操作提示', tipText: '进入交互后，页面滚动将优先留在手机内；退出后可继续浏览简历。',
    strengthsLabel: '03 / 个人优势', strengthsKicker: 'WHY ME / 复合型能力', strengthsTitle1: '既能看全局，', strengthsTitle2: '也能把事情做完。', strengthsIntro: '我的优势不是单一技能，而是把产品、数据、商业判断和团队协作连接成完整的推进链路。',
    contactLead: '期待和下一支团队，', contactTitle: '把值得做的事做成。', contactNote: '27届应届毕业生 · 已完成课程 · 可快速到岗', scan: '扫码添加微信', scanHint: '请备注“招聘 / 公司名称”', footerRole: '张峻豪 / 个人履历', close: '关闭', responsibility: '我的职责', projectResult: '项目结果', emailCopied: '邮箱已复制', phoneCopied: '电话号码已复制', copyEmail: '复制邮箱', copyPhone: '复制电话号码'
  },
  en: {
    nav: [['Experience', 'experience'], ['Projects', 'projects'], ['Strengths', 'strengths']], contact: 'Contact', language: '中', brand: 'Class of 2027',
    heroEyebrow: 'ZHANG JUNHAO / PERSONAL RESUME', heroLine1: 'Ideas into', heroLine2: 'outcomes.', heroDesc1: 'MSc in Business Management · Hong Kong Baptist University', heroDesc2: 'Product · Growth · Cross-border Collaboration · Execution', quick: 'Quick Profile', candidate: 'Class of 2027 Graduate', status: 'Shenzhen / Hong Kong · IANG Granted',
    experienceLabel: '01 / EXPERIENCE', about: 'ABOUT ME', aboutTitle1: 'Cross-cultural. Cross-functional.', aboutTitle2: 'From zero to one.', aboutText: 'I am Junhao Zhang, a Class of 2027 graduate with an MSc in Business Management from Hong Kong Baptist University. My experience spans AI products, cross-border marketing and user operations. I thrive in ambiguity—breaking down problems, aligning teams and moving ideas towards measurable outcomes.',
    availability: ['Class of 2027', 'Preferred: Shenzhen / Hong Kong', 'Hong Kong IANG visa granted', 'Coursework completed · Available soon'], workKicker: 'WORK EXPERIENCE', workTitle1: 'What I did,', workTitle2: 'proved by outcomes.', workHint: 'Hover over a badge to switch roles. Select an experience to review ownership, approach and delivery.', badgeAlt: 'Junhao Zhang portrait',
    stats: [['3', 'Product & marketing internships'], ['3', 'End-to-end venture projects'], ['3', 'Major competition results'], ['6.5', 'IELTS · Working English']],
    careerKicker: 'CAREER MAP / 01—05', careerTitle1: 'Every experience', careerTitle2: 'builds a broader business view.', career: [['2025—26', 'MSc Business Management · HKBU', 'GPA 3.54 / 4.00 · Top 10% · English-taught'], ['2024—25', 'Kingsoft Seasun · AI Product', 'Took an AI module from zero to launch through 10+ interviews and 10+ test rounds.'], ['2023—24', 'New Oriental · Cross-border Marketing', 'Ran 10+ campaigns and delivered 40% lead growth.'], ['2023', 'Quwan · TT Voice Product', 'Lifted feature usage by 24% and reached 100K+ core users.'], ['2022—26', 'Projects · Competitions · Leadership', 'Three 0-to-1 products · Provincial award · Multiple team pitches.']],
    projectLabel: '02 / INTERACTIVE PRODUCT LAB', projectTitle1: 'Beyond screenshots.', projectTitle2: 'Try the products.', projectIntro: 'Choose a project and select the phone to use it like a real app. Press ESC at any time to exit.', choose: 'Choose a project and enter the live prototype', live: 'Now showing', switch: 'Switch project', result: 'PROJECT RESULT', myRole: 'My role', caseButton: 'View full case', enter: 'Enter product', enterHint: 'Click, scroll and complete flows', exit: 'Exit', path: 'Suggested journey', tip: 'How to interact', tipText: 'While interacting, scrolling stays inside the phone. Exit to continue browsing the résumé.',
    strengthsLabel: '03 / STRENGTHS', strengthsKicker: 'WHY ME / CONNECTED CAPABILITIES', strengthsTitle1: 'See the whole picture.', strengthsTitle2: 'Finish what matters.', strengthsIntro: 'My advantage is not one isolated skill, but the ability to connect product thinking, data, business judgement and teamwork into one delivery chain.',
    contactLead: 'Ready for the next team', contactTitle: 'and the next meaningful outcome.', contactNote: 'Class of 2027 · Coursework completed · Available soon', scan: 'Scan to add me on WeChat', scanHint: 'Please mention “Recruitment / Company”', footerRole: 'Junhao Zhang / Personal Resume', close: 'Close', responsibility: 'My role', projectResult: 'Project result', emailCopied: 'Email copied', phoneCopied: 'Phone number copied', copyEmail: 'Copy email', copyPhone: 'Copy phone number'
  }
};

const localize = (item, language) => language === 'en' && item?.en ? { ...item, ...item.en } : item;

const sectionContent = {
  zh: {
    education: [
      { location: '香港 · 已毕业 / 11 月领取毕业证', school: '香港浸会大学', badge: '纯英授课', degree: '商业管理硕士 · GPA 3.54 / 4.00 · 前 10%', detail: '创业与创新企业发展、数字化转型、商业数据分析、高级管理市场营销；全英授课。' },
      { location: '澳门 · 2021—2025', school: '澳门科技大学', badge: '纯英授课', degree: '工商管理学士 · 专业前 20%', detail: '管理、市场营销、财务管理、组织行为与战略管理；篮球社、音乐协会宣传部负责人。' }
    ],
    tools: ['IELTS 6.5', '阿里云 SQL', 'Excel / 数据看板', 'Axure / 墨刀 / Figma', 'Coze / Dify / DeepSeek', 'PRD / MRD'],
    honorsTitle: '用赛事检验方案', honors: ['CTF Life 香港商赛第四名 / 150+ 队伍', '全国大学生电子商务“三创赛”省级银奖', 'SkillShare BUS 课程满分 / HSITP 优秀项目路演'],
    leadershipTitle: '把团队带到结果', leadership: ['3 次担任项目负责人，统筹产品、商业与路演交付', '澳门科技大学篮球社部长，三届校际赛累计吸引 300+ 人', '音乐协会宣传部部长，参与千人级活动传播与组织'],
    interestKicker: 'BEYOND WORK / 工作之外', interestTitle1: '保持热爱，', interestTitle2: '也保持感知。', interestIntro: '兴趣让我在工作之外持续练习协作、耐力与观察。', interests: [['篮球', '团队协作 · 竞技意识'], ['骑行', '耐力积累 · 目标感'], ['摄影', '观察细节 · 审美表达']],
    strengths: [
      ['01 / PRODUCT', '0—1 产品落地', '3 段产品与市场实习', '从需求访谈、竞品研究和 PRD，到跨团队交付、上线验证与迭代复盘。', '10+ PRD · 10+ 需求评审 · 3 个完整创业项目'],
      ['02 / DATA', '数据驱动增长', '>95%', '建立指标、埋点和效果评估体系，用数据定位问题并支持业务决策。', 'Leads +40% · 玩法使用率 +24%'],
      ['03 / BUSINESS', '商业化判断', 'LTV / CAC >10', '熟悉 PEST、SWOT、TAM-SAM-SOM 与财务预测，把用户价值落到商业闭环。', '香港商赛第四名 · BUS 课程满分'],
      ['04 / LEADERSHIP', '跨文化协同', '中英双语', '能够在跨专业、跨时区和中英文语境中对齐目标，推动团队高质量交付。', '3 次项目负责人 · 学生组织部长']
    ]
  },
  en: {
    education: [
      { location: 'Hong Kong · Graduated / Certificate in November', school: 'Hong Kong Baptist University', badge: 'English-taught', degree: 'MSc Business Management · GPA 3.54 / 4.00 · Top 10%', detail: 'Entrepreneurship, digital transformation, business analytics and advanced marketing management.' },
      { location: 'Macao · 2021—2025', school: 'Macau University of Science and Technology', badge: 'English-taught', degree: 'BBA · Top 20% of major', detail: 'Management, marketing, finance, organisational behaviour and strategy; leadership roles in basketball and music societies.' }
    ],
    tools: ['IELTS 6.5', 'Alibaba Cloud SQL', 'Excel / Dashboards', 'Axure / Mockitt / Figma', 'Coze / Dify / DeepSeek', 'PRD / MRD'],
    honorsTitle: 'Testing ideas through competition', honors: ['4th place · CTF Life Hong Kong Business Competition / 150+ teams', 'Provincial Silver · National E-commerce Innovation Competition', 'Full marks in BUS · HSITP outstanding project pitch'],
    leadershipTitle: 'Leading teams to outcomes', leadership: ['Led three projects across product, business and pitch delivery', 'Basketball Society lead; attracted 300+ participants across three tournaments', 'Music Association publicity lead; supported events with 1,000+ attendees'],
    interestKicker: 'BEYOND WORK', interestTitle1: 'Stay curious.', interestTitle2: 'Stay perceptive.', interestIntro: 'Outside work, my interests keep me practising collaboration, endurance and observation.', interests: [['Basketball', 'Teamwork · Competitive mindset'], ['Cycling', 'Endurance · Goal orientation'], ['Photography', 'Observation · Visual storytelling']],
    strengths: [
      ['01 / PRODUCT', '0-to-1 Product Delivery', '3 product & marketing internships', 'From interviews, competitive research and PRDs to cross-team delivery, launch validation and iteration.', '10+ PRDs · 10+ reviews · 3 end-to-end ventures'],
      ['02 / DATA', 'Data-driven Growth', '>95%', 'Build metrics, analytics and evaluation systems to locate problems and support decisions.', 'Leads +40% · Feature usage +24%'],
      ['03 / BUSINESS', 'Commercial Judgement', 'LTV / CAC >10', 'Use market sizing, strategic frameworks and financial modelling to connect user value with viable business models.', '4th in HK competition · Full marks in BUS'],
      ['04 / LEADERSHIP', 'Cross-cultural Collaboration', 'Bilingual', 'Align goals across disciplines, time zones and Chinese-English working environments.', '3× project lead · Student organisation leader']
    ]
  }
};

const BasketballIcon = ({ size = 28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M5.7 5.7c4.1 1.5 7.1 4.5 8.6 8.6M9.7 3.3c1.4 4.1 4.6 7.3 8.9 8.6M3.2 13.7c4.4-1.1 8.1-4.7 9.2-9.2M11.5 20.8c1.1-4.4 4.7-8.1 9.2-9.2" /></svg>;

function App() {
  const [language, setLanguage] = React.useState(() => localStorage.getItem('resume-language') === 'en' ? 'en' : 'zh');
  const [open, setOpen] = React.useState(false);
  const [activeCase, setActiveCase] = React.useState(null);
  const [navScrolled, setNavScrolled] = React.useState(false);
  const [activeWork, setActiveWork] = React.useState(0);
  const [copiedContact, setCopiedContact] = React.useState('');
  const [activeFit, setActiveFit] = React.useState('business');
  const [activeLab, setActiveLab] = React.useState('icare');
  const [labStarted, setLabStarted] = React.useState(false);
  const copy = ui[language];
  const sections = sectionContent[language];
  const localizedCases = React.useMemo(() => Object.fromEntries(Object.entries(cases).map(([key, value]) => [key, localize(value, language)])), [language]);
  const localizedWork = React.useMemo(() => workExperience.map(item => localize(item, language)), [language]);
  const localizedBadges = React.useMemo(() => workBadges.map(item => localize(item, language)), [language]);
  const localizedFits = React.useMemo(() => roleFits.map(item => localize(item, language)), [language]);
  const localizedLabs = React.useMemo(() => productLabs.map(item => localize(item, language)), [language]);
  const selectedFit = localizedFits.find(item => item.id === activeFit) || localizedFits[0];
  const selectedLab = localizedLabs.find(item => item.id === activeLab) || localizedLabs[0];

  React.useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en' ? 'Junhao Zhang / Resume' : '张峻豪 / 个人履历';
    localStorage.setItem('resume-language', language);
  }, [language]);

  React.useEffect(() => {
    if (!labStarted) return undefined;
    const exitLab = event => event.key === 'Escape' && setLabStarted(false);
    window.addEventListener('keydown', exitLab);
    return () => window.removeEventListener('keydown', exitLab);
  }, [labStarted]);

  const copyContact = async (type, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(type);
      window.setTimeout(() => setCopiedContact(current => current === type ? '' : current), 1800);
    } catch {
      const input = document.createElement('textarea');
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      setCopiedContact(type);
      window.setTimeout(() => setCopiedContact(current => current === type ? '' : current), 1800);
    }
  };

  React.useEffect(() => {
    document.body.style.overflow = activeCase ? 'hidden' : '';
    const close = (event) => event.key === 'Escape' && setActiveCase(null);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [activeCase]);

  React.useEffect(() => {
    let wasScrolled = window.scrollY > window.innerHeight * 0.78;
    setNavScrolled(wasScrolled);
    const updateNav = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.78;
      if (isScrolled === wasScrolled) return;
      wasScrolled = isScrolled;
      setNavScrolled(isScrolled);
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    return () => window.removeEventListener('scroll', updateNav);
  }, []);

  React.useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const animations = [];
    const play = (element, frames, options) => {
      if (!element) return null;
      const animation = element.animate(frames, { fill: 'both', ...options });
      animations.push(animation);
      return animation;
    };
    const replayAnimations = new WeakMap();
    const replay = (element, frames, options) => {
      if (!element) return null;
      replayAnimations.get(element)?.cancel();
      const animation = play(element, frames, options);
      replayAnimations.set(element, animation);
      return animation;
    };
    const ease = 'cubic-bezier(.22,1,.36,1)';
    const hero = document.querySelector('.hero-v2');
    const titleOffset = window.innerWidth > 1000 ? 'clamp(36px, 4vw, 72px)' : '0px';
    play(document.querySelector('.nav'), [{ opacity: 0, translate: '0 -42px' }, { opacity: 1, translate: '0 0' }], { duration: 1050, delay: 120, easing: ease });
    play(hero?.querySelector('.hero-motion-shell'), [{ opacity: 0, transform: 'translateX(90px) scale(1.02)' }, { opacity: .22, transform: 'translateX(0) scale(1)' }], { duration: 1900, delay: 120, easing: ease });
    play(hero?.querySelector('.hero-depth'), [{ opacity: 0, transform: 'translateY(-28px) scale(.94)' }, { opacity: 1, transform: 'translateY(0) scale(1)' }], { duration: 1750, delay: 260, easing: ease });
    play(hero?.querySelector('.eyebrow'), [{ opacity: 0, transform: 'translateY(28px)', letterSpacing: '.32em' }, { opacity: 1, transform: 'translateY(0)', letterSpacing: '.13em' }], { duration: 1100, delay: 360, easing: ease });
    play(hero?.querySelector('h1 span'), [{ opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(120px) scaleY(.62)' }, { opacity: 1, clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0) scaleY(1)' }], { duration: 1550, delay: 420, easing: ease });
    play(hero?.querySelector('h1 em'), [{ opacity: 0, clipPath: 'inset(100% 0 0 0)', transform: `translateX(${titleOffset}) translateY(130px) scaleY(.58)` }, { opacity: 1, clipPath: 'inset(0% 0 0 0)', transform: `translateX(${titleOffset}) translateY(0) scaleY(1)` }], { duration: 1650, delay: 610, easing: ease });
    play(hero?.querySelector('.hero-desc'), [{ opacity: 0, transform: 'translateY(42px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 1150, delay: 980, easing: ease });
    play(hero?.querySelector('.hero-actions'), [{ opacity: 0, transform: 'translateY(36px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 1050, delay: 1120, easing: ease });
    play(hero?.querySelector('.candidate-card'), [{ opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(70px) scale(.94)' }, { opacity: 1, clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0) scale(1)' }], { duration: 1500, delay: 820, easing: ease });
    play(hero?.querySelector('.hero-meta'), [{ opacity: 0, transform: 'translateX(45px)' }, { opacity: 1, transform: 'translateX(0)' }], { duration: 1150, delay: 1220, easing: ease });

    const revealMap = new Map();
    [...document.querySelectorAll('.section')].forEach((section) => {
      const chapter = section.querySelector('.motion-chapter');
      const heading = section.querySelector('.intro-text h2,.section-head h2,.strength-intro h2,.contact-main h2');
      const copy = section.querySelector('.intro-text>p:last-of-type,.section-head>p,.strength-intro>p,.contact-note');
      const media = section.id === 'experience' ? [...section.querySelectorAll('.portrait-wrap')] : [];
      [chapter, heading, copy, ...media].filter(Boolean).forEach((item) => { item.style.opacity = '0'; });
      revealMap.set(section, { type: 'section', chapter, heading, copy, media });
    });

    const groupSelectors = [
      ['.work-block', '.work-heading,.work-item'],
      ['.stats', ':scope>div'],
      ['.career-map', ':scope>*'],
      ['.education-grid', ':scope>*'],
      ['.proof-grid', ':scope>*'],
      ['.project-grid', '.project'],
      ['.strength-cards', '.strength-card'],
      ['.contact-panel', ':scope'],
    ];
    groupSelectors.forEach(([groupSelector, itemSelector]) => {
      document.querySelectorAll(groupSelector).forEach((group) => {
        const items = itemSelector === ':scope' ? [group] : [...group.querySelectorAll(itemSelector)];
        const media = group.matches('.project-grid') ? [...group.querySelectorAll('.project-image')] : [];
        [...items, ...media].forEach((item) => { item.style.opacity = '0'; });
        revealMap.set(group, { type: 'group', items, media });
      });
    });

    const activeTargets = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) { activeTargets.delete(entry.target); return; }
        if (activeTargets.has(entry.target)) return;
        activeTargets.add(entry.target);
        const payload = revealMap.get(entry.target);
        if (payload.type === 'section') {
          const { chapter, heading, copy, media } = payload;
          replay(chapter, [{ opacity: 0, transform: 'translateX(-150px) scaleX(.72)', letterSpacing: '-.08em' }, { opacity: .075, transform: 'translateX(0) scaleX(1)', letterSpacing: '-.055em' }], { duration: 1850, easing: ease });
          replay(heading, [{ opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(110px) scaleY(.68)' }, { opacity: 1, clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0) scaleY(1)' }], { duration: 1800, delay: 220, easing: ease });
          replay(copy, [{ opacity: 0, transform: 'translateY(45px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 1450, delay: 640, easing: ease });
          media.forEach((item, index) => replay(item, [{ opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(70px) scale(1.04)' }, { opacity: 1, clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0) scale(1)' }], { duration: 1700, delay: 460 + index * 180, easing: ease }));
        } else {
          payload.media.forEach((item, index) => replay(item, [{ opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(55px) scale(1.035)' }, { opacity: 1, clipPath: 'inset(0 0 0% 0)', transform: 'translateY(0) scale(1)' }], { duration: 1650, delay: 180 + index * 170, easing: ease }));
          payload.items.forEach((item, index) => replay(item, [{ opacity: 0, translate: '0 85px', scale: '.975' }, { opacity: 1, translate: '0 0', scale: '1' }], { duration: 1550, delay: 220 + index * 200, easing: ease }));
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
    revealMap.forEach((_, target) => observer.observe(target));

    let ticking = false;
    const parallaxItems = [...document.querySelectorAll('.portrait-wrap,.project-image')];
    const updateParallax = () => {
      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > innerHeight) return;
        const progress = (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
        item.style.setProperty('--parallax-y', `${Math.max(-16, Math.min(16, progress * -28))}px`);
      });
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(updateParallax); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    updateParallax();

    const depthText = hero?.querySelector('.hero-depth');
    let depthFrame = 0;
    const updateDepth = (event) => {
      if (!depthText || depthFrame) return;
      depthFrame = requestAnimationFrame(() => {
        const x = (event.clientX / innerWidth - .5) * 2;
        const y = (event.clientY / innerHeight - .5) * 2;
        depthText.style.setProperty('--depth-x', `${x * 10}px`);
        depthText.style.setProperty('--depth-y', `${y * 7}px`);
        depthFrame = 0;
      });
    };
    hero?.addEventListener('pointermove', updateDepth, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      hero?.removeEventListener('pointermove', updateDepth);
      if (depthFrame) cancelAnimationFrame(depthFrame);
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return <div className={`site lang-${language}`}>
    <div className={`copy-toast ${copiedContact ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={17} /><span>{copiedContact === 'email' ? copy.emailCopied : copiedContact === 'phone' ? copy.phoneCopied : ''}</span></div>
    <div className="site-grainient" aria-hidden="true">
      <Grainient
        color1="#081e3e"
        color2="#13305b"
        color3="#0c2956"
        timeSpeed={0.25}
        colorBalance={0.0}
        warpStrength={1.0}
        warpFrequency={5.0}
        warpSpeed={2.0}
        warpAmplitude={50.0}
        blendAngle={0.0}
        blendSoftness={0.05}
        rotationAmount={500.0}
        noiseScale={2.0}
        grainAmount={0.1}
        grainScale={2.0}
        grainAnimated={false}
        contrast={1.5}
        gamma={1.0}
        saturation={1.0}
        centerX={0.0}
        centerY={0.0}
        zoom={0.9}
      />
    </div>
    <header className={`nav ${navScrolled ? 'nav-scrolled' : ''}`}>
      <a className="brand" href="#top">{language === 'en' ? 'JUNHAO ZHANG' : '张峻豪'}<span>/</span>{copy.brand}</a>
      <button className="menu" aria-label={language === 'en' ? 'Open navigation' : '打开导航'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'show' : ''}>
        {copy.nav.map(([text, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{text}</a>)}
        <button className="language-toggle" type="button" onClick={() => setLanguage(current => current === 'zh' ? 'en' : 'zh')} aria-label={language === 'en' ? '切换为中文' : 'Switch to English'}><span>{language === 'zh' ? '中' : 'EN'}</span><b>{copy.language}</b></button>
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>{copy.contact} <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main id="top">
      <section className="hero hero-v2">
        <div className="hero-motion-shell" aria-hidden="true">
          <video className="hero-motion" autoPlay muted loop playsInline preload="metadata" poster={`${M}stage-portrait.jpg`}>
            <source src={`${M}hero-stage.mp4`} type="video/mp4" />
          </video>
        </div>
        <div className="hero-grid" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="veil" />
        <div className="hero-copy">
          <p className="eyebrow">{copy.heroEyebrow}</p>
          <h1><span>{copy.heroLine1}</span><br /><em>{copy.heroLine2}</em></h1>
          <p className="hero-desc">{copy.heroDesc1}<br />{copy.heroDesc2}</p>
          <div className="hero-fit" aria-label={copy.quick}>
            <div className="hero-fit-top"><strong><span>{copy.quick}</span><small>QUICK VIEW</small></strong><div className="hero-fit-tabs" role="tablist" aria-label={language === 'en' ? 'Choose a capability' : '选择需要了解的能力'}>{localizedFits.map(item => <button key={item.id} type="button" role="tab" aria-selected={activeFit === item.id} className={activeFit === item.id ? 'is-active' : ''} onClick={() => setActiveFit(item.id)}>{item.label}</button>)}</div></div>
            <p key={selectedFit.id} className="hero-fit-copy">{selectedFit.summary}</p>
          </div>
          <div key={`${selectedFit.id}-proof`} className="hero-proof" aria-live="polite" aria-label={language === 'en' ? `${selectedFit.label} evidence` : `${selectedFit.label}的核心证据`}>
            {selectedFit.proof.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
          </div>
        </div>
        <ProfileCard
          className="hero-profile-card"
          name={language === 'en' ? 'Junhao Zhang' : '张峻豪'}
          title={copy.candidate}
          handle="ZhangJunhao"
          status={copy.status}
          contactText=""
          avatarUrl={`${M}stage-portrait.jpg`}
          miniAvatarUrl={`${M}stage-portrait.jpg`}
          showUserInfo
          enableTilt
          enableMobileTilt={false}
          behindGlowEnabled
          behindGlowColor="rgba(227, 193, 127, .55)"
          behindGlowSize="34%"
          innerGradient="linear-gradient(145deg,#0b1d3ee6 0%,#2a477c72 56%,#d1ad6e42 100%)"
          onContactClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        />
        <div className="hero-marquee" aria-hidden="true">STRATEGY · PRODUCT · GROWTH · EXECUTION · STRATEGY · PRODUCT · GROWTH · EXECUTION ·</div>
      </section>

      <section className="intro section" id="experience">
        <div className="motion-chapter" aria-hidden="true">EXPERIENCE</div>
        <div className="section-label">{copy.experienceLabel}</div>
        <div className="intro-grid">
          <div className="portrait-wrap"><img src={`${A}profile-stage.jpg`} alt={language === 'en' ? 'Junhao Zhang speaking on stage' : '张峻豪在活动现场'} loading="lazy" decoding="async" /><span className="portrait-note">ON STAGE / IN MOTION<br />BUILT FOR MOMENTUM</span></div>
          <div className="intro-text"><p className="kicker">{copy.about}</p><h2>{copy.aboutTitle1}<br /><span>{copy.aboutTitle2}</span></h2><p>{copy.aboutText}</p><div className="contact-line"><div className="contact-copy-item"><span className="contact-value"><Mail size={17} /> zhangjunhao03@foxmail.com</span><button type="button" onClick={() => copyContact('email', 'zhangjunhao03@foxmail.com')} aria-label={copiedContact === 'email' ? copy.emailCopied : copy.copyEmail} title={copiedContact === 'email' ? copy.emailCopied : copy.copyEmail}>{copiedContact === 'email' ? <Check size={14} /> : <Copy size={14} />}</button></div><div className="contact-copy-item"><span className="contact-value"><Phone size={17} /> +86 151 6333 8268</span><button type="button" onClick={() => copyContact('phone', '+86 151 6333 8268')} aria-label={copiedContact === 'phone' ? copy.phoneCopied : copy.copyPhone} title={copiedContact === 'phone' ? copy.phoneCopied : copy.copyPhone}>{copiedContact === 'phone' ? <Check size={14} /> : <Copy size={14} />}</button></div></div><div className="availability-line">{copy.availability.map(item => <span key={item}>{item}</span>)}</div></div>
        </div>
        <div className="work-block">
          <div className="work-heading"><p className="kicker">{copy.workKicker}</p><h3>{copy.workTitle1}<br />{copy.workTitle2}</h3><p>{copy.workHint}</p><div className="badge-deck" aria-label={copy.workKicker}>{localizedBadges.map((badge, index) => <button className={`work-badge badge-${badge.tone} ${activeWork === index ? 'is-active' : ''}`} key={badge.short} type="button" onMouseEnter={() => setActiveWork(index)} onFocus={() => setActiveWork(index)} onClick={() => setActiveWork(index)} aria-label={`${language === 'en' ? 'View' : '查看'} ${badge.company}`}><span className="badge-lanyard" /><span className="badge-clip" /><span className="badge-face"><span className="badge-brand">{badge.short}</span><img src={`${M}badge-portrait.png`} alt={copy.badgeAlt} loading="lazy" decoding="async" /><span className="badge-name">{language === 'en' ? 'Junhao Zhang' : '张峻豪'}<small>ZHANG JUNHAO</small></span><span className="badge-role">{badge.role}</span><span className="badge-company">{badge.company}<small>{badge.period}</small></span></span></button>)}</div></div>
          <div className="work-list">{localizedWork.map((job, index) => <details className="work-item" key={job.company} open={activeWork === index}><summary onClick={(event) => { event.preventDefault(); setActiveWork(index); }}><span className="work-index">0{index + 1}</span><div><p>{job.period}</p><h4>{job.company}</h4><strong>{job.role}</strong></div><span className="work-toggle">＋</span></summary><div className="work-body"><p>{job.summary}</p><div className="metric-pills">{job.metrics.map(metric => <span key={metric}>{metric}</span>)}</div><p>{job.detail}</p></div></details>)}</div>
        </div>
        <div className="stats">{copy.stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
        <div className="career-map"><div className="career-title"><span className="kicker">{copy.careerKicker}</span><h3>{copy.careerTitle1}<br /><span>{copy.careerTitle2}</span></h3></div>{copy.career.map(([year, title, text]) => <div className="career-item" key={title}><b>{year}</b><strong>{title}</strong><p>{text}</p></div>)}</div>
        <div className="education-grid"><BorderGlow><article><img className="education-emblem emblem-hkbu" src={`${M}hkbu-emblem-round.png`} alt={sections.education[0].school} loading="lazy" /><p className="kicker">EDUCATION / 01</p><span>{sections.education[0].location}</span><h3>{sections.education[0].school} <em>{sections.education[0].badge}</em></h3><strong>{sections.education[0].degree}</strong><p>{sections.education[0].detail}</p></article></BorderGlow><BorderGlow><article><img className="education-emblem emblem-must" src={`${M}must-emblem.svg`} alt={sections.education[1].school} loading="lazy" /><p className="kicker">EDUCATION / 02</p><span>{sections.education[1].location}</span><h3>{sections.education[1].school} <em>{sections.education[1].badge}</em></h3><strong>{sections.education[1].degree}</strong><p>{sections.education[1].detail}</p></article></BorderGlow><BorderGlow><aside><p className="kicker">TOOLS / CERTIFICATES</p><div>{sections.tools.map(tool => <span key={tool}>{tool}</span>)}</div></aside></BorderGlow></div>
        <div className="proof-grid"><BorderGlow><article><p className="kicker">SELECTED HONORS</p><h3>{sections.honorsTitle}</h3><ul>{sections.honors.map(item => <li key={item}>{item}</li>)}</ul></article></BorderGlow><BorderGlow><article><p className="kicker">LEADERSHIP</p><h3>{sections.leadershipTitle}</h3><ul>{sections.leadership.map(item => <li key={item}>{item}</li>)}</ul></article></BorderGlow></div>
        <BorderGlow><section className="interest-panel" aria-labelledby="interest-title"><div className="interest-intro"><p className="kicker">{sections.interestKicker}</p><h3 id="interest-title">{sections.interestTitle1}<br /><span>{sections.interestTitle2}</span></h3><p>{sections.interestIntro}</p></div><div className="interest-list">{sections.interests.map(([title, text], index) => <article key={title}><div className="interest-icon">{index === 0 ? <BasketballIcon /> : index === 1 ? <Bike size={29} /> : <Camera size={29} />}</div><span>{['01 / TEAM', '02 / ENDURANCE', '03 / OBSERVE'][index]}</span><h4>{title}</h4><p>{text}</p></article>)}</div></section></BorderGlow>
      </section>

      <section className="projects section" id="projects">
        <div className="motion-chapter" aria-hidden="true">SELECTED WORK</div>
        <div className="section-label">{copy.projectLabel}</div>
        <div className="section-head"><h2>{copy.projectTitle1}<br /><span>{copy.projectTitle2}</span></h2><p>{copy.projectIntro}</p></div>
        <div className={`product-lab lab-theme-${selectedLab.theme}`}>
          <div className="lab-backdrop-word" aria-hidden="true">{selectedLab.tab}</div>
          <div className="lab-selector-head"><div><span>CHOOSE A PRODUCT</span><strong>{copy.choose}</strong></div><p><b>03</b> LIVE<br />PROTOTYPES</p></div>
          <div className="lab-tabs" role="tablist" aria-label={copy.choose}>
            {localizedLabs.map(item => <button key={item.id} type="button" role="tab" aria-selected={activeLab === item.id} className={`lab-tab-${item.id} ${activeLab === item.id ? 'is-active' : ''}`} onClick={() => { setActiveLab(item.id); setLabStarted(false); }}><span className="lab-tab-number">{item.number}</span><span className="lab-tab-copy"><strong>{item.tab}</strong><small>{item.result}</small><em>{activeLab === item.id ? copy.live : copy.switch} <ArrowUpRight size={12} /></em></span><img src={item.cover} alt="" loading="lazy" /></button>)}
          </div>
          <article className="lab-copy" key={`${selectedLab.id}-copy`}>
            <p className="kicker">{selectedLab.number} / LIVE CASE</p>
            <h3>{selectedLab.title}</h3>
            <p>{selectedLab.intro}</p>
            <div className="lab-result"><span>{copy.result}</span><strong>{selectedLab.result}</strong></div>
            <p className="lab-role">{copy.myRole} · {selectedLab.role}</p>
            <button type="button" className="lab-case-button" onClick={() => setActiveCase(localizedCases[selectedLab.id])}>{copy.caseButton} <ArrowUpRight size={17} /></button>
          </article>
          <div className={`lab-stage ${labStarted ? 'is-interacting' : ''}`} key={`${selectedLab.id}-stage`}>
            <div className="lab-stage-head"><span><i /> LIVE PROTOTYPE</span><strong>{selectedLab.tab}</strong></div>
            <iframe title={`${selectedLab.tab} ${language === 'en' ? 'interactive prototype' : '可交互产品原型'}`} src={`${P}${selectedLab.prototype}`} loading="lazy" sandbox="allow-scripts allow-forms allow-modals allow-popups" />
            {!labStarted && <button type="button" className="lab-enter" onClick={() => setLabStarted(true)}><span><Play size={21} fill="currentColor" /></span><strong>{copy.enter}</strong><small>{copy.enterHint}</small></button>}
            {labStarted && <button type="button" className="lab-exit" onClick={() => setLabStarted(false)}><X size={14} /> {copy.exit} <kbd>ESC</kbd></button>}
          </div>
          <aside className="lab-notes" key={`${selectedLab.id}-notes`}>
            <p className="kicker">CORE EXPERIENCE</p>
            <h4>{copy.path}</h4>
            <ol>{selectedLab.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span><p>{feature}</p></li>)}</ol>
            <div className="lab-tip"><strong>{copy.tip}</strong><p>{copy.tipText}</p></div>
          </aside>
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="motion-chapter" aria-hidden="true">CAPABILITIES</div>
        <div className="section-label">{copy.strengthsLabel}</div>
        <div className="strength-intro"><div><p className="kicker">{copy.strengthsKicker}</p><h2>{copy.strengthsTitle1}<br /><span>{copy.strengthsTitle2}</span></h2></div><p>{copy.strengthsIntro}</p></div>
        <div className="strength-cards">
          {sections.strengths.map(([label, title, value, text, evidence], index) => <BorderGlow key={label}><article className={`strength-card ${index === 0 ? 'strength-card-featured' : ''}`}><span>{label}</span><h3>{title}</h3><strong>{value}</strong><p>{text}</p><div>{evidence}</div></article></BorderGlow>)}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="motion-chapter" aria-hidden="true">CONTACT</div>
        <BorderGlow glowRadius={12}><div className="contact-panel">
          <div className="contact-main"><p className="eyebrow">04 / CONTACT</p><p className="contact-en">READY FOR THE NEXT MOVE.</p><h2>{copy.contactLead}<br />{copy.contactTitle}</h2><p className="contact-note">{copy.contactNote}</p><div className="contact-actions"><div className="contact-action-row"><span><Mail size={18} /> zhangjunhao03@foxmail.com</span><button type="button" onClick={() => copyContact('email', 'zhangjunhao03@foxmail.com')} aria-label={copiedContact === 'email' ? copy.emailCopied : copy.copyEmail} title={copiedContact === 'email' ? copy.emailCopied : copy.copyEmail}>{copiedContact === 'email' ? <Check size={16} /> : <Copy size={16} />}</button></div><div className="contact-action-row"><span><Phone size={18} /> +86 151 6333 8268</span><button type="button" onClick={() => copyContact('phone', '+86 151 6333 8268')} aria-label={copiedContact === 'phone' ? copy.phoneCopied : copy.copyPhone} title={copiedContact === 'phone' ? copy.phoneCopied : copy.copyPhone}>{copiedContact === 'phone' ? <Check size={16} /> : <Copy size={16} />}</button></div></div></div>
          <aside className="contact-qr"><p className="kicker">WECHAT</p><img src={`${M}wechat-qr.png`} alt={language === 'en' ? 'Junhao Zhang WeChat QR code' : '张峻豪微信二维码'} loading="lazy" decoding="async" /><strong>{copy.scan}</strong><span>{copy.scanHint}</span></aside>
        </div></BorderGlow>
        <div className="contact-footer"><span>{copy.footerRole}</span><span>{copy.brand}</span><span><MapPin size={14} /> {language === 'en' ? 'Shenzhen · Hong Kong' : '深圳 · 香港'}</span></div>
      </section>
    </main>

    {activeCase && <Modal data={activeCase} onClose={() => setActiveCase(null)} copy={copy} language={language} />}
  </div>;
}

function Project({ image, theme, tag, title, text, result, onClick }) {
  const content = <><div className="project-image"><img src={A + image} alt={title} loading="lazy" decoding="async" /><span>{onClick ? <Play size={20} /> : <ArrowUpRight />}</span></div><p className="tag">{tag}</p><h3>{title}</h3><p>{text}</p><strong className="project-result">{result}</strong></>;
  const className = `project project-${theme || 'default'}`;
  const card = onClick ? <button className={`${className} project-button`} onClick={onClick} aria-label={`查看${title}`}>{content}</button> : <article className={className}>{content}</article>;
  return <BorderGlow glowRadius={8}>{card}</BorderGlow>;
}

function Modal({ data, onClose, copy, language }) {
  return <div className="modal" role="dialog" aria-modal="true" aria-label={data.title} onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="case-modal"><button className="modal-close" onClick={onClose} aria-label={copy.close}><X /></button><div className="case-heading"><div><p className="kicker">{data.kicker}</p><h2>{data.title}</h2><p>{data.intro}</p></div><dl><div><dt>{copy.responsibility}</dt><dd>{data.role}</dd></div><div><dt>{copy.projectResult}</dt><dd>{data.result}</dd></div></dl></div><p className="media-label"><Play size={14} /> APP INTERACTION / {language === 'en' ? 'PRODUCT DEMO' : '产品交互演示'}</p><video controls playsInline preload="none" poster={data.images[0]}><source src={data.video} type="video/mp4" /></video>{data.evidenceVideo && <><p className="media-label evidence-label"><Play size={14} /> COMPETITION / {language === 'en' ? 'EVENT RECORD' : '比赛记录'}</p><video className="evidence-video" controls playsInline preload="none" poster={data.images[1]}><source src={data.evidenceVideo} type="video/mp4" /></video></>}<p className="media-label gallery-label">GALLERY / {language === 'en' ? 'PROJECT MOMENTS' : '项目现场'}</p><div className={`case-gallery images-${data.images.length}`}>{data.images.map((image, index) => <a href={image} target="_blank" rel="noreferrer" key={image}><img src={image} alt={`${data.title} ${language === 'en' ? 'project image' : '现场照片'} ${index + 1}`} loading="lazy" decoding="async" /></a>)}</div></div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
