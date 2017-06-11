class Model {
    constructor(data) {
        this.data = data;
    }

    addItem(newItem) {
        if (!newItem) return;
        this.data.push(newItem);
    }

    removeItem(item) {
        let index = this.data.indexOf(item);
        if (!index) return;
        this.data.replace(index, 1);
    }

    updateItem(oldItem, newItem) {
        let index = this.data.indexOf(oldItem);
        if (!oldItem) return;
        this.data.replace(index, 1, newItem);
    }
}