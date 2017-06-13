function applyVisa(documents) {
    console.log("Обработка данных...");
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve({}) : reject("Отказ");
        }, 2000);
    });
    return promise;
}

function bookHotel(visa) {
    console.log('Отель забронирован');
    console.log(visa);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(visa), 2000);
    });
}

function buyTikets(visa) {
    console.log('Билеты куплены');
    console.log(visa);
}

applyVisa({})
    .then(visa => {
        console.log("Виза получена!");
        console.log(visa);
        return visa;
    })
    .then(bookHotel)
    .then(buyTikets)
    .catch(err => console.error(err));