import { observable, makeObservable } from 'mobx'

export default class Item {
    constructor(name = "", price = 0, quantity = 0) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;

        makeObservable(this, {
            name: observable,
            price: observable,
            quantity: observable
        })
    }
}