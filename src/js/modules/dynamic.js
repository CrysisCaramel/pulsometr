"use strict";

let sendUrl = "https://baconipsum.com/api/?";
let imgUrl = "https://picsum.photos/v2/list?";
function generateUrl(url) {
    return function(param) {
        return url+param;
    };
}
const urlParam = new generateUrl(sendUrl);
sendUrl = urlParam("type=all-meat&paras=1&start-with-lorem=1");
const imgParam = new generateUrl(imgUrl);
imgUrl = imgParam("page=2");

// function sendRequest(method, blockUrl, imgUrl, numberOfBlocks) {
//     const block = document.querySelector(".block"),
//     row = block.querySelector(".row");
//     for (let i = 1; i <= numberOfBlocks; i++) {
//         const storeXhr = {
//             block: new XMLHttpRequest(),
//             img: new XMLHttpRequest()
//         },
//         div = document.createElement("div"),
//         span = document.createElement("span"),
//         img = document.createElement("img");
//         div.classList.add("col-6");
//         div.classList.add("wrap");
//         row.appendChild(div);
//         div.appendChild(img);
//         div.appendChild(span);
//         for (let key in storeXhr) {
//             storeXhr.block.open(method, blockUrl);
//             storeXhr.img.open(method, imgUrl);
//             if (method == "POST") {
//                 storeXhr[key].setRequestHeader("Content-Type", "application/json");
//             }
//             storeXhr[key].responseType = "json";
//         }
//         storeXhr.block.onload = () => {
//             if (storeXhr.block.status >= 400) {
//                 console.error(storeXhr.block.response);
//             } else {
//                 span.textContent = storeXhr.block.response;
//             }
//         };
//         storeXhr.img.onload = () => {
//             img.src = storeXhr.img.response[i].download_url;
//         };
//         storeXhr.block.send();
//         storeXhr.img.send();
//     }
    
// }
// sendRequest("GET", sendUrl, imgUrl, 4);


//promise

// function sendRequest(method, blockUrl, imgUrl,numberOfBlocks) {
//     for(let i = 1; i <= numberOfBlocks; i++) {
//         const div = document.createElement("div"),
//         block = document.querySelector(".block"),
//         row = block.querySelector(".row"),
//         span = document.createElement("span"),
//         img = document.createElement("img"),   
//         blockPromise = new Promise((resolve,reject) => {
//             const xhr = new XMLHttpRequest();
//             xhr.open(method,blockUrl);
//             xhr.responseType = "json";
//             xhr.onload = () => {
//                 xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response);
//             };
//             xhr.send();
//         }),
//         imgPromise = new Promise((resolve,reject) => {
//             const xhrImg = new XMLHttpRequest();
//             xhrImg.open(method, imgUrl);
//             xhrImg.responseType = "json";
//             xhrImg.onload = () => {
//                 xhrImg.status >= 400 ? reject(xhrImg.response) : resolve(xhrImg.response);
//             };
//             xhrImg.send();
//         });
//         div.classList.add("col-6");
//         div.classList.add("wrap");
//         row.appendChild(div);
//         div.appendChild(img);
//         div.appendChild(span);
//         blockPromise.then((data) => {
//             span.textContent = data;
//         })
//         .catch(data => {
//             console.error(data);
//         });
//         imgPromise.then(data => {
//             img.src = data[i].download_url;
//         });

//     } 
// }
// sendRequest("GET", sendUrl, imgUrl, 2);
    


///fetch async await


// async function sendRequest(blockUrl, imgUrl, numberOfBlocks) {
//     for (let i = 1; i <= numberOfBlocks; i++) {
//         try {
//             const blockResponse = await fetch(blockUrl),
//             dataBlock = await blockResponse.json(),
//             imgResponse = await fetch(imgUrl),
//             dataImg = await imgResponse.json(),
//             div = document.createElement("div"),
//             block = document.querySelector(".block"),
//             row = block.querySelector(".row"),
//             span = document.createElement("span"),
//             img = document.createElement("img");
//             div.classList.add("col-6");
//             div.classList.add("wrap");
//             row.appendChild(div);
//             div.appendChild(img);
//             div.appendChild(span);
//             span.textContent = dataBlock;
//             img.src = dataImg[i].download_url;
//         } catch(e) {
//             console.error(e);
//         }

//     } 
// }        

// sendRequest(sendUrl, imgUrl, 9);
