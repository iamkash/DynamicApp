"use strict";(self.webpackChunkdynamicapp=self.webpackChunkdynamicapp||[]).push([[404],{90404:(e,l,r)=>{r.r(l),r.d(l,{default:()=>o});var a=r(65043),n=r(2792),t=r(60184),s=r(70579);const o=e=>{var l;let{gadget:r}=e;const{sections:o=[],footer:c={buttons:[]}}=r.gadgetOptions||r,d=(0,a.useRef)({}),[i,u]=(0,a.useState)(null===(l=o[0])||void 0===l?void 0:l.sectionId),x=["bg-red-500","bg-blue-500","bg-green-500","bg-yellow-500","bg-purple-500"];return(0,s.jsxs)("div",{className:" gap-2 form-gadget flex flex-col",style:{height:"calc(100vh - 100px)"},children:[(0,s.jsxs)("div",{className:"gap-2 flex flex-grow overflow-hidden",children:[(0,s.jsx)("nav",{className:"left-nav-panel w-1/4 p-4 border-r text-sm flex flex-col overflow-y-auto",style:{backgroundColor:"var(--tertiaryBackground)",borderColor:"var(--secondaryBackground)",color:"var(--primaryTextColor)"},children:(0,s.jsx)("ul",{className:" mb-6",children:o.map(((e,l)=>{const r=t[e.icon]||t.FaFolder,a=x[l%x.length];return(0,s.jsxs)("div",{children:[(0,s.jsxs)("li",{className:" text-xs flex items-center justify-between py-2 px-2 hover:bg-gray-100 cursor-pointer "+(i===e.sectionId?"bg-gray-800":""),onClick:()=>{return l=e.sectionId,void u(l);var l},style:{backgroundColor:i===e.sectionId?"var(--secondaryBackground)":"transparent",color:"var(--primaryTextColor)"},children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:`w-8 h-8 flex items-center justify-center rounded-full ${a} text-white mr-3`,children:(0,s.jsx)(r,{className:"text-sm"})}),(0,s.jsx)("span",{children:e.title})]}),void 0!==e.count&&(0,s.jsx)("span",{className:"border px-2 py-1 rounded-md",style:{borderColor:"var(--secondaryBackground)",color:"var(--secondaryTextColor)"},children:e.count})]}),l<o.length-1&&(0,s.jsx)("hr",{className:"my-2",style:{borderColor:"var(--secondaryBackground)"}})]},e.sectionId)}))})}),(0,s.jsx)("div",{className:" p-2 w-3/4 flex flex-col overflow-y-auto",style:{backgroundColor:"var(--tertiaryBackground)",borderColor:"var(--secondaryBackground)",color:"var(--primaryTextColor)"},children:o.map((e=>(0,s.jsx)("div",{ref:l=>d.current[e.sectionId]=l,className:(i===e.sectionId?"block":"hidden")+" w-full p-2",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-xs font-bold mb-2",children:e.title}),Array.isArray(e.groups)&&e.groups.map((e=>(0,s.jsx)("div",{className:"mb-2 space-y-2 grid grid-cols-12 gap-4",children:Array.isArray(e.fields)&&e.fields.map(((e,l)=>{const r=(0,n.I)(e.type);return r?(0,s.jsx)("div",{className:`col-span-${e.colSpan||12}`,children:(0,s.jsx)(r,{...e})},l):null}))},e.groupId)))]})},e.sectionId)))})]}),(0,s.jsx)("div",{className:"footer w-full p-2 border-t flex justify-end space-x-2",style:{backgroundColor:"var(--tertiaryBackground)",borderColor:"var(--secondaryBackground)"},children:c.buttons.map(((e,l)=>(0,s.jsx)("button",{type:"button",className:`btn ${"save"===e.action?"bg-blue-500":"bg-gray-300"} text-white px-4 py-2 rounded`,onClick:()=>{return l=e.action,void console.log(`${l} action triggered`);var l},children:e.label},l)))})]})}},2792:(e,l,r)=>{r.d(l,{I:()=>V});var a=r(10087),n=r(70579);const t=e=>{let{label:l,name:r,required:t,checked:s,onChange:o,width:c}=e;return(0,n.jsx)("div",{className:`flex items-center ${c||"w-full"} p-2`,children:(0,n.jsx)(a.q,{checked:s,label:l,onChange:e=>o(e,r),required:t})})};var s=r(38579);const o=e=>{let{label:l,color:r,onClick:a}=e;return(0,n.jsx)(s.v,{text:l,style:{backgroundColor:r||"gray"},onClick:a})};var c=r(65043),d=r(55642),i=r(1676);d.D.register();const u=e=>{let{label:l,name:r,options:a=[],value:t,onChange:s=()=>{},required:o,width:d,placeholder:u="",singleSelect:x=!0}=e;return(0,c.useEffect)((()=>{console.log("Data loaded:",a)}),[a]),(0,n.jsx)("div",{className:`flex flex-col ${d||"w-full"}`,children:(0,n.jsx)(i.r,{data:a,displayKey:"label",valueKey:"value",selectedItems:[t],onSelectionChanging:e=>{var l;const a=(null===(l=e.newSelection[0])||void 0===l?void 0:l.value)||null;s(a,r)},placeholder:u,label:l,required:o,singleSelect:x})})};var x=r(26477);const h=e=>{let{label:l,name:r,required:a,options:t,value:s,onChange:o,width:c}=e;return(0,n.jsxs)("div",{className:`flex flex-col ${c||"w-full"} p-2`,children:[(0,n.jsx)("label",{className:"text-sm text-gray-600 mb-1",children:l}),(0,n.jsx)(x.I,{value:s,onSelectionChanged:e=>o(e,r),dataSource:t,required:a}),a&&!s&&(0,n.jsx)("span",{className:"text-red-500 mt-1",children:"Required"})]})},m=e=>{let{element:l}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:l.id,className:"block mb-2 text-sm font-medium",children:l.label}),(0,n.jsx)("input",{type:l.inputType||"text",id:l.id,name:l.name,class:"peer w-full border-b border-gray-400 bg-inherit text-gray-800 placeholder-transparent focus:border-blue-500 focus:outline-none"})]})};var g=r(12316);const v=e=>{let{label:l,name:r,mask:a,required:t,value:s,onChange:o,width:c}=e;return(0,n.jsx)("div",{className:`flex flex-col ${c||"w-full"}`,children:(0,n.jsx)(g.X,{mask:a,value:s,onValueChanged:e=>o(e,r),required:t,label:l})})};var p=r(77994);const b=e=>{let{label:l,name:r,required:a,value:t,onChange:s=()=>{},width:o}=e;return(0,n.jsx)("div",{className:`flex flex-col ${o||"w-full"} `,children:(0,n.jsx)(p.U,{value:t,onValueChanged:e=>s(e,r),required:a,label:l})})};var f=r(88818),y=r(64208),j=r(82658),w=r(60823);f._.register(),y.l.register();const C=e=>{let{name:l,options:r=[],selectedValue:a,alignment:t="horizontal",onChange:s}=e;return(0,n.jsx)(j.T,{alignment:t,children:r.map(((e,r)=>(0,n.jsx)(w.c,{name:l,value:e.value,checked:a===e.value,onChange:e=>s(e.target.value),children:(0,n.jsx)("span",{children:e.label})},r)))})};var k=r(61502);const N=e=>{let{label:l,name:r,value:a,max:t,onChange:s,width:o}=e;return(0,n.jsxs)("div",{className:`flex flex-col ${o||"w-full"} p-2`,children:[(0,n.jsx)("label",{className:"text-sm text-gray-600 mb-1",children:l}),(0,n.jsx)(k.G,{value:a,max:t||5,onValueChanged:e=>s(e,r)})]})};var I=r(94420);const q=e=>{let{label:l,name:r,checked:a,onChange:t,width:s}=e;return(0,n.jsxs)("div",{className:`flex items-center ${s||"w-full"} p-2`,children:[(0,n.jsx)("label",{className:"text-sm text-gray-600 mr-4",children:l}),(0,n.jsx)(I.f,{checked:a,onCheckedChanged:e=>t(e,r)})]})};var $=r(97319),B=r(10403);$.V.register();const S=e=>{let{label:l,name:r,required:a=!1,minLength:t=0,maxLength:s=1/0,value:o="",onChange:c=()=>{},width:d,rows:i="3"}=e;return(0,n.jsx)(B.J,{name:r,value:o,required:a,rows:i,onInput:e=>c(e.target.value),label:l})};var T=r(2891);const L=e=>{let{label:l,name:r,value:a,min:t,max:s,suffix:o,required:c,onChange:d=()=>{},width:i}=e;return(0,n.jsx)("div",{className:`flex flex-col ${i||"w-full"}`,children:(0,n.jsx)(T.f,{type:"number",value:a,min:t,max:s,required:c,onInput:e=>d(e.target.value,r),label:l,suffix:o,children:(0,n.jsx)("span",{slot:"suffix",children:o})})})};r(66313).J.register();const A={checkbox:t,chip:o,comboBox:u,dropdown:h,input:m,maskInput:v,dateTimeInput:b,radioGroup:C,rating:N,switch:q,textArea:S,numeric:L,textInput:e=>{let{label:l,name:r,inputType:a="text",required:t=!1,minLength:s=0,maxLength:o=1/0,value:c="",placeholder:d="",onChange:i=()=>{},width:u}=e;return(0,n.jsx)("div",{className:`flex flex-col ${u||"w-full"}`,children:(0,n.jsx)(T.f,{type:a,label:l,value:c,required:t,minLength:s,maxLength:o,placeholder:d,onInput:e=>i(e.target.value,r),style:{border:"none"}})})}},V=e=>A[e]||null}}]);
//# sourceMappingURL=404.ad36fb71.chunk.js.map