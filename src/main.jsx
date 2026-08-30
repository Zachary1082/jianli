import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, Phone, MapPin, Menu, X, Play, Copy, Check, Bike, Camera } from 'lucide-react';
import Grainient from './Grainient/Grainient';
import BorderGlow from './BorderGlow';
import ProfileCard from './ProfileCard/ProfileCard';
import './styles.css';

const A = `${import.meta.env.BASE_URL}assets/`;
const M = `${A}media/`;
const P = `${import.meta.env.BASE_URL}prototypes/`;

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
    company: '新东方教育科技集团有限公司',
    role: '跨境市场营销实习生',
    period: '2023.09—2024.02',
    summary: '负责海外教育拉新、渠道分发及跨区域增长复盘。',
    metrics: ['Leads 增长 40%', '业务分销率 +25%', '10+ 场活动'],
    detail: '通过实地调研优化区域转化漏斗，构建中英双语 SEO 关键词与多语言内容矩阵；搭建市场数据看板和周度复盘机制，协同跨时区团队持续调整策略。',
  },
  {
    company: '广州趣丸网络科技有限公司 · TT 语音',
    role: '产品经理实习生',
    period: '2023.06—2023.09',
    summary: '参与 TT 语音核心业务闭环、运营后台与游戏化功能迭代。',
    metrics: ['玩法使用率 +24%', '后台效率 +400%', '触达 10W+ 核心用户'],
    detail: '策划“卡包随机抽取”等变现玩法；拆解 5 款竞品并输出 10+ 份 PRD/MRD；建立服务号分层触达体系，优化认证、封面排序与厂牌标识配置。',
  },
];

const workBadges = [
  { company: '金山软件', short: 'KINGSOFT', role: 'AI 产品经理实习生', period: '2024—2025', tone: 'kingsoft' },
  { company: '新东方', short: 'NEW ORIENTAL', role: '跨境市场营销实习生', period: '2023—2024', tone: 'xdf' },
  { company: '趣丸科技', short: 'QUWAN · TT', role: '产品经理实习生', period: '2023', tone: 'quwan' },
];

const roleFits = [
  {
    id: 'business',
    label: '商业判断',
    summary: '从用户与数据中判断机会，把产品方案连接到可验证的商业结果。',
    proof: [['3 项', '商业项目'], ['第 4 名', '香港商赛'], ['BUS 满分', 'HSITP 路演']],
  },
  {
    id: 'execution',
    label: '项目执行',
    summary: '把模糊问题拆成路径、责任人与节点，推动方案从 0 到 1 完成交付。',
    proof: [['10+', 'PRD 输出'], ['10+', '需求评审'], ['1 个 AI 模块', '从 0 到 1 上线']],
  },
  {
    id: 'collaboration',
    label: '团队协同',
    summary: '在产品、技术、市场与跨文化团队之间对齐目标，让协作持续向结果收敛。',
    proof: [['3 段', '跨职能实习'], ['3 次', '项目负责人'], ['中英双语', '跨境协作']],
  },
];

const productLabs = [
  {
    id: 'icare', number: '01', tab: 'iCare', title: '港漂生活与金融生态平台',
    intro: '把兴趣社交、财富赋权、健康管理与真人规划服务连接成一站式港漂生活入口。',
    result: '香港商赛第四名 · 150+ 队伍', role: '产品策略 · 用户研究 · 商业路演',
    prototype: 'icare.html', cover: `${M}icare-cover.jpg`, theme: 'crimson', features: ['兴趣活动与找搭子', '微储蓄与步数积分', '真人财富规划服务'],
  },
  {
    id: 'skillshare', number: '02', tab: 'SkillShare', title: '技能交换与价值补差社区',
    intro: '以“技能换技能 + 价值补差”连接供需双方，用智能匹配与托管机制解决陌生人交易信任问题。',
    result: 'BUS 满分 · HSITP 优秀项目路演', role: '商业模式 · 用户场景 · 产品表达',
    prototype: 'skillshare.html', cover: `${M}skillshare-phone.png`, theme: 'violet', features: ['技能供需智能匹配', '技能估值与价值补差', '沟通与钱包托管'],
  },
  {
    id: 'gaokao', number: '03', tab: '高考择学通', title: 'AI 志愿决策与升学导航',
    intro: '从职业测评出发，把趋势分析、院校推荐、智能填报和 AI 问答整合为完整升学决策路径。',
    result: '全国大学生三创赛省级银奖', role: '项目负责人 · 商业分析 · 产品原型',
    prototype: 'gaokao.html', cover: `${M}gaokao-phone.png`, theme: 'orange', features: ['职业与能力测评', 'AI 趋势及院校推荐', '智能填报与规划师服务'],
  },
];

