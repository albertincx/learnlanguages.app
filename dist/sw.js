if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),d={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-574b6e28.js",revision:null},{url:"assets/index-901d3df4.js",revision:null},{url:"assets/index-ccb702b8.css",revision:null},{url:"assets/index-e63eb810.css",revision:null},{url:"assets/workbox-window.prod.es5-c46a1faa.js",revision:null},{url:"index.html",revision:"0197b1225206151965feee190f6e52a7"},{url:"favicon.svg",revision:"a67646d82efd2245283640803cf6bc9a"},{url:"manifest.webmanifest",revision:"228f6b00f04b19c7ecddad1333b02ce9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
