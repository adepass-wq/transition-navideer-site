const menu=document.querySelector('.menu');if(menu)menu.addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));
document.querySelectorAll('[data-report-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-report-tab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const panel=document.querySelector('[data-report-panel]');const views={summary:`<div class="metric-grid"><div class="metric"><span>TRANSFERABLE OVERLAP</span><strong>78%</strong><small>Illustrative comparison</small></div><div class="metric"><span>PREPARATION</span><strong>Moderate</strong><small>Credentials may apply</small></div><div class="metric"><span>WORK CONTEXT</span><strong>Hybrid</strong><small>Varies by employer</small></div></div><div class="ksa-bars"><h3>What already transfers</h3><div class="bar"><b>Active listening</b><div class="track"><div class="fill" style="width:88%"></div></div><span>High</span></div><div class="bar"><b>Coordination</b><div class="track"><div class="fill" style="width:74%"></div></div><span>Good</span></div><div class="bar"><b>Data fluency</b><div class="track"><div class="fill" style="width:52%"></div></div><span>Build</span></div></div>`,ksa:`<h3>Knowledge, skills and abilities</h3><p>The platform compares what Renee has used in past roles with what a target occupation calls for. Overlap is a starting point for investigation, not proof of qualification.</p><div class="content-grid"><div class="panel"><b>Already demonstrated</b><p>Customer operations, oral comprehension, active listening, coordination.</p></div><div class="panel"><b>Needs evidence or development</b><p>Regulatory knowledge, documentation systems, role-specific credentials.</p></div></div>`,context:`<h3>See the work behind the title</h3><p>Compare tasks, tools, schedules, interests, work styles, values, earnings, outlook and preparation so an appealing title becomes a realistic decision.</p><div class="notice">Figures vary by geography, employer and reporting period. The live platform identifies the source context for occupation data.</div>`,path:`<h3>My Career Path</h3><p>Save target occupations, organize development priorities, identify a mentor, plan informational interviews and keep self-care and time management visible.</p><ol><li>Investigate one credential</li><li>Schedule two informational interviews</li><li>Document evidence of transferable skills</li><li>Review the plan after 30 days</li></ol>`};panel.innerHTML=views[b.dataset.reportTab]}));
document.querySelectorAll('.choice').forEach(c=>c.addEventListener('click',()=>{c.parentElement.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));c.classList.add('selected')}));
const steps=[...document.querySelectorAll('[data-demo-step]')];const screens=[...document.querySelectorAll('[data-demo-screen]')];steps.forEach((b,i)=>b.addEventListener('click',()=>{steps.forEach(x=>x.classList.remove('active'));screens.forEach(x=>x.hidden=true);b.classList.add('active');screens[i].hidden=false}));
document.querySelectorAll('[data-save]').forEach(b=>b.addEventListener('click',()=>{b.textContent='Session saved for this preview';b.setAttribute('aria-live','polite')}));

document.querySelectorAll('body *:not(script):not(style)').forEach(element=>{
  [...element.childNodes].filter(node=>node.nodeType===Node.TEXT_NODE).forEach(node=>{
    node.textContent=node.textContent
      .replace(/Transition Navideer(?!®)/g,'Transition Navideer®')
      .replace(/Career Navideer(?!®)/g,'Career Navideer®')
      .replace(/—/g,' - ')
      .replace(/–/g,'-');
  });
});

const pageName=location.pathname.split('/').pop()||'index.html';
const makeSection=html=>{const template=document.createElement('template');template.innerHTML=html.trim();return template.content.firstElementChild};

document.querySelectorAll('.brand img').forEach(image=>{
  image.src='assets/transition-navideer-vertical-official.png';
  image.alt='Transition Navideer®';
});

const primaryNav=document.querySelector('.navlinks');
const evidenceLink=primaryNav?.querySelector('a[href="evidence.html"]');
if(primaryNav&&evidenceLink&&!primaryNav.querySelector('a[href="journey.html"]')){
  const journeyLink=document.createElement('a');
  journeyLink.href='journey.html';
  journeyLink.textContent='Try It';
  evidenceLink.before(journeyLink);
}

