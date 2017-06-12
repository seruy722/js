function applyVisa(documents) {
    console.log('Обработка данных');
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ?
                resolve("Виза получена!") :
                reject("В визе отказано!");
        }, 2000);
    });
    return promise;
}

applyVisa({}).then(visa => console.log(visa), reson => console.error(reson));