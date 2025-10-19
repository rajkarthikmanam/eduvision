// helpers
function avg(nums){ return nums.reduce((a,b)=>a+b,0)/Math.max(nums.length,1); }

// 1) Bar: Avg grade by course
(function(){
  const ctx = document.getElementById("barCourse"); if(!ctx) return;
  const byCourse = {};
  enrollments.forEach(e=>{
    const c = courses.find(x=>x.id===e.courseId)?.title || "Unknown";
    (byCourse[c] = byCourse[c] || []).push(e.numeric_grade);
  });
  const labels = Object.keys(byCourse);
  const data = labels.map(k=>avg(byCourse[k]));
  new Chart(ctx,{type:"bar",data:{labels,datasets:[{label:"Avg Grade",data}]},options:{responsive:true,plugins:{legend:{display:false}}}});
})();

// 2) Pie: Students by Major
(function(){
  const ctx = document.getElementById("pieMajor"); if(!ctx) return;
  const count = {};
  students.forEach(s=>{ count[s.major]=(count[s.major]||0)+1; });
  new Chart(ctx,{type:"pie",data:{labels:Object.keys(count),datasets:[{data:Object.values(count)}]},options:{responsive:true}});
})();

// 3) Line: Avg grade by term
(function(){
  const ctx = document.getElementById("lineTerm"); if(!ctx) return;
  const order = ["Spring 2025","Fall 2025"]; // simple order for demo
  const byTerm = {};
  enrollments.forEach(e=>{ (byTerm[e.term]=byTerm[e.term]||[]).push(e.numeric_grade); });
  const labels = order.filter(t=>byTerm[t]);
  const data = labels.map(t=>avg(byTerm[t]));
  new Chart(ctx,{type:"line",data:{labels,datasets:[{label:"Avg Grade",data,tension:0.3}]} ,options:{responsive:true,plugins:{legend:{display:false}}}});
})();