if(pageName==='index.html'){
  const introVideoLink=document.querySelector('.hero a[href*="youtu.be"]');
  if(introVideoLink) introVideoLink.textContent='Watch Overview';
  const instrument=document.querySelector('.instrument');
  if(instrument){
    const brandMark=document.createElement('img');
    brandMark.className='hero-brand-mark';
    brandMark.src='assets/transition-navideer-vertical-official.png';
    brandMark.alt='Transition Navideer®';
    instrument.prepend(brandMark);
  }
  const evidence=document.querySelector('.evidence');
  if(evidence){
    evidence.before(makeSection(`<section class="product-family"><div class="wrap"><div class="section-head"><div><div class="eyebrow">Two products. Two different starting points.</div><h2>Choose the Navideer built for the decision in front of you.</h2></div><p class="lead">Both products connect career information with practical planning. The difference is where the learner begins and what the learner needs to resolve.</p></div><div class="product-family-grid"><article class="family-card transition-card"><span>FOR AN ACTIVE CAREER CHANGE</span><h3>Transition Navideer®</h3><p>Begin with a current or previous occupation. Translate the knowledge, skills and abilities you already bring, compare related careers, investigate gaps and build a transition plan.</p><ul><li>Experience and transferable assets first</li><li>Career-to-career comparison</li><li>Preparation gaps and next-step planning</li></ul><a class="btn orange" href="https://app.transitionnavideer.com/">Start a Transition</a></article><article class="family-card career-card"><span>FOR BROADER CAREER AND EDUCATION EXPLORATION</span><h3>Career Navideer®</h3><p>Begin with lifestyle priorities, an occupation of interest or a need to explore. Connect career possibilities with earnings, education routes, accredited programs and My Career Path.</p><ul><li>Lifestyle and career exploration</li><li>Education and credential navigation</li><li>Useful from middle school through adulthood</li></ul><a class="btn primary" href="https://careernavideer.net" target="_blank" rel="noopener">Explore Career Navideer®</a></article></div></div></section>`));
    evidence.before(makeSection(`<section class="video-library"><div class="wrap"><div class="section-head"><div><div class="eyebrow">See Transition Navideer® in context</div><h2>Watch the introduction built for you.</h2></div><p class="lead">These official Lifestyle Learning® videos explain how Transition Navideer® supports the people making a change and the professionals helping them move forward.</p></div><div class="video-grid"><article><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/x6JKjK8OJy8" title="Transition Navideer for adults" loading="lazy" allowfullscreen></iframe></div><span>INDIVIDUALS</span><h3>For adults making a career change</h3><p>See how existing experience becomes a starting point for exploring what may come next.</p></article><article><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/JkPvyHIgLNg" title="Transition Navideer for career counselors" loading="lazy" allowfullscreen></iframe></div><span>GUIDANCE PROFESSIONALS</span><h3>For career counselors</h3><p>See how structured comparison can make counseling conversations more focused and actionable.</p></article><article><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/gKzSsnQmCUg" title="Transition Navideer for workforce organizations" loading="lazy" allowfullscreen></iframe></div><span>PROGRAMS</span><h3>For workforce organizations</h3><p>See how programs can support consistent exploration while keeping human guidance central.</p></article></div><a class="channel-link" href="https://www.youtube.com/@LifestyleLearning_STEM" target="_blank" rel="noopener">Visit the Lifestyle Learning® YouTube channel</a></div></section>`));
    document.querySelector('.situations')?.remove();
    document.querySelector('.journey-band')?.remove();
    document.querySelector('.case-split')?.closest('section')?.remove();
    evidence.remove();
  }
}

