"use strict";
const mainUrl = "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1";
// const dynamic = () => setInterval(() => {
//     const textAdd = document.querySelectorAll(".textContent");
//     const img = document.querySelectorAll("#imgBlock");
//     const mainUrl = "https://baconipsum.com/api/?type=meat-and-filler&paras=1";
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", mainUrl);
//     xhr.responseType = "json";
//     xhr.onload = () => {
//         if (xhr.status >= 400) {
//             console.log(xhr.response);
//         } else {
//             textAdd.forEach(elem => {
//                 elem.textContent = xhr.response;
//             });
//         }
//     };
//     img.forEach(elem => {
//         elem.src = "https://picsum.photos/200?random=1";
//     });
//     xhr.onerror = () => {
//         console.log(xhr.responce);
//     };
//     xhr.send();
//     }, 3000);
// dynamic();

// const body = {
    
// };

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = "json";
//         if (method == "POST") {
//             xhr.setRequestHeader("Content-Type", "application/json");
//         }
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//         };
//         xhr.send(JSON.stringify(body));
//     });
// }

// sendRequest("GET", mainUrl)
//     .then(data => {
//         const textAdd = document.querySelectorAll(".textContent");
//         const img = document.querySelectorAll("#imgBlock");
//         textAdd.forEach(elem => {
//             elem.textContent = data;
//         });
//         img.forEach(elem => {
//             elem.src = "https://picsum.photos/200?random=1";
//         });
//     })
//     .catch(data => {
//         console.error(data);
//     });
function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    });
}

sendRequest("GET", mainUrl)
    .then(data => {
        const textAdd = document.querySelectorAll(".textContent");
        const img = document.querySelectorAll("#imgBlock");
        textAdd.forEach(elem => {
            elem.textContent = data;
        });
        img.forEach(elem => {
            elem.src = "https://picsum.photos/200?random=1";
        });
    })
    .catch(err => {
        console.log(err);
    });