import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, Phone, MapPin, Menu, X, Play, Copy, Check, Bike, Camera } from 'lucide-react';
import Grainient from './Grainient/Grainient';
import BorderGlow from './BorderGlow';
import ProfileCard from './ProfileCard/ProfileCard';
import { buildEnglishContent, pageCopy } from './i18n';
import './styles.css';

const ASSET_BASE = import.meta.env.BASE_URL === '/jianli/product-manager/' ? '/jianli/' : import.meta.env.BASE_URL;
const A = `${ASSET_BASE}assets/`;
const M = `${A}media/`;
const P = `${ASSET_BASE}prototypes/`;
const englishContent = buildEnglishContent(M);

const cases = {
  skillshare: {
    kicker: 'BUSINESS · COMMUNITY · INNOVATION',
    title: 'SkillShare / 技能交换社区',
    intro: '面向在校大学生与职场新人打造 C2C 技能互助平台，以“技能换技能 + 价值补差”连接供需双方。平台包含智能匹配、技能估值、沟通与钱包托管，解决技能价值不对等与陌生人交易信任问题。',
    role: '商业模式 / 用户场景 / 产品表达',
    result: 'BUS 课程满分 · 入围深科创（HSITP）优秀创业项目路演',
    video: `${M}skillshare-prototype.mp4`,
    images: [`${M}skillshare-phone.png`, `${M}skillshare-home.jpg`, `${M}skillshare-discover.jpg`],
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
  },
  gaokao: {
    kicker: 'AI · USER INSIGHT · PRODUCT',
    title: '高考择学通 / AI 志愿填报',
    intro: '面向高考考生与家长的 AI 志愿导航平台，集职业测评、趋势分析、智能志愿填报与自然语言问答于一体，降低信息不对称和志愿决策焦虑。',
    role: '项目负责人 / 商业分析 / 产品原型',
    result: '全国大学生电子商务“三创赛”省级银奖',
    video: `${M}gaokao-demo.mp4`,
    images: [`${M}gaokao-phone.png`, `${M}gaokao-features.jpg`, `${M}gaokao-flows.jpg`, `${M}gaokao-pitch.jpg`, `${M}gaokao-scenes.jpg`],
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
  },
  {
    company: '广州趣丸网络科技有限公司 · TT 语音',
    role: '产品经理实习生',
    period: '2023.06—2023.09',
    summary: '参与 TT 语音核心业务闭环、运营后台与游戏化功能迭代。',
    metrics: ['玩法使用率 +24%', '后台效率 +400%', '触达 10W+ 核心用户'],
    detail: '策划“卡包随机抽取”等变现玩法；拆解 5 款竞品并输出 10+ 份 PRD/MRD；建立服务号分层触达体系，优化认证、封面排序与厂牌标识配置。',
  },
  {
    company: '新东方教育科技集团有限公司',
    role: '跨境市场营销实习生',
    period: '2023.09—2024.02',
    summary: '从用户调研与渠道数据出发，优化海外教育获客和转化路径。',
    metrics: ['Leads 增长 40%', '业务分销率 +25%', '10+ 场活动'],
    detail: '通过实地调研识别区域用户差异，优化转化漏斗；构建中英双语 SEO 关键词与多语言内容矩阵，搭建市场数据看板和周度复盘机制，以增长反馈反推用户触点迭代。',
  },
];

const workBadges = [
  { company: '金山软件', short: 'KINGSOFT', role: 'AI 产品经理实习生', period: '2024—2025', tone: 'kingsoft' },
  { company: '趣丸科技', short: 'QUWAN · TT', role: '产品经理实习生', period: '2023', tone: 'quwan' },
  { company: '新东方', short: 'NEW ORIENTAL', role: '跨境市场营销实习生', period: '2023—2024', tone: 'xdf' },
];

