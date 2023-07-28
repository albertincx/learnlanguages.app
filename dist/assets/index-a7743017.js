var G=Object.defineProperty;var W=(n,i,e)=>i in n?G(n,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[i]=e;var c=(n,i,e)=>(W(n,typeof i!="symbol"?i+"":i,e),e);import{r as x,R as w,j as t,S as u}from"./index-3f0f1106.js";class T extends x.Component{constructor(e){super(e);c(this,"uplForm");c(this,"dropEl");c(this,"filEl");c(this,"getFile",e=>{const{upload:s}=this.props;if(s){const l=e.target,o=[];if("files"in l&&l.files.length>0)for(let r=0;r<l.files.length;r+=1)o.push(this.readFileContent(l.files[r]));Promise.all(o).then(r=>s(r))}});c(this,"dragLeave",()=>{this.dropEl.current&&this.dropEl.current.classList.remove("over")});c(this,"dropEnter",()=>{this.dropEl.current&&this.dropEl.current.classList.add("over")});c(this,"handleSubmit",e=>{e.preventDefault()});c(this,"btnClick",()=>{this.filEl&&this.filEl.current.click()});this.uplForm=w.createRef(),this.dropEl=w.createRef(),this.filEl=w.createRef()}readFileContent(e){const s=new FileReader,l=!1;return new Promise(o=>{s.onload=r=>{const a=r.target.result,h="",d={bstr:a,rABS:l,filename:e.name,error:h};o(d)},s.readAsText(e,"utf8")})}renderInput({onChange:e,type:s,multiple:l}){const o="btn btn-primary";return t.jsx("div",{onDragEnter:this.dropEnter,ref:this.dropEl,onDragLeave:this.dragLeave,children:t.jsx("input",{placeholder:"Choose or Drop files",className:o,onChange:e,ref:this.filEl,type:"file",multiple:l,accept:s,tabIndex:-1,id:"files"})})}render(){const{label:e="",type:s,isSingle:l}=this.props;return t.jsx("div",{className:"btn-wrap",children:t.jsx("form",{onSubmit:this.handleSubmit,ref:this.uplForm,encType:"multipart/form-data",children:this.renderInput({onChange:this.getFile,type:s,multiple:!l})})})}}const q=[{filename:"demoRU.srt",bstr:`184
00:11:37,691 --> 00:11:39,234
Какой размер файла?

185
00:11:40,276 --> 00:11:42,570
1,2 мегабайта? Не может быть.

186
00:11:43,571 --> 00:11:44,322
Ого, а качество не сниженное.

188
00:11:48,743 --> 00:11:50,276
Файл в половину меньше.

189
00:11:50,745 --> 00:11:52,539
И смотри, какая скорость.

190
00:11:54,666 --> 00:11:58,003
Охренеть. Как он
так быстро нашел?

191
00:11:59,045 --> 00:12:02,257
Он ищет по архивам?..

192
00:12:03,133 --> 00:12:04,342
Не может быть.
`},{filename:"demoEN.srt",bstr:`241
00:11:37,739 --> 00:11:39,782
What is this file size?

242
00:11:40,367 --> 00:11:42,451
1 .2 megabytes? No way.

243
00:11:43,620 --> 00:11:46,413
Wow, that doesn't sound at all downgraded.

244
00:11:48,708 --> 00:11:50,376
The file size is like, half.

245
00:11:50,752 --> 00:11:52,836
And look how fast this search is.

246
00:11:54,714 --> 00:11:57,925
Holy shit, how did it
find a match that fast?

247
00:11:59,010 --> 00:12:02,096
It's like it's searching compressed files?

248
00:12:03,139 --> 00:12:04,765
No way.
`}];function D(n){const i=document.getElementById("voice");if(!i)return;const e=speechSynthesis.getVoices(),s=document.createElement("option");s.value="",s.innerHTML="",i.appendChild(s),e.forEach(function(l){const o=document.createElement("option");o.value=l.name,o.innerHTML=l.name,l.name===n&&(o.selected=!0),i.appendChild(o)})}function z(n){const i=document.getElementById("msg");i&&("speechSynthesis"in window?i.innerHTML="Your browser <strong>supports</strong> speech synthesis.":(i.innerHTML='Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.',i.classList.add("not-supported"))),D(n),window.speechSynthesis.onvoiceschanged=function(){D(n)}}const K={voice:""},Q=({data:n,togglePopup:i,voiceSettingSave:e})=>{const[s,l]=x.useState(K),{voice:o,error:r,volume:a,rate:h,pitch:d}=n,f=p=>{const{name:k,value:b}=p.target;l({[k]:b})};x.useEffect(()=>{z(o)},[]);const m=p=>{if(!(!o&&!s.voice))return e(s),p.preventDefault(),!1};return t.jsx("div",{className:"lang-subs",children:t.jsx("div",{id:"filenames",className:"modal-window",children:t.jsxs("div",{children:[t.jsx("a",{href:"",title:"Close",className:"modal-close",onClick:p=>i(p,!1),children:"Close"}),t.jsx("h4",{children:"Web Speech Synthesis Demo"}),t.jsx("div",{children:t.jsxs("form",{onSubmit:()=>!1,children:[t.jsxs("div",{id:"page-wrapper",children:[t.jsx("p",{id:"msg"}),t.jsxs("div",{className:"option",children:[t.jsx("label",{htmlFor:"voice",children:"Voice"})," ",t.jsx("select",{required:!0,name:"voice",id:"voice",value:o||"",onChange:f})]}),t.jsxs("div",{className:"option",children:[t.jsx("label",{htmlFor:"volume",children:"Volume"}),t.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",name:"volume",id:"volume",value:a,onChange:f})]}),t.jsxs("div",{className:"option",children:[t.jsx("label",{htmlFor:"rate",children:"Rate"}),t.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",name:"rate",id:"rate",value:h,onChange:f})]}),t.jsxs("div",{className:"option",children:[t.jsx("label",{htmlFor:"pitch",children:"Pitch"}),t.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",name:"pitch",id:"pitch",value:d,onChange:f})]}),r?t.jsx("div",{color:"red",children:r}):null,t.jsx("div",{children:t.jsx("button",{className:"btn",onClick:m,children:"Save"})})]}),t.jsx("div",{children:t.jsx("a",{href:"",title:"Close",className:"modal-close bottom",onClick:p=>i(p,!1),children:"Close"})})]})})]})})})},v="langBS_history",j="subs",N="langbysubs_settings",L="langscroll",M="srt, ass",U="POPUP_DISCUSS",A="POPUP_SETTINGS",X=/([0-9]+):([0-9]+):([0-9]+)[,.]([0-9]+)/g,Z=/([0-9]+):([0-9]+):([0-9]+)[,.]([0-9]+)/,H=/\n[0-9]{1,6}\n/,C=/\n[0-9]{1,6}?\s\n/,ee=/\r\n/,E="[^^]";function te(n){return n||H}function R(n){var l;const i=n.match(X);if(!i)return 0;const e=[];if(i.length){const o=new Date,r=(l=i[0].match(Z))==null?void 0:l.map(Number);r&&o.setHours(Number(r[1]),r[2],r[3],r[4]),e.push(o)}const s=new Date;return s.setHours(0,0,0,0),e.push(s),e[0].getTime()-e[1].getTime()}let y=0;const g=[H,C,ee];function $(n){let i=0;for(let e=0;e<g.length;e+=1)if(n.split(g[e]).length>1){i=e;break}return i}function se(n,i){const e=R(n);let s="";for(let l=y;l<i.length;l+=1){const o=R(i[l]);if(e-o<500){y=l,s=i[l];break}}return s}function I(n){let i=n.bstr.split(`
`);return i=i.filter(e=>e.match("Dialogue: ")).map((e,s)=>{const l=e.split("Dialogue: ")[1].split(",");let[o,r,a,h,d,f,m,p,k,b]=l;return r.match(/^0:/)&&(r=`0${r}`),a.match(/^0:/)&&(a=`0${a}`),`
${s}
${r} --> ${a}
${b}
`}),i.join("")}function ne(n){y=0;let[i,e]=n;i.filename.match(/\.ass$/)&&(i.bstr=I(i)),e.filename.match(/\.ass$/)&&(e.bstr=I(e));const s=$(i.bstr),l=$(e.bstr);let o=i.bstr.split(g[s]);g[s]&&(i.sep=`${g[s]}`);let r=e.bstr.split(g[l]);o.length===1&&(o=i.bstr.split(C)),r.length===1&&(o=e.bstr.split(C));const a=[];for(let d=0;d<o.length;d+=1)a.push(se(o[d],r));const h={bstr:a.join(E),filename:e.filename,sep:E};return i.bstr=B(i.bstr),h.bstr=B(h.bstr),[i,h]}function B(n){return n.replace(/<i>|<\/i>/gu,"")}function _(n){let{sep:i}=n;return i&&i!==E&&(i=new RegExp(i.replace(/\//g,""))),n.bstr.split(te(i))}const S=()=>{let n=u.getJ(j)||[];return n||(n=[]),n};function J(n){const{voice:i,rate:e=1,volume:s=1,pitch:l=1}=u.getJ(N)||{},o=new SpeechSynthesisUtterance;o.text=n,o.volume=parseFloat(String(s)),o.rate=parseFloat(String(e)),o.pitch=parseFloat(String(l)),i&&(o.voice=speechSynthesis.getVoices().filter(function(r){return r.name===i})[0]),window.speechSynthesis.speak(o)}const F=n=>{if(n||(n=S()),!n||!Array.isArray(n)||n.length===0)return{items:[],filenames:[]};const i=[n[0].filename];let e=[];if(n[0]&&(e=[_(n[0])]),n[1]){i.push(n[1].filename);const s=_(n[1]);e.push(s)}return{items:e,filenames:i}},ie=(n,i=!1,e)=>{n.length>2&&(n=n.slice(0,2));let s=[],l="";for(let a=0;a<n.length;a+=1)n[a].bstr.trim()?s.push({bstr:n[a].bstr,filename:n[a].filename}):l="EMPTY";if(s.length){if(i){s=n;const a=S();a&&P(a,!0)}else s.length===2&&(s=ne(s));u.setJ(j,s)}const{items:o,filenames:r}=F([...s]);return i||P(s),{items:o,showStr:"",error:l,filenames:r}},P=(n,i=!1)=>{let e=u.getJ(v)||[],s=[],l=!1,o=!1;e.length?n.length>1&&(s=e.filter(r=>!Array.isArray(r)||r.length===0?!1:r[0].filename!==n[0].filename||r[0].filename!==n[1].filename),e.length!==s.length&&(l=!0)):n.length>1&&(s=[n],o=!0),i&&n.length>1&&!o&&(s=s.concat([n])),s.length&&(l||i)&&u.setJ(v,s)};function le(n){let i=[],e={result:i};return n.forEach(s=>{s.split("/").reduce((l,o)=>(l[o]||(l[o]={result:[]},l.result.push({name:o,children:l[o].result})),l[o]),e)}),i}function oe(n){let i=[],e=n[0];return n.map(s=>{let l=s,o="";for(let r=0;r<l.length&&l[r]===e[r];r+=1)o+=l[r];o&&o!==e&&!i.includes(o)&&i.push(o)}),i.sort(),i[0]}function re(n){let i=!0;const e=[];let s=[...n];for(;i;){const l=oe([...s]);if(!l){i=!1;break}s=[],n.map(o=>{o.substring(0,l.length)!==l&&!e.includes(l)&&s.push(o)}),e.includes(l)||e.push(l),i=s.length>0}return e}function ae(n,i){let e=[];return n.map(s=>{s.startsWith(i)&&e.push(s.replace(i,i+"/"))}),e}function ce(n){let i=[...n];const e=re([...i]),s=[];return e.map(l=>{const o=le(ae(n,l)),r=o[0].children.map(a=>a.name);r.sort(),o[0].files=[...r],s.push(o[0])}),s}function O(n,i){let e="";return i.split("").forEach(function(s,l){s!=n.charAt(l)&&(e+=s)}),e}function V(n){if(!n||!n.length||n.length===1)return;const i=O(n[0],n[1]),e=O(n[1],n[0]),s=ce(n);return s.length?[`${s[0].name}`,`[ ${i} , ${e} ]`]:n}const Y=({upload:n})=>{const[i,e]=x.useState(u.getJ(v)),s=(r,a=!1)=>()=>{let h;a&&(h=i[r]);let d=[...i.filter((f,m)=>m!==r)];u.setJ(v,d),a?h&&n(h,!0):e(d)};if(!i||!i.length)return null;let l;const o=(r,a)=>{if(Array.isArray(r))return t.jsxs("div",{children:[t.jsx("br",{}),r&&(l=V(r.map(h=>h.filename)))&&t.jsxs(t.Fragment,{children:[t.jsx("div",{children:l[0]}),t.jsx("div",{children:l[1]})]}),t.jsx("br",{}),t.jsxs("div",{children:[t.jsx("button",{className:"btn",onClick:s(a,!0),children:"restore"}),t.jsx("button",{className:"btn",onClick:s(a),children:"Delete"})]})]},`subs${a}1`)};return t.jsxs("div",{id:"filenames",className:"modal-window1",children:[t.jsx("h4",{children:"History"}),t.jsx("div",{children:t.jsxs("div",{children:[t.jsx("div",{children:i&&i.map((r,a)=>o(r,a))}),t.jsx("br",{})]})})]})},he=({clear:n,filenames:i,togglePopup:e,upload:s})=>{var o;x.useEffect(()=>{},[]);const l=V(i);return t.jsx("div",{id:"filenames",className:"modal-window",children:t.jsxs("div",{children:[t.jsx("a",{href:"",title:"Close",className:"modal-close",onClick:r=>e(r,!1),children:"Close"}),t.jsx("h4",{children:"Files"}),t.jsxs("div",{children:[t.jsx("div",{children:t.jsxs("div",{children:[t.jsxs(t.Fragment,{children:[t.jsx("div",{children:l==null?void 0:l[0]}),t.jsx("div",{children:l==null?void 0:l[1]})]}),t.jsx("div",{children:t.jsx("button",{className:"btn",onClick:n,children:"Delete"})})]})}),(o=u.getJ(v))!=null&&o.length?t.jsx(Y,{upload:s}):null,t.jsx("div",{children:t.jsx("a",{href:"",title:"Close",className:"modal-close bottom",onClick:r=>e(r,!1),children:"Close"})})]})]})})},de={SAME:"Files same, please upload different filename",EMPTY:"One of uploaded file has empty content, please upload another file"};class ue extends x.Component{constructor(e){super(e);c(this,"buttonPressTimer");c(this,"handleUpload",(e,s=!1)=>{let{filenames:l}=this.state;if(l.length===1&&e[0].filename===l[0]){this.setState({error:"SAME"});return}const o=ie(e,s);s&&(o.modal="",o.showPopupFiles=!1),this.setState(()=>({...o}))});c(this,"clear",()=>{const e=S();P(e,!0),u.rm(j),this.setState({filenames:[],items:[],showPopupFiles:!1,showStr:"",error:""})});c(this,"switchLanguages",()=>{let e=S();if(e.length<=1)return;e=[e[1],e[0]],u.setJ(j,e);const{items:s}=F(e);this.setState({items:s})});c(this,"show",e=>{const s=e.target.getAttribute("data-ind"),{items:l,isShown:o,ind:r}=this.state;let a=o;const[,h]=l;if(h[s]){a=s!==r||!a;let d="";a&&(d=h[s]),this.setState({showStr:d,ind:s,isShown:a})}});c(this,"handleButtonRelease",()=>{this.buttonPressTimer&&clearTimeout(this.buttonPressTimer)});c(this,"handleScroll",()=>{u.set(L,window.scrollY)});c(this,"getStr",e=>{const s=e.split(/>\s[0-9]+:[0-9]+:[0-9]+[.,][0-9]+/);return s[1]&&(e=s[1]),e});c(this,"renderRow",(e,s)=>{const{voice:l}=this.state;return e=this.getStr(e),e?t.jsx("div",{onTouchEnd:this.handleButtonRelease,onMouseDown:this.show,onMouseUp:this.handleButtonRelease,"data-ind":s,children:t.jsxs("div",{"data-ind":s,children:[e,t.jsx("span",{className:"tooltiptext",children:e?t.jsx("button",{onClick:l?()=>J(e):this.voiceSetting,className:"icon speech-voice"}):null})]})},`${e}${s}`):null});c(this,"demo",e=>{e.preventDefault(),this.handleUpload(q)});c(this,"togglePopup",(e,s=!0)=>{e.preventDefault(),this.setState({showPopupFiles:s,modal:""})});c(this,"toggleDiscuss",e=>{e.preventDefault(),this.setState({modal:U})});c(this,"closeModal",()=>{this.setState({modal:""})});c(this,"voiceSetting",e=>{e.preventDefault(),this.setState({modal:A})});c(this,"voiceSettingSave",e=>{const{voice:s,rate:l,pitch:o,volume:r}=e;if(this.state.voice===s||!s&&this.state.voice)return this.closeModal();u.setJ(N,{voice:s,rate:l,pitch:o,volume:r}),this.setState({modal:"",voice:s,rate:l,pitch:o,volume:r})});this.buttonPressTimer=void 0;const{items:s=[],filenames:l=[]}=F(),{voice:o,rate:r=1,volume:a=1,pitch:h=1}=u.getJ(N)||{};this.state={showStr:"",ind:"",isShown:-1,error:"",filenames:l,items:s,showPopupFiles:!1,modal:"",voice:o,rate:r,volume:a,pitch:h}}componentDidMount(){const e=u.get(L,!1);e&&window.scrollTo(0,e),window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){const{items:e,showStr:s,error:l,filenames:o,showPopupFiles:r,modal:a,voice:h}=this.state,d=`folder${e.length?"-fill":""}`;return t.jsxs("div",{className:"lang-subs",children:[r?t.jsx(he,{filenames:o,togglePopup:this.togglePopup,clear:this.clear,upload:this.handleUpload}):null,a===U?t.jsx("div",{id:"filenames",className:"modal-window",children:t.jsxs("div",{children:[t.jsx("a",{href:"",title:"Close",className:"modal-close",onClick:f=>this.togglePopup(f,!1),children:"Close"}),t.jsx("h1",{children:"Subs"}),t.jsxs("div",{children:["Upload your subs in channel:",t.jsx("a",{href:"tg://resolve?domain=langbysubs",children:" @langbysubs"})]}),t.jsx("div",{children:t.jsx("a",{href:"",title:"Close",className:"modal-close bottom",onClick:f=>this.togglePopup(f,!1),children:"Close"})})]})}):null,s?t.jsx("div",{className:"tooltip1",children:t.jsxs("span",{className:"tooltiptext",children:[this.getStr(s),t.jsx("button",{onClick:h?()=>J(this.getStr(s)):this.voiceSetting,className:"icon speech-voice"})]})}):null,t.jsx("div",{children:e.length===2?t.jsxs("div",{className:"buttons",children:[t.jsx("button",{className:`icon ${d}-icon`,onClick:this.togglePopup}),t.jsx("button",{className:"icon earth-search",onClick:this.toggleDiscuss}),t.jsx("button",{className:"icon speech-voice-setting",onClick:this.voiceSetting})]}):null}),t.jsx("div",{children:e.length===2?t.jsx("div",{className:"button-replace",children:t.jsx("button",{className:"icon replace-icon",onClick:this.switchLanguages})}):null}),t.jsxs("div",{className:"lang-items",children:[e.length?null:t.jsxs("div",{children:[t.jsx("div",{children:"Please upload two (.srt, .ass) files with different languages"}),t.jsx("p",{}),t.jsxs("div",{className:"flexible",children:[t.jsx("div",{className:"btn",children:t.jsx(T,{type:M,upload:this.handleUpload,label:"Add files"})}),t.jsx("div",{className:"btn btn-ghost-success",children:"or"}),t.jsx("button",{className:"btn",onClick:this.demo,children:"TRY DEMO"})]}),t.jsx(Y,{upload:this.handleUpload})]}),e.length===1?t.jsxs("div",{className:"load-step",children:[l?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"alert alert-danger",children:de[l]}),t.jsx("br",{})]}):null,t.jsxs("div",{children:["1 File ",o[0],t.jsx("span",{className:"green",children:" loaded"})]}),t.jsxs("div",{children:["2 File ",t.jsx("span",{className:"gray",children:"not loaded"})]}),t.jsx(T,{upload:this.handleUpload,type:M,label:"Add second subtitles file",isSingle:!0}),t.jsx("br",{}),t.jsx("div",{children:t.jsx("button",{className:"btn",onClick:this.clear,children:"Delete all"})})]}):null,e.length===2?e[0].map((f,m)=>this.renderRow(f,m)):null]}),a===A?t.jsx(Q,{closeModal:this.closeModal,data:this.state,togglePopup:this.togglePopup,voiceSettingSave:this.voiceSettingSave}):null]})}}const fe=ue,ge=()=>t.jsx(fe,{});export{ge as default};
