import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, Copy, Globe2, Languages, Mail, MapPin, Phone, Send, TrendingUp } from 'lucide-react';
import Grainient from './Grainient/Grainient/Grainient';
import BorderGlow from './BorderGlow';
import './styles.css';

// All media for this site is deployed under the site's own base path.
// Using BASE_URL keeps the paths correct both locally and on GitHub Pages.
const A = `${import.meta.env.BASE_URL}assets/media/`;

const experiences = [
  {
    id: 'xdf', number: '01', company: '新东方教育科技集团', english: 'NEW ORIENTAL', role: '跨境市场营销实习生', period: '2023.09 — 2024.02',
    lead: '为海外教育业务构建从获客、内容到复盘的增长闭环。',
    bullets: ['策划并执行 10+ 场跨境线上活动，覆盖内容策划、渠道分发与复盘优化。', '搭建中英双语 SEO 关键词与多语言内容矩阵，建立可追踪的海外获客资产。', '通过市场数据看板和周度复盘持续优化转化漏斗，协同跨时区团队推进落地。'],
    metrics: [['+25%', '业务分销率'], ['+40%', '有效线索 Leads'], ['10+', '跨境营销活动']],
  },
  {
    id: 'kingsoft', number: '02', company: '珠海金山办公软件有限公司', english: 'KINGSOFT · SEASUN', role: 'AI 产品经理实习生', period: '2024.11 — 2025.03',
    lead: '以产品与数据能力支持复杂协作，建立可复用的分析与交付机制。',
    bullets: ['推动 AI 模块从 0 到 1，完成 10+ 份 PRD 与 10+ 次需求评审。', '搭建全局埋点与效果评估体系，关键准确率及覆盖率达到 95% 以上。', '统筹前端、后端、UI 与测试的交付节奏，积累跨团队项目推进经验。'],
    metrics: [['>95%', '准确率与覆盖率'], ['10+', 'PRD 输出'], ['0→1', 'AI 模块上线']],
  },
  {
    id: 'quwan', number: '03', company: '广州趣丸网络科技 · TT 语音', english: 'QUWAN · TT VOICE', role: '产品经理实习生', period: '2023.06 — 2023.09',
    lead: '从用户、竞品和数据中拆解机会，并转化为可验证的增长方案。',
    bullets: ['围绕用户活跃与商业化完成市场与竞品研究，拆解 5 款核心竞品。', '输出 10+ 份 PRD / MRD，参与运营后台与游戏化玩法的迭代。', '通过分层触达与玩法优化带动功能使用率提升，累计触达 10W+ 核心用户。'],
    metrics: [['+24%', '玩法使用率'], ['10W+', '核心用户触达'], ['5', '竞品深度拆解']],
  },
];

const capabilities = [
  ['01', '海外市场增长', '从目标用户、搜索词与内容渠道切入，构建可量化的获客与转化路径。', 'SEO · 内容矩阵 · 渠道增长'],
  ['02', '英语与跨文化协同', 'IELTS 6.5，全英授课背景；可将英文作为日常工作语言，并适应跨时区协作。', 'IELTS 6.5 · English-taught MSc'],
  ['03', '商业分析与推进', '能把市场洞察、竞品信息和业务目标转成可执行方案，并以数据持续复盘。', 'Research · Dashboard · Delivery'],
];

