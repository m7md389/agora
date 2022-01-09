import { observable, makeObservable, action } from 'mobx'

class Inventory {
    constructor() {
        this.items = [];
        this.price = 0;
        this.quantity = 0;

        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice: action,
            deleteItem: action
        })
    }

    addItem = function (name, price = 0, quantity = 1) {
        if (!name) {
            return "please send item name"
        }
        for (let item of this.items) {
            if (item.name === name) {
                item.quantity++;
                return "item added";
            }
        }
        this.items.push({ name, price, quantity })
        return "item added";
    }

    deleteItem = function (index) {
        this.items = [...this.items.slice(0, index), ...this.items.slice(index + 1)]
    }

    buyItem = function (name) {
        for (let index in this.items) {
            if (this.items[index].name === name) {
                if (this.items[index].quantity === 0) {
                    this.items[index].quantity--;
                } else {
                    deleteItem(index)
                }
                return "item bought";
            }
        }
        return "item not found";
    }

    changePrice = function (name, price) {
        for (let item of this.items) {
            if (item.name === name) {
                item.price = price;
                return "price changed";
            }
        }
        return "item not found";
    }

}

const inventory = new Inventory();

export default inventory;