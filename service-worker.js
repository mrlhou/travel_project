if(!self.define){let e,r={};const o=(o,l)=>(o=new URL(o+".js",l).href,r[o]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=r,document.head.appendChild(e)}else e=o,importScripts(o),r()})).then((()=>{let e=r[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(l,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let c={};const t=e=>o(e,n),i={module:{uri:n},exports:c,require:t};r[n]=Promise.all(l.map((e=>i[e]||t(e)))).then((e=>(s(...e),c)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"travel-project"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/travel_project/home/css/app.f30a584c.css",revision:null},{url:"/travel_project/home/css/chunk-vendors-a9a8c684.094f3571.css",revision:null},{url:"/travel_project/home/css/chunk-vendors-aacc2dbb.71fc5a8a.css",revision:null},{url:"/travel_project/home/img/Guide.7c3ba235.jpg",revision:null},{url:"/travel_project/home/img/HomView.0942e038.jpg",revision:null},{url:"/travel_project/home/img/client-1.dbfe3f96.jpg",revision:null},{url:"/travel_project/home/img/client-3.9677bf31.jpg",revision:null},{url:"/travel_project/home/index.html",revision:"bd35a389927b3c7d0538a34455d20729"},{url:"/travel_project/home/js/app.c6d0bb0e.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-0067db0a.ce39db52.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-1656f0b4.72c22143.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-29ab4ef3.5674a4ec.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-553179ca.cf873ef9.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-7e59c547.4801ca5c.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-879d9596.b51fde85.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-87f807fd.4c98bd65.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-8c31e91d.03734d84.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-a066095a.359384ae.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-a9a8c684.df940de5.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-aacc2dbb.ca121a6f.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-e5158421.5164cb51.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-e7635201.0b5682f9.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-f52e5c94.0736f333.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-fa70753b.e3ed619b.js",revision:null},{url:"/travel_project/home/js/chunk-vendors-fc104530.c605c67c.js",revision:null},{url:"/travel_project/home/logo.png",revision:"06bf02f6b409875f9c49443d4f12814d"},{url:"/travel_project/home/manifest.json",revision:"ef2d2540dc719ccf0ee7fb9e447088c5"},{url:"/travel_project/home/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