function App() {
  const [active, setActive] = useState(0);
  const [activeNav, setActiveNav] = useState('top');
  const [copied, setCopied] = useState('');
  const selected = experiences[active];
  const navigateTo = (id) => {
    setActiveNav(id);
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  useEffect(() => {
    const ids = ['experience', 'capability', 'contact'];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveNav(visible.target.id);
    }, { threshold: .35 });
    ids.forEach(id => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  const copy = async (type, value) => {
    try { await navigator.clipboard.writeText(value); } catch { const input = document.createElement('input'); input.value = value; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove(); }
    setCopied(type); setTimeout(() => setCopied(''), 1800);
  };
  return <div className="site">
    <div className="backdrop"><Grainient color1="#071d3b" color2="#0f3954" color3="#1c573e" timeSpeed={0.18} warpStrength={1.2} warpFrequency={4.5} warpSpeed={1.2} warpAmplitude={40} blendSoftness={0.1} rotationAmount={140} noiseScale={2} grainAmount={0.08} grainScale={2} grainAnimated={false} contrast={1.4} gamma={1} saturation={0.9} centerX={0} centerY={0} zoom={0.9} /></div>
    <header className="nav"><button type="button" className="brand" onClick={() => navigateTo('top')}>张峻豪 <span>/</span> GLOBAL TRADE</button><nav><button type="button" className={activeNav === 'experience' ? 'is-current' : ''} onClick={() => navigateTo('experience')}>经历</button><button type="button" className={activeNav === 'capability' ? 'is-current' : ''} onClick={() => navigateTo('capability')}>能力</button><button type="button" className={activeNav === 'contact' ? 'is-current' : ''} onClick={() => navigateTo('contact')}>联系我</button><button type="button" className="nav-cta" onClick={() => navigateTo('contact')}>获取简历 <ArrowUpRight size={15}/></button></nav></header>
    <main id="top">
      <section className="hero">
        <div className="hero-video"><img src={`${A}profile-stage.jpg`} alt="张峻豪" /></div><div className="hero-fade"/><div className="world-lines"/>
        <div className="hero-copy"><p className="eyebrow"><Globe2 size={15}/> GLOBAL MARKET / TRADE CANDIDATE</p><h1>懂市场，<br/><em>也能把增长落地。</em></h1><p className="hero-desc">面向海外市场与外贸拓展岗位。<br/>以双语沟通、增长实践和业务分析，连接市场机会与可验证的结果。</p><div className="hero-actions"><a href="#experience">查看跨境经历 <ArrowUpRight size={17}/></a><span>深圳 / 香港 · 可快速到岗</span></div></div>
        <aside className="trade-card"><div className="card-top"><span className="live-dot"/> AVAILABLE FOR GLOBAL TRADE</div><h2>张峻豪</h2><p>GLOBAL MARKET<br/>&amp; TRADE CANDIDATE</p><div className="card-rule"/><div className="card-data"><span>LANGUAGE</span><strong>CN / EN</strong><span>ENGLISH</span><strong>IELTS 6.5</strong><span>LOCATION</span><strong>SHENZHEN · HONG KONG</strong></div></aside>
        <div className="hero-bottom"><span>MARKET ENTRY</span><span>SEO GROWTH</span><span>CROSS-CULTURAL COLLABORATION</span><span>BUSINESS ANALYSIS</span></div>
      </section>

      <section className="section profile" id="experience"><p className="section-number">01 / PROFILE</p><div className="profile-grid"><div><p className="eyebrow">WHY GLOBAL TRADE</p><h2>把市场信息，<br/><em>变成增长动作。</em></h2><p className="body-copy">香港浸会大学商业管理硕士，全英授课背景。拥有跨境市场营销、AI 产品和用户增长实践；习惯从用户、渠道与数据中识别问题，再通过内容、协作和复盘将方案推向结果。</p><div className="quick-facts"><span><Languages size={18}/> 英文作为日常工作语言</span><span><Send size={18}/> 10+ 场跨境活动执行</span><span><TrendingUp size={18}/> Leads 增长 40%</span></div></div><div className="profile-image"><img src={`${A}profile-stage.jpg`} alt="张峻豪在活动现场"/><div><b>2027</b><span>GRADUATE<br/>CANDIDATE</span></div></div></div></section>

      <section className="section experience"><p className="section-number">02 / EXPERIENCE</p><div className="section-heading"><div><p className="eyebrow">PROOF OF EXECUTION</p><h2>跨境增长不是概念，<br/><em>是可以复盘的结果。</em></h2></div><p>选择一段经历，查看我在市场、协作和结果上的具体投入。</p></div><div className="experience-shell"><aside className="experience-tabs">{experiences.map((item, index) => <button key={item.id} className={index === active ? 'active' : ''} onClick={() => setActive(index)}><small>{item.number}</small><strong>{item.english}</strong><span>{item.role}</span><ArrowUpRight size={17}/></button>)}</aside><article className="experience-detail" key={selected.id}><div className="detail-meta"><span>{selected.number} / {selected.period}</span><span>{selected.english}</span></div><h3>{selected.company}</h3><strong className="detail-role">{selected.role}</strong><p className="detail-lead">{selected.lead}</p><ul>{selected.bullets.map(x => <li key={x}>{x}</li>)}</ul><div className="metrics">{selected.metrics.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div></article></div></section>

      <section className="section capability" id="capability"><p className="section-number">03 / CAPABILITIES</p><div className="section-heading"><div><p className="eyebrow">CORE VALUE</p><h2>外贸岗位需要的，<br/><em>不只是“会英语”。</em></h2></div><p>我更希望用市场敏感度、跨文化协作与持续推进能力，为业务打开新的增长空间。</p></div><div className="capability-grid">{capabilities.map(([n,t,d,e]) => <BorderGlow key={n}><article><span>{n}</span><h3>{t}</h3><p>{d}</p><strong>{e}</strong></article></BorderGlow>)}</div><div className="education"><article><img src={`${A}hkbu-emblem-round.png`} alt="香港浸会大学校徽"/><div><p>EDUCATION / 01</p><h3>香港浸会大学 <em>纯英授课</em></h3><strong>商业管理硕士 · GPA 3.54 / 4.00 · 前 10%</strong><span>香港 · 2025.09 — 2026.10</span></div></article><article><img src={`${A}must-emblem.svg`} alt="澳门科技大学校徽"/><div><p>EDUCATION / 02</p><h3>澳门科技大学 <em>纯英授课</em></h3><strong>工商管理学士 · 专业前 20%</strong><span>澳门 · 2021.09 — 2025.06</span></div></article></div></section>

      <section className="contact section" id="contact"><BorderGlow><div className="contact-panel"><div><p className="eyebrow">04 / CONTACT</p><h2>期待以市场洞察与执行力，<br/><em>参与下一段全球化增长。</em></h2><p>意向岗位：外贸专员 / 海外市场营销 / 全球市场拓展</p><div className="contact-lines"><div><Mail size={18}/> zhangjunhao03@foxmail.com <button onClick={() => copy('email','zhangjunhao03@foxmail.com')} title="复制邮箱">{copied === 'email' ? <Check size={16}/> : <Copy size={16}/>}</button></div><div><Phone size={18}/> +86 151 6333 8268 <button onClick={() => copy('phone','+86 151 6333 8268')} title="复制电话">{copied === 'phone' ? <Check size={16}/> : <Copy size={16}/>}</button></div></div></div><aside><img src={`${A}wechat-qr.png`} alt="张峻豪微信二维码"/><strong>扫码添加微信</strong><span>请备注“招聘 / 公司名称”</span></aside></div></BorderGlow><footer><span>ZHANG JUNHAO / GLOBAL TRADE</span><span><MapPin size={14}/> SHENZHEN · HONG KONG</span></footer></section>
    </main>
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
