import { gsap, Elastic, Power0, Power3 } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

var txt1_cefcu = document.getElementById('cefcu-txt1'),
    headline = document.getElementById('headline'),
    p1 = document.getElementById('p1'),
    p2 = document.getElementById('p2'),
    p3 = document.getElementById('p3'),
    legal = document.getElementById('legal'),
    logo_cefcu = document.getElementById('cefcu-logo'),
    cta_cefcu = document.getElementById('cefcu-cta'),
    ctaWrap_cefcu = document.getElementById('cefcu-cta-wrapper'),
    overlay = document.getElementById('pattern-overlay'),
    iceCream = document.getElementById('ice-cream-whole'),
    iceCreamDrawing = document.getElementById('ice-cream-drawing'),
    
    spr1 = document.getElementById('sprinkle1'),
    spr2 = document.getElementById('sprinkle2'),
    spr3 = document.getElementById('sprinkle3'),
    spr4 = document.getElementById('sprinkle4'),
    spr5 = document.getElementById('sprinkle5'),
    spr6 = document.getElementById('sprinkle6'),
    spr7 = document.getElementById('sprinkle7'),
    spr8 = document.getElementById('sprinkle8'),
    spr9 = document.getElementById('sprinkle9'),
    spr10 = document.getElementById('sprinkle10'),
    spr11 = document.getElementById('sprinkle11'),
    spr12 = document.getElementById('sprinkle12'),
    spr13 = document.getElementById('sprinkle13'),
    spr14 = document.getElementById('sprinkle14'),
    ic = document.getElementById('ice-cream-path'),
    icInner = document.getElementById('ice-cream-path-inner'),
    cherryWhole = document.getElementById('cherry-whole'),
    cherry = document.getElementById('cherry'),
    cherryStem = document.getElementById('cherry-stem'),
    cherryWrap = document.getElementById('cherry-wrapper');

