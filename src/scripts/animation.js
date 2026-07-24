import { gsap } from 'gsap';

var body = document.getElementById('home'),
    headWrap = document.getElementById('eightbithead-wrapper__home'),
    head = document.getElementById('eightbithead__home'),
    title = document.getElementById('title__home'),
    hello = document.getElementById('hello__home'),
    btravs = document.getElementById('name__home'),
    intro = document.getElementById('intro__home'),
    skill_hdr = document.getElementById('skills-hdr'),
    skill_intro = document.getElementById('skills-intro'),
    skill_main = document.getElementById('skill-sets');

var hiddenElements = [hello,btravs,intro,skill_hdr,skill_intro,skill_main];
// gsap.set(['.intro','.footer','article','.leftside-wrapper','.work-imgs','.strongside-wrapper'], {opacity: 0});
// gsap.set('.eightbithead', {scale:0.03,y:420,borderRadius: '50%',transformOrigin:'0 0'});
// gsap.set('.eightbithead-scale-width', {x:140, transformOrigin:'0 0'});
// gsap.set('.eightbithead-wrapper', {zIndex:10})
// gsap.set('.title', {x:-500});
// gsap.set('.title-wrapper', {marginLeft: 70, opacity: 1});
// gsap.set('.eightbithead div', {opacity: 0});


function animate() {

  var tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.inOut'}});
    tl
    .set(hiddenElements, {opacity: 0})
    .set(title,{x:80})
    .set(btravs,{y:15})
    .set(headWrap, {width: '100%',zIndex:10})
    .set(head, {marginLeft: -3600, width: 11200,borderRadius:'50%'})
    .set('#eightbithead__home div', {opacity: 0, height: 0})
    .to('#eightbithead__home div', {opacity: 1, height: 40, stagger: { each: 0.03, from: "start", grid: "auto", ease: "power2.inOut"}},'start')
    .to(head, {duration: 3, marginLeft: -440, width: 2800},'start+=2')
    .to(head, {scale:0.03, marginTop:20,marginLeft:5},'step2')
    .to(hello, {opacity: 1})
    .to(btravs, {opacity: 1,y:-15},'name')
    .to(title, {y:-30},'name')
    .to(head, {scale:1, marginTop:-760,marginLeft:-720},'enlarge')
    .to(headWrap, {opacity:0.25},'enlarge+=0.5')
    .set([title,btravs,hello], {x:0,y:0},'enlarge+=0.6')
    .set(intro, {opacity: 1},'enlarge+=0.6')
    .to(hiddenElements, {opacity: 1, stagger: { each: 0.1, from: "start", grid: "auto", ease: "power2.inOut"}})
    // .to('.eightbithead div', { opacity: 1, duration: 0.01, stagger: { each: 0.1, from: "edges", grid: "auto", ease: "power2.inOut"}})
    // .to('.title', {x:30,duration: 2})
    // .to('.title', {duration: 0.5, x:0},'headGrow+=0.5')
    // .to('.title-wrapper', {duration: 0.5, marginLeft: 0},'headGrow+=0.5')
    // .to('.eightbithead', {duration: 1.5, scale: 1, x: 0, y: 0, borderRadius: 0},'headGrow+=0.5')
    // .to('.eightbithead-scale-width', {duration: 0.75, x: -90},'headGrow+=0.5')
    // .to(['.intro','.footer','article', '.leftside-wrapper'], {opacity: 1, duration: 0.25},'headGrow+=1.25')
    // .to('.eightbithead-scale-width', {duration: 0.75, x: 0},'headGrow+=1.25')
    // .to('.eightbithead-wrapper', {zIndex: -1})
    // .to(['.strongside-wrapper','.work-imgs'], {opacity: 1},'next+=0.25')
    // .to('.eightbithead div', {opacity: 0.4},'next-=1')
    ;

  return tl;
}


document.addEventListener('astro:page-load', animate, false);