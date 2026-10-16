'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Scene() {
  const ref = useRef(null);
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    let raf = 0;
    var cv=ref.current,R=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true});R.setPixelRatio(Math.min(devicePixelRatio,2));
 var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,100);C.position.z=7;
 S.add(new THREE.AmbientLight(0x303050,1.4));
 var a=new THREE.PointLight(0x2f7bff,4,30);a.position.set(5,4,5);S.add(a);
 var b=new THREE.PointLight(0x1d4ed8,4,30);b.position.set(-5,-3,4);S.add(b);
 var G=new THREE.Group();S.add(G);
 
 
 var names=['React','Next.js','Node.js','MongoDB','Three.js','Vue.js','Python','Docker','Git','SQL'],orb=[],i;
 function tex(s){var c=document.createElement('canvas');c.width=320;c.height=120;var x=c.getContext('2d');x.fillStyle='#facc15';x.font='700 62px sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText(s,160,62);return new THREE.CanvasTexture(c)}
 names.forEach(function(s,k){var m=new THREE.Mesh(new THREE.PlaneGeometry(1.5,.56),new THREE.MeshBasicMaterial({map:tex(s),transparent:true,side:THREE.DoubleSide}));m.userData={a:k/names.length*6.283,s:[0,0,0],g:[0,0,0],h:false};G.add(m);orb.push(m)});
 var pg=new THREE.BufferGeometry(),pt=[];for(i=0;i<300;i++)pt.push((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*8);
 pg.setAttribute('position',new THREE.Float32BufferAttribute(pt,3));S.add(new THREE.Points(pg,new THREE.PointsMaterial({color:0x6a9cff,size:.04})));
 function rs(){var w=cv.clientWidth,h=cv.clientHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}
 addEventListener('resize',rs);rs();
 var tx=0,ty2=0,drag=false,lx=0,ly=0,t=0;
 cv.addEventListener('pointermove',function(e){var r=cv.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty2=(e.clientY-r.top)/r.height-.5});
 cv.addEventListener('pointerleave',function(){tx=0;ty2=0;orb.forEach(function(m){m.userData.h=false;m.userData.g=[0,0,0]});cv.style.cursor='grab'});
 var rc=new THREE.Raycaster(),mv=new THREE.Vector2();
 function hov(e){var r=cv.getBoundingClientRect();mv.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);rc.setFromCamera(mv,C);var hit=rc.intersectObjects(orb)[0],hm=hit&&hit.object;orb.forEach(function(m){var u=m.userData;if(m===hm&&!u.h){u.h=true;u.g=[(Math.random()-.5)*6.3,(Math.random()-.5)*6.3,(Math.random()-.5)*6.3]}else if(m!==hm&&u.h){u.h=false;u.g=[0,0,0]}});cv.style.cursor=hm?'pointer':'grab'}
 cv.addEventListener('pointermove',hov);cv.addEventListener('pointerdown',hov);
 var vis=true;new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(cv);
 (function loop(){raf=requestAnimationFrame(loop);if(!vis)return;if(!reduce)t+=.012;
  
  orb.forEach(function(m){var u=m.userData,q=u.a+t*.6;m.position.set(Math.cos(q)*3.2,Math.sin(q*1.7)*1.5,Math.sin(q)*3.2);m.lookAt(C.position);for(var j=0;j<3;j++)u.s[j]+=(u.g[j]-u.s[j])*.1;m.rotateX(u.s[0]);m.rotateY(u.s[1]);m.rotateZ(u.s[2])});
  G.rotation.y+=(tx*1.2-G.rotation.y)*.06;G.rotation.x+=(ty2*1.0-G.rotation.x)*.06;R.render(S,C)})();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', rs); R.dispose(); };
  }, []);
  return <canvas ref={ref} id="cv" aria-label="Interactive 3D skills" />;
}
