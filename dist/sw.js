if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),d={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-55841483.js",revision:null},{url:"assets/index-d32dd823.css",revision:null},{url:"assets/index-eae85cff.js",revision:null},{url:"assets/index-f15320e5.css",revision:null},{url:"index.html",revision:"9159a2a4529de96a1b504e201942091c"},{url:"registerSW.js",revision:"829577ff6975a20328909ceaad8bcbf0"},{url:"favicon.svg",revision:"a67646d82efd2245283640803cf6bc9a"},{url:"manifest.webmanifest",revision:"228f6b00f04b19c7ecddad1333b02ce9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
