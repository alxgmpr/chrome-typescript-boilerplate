window.addEventListener("message",function(event){console.log("test:",event);if(event.source!==window)return;var message=event.data;if(typeof message==="object"&&message!==null&&message.cmd==="injectContent"){var p=document.createElement("p");p.textContent="Hello, world!";document.body.appendChild(p)}});