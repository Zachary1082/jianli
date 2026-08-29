import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, Phone, MapPin, Menu, X, Play } from 'lucide-react';
import Grainient from './Grainient/Grainient';
import BorderGlow from './BorderGlow';
import './styles.css';

const A = `${import.meta.env.BASE_URL}assets/`;
const M = `${A}media/`;

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
  {
    company: '深圳精准欧易文化有限公司',
    role: '产品经理实习生',
    period: '2022.10—2023.06',
    summary: '参与考研小程序从市场研究、产品设计到上线营收的完整链路。',
    metrics: ['20+ 份 PRD/MRD', '完成上线营收', '0—1 产品落地'],
    detail: '调研考研缝隙市场并完成趋势与竞品分析，输出商业计划；负责产品运营、体验评审和投融模式研究，协同开发测试推动产品上线。',
  },
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [activeCase, setActiveCase] = React.useState(null);
  const [navScrolled, setNavScrolled] = React.useState(false);
  const nav = [['经历', 'experience'], ['项目', 'projects'], ['优势', 'strengths']];

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
    const titleOffset = window.innerWidth > 1000 ? '11vw' : '0px';
    play(document.querySelector('.nav'), [{ opacity: 0, translate: '0 -42px' }, { opacity: 1, translate: '0 0' }], { duration: 1050, delay: 120, easing: ease });
    play(hero?.querySelector('.hero-motion-shell'), [{ opacity: 0, clipPath: 'polygon(92% 0,100% 0,100% 100%,84% 100%)' }, { opacity: .22, clipPath: 'polygon(67% 0,100% 0,100% 100%,45% 100%)' }], { duration: 1900, delay: 120, easing: ease });
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
      <a className="brand" href="#top">JUNHAO<span>/</span>27届应届毕业生</a>
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
        <div className="hero-depth" aria-hidden="true">
          <span>FROM IDEA / 01</span>
          <div className="depth-stage"><strong data-text="TO IMPACT">TO IMPACT</strong></div>
          <em>BUILD · TEST · DELIVER</em>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">2027 GRADUATE · MANAGEMENT TRAINEE · ZHANG JUNHAO</p>
          <h1><span>让想法</span><br /><em>成为结果。</em></h1>
          <p className="hero-desc">商业管理硕士 · 管培生候选人<br />产品 × 增长 × 跨文化协同</p>
          <div className="hero-actions"><a className="circle-link" href="#experience">查看我的经历 <ArrowUpRight /></a></div>
        </div>
        <BorderGlow><aside className="candidate-card">
          <div className="candidate-photo"><img src={`${M}stage-portrait.jpg`} alt="张峻豪在 iCare 商赛现场路演" fetchPriority="high" decoding="async" /><span className="availability"><i /> 27届应届毕业生 · 可快速到岗</span></div>
          <div className="candidate-details"><p>ZHANG JUNHAO / 张峻豪</p><strong>香港浸会大学<br />商业管理硕士</strong><div><span>27届应届毕业生</span><span>深圳 / 香港</span><span>GPA 3.54 / 4.00</span></div></div>
        </aside></BorderGlow>
        <div className="hero-meta"><span>27届应届毕业生 / 快速到岗</span><span>SHENZHEN / HONG KONG</span><span>GPA 3.54 / 4.00</span></div>
        <div className="hero-marquee" aria-hidden="true">STRATEGY · PRODUCT · GROWTH · EXECUTION · STRATEGY · PRODUCT · GROWTH · EXECUTION ·</div>
      </section>

      <section className="intro section" id="experience">
        <div className="motion-chapter" aria-hidden="true">EXPERIENCE</div>
        <div className="section-label">01 / 个人经历</div>
        <div className="intro-grid">
          <div className="portrait-wrap"><img src={`${A}profile-stage.jpg`} alt="张峻豪在活动现场" loading="lazy" decoding="async" /><span className="portrait-note">ON STAGE / IN MOTION<br />BUILT FOR MOMENTUM</span></div>
          <div className="intro-text"><p className="kicker">关于我 / ABOUT</p><h2>跨文化、跨职能，<br /><span>也跨过从 0 到 1。</span></h2><p>我是张峻豪，27届应届毕业生，一名以商业结果为导向的管培生候选人。香港浸会大学商业管理硕士，拥有 AI 产品、跨境营销与用户运营的复合实践，习惯在不确定中拆解问题、组织协作，并把想法推进到可验证的结果。</p><div className="contact-line"><a href="mailto:zhangjunhao03@foxmail.com"><Mail size={17} /> zhangjunhao03@foxmail.com</a><a href="tel:+8615156338268"><Phone size={17} /> +86 151 6333 8268</a></div><div className="availability-line"><span>27届应届毕业生</span><span>意向城市：深圳 / 香港</span><span>已获得香港 IANG 签证</span><span>已完成课程，可快速到岗</span><span>毕业证：11 月领取</span></div></div>
        </div>
        <div className="work-block">
          <div className="work-heading"><p className="kicker">WORK EXPERIENCE / 实习经历</p><h3>用结果说明<br />我做过什么。</h3><p>默认展示最重要的业务结果；点击每段经历可继续查看职责、方法和完整交付。</p></div>
          <div className="work-list">{workExperience.map((job, index) => <details className="work-item" key={job.company} open={index === 0}><summary><span className="work-index">0{index + 1}</span><div><p>{job.period}</p><h4>{job.company}</h4><strong>{job.role}</strong></div><span className="work-toggle">＋</span></summary><div className="work-body"><p>{job.summary}</p><div className="metric-pills">{job.metrics.map(metric => <span key={metric}>{metric}</span>)}</div><p>{job.detail}</p></div></details>)}</div>
        </div>
        <div className="stats"><div><b>4</b><span>产品与市场实习</span></div><div><b>3</b><span>完整创业项目</span></div><div><b>3</b><span>核心竞赛成果</span></div><div><b>6.5</b><span>IELTS / 英语工作能力</span></div></div>
        <div className="career-map"><div className="career-title"><span className="kicker">CAREER MAP / 01—05</span><h3>每一次经历，<br /><span>都在靠近“经营全局”。</span></h3></div><div className="career-item"><b>2025—26</b><strong>商业管理硕士 · 香港浸会大学</strong><p>GPA 3.54 / 4.00 · 前 10% · 全英授课</p></div><div className="career-item"><b>2024—25</b><strong>金山西山居 · AI 产品实习</strong><p>推动 AI 产品从 0 到 1，完成 10+ 次需求访谈与 10+ 轮测试。</p></div><div className="career-item"><b>2023—24</b><strong>新东方 · 跨境市场营销实习</strong><p>执行 10+ 场跨境活动，带来 Leads 增长 40%。</p></div><div className="career-item"><b>2023</b><strong>趣丸科技 · TT 语音产品实习</strong><p>推动活跃提升 24%，累计触达 10W+ 用户。</p></div><div className="career-item"><b>2022—26</b><strong>项目 / 竞赛 / 领导力</strong><p>3 个从 0 到 1 项目 · 省级竞赛奖项 · 多次团队路演。</p></div></div>
        <div className="education-grid"><BorderGlow><article><p className="kicker">EDUCATION / 01</p><span>香港 · 已毕业 / 11 月领取毕业证</span><h3>香港浸会大学</h3><strong>商业管理硕士 · GPA 3.54 / 4.00 · 前 10%</strong><p>创业与创新企业发展、数字化转型、商业数据分析、高级管理市场营销；全英授课。</p></article></BorderGlow><BorderGlow><article><p className="kicker">EDUCATION / 02</p><span>澳门 · 2021—2025</span><h3>澳门科技大学</h3><strong>工商管理学士 · 专业前 20%</strong><p>管理、市场营销、财务管理、组织行为与战略管理；篮球社、音乐协会宣传部负责人。</p></article></BorderGlow><BorderGlow><aside><p className="kicker">TOOLS / CERTIFICATES</p><div><span>IELTS 6.5</span><span>阿里云 SQL</span><span>Excel / 数据看板</span><span>Axure / 墨刀 / Figma</span><span>Coze / Dify / DeepSeek</span><span>PRD / MRD</span></div></aside></BorderGlow></div>
        <div className="proof-grid"><BorderGlow><article><p className="kicker">SELECTED HONORS</p><h3>用赛事检验方案</h3><ul><li>CTF Life 香港商赛第四名 / 150+ 队伍</li><li>全国大学生电子商务“三创赛”省级银奖</li><li>SkillShare BUS 课程满分 / HSITP 优秀项目路演</li></ul></article></BorderGlow><BorderGlow><article><p className="kicker">LEADERSHIP</p><h3>把团队带到结果</h3><ul><li>3 次担任项目负责人，统筹产品、商业与路演交付</li><li>澳门科技大学篮球社部长，三届校际赛累计吸引 300+ 人</li><li>音乐协会宣传部部长，参与千人级活动传播与组织</li></ul></article></BorderGlow></div>
      </section>

      <section className="projects section" id="projects">
        <div className="motion-chapter" aria-hidden="true">SELECTED WORK</div>
        <div className="section-label">02 / 精选项目 · 点击查看案例</div>
        <div className="section-head"><h2>把想法，<br /><span>推到现实里。</span></h2><p>每张项目卡片均可打开。你可以直接观看产品视频、查看比赛现场与项目结果。</p></div>
        <div className="project-grid">
          <Project image="media/icare-cover.jpg" theme="icare" tag="PRODUCT · STRATEGY" title="iCare / 港漂生活与金融生态平台" text="兴趣社交、财富赋权、健康管理与真人规划服务的一站式平台。" result="香港商赛第四名 · 150+ 队伍" onClick={() => setActiveCase(cases.icare)} />
          <Project image="media/skillshare-phone.png" theme="skillshare" tag="BUSINESS · INNOVATION" title="SkillShare / 技能交换社区" text="用技能换技能，并通过价值补差与托管机制解决供需和信任问题。" result="BUS 满分 · HSITP 路演" onClick={() => setActiveCase(cases.skillshare)} />
          <Project image="media/gaokao-phone.png" theme="gaokao" tag="AI · USER INSIGHT" title="高考择学通 / AI 志愿导航" text="职业测评、趋势分析、智能填报和 AI 问答组成的志愿决策平台。" result="全国三创赛省级银奖" onClick={() => setActiveCase(cases.gaokao)} />
        </div>
      </section>

      <section className="strengths section" id="strengths">
        <div className="motion-chapter" aria-hidden="true">CAPABILITIES</div>
        <div className="section-label">03 / 个人优势</div>
        <div className="strength-intro"><div><p className="kicker">WHY ME / 复合型能力</p><h2>既能看全局，<br /><span>也能把事情做完。</span></h2></div><p>我的优势不是单一技能，而是把产品、数据、商业判断和团队协作连接成完整的推进链路。</p></div>
        <div className="strength-cards">
          <BorderGlow><article className="strength-card strength-card-featured"><span>01 / PRODUCT</span><h3>0—1 产品落地</h3><strong>4 段产品与市场实习</strong><p>从需求访谈、竞品研究和 PRD，到跨团队交付、上线验证与迭代复盘。</p><div>10+ PRD · 10+ 需求评审 · 3 个完整创业项目</div></article></BorderGlow>
          <BorderGlow><article className="strength-card"><span>02 / DATA</span><h3>数据驱动增长</h3><strong>&gt;95%</strong><p>建立指标、埋点和效果评估体系，用数据定位问题并支持业务决策。</p><div>Leads +40% · 玩法使用率 +24%</div></article></BorderGlow>
          <BorderGlow><article className="strength-card"><span>03 / BUSINESS</span><h3>商业化判断</h3><strong>LTV / CAC &gt;10</strong><p>熟悉 PEST、SWOT、TAM-SAM-SOM 与财务预测，把用户价值落到商业闭环。</p><div>香港商赛第四名 · BUS 课程满分</div></article></BorderGlow>
          <BorderGlow><article className="strength-card"><span>04 / LEADERSHIP</span><h3>跨文化协同</h3><strong>中英双语</strong><p>能够在跨专业、跨时区和中英文语境中对齐目标，推动团队高质量交付。</p><div>3 次项目负责人 · 学生组织部长</div></article></BorderGlow>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="motion-chapter" aria-hidden="true">CONTACT</div>
        <BorderGlow glowRadius={12}><div className="contact-panel">
          <div className="contact-main"><p className="eyebrow">04 / CONTACT</p><p className="contact-en">READY FOR THE NEXT MOVE.</p><h2>期待在深圳或香港，<br />把下一件事做成。</h2><p className="contact-note">27届应届毕业生 · 已完成课程 · 可快速到岗</p><div className="contact-actions"><a href="mailto:zhangjunhao03@foxmail.com"><Mail size={18} /> zhangjunhao03@foxmail.com <ArrowUpRight size={18} /></a><a href="tel:+8615156338268"><Phone size={18} /> +86 151 6333 8268</a></div></div>
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
