var phonePlaceholder = document.getElementById("phone-paceholder_19");

/*Check browser*/
var isChrome = !!window.chrome;

if (isChrome) {
    phonePlaceholder.innerHTML =` 
	                               
								   <img src="./img/loading-pacer.png" 
                                   alt="loading breathmix online"
								   id="load image"
                                   style="width:100%;
                                   height:100%;
								   top:0;
								   left:0;">
                                   </img>
								   
								   <iframe style="width:100%; height:100%;" src="index_app.html"></iframe>
								   `;
} else {
    phonePlaceholder.innerHTML = `<a href="https://www.google.com/chrome/" target="_blank">
    
                                    
                                   <img src="./img/background-download-chrome.png" 
                                   alt="download chrome for online breath pacer"
                                   style="width:100%;
                                   height:100%";>
                                   </img>
                                   </a>`;
}

window.onload = function() {
	var loadImage = document.getElementById("load image");
	loadImage.style["display"] = "none";
}