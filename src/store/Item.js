import { observable, makeObservable } from 'mobx'

class Item {
    constructor() {
        this.name = "";
        this.price = 0;
        this.quantity = 0;

        makeIterable(this, {
            name: observable,
            price: observable,
            quantity: observable
        })
    }
}

export default Item;