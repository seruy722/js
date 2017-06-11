let visual = document.querySelector(".visual");
let button = document.querySelector(".button");
let input = document.querySelector(".input");
let arr = ["JS", "React", "Nodejs", "JAVA", "MVC"];
const navigation = [
    { name: "Главная" },
    {
        name: "Каталог",
        children: [{
            name: "Компьютеры",
            children: [{ name: "Ноутбуки" }, { name: "Планшеты" }]
        }]
    },
    { name: "Профиль" }
];

let visualArray = () => {
    let value = input.value;
    if (!value) return;
    arr.push(value);
    visual.innerHTML = arr.reduce((row, current) => row + `<li>${current}</li>`, '');
    input.value = '';
}

let div = document.querySelector('div');
let visualArray2 = (arr => {
    let ul = `<ul>`;
    arr.forEach(elem => {
        let name = elem.name;
        let children = elem.children;
        if (name) {
            ul += `<li><h1>${name}</h1>`;
        }
        if (children) {
            ul += `<li>${visualArray2(children)}`;
        }
    })
    ul += `</li>`;
    return ul += `</ul>`;
})

div.innerHTML = visualArray2(navigation);
button.addEventListener('click', visualArray);