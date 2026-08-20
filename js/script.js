document.addEventListener('DOMContentLoaded',()=>{gsap.registerPlugin(ScrollTrigger);const nav=document.querySelector('.navbar');const menu=document.querySelector('#mobileMenu');const btn=document.querySelector('#menuBtn');window.addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>80),{passive:true});if(location.pathname.endsWith('index.html')||location.pathname.endsWith('/'))document.querySelector('a[href="index.html"]')?.classList.add('active');document.querySelectorAll('.reveal').forEach((el,i)=>gsap.fromTo(el,{y:30,opacity:0,filter:'blur(12px)'},{y:0,opacity:1,filter:'blur(0px)',duration:1.2,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',once:true},delay:(i%4)*.12}));const heroImg=document.querySelector('.hero-media img,.page-hero-img img,.project-hero-img img');if(heroImg)gsap.fromTo(heroImg,{scale:1.08,filter:'blur(8px)',opacity:0},{scale:1,filter:'blur(0px)',opacity:1,duration:1.6,ease:'power3.out'});document.querySelectorAll('.hero h1,.page-hero h1,.contact-hero h1').forEach(el=>gsap.fromTo(el,{y:35,opacity:0,filter:'blur(10px)'},{y:0,opacity:1,filter:'blur(0px)',duration:1.3,ease:'power3.out',delay:.2}));document.querySelectorAll('.feature-media img,.curtain-img img,.craft-img img').forEach(img=>gsap.to(img,{yPercent:10,ease:'none',scrollTrigger:{trigger:img,parent:img.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));document.querySelectorAll('.tile').forEach(card=>card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();gsap.to(card.querySelector('img'),{x:(e.clientX-r.left-r.width/2)*.025,y:(e.clientY-r.top-r.height/2)*.025,duration:.4})}));document.querySelectorAll('.tile').forEach(card=>card.addEventListener('mouseleave',()=>gsap.to(card.querySelector('img'),{x:0,y:0,duration:.6})));document.querySelectorAll('.counter').forEach(el=>{const end=+el.textContent;el.textContent='0';ScrollTrigger.create({trigger:el,start:'top 85%',once:true,onEnter:()=>gsap.to(el,{textContent:end,duration:1.6,ease:'power2.out',snap:{textContent:1}})})});const track=document.querySelector('.horizontal-track');if(track&&innerWidth>900)gsap.to(track,{x:()=>-(track.scrollWidth-innerWidth*.9),ease:'none',scrollTrigger:{trigger:'.horizontal-projects',pin:true,scrub:1,start:'top top',end:()=>'+='+track.scrollWidth}});document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();gsap.to(el,{x:(e.clientX-r.left-r.width/2)*.12,y:(e.clientY-r.top-r.height/2)*.12,duration:.3})});el.addEventListener('mouseleave',()=>gsap.to(el,{x:0,y:0,duration:.5,ease:'elastic.out(1,.4)'}))});if(btn){btn.addEventListener('click',()=>{const open=menu.classList.toggle('open');document.body.classList.toggle('menu-open',open);btn.classList.toggle('open',open);gsap.to(btn.children[0],{rotation:open?45:0,y:open?6:0,duration:.3});gsap.to(btn.children[1],{opacity:open?0:1,duration:.2});gsap.to(btn.children[2],{rotation:open?-45:0,y:open?-6:0,duration:.3});if(open)gsap.fromTo('.mobile-menu-inner a',{y:30,opacity:0},{y:0,opacity:1,stagger:.06,duration:.45,ease:'power3.out'})})}document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');document.body.classList.remove('menu-open')}));const form=document.querySelector('#projectForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();document.querySelector('#formMessage').textContent='Demo form ready — connect this form to your email/API before launch.'});});


document.addEventListener('DOMContentLoaded', () => {
    /* Footer Animations */
    const footerCta = document.querySelector('.footer-cta');
    if (footerCta) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerCta,
                start: "top 75%",
            }
        });
        
        tl.to('.footer-cta-bg img', { scale: 1, duration: 1.5, ease: 'power3.out' })
          .to('.cta-eyebrow', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=1")
          .to('.cta-heading', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
          .to('.cta-desc', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6")
          .to('.cta-btn', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6");
          
        gsap.to('.footer-cta-bg img', {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: footerCta,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }

    const backToTop = document.querySelector('#backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const glassNav = document.querySelector('.glass-nav');
    if (!glassNav) return;

    // Entrance Animation
    gsap.fromTo(glassNav, 
        { y: -20, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );

    // Scroll Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            glassNav.classList.add('scrolled');
        } else {
            glassNav.classList.remove('scrolled');
        }
    }, { passive: true });

    // Active Link Setup
    const links = document.querySelectorAll('.glass-nav .nav-link, .glass-mobile-menu .mobile-nav-links a');
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '' || currentPath === '/') currentPath = 'index.html';
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobile Menu Setup (Clone to remove old event listeners from minified script)
    const oldBtn = document.querySelector('#menuBtn');
    if (oldBtn) {
        const btn = oldBtn.cloneNode(true);
        oldBtn.parentNode.replaceChild(btn, oldBtn);
        
        const menu = document.querySelector('#mobileMenu');
        const closeBtn = document.querySelector('#closeMenuBtn');
        
        const openMenu = () => {
            menu.classList.add('open');
            gsap.fromTo('.mobile-nav-links a', 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" }
            );
        };
        
        const closeMenu = () => {
            menu.classList.remove('open');
        };

        btn.addEventListener('click', openMenu);
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        
        document.querySelectorAll('.glass-mobile-menu a').forEach(a => {
            a.addEventListener('click', closeMenu);
        });
    }
});