const roleFits = [
  {
    id: 'discovery',
    label: '用户洞察',
    summary: '从访谈、竞品和行为数据中识别真实问题，明确用户、场景与产品机会。',
    proof: [['5 款', '竞品深度拆解'], ['10+', '需求访谈'], ['3 类', '用户场景验证']],
  },
  {
    id: 'execution',
    label: '方案落地',
    summary: '把模糊需求转成产品流程、交互原型和清晰 PRD，并协同团队推进上线。',
    proof: [['20+', 'PRD / MRD'], ['10+', '需求评审'], ['1 个 AI 模块', '从 0 到 1 上线']],
  },
  {
    id: 'validation',
    label: '数据验证',
    summary: '用埋点、指标和效果评估验证方案，持续定位问题并推动产品迭代。',
    proof: [['>95%', 'AI 分析覆盖与准确'], ['+24%', '玩法使用率'], ['+400%', '后台配置效率']],
  },
];

const productLabs = [
  {
    id: 'gaokao', number: '01', tab: '高考择学通', title: 'AI 志愿决策与升学导航',
    intro: '从考生和家长的决策焦虑出发，把职业测评、趋势分析、院校推荐、智能填报和 AI 问答整合为完整升学决策路径。',
    result: '全国大学生三创赛省级银奖', role: '项目负责人 · 用户研究 · 产品原型',
    prototype: 'gaokao.html', cover: `${M}gaokao-phone.png`, theme: 'orange', features: ['完成职业与能力测评', '获取 AI 趋势及院校推荐', '生成志愿方案与行动建议'],
  },
  {
    id: 'icare', number: '02', tab: 'iCare', title: '港漂生活与金融生态平台',
    intro: '围绕香港内地留学生的社交、储蓄和健康需求，把多类服务连接成一站式港漂生活入口。',
    result: '香港商赛第四名 · 150+ 队伍', role: '产品策略 · 用户研究 · 商业路演',
    prototype: 'icare.html', cover: `${M}icare-cover.jpg`, theme: 'crimson', features: ['兴趣活动与找搭子', '微储蓄与步数积分', '真人财富规划服务'],
  },
  {
    id: 'skillshare', number: '03', tab: 'SkillShare', title: '技能交换与价值补差社区',
    intro: '以“技能换技能 + 价值补差”连接供需双方，用智能匹配与托管机制解决陌生人交易信任问题。',
    result: 'BUS 满分 · HSITP 优秀项目路演', role: '商业模式 · 用户场景 · 产品表达',
    prototype: 'skillshare.html', cover: `${M}skillshare-phone.png`, theme: 'violet', features: ['技能供需智能匹配', '技能估值与价值补差', '沟通与钱包托管'],
  },
];

