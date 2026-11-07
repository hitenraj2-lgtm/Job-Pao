const resources=[
 {name:"National Career Service",type:"Government",state:"All India",desc:"Government employment and career services",url:"https://www.ncs.gov.in/",icon:"🇮🇳"},
 {name:"UPSC",type:"Government",state:"All India",desc:"Civil services and central recruitment",url:"https://upsc.gov.in/",icon:"🏛️"},
 {name:"Staff Selection Commission",type:"Government",state:"All India",desc:"SSC examinations and notifications",url:"https://ssc.gov.in/",icon:"📋"},
 {name:"Railway Recruitment Boards",type:"Government",state:"All India",desc:"Railway recruitment notices and updates",url:"https://www.rrbapply.gov.in/",icon:"🚆"},
 {name:"IBPS",type:"Government",state:"All India",desc:"Banking recruitment examinations",url:"https://www.ibps.in/",icon:"🏦"},
 {name:"Bihar Public Service Commission",type:"Government",state:"Bihar",desc:"BPSC recruitment and official notices",url:"https://bpsc.bihar.gov.in/",icon:"📜"},
 {name:"Bihar Staff Selection Commission",type:"Government",state:"Bihar",desc:"BSSC recruitment updates",url:"https://bssc.bihar.gov.in/",icon:"📝"},
 {name:"Employment News",type:"Government",state:"All India",desc:"Official weekly employment publication",url:"https://employmentnews.gov.in/",icon:"📰"},
 {name:"Naukri",type:"Private",state:"All India",desc:"Private-sector jobs and fresher roles",url:"https://www.naukri.com/",icon:"💼"},
 {name:"LinkedIn Jobs",type:"Private",state:"All India",desc:"Professional and company job listings",url:"https://www.linkedin.com/jobs/",icon:"🔗"},
 {name:"Apna",type:"Private",state:"All India",desc:"Entry-level and local job opportunities",url:"https://apna.co/",icon:"👔"},
 {name:"Indeed India",type:"Private",state:"All India",desc:"Search jobs across industries",url:"https://in.indeed.com/",icon:"🔎"}
];
// Add a new listing here only after checking the official notification.
// pdfUrl can point to a PDF uploaded in the /notifications folder.
const jobs = resources.map((r,i)=>({...r, title:r.name, category:r.type, applyUrl:r.url, pdfUrl:"", note:"Official recruitment portal"}));
const grid=document.getElementById("jobGrid"), resourceGrid=document.getElementById("resourceGrid");
function render(){
 const q=document.getElementById("search").value.toLowerCase(),t=document.getElementById("type").value,s=document.getElementById("state").value;
 const list=jobs.filter(j=>(!t||j.type===t)&&(!s||j.state===s)&&[j.title,j.desc,j.state,j.type].join(" ").toLowerCase().includes(q));
 document.getElementById("count").textContent=`${list.length} official resources`;
 document.getElementById("empty").hidden=list.length!==0;
 grid.innerHTML=list.map(j=>`<article class="job-card"><span class="tag ${j.type==='Private'?'private':''}">${j.type.toUpperCase()}</span><h3>${j.title}</h3><p>${j.desc}</p><div class="job-meta"><span>⌖ ${j.state}</span><span>✓ Official source</span></div><div class="job-links"><a href="${j.applyUrl}" target="_blank" rel="noopener">Visit website ↗</a>${j.pdfUrl?`<a href="${j.pdfUrl}" target="_blank">Notification PDF ↓</a>`:""}</div></article>`).join("");
}
resourceGrid.innerHTML=resources.map(r=>`<a class="resource" href="${r.url}" target="_blank" rel="noopener"><span class="resource-icon">${r.icon}</span><span><b>${r.name}</b><small>${r.desc}</small></span><span class="go">↗</span></a>`).join("");
["search","type","state"].forEach(id=>document.getElementById(id).addEventListener(id==="search"?"input":"change",render));
document.getElementById("clear").addEventListener("click",()=>{document.getElementById("search").value="";document.getElementById("type").value="";document.getElementById("state").value="";render()});
document.getElementById("year").textContent=new Date().getFullYear();render();