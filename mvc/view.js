class View {
    constructor(data) {
        this.init();
        this.render(data);
    }

    init() {
        this.elements = {
            list: document.querySelector('.list-item'),
            input: document.querySelector('.input'),
            btn: document.querySelector('.btn')
        }
    }

    render(data) {
        let { list, input } = this.elements;
        list.innerHTML = data.reduce((row, item) => row + `<li>${item}</li>`, '');
        input.value = '';
    }
}