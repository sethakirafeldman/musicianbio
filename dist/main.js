(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){const n=document.createElement("div"),a=document.createElement("h4"),i=document.createElement("p");let r=document.getElementsByClassName("loader")[0];r&&(r.remove(),n.classList.add("bio-card"),o.append(n),n.append(a),n.append(i),a.innerText=e,i.innerText=t)}function n(e){const n={prompt:`Tell me the origin story of the following musical artist: ${e}`,max_tokens:200,temperature:1};void 0!==e&&(function(){let e=document.createElement("div");e.classList.add("loader"),o.append(e),e.innerText="loading..."}(),fetch("https://api.openai.com/v1/engines/text-davinci-002/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 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"},body:JSON.stringify(n)}).then((e=>e.json())).then((n=>{console.log(n);let o=n.choices[0].text;t(e,o)})).catch((e=>{console.log("error, please try again"),document.getElementsByClassName("loader")[0].innerText="Error: API not responding. OpenAI may be experiencing an outage at this time."})))}e.d({},{D:()=>o});const o=document.getElementById("main-container");!function(){document.getElementById("musician-form");let e=document.getElementById("submit-btn"),t=document.getElementById("musician-input");t.addEventListener("keypress",(e=>{13==e.keyCode&&(e.preventDefault(),n(t.value),t.value="")})),e.addEventListener("click",(e=>{e.preventDefault(),n(t.value),t.value=""}))}(),t()})();