function animate_cefcu() {

  var tl_cefcu = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.inOut'}});
    tl_cefcu
    .to('.eightyeightad.cefcu-wrapper', {borderColor: "#00a0c8"},'reset')
    .set(headline, {rotation:0.01, transformOrigin: '0px 0px'},'reset')
    .set([cherryWhole,iceCreamDrawing,iceCream], {opacity: 0},'reset')
    .to([legal,logo_cefcu,ctaWrap_cefcu], {duration: 0.75, opacity: 0},'reset')
    .to(headline, {duration: 0.75, x: 5, y: '54%', scale:0.687},'reset')

    .set(iceCream, {x: 158, opacity: 1, scale:1, rotation:0.01, transformOrigin: '50% 50%'},'set')
    .set(cta_cefcu, {scale:0.5, rotation:0.01, transformOrigin: '5.3% 52.8%'},'set')
    .set(cherryWhole, {y: -25, rotation:0.01, transformOrigin: '50% 50%'},'set')
    .set(cherry, {scale: 1, rotation:0.01, transformOrigin: '96px 57px'},'set')
    .set([spr1,spr2,spr3,spr4,spr5,spr6,spr7,spr8,spr9,spr10,spr11,spr12,spr13,spr14,icInner], {drawSVG: "0"})
    .set(ic, {drawSVG: "55% 55%"})

    .to(overlay, {duration: 0.5, x: -118, ease: "back.out(1.4)"},'start+=0.3')
    .to(headline, {duration: 0.25, opacity: 1},'start+=0.01')
    .to(iceCream, {duration: 0.5, x: 0, ease: "back.out(1.4)"},'start+=0.5')
    .to(txt1_cefcu, {opacity: 1},'start+=0.5')

    .to(txt1_cefcu, {opacity: 0},'txt1+=1')
    .to(headline, {duration: 0.5, y: -1},'txt1+=1.15')

    .to(p1, {opacity: 1},'proofs+=0')
    .to(p2, {opacity: 1},'proofs+=1.25')
    .to(p3, {opacity: 1},'proofs+=2.5')

    .to(iceCreamDrawing, {duration:0.1, opacity: 1},'proofs+=0.25')
    .to(ic, {duration: 1.5, drawSVG: "100%", ease: 'power1.out'},'proofs+=0.25')
    .to(icInner, {duration: 1.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=1.35')
    .to([spr3,spr6,spr9,spr12], {duration: 0.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=1.55')
    .to([spr2,spr5,spr8,spr11,spr14], {duration: 0.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=1.7')
    .to([spr1,spr4,spr7,spr10,spr13], {duration: 0.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=1.85')
    .to(cherryWrap, {duration:0.2, opacity: 1},'proofs+=2.85')
    .to(cherryWhole, {duration:0.4, opacity: 1, y: 0, ease: "back.out(2)"},'proofs+=2.85')
    .to(cherry, {duration:0.2, scaleY:0.85, ease: "power1.out"},'proofs+=2.85')
    .to(cherry, {duration:0.2, scaleY:1, ease: "power1.in"},'proofs+=3')
    .to(cherryStem, {duration:0.2, y:10, ease: "power1.out"},'proofs+=2.85')
    .to(cherryStem, {duration:0.2, y:0, ease: "power1.in"},'proofs+=3')

    .to(headline, {duration: 0.5, y: 0, x: 0, scale: 1},'final+=1.15')
    .to(iceCream, {duration: 0.5, x: 158, scale: 1, ease: "back.in(1.4)"},'final+=1')
    .to(overlay, {duration: 0.5, x: 0, scale: 1, ease: "back.in(1.4)"},'final+=1.05')
    .to(p1, {opacity: 0},'final+=1')
    .to(p2, {opacity: 0},'final+=1.075')
    .to(p3, {opacity: 0},'final+=1.15')
    .to(legal, {opacity: 1},'final+=1.62')
    .to(logo_cefcu, {opacity: 1},'final+=1.62')
    .to(ctaWrap_cefcu, {duration: 0.25, opacity: 1},'final+=2.12')
    .to(cta_cefcu, {duration: 0.5, scale: 1, ease: "back.out(1)"},'final+=2.12')
    .to('.eightyeightad.cefcu-wrapper', {borderColor: "#00a0c8"},'final+=2.12');
    
    return tl_cefcu;
  }


  // NorthShore Ortho Animations
  var ortho_txt1a = document.getElementById('ortho-txt1a'),
	ortho_txt1b = document.getElementById('ortho-txt1b'),
	ortho_txt2a = document.getElementById('ortho-txt2a'),
	ortho_txt3a = document.getElementById('ortho-txt3a'),
	ortho_txt3b = document.getElementById('ortho-txt3b'),
	ortho_txt3c = document.getElementById('ortho-txt3c'),
	ortho_txt3d = document.getElementById('ortho-txt3d'),
	ortho_cta = document.getElementById('ortho-cta'),
	
	name_hip = document.getElementById('name-hip'),
	name_spine = document.getElementById('name-spine'),
	name_elbow = document.getElementById('name-elbow'),
	name_shoulder = document.getElementById('name-shoulder'),
	name_wrist = document.getElementById('name-wrist'),
	name_ankle = document.getElementById('name-ankle'),
	name_hand = document.getElementById('name-hand'),
	name_knee = document.getElementById('name-knee'),
	
	skeleton = document.getElementById('skeleton-wrapper');

  var bones = [
    ["foot", -150, -90 ],
    ["ankle", -12, 70 ],
    ["thigh", 55, -170 ],
    ["hips", 90, -180 ],
    ["spine", 13 ],
    ["rib1", -155, -90 ],
    ["rib2", 165, -180 ],
    ["rib3", 25, 90 ],
    ["rib4", 90, -40 ],
    ["rib5", 25, -13 ],
    ["collar", 400, -180 ],
    ["bicep", -25, 415 ],
    ["forearm", 5, -14 ],
    ["hand", -90, 90 ],
    ["head", 12 ]
  ]

  var animationSkeleton = function() {
	
    gsap.set(skeleton, {rotation:0.01, scale: 1, z: 0.1, transformOrigin:'50% 97.8%'});	
    
    for (var i = 0; i < bones.length; i++) { 
      var timeDelay = (i / 5) + (0.05 * i);
      
      if ( bones[i][0] === "head" ||  bones[i][0] === "hips" ||  bones[i][0] === "spine") {
        
        var bone = document.getElementById(bones[i][0]);
        var boneGroup = document.getElementById(bones[i][0] + '-g');
        
        gsap.set(bone, {rotation: bones[i][1], transformOrigin:'50% 50%'});
        
        gsap.to(boneGroup, 0.5,{y: 250, ease:Power3.easeOut, delay:timeDelay});
        gsap.to(bone, 0.425, {rotation: 0, ease:Power3.easeOut, delay:timeDelay + 0.15});
        
      } else {
        
        var boneRight = document.getElementById(bones[i][0] + '-right');
        var boneLeft = document.getElementById(bones[i][0] + '-left');
        var boneRightGroup = document.getElementById(bones[i][0] + '-right-g');
        var boneLeftGroup = document.getElementById(bones[i][0] + '-left-g');
        
        gsap.set(boneRight, {rotation: bones[i][1], transformOrigin:'50% 50%'});
        gsap.set(boneLeft, {rotation: bones[i][2], transformOrigin:'50% 50%'});
        
        gsap.to(boneRightGroup, 0.5, {y: 250, ease:Power3.easeOut, delay:timeDelay});
        gsap.to(boneLeftGroup, 0.5, {y: 250, ease:Power3.easeOut, delay:timeDelay});
        
        gsap.to(boneRight, 0.425, {rotation: 0, ease:Power3.easeOut, delay:timeDelay + 0.15});
        gsap.to(boneLeft, 0.425, {rotation: 0, ease:Power3.easeOut, delay:timeDelay + 0.15});
      }
      
    }
    
  };
  
  var animationNames = function() {
    gsap.to(name_shoulder, 0.25,{opacity: 1, ease:Power0.easeNone, delay:0});
    gsap.to(name_elbow, 0.25,{opacity: 1, ease:Power0.easeNone, delay:0.3});
    gsap.to(name_spine, 0.25,{opacity: 1, ease:Power0.easeNone, delay:0.6});
    gsap.to(name_wrist, 0.25,{opacity: 1, ease:Power0.easeNone, delay:0.9});
    gsap.to(name_hand, 0.25,{opacity: 1, ease:Power0.easeNone, delay:1.2});
    gsap.to(name_hip, 0.25,{opacity: 1, ease:Power0.easeNone, delay:1.5});
    gsap.to(name_knee, 0.25,{opacity: 1, ease:Power0.easeNone, delay:1.8});
    gsap.to(name_ankle, 0.25,{opacity: 1, ease:Power0.easeNone, delay:2});
  }
    
  
  var animate_ortho = function() {

    var tl_ortho = gsap.timeline({defaults: {duration: 0.5, ease: 'power1.inOut'}});
    tl_ortho
      .to('.eightyeightad.ortho-wrapper', {borderColor: "#00a0c8"},'reset')
      .set([name_shoulder,name_elbow,name_spine,name_wrist,name_hand,name_hip,name_knee,name_ankle], {opacity: 0},'reset');
    
    for (var i = 0; i < bones.length; i++) { 
      if ( bones[i][0] === "head" ||  bones[i][0] === "hips" ||  bones[i][0] === "spine") {
        var boneGroup = document.getElementById(bones[i][0] + '-g');
        tl_ortho.add( gsap.set(boneGroup, {y: 0}),'reset');
      } else {
        var boneRightGroup = document.getElementById(bones[i][0] + '-right-g');
        var boneLeftGroup = document.getElementById(bones[i][0] + '-left-g');
        tl_ortho.add( gsap.set([boneRightGroup,boneLeftGroup], {y: 0}),'reset');
      }
    }
    
    tl_ortho.to([ortho_txt3a,ortho_txt3b,ortho_txt3c,ortho_txt3d,ortho_cta], 0.75,{opacity: 0, ease:Power0.easeNone},'reset')

      .set(skeleton, {scale: 1, rotation:0.01, transformOrigin:"50% 50%"})
      .set(ortho_cta, {scale: 1.2, rotation:0.01, transformOrigin:"75.33% 85.6%"})
    
      .call(animationSkeleton, null,'start+=0.25')
      
      .to(skeleton, {opacity: 1},'start')
      .to(ortho_txt1a, {opacity: 1},'start')
      .to(ortho_txt1b, {opacity: 1},'start+=0.5')
      
      .to([ortho_txt1a,ortho_txt1b], {opacity: 0},'frame2+=1')
      .to(ortho_txt2a, {opacity: 1},'frame2+=1')
      .call(animationNames, null,'frame2+=1.5')
      
      .to(ortho_txt2a, {opacity: 0},'frame3+=2')
      .to(skeleton, {opacity: 0},'frame3+=2')
      .to(ortho_txt3d, {opacity: 1},"txt3+=0")
      .to(ortho_txt3a, {opacity: 1},"txt3+=0.25")
      .to(ortho_txt3b, {opacity: 1},"txt3+=0.50")
      .to(ortho_txt3c, {opacity: 1},"txt3+=0.75")
      .to(ortho_cta, {opacity: 1, scale:1},'final')
      .to('.eightyeightad.ortho-wrapper', {borderColor: "#00a0c8"},'final+=1');

      return tl_ortho;
  };




var gcfd_txt1 = document.getElementById('gcfd-txt1'),
  gcfd_txt2 = document.getElementById('gcfd-txt2'),
  gcfd_txt3 = document.getElementById('gcfd-txt3'),
  gcfd_tag = document.getElementById('gcfd-tag'),
  gcfd_cta = document.getElementById('gcfd-cta'),
  greenBg = document.getElementById('green-bg'),

  gcfd_img = document.getElementById('gcfd-img-wrapper'),
  uncropped = document.getElementById('uncropped'),
  face = document.getElementById('face');

var greater = document.getElementById('greater'),
  chicago = document.getElementById('chicago'),
  food = document.getElementById('food-wrapper'),
  depository = document.getElementById('depository-wrapper'),

  icon = document.getElementById('icon'),
  leavesInner = document.getElementById('leaves-inner'),
  leavesOuter = document.getElementById('leaves-outer'),

  leafInner1 = document.getElementById('leaf-inner-bottom'),
  leafInner2 = document.getElementById('leaf-inner-2'),
  leafInner3 = document.getElementById('leaf-inner-3'),
  leafInner4 = document.getElementById('leaf-inner-top'),
  leafInner5 = document.getElementById('leaf-inner-5'),
  leafInner6 = document.getElementById('leaf-inner-6'),

  leafOuter1 = document.getElementById('leaf-outer-bottom'),
  leafOuter2 = document.getElementById('leaf-outer-2'),
  leafOuter3 = document.getElementById('leaf-outer-3'),
  leafOuter4 = document.getElementById('leaf-outer-4'),
  leafOuter5 = document.getElementById('leaf-outer-top'),
  leafOuter6 = document.getElementById('leaf-outer-6'),
  leafOuter7 = document.getElementById('leaf-outer-7');

var allLeaves = [
  {object: leafInner1, scaleStart: 0.99, delay: 0.25, duration: 2},
  {object: leafInner2, scaleStart: 0.96, delay: 0.25, duration: 2},
  {object: leafInner3, scaleStart: 0.75, delay: 0.25, duration: 2},
  {object: leafInner4, scaleStart: 0.99, delay: 0.25, duration: 2},
  {object: leafInner5, scaleStart: 0.9, delay: 0.25, duration: 2},
  {object: leafInner6, scaleStart: 0.75, delay: 0.75, duration: 2},
  {object: leafOuter1, scaleStart: 0.77, delay: 0.5, duration: 2},
  {object: leafOuter2, scaleStart: 0.85, delay: 0.5, duration: 2},
  {object: leafOuter3, scaleStart: 0.98, delay: 0.5, duration: 2},
  {object: leafOuter4, scaleStart: 0.8, delay: 1, duration: 1.25},
  {object: leafOuter5, scaleStart: 0.85, delay: 0.5, duration: 2},
  {object: leafOuter6, scaleStart: 0.92, delay: 0.5, duration: 2},
  {object: leafOuter7, scaleStart: 0.82, delay: 0.5, duration: 2}  
];

function animateLogo() {
  for(var i = 0; i < allLeaves.length; i++) {
    gsap.set(allLeaves[i].object, {svgOrigin: '82 74', scale: allLeaves[i].scaleStart, rotation:0.01});
    gsap.to(allLeaves[i].object, {duration: allLeaves[i].duration, scale: 1, ease: "power2.out", delay: allLeaves[i].delay});
  }

  gsap.set([leavesInner,leavesOuter], {svgOrigin: '82 74', scale: 1, rotation:0.01});
  gsap.set(leavesInner, {rotation: -6, scale: 1.27});
  gsap.set(leavesOuter, {rotation: -12, scale: 1.44});

  gsap.to(leavesInner, {duration: 3, rotation: 0, scale: 1, ease: "power3.out", delay: 0.25});
  gsap.to(leavesOuter, {duration: 3, rotation: 0, scale: 1, ease: "power3.out", delay: 0.25});
  gsap.to(icon, {duration: 1, opacity: 1, delay: 0.25});
  gsap.to(greater, {duration: 1, opacity: 1, delay: 2});
  gsap.to(chicago, {duration: 1, opacity: 1, delay: 2.05});
  gsap.to(food, {duration: 1, opacity: 1, delay: 2.1});
  gsap.to(depository, {duration: 1, opacity: 1, delay: 2.15});
}

function animate_gcfd() {

  var tl_gcfd = gsap.timeline({defaults: {duration: 1, ease: 'power1.inOut'}});
    tl_gcfd
    .to('.eightyeightad.gcfd-wrapper', {borderColor: "#00a0c8"},'reset')
    .set([gcfd_txt1,gcfd_txt2,gcfd_txt3,face], {opacity: 0},'reset')
    .set(uncropped, {opacity: 1},'reset')
    .set(gcfd_img, {scale: 1, left:'-27%',top:'-34.4%', rotation:0.1, z: 0.1, transformOrigin:"0% 0%"},'reset')
    .to([gcfd_cta,gcfd_tag], {duration: 0.75, opacity: 0},'reset')
    .to(["#greater","#chicago","#food-wrapper","#depository-wrapper","#icon"], {duration: 0.75, opacity: 0},'reset')
    .to(greenBg, {duration: 0.75, opacity: 0},'reset+=0.75')

    .to(gcfd_txt1, { opacity:1},'start')
    .to(gcfd_txt2, { opacity:1},'start+=1.5')
    .to(gcfd_txt3, { opacity:1},'start+=3')

    .to(gcfd_img, { duration: 1.5, scale:0.35,left:'25%',top:'12%', ease: "power2.out"},'start+=0.5')
    .to(uncropped, { duration: 1, opacity:0},'start+=1')
    .to(face, { duration: 1, opacity:1},'start+=1.5')

    .to(greenBg, { opacity:1},'final')
    .call(animateLogo, null,'final')
    .to(gcfd_tag, { opacity:1},'final+=1')
    .to(gcfd_cta, { opacity:1},'final+=1.25')
    .to('.eightyeightad.gcfd-wrapper', {borderColor: "#00a0c8"},'final+=1.5');

    return tl_gcfd;
}


var ns_txt1a = document.getElementById('ns-txt1a'),
	ns_txt1c = document.getElementById('ns-txt1c'),
	ns_txt1b_ABN = document.getElementById('ns-txt1b-abn'),
	ns_txt1b_ORMAL = document.getElementById('ns-txt1b-ormal'),
	ns_txt1b_HEA = document.getElementById('ns-txt1b-hea'),
	ns_txt1b_RT = document.getElementById('ns-txt1b-rt'),
	ns_txt1b_RHY = document.getElementById('ns-txt1b-rhy'),
	ns_txt1b_THMS = document.getElementById('ns-txt1b-thms'),
  ns_logo = document.getElementById('logo'),
  ns_txt3a = document.getElementById('ns-txt3a'),

  ns_proof1 = document.getElementById('ns-proof1'),
  ns_proof2 = document.getElementById('ns-proof2'),
  ns_proof3 = document.getElementById('ns-proof3'),
  
  ns_imageMain = document.getElementById('ns-image-main'),
  ns_imageMultiplied = document.getElementById('ns-image-multiplied'),
  ns_imageMultipliedClipping = document.getElementById('ns-multiply-clipping-path'),
  ns_line = document.getElementById('ns-line'),
  ns_frame1Wrap = document.getElementById('frame1-wrapper'),
  
  ekgLineLead = document.getElementById('ekg-dash-lead'),
  ekgLineFull = document.getElementById('ekg-dash-full'),
  ekgLineRed = document.getElementById('ekg-dash-red');

function animate_kenburns_ns() {

  var tl = gsap.timeline();
  tl.set([ns_imageMain, ns_imageMultiplied, ns_imageMultipliedClipping], {scale:1, rotation:0.1,z:0.1, transformOrigin:"50% 50%"})
  .to([ns_imageMain, ns_imageMultiplied],{duration:12, scale: 1.2, ease: "none"});
}	

function animate_ns() {
  var tl_ns = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.inOut'}});
    tl_ns
    .to('.eightyeightad.ns-wrapper', {borderColor: "#00a0c8"},'reset')
    .set([ns_imageMain, ns_imageMultiplied, ns_imageMultipliedClipping], {scale:1},'reset')
    .to([ns_txt3a,ekgLineRed],{opacity: 0, duration: 0.75},'reset')
    .to(ns_frame1Wrap,{opacity: 1, duration: 0.75},'reset')
    .to(ns_line,{attr: {x2: 28}, duration: 0.01},'reset')
    .to(ns_imageMultipliedClipping,{duration:0.75, attr: {y: 300}, ease: "power1.inOut"},'reset')
    .set(ekgLineLead, {strokeDashoffset: 700},'reset+=0.75')
    .set(ekgLineFull, {strokeDashoffset: 1600},'reset+=0.75')
    .set(ns_proof1,{fill: "#8FD8F8"},'reset+=0.75')

    .set([ns_txt1b_ABN,ns_txt1b_ORMAL,ns_txt1b_HEA,ns_txt1b_RT,ns_txt1b_RHY,ns_txt1b_THMS], {scale:0.75 })
    .set(ns_txt1b_ABN, {transformOrigin:"22% 45%" })
    .set(ns_txt1b_ORMAL, {transformOrigin:"66% 45%" })
    .set(ns_txt1b_HEA, {transformOrigin:"36% 63%" })
    .set(ns_txt1b_RT, {transformOrigin:"63% 63%" })
    .set(ns_txt1b_RHY, {transformOrigin:"27% 82%" })
    .set(ns_txt1b_THMS, {transformOrigin:"63% 82%" })

    .call(animate_kenburns_ns, null, 'start')
    .to(ns_txt1a, {opacity:1 },'start+=0.25')
    .to(ns_txt1b_ABN, {duration: 0.35, opacity:1, scale:1, ease: Elastic.easeOut.config(2, 1) },'abbynormal')
    .to(ns_txt1b_ORMAL, {duration: 0.35, opacity:1, scale:1, ease: Elastic.easeOut.config(2, 1) },'abbynormal+=0.1')
    
    .to(ns_txt1b_HEA, {duration: 0.35, opacity:1, scale:1, ease: Elastic.easeOut.config(2, 1) },'abbynormal+=0.5')
    .to(ns_txt1b_RT, {duration: 0.35, opacity:1, scale:1, ease: Elastic.easeOut.config(2, 1) },'abbynormal+=0.6')
    
    .to(ns_txt1b_RHY, {duration: 0.35, opacity:1, scale:1, ease: Elastic.easeOut.config(2, 1) },'abbynormal+=1')
    .to(ns_txt1b_THMS, {duration: 0.35, opacity:1, scale:1, ease: Elastic.easeOut.config(2, 1) },'abbynormal+=1.1')
    .to(ns_txt1c, {opacity:1 },'abbynormal+=1.3')

    .to(ns_imageMultipliedClipping,{duration:0.75, attr: {y: 0}, ease: "power1.inOut"},'frame2+=1')
    .to(ns_line,{duration:0.5, opacity: 1, attr: {x2: 68}, delay:0.25, ease: "power1.inOut"},'frame2+=1')
    .to([ns_txt1a,ns_txt1b_ABN,ns_txt1b_ORMAL,ns_txt1b_HEA,ns_txt1b_RT,ns_txt1b_RHY,ns_txt1b_THMS,ns_txt1c], {opacity:0 },'frame2+=1.25')
    .to(ns_proof1,{opacity:1},'frame2+=1.25')

    .to(ns_proof1,{fill: "#ffffff"},'proof2+=0.25')
    .to(ns_proof2,{opacity:1},'proof2+=0.35')

    .to(ns_proof2,{fill: "#ffffff"},'proof3+=0.25')
    .to(ns_proof3,{opacity:1},'proof3+=0.35')

    .to(ns_proof3,{fill: "#ffffff"},'proofs+=0.25')

    .to([ns_proof1,ns_proof2,ns_proof3,ns_line,ns_frame1Wrap],{opacity:0},'final+=0.1')
    .to(ekgLineLead, {strokeDashoffset: 875, ease: "power1.inOut"},'final+=0.1')
    .to(ekgLineFull, {strokeDashoffset: 1775, ease: "power1.inOut"},'final+=0.1')
    .to(ekgLineRed, {opacity: 1, ease: "power1.inOut"},'final+=0.35')
    .to(ns_txt3a,{opacity:1},'final+=0.6')
    .to('.eightyeightad.ns-wrapper', {borderColor: "#00a0c8"},'final+=0.8');

    return tl_ns;
}

let displayAdsTimeline;

function animate_cycle() {
  if (!document.getElementById('display-ads')) return;

  displayAdsTimeline?.kill();

  displayAdsTimeline = gsap.timeline({repeat: -1});
  displayAdsTimeline
    .add(animate_ns())
    .add(animate_gcfd())
    .add(animate_cefcu())
    .add(animate_ortho());

  return displayAdsTimeline;
}

document.addEventListener('astro:page-load', animate_cycle, false);
  