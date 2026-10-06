var gu=Object.defineProperty;var _u=(i,e,t)=>e in i?gu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var K=(i,e,t)=>_u(i,typeof e!="symbol"?e+"":e,t);import{e as Te,j as T}from"./vendor-react-B3EbH8jG.js";import{co as Ma,aO as xu,cs as vu,cm as Mu,b8 as za,b9 as nt,ah as ts,aB as Ce,m as Ut,b2 as is,ac as Su,aV as yu,bx as Eu,bF as bu,p as Xs,b6 as ka,ba as Tu,c as Au,cg as wu,ci as Ru,u as Ga,j as Cu,E as Lu}from"./index-BwY1_5TB.js";import{u as At}from"./vendor-i18n-CRHO_jOs.js";import{d as Pu,c as ss,b as Ha}from"./vendor-query-Bz-9cpcP.js";import"./workflow-layout-C6lYuUGH.js";import"./graph-node-type-DnRRh1RT.js";import{u as Iu,b as ar}from"./hooks-4tfzNGjt.js";import{d as Nu,a as Du,u as Uu,h as Fu,f as Ou,b as Bu}from"./useTeamPeople-CN_SpaLk.js";import{br as ac,au as zu,a as ku,b2 as Gu,cd as oc,bs as Hu,bV as Vu,b0 as Wu,h as Xu,c as ju,bf as qu,a_ as Yu,bo as $u,bq as Ku,at as Zu,ba as Ju,bc as lc,E as Qu,an as eh,A as th,cc as nh,Q as ih,U as sh,c2 as rh,as as ah,L as oh,aP as lh,cf as ch,b1 as uh}from"./vendor-CNLIKDNa.js";import"./RunsAttention-BsWLsU0m.js";import{L as or,b as hh}from"./vendor-router-lufLsXnr.js";import{e as Va}from"./event-labels-CPa9U5Pu.js";import"./picker-api-Bq8mPoEI.js";import"./run-repair-CaFWMIE8.js";import"./sessions-list-view.module-COvESiqH.js";const dh={HUMAN_TASK:"human",APPROVAL:"human",FORM_INPUT:"human",CHECKLIST:"human",MANUAL_ACK:"human",MANUAL_FALLBACK:"human",ASSESSMENT:"human",SERVICE_CALL:"system",EXTERNAL_WAIT:"system",WAIT_UNTIL:"system",NOTIFICATION:"system",AUTOMATION:"system",DOCUMENT:"system",AGENT:"ai",DECISION:"control",PARALLEL_SPLIT:"control",JOIN:"control",START:"control",END:"end",FAIL_SINK:"end"};function fh(i){return dh[i]??"control"}const Wa=i=>i==="MANUAL_FALLBACK"||i==="FAIL_SINK"?2:i==="END"?1:0;function cc(i){const e=new Map;for(const o of i.edges){const l=e.get(o.source);l?l.push(o.target):e.set(o.source,[o.target])}const t=new Map,n=i.nodes.find(o=>o.type==="START")??i.nodes[0];if(n){t.set(n.id,0);const o=[n.id];for(;o.length>0;){const l=o.shift();for(const c of e.get(l)??[])t.has(c)||(t.set(c,(t.get(l)??0)+1),o.push(c))}}let s=Math.max(0,...t.values())+1;for(const o of i.nodes)t.has(o.id)||t.set(o.id,s++);const r=new Map;for(const o of i.nodes){const l=t.get(o.id),c=r.get(l);c?c.push(o):r.set(l,[o])}const a=new Map;for(const[o,l]of r)l.slice().sort((c,u)=>Wa(c.type)-Wa(u.type)).forEach((c,u)=>a.set(c.id,{column:o,lane:u}));return a}const ph=i=>i.reduce((e,t)=>e+t.count,0),uc=new Set(["completed","failed","cancelled"]);function Sa(i){return uc.has(i)}function mh({template:i,graph:e,campus:t,color:n}){const s=cc(e),r=new Map(i.nodes.map(o=>[o.nodeId,o])),a=e.nodes.map(o=>{var u;const l=r.get(o.id),c=s.get(o.id)??{column:0,lane:0};return{nodeId:o.id,type:o.type,title:((u=o.title)==null?void 0:u.trim())||o.id,channel:fh(o.type),column:c.column,lane:c.lane,activeRuns:(l==null?void 0:l.activeRuns)??0,waiting:l?ph(l.waiting)+l.unaged:0,breached:(l==null?void 0:l.breached)??0,openIncidents:(l==null?void 0:l.openIncidents)??0}});return{templateId:i.templateId,displayName:i.displayName,color:n,stations:a,links:e.edges.map(o=>({from:o.source,to:o.target})),liveRuns:i.positionsTotal,overdue:t.overdue}}function gh(i,e){const t=new Set(e.stations.map(s=>s.nodeId)),n=[];for(const s of i.positions){if(uc.has(s.status))continue;const a=(s.activeNodeIds.length>0?s.activeNodeIds:s.nodeId?[s.nodeId]:[]).filter(o=>t.has(o));a.length!==0&&n.push({sessionId:s.sessionId,templateId:i.templateId,nodeIds:a,status:s.status,late:!1})}return n}function _h(i){const e=i.map(mh);return{halls:e,runs:i.flatMap((t,n)=>gh(t.template,e[n]))}}const xh=15e3,vh=1e3;function Mh(i){return typeof document>"u"?"":getComputedStyle(document.documentElement).getPropertyValue(i).trim()}function Xa(i){const e=Te.useRef(i);return e.current.length===i.length&&e.current.every((n,s)=>n===i[s])||(e.current=i),e.current}function Sh(){var v;const i=Ma(),e=Pu(),n=Iu()?!1:xh,s=Te.useRef(new Set),r=Te.useRef(!1),a=Te.useRef(void 0);Te.useEffect(()=>()=>clearTimeout(a.current),[]);const o=()=>{a.current=void 0;const x=[...s.current],A=r.current;s.current.clear(),r.current=!1;const b=R=>void e.invalidateQueries({queryKey:R},{cancelRefetch:!1});if(A){b(["floor",i]);return}b(["floor",i,"campus"]);for(const R of x)b(["floor",i,"template",R])},l=()=>{a.current===void 0&&(a.current=setTimeout(o,vh))};ar({onRunState:x=>{s.current.add(x.templateId),l()},onResync:()=>{r.current=!0,l()}},!!i);const c=ss({queryKey:["floor",i,"campus"],queryFn:()=>Du(i),enabled:!!i,refetchInterval:n}),u=(((v=c.data)==null?void 0:v.templates)??[]).filter(x=>x.publishedVersionId),h=Ha({queries:u.map(x=>({queryKey:["floor",i,"template",x.templateId],queryFn:()=>Nu(i,x.templateId),refetchInterval:n}))}),p=Ha({queries:u.map((x,A)=>{var R,C;const b=((C=(R=h[A])==null?void 0:R.data)==null?void 0:C.publishedVersionId)??null;return{queryKey:["floor-graph",i,b],queryFn:()=>xu(i,x.templateId,b??void 0),enabled:!!b,staleTime:1/0}})}),m=Xa(h.map(x=>x.data)),g=Xa(p.map(x=>x.data)),_=Te.useMemo(()=>{if(!c.data)return null;const x=[];return u.forEach((A,b)=>{var W;const R=m[b],C=(W=g[b])==null?void 0:W.data.selectedVersion.graphDefinition;!R||!C||x.push({template:R,graph:C,campus:A,color:Mh(vu(A.templateId))})}),x.length===0&&u.length>0?null:_h(x)},[c.data,m,g]),f=[c,...h,...p].filter(x=>x.isError),d=[...h,...p].find(x=>x.isError);return{campus:c.data,templates:m.flatMap(x=>x?[x]:[]),scene:_,loading:c.isPending&&!c.isError,sceneLoading:!_&&!d&&!c.isError,error:c.data?null:c.error??null,sceneError:_?null:(d==null?void 0:d.error)??null,stale:!!_&&f.length>0,refetch:()=>{c.refetch();for(const x of h)x.refetch();for(const x of p)x.isError&&x.refetch()}}}function yh(i){const e=ss({queryKey:["floor",i,"people"],queryFn:()=>Fu(i),enabled:!!i,retry:!1}),t=ss({queryKey:["floor",i,"ai-acceptance"],queryFn:()=>Ou(i),enabled:!!i,retry:!1}),n=Uu(i),s=Mu(),r=c=>c%60===0?za(c).slice(0,2):za(c),a=`${r(s.startMinute)}–${r(s.endMinute)}`,o=Te.useMemo(()=>e.data?e.data.data.assignees.filter(c=>c.open>0).map(c=>({id:c.assigneeId,name:n(c.assigneeId).name,open:c.open,overdue:c.overdue})):null,[e.data,n]),l=Te.useMemo(()=>{const c=t.data;return c?{accepted:c.copilot.total.accepted+c.agent.accepted,decided:c.copilot.total.decided+c.agent.decided}:null},[t.data]);return{people:o,ai:l,clock:a}}const ja=2e3,gr=250;function Eh(){const i=Ma(),[e]=Te.useState(()=>Date.now()),t=ss({queryKey:["floor",i,"recent"],queryFn:()=>Bu(i),enabled:!!i,staleTime:1/0}),n=Te.useMemo(()=>{var v;return(((v=t.data)==null?void 0:v.events)??[]).filter(x=>Date.parse(x.at)<e)},[t.data,e]),s=t.data?Math.min(Date.parse(t.data.since),e):e,[r,a]=Te.useState([]),[o,l]=Te.useState(e),[c,u]=Te.useState(null),[h,p]=Te.useState(!1),[m,g]=Te.useState(4),_=Te.useRef(c);_.current=c,ar({onRunState:v=>{const x=Date.now();a(A=>{const b=A.length>=ja?A.slice(A.length-ja+1):A.slice();return b.push({at:x,frame:v}),b})}}),Te.useEffect(()=>{const v=window.setInterval(()=>{const x=Date.now();if(l(x),!h||_.current===null)return;const A=_.current+gr*m;A>=x?(u(null),p(!1)):u(A)},gr);return()=>window.clearInterval(v)},[h,m]);const f=Te.useCallback(v=>{if(v===null||v>=Date.now()-gr){u(null),p(!1);return}u(Math.max(v,e))},[e]),d=Te.useCallback(v=>{if(c===null)return v;const x=new Map(v.map(A=>[A.sessionId,A]));for(const{at:A,frame:b}of r){if(A>c)break;if(Sa(b.status)){x.delete(b.sessionId);continue}const R=b.activeNodeIds.length>0?b.activeNodeIds:b.currentNodeId?[b.currentNodeId]:[];x.set(b.sessionId,{sessionId:b.sessionId,templateId:b.templateId,nodeIds:R,status:b.status,late:!1})}return[...x.values()]},[c,r]);return Te.useMemo(()=>({frames:r,history:n,since:s,openedAt:e,now:o,cursor:c,playing:h,speed:m,seek:f,setPlaying:p,setSpeed:g,runsAt:d}),[r,n,s,e,o,c,h,m,f,d])}const qa=["under1d","from1to3d","from3to7d","over7d"];function bh(i){const e={under1d:0,from1to3d:0,from3to7d:0,over7d:0};let t=0;for(const s of i){for(const r of s.waiting)e[r.key]+=r.count,t+=r.count;t+=s.unaged}const n=s=>i.reduce((r,a)=>r+s(a),0);return{liveRuns:n(s=>s.liveRuns),waiting:t,overdue:n(s=>s.overdue),slaBreach:n(s=>s.slaBreach),openIncidents:n(s=>s.openIncidents),completedInWindow:n(s=>s.cycle.sampleSize),aging:e}}function Th(i,e=3){const t=[];for(const n of i.halls){const s=n.stations.reduce((r,a)=>r+a.waiting,0);for(const r of n.stations)r.waiting<=0||t.push({templateId:n.templateId,nodeId:r.nodeId,title:r.title,hallName:n.displayName,waiting:r.waiting,share:s>0?r.waiting/s:0,breached:r.breached})}return t.sort((n,s)=>s.waiting-n.waiting).slice(0,e)}function Ah(i){const e=new Map,t=new Map;for(const n of i){const s=n.templateKey.split(/[-_.\s]+/).filter(Boolean).slice(0,3).map(a=>a[0].toUpperCase()).join("")||"?",r=(e.get(s)??0)+1;e.set(s,r),t.set(n.templateId,`${s}-${String(r).padStart(2,"0")}`)}return t}function wh(i,e=2){const t=i.halls.flatMap(r=>r.stations.map(a=>({hall:r,s:a}))),n=t.filter(({s:r})=>r.breached>0).sort((r,a)=>a.s.breached-r.s.breached).slice(0,e).map(({hall:r,s:a})=>({templateId:r.templateId,nodeId:a.nodeId,tone:"danger"})),s=t.filter(({s:r})=>(r.type==="EXTERNAL_WAIT"||r.type==="WAIT_UNTIL")&&r.waiting>0).sort((r,a)=>a.s.waiting-r.s.waiting).slice(0,1).map(({hall:r,s:a})=>({templateId:r.templateId,nodeId:a.nodeId,tone:"warn"}));return[...n,...s].slice(0,e+1)}function Rh(i){var a;const e=[...i.halls].sort((o,l)=>l.liveRuns-o.liveRuns||o.templateId.localeCompare(l.templateId))[0];if(!e)return null;const t=new Map(e.stations.map(o=>[o.nodeId,o.column])),n=Math.max(0,...e.stations.map(o=>o.column)),s=i.runs.filter(o=>o.templateId===e.templateId);let r=null;for(const o of s){const l=Math.max(-1,...o.nodeIds.map(c=>t.get(c)??-1));l<=0||l>=n||(!r||l>r.col)&&(r={id:o.sessionId,col:l})}return(r==null?void 0:r.id)??((a=s[0])==null?void 0:a.sessionId)??null}function Ch(i,e,t){const n=new Map(((e==null?void 0:e.templates)??[]).map(a=>[a.templateId,a.templateKey])),s=Ah(i.halls.map(a=>({templateId:a.templateId,templateKey:n.get(a.templateId)??a.displayName}))),r=new Map(wh(i).map(a=>[`${a.templateId}/${a.nodeId}`,a.tone]));return{...i,halls:i.halls.map(a=>({...a,sign:{code:s.get(a.templateId)??"",meta:a.overdue>0?t("floor.sign.metaLate",{live:nt(a.liveRuns),late:nt(a.overdue)}):t("floor.sign.meta",{live:nt(a.liveRuns)}),late:a.overdue>0},stations:a.stations.map(o=>{const l=r.get(`${a.templateId}/${o.nodeId}`);return l?{...o,callout:l==="danger"?{tone:l,text:t("floor.pin.late",{count:o.breached}),sub:t("floor.pin.lateSub",{step:o.title})}:{tone:l,text:t("floor.pin.waiting",{count:o.waiting}),sub:t("floor.pin.waitingSub",{step:o.title})}}:o})}))}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="160",Lh=0,Ya=1,Ph=2,hc=1,dc=2,xn=3,Bn=0,Nt=1,en=2,yn=0,Ri=1,Ys=2,$a=3,Ka=4,Ih=5,Yn=100,Nh=101,Dh=102,Za=103,Ja=104,Uh=200,Fh=201,Oh=202,Bh=203,sa=204,ra=205,zh=206,kh=207,Gh=208,Hh=209,Vh=210,Wh=211,Xh=212,jh=213,qh=214,Yh=0,$h=1,Kh=2,$s=3,Zh=4,Jh=5,Qh=6,ed=7,fc=0,td=1,nd=2,Dn=0,Ea=1,pc=2,mc=3,gc=4,id=5,_c=6,xc=300,Li=301,Pi=302,aa=303,oa=304,lr=306,Ks=1e3,tn=1001,la=1002,Pt=1003,Qa=1004,_r=1005,Xt=1006,sd=1007,Ii=1008,Un=1009,rd=1010,ad=1011,ba=1012,vc=1013,Pn=1014,In=1015,Ni=1016,Mc=1017,Sc=1018,Zn=1020,od=1021,nn=1023,ld=1024,cd=1025,Jn=1026,Di=1027,ud=1028,yc=1029,hd=1030,Ec=1031,bc=1033,xr=33776,vr=33777,Mr=33778,Sr=33779,eo=35840,to=35841,no=35842,io=35843,Tc=36196,so=37492,ro=37496,ao=37808,oo=37809,lo=37810,co=37811,uo=37812,ho=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,Mo=37821,yr=36492,So=36494,yo=36495,dd=36283,Eo=36284,bo=36285,To=36286,Ac=3e3,Qn=3001,fd=3200,pd=3201,wc=0,md=1,Yt="",ht="srgb",En="srgb-linear",Ta="display-p3",cr="display-p3-linear",Zs="linear",tt="srgb",Js="rec709",Qs="p3",ni=7680,Ao=519,gd=512,_d=513,xd=514,Rc=515,vd=516,Md=517,Sd=518,yd=519,ca=35044,wo="300 es",ua=1035,Sn=2e3,er=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,ha=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function Ed(i,e){return(i%e+e)%e}function br(i,e,t){return(1-t)*i+t*e}function Ro(i){return(i&i-1)===0&&i!==0}function da(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],m=n[5],g=n[8],_=s[0],f=s[3],d=s[6],v=s[1],x=s[4],A=s[7],b=s[2],R=s[5],C=s[8];return r[0]=a*_+o*v+l*b,r[3]=a*f+o*x+l*R,r[6]=a*d+o*A+l*C,r[1]=c*_+u*v+h*b,r[4]=c*f+u*x+h*R,r[7]=c*d+u*A+h*C,r[2]=p*_+m*v+g*b,r[5]=p*f+m*x+g*R,r[8]=p*d+m*A+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,p=o*l-u*r,m=c*r-a*l,g=t*h+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tr.makeScale(e,t)),this}rotate(e){return this.premultiply(Tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new Xe;function Cc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){const i=tr("canvas");return i.style.display="block",i}const Co={};function ns(i){i in Co||(Co[i]=!0,console.warn(i))}const Lo=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Po=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fs={[En]:{transfer:Zs,primaries:Js,toReference:i=>i,fromReference:i=>i},[ht]:{transfer:tt,primaries:Js,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[cr]:{transfer:Zs,primaries:Qs,toReference:i=>i.applyMatrix3(Po),fromReference:i=>i.applyMatrix3(Lo)},[Ta]:{transfer:tt,primaries:Qs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Po),fromReference:i=>i.applyMatrix3(Lo).convertLinearToSRGB()}},Td=new Set([En,cr]),$e={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Td.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=fs[e].toReference,s=fs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return fs[i].primaries},getTransfer:function(i){return i===Yt?Zs:fs[i].transfer}};function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class Lc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=tr("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class Pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wr(s[a].image)):r.push(wr(s[a]))}else r=wr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Dt extends Fi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=tn,s=tn,r=Xt,a=Ii,o=nn,l=Un,c=Dt.DEFAULT_ANISOTROPY,u=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Fn(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Qn?ht:Yt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ht?Qn:Ac}set encoding(e){ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?ht:Yt}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=xc;Dt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],f=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,A=(m+1)/2,b=(d+1)/2,R=(u+p)/4,C=(h+_)/4,W=(g+f)/4;return x>A&&x>b?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=C/n):A>b?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=W/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=W/r),this.set(n,s,r,t),this}let v=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(p-u)*(p-u));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(h-_)/v,this.z=(p-u)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qn?ht:Yt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ic extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cd extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const p=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==p||c!==m||u!==g){let f=1-o;const d=l*p+c*m+u*g+h*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const b=Math.sqrt(x),R=Math.atan2(b,d*v);f=Math.sin(f*R)/b,o=Math.sin(o*R)/b}const A=o*v;if(l=l*f+p*A,c=c*f+m*A,u=u*f+g*A,h=h*f+_*A,f===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*m-c*p,e[t+1]=l*g+u*p+c*h-o*m,e[t+2]=c*g+u*m+o*p-l*h,e[t+3]=u*g-o*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"YXZ":this._x=p*u*h+c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"ZXY":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h-p*m*g;break;case"ZYX":this._x=p*u*h-c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h+p*m*g;break;case"YZX":this._x=p*u*h+c*m*g,this._y=c*m*h+p*u*g,this._z=c*u*g-p*m*h,this._w=c*u*h-p*m*g;break;case"XZY":this._x=p*u*h-c*m*g,this._y=c*m*h-p*u*g,this._z=c*u*g+p*m*h,this._w=c*u*h+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+o+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Io.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Io.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new D,Io=new Oi;class ti{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(r,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ms.subVectors(this.max,Hi),si.subVectors(e.a,Hi),ri.subVectors(e.b,Hi),ai.subVectors(e.c,Hi),Tn.subVectors(ri,si),An.subVectors(ai,ri),Hn.subVectors(si,ai);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Hn.y,Hn.x,0];return!Cr(t,si,ri,ai,ms)||(t=[1,0,0,0,1,0,0,0,1],!Cr(t,si,ri,ai,ms))?!1:(gs.crossVectors(Tn,An),t=[gs.x,gs.y,gs.z],Cr(t,si,ri,ai,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new D,new D,new D,new D,new D,new D,new D,new D],Kt=new D,ps=new ti,si=new D,ri=new D,ai=new D,Tn=new D,An=new D,Hn=new D,Hi=new D,ms=new D,gs=new D,Vn=new D;function Cr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ld=new ti,Vi=new D,Lr=new D;class os{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ld.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Lr)),this.expandByPoint(Vi.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new D,Pr=new D,_s=new D,wn=new D,Ir=new D,xs=new D,Nr=new D;class Nc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pr.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Pr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_s),o=wn.dot(this.direction),l=-wn.dot(_s),c=wn.lengthSq(),u=Math.abs(1-a*a);let h,p,m,g;if(u>0)if(h=a*l-o,p=a*o-l,g=r*u,h>=0)if(p>=-g)if(p<=g){const _=1/u;h*=_,p*=_,m=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pr).addScaledVector(_s,p),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){Ir.subVectors(t,e),xs.subVectors(n,e),Nr.crossVectors(Ir,xs);let a=this.direction.dot(Nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(xs.crossVectors(wn,xs));if(l<0)return null;const c=o*this.direction.dot(Ir.cross(wn));if(c<0||l+c>a)return null;const u=-o*wn.dot(Nr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,a,o,l,c,u,h,p,m,g,_,f){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,p,m,g,_,f)}set(e,t,n,s,r,a,o,l,c,u,h,p,m,g,_,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=m,d[7]=g,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),a=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=p-_*c,t[9]=-o*l,t[2]=_-p*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,m=l*h,g=c*u,_=c*h;t[0]=p+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,m=l*h,g=c*u,_=c*h;t[0]=p-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=p*c+_,t[1]=l*h,t[5]=_*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-p*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=p-_*h}else if(e.order==="XZY"){const p=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Id)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Rn.crossVectors(n,Ot),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Rn.crossVectors(n,Ot)),Rn.normalize(),vs.crossVectors(Ot,Rn),s[0]=Rn.x,s[4]=vs.x,s[8]=Ot.x,s[1]=Rn.y,s[5]=vs.y,s[9]=Ot.y,s[2]=Rn.z,s[6]=vs.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],m=n[13],g=n[2],_=n[6],f=n[10],d=n[14],v=n[3],x=n[7],A=n[11],b=n[15],R=s[0],C=s[4],W=s[8],S=s[12],w=s[1],O=s[5],q=s[9],ne=s[13],P=s[2],U=s[6],X=s[10],Z=s[14],Y=s[3],I=s[7],V=s[11],j=s[15];return r[0]=a*R+o*w+l*P+c*Y,r[4]=a*C+o*O+l*U+c*I,r[8]=a*W+o*q+l*X+c*V,r[12]=a*S+o*ne+l*Z+c*j,r[1]=u*R+h*w+p*P+m*Y,r[5]=u*C+h*O+p*U+m*I,r[9]=u*W+h*q+p*X+m*V,r[13]=u*S+h*ne+p*Z+m*j,r[2]=g*R+_*w+f*P+d*Y,r[6]=g*C+_*O+f*U+d*I,r[10]=g*W+_*q+f*X+d*V,r[14]=g*S+_*ne+f*Z+d*j,r[3]=v*R+x*w+A*P+b*Y,r[7]=v*C+x*O+A*U+b*I,r[11]=v*W+x*q+A*X+b*V,r[15]=v*S+x*ne+A*Z+b*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],m=e[14],g=e[3],_=e[7],f=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*p+n*c*p+s*o*m-n*l*m)+_*(+t*l*m-t*c*p+r*a*p-s*a*m+s*c*u-r*l*u)+f*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*p+s*a*h-n*a*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],m=e[11],g=e[12],_=e[13],f=e[14],d=e[15],v=h*f*c-_*p*c+_*l*m-o*f*m-h*l*d+o*p*d,x=g*p*c-u*f*c-g*l*m+a*f*m+u*l*d-a*p*d,A=u*_*c-g*h*c+g*o*m-a*_*m-u*o*d+a*h*d,b=g*h*l-u*_*l-g*o*p+a*_*p+u*o*f-a*h*f,R=t*v+n*x+s*A+r*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=v*C,e[1]=(_*p*r-h*f*r-_*s*m+n*f*m+h*s*d-n*p*d)*C,e[2]=(o*f*r-_*l*r+_*s*c-n*f*c-o*s*d+n*l*d)*C,e[3]=(h*l*r-o*p*r-h*s*c+n*p*c+o*s*m-n*l*m)*C,e[4]=x*C,e[5]=(u*f*r-g*p*r+g*s*m-t*f*m-u*s*d+t*p*d)*C,e[6]=(g*l*r-a*f*r-g*s*c+t*f*c+a*s*d-t*l*d)*C,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*m+t*l*m)*C,e[8]=A*C,e[9]=(g*h*r-u*_*r-g*n*m+t*_*m+u*n*d-t*h*d)*C,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*d+t*o*d)*C,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*C,e[12]=b*C,e[13]=(u*_*s-g*h*s+g*n*p-t*_*p-u*n*f+t*h*f)*C,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*f-t*o*f)*C,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*p+t*o*p)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,p=r*c,m=r*u,g=r*h,_=a*u,f=a*h,d=o*h,v=l*c,x=l*u,A=l*h,b=n.x,R=n.y,C=n.z;return s[0]=(1-(_+d))*b,s[1]=(m+A)*b,s[2]=(g-x)*b,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(p+d))*R,s[6]=(f+v)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(f-v)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const a=oi.set(s[4],s[5],s[6]).length(),o=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);const c=1/r,u=1/a,h=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Sn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let m,g;if(o===Sn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===er)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),p=(t+e)*c,m=(n+s)*u;let g,_;if(o===Sn)g=(a+r)*h,_=-2*h;else if(o===er)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new D,Zt=new at,Pd=new D(0,0,0),Id=new D(1,1,1),Rn=new D,vs=new D,Ot=new D,No=new at,Do=new Oi;class ls{constructor(e=0,t=0,n=0,s=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return No.makeRotationFromQuaternion(e),this.setFromRotationMatrix(No,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nd=0;const Uo=new D,li=new Oi,pn=new at,Ms=new D,Wi=new D,Dd=new D,Ud=new Oi,Fo=new D(1,0,0),Oo=new D(0,1,0),Bo=new D(0,0,1),Fd={type:"added"},Od={type:"removed"};class ft extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new D,t=new ls,n=new Oi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Xe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Fo,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fo,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Wi,Ms,this.up):pn.lookAt(Ms,Wi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(pn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Od)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,Dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new D(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new D,mn=new D,Dr=new D,gn=new D,ci=new D,ui=new D,zo=new D,Ur=new D,Fr=new D,Or=new D;let Ss=!1;class jt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),mn.subVectors(n,t),Dr.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(mn),l=Jt.dot(Dr),c=mn.dot(mn),u=mn.dot(Dr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,m=(c*l-o*u)*p,g=(a*u-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),mn.subVectors(e,t),Jt.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Jt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ci.subVectors(s,n),ui.subVectors(r,n),Ur.subVectors(e,n);const l=ci.dot(Ur),c=ui.dot(Ur);if(l<=0&&c<=0)return t.copy(n);Fr.subVectors(e,s);const u=ci.dot(Fr),h=ui.dot(Fr);if(u>=0&&h<=u)return t.copy(s);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ci,a);Or.subVectors(e,r);const m=ci.dot(Or),g=ui.dot(Or);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ui,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return zo.subVectors(r,s),o=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(zo,o);const d=1/(f+_+p);return a=_*d,o=p*d,t.copy(n).addScaledVector(ci,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Ed(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Br(a,r,e+1/3),this.g=Br(a,r,e),this.b=Br(a,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return $e.fromWorkingColorSpace(Tt.copy(this),e),Math.round(It(Tt.r*255,0,255))*65536+Math.round(It(Tt.g*255,0,255))*256+Math.round(It(Tt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=ht){$e.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(ys);const n=br(Cn.h,ys.h,t),s=br(Cn.s,ys.s,t),r=br(Cn.l,ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ne;Ne.NAMES=Dc;let Bd=0;class Bi extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Ri,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bn extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new D,Es=new Pe;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}}class Uc extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fc extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zd=0;const Vt=new at,zr=new ft,hi=new D,Bt=new ti,Xi=new ti,Mt=new D;class Gt extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cc(e)?Fc:Uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Bt.min,Xi.min),Bt.expandByPoint(Mt),Mt.addVectors(Bt.max,Xi.max),Bt.expandByPoint(Mt)):(Bt.expandByPoint(Xi.min),Bt.expandByPoint(Xi.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Mt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Mt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(e,c),Mt.add(hi)),s=Math.max(s,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new D,u[w]=new D;const h=new D,p=new D,m=new D,g=new Pe,_=new Pe,f=new Pe,d=new D,v=new D;function x(w,O,q){h.fromArray(s,w*3),p.fromArray(s,O*3),m.fromArray(s,q*3),g.fromArray(a,w*2),_.fromArray(a,O*2),f.fromArray(a,q*2),p.sub(h),m.sub(h),_.sub(g),f.sub(g);const ne=1/(_.x*f.y-f.x*_.y);isFinite(ne)&&(d.copy(p).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(ne),v.copy(m).multiplyScalar(_.x).addScaledVector(p,-f.x).multiplyScalar(ne),c[w].add(d),c[O].add(d),c[q].add(d),u[w].add(v),u[O].add(v),u[q].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let w=0,O=A.length;w<O;++w){const q=A[w],ne=q.start,P=q.count;for(let U=ne,X=ne+P;U<X;U+=3)x(n[U+0],n[U+1],n[U+2])}const b=new D,R=new D,C=new D,W=new D;function S(w){C.fromArray(r,w*3),W.copy(C);const O=c[w];b.copy(O),b.sub(C.multiplyScalar(C.dot(O))).normalize(),R.crossVectors(W,O);const ne=R.dot(u[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=ne}for(let w=0,O=A.length;w<O;++w){const q=A[w],ne=q.start,P=q.count;for(let U=ne,X=ne+P;U<X;U+=3)S(n[U+0]),S(n[U+1]),S(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,p=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,f=l.length;_<f;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)p[g++]=c[m++]}return new kt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,m=h.length;p<m;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new at,Wn=new Nc,bs=new os,Go=new D,di=new D,fi=new D,pi=new D,kr=new D,Ts=new D,As=new Pe,ws=new Pe,Rs=new Pe,Ho=new D,Vo=new D,Wo=new D,Cs=new D,Ls=new D;class rt extends ft{constructor(e=new Gt,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(kr.fromBufferAttribute(h,e),a?Ts.addScaledVector(kr,u):Ts.addScaledVector(kr.sub(t),u))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(bs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(bs,Go)===null||Wn.origin.distanceToSquared(Go)>(e.far-e.near)**2))&&(ko.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(ko),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=a[f.materialIndex],v=Math.max(f.start,m.start),x=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let A=v,b=x;A<b;A+=3){const R=o.getX(A),C=o.getX(A+1),W=o.getX(A+2);s=Ps(this,d,e,n,c,u,h,R,C,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const v=o.getX(f),x=o.getX(f+1),A=o.getX(f+2);s=Ps(this,a,e,n,c,u,h,v,x,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const f=p[g],d=a[f.materialIndex],v=Math.max(f.start,m.start),x=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let A=v,b=x;A<b;A+=3){const R=A,C=A+1,W=A+2;s=Ps(this,d,e,n,c,u,h,R,C,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=g,d=_;f<d;f+=3){const v=f,x=f+1,A=f+2;s=Ps(this,a,e,n,c,u,h,v,x,A),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function kd(i,e,t,n,s,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bn,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:i}}function Ps(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,di),i.getVertexPosition(l,fi),i.getVertexPosition(c,pi);const u=kd(i,e,t,n,di,fi,pi,Cs);if(u){s&&(As.fromBufferAttribute(s,o),ws.fromBufferAttribute(s,l),Rs.fromBufferAttribute(s,c),u.uv=jt.getInterpolation(Cs,di,fi,pi,As,ws,Rs,new Pe)),r&&(As.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,l),Rs.fromBufferAttribute(r,c),u.uv1=jt.getInterpolation(Cs,di,fi,pi,As,ws,Rs,new Pe),u.uv2=u.uv1),a&&(Ho.fromBufferAttribute(a,o),Vo.fromBufferAttribute(a,l),Wo.fromBufferAttribute(a,c),u.normal=jt.getInterpolation(Cs,di,fi,pi,Ho,Vo,Wo,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};jt.getNormal(di,fi,pi,h.normal),u.face=h}return u}class cn extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(_,f,d,v,x,A,b,R,C,W,S){const w=A/C,O=b/W,q=A/2,ne=b/2,P=R/2,U=C+1,X=W+1;let Z=0,Y=0;const I=new D;for(let V=0;V<X;V++){const j=V*O-ne;for(let J=0;J<U;J++){const k=J*w-q;I[_]=k*v,I[f]=j*x,I[d]=P,c.push(I.x,I.y,I.z),I[_]=0,I[f]=0,I[d]=R>0?1:-1,u.push(I.x,I.y,I.z),h.push(J/C),h.push(1-V/W),Z+=1}}for(let V=0;V<W;V++)for(let j=0;j<C;j++){const J=p+j+U*V,k=p+j+U*(V+1),$=p+(j+1)+U*(V+1),se=p+(j+1)+U*V;l.push(J,k,se),l.push(k,$,se),Y+=6}o.addGroup(m,Y,S),m+=Y,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const s in n)e[s]=n[s]}return e}function Gd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oc(i){return i.getRenderTarget()===null?i.outputColorSpace:$e.workingColorSpace}const wa={clone:Ui,merge:Lt};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=Gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bc extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends Bc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class Wd extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(mi,gi,e,t);s.layers=this.layers,this.add(s);const r=new qt(mi,gi,e,t);r.layers=this.layers,this.add(r);const a=new qt(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new qt(mi,gi,e,t);o.layers=this.layers,this.add(o);const l=new qt(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new qt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zc extends Dt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xd extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?ht:Yt),this.texture=new zc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:yn});r.uniforms.tEquirect.value=t;const a=new rt(s,r),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Xt),new Wd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Gr=new D,jd=new D,qd=new Xe;class jn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Gr.subVectors(n,t).cross(jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qd.getNormalMatrix(e),s=this.coplanarPoint(Gr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new os,Is=new D;class Ra{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],p=s[7],m=s[8],g=s[9],_=s[10],f=s[11],d=s[12],v=s[13],x=s[14],A=s[15];if(n[0].setComponents(l-r,p-c,f-m,A-d).normalize(),n[1].setComponents(l+r,p+c,f+m,A+d).normalize(),n[2].setComponents(l+a,p+u,f+g,A+v).normalize(),n[3].setComponents(l-a,p-u,f-g,A-v).normalize(),n[4].setComponents(l-o,p-h,f-_,A-x).normalize(),t===Sn)n[5].setComponents(l+o,p+h,f+_,A+x).normalize();else if(t===er)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Is.x=s.normal.x>0?e.max.x:e.min.x,Is.y=s.normal.y>0?e.max.y:e.min.y,Is.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yd(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,p=c.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,p),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){const p=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&g.length===0&&i.bufferSubData(h,0,p),g.length!==0){for(let _=0,f=g.length;_<f;_++){const d=g[_];t?i.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class ei extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,p=t/l,m=[],g=[],_=[],f=[];for(let d=0;d<u;d++){const v=d*p-a;for(let x=0;x<c;x++){const A=x*h-r;g.push(A,-v,0),_.push(0,0,1),f.push(x/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const x=v+c*d,A=v+c*(d+1),b=v+1+c*(d+1),R=v+1+c*d;m.push(x,A,R),m.push(A,b,R)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.widthSegments,e.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$f=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ap=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,hp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,im=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_m=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:$d,alphahash_pars_fragment:Kd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:Qd,alphatest_pars_fragment:ef,aomap_fragment:tf,aomap_pars_fragment:nf,batching_pars_vertex:sf,batching_vertex:rf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:vf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:yf,displacementmap_vertex:Ef,emissivemap_fragment:bf,emissivemap_pars_fragment:Tf,colorspace_fragment:Af,colorspace_pars_fragment:wf,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Lf,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Vf,envmap_vertex:If,fog_vertex:Nf,fog_pars_vertex:Df,fog_fragment:Uf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_fragment:Bf,lightmap_pars_fragment:zf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Hf,lights_toon_fragment:Wf,lights_toon_pars_fragment:Xf,lights_phong_fragment:jf,lights_phong_pars_fragment:qf,lights_physical_fragment:Yf,lights_physical_pars_fragment:$f,lights_fragment_begin:Kf,lights_fragment_maps:Zf,lights_fragment_end:Jf,logdepthbuf_fragment:Qf,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphcolor_vertex:cp,morphnormal_vertex:up,morphtarget_pars_vertex:hp,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:yp,opaque_fragment:Ep,packing:bp,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:wp,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Pp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Np,shadowmask_pars_fragment:Dp,skinbase_vertex:Up,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:zp,specularmap_pars_fragment:kp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:jp,uv_vertex:qp,worldpos_vertex:Yp,background_vert:$p,background_frag:Kp,backgroundCube_vert:Zp,backgroundCube_frag:Jp,cube_vert:Qp,cube_frag:em,depth_vert:tm,depth_frag:nm,distanceRGBA_vert:im,distanceRGBA_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:um,meshlambert_vert:hm,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:xm,meshphysical_vert:vm,meshphysical_frag:Mm,meshtoon_vert:Sm,meshtoon_frag:ym,points_vert:Em,points_frag:bm,shadow_vert:Tm,shadow_frag:Am,sprite_vert:wm,sprite_frag:Rm},ae={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ln={basic:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Lt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Lt([ae.lights,ae.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ln.physical={uniforms:Lt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ns={r:0,b:0,g:0};function Cm(i,e,t,n,s,r,a){const o=new Ne(0);let l=r===!0?0:1,c,u,h=null,p=0,m=null;function g(f,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===lr)?(u===void 0&&(u=new rt(new cn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ui(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,(h!==x||p!==x.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new rt(new ei(2,2),new un({name:"BackgroundMaterial",uniforms:Ui(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=$e.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,d){f.getRGB(Ns,Oc(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(f,d=1){o.set(f),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(o,l)},render:g}}function Lm(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,u=!1;function h(P,U,X,Z,Y){let I=!1;if(a){const V=_(Z,X,U);c!==V&&(c=V,m(c.object)),I=d(P,Z,X,Y),I&&v(P,Z,X,Y)}else{const V=U.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==V)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=V,I=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(I||u)&&(u=!1,W(P,U,X,Z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,U,X){const Z=X.wireframe===!0;let Y=o[P.id];Y===void 0&&(Y={},o[P.id]=Y);let I=Y[U.id];I===void 0&&(I={},Y[U.id]=I);let V=I[Z];return V===void 0&&(V=f(p()),I[Z]=V),V}function f(P){const U=[],X=[],Z=[];for(let Y=0;Y<s;Y++)U[Y]=0,X[Y]=0,Z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:Z,object:P,attributes:{},index:null}}function d(P,U,X,Z){const Y=c.attributes,I=U.attributes;let V=0;const j=X.getAttributes();for(const J in j)if(j[J].location>=0){const $=Y[J];let se=I[J];if(se===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;V++}return c.attributesNum!==V||c.index!==Z}function v(P,U,X,Z){const Y={},I=U.attributes;let V=0;const j=X.getAttributes();for(const J in j)if(j[J].location>=0){let $=I[J];$===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&($=P.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),Y[J]=se,V++}c.attributes=Y,c.attributesNum=V,c.index=Z}function x(){const P=c.newAttributes;for(let U=0,X=P.length;U<X;U++)P[U]=0}function A(P){b(P,0)}function b(P,U){const X=c.newAttributes,Z=c.enabledAttributes,Y=c.attributeDivisors;X[P]=1,Z[P]===0&&(i.enableVertexAttribArray(P),Z[P]=1),Y[P]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),Y[P]=U)}function R(){const P=c.newAttributes,U=c.enabledAttributes;for(let X=0,Z=U.length;X<Z;X++)U[X]!==P[X]&&(i.disableVertexAttribArray(X),U[X]=0)}function C(P,U,X,Z,Y,I,V){V===!0?i.vertexAttribIPointer(P,U,X,Y,I):i.vertexAttribPointer(P,U,X,Z,Y,I)}function W(P,U,X,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=Z.attributes,I=X.getAttributes(),V=U.defaultAttributeValues;for(const j in I){const J=I[j];if(J.location>=0){let k=Y[j];if(k===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const $=k.normalized,se=k.itemSize,fe=t.get(k);if(fe===void 0)continue;const ue=fe.buffer,_e=fe.type,be=fe.bytesPerElement,Se=n.isWebGL2===!0&&(_e===i.INT||_e===i.UNSIGNED_INT||k.gpuType===vc);if(k.isInterleavedBufferAttribute){const Oe=k.data,F=Oe.stride,st=k.offset;if(Oe.isInstancedInterleavedBuffer){for(let oe=0;oe<J.locationSize;oe++)b(J.location+oe,Oe.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let oe=0;oe<J.locationSize;oe++)A(J.location+oe);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let oe=0;oe<J.locationSize;oe++)C(J.location+oe,se/J.locationSize,_e,$,F*be,(st+se/J.locationSize*oe)*be,Se)}else{if(k.isInstancedBufferAttribute){for(let Oe=0;Oe<J.locationSize;Oe++)b(J.location+Oe,k.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Oe=0;Oe<J.locationSize;Oe++)A(J.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,ue);for(let Oe=0;Oe<J.locationSize;Oe++)C(J.location+Oe,se/J.locationSize,_e,$,se*be,se/J.locationSize*Oe*be,Se)}}else if(V!==void 0){const $=V[j];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(J.location,$);break;case 3:i.vertexAttrib3fv(J.location,$);break;case 4:i.vertexAttrib4fv(J.location,$);break;default:i.vertexAttrib1fv(J.location,$)}}}}R()}function S(){q();for(const P in o){const U=o[P];for(const X in U){const Z=U[X];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete U[X]}delete o[P]}}function w(P){if(o[P.id]===void 0)return;const U=o[P.id];for(const X in U){const Z=U[X];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete U[X]}delete o[P.id]}function O(P){for(const U in o){const X=o[U];if(X[P.id]===void 0)continue;const Z=X[P.id];for(const Y in Z)g(Z[Y].object),delete Z[Y];delete X[P.id]}}function q(){ne(),u=!0,c!==l&&(c=l,m(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:ne,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:A,disableUnusedAttributes:R}}function Pm(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,p){if(p===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,p),t.update(h,r,p)}function c(u,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Im(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,A=a||e.has("OES_texture_float"),b=x&&A,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:f,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:b,maxSamples:R}}function Nm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new jn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||s;return s=p,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,m){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const v=r?0:n,x=v*4;let A=d.clippingState||null;l.value=A,A=u(g,p,x,m);for(let b=0;b!==x;++b)A[b]=t[b];d.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,m,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const d=m+_*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<d)&&(f=new Float32Array(d));for(let x=0,A=m;x!==_;++x,A+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(f,A),f[A+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Dm(i){let e=new WeakMap;function t(a,o){return o===aa?a.mapping=Li:o===oa&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===aa||o===oa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xd(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ca extends Bc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Xo=[.125,.215,.35,.446,.526,.582],$n=20,Hr=new Ca,jo=new Ne;let Vr=null,Wr=0,Xr=0;const qn=(1+Math.sqrt(5))/2,_i=1/qn,qo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,qn,_i),new D(0,qn,-_i),new D(_i,0,qn),new D(-_i,0,qn),new D(qn,_i,0),new D(-qn,_i,0)];class Yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vr,Wr,Xr),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Ni,format:nn,colorSpace:En,depthBuffer:!1},s=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Fm(r,e,t)}return s}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,s){const o=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(jo),u.toneMapping=Dn,u.autoClear=!1;const m=new bn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new rt(new cn,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(jo),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Ds(s,v*x,d>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Li||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qo[(s-1)%qo.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*$n-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):$n;f>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${$n}`);const d=[];let v=0;for(let C=0;C<$n;++C){const W=C/_,S=Math.exp(-W*W/2);d.push(S),C===0?v+=S:C<f&&(v+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const A=this._sizeLods[s],b=3*A*(s>x-Ai?s-x+Ai:0),R=4*(this._cubeSize-A);Ds(t,b,R,3*A,2*A),l.setRenderTarget(t),l.render(h,Hr)}}function Um(i){const e=[],t=[],n=[];let s=i;const r=i-Ai+1+Xo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ai?l=Xo[a-i+Ai-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,f=2,d=1,v=new Float32Array(_*g*m),x=new Float32Array(f*g*m),A=new Float32Array(d*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,W=R>2?0:-1,S=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];v.set(S,_*g*R),x.set(p,f*g*R);const w=[R,R,R,R,R,R];A.set(w,d*g*R)}const b=new Gt;b.setAttribute("position",new kt(v,_)),b.setAttribute("uv",new kt(x,f)),b.setAttribute("faceIndex",new kt(A,d)),e.push(b),s>Ai&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $o(i,e,t){const n=new zn(i,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fm(i,e,t){const n=new Float32Array($n),s=new D(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ko(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Zo(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Om(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===aa||l===oa,u=l===Li||l===Pi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Yo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Yo(i));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,e,t,n){const s={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let f=0,d=_.length;f<d;f++)e.remove(_[f])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let f=0,d=_.length;f<d;f++)e.update(_[f],i.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,A=v.length;x<A;x+=3){const b=v[x+0],R=v[x+1],C=v[x+2];p.push(b,R,R,C,C,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,A=v.length/3-1;x<A;x+=3){const b=x+0,R=x+1,C=x+2;p.push(b,R,R,C,C,b)}}else return;const f=new(Cc(p)?Fc:Uc)(p,1);f.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,f)}function u(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function km(i,e,t,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,g){i.drawElements(r,g,o,m*l),t.update(g,r,1)}function h(m,g,_){if(_===0)return;let f,d;if(s)f=i,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,g,o,m*l,_),t.update(g,r,_)}function p(m,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<_;d++)this.render(m[d]/l,g[d]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];t.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function Gm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Hm(i,e){return i[0]-e[0]}function Vm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wm(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let P=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let W=0;v===!0&&(W=1),x===!0&&(W=2),A===!0&&(W=3);let S=u.attributes.position.count*W,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const O=new Float32Array(S*w*4*g),q=new Ic(O,S,w,g);q.type=In,q.needsUpdate=!0;const ne=W*4;for(let U=0;U<g;U++){const X=b[U],Z=R[U],Y=C[U],I=S*w*4*U;for(let V=0;V<X.count;V++){const j=V*ne;v===!0&&(a.fromBufferAttribute(X,V),O[I+j+0]=a.x,O[I+j+1]=a.y,O[I+j+2]=a.z,O[I+j+3]=0),x===!0&&(a.fromBufferAttribute(Z,V),O[I+j+4]=a.x,O[I+j+5]=a.y,O[I+j+6]=a.z,O[I+j+7]=0),A===!0&&(a.fromBufferAttribute(Y,V),O[I+j+8]=a.x,O[I+j+9]=a.y,O[I+j+10]=a.z,O[I+j+11]=Y.itemSize===4?a.w:1)}}_={count:g,texture:q,size:new Pe(S,w)},r.set(u,_),u.addEventListener("dispose",P)}let f=0;for(let v=0;v<p.length;v++)f+=p[v];const d=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",d),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<m;x++){const A=g[x];A[0]=x,A[1]=p[x]}g.sort(Vm);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Hm);const _=u.morphAttributes.position,f=u.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const A=o[x],b=A[0],R=A[1];b!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+x)!==_[b]&&u.setAttribute("morphTarget"+x,_[b]),f&&u.getAttribute("morphNormal"+x)!==f[b]&&u.setAttribute("morphNormal"+x,f[b]),s[x]=R,d+=R):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),f&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const v=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Xm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Gc extends Dt{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Jn&&(n=Pn),n===void 0&&u===Di&&(n=Zn),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hc=new Dt,Vc=new Gc(1,1);Vc.compareFunction=Rc;const Wc=new Ic,Xc=new Cd,jc=new zc,Jo=[],Qo=[],el=new Float32Array(16),tl=new Float32Array(9),nl=new Float32Array(4);function zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Jo[s];if(r===void 0&&(r=new Float32Array(s),Jo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ur(i,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;nl.set(n),i.uniformMatrix2fv(this.addr,!1,nl),_t(t,n)}}function Zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),_t(t,n)}}function Jm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;el.set(n),i.uniformMatrix4fv(this.addr,!1,el),_t(t,n)}}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function og(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Vc:Hc;t.setTexture2D(e||r,s)}function lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xc,s)}function cg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||jc,s)}function ug(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wc,s)}function hg(i){switch(i){case 5126:return jm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return Km;case 35675:return Zm;case 35676:return Jm;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}function dg(i,e){i.uniform1fv(this.addr,e)}function fg(i,e){const t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){const t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function mg(i,e){const t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function gg(i,e){const t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){const t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xg(i,e){const t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vg(i,e){i.uniform1iv(this.addr,e)}function Mg(i,e){i.uniform2iv(this.addr,e)}function Sg(i,e){i.uniform3iv(this.addr,e)}function yg(i,e){i.uniform4iv(this.addr,e)}function Eg(i,e){i.uniform1uiv(this.addr,e)}function bg(i,e){i.uniform2uiv(this.addr,e)}function Tg(i,e){i.uniform3uiv(this.addr,e)}function Ag(i,e){i.uniform4uiv(this.addr,e)}function wg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Hc,r[a])}function Rg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xc,r[a])}function Cg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||jc,r[a])}function Lg(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wc,r[a])}function Pg(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return Sg;case 35669:case 35673:return yg;case 5125:return Eg;case 36294:return bg;case 36295:return Tg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Lg}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function il(i,e){i.seq.push(e),i.map[e.id]=e}function Ug(i,e,t){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),a=jr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){il(t,c===void 0?new Ig(o,i,e):new Ng(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Dg(o),il(t,h)),t=h}}}class js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ug(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function sl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fg=37297;let Og=0;function Bg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zg(i){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(i);let n;switch(e===t?n="":e===Qs&&t===Js?n="LinearDisplayP3ToLinearSRGB":e===Js&&t===Qs&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case cr:return[n,"LinearTransferOETF"];case ht:case Ta:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Bg(i.getShaderSource(e),a)}else return s}function kg(i,e){const t=zg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Gg(i,e){let t;switch(e){case Ea:t="Linear";break;case pc:t="Reinhard";break;case mc:t="OptimizedCineon";break;case gc:t="ACESFilmic";break;case _c:t="AgX";break;case id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wi).join(`
`)}function Wg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wi(i){return i!==""}function al(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(jg,Yg)}const qg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yg(i,e){let t=ze[e];if(t===void 0){const n=qg.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fa(t)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(i){return i.replace($g,Kg)}function Kg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Pi:e="ENVMAP_TYPE_CUBE";break;case lr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function e0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fc:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function t0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zg(t),c=Jg(t),u=Qg(t),h=e0(t),p=t0(t),m=t.isWebGL2?"":Hg(t),g=Vg(t),_=Wg(r),f=s.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wi).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wi).join(`
`),v.length>0&&(v+=`
`)):(d=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),v=[m,cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,kg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=fa(a),a=al(a,t),a=ol(a,t),o=fa(o),o=al(o,t),o=ol(o,t),a=ll(a),o=ll(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=x+d+a,b=x+v+o,R=sl(s,s.VERTEX_SHADER,A),C=sl(s,s.FRAGMENT_SHADER,b);s.attachShader(f,R),s.attachShader(f,C),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function W(q){if(i.debug.checkShaderErrors){const ne=s.getProgramInfoLog(f).trim(),P=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(C).trim();let X=!0,Z=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,R,C);else{const Y=rl(s,R,"vertex"),I=rl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+ne+`
`+Y+`
`+I)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(P===""||U==="")&&(Z=!1);Z&&(q.diagnostics={runnable:X,programLog:ne,vertexShader:{log:P,prefix:d},fragmentShader:{log:U,prefix:v}})}s.deleteShader(R),s.deleteShader(C),S=new js(s,f),w=Xg(s,f)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let w;this.getAttributes=function(){return w===void 0&&W(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(f,Fg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Og++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=C,this}let i0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new r0(e),t.set(e,n)),n}}class r0{constructor(e){this.id=i0++,this.code=e,this.usedTimes=0}}function a0(i,e,t,n,s,r,a){const o=new Aa,l=new s0,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function f(S,w,O,q,ne){const P=q.fog,U=ne.geometry,X=S.isMeshStandardMaterial?q.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),Y=Z&&Z.mapping===lr?Z.image.height:null,I=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const V=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,j=V!==void 0?V.length:0;let J=0;U.morphAttributes.position!==void 0&&(J=1),U.morphAttributes.normal!==void 0&&(J=2),U.morphAttributes.color!==void 0&&(J=3);let k,$,se,fe;if(I){const wt=ln[I];k=wt.vertexShader,$=wt.fragmentShader}else k=S.vertexShader,$=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const ue=i.getRenderTarget(),_e=ne.isInstancedMesh===!0,be=ne.isBatchedMesh===!0,Se=!!S.map,Oe=!!S.matcap,F=!!Z,st=!!S.aoMap,oe=!!S.lightMap,ye=!!S.bumpMap,xe=!!S.normalMap,ot=!!S.displacementMap,ke=!!S.emissiveMap,E=!!S.metalnessMap,M=!!S.roughnessMap,z=S.anisotropy>0,te=S.clearcoat>0,ee=S.iridescence>0,ie=S.sheen>0,ve=S.transmission>0,he=z&&!!S.anisotropyMap,pe=te&&!!S.clearcoatMap,Re=te&&!!S.clearcoatNormalMap,Ge=te&&!!S.clearcoatRoughnessMap,Q=ee&&!!S.iridescenceMap,Ke=ee&&!!S.iridescenceThicknessMap,je=ie&&!!S.sheenColorMap,De=ie&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,me=!!S.specularColorMap,Be=!!S.specularIntensityMap,Ye=ve&&!!S.transmissionMap,ct=ve&&!!S.thicknessMap,Ve=!!S.gradientMap,re=!!S.alphaMap,L=S.alphaTest>0,le=!!S.alphaHash,ce=!!S.extensions,Le=!!U.attributes.uv1,Ae=!!U.attributes.uv2,Je=!!U.attributes.uv3;let Qe=Dn;return S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Qe=i.toneMapping),{isWebGL2:u,shaderID:I,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:$,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:be,instancing:_e,instancingColor:_e&&ne.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:En,map:Se,matcap:Oe,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:Y,aoMap:st,lightMap:oe,bumpMap:ye,normalMap:xe,displacementMap:p&&ot,emissiveMap:ke,normalMapObjectSpace:xe&&S.normalMapType===md,normalMapTangentSpace:xe&&S.normalMapType===wc,metalnessMap:E,roughnessMap:M,anisotropy:z,anisotropyMap:he,clearcoat:te,clearcoatMap:pe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ge,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:Ke,sheen:ie,sheenColorMap:je,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:me,specularIntensityMap:Be,transmission:ve,transmissionMap:Ye,thicknessMap:ct,gradientMap:Ve,opaque:S.transparent===!1&&S.blending===Ri,alphaMap:re,alphaTest:L,alphaHash:le,combine:S.combine,mapUv:Se&&_(S.map.channel),aoMapUv:st&&_(S.aoMap.channel),lightMapUv:oe&&_(S.lightMap.channel),bumpMapUv:ye&&_(S.bumpMap.channel),normalMapUv:xe&&_(S.normalMap.channel),displacementMapUv:ot&&_(S.displacementMap.channel),emissiveMapUv:ke&&_(S.emissiveMap.channel),metalnessMapUv:E&&_(S.metalnessMap.channel),roughnessMapUv:M&&_(S.roughnessMap.channel),anisotropyMapUv:he&&_(S.anisotropyMap.channel),clearcoatMapUv:pe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(S.sheenRoughnessMap.channel),specularMapUv:Ee&&_(S.specularMap.channel),specularColorMapUv:me&&_(S.specularColorMap.channel),specularIntensityMapUv:Be&&_(S.specularIntensityMap.channel),transmissionMapUv:Ye&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:re&&_(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(xe||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Ae,vertexUv3s:Je,pointsUvs:ne.isPoints===!0&&!!U.attributes.uv&&(Se||re),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ce&&S.extensions.derivatives===!0,extensionFragDepth:ce&&S.extensions.fragDepth===!0,extensionDrawBuffers:ce&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)w.push(O),w.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(v(w,S),x(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function A(S){const w=g[S.type];let O;if(w){const q=ln[w];O=wa.clone(q.uniforms)}else O=S.uniforms;return O}function b(S,w){let O;for(let q=0,ne=c.length;q<ne;q++){const P=c[q];if(P.cacheKey===w){O=P,++O.usedTimes;break}}return O===void 0&&(O=new n0(i,w,S,r),c.push(O)),O}function R(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function W(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:A,acquireProgram:b,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:W}}function o0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ul(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,p,m,g,_,f){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},i[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=f),e++,d}function o(h,p,m,g,_,f){const d=a(h,p,m,g,_,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(h,p,m,g,_,f){const d=a(h,p,m,g,_,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,p){t.length>1&&t.sort(h||l0),n.length>1&&n.sort(p||ul),s.length>1&&s.sort(p||ul)}function u(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function c0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new hl,i.set(n,[a])):s>=r.length?(a=new hl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function u0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ne};break;case"SpotLight":t={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function h0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let d0=0;function f0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function p0(i,e){const t=new u0,n=h0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,a=new at,o=new at;function l(u,h){let p=0,m=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,f=0,d=0,v=0,x=0,A=0,b=0,R=0,C=0,W=0,S=0;u.sort(f0);const w=h===!0?Math.PI:1;for(let q=0,ne=u.length;q<ne;q++){const P=u[q],U=P.color,X=P.intensity,Z=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=U.r*X*w,m+=U.g*X*w,g+=U.b*X*w;else if(P.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(P.sh.coefficients[I],X);S++}else if(P.isDirectionalLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const V=P.shadow,j=n.get(P);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,s.directionalShadow[_]=j,s.directionalShadowMap[_]=Y,s.directionalShadowMatrix[_]=P.shadow.matrix,A++}s.directional[_]=I,_++}else if(P.isSpotLight){const I=t.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(U).multiplyScalar(X*w),I.distance=Z,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,s.spot[d]=I;const V=P.shadow;if(P.map&&(s.spotLightMap[C]=P.map,C++,V.updateMatrices(P),P.castShadow&&W++),s.spotLightMatrix[d]=V.matrix,P.castShadow){const j=n.get(P);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,s.spotShadow[d]=j,s.spotShadowMap[d]=Y,R++}d++}else if(P.isRectAreaLight){const I=t.get(P);I.color.copy(U).multiplyScalar(X),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),s.rectArea[v]=I,v++}else if(P.isPointLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*w),I.distance=P.distance,I.decay=P.decay,P.castShadow){const V=P.shadow,j=n.get(P);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,s.pointShadow[f]=j,s.pointShadowMap[f]=Y,s.pointShadowMatrix[f]=P.shadow.matrix,b++}s.point[f]=I,f++}else if(P.isHemisphereLight){const I=t.get(P);I.skyColor.copy(P.color).multiplyScalar(X*w),I.groundColor.copy(P.groundColor).multiplyScalar(X*w),s.hemi[x]=I,x++}}v>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=g;const O=s.hash;(O.directionalLength!==_||O.pointLength!==f||O.spotLength!==d||O.rectAreaLength!==v||O.hemiLength!==x||O.numDirectionalShadows!==A||O.numPointShadows!==b||O.numSpotShadows!==R||O.numSpotMaps!==C||O.numLightProbes!==S)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=v,s.point.length=f,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=R+C-W,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=S,O.directionalLength=_,O.pointLength=f,O.spotLength=d,O.rectAreaLength=v,O.hemiLength=x,O.numDirectionalShadows=A,O.numPointShadows=b,O.numSpotShadows=R,O.numSpotMaps=C,O.numLightProbes=S,s.version=d0++)}function c(u,h){let p=0,m=0,g=0,_=0,f=0;const d=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const A=u[v];if(A.isDirectionalLight){const b=s.directional[p];b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),p++}else if(A.isSpotLight){const b=s.spot[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),g++}else if(A.isRectAreaLight){const b=s.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(d),o.identity(),a.copy(A.matrixWorld),a.premultiply(d),o.extractRotation(a),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const b=s.point[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(d),m++}else if(A.isHemisphereLight){const b=s.hemi[f];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(d),f++}}}return{setup:l,setupView:c,state:s}}function dl(i,e){const t=new p0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function m0(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new dl(i,e),t.set(r,[l])):a>=o.length?(l=new dl(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class g0 extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _0 extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function M0(i,e,t){let n=new Ra;const s=new Pe,r=new Pe,a=new St,o=new g0({depthPacking:pd}),l=new _0,c={},u=t.maxTextureSize,h={[Bn]:Nt,[Nt]:Bn,[en]:en},p=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:x0,fragmentShader:v0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let d=this.type;this.render=function(R,C,W){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),q=i.state;q.setBlending(yn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ne=d!==xn&&this.type===xn,P=d===xn&&this.type!==xn;for(let U=0,X=R.length;U<X;U++){const Z=R[U],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const I=Y.getFrameExtents();if(s.multiply(I),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/I.x),s.x=r.x*I.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/I.y),s.y=r.y*I.y,Y.mapSize.y=r.y)),Y.map===null||ne===!0||P===!0){const j=this.type!==xn?{minFilter:Pt,magFilter:Pt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new zn(s.x,s.y,j),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const V=Y.getViewportCount();for(let j=0;j<V;j++){const J=Y.getViewport(j);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),q.viewport(a),Y.updateMatrices(Z,j),n=Y.getFrustum(),A(C,W,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===xn&&v(Y,W),Y.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(S,w,O)};function v(R,C){const W=e.update(_);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zn(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,W,p,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,W,m,_,null)}function x(R,C,W,S){let w=null;const O=W.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)w=O;else if(w=W.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=w.uuid,ne=C.uuid;let P=c[q];P===void 0&&(P={},c[q]=P);let U=P[ne];U===void 0&&(U=w.clone(),P[ne]=U,C.addEventListener("dispose",b)),w=U}if(w.visible=C.visible,w.wireframe=C.wireframe,S===xn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:h[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const q=i.properties.get(w);q.light=W}return w}function A(R,C,W,S,w){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===xn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld);const ne=e.update(R),P=R.material;if(Array.isArray(P)){const U=ne.groups;for(let X=0,Z=U.length;X<Z;X++){const Y=U[X],I=P[Y.materialIndex];if(I&&I.visible){const V=x(R,I,S,w);R.onBeforeShadow(i,R,C,W,ne,V,Y),i.renderBufferDirect(W,null,ne,V,R,Y),R.onAfterShadow(i,R,C,W,ne,V,Y)}}}else if(P.visible){const U=x(R,P,S,w);R.onBeforeShadow(i,R,C,W,ne,U,null),i.renderBufferDirect(W,null,ne,U,R,null),R.onAfterShadow(i,R,C,W,ne,U,null)}}const q=R.children;for(let ne=0,P=q.length;ne<P;ne++)A(q[ne],C,W,S,w)}function b(R){R.target.removeEventListener("dispose",b);for(const W in c){const S=c[W],w=R.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function S0(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const le=new St;let ce=null;const Le=new St(0,0,0,0);return{setMask:function(Ae){ce!==Ae&&!L&&(i.colorMask(Ae,Ae,Ae,Ae),ce=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,Je,Qe,xt,wt){wt===!0&&(Ae*=xt,Je*=xt,Qe*=xt),le.set(Ae,Je,Qe,xt),Le.equals(le)===!1&&(i.clearColor(Ae,Je,Qe,xt),Le.copy(le))},reset:function(){L=!1,ce=null,Le.set(-1,0,0,0)}}}function r(){let L=!1,le=null,ce=null,Le=null;return{setTest:function(Ae){Ae?be(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Ae){le!==Ae&&!L&&(i.depthMask(Ae),le=Ae)},setFunc:function(Ae){if(ce!==Ae){switch(Ae){case Yh:i.depthFunc(i.NEVER);break;case $h:i.depthFunc(i.ALWAYS);break;case Kh:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Zh:i.depthFunc(i.EQUAL);break;case Jh:i.depthFunc(i.GEQUAL);break;case Qh:i.depthFunc(i.GREATER);break;case ed:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Le!==Ae&&(i.clearDepth(Ae),Le=Ae)},reset:function(){L=!1,le=null,ce=null,Le=null}}}function a(){let L=!1,le=null,ce=null,Le=null,Ae=null,Je=null,Qe=null,xt=null,wt=null;return{setTest:function(et){L||(et?be(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(et){le!==et&&!L&&(i.stencilMask(et),le=et)},setFunc:function(et,Rt,rn){(ce!==et||Le!==Rt||Ae!==rn)&&(i.stencilFunc(et,Rt,rn),ce=et,Le=Rt,Ae=rn)},setOp:function(et,Rt,rn){(Je!==et||Qe!==Rt||xt!==rn)&&(i.stencilOp(et,Rt,rn),Je=et,Qe=Rt,xt=rn)},setLocked:function(et){L=et},setClear:function(et){wt!==et&&(i.clearStencil(et),wt=et)},reset:function(){L=!1,le=null,ce=null,Le=null,Ae=null,Je=null,Qe=null,xt=null,wt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,_=[],f=null,d=!1,v=null,x=null,A=null,b=null,R=null,C=null,W=null,S=new Ne(0,0,0),w=0,O=!1,q=null,ne=null,P=null,U=null,X=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,I=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=I>=1):V.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=I>=2);let j=null,J={};const k=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),se=new St().fromArray(k),fe=new St().fromArray($);function ue(L,le,ce,Le){const Ae=new Uint8Array(4),Je=i.createTexture();i.bindTexture(L,Je),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ce;Qe++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(le,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(le+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Je}const _e={};_e[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(i.DEPTH_TEST),l.setFunc($s),ke(!1),E(Ya),be(i.CULL_FACE),xe(yn);function be(L){p[L]!==!0&&(i.enable(L),p[L]=!0)}function Se(L){p[L]!==!1&&(i.disable(L),p[L]=!1)}function Oe(L,le){return m[L]!==le?(i.bindFramebuffer(L,le),m[L]=le,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=le)),!0):!1}function F(L,le){let ce=_,Le=!1;if(L)if(ce=g.get(le),ce===void 0&&(ce=[],g.set(le,ce)),L.isWebGLMultipleRenderTargets){const Ae=L.texture;if(ce.length!==Ae.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,Qe=Ae.length;Je<Qe;Je++)ce[Je]=i.COLOR_ATTACHMENT0+Je;ce.length=Ae.length,Le=!0}}else ce[0]!==i.COLOR_ATTACHMENT0&&(ce[0]=i.COLOR_ATTACHMENT0,Le=!0);else ce[0]!==i.BACK&&(ce[0]=i.BACK,Le=!0);Le&&(t.isWebGL2?i.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function st(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const oe={[Yn]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Dh]:i.FUNC_REVERSE_SUBTRACT};if(n)oe[Za]=i.MIN,oe[Ja]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(oe[Za]=L.MIN_EXT,oe[Ja]=L.MAX_EXT)}const ye={[Uh]:i.ZERO,[Fh]:i.ONE,[Oh]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[Gh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[jh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(L,le,ce,Le,Ae,Je,Qe,xt,wt,et){if(L===yn){d===!0&&(Se(i.BLEND),d=!1);return}if(d===!1&&(be(i.BLEND),d=!0),L!==Ih){if(L!==v||et!==O){if((x!==Yn||R!==Yn)&&(i.blendEquation(i.FUNC_ADD),x=Yn,R=Yn),et)switch(L){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ys:i.blendFunc(i.ONE,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,b=null,C=null,W=null,S.set(0,0,0),w=0,v=L,O=et}return}Ae=Ae||le,Je=Je||ce,Qe=Qe||Le,(le!==x||Ae!==R)&&(i.blendEquationSeparate(oe[le],oe[Ae]),x=le,R=Ae),(ce!==A||Le!==b||Je!==C||Qe!==W)&&(i.blendFuncSeparate(ye[ce],ye[Le],ye[Je],ye[Qe]),A=ce,b=Le,C=Je,W=Qe),(xt.equals(S)===!1||wt!==w)&&(i.blendColor(xt.r,xt.g,xt.b,wt),S.copy(xt),w=wt),v=L,O=!1}function ot(L,le){L.side===en?Se(i.CULL_FACE):be(i.CULL_FACE);let ce=L.side===Nt;le&&(ce=!ce),ke(ce),L.blending===Ri&&L.transparent===!1?xe(yn):xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Le=L.stencilWrite;c.setTest(Le),Le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),z(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function E(L){L!==Lh?(be(i.CULL_FACE),L!==ne&&(L===Ya?i.cullFace(i.BACK):L===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),ne=L}function M(L){L!==P&&(Y&&i.lineWidth(L),P=L)}function z(L,le,ce){L?(be(i.POLYGON_OFFSET_FILL),(U!==le||X!==ce)&&(i.polygonOffset(le,ce),U=le,X=ce)):Se(i.POLYGON_OFFSET_FILL)}function te(L){L?be(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function ee(L){L===void 0&&(L=i.TEXTURE0+Z-1),j!==L&&(i.activeTexture(L),j=L)}function ie(L,le,ce){ce===void 0&&(j===null?ce=i.TEXTURE0+Z-1:ce=j);let Le=J[ce];Le===void 0&&(Le={type:void 0,texture:void 0},J[ce]=Le),(Le.type!==L||Le.texture!==le)&&(j!==ce&&(i.activeTexture(ce),j=ce),i.bindTexture(L,le||_e[L]),Le.type=L,Le.texture=le)}function ve(){const L=J[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(L){se.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function Ye(L){fe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),fe.copy(L))}function ct(L,le){let ce=h.get(le);ce===void 0&&(ce=new WeakMap,h.set(le,ce));let Le=ce.get(L);Le===void 0&&(Le=i.getUniformBlockIndex(le,L.name),ce.set(L,Le))}function Ve(L,le){const Le=h.get(le).get(L);u.get(le)!==Le&&(i.uniformBlockBinding(le,Le,L.__bindingPointIndex),u.set(le,Le))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},j=null,J={},m={},g=new WeakMap,_=[],f=null,d=!1,v=null,x=null,A=null,b=null,R=null,C=null,W=null,S=new Ne(0,0,0),w=0,O=!1,q=null,ne=null,P=null,U=null,X=null,se.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:Se,bindFramebuffer:Oe,drawBuffers:F,useProgram:st,setBlending:xe,setMaterial:ot,setFlipSided:ke,setCullFace:E,setLineWidth:M,setPolygonOffset:z,setScissorTest:te,activeTexture:ee,bindTexture:ie,unbindTexture:ve,compressedTexImage2D:he,compressedTexImage3D:pe,texImage2D:Ee,texImage3D:me,updateUBOMapping:ct,uniformBlockBinding:Ve,texStorage2D:je,texStorage3D:De,texSubImage2D:Re,texSubImage3D:Ge,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:Be,viewport:Ye,reset:re}}function y0(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return m?new OffscreenCanvas(E,M):tr("canvas")}function _(E,M,z,te){let ee=1;if((E.width>te||E.height>te)&&(ee=te/Math.max(E.width,E.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ie=M?da:Math.floor,ve=ie(ee*E.width),he=ie(ee*E.height);h===void 0&&(h=g(ve,he));const pe=z?g(ve,he):h;return pe.width=ve,pe.height=he,pe.getContext("2d").drawImage(E,0,0,ve,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+he+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return Ro(E.width)&&Ro(E.height)}function d(E){return o?!1:E.wrapS!==tn||E.wrapT!==tn||E.minFilter!==Pt&&E.minFilter!==Xt}function v(E,M){return E.generateMipmaps&&M&&E.minFilter!==Pt&&E.minFilter!==Xt}function x(E){i.generateMipmap(E)}function A(E,M,z,te,ee=!1){if(o===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie=M;if(M===i.RED&&(z===i.FLOAT&&(ie=i.R32F),z===i.HALF_FLOAT&&(ie=i.R16F),z===i.UNSIGNED_BYTE&&(ie=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ie=i.R8UI),z===i.UNSIGNED_SHORT&&(ie=i.R16UI),z===i.UNSIGNED_INT&&(ie=i.R32UI),z===i.BYTE&&(ie=i.R8I),z===i.SHORT&&(ie=i.R16I),z===i.INT&&(ie=i.R32I)),M===i.RG&&(z===i.FLOAT&&(ie=i.RG32F),z===i.HALF_FLOAT&&(ie=i.RG16F),z===i.UNSIGNED_BYTE&&(ie=i.RG8)),M===i.RGBA){const ve=ee?Zs:$e.getTransfer(te);z===i.FLOAT&&(ie=i.RGBA32F),z===i.HALF_FLOAT&&(ie=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ie=ve===tt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function b(E,M,z){return v(E,z)===!0||E.isFramebufferTexture&&E.minFilter!==Pt&&E.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function R(E){return E===Pt||E===Qa||E===_r?i.NEAREST:i.LINEAR}function C(E){const M=E.target;M.removeEventListener("dispose",C),S(M),M.isVideoTexture&&u.delete(M)}function W(E){const M=E.target;M.removeEventListener("dispose",W),O(M)}function S(E){const M=n.get(E);if(M.__webglInit===void 0)return;const z=E.source,te=p.get(z);if(te){const ee=te[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(E),Object.keys(te).length===0&&p.delete(z)}n.remove(E)}function w(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const z=E.source,te=p.get(z);delete te[M.__cacheKey],a.memory.textures--}function O(E){const M=E.texture,z=n.get(E),te=n.get(M);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let ie=0;ie<z.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(z.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)i.deleteFramebuffer(z.__webglFramebuffer[ee]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,ie=M.length;ee<ie;ee++){const ve=n.get(M[ee]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(M[ee])}n.remove(M),n.remove(E)}let q=0;function ne(){q=0}function P(){const E=q;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),q+=1,E}function U(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function X(E,M){const z=n.get(E);if(E.isVideoTexture&&ot(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,E,M);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function Z(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){se(z,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function Y(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){se(z,E,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function I(E,M){const z=n.get(E);if(E.version>0&&z.__version!==E.version){fe(z,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const V={[Ks]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},j={[Pt]:i.NEAREST,[Qa]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[sd]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},J={[gd]:i.NEVER,[yd]:i.ALWAYS,[_d]:i.LESS,[Rc]:i.LEQUAL,[xd]:i.EQUAL,[Sd]:i.GEQUAL,[vd]:i.GREATER,[Md]:i.NOTEQUAL};function k(E,M,z){if(z?(i.texParameteri(E,i.TEXTURE_WRAP_S,V[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,V[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,V[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,j[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,j[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==tn||M.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,R(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Pt&&M.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Pt||M.minFilter!==_r&&M.minFilter!==Ii||M.type===In&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ni&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function $(E,M){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",C));const te=M.source;let ee=p.get(te);ee===void 0&&(ee={},p.set(te,ee));const ie=U(M);if(ie!==E.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[ie].usedTimes++;const ve=ee[E.__cacheKey];ve!==void 0&&(ee[E.__cacheKey].usedTimes--,ve.usedTimes===0&&w(M)),E.__cacheKey=ie,E.__webglTexture=ee[ie].texture}return z}function se(E,M,z){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);const ee=$(E,M),ie=M.source;t.bindTexture(te,E.__webglTexture,i.TEXTURE0+z);const ve=n.get(ie);if(ie.version!==ve.__version||ee===!0){t.activeTexture(i.TEXTURE0+z);const he=$e.getPrimaries($e.workingColorSpace),pe=M.colorSpace===Yt?null:$e.getPrimaries(M.colorSpace),Re=M.colorSpace===Yt||he===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ge=d(M)&&f(M.image)===!1;let Q=_(M.image,Ge,!1,s.maxTextureSize);Q=ke(M,Q);const Ke=f(Q)||o,je=r.convert(M.format,M.colorSpace);let De=r.convert(M.type),Ee=A(M.internalFormat,je,De,M.colorSpace,M.isVideoTexture);k(te,M,Ke);let me;const Be=M.mipmaps,Ye=o&&M.isVideoTexture!==!0&&Ee!==Tc,ct=ve.__version===void 0||ee===!0,Ve=b(M,Q,Ke);if(M.isDepthTexture)Ee=i.DEPTH_COMPONENT,o?M.type===In?Ee=i.DEPTH_COMPONENT32F:M.type===Pn?Ee=i.DEPTH_COMPONENT24:M.type===Zn?Ee=i.DEPTH24_STENCIL8:Ee=i.DEPTH_COMPONENT16:M.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Jn&&Ee===i.DEPTH_COMPONENT&&M.type!==ba&&M.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Pn,De=r.convert(M.type)),M.format===Di&&Ee===i.DEPTH_COMPONENT&&(Ee=i.DEPTH_STENCIL,M.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zn,De=r.convert(M.type))),ct&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,je,De,null));else if(M.isDataTexture)if(Be.length>0&&Ke){Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,Ve,Ee,Be[0].width,Be[0].height);for(let re=0,L=Be.length;re<L;re++)me=Be[re],Ye?t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,je,De,me.data):t.texImage2D(i.TEXTURE_2D,re,Ee,me.width,me.height,0,je,De,me.data);M.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(i.TEXTURE_2D,Ve,Ee,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,je,De,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,je,De,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ee,Be[0].width,Be[0].height,Q.depth);for(let re=0,L=Be.length;re<L;re++)me=Be[re],M.format!==nn?je!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,Q.depth,je,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ee,me.width,me.height,Q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,Q.depth,je,De,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ee,me.width,me.height,Q.depth,0,je,De,me.data)}else{Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,Ve,Ee,Be[0].width,Be[0].height);for(let re=0,L=Be.length;re<L;re++)me=Be[re],M.format!==nn?je!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,je,me.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,je,De,me.data):t.texImage2D(i.TEXTURE_2D,re,Ee,me.width,me.height,0,je,De,me.data)}else if(M.isDataArrayTexture)Ye?(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,je,De,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,je,De,Q.data);else if(M.isData3DTexture)Ye?(ct&&t.texStorage3D(i.TEXTURE_3D,Ve,Ee,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,je,De,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,je,De,Q.data);else if(M.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(i.TEXTURE_2D,Ve,Ee,Q.width,Q.height);else{let re=Q.width,L=Q.height;for(let le=0;le<Ve;le++)t.texImage2D(i.TEXTURE_2D,le,Ee,re,L,0,je,De,null),re>>=1,L>>=1}}else if(Be.length>0&&Ke){Ye&&ct&&t.texStorage2D(i.TEXTURE_2D,Ve,Ee,Be[0].width,Be[0].height);for(let re=0,L=Be.length;re<L;re++)me=Be[re],Ye?t.texSubImage2D(i.TEXTURE_2D,re,0,0,je,De,me):t.texImage2D(i.TEXTURE_2D,re,Ee,je,De,me);M.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(i.TEXTURE_2D,Ve,Ee,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,De,Q)):t.texImage2D(i.TEXTURE_2D,0,Ee,je,De,Q);v(M,Ke)&&x(te),ve.__version=ie.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function fe(E,M,z){if(M.image.length!==6)return;const te=$(E,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);const ie=n.get(ee);if(ee.version!==ie.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const ve=$e.getPrimaries($e.workingColorSpace),he=M.colorSpace===Yt?null:$e.getPrimaries(M.colorSpace),pe=M.colorSpace===Yt||ve===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Re=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Re&&!Ge?Q[re]=_(M.image[re],!1,!0,s.maxCubemapSize):Q[re]=Ge?M.image[re].image:M.image[re],Q[re]=ke(M,Q[re]);const Ke=Q[0],je=f(Ke)||o,De=r.convert(M.format,M.colorSpace),Ee=r.convert(M.type),me=A(M.internalFormat,De,Ee,M.colorSpace),Be=o&&M.isVideoTexture!==!0,Ye=ie.__version===void 0||te===!0;let ct=b(M,Ke,je);k(i.TEXTURE_CUBE_MAP,M,je);let Ve;if(Re){Be&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,me,Ke.width,Ke.height);for(let re=0;re<6;re++){Ve=Q[re].mipmaps;for(let L=0;L<Ve.length;L++){const le=Ve[L];M.format!==nn?De!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,le.width,le.height,De,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,le.width,le.height,De,Ee,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,me,le.width,le.height,0,De,Ee,le.data)}}}else{Ve=M.mipmaps,Be&&Ye&&(Ve.length>0&&ct++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,me,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(Ge){Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,De,Ee,Q[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,Q[re].width,Q[re].height,0,De,Ee,Q[re].data);for(let L=0;L<Ve.length;L++){const ce=Ve[L].image[re].image;Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,ce.width,ce.height,De,Ee,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,me,ce.width,ce.height,0,De,Ee,ce.data)}}else{Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,Ee,Q[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,De,Ee,Q[re]);for(let L=0;L<Ve.length;L++){const le=Ve[L];Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,De,Ee,le.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,me,De,Ee,le.image[re])}}}v(M,je)&&x(i.TEXTURE_CUBE_MAP),ie.__version=ee.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ue(E,M,z,te,ee,ie){const ve=r.convert(z.format,z.colorSpace),he=r.convert(z.type),pe=A(z.internalFormat,ve,he,z.colorSpace);if(!n.get(M).__hasExternalTextures){const Ge=Math.max(1,M.width>>ie),Q=Math.max(1,M.height>>ie);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,pe,Ge,Q,M.depth,0,ve,he,null):t.texImage2D(ee,ie,pe,Ge,Q,0,ve,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),xe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ee,n.get(z).__webglTexture,0,ye(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ee,n.get(z).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(E,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||xe(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===In?te=i.DEPTH_COMPONENT32F:ee.type===Pn&&(te=i.DEPTH_COMPONENT24));const ie=ye(M);xe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,te,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,te,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const te=ye(M);z&&xe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<te.length;ee++){const ie=te[ee],ve=r.convert(ie.format,ie.colorSpace),he=r.convert(ie.type),pe=A(ie.internalFormat,ve,he,ie.colorSpace),Re=ye(M);z&&xe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,pe,M.width,M.height):xe(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,ee=ye(M);if(M.depthTexture.format===Jn)xe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===Di)xe(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Se(E){const M=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");be(M.__webglFramebuffer,E)}else if(z){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=i.createRenderbuffer(),_e(M.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),_e(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(E,M,z){const te=n.get(E);M!==void 0&&ue(te.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Se(E)}function F(E){const M=E.texture,z=n.get(E),te=n.get(M);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,a.memory.textures++);const ee=E.isWebGLCubeRenderTarget===!0,ie=E.isWebGLMultipleRenderTargets===!0,ve=f(E)||o;if(ee){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let pe=0;pe<M.mipmaps.length;pe++)z.__webglFramebuffer[he][pe]=i.createFramebuffer()}else z.__webglFramebuffer[he]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)z.__webglFramebuffer[he]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ie)if(s.drawBuffers){const he=E.texture;for(let pe=0,Re=he.length;pe<Re;pe++){const Ge=n.get(he[pe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&xe(E)===!1){const he=ie?M:[M];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const Re=he[pe];z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Ge=r.convert(Re.format,Re.colorSpace),Q=r.convert(Re.type),Ke=A(Re.internalFormat,Ge,Q,Re.colorSpace,E.isXRRenderTarget===!0),je=ye(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ke,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),k(i.TEXTURE_CUBE_MAP,M,ve);for(let he=0;he<6;he++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ue(z.__webglFramebuffer[he][pe],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else ue(z.__webglFramebuffer[he],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(M,ve)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const he=E.texture;for(let pe=0,Re=he.length;pe<Re;pe++){const Ge=he[pe],Q=n.get(Ge);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),k(i.TEXTURE_2D,Ge,ve),ue(z.__webglFramebuffer,E,Ge,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),v(Ge,ve)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?he=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),k(he,M,ve),o&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ue(z.__webglFramebuffer[pe],E,M,i.COLOR_ATTACHMENT0,he,pe);else ue(z.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,he,0);v(M,ve)&&x(he),t.unbindTexture()}E.depthBuffer&&Se(E)}function st(E){const M=f(E)||o,z=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ee=z.length;te<ee;te++){const ie=z[te];if(v(ie,M)){const ve=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=n.get(ie).__webglTexture;t.bindTexture(ve,he),x(ve),t.unbindTexture()}}}function oe(E){if(o&&E.samples>0&&xe(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],z=E.width,te=E.height;let ee=i.COLOR_BUFFER_BIT;const ie=[],ve=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(E),pe=E.isWebGLMultipleRenderTargets===!0;if(pe)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){ie.push(i.COLOR_ATTACHMENT0+Re),E.depthBuffer&&ie.push(ve);const Ge=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ge===!1&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),pe){const Q=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,te,0,0,z,te,ee,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);const Ge=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function ye(E){return Math.min(s.maxSamples,E.samples)}function xe(E){const M=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(E){const M=a.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function ke(E,M){const z=E.colorSpace,te=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ua||z!==En&&z!==Yt&&($e.getTransfer(z)===tt?o===!1?e.has("EXT_sRGB")===!0&&te===nn?(E.format=ua,E.minFilter=Xt,E.generateMipmaps=!1):M=Lc.sRGBToLinear(M):(te!==nn||ee!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}this.allocateTextureUnit=P,this.resetTextureUnits=ne,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=I,this.rebindTextures=Oe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=xe}function E0(i,e,t){const n=t.isWebGL2;function s(r,a=Yt){let o;const l=$e.getTransfer(a);if(r===Un)return i.UNSIGNED_BYTE;if(r===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===rd)return i.BYTE;if(r===ad)return i.SHORT;if(r===ba)return i.UNSIGNED_SHORT;if(r===vc)return i.INT;if(r===Pn)return i.UNSIGNED_INT;if(r===In)return i.FLOAT;if(r===Ni)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===od)return i.ALPHA;if(r===nn)return i.RGBA;if(r===ld)return i.LUMINANCE;if(r===cd)return i.LUMINANCE_ALPHA;if(r===Jn)return i.DEPTH_COMPONENT;if(r===Di)return i.DEPTH_STENCIL;if(r===ua)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ud)return i.RED;if(r===yc)return i.RED_INTEGER;if(r===hd)return i.RG;if(r===Ec)return i.RG_INTEGER;if(r===bc)return i.RGBA_INTEGER;if(r===xr||r===vr||r===Mr||r===Sr)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eo||r===to||r===no||r===io)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===to)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===no)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===io)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===so||r===ro)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===so)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ro)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ao||r===oo||r===lo||r===co||r===uo||r===ho||r===fo||r===po||r===mo||r===go||r===_o||r===xo||r===vo||r===Mo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ao)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===co)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ho)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===po)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===go)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_o)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yr||r===So||r===yo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===yr)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===So)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dd||r===Eo||r===bo||r===To)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===yr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Eo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===To)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class b0 extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),d=this._getHandJoint(c,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class A0 extends Fi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,p=null,m=null,g=null;const _=t.getContextAttributes();let f=null,d=null;const v=[],x=[],A=new Pe;let b=null;const R=new qt;R.layers.enable(1),R.viewport=new St;const C=new qt;C.layers.enable(2),C.viewport=new St;const W=[R,C],S=new b0;S.layers.enable(1),S.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=v[k];return $===void 0&&($=new qr,v[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=v[k];return $===void 0&&($=new qr,v[k]=$),$.getGripSpace()},this.getHand=function(k){let $=v[k];return $===void 0&&($=new qr,v[k]=$),$.getHandSpace()};function q(k){const $=x.indexOf(k.inputSource);if($===-1)return;const se=v[$];se!==void 0&&(se.update(k.inputSource,k.frame,c||a),se.dispatchEvent({type:k.type,data:k.inputSource}))}function ne(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",P);for(let k=0;k<v.length;k++){const $=x[k];$!==null&&(x[k]=null,v[k].disconnect($))}w=null,O=null,e.setRenderTarget(f),m=null,p=null,h=null,s=null,d=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new zn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,se=null,fe=null;_.depth&&(fe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=_.stencil?Di:Jn,se=_.stencil?Zn:Pn);const ue={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=new XRWebGLBinding(s,t),p=h.createProjectionLayer(ue),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new zn(p.textureWidth,p.textureHeight,{format:nn,type:Un,depthTexture:new Gc(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const _e=e.properties.get(d);_e.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(k){for(let $=0;$<k.removed.length;$++){const se=k.removed[$],fe=x.indexOf(se);fe>=0&&(x[fe]=null,v[fe].disconnect(se))}for(let $=0;$<k.added.length;$++){const se=k.added[$];let fe=x.indexOf(se);if(fe===-1){for(let _e=0;_e<v.length;_e++)if(_e>=x.length){x.push(se),fe=_e;break}else if(x[_e]===null){x[_e]=se,fe=_e;break}if(fe===-1)break}const ue=v[fe];ue&&ue.connect(se)}}const U=new D,X=new D;function Z(k,$,se){U.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const fe=U.distanceTo(X),ue=$.projectionMatrix.elements,_e=se.projectionMatrix.elements,be=ue[14]/(ue[10]-1),Se=ue[14]/(ue[10]+1),Oe=(ue[9]+1)/ue[5],F=(ue[9]-1)/ue[5],st=(ue[8]-1)/ue[0],oe=(_e[8]+1)/_e[0],ye=be*st,xe=be*oe,ot=fe/(-st+oe),ke=ot*-st;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ke),k.translateZ(ot),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const E=be+ot,M=Se+ot,z=ye-ke,te=xe+(fe-ke),ee=Oe*Se/M*E,ie=F*Se/M*E;k.projectionMatrix.makePerspective(z,te,ee,ie,E,M),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Y(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;S.near=C.near=R.near=k.near,S.far=C.far=R.far=k.far,(w!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,O=S.far);const $=k.parent,se=S.cameras;Y(S,$);for(let fe=0;fe<se.length;fe++)Y(se[fe],$);se.length===2?Z(S,R,C):S.projectionMatrix.copy(R.projectionMatrix),I(k,S,$)};function I(k,$,se){se===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(se.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ha*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(k){l=k,p!==null&&(p.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let V=null;function j(k,$){if(u=$.getViewerPose(c||a),g=$,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let fe=!1;se.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let ue=0;ue<se.length;ue++){const _e=se[ue];let be=null;if(m!==null)be=m.getViewport(_e);else{const Oe=h.getViewSubImage(p,_e);be=Oe.viewport,ue===0&&(e.setRenderTargetTextures(d,Oe.colorTexture,p.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(d))}let Se=W[ue];Se===void 0&&(Se=new qt,Se.layers.enable(ue),Se.viewport=new St,W[ue]=Se),Se.matrix.fromArray(_e.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(_e.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(be.x,be.y,be.width,be.height),ue===0&&(S.matrix.copy(Se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(Se)}}for(let se=0;se<v.length;se++){const fe=x[se],ue=v[se];fe!==null&&ue!==void 0&&ue.update(fe,$,c||a)}V&&V(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const J=new kc;J.setAnimationLoop(j),this.setAnimationLoop=function(k){V=k},this.dispose=function(){}}}function w0(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Oc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,v,x,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),h(f,d)):d.isMeshPhongMaterial?(r(f,d),u(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,A)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),_(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,v,x):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Nt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Nt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(f.envMap.value=v,f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,f.lightMapTransform)}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,v,x){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*v,f.scale.value=x*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function u(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,v){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Nt&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const v=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const A=x.program;n.uniformBlockBinding(v,A)}function c(v,x){let A=s[v.id];A===void 0&&(g(v),A=u(v),s[v.id]=A,v.addEventListener("dispose",f));const b=x.program;n.updateUBOMapping(v,b);const R=e.render.frame;r[v.id]!==R&&(p(v),r[v.id]=R)}function u(v){const x=h();v.__bindingPointIndex=x;const A=i.createBuffer(),b=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,A),A}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=s[v.id],A=v.uniforms,b=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=A.length;R<C;R++){const W=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,w=W.length;S<w;S++){const O=W[S];if(m(O,R,S,b)===!0){const q=O.__offset,ne=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let U=0;U<ne.length;U++){const X=ne[U],Z=_(X);typeof X=="number"||typeof X=="boolean"?(O.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,q+P,O.__data)):X.isMatrix3?(O.__data[0]=X.elements[0],O.__data[1]=X.elements[1],O.__data[2]=X.elements[2],O.__data[3]=0,O.__data[4]=X.elements[3],O.__data[5]=X.elements[4],O.__data[6]=X.elements[5],O.__data[7]=0,O.__data[8]=X.elements[6],O.__data[9]=X.elements[7],O.__data[10]=X.elements[8],O.__data[11]=0):(X.toArray(O.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,x,A,b){const R=v.value,C=x+"_"+A;if(b[C]===void 0)return typeof R=="number"||typeof R=="boolean"?b[C]=R:b[C]=R.clone(),!0;{const W=b[C];if(typeof R=="number"||typeof R=="boolean"){if(W!==R)return b[C]=R,!0}else if(W.equals(R)===!1)return W.copy(R),!0}return!1}function g(v){const x=v.uniforms;let A=0;const b=16;for(let C=0,W=x.length;C<W;C++){const S=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,O=S.length;w<O;w++){const q=S[w],ne=Array.isArray(q.value)?q.value:[q.value];for(let P=0,U=ne.length;P<U;P++){const X=ne[P],Z=_(X),Y=A%b;Y!==0&&b-Y<Z.boundary&&(A+=b-Y),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=A,A+=Z.storage}}}const R=A%b;return R>0&&(A+=b-R),v.__size=A,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function f(v){const x=v.target;x.removeEventListener("dispose",f);const A=a.indexOf(x.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class qc{constructor(e={}){const{canvas:t=bd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const x=this;let A=!1,b=0,R=0,C=null,W=-1,S=null;const w=new St,O=new St;let q=null;const ne=new Ne(0);let P=0,U=t.width,X=t.height,Z=1,Y=null,I=null;const V=new St(0,0,U,X),j=new St(0,0,U,X);let J=!1;const k=new Ra;let $=!1,se=!1,fe=null;const ue=new at,_e=new Pe,be=new D,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return C===null?Z:1}let F=n;function st(y,N){for(let G=0;G<y.length;G++){const H=y[G],B=t.getContext(H,N);if(B!==null)return B}return null}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),F=st(N,y),F===null)throw st(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let oe,ye,xe,ot,ke,E,M,z,te,ee,ie,ve,he,pe,Re,Ge,Q,Ke,je,De,Ee,me,Be,Ye;function ct(){oe=new Bm(F),ye=new Im(F,oe,e),oe.init(ye),me=new E0(F,oe,ye),xe=new S0(F,oe,ye),ot=new Gm(F),ke=new o0,E=new y0(F,oe,xe,ke,ye,me,ot),M=new Dm(x),z=new Om(x),te=new Yd(F,ye),Be=new Lm(F,oe,te,ye),ee=new zm(F,te,ot,Be),ie=new Xm(F,ee,te,ot),je=new Wm(F,ye,E),Ge=new Nm(ke),ve=new a0(x,M,z,oe,ye,Be,Ge),he=new w0(x,ke),pe=new c0,Re=new m0(oe,ye),Ke=new Cm(x,M,z,xe,ie,p,l),Q=new M0(x,ie,ye),Ye=new R0(F,ot,ye,xe),De=new Pm(F,oe,ot,ye),Ee=new km(F,oe,ot,ye),ot.programs=ve.programs,x.capabilities=ye,x.extensions=oe,x.properties=ke,x.renderLists=pe,x.shadowMap=Q,x.state=xe,x.info=ot}ct();const Ve=new A0(x,F);this.xr=Ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=oe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=oe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(U,X,!1))},this.getSize=function(y){return y.set(U,X)},this.setSize=function(y,N,G=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=y,X=N,t.width=Math.floor(y*Z),t.height=Math.floor(N*Z),G===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(U*Z,X*Z).floor()},this.setDrawingBufferSize=function(y,N,G){U=y,X=N,Z=G,t.width=Math.floor(y*G),t.height=Math.floor(N*G),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(w)},this.getViewport=function(y){return y.copy(V)},this.setViewport=function(y,N,G,H){y.isVector4?V.set(y.x,y.y,y.z,y.w):V.set(y,N,G,H),xe.viewport(w.copy(V).multiplyScalar(Z).floor())},this.getScissor=function(y){return y.copy(j)},this.setScissor=function(y,N,G,H){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,N,G,H),xe.scissor(O.copy(j).multiplyScalar(Z).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(y){xe.setScissorTest(J=y)},this.setOpaqueSort=function(y){Y=y},this.setTransparentSort=function(y){I=y},this.getClearColor=function(y){return y.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(y=!0,N=!0,G=!0){let H=0;if(y){let B=!1;if(C!==null){const de=C.texture.format;B=de===bc||de===Ec||de===yc}if(B){const de=C.texture.type,Me=de===Un||de===Pn||de===ba||de===Zn||de===Mc||de===Sc,we=Ke.getClearColor(),Ie=Ke.getClearAlpha(),He=we.r,Ue=we.g,Fe=we.b;Me?(m[0]=He,m[1]=Ue,m[2]=Fe,m[3]=Ie,F.clearBufferuiv(F.COLOR,0,m)):(g[0]=He,g[1]=Ue,g[2]=Fe,g[3]=Ie,F.clearBufferiv(F.COLOR,0,g))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT),G&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",le,!1),pe.dispose(),Re.dispose(),ke.dispose(),M.dispose(),z.dispose(),ie.dispose(),Be.dispose(),Ye.dispose(),ve.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",wt),Ve.removeEventListener("sessionend",et),fe&&(fe.dispose(),fe=null),Rt.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=ot.autoReset,N=Q.enabled,G=Q.autoUpdate,H=Q.needsUpdate,B=Q.type;ct(),ot.autoReset=y,Q.enabled=N,Q.autoUpdate=G,Q.needsUpdate=H,Q.type=B}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ce(y){const N=y.target;N.removeEventListener("dispose",ce),Le(N)}function Le(y){Ae(y),ke.remove(y)}function Ae(y){const N=ke.get(y).programs;N!==void 0&&(N.forEach(function(G){ve.releaseProgram(G)}),y.isShaderMaterial&&ve.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,G,H,B,de){N===null&&(N=Se);const Me=B.isMesh&&B.matrixWorld.determinant()<0,we=du(y,N,G,H,B);xe.setMaterial(H,Me);let Ie=G.index,He=1;if(H.wireframe===!0){if(Ie=ee.getWireframeAttribute(G),Ie===void 0)return;He=2}const Ue=G.drawRange,Fe=G.attributes.position;let dt=Ue.start*He,Ft=(Ue.start+Ue.count)*He;de!==null&&(dt=Math.max(dt,de.start*He),Ft=Math.min(Ft,(de.start+de.count)*He)),Ie!==null?(dt=Math.max(dt,0),Ft=Math.min(Ft,Ie.count)):Fe!=null&&(dt=Math.max(dt,0),Ft=Math.min(Ft,Fe.count));const vt=Ft-dt;if(vt<0||vt===1/0)return;Be.setup(B,H,we,G,Ie);let hn,lt=De;if(Ie!==null&&(hn=te.get(Ie),lt=Ee,lt.setIndex(hn)),B.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*Oe()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(B.isLine){let We=H.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*Oe()),B.isLineSegments?lt.setMode(F.LINES):B.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else B.isPoints?lt.setMode(F.POINTS):B.isSprite&&lt.setMode(F.TRIANGLES);if(B.isBatchedMesh)lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)lt.renderInstances(dt,vt,B.count);else if(G.isInstancedBufferGeometry){const We=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,dr=Math.min(G.instanceCount,We);lt.renderInstances(dt,vt,dr)}else lt.render(dt,vt)};function Je(y,N,G){y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=Nt,y.needsUpdate=!0,ds(y,N,G),y.side=Bn,y.needsUpdate=!0,ds(y,N,G),y.side=en):ds(y,N,G)}this.compile=function(y,N,G=null){G===null&&(G=y),f=Re.get(G),f.init(),v.push(f),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),y!==G&&y.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(x._useLegacyLights);const H=new Set;return y.traverse(function(B){const de=B.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const we=de[Me];Je(we,G,B),H.add(we)}else Je(de,G,B),H.add(de)}),v.pop(),f=null,H},this.compileAsync=function(y,N,G=null){const H=this.compile(y,N,G);return new Promise(B=>{function de(){if(H.forEach(function(Me){ke.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){B(y);return}setTimeout(de,10)}oe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Qe=null;function xt(y){Qe&&Qe(y)}function wt(){Rt.stop()}function et(){Rt.start()}const Rt=new kc;Rt.setAnimationLoop(xt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(y){Qe=y,Ve.setAnimationLoop(y),y===null?Rt.stop():Rt.start()},Ve.addEventListener("sessionstart",wt),Ve.addEventListener("sessionend",et),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(N),N=Ve.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,N,C),f=Re.get(y,v.length),f.init(),v.push(f),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),k.setFromProjectionMatrix(ue),se=this.localClippingEnabled,$=Ge.init(this.clippingPlanes,se),_=pe.get(y,d.length),_.init(),d.push(_),rn(y,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,I),this.info.render.frame++,$===!0&&Ge.beginShadows();const G=f.state.shadowsArray;if(Q.render(G,y,N),$===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(_,y),f.setupLights(x._useLegacyLights),N.isArrayCamera){const H=N.cameras;for(let B=0,de=H.length;B<de;B++){const Me=H[B];Na(_,y,Me,Me.viewport)}}else Na(_,y,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(x,y,N),Be.resetDefaultState(),W=-1,S=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function rn(y,N,G,H){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){H&&be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ue);const Me=ie.update(y),we=y.material;we.visible&&_.push(y,Me,we,G,be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){const Me=ie.update(y),we=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),be.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),be.copy(Me.boundingSphere.center)),be.applyMatrix4(y.matrixWorld).applyMatrix4(ue)),Array.isArray(we)){const Ie=Me.groups;for(let He=0,Ue=Ie.length;He<Ue;He++){const Fe=Ie[He],dt=we[Fe.materialIndex];dt&&dt.visible&&_.push(y,Me,dt,G,be.z,Fe)}}else we.visible&&_.push(y,Me,we,G,be.z,null)}}const de=y.children;for(let Me=0,we=de.length;Me<we;Me++)rn(de[Me],N,G,H)}function Na(y,N,G,H){const B=y.opaque,de=y.transmissive,Me=y.transparent;f.setupLightsView(G),$===!0&&Ge.setGlobalState(x.clippingPlanes,G),de.length>0&&hu(B,de,N,G),H&&xe.viewport(w.copy(H)),B.length>0&&hs(B,N,G),de.length>0&&hs(de,N,G),Me.length>0&&hs(Me,N,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function hu(y,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const de=ye.isWebGL2;fe===null&&(fe=new zn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Ni:Un,minFilter:Ii,samples:de?4:0})),x.getDrawingBufferSize(_e),de?fe.setSize(_e.x,_e.y):fe.setSize(da(_e.x),da(_e.y));const Me=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(ne),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=Dn,hs(y,G,H),E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe);let Ie=!1;for(let He=0,Ue=N.length;He<Ue;He++){const Fe=N[He],dt=Fe.object,Ft=Fe.geometry,vt=Fe.material,hn=Fe.group;if(vt.side===en&&dt.layers.test(H.layers)){const lt=vt.side;vt.side=Nt,vt.needsUpdate=!0,Da(dt,G,H,Ft,vt,hn),vt.side=lt,vt.needsUpdate=!0,Ie=!0}}Ie===!0&&(E.updateMultisampleRenderTarget(fe),E.updateRenderTargetMipmap(fe)),x.setRenderTarget(Me),x.setClearColor(ne,P),x.toneMapping=we}function hs(y,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let B=0,de=y.length;B<de;B++){const Me=y[B],we=Me.object,Ie=Me.geometry,He=H===null?Me.material:H,Ue=Me.group;we.layers.test(G.layers)&&Da(we,N,G,Ie,He,Ue)}}function Da(y,N,G,H,B,de){y.onBeforeRender(x,N,G,H,B,de),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(x,N,G,H,y,de),B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,x.renderBufferDirect(G,N,H,B,y,de),B.side=Bn,B.needsUpdate=!0,x.renderBufferDirect(G,N,H,B,y,de),B.side=en):x.renderBufferDirect(G,N,H,B,y,de),y.onAfterRender(x,N,G,H,B,de)}function ds(y,N,G){N.isScene!==!0&&(N=Se);const H=ke.get(y),B=f.state.lights,de=f.state.shadowsArray,Me=B.state.version,we=ve.getParameters(y,B.state,de,N,G),Ie=ve.getProgramCacheKey(we);let He=H.programs;H.environment=y.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(y.isMeshStandardMaterial?z:M).get(y.envMap||H.environment),He===void 0&&(y.addEventListener("dispose",ce),He=new Map,H.programs=He);let Ue=He.get(Ie);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===Me)return Fa(y,we),Ue}else we.uniforms=ve.getUniforms(y),y.onBuild(G,we,x),y.onBeforeCompile(we,x),Ue=ve.acquireProgram(we,Ie),He.set(Ie,Ue),H.uniforms=we.uniforms;const Fe=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=Ge.uniform),Fa(y,we),H.needsLights=pu(y),H.lightsStateVersion=Me,H.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function Ua(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=js.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Fa(y,N){const G=ke.get(y);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function du(y,N,G,H,B){N.isScene!==!0&&(N=Se),E.resetTextureUnits();const de=N.fog,Me=H.isMeshStandardMaterial?N.environment:null,we=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:En,Ie=(H.isMeshStandardMaterial?z:M).get(H.envMap||Me),He=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,Ft=!!G.morphAttributes.color;let vt=Dn;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(vt=x.toneMapping);const hn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=hn!==void 0?hn.length:0,We=ke.get(H),dr=f.state.lights;if($===!0&&(se===!0||y!==S)){const Ht=y===S&&H.id===W;Ge.setState(H,y,Ht)}let ut=!1;H.version===We.__version?(We.needsLights&&We.lightsStateVersion!==dr.state.version||We.outputColorSpace!==we||B.isBatchedMesh&&We.batching===!1||!B.isBatchedMesh&&We.batching===!0||B.isInstancedMesh&&We.instancing===!1||!B.isInstancedMesh&&We.instancing===!0||B.isSkinnedMesh&&We.skinning===!1||!B.isSkinnedMesh&&We.skinning===!0||B.isInstancedMesh&&We.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&We.instancingColor===!1&&B.instanceColor!==null||We.envMap!==Ie||H.fog===!0&&We.fog!==de||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ge.numPlanes||We.numIntersection!==Ge.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Ue||We.morphTargets!==Fe||We.morphNormals!==dt||We.morphColors!==Ft||We.toneMapping!==vt||ye.isWebGL2===!0&&We.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,We.__version=H.version);let kn=We.currentProgram;ut===!0&&(kn=ds(H,N,B));let Oa=!1,Gi=!1,fr=!1;const Et=kn.getUniforms(),Gn=We.uniforms;if(xe.useProgram(kn.program)&&(Oa=!0,Gi=!0,fr=!0),H.id!==W&&(W=H.id,Gi=!0),Oa||S!==y){Et.setValue(F,"projectionMatrix",y.projectionMatrix),Et.setValue(F,"viewMatrix",y.matrixWorldInverse);const Ht=Et.map.cameraPosition;Ht!==void 0&&Ht.setValue(F,be.setFromMatrixPosition(y.matrixWorld)),ye.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Et.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Gi=!0,fr=!0)}if(B.isSkinnedMesh){Et.setOptional(F,B,"bindMatrix"),Et.setOptional(F,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(ye.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Et.setValue(F,"boneTexture",Ht.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Et.setOptional(F,B,"batchingTexture"),Et.setValue(F,"batchingTexture",B._matricesTexture,E));const pr=G.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0&&ye.isWebGL2===!0)&&je.update(B,G,kn),(Gi||We.receiveShadow!==B.receiveShadow)&&(We.receiveShadow=B.receiveShadow,Et.setValue(F,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Gn.envMap.value=Ie,Gn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Gi&&(Et.setValue(F,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&fu(Gn,fr),de&&H.fog===!0&&he.refreshFogUniforms(Gn,de),he.refreshMaterialUniforms(Gn,H,Z,X,fe),js.upload(F,Ua(We),Gn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(js.upload(F,Ua(We),Gn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Et.setValue(F,"center",B.center),Et.setValue(F,"modelViewMatrix",B.modelViewMatrix),Et.setValue(F,"normalMatrix",B.normalMatrix),Et.setValue(F,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let mr=0,mu=Ht.length;mr<mu;mr++)if(ye.isWebGL2){const Ba=Ht[mr];Ye.update(Ba,kn),Ye.bind(Ba,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function fu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function pu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,N,G){ke.get(y.texture).__webglTexture=N,ke.get(y.depthTexture).__webglTexture=G;const H=ke.get(y);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,N){const G=ke.get(y);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,G=0){C=y,b=N,R=G;let H=!0,B=null,de=!1,Me=!1;if(y){const Ie=ke.get(y);Ie.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(F.FRAMEBUFFER,null),H=!1):Ie.__webglFramebuffer===void 0?E.setupRenderTarget(y):Ie.__hasExternalTextures&&E.rebindTextures(y,ke.get(y.texture).__webglTexture,ke.get(y.depthTexture).__webglTexture);const He=y.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Ue=ke.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?B=Ue[N][G]:B=Ue[N],de=!0):ye.isWebGL2&&y.samples>0&&E.useMultisampledRTT(y)===!1?B=ke.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[G]:B=Ue,w.copy(y.viewport),O.copy(y.scissor),q=y.scissorTest}else w.copy(V).multiplyScalar(Z).floor(),O.copy(j).multiplyScalar(Z).floor(),q=J;if(xe.bindFramebuffer(F.FRAMEBUFFER,B)&&ye.drawBuffers&&H&&xe.drawBuffers(y,B),xe.viewport(w),xe.scissor(O),xe.setScissorTest(q),de){const Ie=ke.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,G)}else if(Me){const Ie=ke.get(y.texture),He=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,G||0,He)}W=-1},this.readRenderTargetPixels=function(y,N,G,H,B,de,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){xe.bindFramebuffer(F.FRAMEBUFFER,we);try{const Ie=y.texture,He=Ie.format,Ue=Ie.type;if(He!==nn&&me.convert(He)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===Ni&&(oe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ue!==Un&&me.convert(Ue)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===In&&(ye.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-H&&G>=0&&G<=y.height-B&&F.readPixels(N,G,H,B,me.convert(He),me.convert(Ue),de)}finally{const Ie=C!==null?ke.get(C).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(y,N,G=0){const H=Math.pow(2,-G),B=Math.floor(N.image.width*H),de=Math.floor(N.image.height*H);E.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,y.x,y.y,B,de),xe.unbindTexture()},this.copyTextureToTexture=function(y,N,G,H=0){const B=N.image.width,de=N.image.height,Me=me.convert(G.format),we=me.convert(G.type);E.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,y.x,y.y,B,de,Me,we,N.image.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,y.x,y.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,H,y.x,y.y,Me,we,N.image),H===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(y,N,G,H,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=y.max.x-y.min.x+1,Me=y.max.y-y.min.y+1,we=y.max.z-y.min.z+1,Ie=me.convert(H.format),He=me.convert(H.type);let Ue;if(H.isData3DTexture)E.setTexture3D(H,0),Ue=F.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Ue=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Fe=F.getParameter(F.UNPACK_ROW_LENGTH),dt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ft=F.getParameter(F.UNPACK_SKIP_PIXELS),vt=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES),lt=G.isCompressedTexture?G.mipmaps[B]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,y.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,y.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,y.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Ue,B,N.x,N.y,N.z,de,Me,we,Ie,He,lt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ue,B,N.x,N.y,N.z,de,Me,we,Ie,lt.data)):F.texSubImage3D(Ue,B,N.x,N.y,N.z,de,Me,we,Ie,He,lt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),B===0&&H.generateMipmaps&&F.generateMipmap(Ue),xe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){b=0,R=0,C=null,xe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ta?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===cr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ht?Qn:Ac}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?ht:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class C0 extends qc{}C0.prototype.isWebGL1Renderer=!0;class nr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new nr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class L0 extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class P0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new D;class ir{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ir(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yc extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xi;const ji=new D,vi=new D,Mi=new D,Si=new Pe,qi=new Pe,$c=new at,Us=new D,Yi=new D,Fs=new D,fl=new Pe,Yr=new Pe,pl=new Pe;class I0 extends ft{constructor(e=new Yc){if(super(),this.isSprite=!0,this.type="Sprite",xi===void 0){xi=new Gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new P0(t,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new ir(n,3,0,!1)),xi.setAttribute("uv",new ir(n,2,3,!1))}this.geometry=xi,this.material=e,this.center=new Pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vi.setFromMatrixScale(this.matrixWorld),$c.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-Mi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Os(Us.set(-.5,-.5,0),Mi,a,vi,s,r),Os(Yi.set(.5,-.5,0),Mi,a,vi,s,r),Os(Fs.set(.5,.5,0),Mi,a,vi,s,r),fl.set(0,0),Yr.set(1,0),pl.set(1,1);let o=e.ray.intersectTriangle(Us,Yi,Fs,!1,ji);if(o===null&&(Os(Yi.set(-.5,.5,0),Mi,a,vi,s,r),Yr.set(0,1),o=e.ray.intersectTriangle(Us,Fs,Yi,!1,ji),o===null))return;const l=e.ray.origin.distanceTo(ji);l<e.near||l>e.far||t.push({distance:l,point:ji.clone(),uv:jt.getInterpolation(ji,Us,Yi,Fs,fl,Yr,pl,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Os(i,e,t,n,s,r){Si.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qi.x=r*Si.x-s*Si.y,qi.y=s*Si.x+r*Si.y):qi.copy(Si),i.copy(e),i.x+=qi.x,i.y+=qi.y,i.applyMatrix4($c)}class ml extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yi=new at,gl=new at,Bs=[],_l=new ti,N0=new at,$i=new rt,Ki=new os;class rs extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ml(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,N0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),_l.copy(e.boundingBox).applyMatrix4(yi),this.boundingBox.union(_l)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Ki.copy(e.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(Ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),e.ray.intersectsSphere(Ki)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yi),gl.multiplyMatrices(n,yi),$i.matrixWorld=gl,$i.raycast(e,Bs);for(let a=0,o=Bs.length;a<o;a++){const l=Bs[a];l.instanceId=r,l.object=this,t.push(l)}Bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ml(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends Dt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ki extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],p=[],m=[];let g=0;const _=[],f=n/2;let d=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(m,2));function v(){const A=new D,b=new D;let R=0;const C=(t-e)/n;for(let W=0;W<=r;W++){const S=[],w=W/r,O=w*(t-e)+e;for(let q=0;q<=s;q++){const ne=q/s,P=ne*l+o,U=Math.sin(P),X=Math.cos(P);b.x=O*U,b.y=-w*n+f,b.z=O*X,h.push(b.x,b.y,b.z),A.set(U,C,X).normalize(),p.push(A.x,A.y,A.z),m.push(ne,1-w),S.push(g++)}_.push(S)}for(let W=0;W<s;W++)for(let S=0;S<r;S++){const w=_[S][W],O=_[S+1][W],q=_[S+1][W+1],ne=_[S][W+1];u.push(w,O,ne),u.push(O,q,ne),R+=6}c.addGroup(d,R,0),d+=R}function x(A){const b=g,R=new Pe,C=new D;let W=0;const S=A===!0?e:t,w=A===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,f*w,0),p.push(0,w,0),m.push(.5,.5),g++;const O=g;for(let q=0;q<=s;q++){const P=q/s*l+o,U=Math.cos(P),X=Math.sin(P);C.x=S*X,C.y=f*w,C.z=S*U,h.push(C.x,C.y,C.z),p.push(0,w,0),R.x=U*.5+.5,R.y=X*.5*w+.5,m.push(R.x,R.y),g++}for(let q=0;q<s;q++){const ne=b+q,P=O+q;A===!0?u.push(P,P+1,ne):u.push(P+1,P,ne),W+=3}c.addGroup(d,W,A===!0?1:2),d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends Gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const p=(t-e)/s,m=new D,g=new Pe;for(let _=0;_<=s;_++){for(let f=0;f<=n;f++){const d=r+f/n*a;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=p}for(let _=0;_<s;_++){const f=_*(n+1);for(let d=0;d<n;d++){const v=d+f,x=v,A=v+n+1,b=v+n+2,R=v+1;o.push(x,A,R),o.push(A,b,R)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cs extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,p=new D,m=[],g=[],_=[],f=[];for(let d=0;d<=n;d++){const v=[],x=d/n;let A=0;d===0&&a===0?A=.5/t:d===n&&l===Math.PI&&(A=-.5/t);for(let b=0;b<=t;b++){const R=b/t;h.x=-e*Math.cos(s+R*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+R*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),f.push(R+A,1-x),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<t;v++){const x=u[d][v+1],A=u[d][v],b=u[d+1][v],R=u[d+1][v+1];(d!==0||a>0)&&m.push(x,A,R),(d!==n-1||l<Math.PI)&&m.push(A,b,R)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class D0 extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $t extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kc extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class U0 extends Kc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $r=new at,xl=new D,vl=new D;class F0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(xl),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class O0 extends F0{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B0 extends Kc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new O0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class z0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ml(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ml();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ml(){return(typeof performance>"u"?Date:performance).now()}class k0{constructor(e,t,n=0,s=1/0){this.ray=new Nc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return pa(e,this,n,t),n.sort(Sl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pa(e[s],this,n,t);return n.sort(Sl),n}}function Sl(i,e){return i.distance-e.distance}function pa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)pa(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const yl={human:["--channel-human",3107839],system:["--channel-system",1090976],ai:["--color-accent-purple",8084735],control:["--color-accent-slate",5991308],primary:["--color-primary",16733986],danger:["--color-danger",14103867],success:["--color-success",1220944],warning:["--color-warning",15901974],info:["--color-info",3107839],surface0:["--surface-0",16448248],surface1:["--surface-1",16777215],surface2:["--surface-2",16251132],ink:["--color-text-primary",923184],muted:["--color-text-muted",5594744]},Kr=i=>Math.max(0,Math.min(255,Math.round(i))),es=(i,e,t)=>Kr(i)<<16|Kr(e)<<8|Kr(t);function G0(i,e,t){const n=a=>(a+i/30)%12,s=e*Math.min(t,1-t),r=a=>t-s*Math.max(-1,Math.min(n(a)-3,Math.min(9-n(a),1)));return[r(0)*255,r(8)*255,r(4)*255]}function El(i){const e=i.trim().toLowerCase(),t=/^#([0-9a-f]{3,8})$/.exec(e);if(t!=null&&t[1]){const a=t[1];if(a.length===3||a.length===4){const[o,l,c]=[a[0],a[1],a[2]].map(u=>parseInt(`${u}${u}`,16));return es(o??0,l??0,c??0)}return a.length===6||a.length===8?parseInt(a.slice(0,6),16):null}const n=/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/.exec(e);if(n)return es(Number(n[1]),Number(n[2]),Number(n[3]));const s=/^color\(\s*srgb\s+([\d.e-]+)\s+([\d.e-]+)\s+([\d.e-]+)/.exec(e);if(s)return es(Number(s[1])*255,Number(s[2])*255,Number(s[3])*255);const r=/^hsla?\(\s*([\d.]+)(?:deg)?[,\s]+([\d.]+)%[,\s]+([\d.]+)%/.exec(e);if(r){const[a,o,l]=G0(Number(r[1]),Number(r[2])/100,Number(r[3])/100);return es(a,o,l)}return null}function H0(i){const e={};for(const t of Object.keys(yl)){const[n,s]=yl[t];e[t]=i(n)??s}return e}function qe(i,e,t){const n=s=>{const r=i>>s&255,a=e>>s&255;return r+(a-r)*t};return es(n(16),n(8),n(0))}function on(i){return`#${i.toString(16).padStart(6,"0")}`}function ma(i,e){const t=El(e);if(t!==null)return t;const n=document.createElement("span");n.style.cssText="position:absolute;visibility:hidden;pointer-events:none",i.appendChild(n);try{return n.style.color=e,n.style.color?El(getComputedStyle(n).color):null}finally{n.remove()}}function V0(i){const e=getComputedStyle(document.documentElement);return H0(t=>e.getPropertyValue(t).trim()===""?null:ma(i,`var(${t})`))}const W0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class us{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X0=new Ca(-1,1,1,-1,0,1);class j0 extends Gt{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const q0=new j0;class Zc{constructor(e){this._mesh=new rt(q0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qs extends us{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wa.clone(e.uniforms),this.material=new un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bl extends us{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Y0 extends us{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qs(W0),this.copyPass.material.blending=yn,this.clock=new z0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bl!==void 0&&(a instanceof bl?n=!0:a instanceof Y0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const K0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Z0 extends us{constructor(){super();const e=K0;this.uniforms=wa.clone(e.uniforms),this.material=new D0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ea?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_c&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class J0 extends us{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Q0={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Pe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},Jc="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",e_={uniforms:{tDiffuse:{value:null},uRes:{value:new Pe(1,1)},uFocus:{value:.48},uBand:{value:.3},uAmt:{value:1.2}},vertexShader:Jc,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uFocus; uniform float uBand; uniform float uAmt; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = abs(vUv.y - uFocus);
      float b = smoothstep(uBand, uBand + 0.32, d) * uAmt * (vUv.y > uFocus ? 1.0 : 0.3);
      if (b < 0.15) { gl_FragColor = c; return; }
      vec4 acc = c; float ws = 1.0;
      for (int i = 0; i < 12; i++) { float fi = float(i); float a = fi * 2.39996; float r = sqrt((fi + 0.5) / 12.0);
        acc += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r * b / uRes); ws += 1.0; }
      gl_FragColor = acc / ws;
    }`},t_={uniforms:{tDiffuse:{value:null},uTexel:{value:new Pe(1,1)},uSharp:{value:.25}},vertexShader:Jc,fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uTexel; uniform float uSharp; varying vec2 vUv;
    void main(){
      vec3 e = texture2D(tDiffuse, vUv).rgb;
      vec3 a = texture2D(tDiffuse, vUv + vec2(0.0, -uTexel.y)).rgb; vec3 c = texture2D(tDiffuse, vUv + vec2(0.0, uTexel.y)).rgb;
      vec3 b = texture2D(tDiffuse, vUv + vec2(-uTexel.x, 0.0)).rgb; vec3 d = texture2D(tDiffuse, vUv + vec2(uTexel.x, 0.0)).rgb;
      vec3 mn = min(min(min(a, b), min(c, d)), e); vec3 mx = max(max(max(a, b), max(c, d)), e);
      vec3 amp = sqrt(clamp(min(mn, 1.0 - mx) / max(mx, 1e-4), 0.0, 1.0));
      vec3 w = -amp * mix(0.125, 0.2, uSharp);
      gl_FragColor = vec4(clamp((e + (a + b + c + d) * w) / (1.0 + 4.0 * w), 0.0, 1.0), 1.0);
    }`},n_=(i,e,t)=>Math.min(t,Math.max(e,i));function i_(i){return n_((1-i)*.7+.25,.25,.5)}class s_{constructor(e,t,n,s){K(this,"composer");K(this,"tilt");K(this,"fxaa");K(this,"cas");K(this,"width",1);K(this,"height",1);K(this,"scale",1);this.nativeRatio=s,this.composer=new $0(e),this.composer.addPass(new J0(t,n)),this.tilt=new qs(e_),this.composer.addPass(this.tilt),this.composer.addPass(new Z0),this.fxaa=new qs(Q0),this.composer.addPass(this.fxaa),this.cas=new qs(t_),this.composer.addPass(this.cas)}setSize(e,t){this.width=e,this.height=t,this.applySize()}setScale(e){this.scale=e,this.applySize()}setTilt(e){this.tilt.enabled=e}setTiltAmount(e){const t=this.tilt.uniforms.uAmt;t&&(t.value=e)}applySize(){const e=this.nativeRatio*this.scale;this.composer.setPixelRatio(e),this.composer.setSize(this.width,this.height);const t=Math.max(1,Math.round(this.width*e)),n=Math.max(1,Math.round(this.height*e)),s=this.tilt.uniforms.uRes;s&&s.value.set(this.width,this.height);const r=this.fxaa.uniforms.resolution;r&&r.value.set(1/t,1/n);const a=this.cas.uniforms.uTexel;a&&a.value.set(1/t,1/n);const o=this.cas.uniforms.uSharp;o&&(o.value=i_(this.scale))}render(){this.composer.render()}dispose(){for(const e of this.composer.passes)e.dispose();this.composer.dispose()}}const Qc=1317939;function eu(i){return i.surface2}const tu=[1,.8,.7],r_=[57,55],a_=58.5,o_=1e3,Tl=12,l_=96,c_=4;class u_{constructor(){K(this,"tierIndex",0);K(this,"acc",0);K(this,"frames",0);K(this,"low",0);K(this,"healthy",0);K(this,"settle",0);K(this,"upAfter",Tl);K(this,"probeLeft",0)}get tier(){return this.tierIndex}gap(){this.acc=0,this.frames=0}push(e){if(this.acc+=e,this.frames++,this.acc<o_)return null;const t=this.frames*1e3/this.acc;return this.gap(),this.decide(t)}report(e,t){return{fps:Math.round(e),tier:this.tierIndex,scale:tu[this.tierIndex]??1,changed:t}}decide(e){if(this.settle>0)return this.settle--,this.report(e,!1);this.probeLeft>0&&--this.probeLeft===0&&(this.upAfter=Tl);const t=r_[this.tierIndex];if(t!==void 0&&e<t)return this.healthy=0,++this.low>=2?(this.probeLeft>0&&(this.upAfter=Math.min(l_,this.upAfter*2)),this.probeLeft=0,this.move(1,e)):this.report(e,!1);if(this.low=0,this.tierIndex>0&&e>=a_){if(++this.healthy>=this.upAfter)return this.probeLeft=c_,this.move(-1,e)}else this.healthy=0;return this.report(e,!1)}move(e,t){return this.tierIndex+=e,this.low=0,this.healthy=0,this.settle=1,this.report(t,!0)}}function h_(i){const e=[],t=[];let n=0;for(const s of i){const r=e[e.length-1];if(r){const a=Math.hypot(s.x-r.x,s.y-r.y,s.z-r.z);if(a<1e-6)continue;n+=a}e.push({...s}),t.push(n)}return{pts:e,cum:t,length:n}}function d_(i,e,t){const n=i.pts[0];if(!n)return 0;if(i.pts.length===1)return t.x=n.x,t.y=n.y,t.z=n.z,0;const s=Math.max(0,Math.min(i.length,e));let r=1;for(;r<i.pts.length-1&&(i.cum[r]??0)<s;)r++;const a=i.pts[r-1],o=i.pts[r];if(!a||!o)return 0;const l=i.cum[r-1]??0,c=(i.cum[r]??l)-l,u=c>0?(s-l)/c:1;return t.x=a.x+(o.x-a.x)*u,t.y=a.y+(o.y-a.y)*u,t.z=a.z+(o.z-a.z)*u,Math.atan2(o.x-a.x,o.z-a.z)}function ga(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function nu(i,e,t){let n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*t}const Al=16,_a=400,wl=.32,Rl=1.25,_n=(i,e,t)=>Math.min(t,Math.max(e,i));class f_{constructor(){K(this,"state",{x:0,z:0,dist:70,yaw:.62,pitch:.66});K(this,"bound",70);K(this,"flight",null)}setBounds(e){this.bound=e,this.clampTarget()}get flying(){return this.flight!==null}get aim(){return this.flight?this.flight.goal:this.state}cancelFlight(){this.flight=null}clampTarget(){this.state.x=_n(this.state.x,-this.bound,this.bound),this.state.z=_n(this.state.z,-this.bound,this.bound)}panByPixels(e,t){const n=this.state,s=n.dist*.0016,r=Math.cos(n.yaw),a=Math.sin(n.yaw);n.x-=(e*r+t*a*1.25)*s,n.z-=(-e*a+t*r*1.25)*s,this.clampTarget()}orbitByPixels(e,t){const n=this.state;n.yaw-=e*.005,n.pitch=_n(n.pitch+t*.004,wl,Rl)}zoomBy(e){this.state.dist=_n(this.state.dist*e,Al,_a)}flyTo(e,t,n){const s={...this.state},r={x:_n(e.x??s.x,-this.bound,this.bound),z:_n(e.z??s.z,-this.bound,this.bound),dist:_n(e.dist??s.dist,Al,_a),yaw:e.yaw??s.yaw,pitch:_n(e.pitch??s.pitch,wl,Rl)};if(t<=0){Object.assign(this.state,r),this.flight=null;return}this.flight={from:s,goal:r,t0:n,ms:t}}step(e){const t=this.flight;if(!t)return!1;const n=_n((e-t.t0)/t.ms,0,1),s=ga(n),r=this.state;r.x=t.from.x+(t.goal.x-t.from.x)*s,r.z=t.from.z+(t.goal.z-t.from.z)*s;const a=Math.hypot(t.goal.x-t.from.x,t.goal.z-t.from.z),o=Math.sin(Math.PI*s)*Math.min(18,a*.25);return r.dist=t.from.dist+(t.goal.dist-t.from.dist)*s+o,r.yaw=nu(t.from.yaw,t.goal.yaw,s),r.pitch=t.from.pitch+(t.goal.pitch-t.from.pitch)*s,n>=1&&(this.flight=null),!0}eye(e){const t=this.state;e.x=t.x+Math.sin(t.yaw)*Math.cos(t.pitch)*t.dist,e.y=Math.sin(t.pitch)*t.dist,e.z=t.z+Math.cos(t.yaw)*Math.cos(t.pitch)*t.dist}}const Ei={hemiSky:9347800,hemiGround:1712704,hemiLevel:.95,sun:10466559,sunLevel:1,exposure:1},Cl=16775922,Ll=3.2,Pl=1.15,Il=150,Nl=330,p_=240,Dl=(i,e,t)=>Math.min(t,Math.max(e,i));class m_{constructor(e,t,n){K(this,"scene",new L0);K(this,"camera",new qt(30,1,.5,900));K(this,"rig",new f_);K(this,"canvas");K(this,"onQuality",null);K(this,"onCamera",null);K(this,"onResize",null);K(this,"renderer");K(this,"post");K(this,"hemi");K(this,"sun");K(this,"resizeObserver");K(this,"governor",new u_);K(this,"updaters",new Set);K(this,"daySky");K(this,"dayHemi");K(this,"running",!1);K(this,"raf",0);K(this,"lastT",0);K(this,"time",0);K(this,"dirty",!0);K(this,"wasRendering",!1);K(this,"sunWant",null);K(this,"lastMove",0);K(this,"lastW",0);K(this,"lastH",0);K(this,"onContextLost",e=>{e.preventDefault()});K(this,"onContextRestored",()=>{this.renderer.shadowMap.needsUpdate=!0,this.requestRender()});K(this,"frame",e=>{if(!this.running)return;this.raf=requestAnimationFrame(this.frame);const t=this.lastT===0?16.7:e-this.lastT;this.lastT=e;const n=Math.min(.05,t/1e3);this.time+=n;let s=!1;this.rig.step(e)&&(this.cameraChanged(),s=!0);for(const r of this.updaters)s=r(n,this.time)||s;if(this.sunWant&&!this.rig.flying&&e-this.lastMove>p_&&this.syncSun(),!s&&!this.dirty){this.wasRendering=!1;return}this.dirty=!1,this.post.render(),this.wasRendering&&t<250?this.measure(t):this.governor.gap(),this.wasRendering=!0});this.host=e,this.motion=n;try{this.renderer=new qc({antialias:!1,powerPreference:"high-performance",stencil:!1})}catch(a){throw new Error("WebGL is unavailable",{cause:a})}const s=this.renderer,r=[];try{this.canvas=s.domElement,this.canvas.style.cssText="display:block;width:100%;height:100%;touch-action:none;cursor:grab;outline:none";const a=Math.min(window.devicePixelRatio||1,1.5);s.setPixelRatio(a),s.shadowMap.enabled=!0,s.shadowMap.type=dc,s.shadowMap.autoUpdate=!1,s.toneMapping=Ea,s.toneMappingExposure=.9,s.outputColorSpace=ht,e.appendChild(this.canvas),r.push(()=>this.canvas.remove()),this.daySky=new Ne(eu(t)),this.dayHemi=[new Ne(t.surface1),new Ne(qe(t.surface2,t.ink,.12))],this.scene.background=new Ne(this.daySky),this.scene.fog=new nr(this.daySky.getHex(),Il,Nl),this.hemi=new U0(this.dayHemi[0],this.dayHemi[1],Pl),this.sun=new B0(Cl,Ll),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-25e-5,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=4,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=320,this.scene.add(this.hemi,this.sun,this.sun.target),this.post=new s_(s,this.scene,this.camera,a),r.push(()=>this.post.dispose()),this.resize(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),r.push(()=>this.resizeObserver.disconnect()),this.canvas.addEventListener("webglcontextlost",this.onContextLost),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored),this.cameraChanged(),this.syncSun()}catch(a){for(const o of r.reverse())try{o()}catch{}throw s.dispose(),s.forceContextLoss(),a}}get aspect(){return this.camera.aspect}get size(){return{w:this.lastW,h:this.lastH}}addUpdater(e){return this.updaters.add(e),this.requestRender(),()=>this.updaters.delete(e)}requestRender(){this.dirty=!0}invalidateShadows(){this.renderer.shadowMap.needsUpdate=!0,this.requestRender()}fly(e,t){this.rig.flyTo(e,this.motion.reduced?0:t,performance.now()),(this.motion.reduced||t<=0)&&this.cameraChanged(),this.requestRender()}cameraChanged(){var r;const e={x:0,y:0,z:0};this.rig.eye(e),this.camera.position.set(e.x,e.y,e.z),this.camera.lookAt(this.rig.state.x,0,this.rig.state.z),this.camera.updateMatrixWorld();const{x:t,z:n,dist:s}=this.rig.state;this.sunWant={x:t,z:n,half:Dl(s*.85,30,120)},this.lastMove=performance.now(),this.scene.fog instanceof nr&&(this.scene.fog.near=Math.max(Il,s*1.3),this.scene.fog.far=Math.max(Nl,s*3)),this.post.setTiltAmount(Dl(.6+s*.012,.9,2)),(r=this.onCamera)==null||r.call(this,this.rig.state),this.requestRender()}syncSun(){const e=this.sunWant;if(!e)return;this.sunWant=null;const t=this.sun.shadow.camera;t.right!==e.half&&(t.left=-e.half,t.right=e.half,t.top=e.half,t.bottom=-e.half,t.updateProjectionMatrix()),this.sun.target.position.set(e.x,0,e.z),this.sun.position.set(e.x-38,70,e.z+30),this.renderer.shadowMap.needsUpdate=!0,this.requestRender()}setNight(e){var n;const t=e?new Ne(Qc):this.daySky;this.scene.background.copy(t),(n=this.scene.fog)==null||n.color.copy(t),this.hemi.color.set(e?Ei.hemiSky:this.dayHemi[0]),this.hemi.groundColor.set(e?Ei.hemiGround:this.dayHemi[1]),this.hemi.intensity=e?Ei.hemiLevel:Pl,this.sun.color.set(e?Ei.sun:Cl),this.sun.intensity=e?Ei.sunLevel:Ll,this.renderer.toneMappingExposure=e?Ei.exposure:.9,this.requestRender()}resize(){var n;const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);e===this.lastW&&t===this.lastH||(this.lastW=e,this.lastH=t,this.renderer.setSize(e,t,!1),this.post.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),(n=this.onResize)==null||n.call(this),this.requestRender())}applyTier(e){this.post.setScale(tu[e]??1),this.post.setTilt(e<2),this.requestRender()}setActive(e){e!==this.running&&(this.running=e,e?(this.lastT=0,this.wasRendering=!1,this.governor.gap(),this.requestRender(),this.raf=requestAnimationFrame(this.frame)):cancelAnimationFrame(this.raf))}measure(e){var n;const t=this.governor.push(e);t&&(t.changed&&this.applyTier(t.tier),(n=this.onQuality)==null||n.call(this,{fps:t.fps,scale:t.scale}))}dispose(){this.setActive(!1),this.resizeObserver.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onContextLost),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored),this.updaters.clear(),this.post.dispose(),this.sun.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.canvas.remove()}}const Ul=1.15,g_=4,__=24,x_=8;function Qt(i,e,t){const n=document.createElement(i);return Object.assign(n.style,e),t!==void 0&&(n.textContent=t),n}function v_(i,e){return i.l<e.r&&i.r>e.l&&i.t<e.b&&i.b>e.t}class M_{constructor(e,t,n,s,r){K(this,"layer");K(this,"items",new Map);K(this,"v",new D);K(this,"onWheel");this.camera=t,this.viewSize=n,this.onPickHall=r,getComputedStyle(e).position==="static"&&(e.style.position="relative"),this.layer=Qt("div",{position:"absolute",inset:"0",overflow:"hidden",pointerEvents:"none",zIndex:"2"}),this.layer.setAttribute("aria-hidden","true"),this.onWheel=a=>{a.preventDefault(),s.dispatchEvent(new WheelEvent("wheel",{deltaX:a.deltaX,deltaY:a.deltaY,deltaMode:a.deltaMode,clientX:a.clientX,clientY:a.clientY,cancelable:!0}))},this.layer.addEventListener("wheel",this.onWheel,{passive:!1}),e.appendChild(this.layer)}setSign(e,t,n,s){const r=t?`${t.code}|${t.name}|${t.meta}|${t.late}|${t.hue}`:"";this.upsert(`sign:${e}`,"sign",t?r:null,n,()=>this.buildSign(t,s))}setCallout(e,t,n){this.upsert(`callout:${e}`,"callout",t?`${t.tone}|${t.text}|${t.sub}`:null,n,()=>this.buildCallout(t))}upsert(e,t,n,s,r){const a=this.items.get(e);if(n===null){a&&this.remove(e,a);return}if(a&&a.key===n){a.anchor.set(s.x,s.y,s.z);return}a&&this.remove(e,a);const o=r();o.el.style.visibility="hidden",this.layer.appendChild(o.el),this.items.set(e,{kind:t,el:o.el,key:n,anchor:new D(s.x,s.y,s.z),width:0,height:0,shown:!1,x:NaN,y:NaN,leader:o.leader,leaderPx:0})}remove(e,t){t.el.remove(),this.items.delete(e)}buildSign(e,t){const n=Qt("div",{position:"absolute",left:"0",top:"0",display:"inline-flex",alignItems:"center",gap:"6px",height:"26px",padding:"0 10px 0 8px",border:"1px solid var(--border-subtle)",borderRadius:"9px",background:"var(--surface-1)",boxShadow:"var(--shadow-floating)",font:"500 12px/1 var(--font-family)",color:"var(--color-text-secondary)",whiteSpace:"nowrap",pointerEvents:"auto",cursor:"pointer",willChange:"transform"});return n.append(Qt("i",{width:"8px",height:"8px",borderRadius:"3px",background:e.hue,flex:"none"}),Qt("b",{fontWeight:"700",color:"var(--color-text-primary)"},e.code),Qt("span",{},e.name)),e.meta&&n.append(Qt("em",{fontStyle:"normal",color:e.late?"var(--color-danger-text)":"var(--color-text-muted)",fontWeight:e.late?"600":"500"},e.meta)),n.addEventListener("click",()=>this.onPickHall(t)),{el:n,leader:null}}buildCallout(e){const t=e.tone==="danger"?"var(--color-danger)":"var(--color-warning)",n=e.tone==="danger"?"var(--color-danger-text)":"var(--color-warning-text)",s=Qt("div",{position:"absolute",left:"0",top:"0",display:"grid",gap:"1px",padding:"6px 10px 7px",borderRadius:"10px",background:"var(--surface-1)",boxShadow:"var(--shadow-floating)",borderLeft:`3px solid ${t}`,font:"400 11.5px/1.25 var(--font-family)",maxWidth:"280px",willChange:"transform"});s.append(Qt("b",{font:"700 12.5px/1.25 var(--font-family)",color:n},e.text)),e.sub&&s.append(Qt("span",{color:"var(--color-text-muted)"},e.sub));const r=Qt("i",{position:"absolute",left:"50%",bottom:"-5px",width:"10px",height:"10px",marginLeft:"-5px",background:"var(--surface-1)",transform:"rotate(45deg)",borderRadius:"2px",zIndex:"-1"}),a=Qt("i",{position:"absolute",left:"50%",top:"100%",width:"2px",marginLeft:"-1px",height:"0",background:t,display:"none"});return s.append(r,a),{el:s,leader:a}}update(){if(this.items.size===0)return;const{w:e,h:t}=this.viewSize();if(e<=0||t<=0)return;for(const s of this.items.values())s.width===0&&(s.width=s.el.offsetWidth,s.height=s.el.offsetHeight);const n=[];for(const s of["sign","callout"])for(const r of this.items.values())r.kind===s&&this.place(r,e,t,n)}place(e,t,n,s){this.v.copy(e.anchor).project(this.camera);const r=this.v.z<1&&this.v.z>-1&&Math.abs(this.v.x)<=Ul&&Math.abs(this.v.y)<=Ul;if(r!==e.shown&&(e.el.style.visibility=r?"":"hidden",e.shown=r),!r)return;const a=(this.v.x+1)/2*t,o=(1-this.v.y)/2*n;let l=o;const c=e.kind==="sign"?a:a-e.width/2,u=()=>({l:c,r:c+e.width,t:l-e.height,b:l});for(let h=0;h<__;h++){const p=u(),m=s.find(g=>v_(p,g));if(!m)break;l=m.t-g_}if(s.push(u()),Math.abs(a-e.x)<=.25&&Math.abs(l-e.y)<=.25||(e.x=a,e.y=l,e.el.style.transform=`translate3d(${a.toFixed(1)}px,${l.toFixed(1)}px,0) translate(${e.kind==="sign"?"0":"-50%"},-100%)`),e.leader){const h=o-l>x_?Math.round(o-l):0;h!==e.leaderPx&&(e.leaderPx=h,e.leader.style.display=h?"block":"none",e.leader.style.height=`${h}px`)}}clear(){for(const[e,t]of[...this.items])this.remove(e,t)}dispose(){this.layer.removeEventListener("wheel",this.onWheel),this.layer.remove(),this.items.clear()}}const S_=6,y_=60;function E_(i,e){const t=new Map;let n=null,s=0;const r=()=>{const[h,p]=[...t.values()];return h&&p&&Math.hypot(h[0]-p[0],h[1]-p[1])||1},a=h=>{i.setPointerCapture(h.pointerId),t.set(h.pointerId,[h.clientX,h.clientY]),n={moved:0,rotate:h.button===2||h.shiftKey,pinch:t.size===2?r():0},e.rig.cancelFlight(),i.style.cursor="grabbing"},o=h=>{if(!n){const _=performance.now();h.pointerType==="mouse"&&_-s>y_&&(s=_,e.hover(h.clientX,h.clientY));return}const p=t.get(h.pointerId);if(!p)return;const m=h.clientX-p[0],g=h.clientY-p[1];if(t.set(h.pointerId,[h.clientX,h.clientY]),n.moved+=Math.abs(m)+Math.abs(g),t.size===2){const _=r();n.pinch&&e.rig.zoomBy(n.pinch/_),n.pinch=_}else n.rotate?e.rig.orbitByPixels(m,g):e.rig.panByPixels(m,g);e.moved()},l=h=>{t.delete(h.pointerId),n&&n.moved<S_&&h.type==="pointerup"&&e.click(h.clientX,h.clientY),t.size===0&&(n=null,i.style.cursor="grab")},c=h=>{h.preventDefault(),e.rig.cancelFlight();const p=h.deltaMode===1?16:1;e.rig.zoomBy(Math.pow(1.0015,Math.max(-240,Math.min(240,h.deltaY*p)))),e.moved()},u=h=>h.preventDefault();return i.addEventListener("pointerdown",a),i.addEventListener("pointermove",o),i.addEventListener("pointerup",l),i.addEventListener("pointercancel",l),i.addEventListener("wheel",c,{passive:!1}),i.addEventListener("contextmenu",u),()=>{i.removeEventListener("pointerdown",a),i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",l),i.removeEventListener("pointercancel",l),i.removeEventListener("wheel",c),i.removeEventListener("contextmenu",u)}}const Zi=new D;function Wt(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Zi.copy(e),Zi[n]=0,Zi.normalize();const c=.5*a/(a+o),u=1-Zi.angleTo(i)/l;return Math.sign(Zi[t])===1?u*c:o/(a+o)+c+c*(1-u)}class b_ extends cn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new D,l=new D,c=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,m=u.length/6,g=new D,_=.5/s;for(let f=0,d=0;f<u.length;f+=3,d+=2)switch(o.fromArray(u,f),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[f+0]=c.x*Math.sign(o.x)+l.x*r,u[f+1]=c.y*Math.sign(o.y)+l.y*r,u[f+2]=c.z*Math.sign(o.z)+l.z*r,h[f+0]=l.x,h[f+1]=l.y,h[f+2]=l.z,Math.floor(f/m)){case 0:g.set(1,0,0),p[d+0]=Wt(g,l,"z","y",r,n),p[d+1]=1-Wt(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),p[d+0]=1-Wt(g,l,"z","y",r,n),p[d+1]=1-Wt(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),p[d+0]=1-Wt(g,l,"x","z",r,e),p[d+1]=Wt(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),p[d+0]=1-Wt(g,l,"x","z",r,e),p[d+1]=1-Wt(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),p[d+0]=1-Wt(g,l,"x","y",r,e),p[d+1]=1-Wt(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),p[d+0]=Wt(g,l,"x","y",r,e),p[d+1]=1-Wt(g,l,"y","x",r,t);break}}}function T_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Gt;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const h=[];for(let p=0;p<i.length;++p){const m=i[p].index;for(let g=0;g<m.count;++g)h.push(m.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Fl(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const m=[];for(let _=0;_<a[u].length;++_)m.push(a[u][_][p]);const g=Fl(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Fl(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}const a=new e(r);let o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;const l=new kt(a,t,n);return s!==void 0&&(l.gpuType=s),l}class Ia{constructor(){K(this,"items",[])}add(e){return this.items.push(e),e}release(e){const t=this.items.indexOf(e);t>=0&&this.items.splice(t,1),e.dispose()}disposeAll(){for(const e of this.items)e.dispose();this.items.length=0}}class A_{constructor(){K(this,"map",new Map)}get(e,t){let n=this.map.get(e);if(!n){const s=t();n=s.index?s.toNonIndexed():s,n!==s&&s.dispose();for(const r of Object.keys(n.attributes))r!=="position"&&r!=="normal"&&r!=="uv"&&n.deleteAttribute(r);this.map.set(e,n)}return n}unitBox(){return this.get("box",()=>new cn(1,1,1))}roundedBox(e,t,n,s){const r=`rb|${e.toFixed(3)}|${t.toFixed(3)}|${n.toFixed(3)}|${s.toFixed(3)}`;return this.get(r,()=>new b_(e,t,n,1,s))}cylinder(e,t,n,s){return this.get(`cy|${e}|${t}|${n}|${s}`,()=>new ki(e,t,n,s))}unitSphere(){return this.get("sp",()=>new cs(1,16,12))}dispose(){for(const e of this.map.values())e.dispose();this.map.clear()}}class On{constructor(e){K(this,"parts",[]);K(this,"matrix",new at);K(this,"pos",new D);K(this,"scale",new D);K(this,"quat",new Oi);K(this,"euler",new ls);K(this,"tint",new Ne);this.cache=e}get size(){return this.parts.length}push(e,t,n,s,r){this.matrix.compose(this.pos.set(...s),this.quat.setFromEuler(this.euler.set(...r)),this.scale.set(...n));const a=e.clone().applyMatrix4(this.matrix),o=a.getAttribute("position").count;this.tint.setHex(t);const l=new Float32Array(o*3);for(let c=0;c<o;c++)l[c*3]=this.tint.r,l[c*3+1]=this.tint.g,l[c*3+2]=this.tint.b;a.setAttribute("color",new mt(l,3)),this.parts.push(a)}box(e,t,n,s,r,a,o,l={}){const c=[0,l.ry??0,l.rz??0],u=l.round??0;if(u>0&&Math.min(s,r,a)>=.16){const h=Math.min(u,Math.min(s,r,a)/2-.001);this.push(this.cache.roundedBox(s,r,a,h),o,[1,1,1],[e,t,n],c)}else this.push(this.cache.unitBox(),o,[s,r,a],[e,t,n],c)}block(e,t,n,s,r,a,o,l={}){this.box(e,t+r/2,n,s,r,a,o,l)}cyl(e,t,n,s,r,a,o,l=16){this.push(this.cache.cylinder(s,r,a,l),o,[1,1,1],[e,t+a/2,n],[0,0,0])}ball(e,t,n,s,r,a=1){this.push(this.cache.unitSphere(),r,[s,s*a,s],[e,t,n],[0,0,0])}geometry(){if(this.parts.length===0)return null;const e=T_(this.parts,!1);for(const t of this.parts)t.dispose();return this.parts.length=0,e}mesh(e,t,n){const s=this.geometry();if(!s)return null;t.add(s);const r=new rt(s,e);return r.castShadow=n,r.receiveShadow=!0,r}}const iu=30,Ji=.22,Ol=.86,w_=40,zs=28,R_=5,C_=16,L_=1100,P_={top:190,right:470,bottom:80,left:0};function I_(i){return i>L_?P_:{top:0,right:0,bottom:0,left:0}}function N_(i,e,t,n){const s=Math.cos(i.pitch),r=i.x+Math.sin(i.yaw)*s*i.dist,a=Math.sin(i.pitch)*i.dist,o=i.z+Math.cos(i.yaw)*s*i.dist;let l=i.x-r,c=-a,u=i.z-o;const h=Math.hypot(l,c,u);l/=h,c/=h,u/=h;let p=-u,m=l;const g=Math.hypot(p,m);p/=g,m/=g;const _=-m*c,f=m*l-p*u,d=p*c,v=e.x-r,x=e.y-a,A=e.z-o,b=v*l+x*c+A*u,R=Math.tan(iu*Math.PI/360),C=(v*p+A*m)/(Math.max(b,.001)*R*(t/n)),W=(v*_+x*f+A*d)/(Math.max(b,.001)*R);return{x:(C+1)/2*t,y:(1-W)/2*n,depth:b}}function D_(i){const e=i.w/2+1,t=i.d/2+1,n=[];for(const s of[-1,1])for(const r of[-1,1])for(const a of[0,R_])n.push({x:s*e,y:a,z:r*t});return n}function Bl(i,e,t,n=I_(e)){const s={x:0,z:0,dist:Math.max(90,Math.max(i.w,i.d)*1.8),yaw:Ji,pitch:Ol};if(i.w<=0||i.d<=0||e<=0||t<=0)return{...s,dist:90};const r=n.left+zs,a=e-n.right-zs,o=n.top+zs,l=t-n.bottom-zs,c=Math.max(60,a-r),u=Math.max(60,l-o),h=D_(i),p=Math.cos(Ji),m=-Math.sin(Ji),g=-Math.sin(Ji),_=-Math.cos(Ji);for(let f=0;f<C_;f++){let d=1/0,v=-1/0,x=1/0,A=-1/0;for(const w of h){const O=N_(s,w,e,t);d=Math.min(d,O.x),v=Math.max(v,O.x),x=Math.min(x,O.y),A=Math.max(A,O.y)}const b=Math.min(c/(v-d),u/(A-x));s.dist=Math.min(_a,Math.max(w_,s.dist/b));const R=(d+v)/2-(r+a)/2,C=(x+A)/2-(o+l)/2,W=t/(2*s.dist*Math.tan(iu*Math.PI/360));s.x+=p*R/W,s.z+=m*R/W;const S=C/(W*Math.sin(Ol));s.x-=g*S,s.z-=_*S}return s}const U_=6,F_=1.4,O_=.53;class B_{constructor(e,t,n){K(this,"bin",new Ia);K(this,"slots",[]);K(this,"free",[]);K(this,"material");this.scene=e;const s=this.model(t,n);this.material=this.bin.add(new $t({vertexColors:!0,roughness:.5}));for(let r=0;r<U_;r++){const a=new Nn;a.add(new rt(s,this.material)),a.visible=!1,e.add(a),this.slots.push(a),this.free.push(r)}}model(e,t){const n=new On(e),s=qe(t.ink,t.surface2,.1);n.block(0,.07,0,.82,.3,1.12,t.surface1,{round:.13}),n.block(0,.16,0,.86,.07,1.16,t.primary,{round:.035}),n.block(0,.37,-.05,.6,.04,.78,t.surface2);for(const a of[-.4,.4])for(const o of[-.38,.38])n.block(a,0,o,.08,.16,.28,s);n.block(0,.22,.57,.42,.08,.02,t.info),n.ball(0,.5,.38,.055,t.primary);const r=n.geometry();if(!r)throw new Error("courier model is empty");return this.bin.add(r)}acquire(){return this.free.pop()??-1}place(e,t,n,s,r,a){const o=this.slots[e];o&&(o.visible=a>.02,o.position.set(t,n,s),o.rotation.y=r,o.scale.setScalar(Math.max(.001,a*F_)))}release(e){const t=this.slots[e];t&&(t.visible=!1,this.free.push(e))}dispose(){for(const e of this.slots)this.scene.remove(e);this.bin.disposeAll()}}const zl=256;function kl(i){if(i===null)throw new Error("dossier model is empty");return i}class z_{constructor(e,t,n){K(this,"bin",new Ia);K(this,"bodyGeo");K(this,"paperGeo");K(this,"bodyMat");K(this,"paperMat");K(this,"bodies");K(this,"papers");K(this,"capacity",zl);K(this,"dummy",new ft);K(this,"tint",new Ne);this.scene=e;const s=new On(t);s.block(0,0,0,.5,.05,.36,16777215,{round:.02}),s.block(0,.07,0,.5,.025,.36,16777215,{round:.012});const r=new On(t);r.block(.01,.045,-.01,.45,.03,.33,16777215),this.bodyGeo=this.bin.add(kl(s.geometry())),this.paperGeo=this.bin.add(kl(r.geometry())),this.bodyMat=this.bin.add(new $t({vertexColors:!0,roughness:.5})),this.paperMat=this.bin.add(new $t({color:n.surface1,roughness:.6}));const a=this.makeMeshes(zl);this.bodies=a.bodies,this.papers=a.papers}makeMeshes(e){const t=new rs(this.bodyGeo,this.bodyMat,e),n=new rs(this.paperGeo,this.paperMat,e);for(const s of[t,n])s.count=0,s.frustumCulled=!1,s.receiveShadow=!0,this.scene.add(s);return{bodies:t,papers:n}}ensure(e){if(e<=this.capacity)return!1;this.scene.remove(this.bodies,this.papers),this.bodies.dispose(),this.papers.dispose(),this.capacity=Math.max(e,this.capacity*2);const t=this.makeMeshes(this.capacity);return this.bodies=t.bodies,this.papers=t.papers,!0}write(e,t,n,s){const r=this.dummy;r.position.set(t.x,t.y,t.z),r.rotation.set(0,n,0),r.scale.setScalar(Math.max(.001,s)),r.updateMatrix(),this.bodies.setMatrixAt(e,r.matrix),this.papers.setMatrixAt(e,r.matrix)}paint(e,t){this.bodies.setColorAt(e,this.tint.setHex(t)),this.bodies.instanceColor&&(this.bodies.instanceColor.needsUpdate=!0)}commit(e){this.bodies.count=e,this.papers.count=e,this.bodies.instanceMatrix.needsUpdate=!0,this.papers.instanceMatrix.needsUpdate=!0,this.bodies.boundingSphere=null}pickIndex(e){var t;return((t=e.intersectObject(this.bodies,!1)[0])==null?void 0:t.instanceId)??null}dispose(){this.scene.remove(this.bodies,this.papers),this.bodies.dispose(),this.papers.dispose(),this.bin.disposeAll()}}const sr=4.8,su=3.6,Qi=7,Zr=10,it=.22,ge=it+.08,rr=.95,ru=-.3,Gl=1.8,k_=3.4,G_=2.4;function H_(i){let e=1,t=1;for(const n of i.stations)e=Math.max(e,n.column+1),t=Math.max(t,n.lane+1);return{hall:i,len:e*sr+4,dep:Math.max(2,t)*su+5.2}}function V_(i){if(i.length===0)return{halls:[],extent:{w:0,d:0},roads:[]};const e=i.map(H_).sort((m,g)=>g.len-m.len),t=[],n=[];let s=0,r=0;for(const m of e)s<=r?(t.push(m),s+=m.dep+Qi):(n.push(m),r+=m.dep+Qi);const a=Math.max(0,...t.map(m=>m.len)),o=Math.max(0,...n.map(m=>m.len)),l=n.length?a+Zr+o:a,c=Math.max(s,r)-Qi,u=[],h=[];n.length>0&&h.push({x:-l/2+a+Zr/2,z:0,w:k_,d:c+8});const p=(m,g,_)=>{let f=-c/2;for(const[d,v]of m.entries()){d>0&&h.push({x:g+_/2,z:f-Qi/2,w:_,d:G_});const x=g+v.len/2,A=f+v.dep/2;u.push({templateId:v.hall.templateId,x,z:A,len:v.len,dep:v.dep,stations:v.hall.stations.map(b=>{const R=-v.len/2+3.2+b.column*sr,C=-v.dep/2+2.2+b.lane*su;return{nodeId:b.nodeId,x:R,z:C,wx:x+R,wz:A+C}})}),f+=v.dep+Qi}};return p(t,-l/2,a),p(n,-l/2+a+Zr,o),{halls:u,extent:{w:l,d:c},roads:h}}function xa(i,e){if(i<=0)return{count:0,late:0};const t=Math.min(14,Math.max(1,Math.round(Math.log10(i+1)*3.2)));if(e<=0)return{count:t,late:0};const n=Math.min(1,e/i);return{count:t,late:Math.min(t,Math.max(1,Math.round(t*n)))}}function W_(i,e){const t=e%5,n=Math.floor(e/5);return{x:i.wx-1+n*.5,y:ge+.04+t*.085,z:i.wz+1,ry:e*37%10/60}}function Jr(i,e){const t=e%2,n=Math.floor(e/2)%5,s=Math.floor(e/10);return{x:i.wx+rr+(t-.5)*.5,y:ge+.02+s*.075,z:i.wz+ru+(n-2)*.38}}function Hl(i){return{x:i.wx+rr,y:ge+.02,z:i.wz+ru}}function au(i,e){const t=ge+.02,n=i.wx+rr,s=e.wx+rr,r=i.wz+Gl,a=e.wz+Gl,o=[Hl(i),{x:n,y:t,z:r}];if(Math.abs(i.wz-e.wz)<.01)o.push({x:s,y:t,z:r});else{const l=e.wx>=i.wx?i.wx+sr/2:i.wx-sr/2;o.push({x:l,y:t,z:r},{x:l,y:t,z:a},{x:s,y:t,z:a})}return o.push(Hl(e)),o}function X_(i,e){return au(i,e).slice(1,-1)}function Kn(i,e){return`${i}${e}`}function j_(i,e){const t=new Set(i),n=new Set(e),s=i.filter(m=>n.has(m)),r=i.filter(m=>!n.has(m)),a=e.filter(m=>!t.has(m)),o=Math.min(r.length,a.length),l=[];for(let m=0;m<o;m++)l.push({from:r[m]??"",to:a[m]??""});const c=r[0]??s[0]??i[0]??null,u=a.slice(o).map(m=>({from:c,to:m})),h=a[a.length-1]??s[0]??null,p=r.slice(o).map(m=>({from:m,into:h}));return{keep:s,moves:l,spawns:u,retires:p}}const q_=7,Y_=.45,$_=3.2,K_=.4;function Z_(i){let e=0;for(let t=0;t<i.length;t++)e=e*31+i.charCodeAt(t)|0;return Math.abs(e)%40/100-.2}class J_{constructor(e,t,n,s){K(this,"buffers");K(this,"couriers");K(this,"tokens",[]);K(this,"bySession",new Map);K(this,"slots",new Map);K(this,"scratch",{x:0,y:0,z:0});K(this,"world",null);K(this,"hueOf",()=>0);K(this,"time",0);K(this,"moving",0);K(this,"dirty",!1);this.pal=n,this.motion=s,this.buffers=new z_(e,t,n),this.couriers=new B_(e,t,n)}attach(e,t){this.clear(),this.world=e,this.hueOf=t}clear(){for(const e of this.tokens)e.courier>=0&&this.couriers.release(e.courier);this.tokens.length=0,this.bySession.clear(),this.slots.clear(),this.moving=0,this.commit()}setRuns(e){this.clear();for(const t of e)for(const n of t.nodeIds)this.spawn(t,n,1);this.commit()}move(e){const t=this.bySession.get(e.sessionId)??[];if("removed"in e){for(const r of[...t])this.beginFade(r,0);this.commit();return}if(t.length===0){for(const r of e.nodeIds)this.fadeIn(this.spawn(e,r,this.motion.reduced?1:0));this.commit();return}for(const r of t)this.settle(r),r.templateId=e.templateId,this.setLate(r,e.late);const n=new Map(t.map(r=>[r.nodeId,r])),s=j_(t.map(r=>r.nodeId),e.nodeIds);for(const r of s.spawns){const a=r.from?n.get(r.from):void 0;if(a){const o=this.spawn(e,a.nodeId,1,a.pos);o&&this.relocate(o,r.to)}else this.fadeIn(this.spawn(e,r.to,this.motion.reduced?1:0))}for(const r of s.moves){const a=n.get(r.from);a&&this.relocate(a,r.to)}for(const r of s.retires){const a=n.get(r.from);a&&(a.retire=!0,r.into?this.relocate(a,r.into,!0):this.beginFade(a,0))}this.commit()}recolour(e,t){for(const n of this.bySession.get(e)??[])this.setLate(n,t)}positionOf(e){var n;const t=(n=this.bySession.get(e))==null?void 0:n[0];return t?t.pos:null}pick(e){var n;const t=this.buffers.pickIndex(e);return t===null?null:((n=this.tokens[t])==null?void 0:n.sessionId)??null}spawn(e,t,n,s){var h;const r=(h=this.world)==null?void 0:h.station(e.templateId,t);if(!this.world||!r)return null;const a=Kn(e.templateId,t),o=this.takeSlot(a),l=s?{...s}:Jr(r,o),c={sessionId:e.sessionId,templateId:e.templateId,nodeId:t,late:e.late,slotKey:a,slot:o,pos:l,skew:Z_(e.sessionId+t),yaw:0,scale:n,path:null,t0:0,duration:0,retire:!1,fade:null,courier:-1,index:this.tokens.length};c.yaw=c.skew,this.ensureCapacity(this.tokens.length+1),this.tokens.push(c);const u=this.bySession.get(e.sessionId);return u?u.push(c):this.bySession.set(e.sessionId,[c]),this.paint(c),this.writeMatrix(c),c}fadeIn(e){e&&e.scale<1&&this.beginFade(e,1,0)}takeSlot(e){let t=this.slots.get(e);t||this.slots.set(e,t=[]);const n=t.indexOf(null);return n>=0?n:(t.push(null),t.length-1)}fillSlot(e){const t=this.slots.get(e.slotKey);t&&(t[e.slot]=e)}freeSlot(e){const t=this.slots.get(e.slotKey);t&&t[e.slot]===e&&(t[e.slot]=null)}setLate(e,t){e.late!==t&&(e.late=t,this.paint(e))}paint(e){this.fillSlot(e),this.buffers.paint(e.index,e.late?this.pal.danger:this.hueOf(e.templateId))}settle(e){if(!e.path)return;const t=e.path.pts[e.path.pts.length-1];t&&(e.pos={...t}),e.yaw=e.skew,this.endMove(e),this.writeMatrix(e)}relocate(e,t,n=!1){const s=this.world,r=s==null?void 0:s.station(e.templateId,e.nodeId),a=s==null?void 0:s.station(e.templateId,t);if(!s||!a){this.beginFade(e,0);return}this.freeSlot(e),e.nodeId=t,e.slotKey=Kn(e.templateId,t),e.slot=this.takeSlot(e.slotKey),this.fillSlot(e);const o=n?{...Jr(a,e.slot),y:ge+.02}:Jr(a,e.slot);if(this.motion.reduced){e.pos=o,e.retire?this.removeToken(e):this.writeMatrix(e);return}const l=r?au(r,a).slice(1,-1):[];e.path=h_([e.pos,...l,o]),e.duration=Math.min($_,Math.max(Y_,e.path.length/q_)),e.t0=this.time,e.courier=this.couriers.acquire(),this.moving++}endMove(e){e.path=null,e.courier>=0&&this.couriers.release(e.courier),e.courier=-1,this.moving--}beginFade(e,t,n=e.scale){if(this.motion.reduced){e.scale=t,t===0?this.removeToken(e):this.writeMatrix(e);return}e.fade||this.moving++,e.fade={from:n,to:t,t0:this.time}}removeToken(e){e.path&&this.endMove(e),e.fade&&(e.fade=null,this.moving--),this.freeSlot(e);const t=this.bySession.get(e.sessionId);t&&(t.splice(t.indexOf(e),1),t.length===0&&this.bySession.delete(e.sessionId));const n=this.tokens.pop();n&&n!==e&&(this.tokens[e.index]=n,n.index=e.index,this.paint(n),this.writeMatrix(n)),this.dirty=!0}ensureCapacity(e){if(this.buffers.ensure(e))for(const t of this.tokens)this.paint(t),this.writeMatrix(t)}writeMatrix(e){this.buffers.write(e.index,e.pos,e.yaw,e.scale),this.dirty=!0}commit(){this.buffers.commit(this.tokens.length),this.dirty=!1}update(e,t){return this.time=t,this.moving>0&&this.step(t),this.dirty&&this.commit(),this.moving>0}step(e){const t=[];for(const n of this.tokens)if(n.path&&this.stepMove(n,e),n.fade){const s=Math.min(1,(e-n.fade.t0)/K_);if(n.scale=n.fade.from+(n.fade.to-n.fade.from)*ga(s),s>=1){const r=n.fade.to===0;n.fade=null,this.moving--,r&&t.push(n)}this.writeMatrix(n)}for(const n of t)this.removeToken(n)}stepMove(e,t){const n=e.path;if(!n)return;const s=Math.min(1,(t-e.t0)/e.duration),r=ga(s)*n.length,a=d_(n,r,this.scratch),o=Math.min(1,Math.max(0,Math.min(r,n.length-r)/1.2)),l=e.courier>=0?O_*o:.12*o;if(e.pos.x=this.scratch.x,e.pos.y=this.scratch.y+l,e.pos.z=this.scratch.z,e.yaw=nu(e.skew,a+Math.PI/2,o),e.courier>=0&&this.couriers.place(e.courier,this.scratch.x,ge,this.scratch.z,a,o),this.writeMatrix(e),s>=1){const c=n.pts[n.pts.length-1];c&&(e.pos={...c}),e.yaw=e.skew,this.endMove(e),this.writeMatrix(e),e.retire&&this.beginFade(e,0)}}dispose(){this.buffers.dispose(),this.couriers.dispose(),this.tokens.length=0,this.bySession.clear(),this.slots.clear()}}function Vl(i){return i.map(e=>{const t=e.stations.map(s=>`${s.nodeId}:${s.type}:${s.channel}:${s.column}:${s.lane}`).join(","),n=e.links.map(s=>`${s.from}>${s.to}`).join(",");return`${e.templateId}|${e.color}|${e.sign?"sign":"chips"}|${t}|${n}`}).join(`
`)}function Q_(i){return i?`${i.tone}|${i.text}|${i.sub}`:""}function Wl(i){return{title:i.title,waiting:i.waiting,breached:i.breached,openIncidents:i.openIncidents,callout:Q_(i.callout)}}function ex(i,e){const t=xa(i.waiting,i.breached),n=xa(e.waiting,e.breached);return{pile:t.count!==n.count||t.late!==n.late,beacon:i.openIncidents>0!=e.openIncidents>0,callout:i.callout!==e.callout,label:i.title!==e.title||i.waiting!==e.waiting||i.breached!==e.breached}}function Xl(i){return{displayName:i.displayName,liveRuns:i.liveRuns,overdue:i.overdue,sign:i.sign?`${i.sign.code}|${i.sign.meta}|${i.sign.late}`:""}}function tx(i,e){return i.displayName!==e.displayName||i.liveRuns!==e.liveRuns||i.overdue!==e.overdue||i.sign!==e.sign}function nx(i,e){if(i.length!==e.length)return!1;const t=new Set(i);return t.size===new Set(e).size&&e.every(n=>t.has(n))}function ix(i,e){const t={added:[],removed:[],moved:[],recoloured:[]},n=new Set;for(const s of e){n.add(s.sessionId);const r=i.get(s.sessionId);r?r.templateId!==s.templateId||!nx(r.nodeIds,s.nodeIds)?t.moved.push(s):r.late!==s.late&&t.recoloured.push(s):t.added.push(s)}for(const s of i.keys())n.has(s)||t.removed.push(s);return t}const ks=.28;class sx{constructor(e,t,n,s){K(this,"root",new Nn);K(this,"ring");K(this,"edges");K(this,"material");K(this,"ringGeo",new Pa(.9,1,64).rotateX(-Math.PI/2));K(this,"edgeGeo",new cn(1,.08,1));K(this,"marker",null);K(this,"last",{x:NaN,z:NaN});this.scene=e,this.positionOf=n,this.motion=s,this.material=new bn({color:t,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1}),this.ring=new rt(this.ringGeo,this.material),this.edges=[0,1,2,3].map(()=>new rt(this.edgeGeo,this.material));for(const r of[this.ring,...this.edges])r.renderOrder=20,this.root.add(r);this.root.visible=!1,e.add(this.root)}show(e){this.marker=e,this.last={x:NaN,z:NaN},this.root.visible=!0;const t=e.kind==="frame";this.ring.visible=!t;for(const n of this.edges)n.visible=t;if(e.kind==="ring")this.root.position.set(e.x,ge+.05,e.z),this.ring.scale.setScalar(e.radius);else if(e.kind==="frame"){this.root.position.set(e.x,it+.1,e.z);const[n,s,r,a]=this.edges;n==null||n.position.set(0,0,-e.d/2),n==null||n.scale.set(e.w,1,ks),s==null||s.position.set(0,0,e.d/2),s==null||s.scale.set(e.w,1,ks),r==null||r.position.set(-e.w/2,0,0),r==null||r.scale.set(ks,1,e.d),a==null||a.position.set(e.w/2,0,0),a==null||a.scale.set(ks,1,e.d)}else this.ring.scale.setScalar(.55)}hide(){this.marker=null,this.root.visible=!1}update(e,t){const n=this.marker;if(!n)return!1;let s=!1;if(n.kind==="run"){const r=this.positionOf(n.sessionId);r&&(r.x!==this.last.x||r.z!==this.last.z)&&(this.last={x:r.x,z:r.z},this.root.position.set(r.x,ge+.05,r.z),s=!0)}return this.motion.reduced||!t?s:(this.material.opacity=.7+.25*Math.sin(e*2.4),!0)}dispose(){this.scene.remove(this.root),this.material.dispose(),this.ringGeo.dispose(),this.edgeGeo.dispose()}}const vn=2.4,an=1.25,bi=.7,yt=.28,Ln=.22,jl=2.4,ql=vn;function rx(i,e,t,n,s){const{x:r,z:a,len:o,dep:l}=t,c=s.surface1,u=a-l/2+yt/2,h=r-o/2+yt/2,p=a+l/2-yt/2,m=r+o/2-yt/2,g=qe(s.info,c,.82),_=yt+.24;i.block(r,0,a,o+.9,it,l+.9,qe(s.surface2,c,.5),{round:.12}),i.block(r,it,u,o,an,yt,c,{round:.04}),i.block(h,it,a+yt/2,yt,an,l-yt,c,{round:.04}),e.block(r,it+an,u,o-.2,vn-an,.05,g),e.block(h,it+an,a+yt/2,.05,vn-an,l-yt-.2,g);for(let f=r-o/2+3.2;f<r+o/2-1;f+=3.2)i.block(f,it+an,u,.08,vn-an,.1,c);for(let f=a-l/2+3.2;f<a+l/2-1;f+=3.2)i.block(h,it+an,f,.1,vn-an,.08,c);i.block(r,it+vn,u,o+.12,Ln,_,n,{round:.05}),i.block(h,it+vn,a,_,Ln,l,n,{round:.05}),i.block(r,it,p,o-yt,bi,yt,c,{round:.04}),i.block(m,it,a,yt,bi,l-yt*2,c,{round:.04}),i.block(r,it+bi,p,o-yt+.04,Ln,_,n,{round:.05}),i.block(m,it+bi,a,_,Ln,l-yt*2+.04,n,{round:.05});for(const[f,d,v]of[[h,p,bi+Ln+.1],[m,p,bi+Ln+.1],[m,u,vn+Ln],[h,u,vn+Ln]])i.block(f,it,d,.34,v,.34,c,{round:.08})}function ax(i,e){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");n&&(n.fillStyle="#ffffff",n.fillRect(0,0,128,128),n.strokeStyle=`${on(i.ink)}26`,n.lineWidth=3,n.strokeRect(0,0,128,128));const s=e.add(new hr(t));return s.colorSpace=ht,s.wrapS=s.wrapT=Ks,s.anisotropy=4,s}function ox(i,e,t,n,s){const r=i.len-.1,a=i.dep-.1,o=s.add(new ei(r,a)),l=o.getAttribute("uv");for(let h=0;h<l.count;h++)l.setXY(h,l.getX(h)*r/jl,l.getY(h)*a/jl);const c=s.add(new $t({color:qe(t.surface1,e,.12),map:n,roughness:.75})),u=new rt(o,c);return u.rotation.x=-Math.PI/2,u.position.set(i.x,it+.021,i.z),u.receiveShadow=!0,u}function lx(i,e,t,n){const s=new Map(e.stations.map(o=>[o.nodeId,o])),r=qe(n.surface2,n.ink,.14),a=new Set;for(const o of t){const l=s.get(o.from),c=s.get(o.to);if(!l||!c||l===c)continue;const u=X_(l,c);for(let h=1;h<u.length;h++){const p=u[h-1],m=u[h];if(!p||!m)continue;const g=`${p.x.toFixed(2)},${p.z.toFixed(2)}|${m.x.toFixed(2)},${m.z.toFixed(2)}`;if(a.has(g))continue;a.add(g);const _=Math.abs(m.x-p.x)+.14,f=Math.abs(m.z-p.z)+.14;i.block((p.x+m.x)/2,it+.03,(p.z+m.z)/2,_,.012,f,r)}}}const Gs="'Be Vietnam Pro', 'Segoe UI', sans-serif";let Qr=null;function cx(){if(!Qr){const i=document.createElement("canvas").getContext("2d");if(!i)throw new Error("2D canvas is unavailable");Qr=i}return Qr}function ux(i,e){const t=document.createElement("canvas");t.width=Math.ceil(i),t.height=Math.ceil(e);const n=t.getContext("2d");if(!n)throw new Error("2D canvas is unavailable");return{canvas:t,ctx:n}}function Yl(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function hx(i,e,t){if(i.measureText(e).width<=t)return e;let n=e;for(;n.length>1&&i.measureText(`${n}…`).width>t;)n=n.slice(0,-1);return`${n.trimEnd()}…`}function dx(i,e,t,n,s){if(i.lineWidth=Math.max(2,s*.14),i.lineCap="round",i.beginPath(),e==="stack"){for(const r of[-.32,0,.32])i.moveTo(t-s*.4,n+r*s),i.lineTo(t+s*.4,n+r*s);i.stroke()}else e==="clock"?(i.arc(t,n,s*.45,0,Math.PI*2),i.moveTo(t,n-s*.26),i.lineTo(t,n),i.lineTo(t+s*.2,n+s*.12),i.stroke()):(i.moveTo(t-s*.25,n-s*.4),i.lineTo(t+s*.4,n),i.lineTo(t-s*.25,n+s*.4),i.closePath(),i.fill())}function fx(i,e){const t=i.large?192:112,n=Math.round(t*.38),s=Math.round(t*.3),r=t*.3,a=t*.13,o=t*.56,l=t*.14,c=cx();c.font=`800 ${n}px ${Gs}`;const u=hx(c,i.title,t*(i.large?11:8)),h=c.measureText(u).width;c.font=`700 ${s}px ${Gs}`;const p=i.chips.map(v=>o*.9+c.measureText(v.text).width+o*.4),m=p.length?p.reduce((v,x)=>v+x,0)+l*(p.length-1):0,g=Math.ceil(r+a*2+l+h+(m?l*1.4+m:0)+r),{canvas:_,ctx:f}=ux(g,t);f.textBaseline="middle",f.fillStyle=on(e.surface1),Yl(f,3,3,g-6,t-6,(t-6)/2),f.fill(),f.strokeStyle=`${on(e.ink)}33`,f.lineWidth=3,f.stroke();let d=r;return f.fillStyle=on(i.dot),f.beginPath(),f.arc(d+a,t/2,a,0,Math.PI*2),f.fill(),d+=a*2+l,f.fillStyle=on(e.ink),f.font=`800 ${n}px ${Gs}`,f.fillText(u,d,t/2+2),d+=h+l*1.4,f.font=`700 ${s}px ${Gs}`,i.chips.forEach((v,x)=>{const A=p[x]??0,b=v.tone==="danger";f.fillStyle=on(b?e.danger:e.surface2),Yl(f,d,(t-o)/2,A,o,o/2),f.fill();const R=on(b?e.surface1:e.ink);f.fillStyle=R,f.strokeStyle=R,dx(f,v.glyph,d+o*.5,t/2,o*.42),f.fillText(v.text,d+o*.9,t/2+2),d+=A+l}),_}function px(i,e){const t=e.add(new hr(i));return t.colorSpace=ht,t.minFilter=Ii,t.anisotropy=4,t}const ou=(i,e,t)=>px(fx(i,e),t);function mx(i,e,t,n,s){const r=i.material.map,a=ou(e,t,n);i.material.map=a,r&&n.release(r);const o=a.image;return{x:s*o.width/o.height,y:s}}function gx(i,e,t,n){const s=ou(i,e,t),r=s.image,a=t.add(new Yc({map:s,transparent:!0,depthWrite:!1,fog:!1})),o=new I0(a);return o.center.set(.5,0),o.scale.set(n*r.width/r.height,n,1),o.renderOrder=10,o}const _x=14;class xx{constructor(e,t,n,s,r){K(this,"mesh");K(this,"dummy",new ft);K(this,"tint",new Ne);this.danger=r;const a=new On(t);a.block(0,0,0,.42,.08,.32,16777215,{round:.02});const o=a.geometry();if(!o)throw new Error("pile model is empty");n.add(o);const l=n.add(new $t({vertexColors:!0,roughness:.5}));this.mesh=n.add(new rs(o,l,Math.max(1,s)*_x)),this.mesh.count=0,this.mesh.setColorAt(0,this.tint.setHex(16777215)),this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,e.add(this.mesh)}set(e){let t=0;for(const n of e){const{count:s,late:r}=xa(n.waiting,n.breached);for(let a=0;a<s;a++,t++){const o=W_(n.station,a);this.dummy.position.set(o.x,o.y,o.z),this.dummy.rotation.set(0,o.ry,0),this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix),this.mesh.setColorAt(t,this.tint.setHex(a>=s-r?this.danger:n.hue))}}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}const vx={START:"start",END:"end",APPROVAL:"approval",HUMAN_TASK:"desk",FORM_INPUT:"desk",CHECKLIST:"desk",MANUAL_FALLBACK:"desk",SERVICE_CALL:"rack",AUTOMATION_STEP:"rack",EXTERNAL_WAIT:"gate",WAIT_UNTIL:"gate",TIMER:"gate",AGENT_TASK:"holo",NOTIFICATION:"notice",DECISION:"switch",DECISION_TABLE:"switch",PARALLEL:"switch",JOIN:"switch"},Mx={human:"desk",system:"rack",ai:"holo",control:"switch",end:"end"};function Sx(i,e){return vx[i]??Mx[e]}function yx(i,e,t){const{solid:n}=i,{x:s,z:r,accent:a}=e;switch(n.block(s,it,r,3,.06,2.7,a,{round:.25}),n.block(s,it+.01,r,2.7,.07,2.4,t.surface1,{round:.2}),n.block(s+.95,ge,r-.3,1.05,.02,1.95,qe(t.surface2,t.ink,.06),{round:.05}),e.kind){case"desk":$l(i,s-.7,r-.55,!1,e,t);break;case"approval":$l(i,s-.62,r-.55,!0,e,t);break;case"rack":bx(i,s,r,e,t);break;case"gate":Tx(i,s,r,t);break;case"holo":Ax(i,s-.6,r-.2,e,t);break;case"notice":wx(i,s-.6,r-.2,t);break;case"switch":Rx(i,s-.6,r-.2,e,t);break;case"start":Cx(i,s,r,e,t);break;case"end":Lx(i,s-.7,r-.3,t);break}}function $l(i,e,t,n,s,r){const{solid:a,glow:o}=i,l=n?1.7:1.25,c=n?.8:.62,u=qe(r.surface2,r.ink,.22),h=qe(r.ink,r.surface2,.12);a.block(e,ge+.56,t,l,.06,c,r.surface1,{round:.03}),a.block(e-(l/2-.06),ge,t,.05,.56,c-.08,u),a.block(e+(l/2-.06),ge,t,.05,.56,c-.08,u),a.block(e+.05,ge+.62,t-c/2+.12,.62,.38,.05,h,{round:.03}),o.block(e+.05,ge+.74,t-c/2+.15,.56,.3,.012,qe(r.info,r.surface1,.55)),a.block(e,ge+.62,t+.1,.42,.025,.14,r.surface2),a.block(e,ge+.24,t+.75,.48,.09,.46,s.accent,{round:.04}),a.block(e,ge+.3,t+1,.48,.46,.08,s.accent,{round:.04}),a.cyl(e,ge+.02,t+.75,.035,.035,.22,h,8),a.cyl(e,ge,t+.75,.22,.24,.04,h,14),Ex(a,e,t+.75,n,s,r),n&&(a.block(e-.55,ge+.62,t+.15,.2,.06,.14,r.surface2),a.block(e+.55,ge+.62,t+.12,.26,.08,.2,r.surface2,{round:.03}),a.block(e+.55,ge+.7,t+.12,.24,.05,.18,r.danger,{round:.02}),a.cyl(e+.55,ge+.75,t+.12,.035,.05,.24,qe(r.ink,r.info,.3),12),a.ball(e+.55,ge+1.02,t+.12,.09,qe(r.ink,r.info,.3)))}function Ex(i,e,t,n,s,r){const a=qe(qe(r.warning,r.danger,.3),r.surface1,.55),o=qe(r.ink,r.surface2,.15),l=qe(r.ink,r.control,.35),c=n?r.surface1:s.hall,u=ge+.33;i.block(e,u,t-.2,.34,.13,.44,l,{round:.04});for(const h of[-.09,.09])i.block(e+h,ge+.02,t-.4,.13,u-ge-.02,.13,l);i.block(e,u+.1,t+.07,.36,.44,.22,c,{round:.06});for(const h of[-.22,.22])i.block(e+h,u+.3,t-.17,.09,.09,.44,c,{round:.03});i.ball(e,u+.7,t+.05,.15,a),i.ball(e,u+.76,t+.09,.155,o,.7),n&&i.block(e,u+.2,t-.05,.06,.26,.02,s.hall)}function bx(i,e,t,n,s){const{solid:r,glow:a}=i,o=qe(s.ink,s.control,.3),l=qe(s.ink,s.surface2,.04);r.block(e-1,ge,t-.4,.78,2.05,1,o,{round:.06}),r.block(e-1,ge+.12,t+.1,.66,1.84,.04,l),r.block(e-1,ge+2.05,t-.4,.8,.06,1.02,qe(s.surface2,s.muted,.3));for(let u=0;u<6;u++)a.block(e-1.18,ge+.32+u*.27,t+.13,.12,.05,.02,u%3===0?s.warning:s.success),a.block(e-.82,ge+.32+u*.27,t+.13,.2,.05,.02,n.accent);const c=s.surface1;r.cyl(e-.1,ge,t-.3,.36,.42,.25,l,20),r.cyl(e-.1,ge+.25,t-.3,.27,.3,.25,n.accent,20),r.ball(e-.1,ge+.62,t-.3,.17,l),r.box(e-.1,ge+1.1,t-.3,.2,.85,.2,c,{round:.08}),r.ball(e-.1,ge+1.55,t-.3,.14,l),r.box(e+.15,ge+1.7,t-.3,.18,.7,.18,n.accent,{rz:-1.15,round:.07}),r.block(e+.5,ge+1.84,t-.3,.26,.12,.18,c,{round:.04})}function Tx(i,e,t,n){const{solid:s}=i,r=qe(n.control,n.surface1,.15);s.block(e-1.25,ge,t,.3,2.1,.3,r,{round:.08}),s.block(e-0,ge,t,.3,2.1,.3,r,{round:.08});for(let a=0;a<6;a++)s.block(e-1.4+a*.27+.135,ge+2.1,t,.27,.34,.36,a%2?n.ink:n.warning);s.block(e-.62,ge,t+.45,.9,.62,.6,n.surface1,{round:.06}),i.glow.block(e-.62,ge+.62,t+.45,.5,.02,.3,n.warning)}function Ax(i,e,t,n,s){const r=qe(s.ink,s.surface2,.1);i.solid.cyl(e,ge,t,.7,.8,.14,r,32),i.glow.cyl(e,ge+.14,t,.62,.62,.02,n.accent,32),i.panels.push({x:e,y:ge+1.35,z:t})}function wx(i,e,t,n){const s=qe(n.surface2,n.muted,.35);i.solid.block(e,ge,t,.6,.12,.6,s,{round:.04}),i.solid.cyl(e,ge+.12,t,.08,.1,1.5,s,10),i.solid.ball(e,ge+1.8,t,.34,n.info)}function Rx(i,e,t,n,s){i.solid.cyl(e,ge,t,.06,.06,1.1,qe(s.surface2,s.muted,.35),10),i.solid.box(e,ge+1.5,t,.9,.9,.2,n.accent,{rz:Math.PI/4,round:.08})}function Cx(i,e,t,n,s){for(const r of[e-1.25,e])i.solid.block(r,ge,t,.24,1.8,.24,n.hall,{round:.06});i.solid.block(e-.62,ge+1.8,t,1.5,.26,.3,n.hall,{round:.08}),i.glow.block(e-.62,ge,t+.55,1.2,.02,.3,s.success)}function Lx(i,e,t,n){const{solid:s}=i,r=qe(n.surface2,n.muted,.35);s.cyl(e,ge,t,.05,.05,1.9,r,8),s.block(e+.45,ge+1.88,t,1,.07,.08,r),s.ball(e+.8,ge+1.5,t,.36,n.success,.95),s.ball(e+.8,ge+1.12,t,.09,n.ink),s.block(e+.5,ge,t+.7,1.1,.5,.8,qe(n.success,n.surface1,.85),{round:.08})}function lu(i,e){return i.channel==="end"?e.success:{human:e.human,system:e.system,ai:e.ai,control:e.control}[i.channel]}function Kl(i,e,t){const n=[];return i.waiting>0&&n.push({glyph:"stack",text:t(i.waiting),tone:"neutral"}),i.breached>0&&n.push({glyph:"clock",text:t(i.breached),tone:"danger"}),{title:i.title,dot:lu(i,e),large:!1,chips:n}}function Zl(i,e,t){const n=[];return i.liveRuns>0&&n.push({glyph:"play",text:t(i.liveRuns),tone:"neutral"}),i.overdue>0&&n.push({glyph:"clock",text:t(i.overdue),tone:"danger"}),{title:i.displayName,dot:e,large:!0,chips:n}}function Px(i,e){const t=document.createElement("canvas");t.width=128,t.height=160;const n=t.getContext("2d");if(n){const r=on(qe(i.ai,i.surface1,.7));n.strokeStyle=r,n.lineWidth=4,n.strokeRect(5,5,118,150),n.fillStyle=r;for(let a=0;a<7;a++)n.fillRect(16,24+a*18,40+a*37%60,8)}const s=e.add(new hr(t));return s.colorSpace=ht,s}function Ix(i,e,t,n){if(e.length===0)return[];const s=Px(t,n),r=n.add(new ei(1,1.25)),a=n.add(new ki(.62,.3,1.9,32,1,!0)),o=n.add(new bn({map:s,color:t.ai,transparent:!0,opacity:.9,blending:Ys,depthWrite:!1,side:en})),l=n.add(new bn({color:t.ai,transparent:!0,opacity:.12,blending:Ys,depthWrite:!1,side:en}));return e.map(c=>{const u=new rt(r,o);u.position.set(c.x,c.y,c.z);const h=new rt(a,l);return h.position.set(c.x,c.y-.23,c.z),i.add(u,h),u})}function Nx(i,e,t){const n=t.add(new ki(.03,.03,1.6,8)),s=t.add(new cs(.17,12,8)),r=t.add(new $t({color:qe(e.muted,e.surface1,.4),roughness:.6})),a=t.add(new bn({color:e.danger}));return o=>{const l=new Nn;l.position.set(o.wx+1.3,ge,o.wz-1);const c=new rt(n,r);c.position.y=.8;const u=new rt(s,a);return u.position.y=1.7,l.add(c,u),l.visible=!1,i.add(l),l}}const Jl=1,Ql=2.6,Dx=it+3.3,Ux=it+3,ea=6.5,Fx=7.5,ec=1.7;function Ox(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Bx(i,e,t){return Math.abs(e-i.x)<i.len/2+ec&&Math.abs(t-i.z)<i.dep/2+ec}function zx(i){if(i.halls.length===0)return[];const e=Ox(Math.round(i.extent.w*100)*31+Math.round(i.extent.d*100)+i.halls.length),t=[],n=(o,l)=>{i.halls.some(c=>Bx(c,o,l))||t.push({x:o,z:l,s:.8+e()*.45,tone:e()<.5?0:1})},s=()=>(e()-.5)*1.2,r=i.extent.w/2+5.5,a=i.extent.d/2+5.5;for(let o=-r;o<=r;o+=ea)n(o+s(),-a+s()),n(o+s(),a+s());for(let o=-a+ea;o<a;o+=ea)n(-r+s(),o+s()),n(r+s(),o+s());for(const o of i.roads)if(!(o.d<=o.w))for(let l=o.z-o.d/2+3;l<=o.z+o.d/2-3;l+=Fx)n(o.x-o.w/2-1.5+s()*.4,l+s()),n(o.x+o.w/2+1.5+s()*.4,l+s());return t}const kx=1778496,tc=96;function Gx(i){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(t){const s=t.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.62,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=s,t.fillRect(0,0,256,256)}const n=i.add(new hr(e));return n.colorSpace=ht,n}function Hx(i,e,t,n,s){const r=eu(t),a=n.add(new bn({color:r})),o=new rt(n.add(new ei(2400,2400)),a);o.rotation.x=-Math.PI/2,i.add(o);const l=n.add(new $t({color:t.surface1,map:Gx(n),transparent:!0,depthWrite:!1,roughness:.95})),c=new rt(n.add(new ei(e.extent.w+tc,e.extent.d+tc*.9)),l);c.rotation.x=-Math.PI/2,c.position.y=.02,c.receiveShadow=!0,i.add(c);const u=new On(s),h=qe(t.surface2,t.ink,.07);for(const g of e.roads)u.block(g.x,.02,g.z,g.w,.03,g.d,h,{round:.02});const p=u.mesh(n.add(new $t({vertexColors:!0,roughness:.9})),n,!1);p&&i.add(p);const m=zx(e);if(m.length>0){const g=n.add(new $t({color:qe(qe(t.warning,t.ink,.5),t.surface2,.25),roughness:.8})),_=n.add(new $t({roughness:.7})),f=n.add(new rs(n.add(new ki(.11,.15,1.4,8)),g,m.length)),d=n.add(new rs(n.add(new cs(1,12,9)),_,m.length)),v=new ft,x=new Ne,A=[qe(t.success,t.surface1,.35),qe(t.success,t.surface1,.5)];m.forEach((b,R)=>{v.position.set(b.x,.7*b.s,b.z),v.scale.setScalar(b.s),v.updateMatrix(),f.setMatrixAt(R,v.matrix),v.position.set(b.x,2.35*b.s,b.z),v.scale.set(.95*b.s,1.18*b.s,.95*b.s),v.updateMatrix(),d.setMatrixAt(R,v.matrix),d.setColorAt(R,x.setHex(A[b.tone]??6280090))});for(const b of[f,d])b.castShadow=!0,b.receiveShadow=!0,b.frustumCulled=!1,i.add(b)}return{setNight(g){a.color.setHex(g?Qc:r),l.color.setHex(g?kx:t.surface1)}}}const Vx=96;function Wx(i,e){const{pal:t}=e,n=V_(i.halls),s=new Ia,r=new Nn;r.name="floor-world";const a=new Map(i.halls.map(I=>[I.templateId,I])),o=Hx(r,n,t,s,e.cache),l=s.add(new $t({vertexColors:!0,roughness:.6})),c=s.add(new bn({vertexColors:!0})),u=s.add(new $t({vertexColors:!0,roughness:.1,transparent:!0,opacity:.24,depthWrite:!1})),h=new On(e.cache),p=ax(t,s),m=new Map,g=new Map,_=new Map,f=new Map,d=[],v=new WeakMap,x=s.add(new bn),A=s.add(new cn(3,2.4,2.7)),b=[],R=Nx(r,t,s),C=(I,V)=>{const j=gx(I,t,s,V);return r.add(j),{sprite:j,baseX:j.scale.x,baseY:j.scale.y}},{labels:W}=e,S=(I,V,j)=>W.setCallout(Kn(I,V.nodeId),j??null,{x:V.wx,y:Ux,z:V.wz}),w=(I,V,j)=>W.setSign(I.templateId,I.sign?{code:I.sign.code,name:I.displayName,meta:I.sign.meta,late:I.sign.late,hue:j}:null,{x:V.x-V.len/2+.4,y:it+ql+.6,z:V.z-V.dep/2+.3},I.templateId);for(const I of n.halls){const V=a.get(I.templateId);if(!V)continue;g.set(I.templateId,I);const j=e.hue(V.color)??t.info,J={solid:new On(e.cache),glow:new On(e.cache),panels:b};rx(J.solid,h,I,j,t),lx(J.solid,I,V.links,t),r.add(ox(I,j,t,p,s));const k=new Map(V.stations.map(_e=>[_e.nodeId,_e]));for(const _e of I.stations){const be=k.get(_e.nodeId);if(!be)continue;const Se=Kn(I.templateId,_e.nodeId);m.set(Se,_e),yx(J,{x:_e.wx,z:_e.wz,kind:Sx(be.type,be.channel),accent:lu(be,t),hall:j},t);const Oe=C(Kl(be,t,e.count),Jl);Oe.sprite.position.set(_e.wx,Dx,_e.wz);const F=R(_e);F.visible=be.openIncidents>0,_.set(Se,{hue:j,plan:_e,tag:Oe,beacon:F,last:Wl(be)}),S(I.templateId,_e,be.callout);const st=new rt(A,x);st.visible=!1,st.position.set(_e.wx,it+1.2,_e.wz),r.add(st),d.push(st),v.set(st,{kind:"station",templateId:I.templateId,nodeId:_e.nodeId})}const $=J.solid.mesh(l,s,!0),se=J.glow.mesh(c,s,!1);$&&r.add($),se&&r.add(se),w(V,I,V.color);let fe=null;V.sign||(fe=C(Zl(V,j,e.count),Ql),fe.sprite.position.set(I.x,it+ql+.6,I.z-I.dep/2+.3)),f.set(I.templateId,{hue:j,chipSign:fe,last:Xl(V)});const ue=new rt(s.add(new cn(I.len+.9,2.6,I.dep+.9)),x);ue.visible=!1,ue.position.set(I.x,1.3,I.z),r.add(ue),d.push(ue),v.set(ue,{kind:"hall",templateId:I.templateId})}const O=h.mesh(u,s,!1);O&&(O.renderOrder=5,r.add(O));const q=new xx(r,e.cache,s,_.size,t.danger),ne=I=>{const V=[];for(const j of I)for(const J of j.stations){const k=_.get(Kn(j.templateId,J.nodeId));k&&V.push({station:k.plan,waiting:J.waiting,breached:J.breached,hue:k.hue})}return V};q.set(ne(i.halls));const P=Ix(r,b,t,s);r.updateMatrixWorld(!0);let U=100;const X=()=>{const I=Math.min(1,Math.max(0,(70-U)/15)),V=Math.min(1.15,Math.max(.5,U/55)),j=Math.min(2.6,Math.max(.55,U/Vx));for(const J of _.values())J.tag.sprite.visible=I>0,J.tag.sprite.material.opacity=I,J.tag.sprite.scale.set(J.tag.baseX*V,J.tag.baseY*V,1);for(const J of f.values())J.chipSign&&J.chipSign.sprite.scale.set(J.chipSign.baseX*j,J.chipSign.baseY*j,1)},Z=(I,V,j)=>{const J=mx(I.sprite,V,t,s,j);I.baseX=J.x,I.baseY=J.y},Y={group:r,plan:n,station:(I,V)=>m.get(Kn(I,V)),hall:I=>g.get(I),proxies:d,pickOf:I=>v.get(I),ambient:P.length>0,animate(I){P.forEach((V,j)=>{V.rotation.y=Math.sin(I*.5+j)*.5})},updateLive(I){let V=!1,j=!1;for(const J of I){const k=f.get(J.templateId);if(k){const $=Xl(J);if(tx(k.last,$)){k.last=$;const se=g.get(J.templateId);se&&w(J,se,J.color),k.chipSign&&Z(k.chipSign,Zl(J,k.hue,e.count),Ql),V=!0}}for(const $ of J.stations){const se=_.get(Kn(J.templateId,$.nodeId));if(!se)continue;const fe=Wl($),ue=ex(se.last,fe);se.last=fe,ue.label&&Z(se.tag,Kl($,t,e.count),Jl),ue.beacon&&(se.beacon.visible=$.openIncidents>0),ue.callout&&S(J.templateId,se.plan,$.callout),j||(j=ue.pile),V||(V=ue.label||ue.beacon||ue.pile||ue.callout)}}return j&&q.set(ne(I)),V&&X(),V},setCameraDistance(I){U=I,X()},setNight(I){o.setNight(I)},dispose(){W.clear(),r.removeFromParent(),s.disposeAll()}};return Y.setNight(e.night),Y}const Xx=1500,ta=1100,jx=.2,nc=64,ic=.72,qx=Math.PI/6,Yx=420,$x=600,Kx=2e4,Zx=3e3,Jx=36;async function Qx(){if(!("fonts"in document))return;let i;const e=new Promise(t=>{i=setTimeout(t,Xx)});try{await Promise.race([Promise.all([document.fonts.load('800 64px "Be Vietnam Pro"'),document.fonts.load('700 32px "Be Vietnam Pro"')]),e])}catch{}finally{clearTimeout(i)}}function ev(){try{const i=new Intl.NumberFormat(document.documentElement.lang||void 0);return e=>i.format(e)}catch{return i=>String(i)}}const sc=(i,e,t)=>Math.min(t,Math.max(e,i));class tv{constructor(){K(this,"m",null);K(this,"disposed",!1);K(this,"mounting",!1);K(this,"autoHome",!0);K(this,"scene",null);K(this,"runById",new Map);K(this,"signature",null);K(this,"night",!1);K(this,"active",!0);K(this,"selected",null);K(this,"follow",!1);K(this,"userAt",-1/0);K(this,"followedAt",-1/0);K(this,"ray",new k0);K(this,"ndc",new Pe)}async mount(e,t){if(this.m||this.mounting)throw new Error("The floor renderer is already mounted");this.mounting=!0;try{if(await Qx(),this.disposed)return;this.m=this.build(e,t)}finally{this.mounting=!1}const n=this.m;if(n)try{n.engine.setNight(this.night),this.scene&&this.applyScene(),n.engine.setActive(this.active)}catch(s){throw this.m=null,this.release(n),s}}build(e,t){const n=V0(e),s={reduced:window.matchMedia("(prefers-reduced-motion: reduce)").matches},r=new m_(e,n,s),a=new A_,o=[];try{const l=new J_(r.scene,a,n,s);o.push(()=>l.dispose());const c=new sx(r.scene,n.primary,p=>l.positionOf(p),s);o.push(()=>c.dispose());const u=new M_(e,r.camera,()=>r.size,r.canvas,p=>t.onPick({kind:"hall",templateId:p}));o.push(()=>u.dispose());const h={host:e,hooks:t,pal:n,motion:s,engine:r,cache:a,runs:l,selection:c,labels:u,world:null,teardown:o};return this.wire(h),h}catch(l){for(const c of o.reverse())c();throw a.dispose(),r.dispose(),l}}wire(e){const{hooks:t,motion:n,engine:s,runs:r,selection:a}=e,o=window.matchMedia("(prefers-reduced-motion: reduce)");s.onQuality=m=>{var g;return(g=t.onQuality)==null?void 0:g.call(t,m)};let l=!1;s.onCamera=()=>{l=!0},s.onResize=()=>{this.keepHome(e),l=!0};let c=-1/0;const u=s.addUpdater((m,g)=>{var d,v;const _=!n.reduced&&g-c>=jx;_&&(c=g),l&&(l=!1,(d=e.world)==null||d.setCameraDistance(s.rig.state.dist),e.labels.update());let f=r.update(m,g);return a.update(g,_)&&(f=!0),_&&((v=e.world)!=null&&v.ambient)&&(e.world.animate(g),f=!0),f}),h=E_(s.canvas,{rig:s.rig,moved:()=>{this.userAt=performance.now(),this.autoHome=!1,s.cameraChanged()},click:(m,g)=>t.onPick(this.pickAt(m,g)),hover:(m,g)=>{s.canvas.style.cursor=this.pickAt(m,g)?"pointer":"grab"}}),p=m=>{n.reduced=m.matches};o.addEventListener("change",p),e.teardown.push(u,h,()=>o.removeEventListener("change",p))}setScene(e){this.scene=e;const t=this.runById;this.runById=new Map(e.runs.map(s=>[s.sessionId,s]));const n=this.m;n&&(n.world&&this.signature===Vl(e.halls)?this.updateInPlace(n,n.world,e,t):this.applyScene())}updateInPlace(e,t,n,s){var a;t.updateLive(n.halls),e.labels.update();const r=ix(s,n.runs);for(const o of r.removed)e.runs.move({sessionId:o,removed:!0});for(const o of[...r.added,...r.moved])e.runs.move(o);for(const o of r.recoloured)e.runs.recolour(o.sessionId,o.late);((a=this.selected)==null?void 0:a.kind)==="run"&&this.applySelection(!1),e.engine.requestRender()}applyScene(){var r;const e=this.m,t=this.scene;if(!e||!t)return;(r=e.world)==null||r.dispose(),this.signature=Vl(t.halls);const n=Wx(t,{cache:e.cache,pal:e.pal,hue:a=>ma(e.host,a),count:ev(),labels:e.labels,night:this.night});e.world=n,e.engine.scene.add(n.group);const s=new Map(t.halls.map(a=>[a.templateId,ma(e.host,a.color)??e.pal.info]));e.runs.attach(n,a=>s.get(a)??e.pal.info),e.runs.setRuns([...this.runById.values()]),e.engine.rig.setBounds(Math.max(n.plan.extent.w,n.plan.extent.d)/2+40),e.engine.invalidateShadows(),this.keepHome(e),n.setCameraDistance(e.engine.rig.state.dist),e.labels.update(),this.applySelection(!1)}keepHome(e){const{w:t,h:n}=e.engine.size;!this.autoHome||!e.world||t<nc||n<nc||e.engine.fly(Bl(e.world.plan.extent,t,n),0)}moveRun(e){var t,n;"removed"in e?this.runById.delete(e.sessionId):this.runById.set(e.sessionId,e),(t=this.m)==null||t.runs.move(e),(n=this.m)==null||n.engine.requestRender(),"removed"in e||this.followRun(e)}setFollow(e){this.follow=e,e&&(this.userAt=-1/0)}followRun(e){const t=this.m;if(!this.follow||!(t!=null&&t.world)||t.motion.reduced||t.engine.rig.flying)return;const n=performance.now();if(n-this.userAt<Kx||n-this.followedAt<Zx)return;const s=e.nodeIds[0],r=s===void 0?void 0:t.world.station(e.templateId,s);r&&(this.followedAt=n,this.autoHome=!1,t.engine.fly({x:r.wx,z:r.wz,dist:Math.min(t.engine.rig.state.dist,Jx),pitch:.6},ta*1.4))}zoom(e){const t=this.m;if(!t)return;this.autoHome=!1;const n=t.engine.rig.aim;t.engine.fly({...n,dist:n.dist*(e>0?ic:1/ic)},Yx)}rotate(e){const t=this.m;if(!t)return;this.autoHome=!1;const n=t.engine.rig.aim;t.engine.fly({...n,yaw:n.yaw-e*qx},$x)}select(e,t){this.selected=e,this.applySelection((t==null?void 0:t.fly)??!0)}applySelection(e){const t=this.m;if(!t)return;const n=this.selected&&t.world?this.targetOf(t,t.world,this.selected):null;if(!n){t.selection.hide(),t.engine.requestRender();return}t.selection.show(n.marker),e&&(this.autoHome=!1,t.engine.fly({x:n.x,z:n.z,dist:n.dist,pitch:sc(t.engine.rig.state.pitch,.55,.85)},ta)),t.engine.requestRender()}targetOf(e,t,n){if(n.kind==="hall"){const r=t.hall(n.templateId);return r?{marker:{kind:"frame",x:r.x,z:r.z,w:r.len+1.6,d:r.dep+1.6},x:r.x,z:r.z,dist:sc(r.len*1.05,34,80)}:null}if(n.kind==="station"){const r=t.station(n.templateId,n.nodeId);return r?{marker:{kind:"ring",x:r.wx,z:r.wz,radius:1.9},x:r.wx,z:r.wz,dist:24}:null}const s=e.runs.positionOf(n.sessionId);return s?{marker:{kind:"run",sessionId:n.sessionId},x:s.x,z:s.z,dist:20}:null}home(){const e=this.m;if(!(e!=null&&e.world))return;const{w:t,h:n}=e.engine.size;this.autoHome=!0,e.engine.fly(Bl(e.world.plan.extent,t,n),ta)}setNight(e){var n;this.night=e;const t=this.m;t&&(t.engine.setNight(e),(n=t.world)==null||n.setNight(e))}setActive(e){var t;this.active=e,(t=this.m)==null||t.engine.setActive(e)}pickAt(e,t){const n=this.m,s=n==null?void 0:n.world;if(!n||!s)return null;const r=n.engine.canvas.getBoundingClientRect();this.ndc.set((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1),this.ray.setFromCamera(this.ndc,n.engine.camera);const a=n.runs.pick(this.ray);if(a)return{kind:"run",sessionId:a};let o=null;for(const l of this.ray.intersectObjects(s.proxies,!1)){const c=s.pickOf(l.object);if((c==null?void 0:c.kind)==="station")return c;o??(o=c??null)}return o}dispose(){this.disposed=!0;const e=this.m;this.m=null,this.scene=null,this.runById.clear(),e&&this.release(e)}release(e){var t;for(const n of e.teardown.reverse())n();(t=e.world)==null||t.dispose(),e.cache.dispose(),e.engine.dispose()}}function nv(){return new tv}function iv({scene:i,pick:e,flyToPick:t,liveFrames:n,follow:s,night:r,onReady:a,onPick:o,onQuality:l,onUnavailable:c}){const u=Te.useRef(null),h=Te.useRef(null),[p,m]=Te.useState(!1),g=Te.useRef({onPick:o,onQuality:l,onUnavailable:c,onReady:a});return g.current={onPick:o,onQuality:l,onUnavailable:c,onReady:a},Te.useEffect(()=>{const _=u.current;if(!_)return;const f=nv();let d=!1;f.mount(_,{onPick:x=>g.current.onPick(x),onQuality:x=>{var A,b;return(b=(A=g.current).onQuality)==null?void 0:b.call(A,x)}}).then(()=>{d||(h.current=f,m(!0),g.current.onReady(f))}).catch(()=>{d||g.current.onUnavailable()});const v=()=>f.setActive(document.visibilityState!=="hidden");return document.addEventListener("visibilitychange",v),()=>{d=!0,document.removeEventListener("visibilitychange",v),h.current=null,g.current.onReady(null),f.dispose()}},[]),Te.useEffect(()=>{var _;p&&((_=h.current)==null||_.setScene(i))},[p,i]),Te.useEffect(()=>{var _;p&&((_=h.current)==null||_.select(e,{fly:t}))},[p,e,t]),Te.useEffect(()=>{var _;p&&((_=h.current)==null||_.setFollow(s&&n))},[p,s,n]),Te.useEffect(()=>{var _;p&&((_=h.current)==null||_.setNight(r))},[p,r]),ar({onRunState:_=>{const f=h.current;if(!f)return;if(Sa(_.status)){f.moveRun({sessionId:_.sessionId,removed:!0});return}const d=_.activeNodeIds.length>0?_.activeNodeIds:_.currentNodeId?[_.currentNodeId]:[];f.moveRun({sessionId:_.sessionId,templateId:_.templateId,nodeIds:d,status:_.status,late:!1})}},p&&n),T.jsx("div",{ref:u,"aria-hidden":!0,"data-testid":"floor-canvas",className:"relative h-full min-h-0 w-full overflow-hidden"})}const sn="rounded-lg bg-surface shadow-floating",sv={brand:"bg-brand-subtle text-brand",info:"bg-info-soft text-info-signal",danger:"bg-danger-soft text-danger-copy"};function na({icon:i,tone:e,label:t,value:n,sub:s,delta:r,upIsGood:a}){const{t:o}=At(),l=r>0===a;return T.jsxs("div",{className:Ce(sn,"flex w-floor-kpi items-center gap-3 px-3 py-3 max-md:w-auto max-md:px-3 max-md:py-2"),children:[T.jsx("span",{"aria-hidden":!0,className:Ce("grid size-tile-lg flex-none place-items-center rounded-md max-md:hidden",sv[e]),children:i}),T.jsxs("span",{className:"flex min-w-0 flex-col",children:[T.jsx("span",{className:"truncate text-ui text-ink-secondary",children:t}),T.jsxs("span",{className:"flex items-baseline gap-2",children:[T.jsx("span",{className:Ce("text-2xl font-bold font-tabular leading-tight",e==="danger"&&n>0?"text-danger-strong":"text-ink"),children:nt(n)}),r!==0?T.jsx(ts,{content:o("floor.kpi.deltaHint"),children:T.jsxs("span",{className:Ce("inline-flex items-center text-xs font-semibold font-tabular",l?"text-success-strong":"text-danger-copy"),children:[r>0?T.jsx(Xu,{size:14,"aria-hidden":!0}):T.jsx(ju,{size:14,"aria-hidden":!0}),T.jsx("span",{className:"sr-only",children:o(r>0?"floor.kpi.up":"floor.kpi.down")}),nt(Math.abs(r))]})}):null]}),T.jsx("span",{className:"truncate text-xs text-ink-tertiary max-md:hidden",children:s})]})]})}function rv({overview:i,atOpen:e,workspaceKey:t,assignees:n,clock:s}){const{t:r}=At();return T.jsxs("dl",{className:"m-0 flex flex-wrap gap-3 max-md:grid max-md:grid-cols-3 max-md:gap-2",children:[T.jsx(na,{icon:T.jsx(ac,{size:20}),tone:"brand",label:r("floor.fact.liveRuns"),value:i.liveRuns,delta:i.liveRuns-e.liveRuns,upIsGood:!0,sub:r("floor.kpi.liveSub",{workspace:t})}),T.jsx(na,{icon:T.jsx(zu,{size:20}),tone:"info",label:r("floor.fact.waiting"),value:i.waiting,delta:i.waiting-e.waiting,upIsGood:!1,sub:n!==null?r("floor.kpi.assignees",{count:n}):r("floor.kpi.waitingSub")}),T.jsx(na,{icon:T.jsx(ku,{size:20}),tone:"danger",label:r("floor.fact.overdue"),value:i.overdue,delta:i.overdue-e.overdue,upIsGood:!1,sub:s?r("floor.kpi.overdueClock",{clock:s}):r("floor.kpi.overdueSub")})]})}const Hs=Ce("inline-flex h-control-md items-center gap-2 rounded-md px-3 text-sm font-semibold text-ink-secondary hover:bg-hover hover:text-ink","aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-card disabled:cursor-not-allowed disabled:opacity-60",Ut);function av({follow:i,night:e,onFollow:t,onNight:n}){const{t:s}=At();return T.jsxs("div",{role:"toolbar","aria-label":s("floor.toolbar.label"),className:Ce(sn,"inline-flex flex-wrap items-center gap-1 p-1"),children:[T.jsxs("span",{className:"inline-flex gap-1 rounded-md bg-subtle p-1",children:[T.jsx(ts,{content:s("floor.toolbar.orgUnavailable"),side:"bottom",children:T.jsxs("button",{type:"button",className:Hs,"aria-pressed":!1,"aria-disabled":!0,children:[T.jsx(Gu,{size:16,"aria-hidden":!0}),s("floor.toolbar.byOrg")]})}),T.jsxs("button",{type:"button",className:Hs,"aria-pressed":!0,children:[T.jsx(oc,{size:16,"aria-hidden":!0}),s("floor.toolbar.byProcess")]})]}),T.jsx(ts,{content:s("floor.toolbar.followHint"),side:"bottom",children:T.jsxs("button",{type:"button",className:Ce(Hs,"max-md:hidden"),"aria-pressed":i,onClick:()=>t(!i),children:[T.jsx(Hu,{size:16,"aria-hidden":!0}),s("floor.toolbar.follow")]})}),T.jsx(ts,{content:s("floor.toolbar.night"),side:"bottom",children:T.jsx("button",{type:"button",className:Hs,"aria-pressed":e,"aria-label":s("floor.toolbar.night"),onClick:()=>n(!e),children:e?T.jsx(Vu,{size:16,"aria-hidden":!0}):T.jsx(Wu,{size:16,"aria-hidden":!0})})})]})}const ov=Ce("grid size-control-lg place-items-center rounded-md text-ink-secondary hover:bg-hover hover:text-ink",Ut);function lv({onZoom:i,onRotate:e,onHome:t}){const{t:n}=At(),s=[{key:"zoomIn",icon:T.jsx(qu,{size:20}),run:()=>i(1)},{key:"zoomOut",icon:T.jsx(Yu,{size:20}),run:()=>i(-1)},"sep",{key:"rotateLeft",icon:T.jsx($u,{size:20}),run:()=>e(-1)},{key:"rotateRight",icon:T.jsx(Ku,{size:20}),run:()=>e(1)},"sep",{key:"home",icon:T.jsx(Zu,{size:20}),run:t}];return T.jsx("div",{role:"toolbar","aria-orientation":"vertical","aria-label":n("floor.controls.label"),className:Ce(sn,"flex flex-col p-1 max-md:hidden"),children:s.map((r,a)=>r==="sep"?T.jsx("span",{"aria-hidden":!0,className:"mx-2 my-1 h-px bg-edge-subtle"},`sep-${a}`):T.jsx("button",{type:"button",className:ov,"aria-label":n(`floor.controls.${r.key}`),onClick:r.run,children:T.jsx("span",{"aria-hidden":!0,children:r.icon})},r.key))})}const Vs=120;function cv(i,e){return e==="failed"||/FAIL|BREACH|INCIDENT|ESCALAT/.test(i)}const uv=[1,4,16],ia=6,hv=Ce("inline-flex h-control-sm items-center gap-2 rounded-full px-3 text-xs font-semibold",Ut),dv=Ce("h-control-xs rounded-sm px-2 text-xs font-semibold text-ink-secondary hover:text-ink aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-card",Ut);function fv({timeline:i,trackedRun:e,onTrack:t}){return T.jsxs("div",{className:"flex w-floor-dock flex-col gap-3 max-md:w-auto",children:[T.jsx(pv,{timeline:i}),e?T.jsx(gv,{sessionId:e,onOpen:t}):null]})}function pv({timeline:i}){const{t:e,i18n:t}=At(),{frames:n,history:s,since:r,openedAt:a,now:o,cursor:l,playing:c,speed:u}=i,h=Math.max(1,o-r),p=Te.useMemo(()=>{const d=new Array(Vs).fill(0),v=new Array(Vs).fill(!1),x=(b,R)=>{const C=Math.min(Vs-1,Math.max(0,Math.floor((b-r)/h*Vs)));d[C]=(d[C]??0)+1,R&&(v[C]=!0)};for(const b of s)x(Date.parse(b.at),cv(b.eventType,b.toState));for(const{at:b,frame:R}of n)x(b,R.status==="failed");const A=Math.max(1,...d);return d.map((b,R)=>({h:b===0?0:.2+.8*b/A,bad:v[R]}))},[n,s,r,h]),m=(a-r)/h*100,g=l??o,_=(g-r)/h*100,f=l===null;return T.jsxs("div",{className:Ce(sn,"flex items-center gap-3 px-3 py-2 max-md:flex-wrap"),children:[T.jsxs("button",{type:"button",className:Ce(hv,f?"bg-success-soft text-success-strong":"bg-warning-soft text-warning-strong"),onClick:()=>i.seek(null),"aria-pressed":f,children:[T.jsx("span",{"aria-hidden":!0,className:Ce("size-2 rounded-full",f?"bg-success-signal":"bg-warning-signal")}),e(f?"floor.replay.live":"floor.replay.backToLive")]}),T.jsxs("div",{className:"relative h-control-sm min-w-0 flex-1 max-md:order-last max-md:basis-full",children:[m>0?T.jsx("span",{"aria-hidden":!0,className:"absolute inset-y-0 left-0 rounded-sm bg-muted",style:{width:`${Math.min(100,m)}%`}}):null,T.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 flex items-end gap-px",children:p.map((d,v)=>T.jsx("span",{className:Ce("flex-1 rounded-sm",d.bad?"bg-danger-signal":"bg-ink-faint"),style:{height:`${d.h*100}%`,opacity:d.h===0?0:.8}},v))}),T.jsx("span",{"aria-hidden":!0,className:"absolute inset-y-0 w-1 -translate-x-1/2 rounded-full bg-brand",style:{left:`${Math.min(100,Math.max(0,_))}%`}}),T.jsx("input",{type:"range","aria-label":e("floor.replay.scrub"),"aria-valuetext":is(g,t.language),min:r,max:o,step:1e3,value:g,onChange:d=>i.seek(Number(d.target.value)),className:Ce("absolute inset-0 h-full w-full cursor-ew-resize opacity-0",Ut)})]}),T.jsx("span",{className:"text-xs text-ink-secondary font-tabular",children:is(g,t.language)}),f?null:T.jsx("button",{type:"button",className:Ce("grid size-control-sm place-items-center rounded-md text-ink-secondary hover:bg-hover",Ut),"aria-label":e(c?"floor.replay.pause":"floor.replay.play"),onClick:()=>i.setPlaying(!c),children:c?T.jsx(Ju,{size:14,"aria-hidden":!0}):T.jsx(lc,{size:14,"aria-hidden":!0})}),T.jsx("span",{role:"group","aria-label":e("floor.replay.speed"),className:"inline-flex gap-1 rounded-md bg-subtle p-1",children:uv.map(d=>T.jsxs("button",{type:"button",className:dv,"aria-pressed":u===d,onClick:()=>i.setSpeed(d),children:[d,"×"]},d))})]})}const mv={completed:"success",failed:"danger",cancelled:"warning"};function gv({sessionId:i,onOpen:e}){var c,u;const{t,i18n:n}=At(),s=ss({queryKey:["floor-run",i],queryFn:()=>yu(i)});ar({onRunState:h=>{h.sessionId===i&&s.refetch()}});const r=s.data,a=Te.useMemo(()=>{if(!(r!=null&&r.graph)||!r.graphRuntime)return[];const h=cc(r.graph),p=new Map;for(const b of r.timeline)b.nodeId&&p.set(b.nodeId,b.timestamp);const m=r.graphRuntime.nodes.filter(b=>b.type!=="START").sort((b,R)=>{var C,W,S,w;return(((C=h.get(b.id))==null?void 0:C.column)??0)-(((W=h.get(R.id))==null?void 0:W.column)??0)||(((S=h.get(b.id))==null?void 0:S.lane)??0)-(((w=h.get(R.id))==null?void 0:w.lane)??0)}),g=r.session.currentNodeId,_=b=>b.state==="completed"?"done":b.id===g||b.state==="active"||b.state==="waiting"||b.state==="failed"?"now":b.state==="pending"?"next":null,f=m.filter(b=>_(b)==="done"||_(b)==="now"),d=m.filter(b=>{var R;return _(b)==="next"&&(((R=h.get(b.id))==null?void 0:R.lane)??0)===0}),v=[...f,...d],x=v.findIndex(b=>_(b)==="now"),A=x<0?Math.max(0,v.length-ia):Math.max(0,Math.min(x-2,v.length-ia));return v.slice(A,A+ia).map(b=>({...b,phase:_(b),at:p.get(b.id)??null}))},[r]);if(!r)return null;const o=r.session,l=((c=r.graphRuntime)==null?void 0:c.nodes.find(h=>h.id===o.currentNodeId))??((u=r.graphRuntime)==null?void 0:u.nodes.find(h=>h.state==="active"||h.state==="waiting"||h.state==="failed"));return T.jsxs("section",{"aria-label":t("floor.tracker.label"),className:Ce(sn,"flex flex-col gap-2 px-4 py-3"),children:[T.jsxs("header",{className:"flex items-center gap-3",children:[T.jsx("span",{"aria-hidden":!0,className:"grid size-tile-sm place-items-center rounded-sm bg-brand-subtle text-brand",children:T.jsx(ac,{size:14})}),T.jsx("h2",{className:"m-0 text-base font-bold text-ink",children:t("floor.tracker.title")}),T.jsxs("span",{className:"min-w-0 flex-1 truncate font-code text-xs text-ink-tertiary",children:[o.id.slice(0,8)," · ",o.templateDisplayName]})]}),T.jsxs("div",{className:"flex items-center gap-4 max-lg:flex-col max-lg:items-stretch",children:[T.jsx("ol",{className:"m-0 flex min-w-0 flex-1 list-none items-start p-0",children:a.map((h,p)=>T.jsxs("li",{className:"relative flex min-w-0 flex-1 flex-col items-center gap-1 text-center",children:[p>0?T.jsx("span",{"aria-hidden":!0,className:Ce("absolute top-4 right-1/2 h-1 w-full -translate-x-4 rounded-full",h.phase==="next"?"bg-subtle":"bg-brand")}):null,T.jsx("span",{"aria-hidden":!0,className:Ce("relative grid size-tile-md place-items-center rounded-full",h.phase==="done"&&"bg-brand text-on-brand",h.phase==="now"&&"bg-brand text-on-brand ring-4 ring-brand-subtle",h.phase==="next"&&"bg-subtle text-ink-tertiary"),children:h.phase==="done"?T.jsx(Qu,{size:14}):T.jsx("span",{className:"size-2 rounded-full bg-current"})}),T.jsx("span",{className:Ce("line-clamp-2 text-xs",h.phase==="next"?"text-ink-tertiary":"font-semibold text-ink"),children:h.title}),T.jsx("span",{className:"font-code text-xs text-ink-tertiary",children:h.at?is(h.at,n.language):h.phase==="next"?t("floor.tracker.expected"):""})]},h.id))}),T.jsxs("button",{type:"button",className:Ce("flex items-center gap-3 rounded-md bg-subtle p-3 text-left shadow-card hover:bg-hover",Ut),onClick:()=>e(o.id),children:[T.jsx("span",{"aria-hidden":!0,className:"grid size-tile-md place-items-center rounded-md bg-info-signal text-on-brand",children:T.jsx(eh,{size:16})}),T.jsxs("span",{className:"flex min-w-0 flex-col gap-1",children:[T.jsxs("span",{className:"font-code text-sm font-semibold text-ink",children:["#",o.id.slice(0,8)]}),T.jsx("span",{className:"truncate text-xs text-ink-secondary",children:(l==null?void 0:l.title)??t(`session.status.${o.sessionStatus}`)}),T.jsx(Su,{tone:mv[o.sessionStatus]??"info",children:t(`session.status.${o.sessionStatus}`)})]})]})]}),T.jsx(or,{className:Ce("text-sm font-semibold text-brand-ink",Ut),to:`/sessions/${o.id}`,children:t("floor.openRun")})]})}const rc=60,_v=Ce("inline-flex h-control-sm items-center gap-1 rounded-sm px-2 text-ui font-semibold text-ink-secondary hover:text-ink max-md:h-[var(--control-h-touch)]","aria-selected:bg-surface aria-selected:text-ink aria-selected:shadow-card",Ut),as=Ce("flex w-full min-h-control-lg items-center gap-3 rounded-md px-2 text-left text-sm text-ink no-underline hover:bg-muted",Ut);function Ti(i){return i==="completed"?{icon:ih,cls:"bg-success-soft text-success-strong"}:i==="failed"?{icon:sh,cls:"bg-danger-soft text-danger-strong"}:i==="cancelled"?{icon:rh,cls:"bg-warning-soft text-warning-strong"}:i.startsWith("waiting")?{icon:ah,cls:"bg-info-soft text-info-strong"}:{icon:lc,cls:"bg-brand-subtle text-brand"}}function xv(i){return i.toState?Ti(i.toState):/FAIL|BREACH|INCIDENT/.test(i.eventType)?Ti("failed"):/COMPLETED|APPROVED|DONE/.test(i.eventType)?Ti("completed"):/WAIT|TASK_CREATED|ASSIGNED/.test(i.eventType)?Ti("waiting"):Ti("running")}function vv({scene:i,frames:e,history:t,names:n,people:s,workspaceKey:r,onSelect:a}){const{t:o,i18n:l}=At(),[c,u]=Te.useState("events"),h=new Map(i.halls.map(f=>[f.templateId,f])),p=f=>{var d;return((d=h.get(f))==null?void 0:d.displayName)??n.get(f)},m=(f,d)=>{var v,x;return d?(x=(v=h.get(f))==null?void 0:v.stations.find(A=>A.nodeId===d))==null?void 0:x.title:void 0},g=[{key:"events",label:o("floor.feed.events"),n:e.length+t.length,icon:th},{key:"people",label:o("floor.feed.people"),n:(s==null?void 0:s.length)??null,icon:nh},{key:"workflows",label:o("floor.feed.workflows"),n:h.size||n.size,icon:oc}],_=g.find(f=>f.key===c).icon;return T.jsxs("section",{"aria-label":o("floor.feed.label"),className:Ce(sn,"flex h-floor-feed w-full flex-col overflow-hidden max-md:h-auto max-md:w-auto"),children:[T.jsxs("div",{className:"flex items-center gap-2 px-3 pt-3 pb-2",children:[T.jsx("span",{"aria-hidden":!0,className:"grid size-tile-sm flex-none place-items-center rounded-sm bg-info-soft text-info-signal",children:T.jsx(_,{size:14})}),T.jsx("div",{role:"tablist","aria-label":o("floor.feed.label"),className:"inline-flex gap-1 rounded-md bg-muted p-1",children:g.map(f=>T.jsxs("button",{type:"button",role:"tab","aria-selected":c===f.key,className:_v,onClick:()=>u(f.key),children:[f.label,f.n!==null?T.jsx("span",{className:"font-tabular text-xs font-medium text-ink-tertiary",children:nt(f.n)}):null]},f.key))}),T.jsx("span",{className:"ml-auto truncate text-xs text-ink-tertiary",children:r})]}),T.jsx("div",{role:"tabpanel",className:"min-h-0 flex-1 overflow-y-auto px-2 pb-2",children:c==="events"?e.length+t.length===0?T.jsx("p",{className:"m-0 px-2 py-3 text-xs text-ink-tertiary",children:o("floor.feed.quiet")}):T.jsxs("ul",{className:"m-0 flex list-none flex-col p-0",children:[e.slice(-rc).reverse().map(({at:f,frame:d})=>{const v=m(d.templateId,d.activeNodeIds[0]??d.currentNodeId),{icon:x,cls:A}=Ti(d.status);return T.jsx("li",{children:T.jsxs("button",{type:"button",className:as,onClick:()=>a({kind:"run",sessionId:d.sessionId}),children:[T.jsx("span",{"aria-hidden":!0,className:Ce("grid size-tile-sm flex-none place-items-center rounded-sm",A),children:T.jsx(x,{size:14})}),T.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[T.jsx("span",{className:"truncate font-semibold",children:Sa(d.status)?o("floor.feed.runEnded",{id:d.sessionId.slice(0,8),status:o(`session.status.${d.status}`)}):[o(`session.status.${d.status}`),v].filter(Boolean).join(" · ")}),T.jsx("span",{className:"truncate text-xs text-ink-tertiary",children:[p(d.templateId),d.eventType?Va(d.eventType,l.language):null,`#${d.sessionId.slice(0,8)}`].filter(Boolean).join(" · ")})]}),T.jsx("time",{className:"text-xs text-ink-tertiary font-tabular",children:is(f,l.language)})]})},`${d.sessionId}-${f}`)}),t.slice(0,Math.max(0,rc-e.length)).map((f,d)=>{const{icon:v,cls:x}=xv(f),A=m(f.templateId,f.nodeId);return T.jsx("li",{children:T.jsxs("button",{type:"button",className:as,onClick:()=>a({kind:"run",sessionId:f.sessionId}),children:[T.jsx("span",{"aria-hidden":!0,className:Ce("grid size-tile-sm flex-none place-items-center rounded-sm",x),children:T.jsx(v,{size:14})}),T.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[T.jsx("span",{className:"truncate font-semibold",children:[Va(f.eventType,l.language),A].filter(Boolean).join(" · ")}),T.jsx("span",{className:"truncate text-xs text-ink-tertiary",children:[p(f.templateId),`#${f.sessionId.slice(0,8)}`].filter(Boolean).join(" · ")})]}),T.jsx("time",{className:"text-xs text-ink-tertiary font-tabular",children:is(f.at,l.language)})]})},`${f.sessionId}-${f.at}-${d}`)})]}):c==="people"?T.jsx(Mv,{people:s}):T.jsx(Sv,{scene:i,onSelect:a})})]})}function Mv({people:i}){const{t:e}=At();if(i===null)return T.jsx("p",{className:"m-0 px-2 py-3 text-xs text-ink-tertiary",children:e("floor.feed.peopleUnavailable")});if(i.length===0)return T.jsx("p",{className:"m-0 px-2 py-3 text-xs text-ink-tertiary",children:e("floor.feed.peopleNone")});const t=Math.max(1,...i.map(n=>n.open));return T.jsx("ul",{className:"m-0 flex list-none flex-col p-0","aria-label":e("floor.feed.people"),children:i.map(n=>T.jsx("li",{children:T.jsxs(or,{className:as,to:`/team-ops?assignee=${encodeURIComponent(n.id)}`,children:[T.jsx("span",{"aria-hidden":!0,className:"grid size-tile-sm flex-none place-items-center rounded-full text-xs font-bold",style:bu(n.id),children:Eu(n.name.replace(/[-_.]/g," "))}),T.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[T.jsx("span",{className:"truncate font-semibold",children:n.name}),T.jsx("span",{className:"truncate font-code text-xs text-ink-tertiary",children:n.id})]}),T.jsx(ts,{content:e("floor.feed.overdueOf",{count:n.overdue}),children:T.jsx("span",{className:Ce("inline-flex h-chip-sm min-w-6 items-center justify-center rounded-sm px-1 text-xs font-semibold font-tabular",n.overdue>0?"bg-danger-soft text-danger-strong":"bg-success-soft text-success-strong"),children:nt(n.overdue)})}),T.jsxs("span",{className:"flex w-tile-xl flex-none flex-col items-end gap-1",children:[T.jsx("span",{"aria-hidden":!0,className:"block h-1 w-full rounded-full bg-muted",children:T.jsx("span",{className:Ce("block h-1 rounded-full",n.overdue>0?"bg-danger-signal":"bg-brand"),style:{width:`${n.open/t*100}%`}})}),T.jsx("span",{className:"text-xs text-ink-tertiary font-tabular",children:nt(n.open)})]}),T.jsx(oh,{size:14,"aria-hidden":!0,className:"flex-none text-ink-faint"})]})},n.id))})}function Sv({scene:i,onSelect:e}){const{t}=At();return T.jsx("nav",{"aria-label":t("floor.listLabel"),className:"flex flex-col gap-2",children:[...i.halls].sort((n,s)=>s.liveRuns-n.liveRuns||s.overdue-n.overdue).map(n=>T.jsxs("div",{className:"flex flex-col",children:[T.jsxs("button",{type:"button",className:as,onClick:()=>e({kind:"hall",templateId:n.templateId}),children:[T.jsx("span",{"aria-hidden":!0,className:"size-2 flex-none rounded-full",style:{background:n.color}}),T.jsx("span",{className:"min-w-0 flex-1 truncate font-semibold",children:n.displayName}),T.jsx("span",{className:"text-xs text-ink-secondary font-tabular",children:t("floor.liveRuns",{count:n.liveRuns})}),n.overdue>0?T.jsx("span",{className:"text-xs text-danger-strong font-tabular",children:t("floor.overdue",{count:n.overdue})}):null]}),T.jsx("ul",{className:"m-0 flex list-none flex-col p-0 pl-5",children:n.stations.filter(s=>s.waiting>0||s.activeRuns>0).map(s=>T.jsx("li",{children:T.jsxs("button",{type:"button",className:as,onClick:()=>e({kind:"station",templateId:n.templateId,nodeId:s.nodeId}),children:[T.jsx("span",{className:"min-w-0 flex-1 truncate text-ink-secondary",children:s.title}),T.jsx("span",{className:"font-tabular",children:t("floor.waiting",{count:s.waiting})}),s.breached>0?T.jsx("span",{className:"font-tabular text-danger-strong",children:nt(s.breached)}):null]})},s.nodeId))})]},n.templateId))})}const cu=Ce("text-sm font-semibold text-brand-ink",Ut),uu=Ce("flex w-full min-h-control-lg items-center gap-3 rounded-md px-2 text-left text-sm text-ink hover:bg-hover",Ut),yv=10,Ev={under1d:"bg-success-signal",from1to3d:"bg-info-signal",from3to7d:"bg-warning-signal",over7d:"bg-danger-signal"};function bv({scene:i,campus:e,templates:t,overview:n,workspaceKey:s,pick:r,onSelect:a,sceneReady:o,eventsSinceOpen:l,ai:c}){var f,d;const{t:u,i18n:h}=At(),p=Te.useRef(null);Te.useEffect(()=>{var v;r&&((v=p.current)==null||v.focus())},[r]);const m=(r==null?void 0:r.kind)==="run"?(f=i.runs.find(v=>v.sessionId===r.sessionId))==null?void 0:f.templateId:r==null?void 0:r.templateId,g=i.halls.find(v=>v.templateId===m),_=t.find(v=>v.templateId===m);return T.jsxs("aside",{"aria-label":u(r?"floor.detailLabel":"floor.overviewLabel"),className:Ce(sn,"flex min-h-0 flex-col overflow-y-auto"),children:[T.jsxs("header",{className:"sticky top-0 flex items-start gap-3 border-b border-edge-subtle bg-surface px-4 pt-4 pb-3",children:[T.jsx("span",{"aria-hidden":!0,className:"grid size-tile-lg flex-none place-items-center rounded-md bg-brand text-on-brand",children:T.jsx(lh,{size:20})}),T.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[T.jsx("span",{className:"text-xs font-semibold text-brand-ink",children:r?Tv(r,u):u("floor.inspector.kicker",{count:i.halls.length})}),T.jsx("h2",{ref:p,tabIndex:-1,className:Ce("m-0 text-lg font-bold text-ink",Ut),children:r?Av(r,g,u):u("floor.inspector.title",{workspace:s})}),T.jsx("span",{className:"text-xs text-ink-tertiary",children:u("floor.inspector.sub")})]}),r?T.jsx("button",{type:"button",className:Ce("grid size-control-md place-items-center rounded-md text-ink-secondary hover:bg-hover",Ut),"aria-label":u("floor.backToAll"),onClick:()=>a(null),children:T.jsx(ch,{size:16,"aria-hidden":!0})}):null]}),T.jsxs("div",{className:"flex flex-col gap-4 px-4 pt-3 pb-4",children:[r?null:T.jsx(wv,{scene:i,overview:n,onSelect:a,sceneReady:o,eventsSinceOpen:l,ai:c}),(r==null?void 0:r.kind)==="hall"&&g?T.jsx(Rv,{hall:g,campus:e,template:_,scene:i}):null,(r==null?void 0:r.kind)==="station"&&g?T.jsx(Cv,{hall:g,nodeId:r.nodeId,scene:i,oldest:((d=_==null?void 0:_.nodes.find(v=>v.nodeId===r.nodeId))==null?void 0:d.oldestWaitingSince)??null,locale:h.language,onOpenRun:v=>a({kind:"run",sessionId:v})}):null,(r==null?void 0:r.kind)==="run"?T.jsx(Lv,{hall:g,scene:i,sessionId:r.sessionId}):null]})]})}function Tv(i,e){return e(`floor.inspector.kind.${i.kind}`)}function Av(i,e,t){var n;return i.kind==="station"?((n=e==null?void 0:e.stations.find(s=>s.nodeId===i.nodeId))==null?void 0:n.title)??i.nodeId:i.kind==="run"?`#${i.sessionId.slice(0,8)}`:(e==null?void 0:e.displayName)??t("floor.runTitle")}function Ws({label:i,value:e,sub:t,bad:n}){return T.jsxs("div",{className:"flex min-w-0 flex-col rounded-md bg-subtle px-3 py-2 shadow-card",children:[T.jsx("dt",{className:"text-xs text-ink-secondary",children:i}),T.jsx("dd",{className:Ce("m-0 truncate text-lg font-bold font-tabular",n?"text-danger-strong":"text-ink"),children:e}),t?T.jsx("span",{className:"text-xs text-ink-tertiary",children:t}):null]})}function wv({scene:i,overview:e,onSelect:t,sceneReady:n,eventsSinceOpen:s,ai:r}){const{t:a,i18n:o}=At(),l=Math.max(1,...qa.map(u=>e.aging[u])),c=r&&r.decided>0?new Intl.NumberFormat(o.language,{style:"percent",maximumFractionDigits:0}).format(r.accepted/r.decided):"—";return T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[T.jsxs("span",{className:"inline-flex h-chip-sm items-center gap-1 rounded-sm bg-success-soft px-2 text-xs font-semibold text-success-strong",children:[T.jsx("span",{"aria-hidden":!0,className:"size-2 rounded-full bg-success-signal"}),a("floor.inspector.running")]}),T.jsx("span",{className:"text-xs text-ink-tertiary",children:a("floor.inspector.eventsSinceOpen",{count:s,n:nt(s)})})]}),T.jsxs("dl",{className:"m-0 grid grid-cols-2 gap-2",children:[T.jsx(Ws,{label:a("floor.fact.liveRuns"),value:nt(e.liveRuns)}),T.jsx(Ws,{label:a("floor.fact.waitingRuns"),value:nt(e.waiting),sub:a("floor.inspector.byAge")}),T.jsx(Ws,{label:a("floor.inspector.completed30"),value:nt(e.completedInWindow)}),T.jsx(Ws,{label:a("floor.inspector.aiAccepted"),value:c,sub:r?a("floor.inspector.aiDecisions",{accepted:r.accepted,decided:r.decided}):void 0})]}),T.jsxs("section",{className:"flex flex-col gap-2",children:[T.jsx("h3",{className:"m-0 text-xs font-semibold text-ink-tertiary",children:a("floor.inspector.aging")}),qa.map(u=>T.jsxs("div",{className:"flex items-center gap-2 text-xs text-ink-secondary",children:[T.jsx("span",{className:"w-desc-label flex-none",children:a(`floor.aging.${u}`)}),T.jsx("span",{"aria-hidden":!0,className:"h-1 min-w-0 flex-1 rounded-full bg-subtle",children:T.jsx("span",{className:Ce("block h-1 rounded-full",Ev[u]),style:{width:`${e.aging[u]/l*100}%`}})}),T.jsx("span",{className:"w-tile-xl flex-none text-right font-semibold font-tabular text-ink",children:nt(e.aging[u])})]},u))]}),T.jsxs("section",{className:"flex flex-col gap-1",children:[T.jsx("h3",{className:"m-0 text-xs font-semibold text-ink-tertiary",children:a("floor.inspector.bottlenecks")}),n?null:T.jsx(Xs,{count:3,variant:"row"}),Th(i).map(u=>T.jsxs("button",{type:"button",className:uu,onClick:()=>t({kind:"station",templateId:u.templateId,nodeId:u.nodeId}),children:[T.jsx("span",{"aria-hidden":!0,className:Ce("size-2 flex-none rounded-full",u.breached>0?"bg-danger-signal":"bg-warning-signal")}),T.jsxs("span",{className:"flex min-w-0 flex-1 flex-col",children:[T.jsx("span",{className:"truncate font-semibold",children:u.title}),T.jsx("span",{className:"truncate text-xs text-ink-tertiary",children:u.hallName})]}),T.jsx("span",{className:"text-xs text-ink-tertiary font-tabular",children:a("floor.inspector.bottleneckMeta",{waiting:nt(u.waiting),share:Math.round(u.share*100)})})]},`${u.templateId}/${u.nodeId}`))]}),T.jsxs("p",{className:"m-0 flex items-start gap-2 text-xs text-ink-tertiary",children:[T.jsx(uh,{size:14,"aria-hidden":!0,className:"flex-none"}),a("floor.inspector.hint")]})]})}function zt({label:i,value:e,tone:t}){return T.jsxs("div",{className:"flex items-baseline justify-between gap-4 border-b border-edge-subtle py-2 text-sm",children:[T.jsx("dt",{className:"text-ink-secondary",children:i}),T.jsx("dd",{className:Ce("m-0 font-semibold font-tabular",t==="danger"&&"text-danger-strong"),children:e})]})}function Rv({hall:i,campus:e,template:t,scene:n}){const{t:s}=At(),r=e==null?void 0:e.templates.find(o=>o.templateId===i.templateId),a=n.runs.filter(o=>o.templateId===i.templateId).length;return T.jsxs(T.Fragment,{children:[T.jsxs("dl",{className:"m-0",children:[T.jsx(zt,{label:s("floor.fact.liveRuns"),value:nt(i.liveRuns)}),T.jsx(zt,{label:s("floor.fact.drawn"),value:s("floor.drawnOf",{drawn:nt(a),total:nt(i.liveRuns)})}),T.jsx(zt,{label:s("floor.fact.olderVersions"),value:nt((t==null?void 0:t.olderVersions.activeRuns)??0)}),T.jsx(zt,{label:s("floor.fact.overdue"),value:nt(i.overdue),tone:i.overdue>0?"danger":void 0}),T.jsx(zt,{label:s("floor.fact.slaBreach"),value:nt((r==null?void 0:r.slaBreach)??0)}),T.jsx(zt,{label:s("floor.fact.incidents"),value:nt((r==null?void 0:r.openIncidents)??0)}),T.jsx(zt,{label:s("floor.fact.cycleP50"),value:ka((r==null?void 0:r.cycle.p50Ms)??null)}),T.jsx(zt,{label:s("floor.fact.cycleP90"),value:ka((r==null?void 0:r.cycle.p90Ms)??null)})]}),T.jsx(or,{className:cu,to:`/catalog/${i.templateId}/graph`,children:s("floor.openGraph")})]})}function Cv({hall:i,nodeId:e,scene:t,oldest:n,locale:s,onOpenRun:r}){const{t:a}=At(),o=i.stations.find(c=>c.nodeId===e);if(!o)return null;const l=t.runs.filter(c=>c.templateId===i.templateId&&c.nodeIds.includes(e));return T.jsxs(T.Fragment,{children:[T.jsx("p",{className:"m-0 text-xs text-ink-tertiary",children:i.displayName}),T.jsxs("dl",{className:"m-0",children:[T.jsx(zt,{label:a("floor.fact.activeRuns"),value:nt(o.activeRuns)}),T.jsx(zt,{label:a("floor.fact.waiting"),value:nt(o.waiting)}),T.jsx(zt,{label:a("floor.fact.breached"),value:nt(o.breached),tone:o.breached>0?"danger":void 0}),T.jsx(zt,{label:a("floor.fact.incidents"),value:nt(o.openIncidents)}),T.jsx(zt,{label:a("floor.fact.oldest"),value:n?Tu(n,s):a("floor.none")})]}),l.length>0?T.jsxs("section",{className:"flex flex-col gap-1",children:[T.jsx("h3",{className:"m-0 text-sm font-semibold text-ink",children:a("floor.runsHere",{count:l.length})}),T.jsx("ul",{className:"m-0 flex list-none flex-col p-0",children:l.slice(0,yv).map(c=>T.jsx("li",{children:T.jsxs("button",{type:"button",className:Ce(uu,"font-code text-xs"),onClick:()=>r(c.sessionId),children:["#",c.sessionId.slice(0,8)]})},c.sessionId))})]}):null]})}function Lv({hall:i,scene:e,sessionId:t}){const{t:n}=At(),s=e.runs.find(a=>a.sessionId===t),r=s&&i?s.nodeIds.map(a=>{var o;return((o=i.stations.find(l=>l.nodeId===a))==null?void 0:o.title)??a}).join(", "):"";return T.jsxs(T.Fragment,{children:[i?T.jsx("p",{className:"m-0 text-sm font-semibold text-ink",children:i.displayName}):null,r?T.jsx("p",{className:"m-0 text-sm text-ink-secondary",children:n("floor.runAt",{where:r})}):null,T.jsx(or,{className:cu,to:`/sessions/${t}`,children:n("floor.openRun")})]})}function Pv(){return T.jsxs("div",{className:"relative min-h-0 flex-1 overflow-hidden bg-canvas","data-testid":"floor-skeleton",children:[T.jsx(va,{loading:!0,failed:!1}),T.jsx("div",{className:"absolute top-4 left-4 flex flex-col gap-3 max-md:static max-md:m-3",children:T.jsx("div",{className:"flex gap-3",children:[0,1,2].map(i=>T.jsx("div",{className:Ce(sn,"w-floor-kpi p-3"),children:T.jsx(Xs,{count:1,variant:"row"})},i))})}),T.jsx("div",{className:Ce(sn,"absolute top-4 right-4 w-floor-feed p-4 max-md:hidden"),children:T.jsx(Xs,{count:4,variant:"card"})}),T.jsx("div",{className:Ce(sn,"absolute bottom-4 left-4 w-floor-dock p-4 max-md:hidden"),children:T.jsx(Xs,{count:2,variant:"row"})})]})}function va({loading:i,failed:e,onRetry:t}){const{t:n}=At();return T.jsx("div",{className:"absolute inset-0 grid place-items-center bg-canvas","data-testid":"floor-veil",children:T.jsxs("div",{className:Ce(sn,"flex max-w-sm flex-col items-center gap-2 px-6 py-4 text-center"),role:"status",children:[T.jsx("b",{className:"text-base font-semibold text-ink",children:n(e?"floor.veil.failedTitle":"floor.veil.title")}),T.jsx("span",{className:"text-ui text-ink-secondary",children:e?n("floor.veil.failedBody"):i?n("floor.veil.body"):""}),e&&t?T.jsx(Au,{variant:"secondary",size:"sm",onClick:t,children:n("common.retry")}):null]})})}const Iv={halls:[],runs:[]};function $v(){var F,st;const{t:i}=At(),e=hh(),t=Ma(),{campus:n,templates:s,scene:r,loading:a,sceneLoading:o,error:l,sceneError:c,stale:u,refetch:h}=Sh(),p=Eh(),m=yh(t),{resolved:g}=wu(),{hasAnyPermission:_}=Ru(),f=_([Ga.BUILDER_VIEW,Ga.BUILDER_EDIT]),[d,v]=Te.useState(null),[x,A]=Te.useState(!1),[b,R]=Te.useState(!0),[C,W]=Te.useState(!0),[S,w]=Te.useState(null),O=S??g==="dark",q=Te.useRef(null),[ne,P]=Te.useState(!1),[U,X]=Te.useState(null),Z=Te.useRef(null);r&&Z.current===null&&(Z.current=r.runs);const Y=Te.useMemo(()=>bh((n==null?void 0:n.templates)??[]),[n]),I=Te.useRef(null);n&&I.current===null&&(I.current=Y);const V=Te.useMemo(()=>new Map(((n==null?void 0:n.templates)??[]).map(oe=>[oe.templateId,oe.displayName])),[n]),j=Te.useMemo(()=>r?Ch(r,n,i):null,[r,n,i]),{cursor:J,runsAt:k}=p,$=Te.useMemo(()=>j?J===null?j:{...j,runs:k(Z.current??j.runs)}:null,[j,J,k]),se=Te.useCallback((oe,ye)=>{A(ye),v(oe)},[]),fe=((F=p.frames.at(-1))==null?void 0:F.frame.sessionId)??null,ue=Te.useMemo(()=>r?Rh(r):null,[r]),_e=(d==null?void 0:d.kind)==="run"?d.sessionId:fe??ue;if(l)return T.jsx(Cu,{title:i("floor.errorTitle"),cause:i("floor.errorCause"),onRetry:h,fill:!0});if(a||!n)return T.jsx(Pv,{});if(n.templates.filter(oe=>oe.publishedVersionId).length===0){const oe=n.templates.reduce((ye,xe)=>ye+xe.liveRuns,0);return T.jsx(Lu,{title:i("floor.emptyTitle"),body:oe>0?i("floor.emptyBodyUnpublished",{count:oe}):i("floor.emptyBody"),actionLabel:i(f?"floor.emptyAction":"floor.emptyActionRuns"),onAction:()=>e(f?"/builder":"/sessions"),fill:!0})}const Se=$??Iv,Oe="pointer-events-none absolute z-10 max-md:pointer-events-auto max-md:static max-md:mx-3";return T.jsxs("div",{className:"relative min-h-0 flex-1 overflow-hidden bg-canvas max-md:flex max-md:flex-col max-md:gap-3 max-md:overflow-y-auto max-md:pb-4",children:[T.jsx("h1",{className:"sr-only",children:i("floor.title")}),T.jsxs("div",{className:"absolute inset-0 max-md:relative max-md:h-floor-stage max-md:flex-none","data-testid":"floor-stage","data-fps":(U==null?void 0:U.fps)??"","data-scale":(U==null?void 0:U.scale)??"",children:[$?b?T.jsx(iv,{scene:$,pick:d,flyToPick:x,liveFrames:J===null,follow:C,night:O,onReady:oe=>{q.current=oe,P(!!oe)},onPick:oe=>se(oe,!1),onQuality:X,onUnavailable:()=>R(!1)}):T.jsx("p",{role:"status",className:"m-0 grid h-full place-items-center p-6 text-center text-sm text-ink-secondary",children:i("floor.noWebgl")}):T.jsx(va,{failed:!!c,loading:o,onRetry:h}),$&&b&&!ne?T.jsx(va,{loading:!0,failed:!1}):null]}),T.jsx("div",{className:Ce(Oe,"top-4 left-4 flex flex-col items-start gap-3 max-md:order-first max-md:mt-3"),children:T.jsxs("div",{className:"pointer-events-auto flex flex-col items-start gap-3",children:[T.jsx(rv,{overview:Y,atOpen:I.current??Y,workspaceKey:t,assignees:((st=m.people)==null?void 0:st.length)??null,clock:m.clock}),T.jsx(av,{follow:C,night:O,onFollow:W,onNight:w}),u?T.jsx("p",{role:"status",className:"m-0 rounded-md bg-warning-soft px-3 py-1 text-xs text-warning-strong",children:i("floor.stale")}):null]})}),T.jsxs("div",{className:Ce(Oe,"top-4 right-4 bottom-4 flex items-start gap-3 max-md:flex-col max-md:items-stretch"),children:[T.jsx("div",{className:"pointer-events-auto",children:T.jsx(lv,{onZoom:oe=>{var ye;return(ye=q.current)==null?void 0:ye.zoom(oe)},onRotate:oe=>{var ye;return(ye=q.current)==null?void 0:ye.rotate(oe)},onHome:()=>{var oe;return(oe=q.current)==null?void 0:oe.home()}})}),T.jsxs("div",{className:"flex h-full w-floor-feed flex-col gap-3 max-md:h-auto max-md:w-auto",children:[T.jsx("div",{className:"pointer-events-auto flex min-h-0 flex-1 flex-col",children:T.jsx(bv,{scene:Se,sceneReady:!!$,eventsSinceOpen:p.frames.length,ai:m.ai,campus:n,templates:s,overview:Y,workspaceKey:t,pick:d,onSelect:oe=>se(oe,!0)})}),T.jsx("div",{className:"pointer-events-auto flex-none",children:T.jsx(vv,{scene:Se,frames:p.frames,history:p.history,names:V,people:m.people,workspaceKey:t,onSelect:oe=>se(oe,!0)})})]})]}),T.jsx("div",{className:Ce(Oe,"bottom-4 left-4"),children:T.jsx("div",{className:"pointer-events-auto",children:T.jsx(fv,{timeline:p,trackedRun:_e,onTrack:oe=>se({kind:"run",sessionId:oe},!0)})})})]})}export{$v as FloorPage};
