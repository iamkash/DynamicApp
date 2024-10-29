"use strict";(self.webpackChunkdynamicapp=self.webpackChunkdynamicapp||[]).push([[73],{91073:(e,l,a)=>{a.r(l),a.d(l,{default:()=>t});a(65043);var n=a(2792),r=a(70579);const t=e=>{let{gadget:l}=e;return(0,r.jsx)("form",{className:"space-y-4",children:l.fields.map(((e,l)=>{const a=(0,n.I)(e.type);return a?(0,r.jsxs)("div",{children:[(0,r.jsx)(a,{...e}),"  "]},l):null}))})}},2792:(e,l,a)=>{a.d(l,{I:()=>G});var n=a(10087),r=a(70579);const t=e=>{let{label:l,name:a,required:t,checked:s,onChange:i,width:c}=e;return(0,r.jsx)("div",{className:`flex items-center ${c||"w-full"} p-2`,children:(0,r.jsx)(n.q,{checked:s,label:l,onChange:e=>i(e,a),required:t})})};var s=a(38579);const i=e=>{let{label:l,color:a,onClick:n}=e;return(0,r.jsx)(s.v,{text:l,style:{backgroundColor:a||"gray"},onClick:n})};var c=a(65043),d=a(55642),u=a(1676);d.D.register();const o=e=>{let{label:l,name:a,options:n=[],value:t,onChange:s=()=>{},required:i,width:d,placeholder:o="",singleSelect:h=!0}=e;return(0,c.useEffect)((()=>{console.log("Data loaded:",n)}),[n]),(0,r.jsx)("div",{className:`flex flex-col ${d||"w-full"}`,children:(0,r.jsx)(u.r,{data:n,displayKey:"label",valueKey:"value",selectedItems:[t],onSelectionChanging:e=>{var l;const n=(null===(l=e.newSelection[0])||void 0===l?void 0:l.value)||null;s(n,a)},placeholder:o,label:l,required:i,singleSelect:h})})};var h=a(26477);const x=e=>{let{label:l,name:a,required:n,options:t,value:s,onChange:i,width:c}=e;return(0,r.jsxs)("div",{className:`flex flex-col ${c||"w-full"} p-2`,children:[(0,r.jsx)("label",{className:"text-sm text-gray-600 mb-1",children:l}),(0,r.jsx)(h.I,{value:s,onSelectionChanged:e=>i(e,a),dataSource:t,required:n}),n&&!s&&(0,r.jsx)("span",{className:"text-red-500 mt-1",children:"Required"})]})},m=e=>{let{element:l}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:l.id,className:"block mb-2 text-sm font-medium",children:l.label}),(0,r.jsx)("input",{type:l.inputType||"text",id:l.id,name:l.name,class:"peer w-full border-b border-gray-400 bg-inherit text-gray-800 placeholder-transparent focus:border-blue-500 focus:outline-none"})]})};var v=a(12316);const g=e=>{let{label:l,name:a,mask:n,required:t,value:s,onChange:i,width:c}=e;return(0,r.jsx)("div",{className:`flex flex-col ${c||"w-full"}`,children:(0,r.jsx)(v.X,{mask:n,value:s,onValueChanged:e=>i(e,a),required:t,label:l})})};var p=a(77994);const f=e=>{let{label:l,name:a,required:n,value:t,onChange:s=()=>{},width:i}=e;return(0,r.jsx)("div",{className:`flex flex-col ${i||"w-full"} `,children:(0,r.jsx)(p.U,{value:t,onValueChanged:e=>s(e,a),required:n,label:l})})};var b=a(88818),j=a(64208),w=a(82658),C=a(60823);b._.register(),j.l.register();const y=e=>{let{name:l,options:a=[],selectedValue:n,alignment:t="horizontal",onChange:s}=e;return(0,r.jsx)(w.T,{alignment:t,children:a.map(((e,a)=>(0,r.jsx)(C.c,{name:l,value:e.value,checked:n===e.value,onChange:e=>s(e.target.value),children:(0,r.jsx)("span",{children:e.label})},a)))})};var k=a(61502);const q=e=>{let{label:l,name:a,value:n,max:t,onChange:s,width:i}=e;return(0,r.jsxs)("div",{className:`flex flex-col ${i||"w-full"} p-2`,children:[(0,r.jsx)("label",{className:"text-sm text-gray-600 mb-1",children:l}),(0,r.jsx)(k.G,{value:n,max:t||5,onValueChanged:e=>s(e,a)})]})};var N=a(94420);const I=e=>{let{label:l,name:a,checked:n,onChange:t,width:s}=e;return(0,r.jsxs)("div",{className:`flex items-center ${s||"w-full"} p-2`,children:[(0,r.jsx)("label",{className:"text-sm text-gray-600 mr-4",children:l}),(0,r.jsx)(N.f,{checked:n,onCheckedChanged:e=>t(e,a)})]})};var $=a(97319),L=a(10403);$.V.register();const S=e=>{let{label:l,name:a,required:n=!1,minLength:t=0,maxLength:s=1/0,value:i="",onChange:c=()=>{},width:d,rows:u="3"}=e;return(0,r.jsx)(L.J,{name:a,value:i,required:n,rows:u,onInput:e=>c(e.target.value),label:l})};var V=a(2891);const T=e=>{let{label:l,name:a,value:n,min:t,max:s,suffix:i,required:c,onChange:d=()=>{},width:u}=e;return(0,r.jsx)("div",{className:`flex flex-col ${u||"w-full"}`,children:(0,r.jsx)(V.f,{type:"number",value:n,min:t,max:s,required:c,onInput:e=>d(e.target.value,a),label:l,suffix:i,children:(0,r.jsx)("span",{slot:"suffix",children:i})})})};a(66313).J.register();const D={checkbox:t,chip:i,comboBox:o,dropdown:x,input:m,maskInput:g,dateTimeInput:f,radioGroup:y,rating:q,switch:I,textArea:S,numeric:T,textInput:e=>{let{label:l,name:a,inputType:n="text",required:t=!1,minLength:s=0,maxLength:i=1/0,value:c="",placeholder:d="",onChange:u=()=>{},width:o}=e;return(0,r.jsx)("div",{className:`flex flex-col ${o||"w-full"}`,children:(0,r.jsx)(V.f,{type:n,label:l,value:c,required:t,minLength:s,maxLength:i,placeholder:d,onInput:e=>u(e.target.value,a),style:{border:"none"}})})}},G=e=>D[e]||null}}]);
//# sourceMappingURL=73.e2fa30bd.chunk.js.map