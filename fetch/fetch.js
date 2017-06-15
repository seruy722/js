"use strict";

// let button = document.querySelector(".button");
// button.onclick = getIp;

let getIp = () => fetch("https://jsonplaceholder.typicode.com/users/");
let list = document.querySelector(".my_ip");

getIp()
    .then(x => x.json())
    .then(
        x =>
        list.innerHTML = x.reduce(
            (row, person) => row += `<li>${person.username}</li>`,
            ""
        )
    )
    .catch(eror => console.log(eror));


// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {

//     if (xhr.readyState === 4 && xhr.status === 200) {

//         document.querySelector('.my_ip').innerHTML = xhr.responseText;

//     }

// }

// xhr.open('GET', 'ip.php');

// xhr.send();