const BasketballIcon = ({ size = 28 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M5.7 5.7c4.1 1.5 7.1 4.5 8.6 8.6M9.7 3.3c1.4 4.1 4.6 7.3 8.9 8.6M3.2 13.7c4.4-1.1 8.1-4.7 9.2-9.2M11.5 20.8c1.1-4.4 4.7-8.1 9.2-9.2" /></svg>;

function App() {
  const [open, setOpen] = React.useState(false);
  const [activeCase, setActiveCase] = React.useState(null);
  const [navScrolled, setNavScrolled] = React.useState(false);
  const [activeWork, setActiveWork] = React.useState(0);
  const [copiedContact, setCopiedContact] = React.useState('');
  const [activeFit, setActiveFit] = React.useState('business');
  const [activeLab, setActiveLab] = React.useState('icare');
  const [labStarted, setLabStarted] = React.useState(false);
  const nav = [['经历', 'experience'], ['项目', 'projects'], ['优势', 'strengths']];
  const selectedFit = roleFits.find(item => item.id === activeFit) || roleFits[0];
  const selectedLab = productLabs.find(item => item.id === activeLab) || productLabs[0];

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

  return <div className="site">
    <div className={`copy-toast ${copiedContact ? 'is-visible' : ''}`} role="status" aria-live="polite"><Check size={17} /><span>{copiedContact === 'email' ? '邮箱已复制' : copiedContact === 'phone' ? '电话号码已复制' : ''}</span></div>
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
      <a className="brand" href="#top">张峻豪<span>/</span>27届应届毕业生</a>
      <button className="menu" aria-label="打开导航" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'show' : ''}>
        {nav.map(([text, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{text}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>联系我 <ArrowUpRight size={15} /></a>
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
          <p className="eyebrow">ZHANG JUNHAO / 2027届管理培训生候选人</p>
          <h1><span>懂业务，能协同。</span><br /><em>把问题推到结果。</em></h1>
          <p className="hero-desc">香港浸会大学商业管理硕士<br />具备 AI 产品、用户增长与跨境项目实践</p>
          <div className="hero-fit" aria-label="面试官快速了解我">
            <div className="hero-fit-top"><strong><span>面试官快速了解</span><small>QUICK VIEW</small></strong><div className="hero-fit-tabs" role="tablist" aria-label="选择需要了解的能力">{roleFits.map(item => <button key={item.id} type="button" role="tab" aria-selected={activeFit === item.id} className={activeFit === item.id ? 'is-active' : ''} onClick={() => setActiveFit(item.id)}>{item.label}</button>)}</div></div>
            <p key={selectedFit.id} className="hero-fit-copy">{selectedFit.summary}</p>
          </div>
          <div key={`${selectedFit.id}-proof`} className="hero-proof" aria-live="polite" aria-label={`${selectedFit.label}的核心证据`}>
            {selectedFit.proof.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
          </div>
        </div>
        <ProfileCard
          className="hero-profile-card"
          name="张峻豪"
          title="2027届管理培训生候选人"
          handle="ZhangJunhao"
          status="深圳 / 香港 · 已获 IANG"
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
        <div className="section-label">01 / 个人经历</div>
        <div className="intro-grid">
          <div className="portrait-wrap"><img src={`${A}profile-stage.jpg`} alt="张峻豪在活动现场" loading="lazy" decoding="async" /><span className="portrait-note">ON STAGE / IN MOTION<br />BUILT FOR MOMENTUM</span></div>
          <div className="intro-text"><p className="kicker">关于我 / ABOUT</p><h2>跨文化、跨职能，<br /><span>也跨过从 0 到 1。</span></h2><p>我是张峻豪，27届应届毕业生，一名以商业结果为导向的管培生候选人。香港浸会大学商业管理硕士，拥有 AI 产品、跨境营销与用户运营的复合实践，习惯在不确定中拆解问题、组织协作，并把想法推进到可验证的结果。</p><div className="contact-line"><div className="contact-copy-item"><span className="contact-value"><Mail size={17} /> zhangjunhao03@foxmail.com</span><button type="button" onClick={() => copyContact('email', 'zhangjunhao03@foxmail.com')} aria-label={copiedContact === 'email' ? '邮箱已复制' : '复制邮箱'} title={copiedContact === 'email' ? '已复制' : '复制邮箱'}>{copiedContact === 'email' ? <Check size={14} /> : <Copy size={14} />}</button></div><div className="contact-copy-item"><span className="contact-value"><Phone size={17} /> +86 151 6333 8268</span><button type="button" onClick={() => copyContact('phone', '+86 151 6333 8268')} aria-label={copiedContact === 'phone' ? '电话号码已复制' : '复制电话号码'} title={copiedContact === 'phone' ? '已复制' : '复制电话'}>{copiedContact === 'phone' ? <Check size={14} /> : <Copy size={14} />}</button></div></div><div className="availability-line"><span>27届应届毕业生</span><span>意向城市：深圳 / 香港</span><span>已获得香港 IANG 签证</span><span>已完成课程，可快速到岗</span></div></div>
        </div>
        <div className="work-block">
          <div className="work-heading"><p className="kicker">WORK EXPERIENCE / 实习经历</p><h3>用结果说明<br />我做过什么。</h3><p>悬浮工牌即可切换对应经历；点击右侧经历可继续查看职责、方法和完整交付。</p><div className="badge-deck" aria-label="核心实习经历工牌">{workBadges.map((badge, index) => <button className={`work-badge badge-${badge.tone} ${activeWork === index ? 'is-active' : ''}`} key={badge.short} type="button" onMouseEnter={() => setActiveWork(index)} onFocus={() => setActiveWork(index)} onClick={() => setActiveWork(index)} aria-label={`查看${badge.company}实习经历`}><span className="badge-lanyard" /><span className="badge-clip" /><span className="badge-face"><span className="badge-brand">{badge.short}</span><img src={`${M}badge-portrait.png`} alt="张峻豪证件照" loading="lazy" decoding="async" /><span className="badge-name">张峻豪<small>ZHANG JUNHAO</small></span><span className="badge-role">{badge.role}</span><span className="badge-company">{badge.company}<small>{badge.period}</small></span></span></button>)}</div></div>
          <div className="work-list">{workExperience.map((job, index) => <details className="work-item" key={job.company} open={activeWork === index}><summary onClick={(event) => { event.preventDefault(); setActiveWork(index); }}><span className="work-index">0{index + 1}</span><div><p>{job.period}</p><h4>{job.company}</h4><strong>{job.role}</strong></div><span className="work-toggle">＋</span></summary><div className="work-body"><p>{job.summary}</p><div className="metric-pills">{job.metrics.map(metric => <span key={metric}>{metric}</span>)}</div><p>{job.detail}</p></div></details>)}</div>
        </div>
        <div className="stats"><div><b>3</b><span>产品与市场实习</span></div><div><b>3</b><span>完整创业项目</span></div><div><b>3</b><span>核心竞赛成果</span></div><div><b>6.5</b><span>IELTS / 英语工作能力</span></div></div>
        <div className="career-map"><div className="career-title"><span className="kicker">CAREER MAP / 01—05</span><h3>每一次经历，<br /><span>都在靠近“经营全局”。</span></h3></div><div className="career-item"><b>2025—26</b><strong>商业管理硕士 · 香港浸会大学</strong><p>GPA 3.54 / 4.00 · 前 10% · 全英授课</p></div><div className="career-item"><b>2024—25</b><strong>金山西山居 · AI 产品实习</strong><p>推动 AI 产品从 0 到 1，完成 10+ 次需求访谈与 10+ 轮测试。</p></div><div className="career-item"><b>2023—24</b><strong>新东方 · 跨境市场营销实习</strong><p>执行 10+ 场跨境活动，带来 Leads 增长 40%。</p></div><div className="career-item"><b>2023</b><strong>趣丸科技 · TT 语音产品实习</strong><p>推动活跃提升 24%，累计触达 10W+ 用户。</p></div><div className="career-item"><b>2022—26</b><strong>项目 / 竞赛 / 领导力</strong><p>3 个从 0 到 1 项目 · 省级竞赛奖项 · 多次团队路演。</p></div></div>
        <div className="education-grid"><BorderGlow><article><img className="education-emblem emblem-hkbu" src={`${M}hkbu-emblem-round.png`} alt="香港浸会大学校徽" loading="lazy" /><p className="kicker">EDUCATION / 01</p><span>香港 · 已毕业 / 11 月领取毕业证</span><h3>香港浸会大学 <em>纯英授课</em></h3><strong>商业管理硕士 · GPA 3.54 / 4.00 · 前 10%</strong><p>创业与创新企业发展、数字化转型、商业数据分析、高级管理市场营销；全英授课。</p></article></BorderGlow><BorderGlow><article><img className="education-emblem emblem-must" src={`${M}must-emblem.svg`} alt="澳门科技大学校徽" loading="lazy" /><p className="kicker">EDUCATION / 02</p><span>澳门 · 2021—2025</span><h3>澳门科技大学 <em>纯英授课</em></h3><strong>工商管理学士 · 专业前 20%</strong><p>管理、市场营销、财务管理、组织行为与战略管理；篮球社、音乐协会宣传部负责人。</p></article></BorderGlow><BorderGlow><aside><p className="kicker">TOOLS / CERTIFICATES</p><div><span>IELTS 6.5</span><span>阿里云 SQL</span><span>Excel / 数据看板</span><span>Axure / 墨刀 / Figma</span><span>Coze / Dify / DeepSeek</span><span>PRD / MRD</span></div></aside></BorderGlow></div>
        <div className="proof-grid"><BorderGlow><article><p className="kicker">SELECTED HONORS</p><h3>用赛事检验方案</h3><ul><li>CTF Life 香港商赛第四名 / 150+ 队伍</li><li>全国大学生电子商务“三创赛”省级银奖</li><li>SkillShare BUS 课程满分 / HSITP 优秀项目路演</li></ul></article></BorderGlow><BorderGlow><article><p className="kicker">LEADERSHIP</p><h3>把团队带到结果</h3><ul><li>3 次担任项目负责人，统筹产品、商业与路演交付</li><li>澳门科技大学篮球社部长，三届校际赛累计吸引 300+ 人</li><li>音乐协会宣传部部长，参与千人级活动传播与组织</li></ul></article></BorderGlow></div>
        <BorderGlow><section className="interest-panel" aria-labelledby="interest-title"><div className="interest-intro"><p className="kicker">BEYOND WORK / 工作之外</p><h3 id="interest-title">保持热爱，<br /><span>也保持感知。</span></h3><p>兴趣让我在工作之外持续练习协作、耐力与观察。</p></div><div className="interest-list"><article><div className="interest-icon"><BasketballIcon /></div><span>01 / TEAM</span><h4>篮球</h4><p>团队协作 · 竞技意识</p></article><article><div className="interest-icon"><Bike size={29} /></div><span>02 / ENDURANCE</span><h4>骑行</h4><p>耐力积累 · 目标感</p></article><article><div className="interest-icon"><Camera size={29} /></div><span>03 / OBSERVE</span><h4>摄影</h4><p>观察细节 · 审美表达</p></article></div></section></BorderGlow>
      </section>

      <section className="projects section" id="projects">
        <div className="motion-chapter" aria-hidden="true">SELECTED WORK</div>
        <div className="section-label">02 / INTERACTIVE PRODUCT LAB</div>
        <div className="section-head"><h2>不只看界面，<br /><span>直接体验产品。</span></h2><p>选择项目并点击中间的手机，即可像真实 App 一样操作；按 ESC 随时退出交互。</p></div>
        <div className={`product-lab lab-theme-${selectedLab.theme}`}>
          <div className="lab-backdrop-word" aria-hidden="true">{selectedLab.tab}</div>
          <div className="lab-selector-head"><div><span>CHOOSE A PRODUCT</span><strong>选择一个项目，进入真实原型</strong></div><p><b>03</b> LIVE<br />PROTOTYPES</p></div>
          <div className="lab-tabs" role="tablist" aria-label="选择交互项目">
            {productLabs.map(item => <button key={item.id} type="button" role="tab" aria-selected={activeLab === item.id} className={`lab-tab-${item.id} ${activeLab === item.id ? 'is-active' : ''}`} onClick={() => { setActiveLab(item.id); setLabStarted(false); }}><span className="lab-tab-number">{item.number}</span><span className="lab-tab-copy"><strong>{item.tab}</strong><small>{item.result}</small><em>{activeLab === item.id ? '正在展示' : '点击切换'} <ArrowUpRight size={12} /></em></span><img src={item.cover} alt="" loading="lazy" /></button>)}
          </div>
          <article className="lab-copy" key={`${selectedLab.id}-copy`}>
            <p className="kicker">{selectedLab.number} / LIVE CASE</p>
            <h3>{selectedLab.title}</h3>
            <p>{selectedLab.intro}</p>
            <div className="lab-result"><span>PROJECT RESULT</span><strong>{selectedLab.result}</strong></div>
            <p className="lab-role">我的职责 · {selectedLab.role}</p>
            <button type="button" className="lab-case-button" onClick={() => setActiveCase(cases[selectedLab.id])}>查看完整案例 <ArrowUpRight size={17} /></button>
          </article>
          <div className={`lab-stage ${labStarted ? 'is-interacting' : ''}`} key={`${selectedLab.id}-stage`}>
            <div className="lab-stage-head"><span><i /> LIVE PROTOTYPE</span><strong>{selectedLab.tab}</strong></div>
            <iframe title={`${selectedLab.tab} 可交互产品原型`} src={`${P}${selectedLab.prototype}`} loading="lazy" sandbox="allow-scripts allow-forms allow-modals allow-popups" />
            {!labStarted && <button type="button" className="lab-enter" onClick={() => setLabStarted(true)}><span><Play size={21} fill="currentColor" /></span><strong>点击进入产品</strong><small>可直接点击、滑动与填写</small></button>}
            {labStarted && <button type="button" className="lab-exit" onClick={() => setLabStarted(false)}><X size={14} /> 退出交互 <kbd>ESC</kbd></button>}
          </div>
          <aside className="lab-notes" key={`${selectedLab.id}-notes`}>
            <p className="kicker">CORE EXPERIENCE</p>
            <h4>建议体验路径</h4>
            <ol>{selectedLab.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span><p>{feature}</p></li>)}</ol>
            <div className="lab-tip"><strong>操作提示</strong><p>进入交互后，页面滚动将优先留在手机内；退出后可继续浏览简历。</p></div>
          </aside>
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="motion-chapter" aria-hidden="true">CAPABILITIES</div>
        <div className="section-label">03 / 个人优势</div>
        <div className="strength-intro"><div><p className="kicker">WHY ME / 复合型能力</p><h2>既能看全局，<br /><span>也能把事情做完。</span></h2></div><p>我的优势不是单一技能，而是把产品、数据、商业判断和团队协作连接成完整的推进链路。</p></div>
        <div className="strength-cards">
          <BorderGlow><article className="strength-card strength-card-featured"><span>01 / PRODUCT</span><h3>0—1 产品落地</h3><strong>3 段产品与市场实习</strong><p>从需求访谈、竞品研究和 PRD，到跨团队交付、上线验证与迭代复盘。</p><div>10+ PRD · 10+ 需求评审 · 3 个完整创业项目</div></article></BorderGlow>
          <BorderGlow><article className="strength-card"><span>02 / DATA</span><h3>数据驱动增长</h3><strong>&gt;95%</strong><p>建立指标、埋点和效果评估体系，用数据定位问题并支持业务决策。</p><div>Leads +40% · 玩法使用率 +24%</div></article></BorderGlow>
          <BorderGlow><article className="strength-card"><span>03 / BUSINESS</span><h3>商业化判断</h3><strong>LTV / CAC &gt;10</strong><p>熟悉 PEST、SWOT、TAM-SAM-SOM 与财务预测，把用户价值落到商业闭环。</p><div>香港商赛第四名 · BUS 课程满分</div></article></BorderGlow>
          <BorderGlow><article className="strength-card"><span>04 / LEADERSHIP</span><h3>跨文化协同</h3><strong>中英双语</strong><p>能够在跨专业、跨时区和中英文语境中对齐目标，推动团队高质量交付。</p><div>3 次项目负责人 · 学生组织部长</div></article></BorderGlow>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="motion-chapter" aria-hidden="true">CONTACT</div>
        <BorderGlow glowRadius={12}><div className="contact-panel">
          <div className="contact-main"><p className="eyebrow">04 / CONTACT</p><p className="contact-en">READY FOR THE NEXT MOVE.</p><h2>期待在深圳或香港，<br />把下一件事做成。</h2><p className="contact-note">27届应届毕业生 · 已完成课程 · 可快速到岗</p><div className="contact-actions"><div className="contact-action-row"><span><Mail size={18} /> zhangjunhao03@foxmail.com</span><button type="button" onClick={() => copyContact('email', 'zhangjunhao03@foxmail.com')} aria-label={copiedContact === 'email' ? '邮箱已复制' : '复制邮箱'} title={copiedContact === 'email' ? '已复制' : '复制邮箱'}>{copiedContact === 'email' ? <Check size={16} /> : <Copy size={16} />}</button></div><div className="contact-action-row"><span><Phone size={18} /> +86 151 6333 8268</span><button type="button" onClick={() => copyContact('phone', '+86 151 6333 8268')} aria-label={copiedContact === 'phone' ? '电话号码已复制' : '复制电话号码'} title={copiedContact === 'phone' ? '已复制' : '复制电话'}>{copiedContact === 'phone' ? <Check size={16} /> : <Copy size={16} />}</button></div></div></div>
          <aside className="contact-qr"><p className="kicker">WECHAT / 微信</p><img src={`${M}wechat-qr.png`} alt="张峻豪微信二维码" loading="lazy" decoding="async" /><strong>扫码添加微信</strong><span>请备注“招聘 / 公司名称”</span></aside>
        </div></BorderGlow>
        <div className="contact-footer"><span>张峻豪 / 管培生</span><span>27届应届毕业生</span><span><MapPin size={14} /> 深圳 · 香港</span></div>
      </section>
    </main>

    {activeCase && <Modal data={activeCase} onClose={() => setActiveCase(null)} />}
  </div>;
}

function Project({ image, theme, tag, title, text, result, onClick }) {
  const content = <><div className="project-image"><img src={A + image} alt={title} loading="lazy" decoding="async" /><span>{onClick ? <Play size={20} /> : <ArrowUpRight />}</span></div><p className="tag">{tag}</p><h3>{title}</h3><p>{text}</p><strong className="project-result">{result}</strong></>;
  const className = `project project-${theme || 'default'}`;
  const card = onClick ? <button className={`${className} project-button`} onClick={onClick} aria-label={`查看${title}`}>{content}</button> : <article className={className}>{content}</article>;
  return <BorderGlow glowRadius={8}>{card}</BorderGlow>;
}

function Modal({ data, onClose }) {
  return <div className="modal" role="dialog" aria-modal="true" aria-label={data.title} onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="case-modal"><button className="modal-close" onClick={onClose} aria-label="关闭"><X /></button><div className="case-heading"><div><p className="kicker">{data.kicker}</p><h2>{data.title}</h2><p>{data.intro}</p></div><dl><div><dt>我的职责</dt><dd>{data.role}</dd></div><div><dt>项目结果</dt><dd>{data.result}</dd></div></dl></div><p className="media-label"><Play size={14} /> APP INTERACTION / 产品交互演示</p><video controls playsInline preload="none" poster={data.images[0]}><source src={data.video} type="video/mp4" /></video>{data.evidenceVideo && <><p className="media-label evidence-label"><Play size={14} /> COMPETITION / 比赛记录</p><video className="evidence-video" controls playsInline preload="none" poster={data.images[1]}><source src={data.evidenceVideo} type="video/mp4" /></video></>}<p className="media-label gallery-label">GALLERY / 项目现场</p><div className={`case-gallery images-${data.images.length}`}>{data.images.map((image, index) => <a href={image} target="_blank" rel="noreferrer" key={image}><img src={image} alt={`${data.title}现场照片 ${index + 1}`} loading="lazy" decoding="async" /></a>)}</div></div></div>;
}

createRoot(document.getElementById('root')).render(<App />);
