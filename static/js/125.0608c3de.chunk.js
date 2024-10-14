"use strict";(self.webpackChunkdynamicapp=self.webpackChunkdynamicapp||[]).push([[125],{2125:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var s=t(5043),a=t(5475),o=t(3204),i=t(579);const c=[{projectId:"RE-001",projectName:"Reservoir Simulation Optimization",projectDescription:"Optimizing reservoir simulation models to improve oil recovery and performance predictions.",projectOwner:"John Doe",createdOn:"2024-01-15",lastModified:"2024-02-01",status:"Active",isFavorite:!0},{projectId:"RE-002",projectName:"Pressure Testing Analysis",projectDescription:"Analyzing pressure tests to evaluate reservoir permeability and wellbore integrity.",projectOwner:"Jane Smith",createdOn:"2024-01-10",lastModified:"2024-01-20",status:"Completed",isFavorite:!1},{projectId:"RE-003",projectName:"Fluid Flow Modeling",projectDescription:"Modeling fluid flow through porous media using reservoir simulation software for enhanced oil recovery (EOR) strategies.",projectOwner:"John Doe",createdOn:"2024-01-05",lastModified:"2024-01-18",status:"Active",isFavorite:!0},{projectId:"RE-004",projectName:"Fracture Mapping and Analysis",projectDescription:"Mapping and analyzing fractures in the reservoir to improve well placement and production efficiency.",projectOwner:"Alice Brown",createdOn:"2024-01-03",lastModified:"2024-01-12",status:"Archived",isFavorite:!1},{projectId:"RE-005",projectName:"Reservoir Pressure Monitoring",projectDescription:"Monitoring and analyzing reservoir pressure data to optimize production rates and prevent reservoir damage.",projectOwner:"Jane Smith",createdOn:"2024-01-20",lastModified:"2024-01-25",status:"Active",isFavorite:!0},{projectId:"RE-006",projectName:"Thermal Recovery Study",projectDescription:"Evaluating the effectiveness of thermal recovery techniques, such as steam injection, to increase oil extraction.",projectOwner:"John Doe",createdOn:"2024-01-25",lastModified:"2024-01-29",status:"Active",isFavorite:!1},{projectId:"RE-007",projectName:"Waterflood Optimization",projectDescription:"Optimizing waterflooding operations to enhance oil recovery in mature reservoirs.",projectOwner:"Alice Brown",createdOn:"2024-01-10",lastModified:"2024-01-23",status:"Completed",isFavorite:!0},{projectId:"RE-008",projectName:"PVT Analysis for Reservoir Fluids",projectDescription:"Conducting PVT (Pressure-Volume-Temperature) analysis of reservoir fluids to understand fluid behavior under different reservoir conditions.",projectOwner:"Jane Smith",createdOn:"2024-01-28",lastModified:"2024-02-02",status:"Active",isFavorite:!1},{projectId:"RE-009",projectName:"Gas Injection Feasibility Study",projectDescription:"Assessing the feasibility of gas injection (CO2, N2) to maintain reservoir pressure and improve oil recovery.",projectOwner:"John Doe",createdOn:"2024-01-12",lastModified:"2024-01-25",status:"Archived",isFavorite:!1},{projectId:"RE-010",projectName:"Reservoir Characterization and Mapping",projectDescription:"Developing detailed reservoir characterization and geological maps to optimize wellbore placement and predict production potential.",projectOwner:"Alice Brown",createdOn:"2024-01-18",lastModified:"2024-01-30",status:"Active",isFavorite:!0}],l=[{icon:"FaFolder",name:"All Projects"},{icon:"FaTasks",name:"Active"},{icon:"FaStar",name:"Favorites"},{icon:"FaProjectDiagram",name:"My Projects"},{icon:"FaShareAlt",name:"Shared"},{icon:"FaCheck",name:"Completed"},{icon:"FaTasks",name:"Archived"}],n="John Doe",d=e=>{let{resultsPanel:r}=e;const[t,d]=(0,s.useState)("All Projects"),[p,m]=(0,s.useState)(""),x={allProjects:(u=c).length,active:u.filter((e=>"Active"===e.status)).length,favorites:u.filter((e=>e.isFavorite)).length,myProjects:u.filter((e=>e.projectOwner===n)).length,shared:u.filter((e=>e.projectOwner!==n)).length,completed:u.filter((e=>"Completed"===e.status)).length,archived:u.filter((e=>"Archived"===e.status)).length};var u;const h=(()=>{let e=c;switch(t){case"Active":e=e.filter((e=>"Active"===e.status));break;case"Favorites":e=e.filter((e=>e.isFavorite));break;case"My Projects":e=e.filter((e=>e.projectOwner===n));break;case"Shared":e=e.filter((e=>e.projectOwner!==n));break;case"Completed":e=e.filter((e=>"Completed"===e.status));break;case"Archived":e=e.filter((e=>"Archived"===e.status));break;default:e=c}return p&&(e=e.filter((e=>e.projectName.toLowerCase().includes(p.toLowerCase())||e.projectDescription.toLowerCase().includes(p.toLowerCase())||e.projectOwner.toLowerCase().includes(p.toLowerCase())||e.createdOn.toLowerCase().includes(p.toLowerCase())||e.lastModified.toLowerCase().includes(p.toLowerCase())||e.status.toLowerCase().includes(p.toLowerCase())))),e})(),j=["bg-red-500","bg-blue-500","bg-green-500","bg-yellow-500","bg-purple-500","bg-teal-500","bg-gray-500"];return(0,i.jsxs)("div",{className:"projects-gadget flex h-[calc(100vh-105px)] p-2 gap-2",children:[(0,i.jsxs)("div",{className:"search-panel w-1/4 p-2 border-r text-sm flex flex-col justify-between",style:{backgroundColor:"var(--tertiaryBackground)",borderColor:"var(--secondaryBackground)",color:"var(--primaryTextColor)"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",placeholder:"Search...",className:"w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500",value:p,onChange:e=>{m(e.target.value.toLowerCase())},style:{backgroundColor:"var(--tertiaryBackground)",color:"var(--primaryTextColor)",borderColor:"var(--secondaryBackground)"}}),(0,i.jsx)("ul",{className:"mb-6",children:l.map(((e,r)=>{const s=o[e.icon],a=j[r%j.length];let c;switch(e.name){case"All Projects":c=x.allProjects;break;case"Active":c=x.active;break;case"Favorites":c=x.favorites;break;case"My Projects":c=x.myProjects;break;case"Shared":c=x.shared;break;case"Completed":c=x.completed;break;case"Archived":c=x.archived;break;default:c=0}return(0,i.jsxs)("div",{children:[(0,i.jsxs)("li",{className:"flex items-center text-xs justify-between py-2 px-2 hover:bg-gray-100 cursor-pointer "+(t===e.name?"bg-gray-800":""),onClick:()=>d(e.name),style:{backgroundColor:t===e.name?"var(--secondaryBackground)":"transparent",color:"var(--primaryTextColor)"},children:[(0,i.jsxs)("div",{className:"flex items-center text-xs",children:[s&&(0,i.jsx)("div",{className:`w-8 h-8 flex items-center text-xs justify-center rounded-full ${a} text-white mr-3`,children:(0,i.jsx)(s,{className:"text-sm"})}),(0,i.jsx)("span",{children:e.name})]}),(0,i.jsx)("span",{className:"border px-2 py-1 rounded-md",style:{borderColor:"var(--secondaryBackground)",color:"var(--secondaryTextColor)"},children:c})]}),r<l.length-1&&(0,i.jsx)("hr",{className:"my-2",style:{borderColor:"var(--secondaryBackground)"}})]},r)}))})]}),(0,i.jsxs)("button",{className:"flex items-center text-xs justify-center w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600",children:[(0,i.jsx)(o.FaPlus,{className:"mr-2"}),"Create a New Project"]})]}),(0,i.jsxs)("div",{className:"results-panel flex-1 p-2 text-sm",style:{backgroundColor:"var(--tertiaryBackground)",color:"var(--primaryTextColor)"},children:[(0,i.jsxs)("div",{className:"flex items-center text-xs justify-between mb-2",children:[(0,i.jsxs)("button",{className:"flex items-center text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600",children:[(0,i.jsx)(o.FaPlus,{className:"mr-2"})," New Project"]}),(0,i.jsxs)("div",{className:"button-group flex space-x-2",children:[(0,i.jsxs)("button",{className:"flex items-center text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600",children:[(0,i.jsx)(o.FaArchive,{className:"mr-2"})," Archive"]}),(0,i.jsxs)("button",{className:"flex items-center text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600",children:[(0,i.jsx)(o.FaTrash,{className:"mr-2"})," Delete"]}),(0,i.jsxs)("button",{className:"flex items-center text-xs bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600",children:[(0,i.jsx)(o.FaClone,{className:"mr-2"})," Clone"]}),(0,i.jsxs)("button",{className:"flex items-center text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600",children:[(0,i.jsx)(o.FaShareAlt,{className:"mr-2"})," Share"]}),(0,i.jsxs)("button",{className:"flex items-center text-xs bg-teal-500 text-white px-2 py-1 rounded hover:bg-teal-600",children:[(0,i.jsx)(o.FaCheck,{className:"mr-2"})," Complete"]})]})]}),(0,i.jsx)("div",{className:"results-list overflow-y-auto h-[calc(100vh-190px)]",children:(0,i.jsx)("ul",{children:h.map(((e,r)=>(0,i.jsxs)("li",{className:"flex justify-between py-3 border-b",style:{borderColor:"var(--secondaryBackground)"},children:[(0,i.jsxs)("div",{className:"flex items-start",children:[(0,i.jsx)("input",{type:"checkbox",className:"mr-4 mt-2"})," ",(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)(a.N_,{to:{pathname:"/project-home/",state:{task:e}},className:"font-bold text-sm text-blue-500 hover:underline",children:e.projectName}),(0,i.jsx)("span",{className:"text-xs",style:{color:"var(--secondaryTextColor)"},children:e.projectDescription}),(0,i.jsxs)("div",{className:"flex items-center text-xs text-xs mt-1",style:{color:"var(--secondaryTextColor)"},children:[(0,i.jsx)(o.FaUser,{className:"mr-1"}),(0,i.jsx)("span",{children:e.projectOwner}),(0,i.jsx)(o.FaCalendarAlt,{className:"ml-3 mr-1"}),(0,i.jsx)("span",{children:e.createdOn}),(0,i.jsx)(o.FaClock,{className:"ml-3 mr-1"}),(0,i.jsx)("span",{children:e.lastModified})]})]})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,i.jsx)("div",{className:"w-4 h-4 rounded-full flex items-center text-xs justify-center "+("Active"===e.status?"bg-green-500":"Completed"===e.status?"bg-blue-500":"bg-gray-400"),children:"Active"===e.status||"Completed"===e.status?(0,i.jsx)(o.FaCheckCircle,{className:"text-white"}):(0,i.jsx)(o.FaArchive,{className:"text-white"})}),(0,i.jsx)("div",{className:"w-4 h-4 rounded-full flex items-center text-xs justify-center "+(e.projectOwner===n?"bg-blue-500":"bg-gray-300"),children:(0,i.jsx)(o.FaUser,{className:"text-white"})}),(0,i.jsx)("div",{className:"w-4 h-4 rounded-full flex items-center text-xs justify-center "+(e.isFavorite?"bg-yellow-500":"bg-gray-300"),children:(0,i.jsx)(o.FaStar,{className:"text-white"})})]})]},r)))})})]})]})}}}]);
//# sourceMappingURL=125.0608c3de.chunk.js.map