if(pageName==='individuals.html'){
  const finalMainSection=document.querySelector('main section:last-child');
  if(finalMainSection) finalMainSection.before(makeSection(`<section class="video-feature"><div class="wrap video-feature-grid"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/x6JKjK8OJy8" title="Transition Navideer for adults" loading="lazy" allowfullscreen></iframe></div><div><div class="eyebrow">See the adult experience</div><h2>A career change starts with what you already know.</h2><p class="lead">The adult overview shows how Transition Navideer® helps people move beyond a job title, identify transferable knowledge, skills and abilities, and investigate new directions with greater structure.</p><a class="btn primary" href="https://app.transitionnavideer.com/">Sign Up and Start</a></div></div></section>`));
}

if(pageName==='organizations.html'){
  const evidence=document.querySelector('.evidence');
  if(evidence) evidence.before(makeSection(`<section class="video-library compact-video-library"><div class="wrap"><div class="section-head"><div><div class="eyebrow">See the organization perspective</div><h2>Show each stakeholder how the platform fits.</h2></div><p class="lead">Use the official Lifestyle Learning® overview that matches the professionals and partners involved in a pilot.</p></div><div class="video-grid"><article><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/JkPvyHIgLNg" title="Transition Navideer for career counselors" loading="lazy" allowfullscreen></iframe></div><span>CAREER COUNSELORS</span><h3>Structure the work before and between meetings</h3></article><article><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/IYvN98Sxa_Y" title="Transition Navideer for staffing and recruiting agencies" loading="lazy" allowfullscreen></iframe></div><span>STAFFING AND RECRUITING</span><h3>Make transferable experience easier to examine</h3></article><article><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/gKzSsnQmCUg" title="Transition Navideer for workforce organizations" loading="lazy" allowfullscreen></iframe></div><span>WORKFORCE ORGANIZATIONS</span><h3>Support a consistent transition process at scale</h3></article></div></div></section>`));
}

document.querySelectorAll('.footer').forEach(footer=>{
  footer.innerHTML=`<div class="wrap"><div class="footer-grid"><div><a class="brand footer-transition-brand" href="index.html"><img src="assets/transition-navideer-vertical-official.png" alt="Transition Navideer®"></a><p>Transition Navideer® is a Lifestyle Learning® product that helps adults translate experience into informed career directions and practical next steps.</p><a class="parent-brand" href="https://lifestylelearning.com/" target="_blank" rel="noopener"><span class="parent-icon-window"><img src="assets/lifestyle-learning-icon-orange-official.png" alt=""></span><b>Lifestyle Learning®</b></a></div><div><h4>Explore</h4><a href="index.html">Home</a><a href="how-it-works.html">How It Works</a><a href="journey.html">Try the Journey</a><a href="individuals.html">Individuals</a><a href="organizations.html">Organizations</a><a href="evidence.html">Evidence</a><a href="about.html">About</a></div><div><h4>Access</h4><a href="https://app.transitionnavideer.com/">Sign Up</a><a href="https://app.transitionnavideer.com/login">Log In</a><a href="organizations.html#demo">Request a Demo</a><a href="https://careernavideer.net" target="_blank" rel="noopener">Career Navideer®</a></div><div><h4>Follow Lifestyle Learning®</h4><div class="social-links"><a href="https://www.youtube.com/@LifestyleLearning_STEM" target="_blank" rel="noopener">YouTube</a><a href="https://www.facebook.com/LifestyleLearning" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/lifestylelearning/" target="_blank" rel="noopener">Instagram</a><a href="https://twitter.com/LifestyleLearn" target="_blank" rel="noopener">X</a><a href="https://www.linkedin.com/company/lifestyle-learning" target="_blank" rel="noopener">LinkedIn</a></div><h4 class="legal-heading">Legal</h4><a href="https://transitionnavideer.com/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a><a href="https://transitionnavideer.com/terms-of-use/" target="_blank" rel="noopener">Terms of Use</a></div></div><div class="legal">Copyright © 2026 Transition Navideer®, a division of Lifestyle Learning®. All rights reserved.</div></div>`;
});

document.querySelectorAll('img').forEach(image=>{
  if(!image.closest('.nav')&&!image.classList.contains('hero-brand-mark')) image.loading='lazy';
  image.decoding='async';
});
