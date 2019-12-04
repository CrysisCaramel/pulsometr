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

// function sendRequest(method, blockUrl) {
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,blockUrl);
//         xhr.responseType = "json";
//         xhr.onload = () => {
//             xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response);
//         };
//         xhr.send();
//     });
// }

// function generateImg(data) {
//    const num = Math.ceil(Math.random() * 29);
//    return data[num];
// }

// function createBlock(method, BlockUrl, imgUrl) {
//     const div = document.createElement("div"),
//         block = document.querySelector(".block"),
//         row = block.querySelector(".row"),
//         span = document.createElement("span"),
//         img = document.createElement("img");
//         div.classList.add("col-6");
//         div.classList.add("wrap");
//         row.appendChild(div);
//         div.appendChild(img);
//         div.appendChild(span);
//         const sendBlock = sendRequest(method, BlockUrl)
//         .then(data => {
//             span.textContent = data;
//         });
//         const sendImg = sendRequest(method, imgUrl)
//         .then(data => {
//             img.src = generateImg(data).download_url;
//         });
// }

// function createSectionBlog(number, method, blockUrl, imgUrl) {
//     for (let i = 1; i <= number; i++) {
//         createBlock(method, blockUrl, imgUrl);
//     }
// }
// createSectionBlog(5, "GET", sendUrl, imgUrl);



///fetch async await


async function sendRequest(Url) {
    try {
        const urlResponse = await fetch(Url),
        data= await urlResponse.json();
        return data;
    } catch(e) {
        console.error(e);
    }
}        

function generateImg(data) {
   const num = Math.ceil(Math.random() * 29);
   return data[num].download_url;
}

async function createBlock(url1, url2) {
    const div = document.createElement("div"),
    block = document.querySelector(".block"),
    row = block.querySelector(".row"),
    span = document.createElement("span"),
    img = document.createElement("img");
    div.classList.add("col-6");
    div.classList.add("wrap");
    row.appendChild(div);
    div.appendChild(img);
    div.appendChild(span);
    const sendRequestBlock = await sendRequest(url1);
    const sendRequestImg = await sendRequest(url2);
    span.textContent = sendRequestBlock;
    img.src = generateImg(sendRequestImg);
}

function createSectionBlog(number) {
    for (let i = 1; i <= number; i++) {
        createBlock(sendUrl, imgUrl);
    }
}
createSectionBlog(10);


