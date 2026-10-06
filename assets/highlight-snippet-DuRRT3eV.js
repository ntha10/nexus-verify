function i(e){return e.split(/<mark>|<\/mark>/).map((t,r)=>({text:t,marked:r%2===1})).filter(t=>t.text.length>0)}export{i as h};