const BasketballIcon = ({ size = 28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M5.7 5.7c4.1 1.5 7.1 4.5 8.6 8.6M9.7 3.3c1.4 4.1 4.6 7.3 8.9 8.6M3.2 13.7c4.4-1.1 8.1-4.7 9.2-9.2M11.5 20.8c1.1-4.4 4.7-8.1 9.2-9.2" /></svg>;

function App() {
  const [language, setLanguage] = React.useState(() => window.localStorage.getItem('pm-language') === 'en' ? 'en' : 'zh');
  const [open, setOpen] = React.useState(false);
  const [activeCase, setActiveCase] = React.useState(null);
  const [navScrolled, setNavScrolled] = React.useState(false);
  const [activeWork, setActiveWork] = React.useState(0);
  const [copiedContact, setCopiedContact] = React.useState('');
  const [activeFit, setActiveFit] = React.useState('discovery');
  const [activeLab, setActiveLab] = React.useState('gaokao');
  const [labStarted, setLabStarted] = React.useState(false);
  const copy = pageCopy[language];
  const localizedCases = language === 'en' ? englishContent.cases : cases;
  const localizedWork = language === 'en' ? englishContent.workExperience : workExperience;
  const localizedBadges = language === 'en' ? englishContent.workBadges : workBadges;
  const localizedFits = language === 'en' ? englishContent.roleFits : roleFits;
  const localizedLabs = language === 'en' ? englishContent.productLabs : productLabs;
  const nav = copy.nav.map((text, index) => [text, ['experience', 'projects', 'strengths'][index]]);
  const selectedFit = localizedFits.find(item => item.id === activeFit) || localizedFits[0];
  const selectedLab = localizedLabs.find(item => item.id === activeLab) || localizedLabs[0];

  React.useEffect(() => {
    window.localStorage.setItem('pm-language', language);
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en' ? 'Junhao Zhang / Product Manager' : '张峻豪 / Product Manager';
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', language === 'en'
      ? 'Junhao Zhang — Product manager focused on AI products, user insight and 0-to-1 delivery.'
      : '张峻豪｜产品经理候选人｜AI 产品、用户洞察与 0—1 产品实践');
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
      <a className="brand" href="#top">{language === 'en' ? 'Junhao Zhang' : '张峻豪'}<span>/</span>{copy.brandTitle}</a>
      <button className="menu" aria-label={open ? copy.menuClose : copy.menuOpen} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'show' : ''}>
        {nav.map(([text, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{text}</a>)}
        <div className="lang-switch" role="group" aria-label={copy.languageLabel}><button type="button" className={language === 'zh' ? 'is-active' : ''} aria-pressed={language === 'zh'} onClick={() => setLanguage('zh')}>中</button><button type="button" className={language === 'en' ? 'is-active' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button></div>
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>{copy.contactCta} <ArrowUpRight size={15} /></a>
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
          <div className="hero-fit" aria-label={copy.quickViewAria}>
            <div className="hero-fit-top"><strong><span>{copy.quickView}</span><small>{copy.quickViewEn}</small></strong><div className="hero-fit-tabs" role="tablist" aria-label={copy.fitTabAria}>{localizedFits.map(item => <button key={item.id} type="button" role="tab" aria-selected={activeFit === item.id} className={activeFit === item.id ? 'is-active' : ''} onClick={() => setActiveFit(item.id)}>{item.label}</button>)}</div></div>
            <p key={selectedFit.id} className="hero-fit-copy">{selectedFit.summary}</p>
          </div>
          <div key={`${language}-${selectedFit.id}-proof`} className="hero-proof" aria-live="polite" aria-label={`${selectedFit.label}${copy.fitProofSuffix}`}>
            {selectedFit.proof.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
          </div>
        </div>
        <ProfileCard
          className="hero-profile-card"
          name={language === 'en' ? 'Junhao Zhang' : '张峻豪'}
          title={copy.profileTitle}
          handle="ZhangJunhao"
          status={copy.profileStatus}
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
        <div className="hero-marquee" aria-hidden="true">DISCOVERY · PRODUCT · PROTOTYPE · VALIDATION · DISCOVERY · PRODUCT · PROTOTYPE · VALIDATION ·</div>
      </section>

      <section className="intro section" id="experience">
        <div className="motion-chapter" aria-hidden="true">EXPERIENCE</div>
        <div className="section-label">{copy.experienceLabel}</div>
        <div className="intro-grid">
          <div className="portrait-wrap"><img src={`${A}profile-stage.jpg`} alt={copy.portraitAlt} loading="lazy" decoding="async" /><span className="portrait-note">ON STAGE / IN MOTION<br />BUILT FOR MOMENTUM</span></div>
          <div className="intro-text"><p className="kicker">{copy.aboutKicker}</p><h2>{copy.aboutLine1}<br /><span>{copy.aboutLine2}</span></h2><p>{copy.aboutBody}</p><div className="contact-line"><div className="contact-copy-item"><span className="contact-value"><Mail size={17} /> zhangjunhao03@foxmail.com</span><button type="button" onClick={() => copyContact('email', 'zhangjunhao03@foxmail.com')} aria-label={copiedContact === 'email' ? copy.emailCopied : copy.copyEmail} title={copiedContact === 'email' ? copy.copied : copy.copyEmail}>{copiedContact === 'email' ? <Check size={14} /> : <Copy size={14} />}</button></div><div className="contact-copy-item"><span className="contact-value"><Phone size={17} /> +86 151 6333 8268</span><button type="button" onClick={() => copyContact('phone', '+86 151 6333 8268')} aria-label={copiedContact === 'phone' ? copy.phoneCopied : copy.copyPhone} title={copiedContact === 'phone' ? copy.copied : copy.copyPhoneTitle}>{copiedContact === 'phone' ? <Check size={14} /> : <Copy size={14} />}</button></div></div><div className="availability-line">{copy.availability.map(item => <span key={item}>{item}</span>)}</div></div>
        </div>
        <div className="work-block">
          <div className="work-heading"><p className="kicker">{copy.workKicker}</p><h3>{copy.workLine1}<br />{copy.workLine2}</h3><p>{copy.workTip}</p><div className="badge-deck" aria-label={copy.badgeAria}>{localizedBadges.map((badge, index) => <button className={`work-badge badge-${badge.tone} ${activeWork === index ? 'is-active' : ''}`} key={badge.short} type="button" onMouseEnter={() => setActiveWork(index)} onFocus={() => setActiveWork(index)} onClick={() => setActiveWork(index)} aria-label={copy.viewInternship(badge.company)}><span className="badge-lanyard" /><span className="badge-clip" /><span className="badge-face"><span className="badge-brand">{badge.short}</span><img src={`${M}badge-portrait.png`} alt={copy.portraitAlt} loading="lazy" decoding="async" /><span className="badge-name">{language === 'en' ? 'Junhao Zhang' : '张峻豪'}<small>ZHANG JUNHAO</small></span><span className="badge-role">{badge.role}</span><span className="badge-company">{badge.company}<small>{badge.period}</small></span></span></button>)}</div></div>
          <div className="work-list">{localizedWork.map((job, index) => <details className="work-item" key={job.company} open={activeWork === index}><summary onClick={(event) => { event.preventDefault(); setActiveWork(index); }}><span className="work-index">0{index + 1}</span><div><p>{job.period}</p><h4>{job.company}</h4><strong>{job.role}</strong></div><span className="work-toggle">＋</span></summary><div className="work-body"><p>{job.summary}</p><div className="metric-pills">{job.metrics.map(metric => <span key={metric}>{metric}</span>)}</div><p>{job.detail}</p></div></details>)}</div>
        </div>
        <div className="stats">{[['2', copy.stats[0]], ['20+', copy.stats[1]], ['3', copy.stats[2]], ['6.5', copy.stats[3]]].map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
        <div className="career-map"><div className="career-title"><span className="kicker">{copy.journeyKicker}</span><h3>{copy.journeyLine1}<br /><span>{copy.journeyLine2}</span></h3></div>{copy.journey.map(([period, title, body]) => <div className="career-item" key={`${period}-${title}`}><b>{period}</b><strong>{title}</strong><p>{body}</p></div>)}</div>
        <div className="education-grid"><BorderGlow><article><img className="education-emblem emblem-hkbu" src={`${M}hkbu-emblem-round.png`} alt={copy.schoolAlts[0]} loading="lazy" /><p className="kicker">{copy.education[0][0]}</p><span>{copy.education[0][1]}</span><h3>{copy.education[0][2]} <em>{copy.education[0][3]}</em></h3><strong>{copy.education[0][4]}</strong><p>{copy.education[0][5]}</p></article></BorderGlow><BorderGlow><article><img className="education-emblem emblem-must" src={`${M}must-emblem.svg`} alt={copy.schoolAlts[1]} loading="lazy" /><p className="kicker">{copy.education[1][0]}</p><span>{copy.education[1][1]}</span><h3>{copy.education[1][2]} <em>{copy.education[1][3]}</em></h3><strong>{copy.education[1][4]}</strong><p>{copy.education[1][5]}</p></article></BorderGlow><BorderGlow><aside><p className="kicker">{copy.toolsKicker}</p><div>{copy.tools.map(tool => <span key={tool}>{tool}</span>)}</div></aside></BorderGlow></div>
        <div className="proof-grid"><BorderGlow><article><p className="kicker">{copy.honorsKicker}</p><h3>{copy.honorsTitle}</h3><ul>{copy.honors.map(item => <li key={item}>{item}</li>)}</ul></article></BorderGlow><BorderGlow><article><p className="kicker">{copy.leadershipKicker}</p><h3>{copy.leadershipTitle}</h3><ul>{copy.leadership.map(item => <li key={item}>{item}</li>)}</ul></article></BorderGlow></div>
        <BorderGlow><section className="interest-panel" aria-labelledby="interest-title"><div className="interest-intro"><p className="kicker">{copy.interestKicker}</p><h3 id="interest-title">{copy.interestLine1}<br /><span>{copy.interestLine2}</span></h3><p>{copy.interestBody}</p></div><div className="interest-list">{copy.interests.map(([label, title, body], index) => <article key={title}><div className="interest-icon">{index === 0 ? <BasketballIcon /> : index === 1 ? <Bike size={29} /> : <Camera size={29} />}</div><span>{label}</span><h4>{title}</h4><p>{body}</p></article>)}</div></section></BorderGlow>
      </section>

      <section className="projects section" id="projects">
        <div className="motion-chapter" aria-hidden="true">SELECTED WORK</div>
        <div className="section-label">{copy.projectsLabel}</div>
        <div className="section-head"><h2>{copy.projectsLine1}<br /><span>{copy.projectsLine2}</span></h2><p>{copy.projectsBody}</p></div>
        <div className={`product-lab lab-theme-${selectedLab.theme}`}>
          <div className="lab-backdrop-word" aria-hidden="true">{selectedLab.tab}</div>
          <div className="lab-selector-head"><div><span>CHOOSE A PRODUCT</span><strong>{copy.chooseProduct}</strong></div><p><b>03</b> LIVE<br />{copy.prototypes}</p></div>
          <div className="lab-tabs" role="tablist" aria-label={copy.chooseProduct}>
            {localizedLabs.map(item => <button key={item.id} type="button" role="tab" aria-selected={activeLab === item.id} className={`lab-tab-${item.id} ${activeLab === item.id ? 'is-active' : ''}`} onClick={() => { setActiveLab(item.id); setLabStarted(false); }}><span className="lab-tab-number">{item.number}</span><span className="lab-tab-copy"><strong>{item.tab}</strong><small>{item.result}</small><em>{activeLab === item.id ? copy.active : copy.switch} <ArrowUpRight size={12} /></em></span><img src={item.cover} alt="" loading="lazy" /></button>)}
          </div>
          <article className="lab-copy" key={`${selectedLab.id}-copy`}>
            <p className="kicker">{selectedLab.number} / LIVE CASE</p>
            <h3>{selectedLab.title}</h3>
            <p>{selectedLab.intro}</p>
            <div className="lab-result"><span>{copy.projectResult}</span><strong>{selectedLab.result}</strong></div>
            <p className="lab-role">{copy.myRole} · {selectedLab.role}</p>
            <button type="button" className="lab-case-button" onClick={() => setActiveCase(selectedLab.id)}>{copy.viewCase} <ArrowUpRight size={17} /></button>
          </article>
          <div className={`lab-stage ${labStarted ? 'is-interacting' : ''}`} key={`${selectedLab.id}-stage`}>
            <div className="lab-stage-head"><span><i /> LIVE PROTOTYPE</span><strong>{selectedLab.tab}</strong></div>
            <iframe title={`${selectedLab.tab} ${copy.livePrototype}`} src={`${P}${selectedLab.prototype}`} loading="lazy" sandbox="allow-scripts allow-forms allow-modals allow-popups" />
            {!labStarted && <button type="button" className="lab-enter" onClick={() => setLabStarted(true)}><span><Play size={21} fill="currentColor" /></span><strong>{copy.enterProduct}</strong><small>{copy.enterHint}</small></button>}
            {labStarted && <button type="button" className="lab-exit" onClick={() => setLabStarted(false)}><X size={14} /> {copy.exit} <kbd>ESC</kbd></button>}
          </div>
          <aside className="lab-notes" key={`${selectedLab.id}-notes`}>
            <p className="kicker">{copy.coreExperience}</p>
            <h4>{copy.suggestedPath}</h4>
            <ol>{selectedLab.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span><p>{feature}</p></li>)}</ol>
            <div className="lab-tip"><strong>{copy.operationTip}</strong><p>{copy.operationBody}</p></div>
          </aside>
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="motion-chapter" aria-hidden="true">CAPABILITIES</div>
        <div className="section-label">{copy.strengthsLabel}</div>
        <div className="strength-intro"><div><p className="kicker">{copy.strengthsKicker}</p><h2>{copy.strengthsLine1}<br /><span>{copy.strengthsLine2}</span></h2></div><p>{copy.strengthsBody}</p></div>
        <div className="strength-cards">{copy.strengths.map(([label, title, metric, body, proof], index) => <BorderGlow key={label}><article className={`strength-card ${index === 0 ? 'strength-card-featured' : ''}`}><span>{label}</span><h3>{title}</h3><strong>{metric}</strong><p>{body}</p><div>{proof}</div></article></BorderGlow>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="motion-chapter" aria-hidden="true">CONTACT</div>
        <BorderGlow glowRadius={12}><div className="contact-panel">
          <div className="contact-main"><p className="eyebrow">04 / CONTACT</p><p className="contact-en">READY FOR THE NEXT MOVE.</p><h2>{copy.contactHeadline1}<br />{copy.contactHeadline2}</h2><p className="contact-note">{copy.contactNote}</p><div className="contact-actions"><div className="contact-action-row"><span><Mail size={18} /> zhangjunhao03@foxmail.com</span><button type="button" onClick={() => copyContact('email', 'zhangjunhao03@foxmail.com')} aria-label={copiedContact === 'email' ? copy.emailCopied : copy.copyEmail} title={copiedContact === 'email' ? copy.copied : copy.copyEmail}>{copiedContact === 'email' ? <Check size={16} /> : <Copy size={16} />}</button></div><div className="contact-action-row"><span><Phone size={18} /> +86 151 6333 8268</span><button type="button" onClick={() => copyContact('phone', '+86 151 6333 8268')} aria-label={copiedContact === 'phone' ? copy.phoneCopied : copy.copyPhone} title={copiedContact === 'phone' ? copy.copied : copy.copyPhoneTitle}>{copiedContact === 'phone' ? <Check size={16} /> : <Copy size={16} />}</button></div></div></div>
          <aside className="contact-qr"><p className="kicker">{copy.wechatKicker}</p><img src={`${M}wechat-qr.png`} alt={copy.wechatAlt} loading="lazy" decoding="async" /><strong>{copy.scanWechat}</strong><span>{copy.wechatNote}</span></aside>
        </div></BorderGlow>
        <div className="contact-footer"><span>{copy.footerRole}</span><span>{copy.footerGraduate}</span><span><MapPin size={14} /> {copy.footerLocation}</span></div>
      </section>
    </main>

    {activeCase && <Modal data={localizedCases[activeCase]} labels={copy.modal} onClose={() => setActiveCase(null)} />}
  </div>;
}

function Project({ image, theme, tag, title, text, result, onClick }) {
  const content = <><div className="project-image"><img src={A + image} alt={title} loading="lazy" decoding="async" /><span>{onClick ? <Play size={20} /> : <ArrowUpRight />}</span></div><p className="tag">{tag}</p><h3>{title}</h3><p>{text}</p><strong className="project-result">{result}</strong></>;
  const className = `project project-${theme || 'default'}`;
  const card = onClick ? <button className={`${className} project-button`} onClick={onClick} aria-label={`查看${title}`}>{content}</button> : <article className={className}>{content}</article>;
  return <BorderGlow glowRadius={8}>{card}</BorderGlow>;
}

function Modal({ data, labels, onClose }) {
  return <div className="modal" role="dialog" aria-modal="true" aria-label={data.title} onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="case-modal"><button className="modal-close" onClick={onClose} aria-label={labels.close}><X /></button><div className="case-heading"><div><p className="kicker">{data.kicker}</p><h2>{data.title}</h2><p>{data.intro}</p></div><dl><div><dt>{labels.responsibility}</dt><dd>{data.role}</dd></div><div><dt>{labels.result}</dt><dd>{data.result}</dd></div></dl></div><p className="media-label"><Play size={14} /> {labels.demo}</p><video controls playsInline preload="none" poster={data.images[0]}><source src={data.video} type="video/mp4" /></video>{data.evidenceVideo && <><p className="media-label evidence-label"><Play size={14} /> {labels.competition}</p><video className="evidence-video" controls playsInline preload="none" poster={data.images[1]}><source src={data.evidenceVideo} type="video/mp4" /></video></>}<p className="media-label gallery-label">{labels.gallery}</p><div className={`case-gallery images-${data.images.length}`}>{data.images.map((image, index) => <a href={image} target="_blank" rel="noreferrer" key={image}><img src={image} alt={labels.imageAlt(data.title, index)} loading="lazy" decoding="async" /></a>)}</div></div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
