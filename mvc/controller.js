class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        let { btn } = this.view.elements;
        btn.addEventListener('click', this._addItem.bind(this));
    }

    _addItem() {
        let { input } = this.view.elements;
        let value = input.value;
        this.model.addItem(value);
        this.view.render(this.model.data);
    }
}