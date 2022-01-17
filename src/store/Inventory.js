import { observable, makeObservable, action } from 'mobx'
import Item from "./Item"

class Inventory {
    constructor() {
        this.items = [];

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

        let priceInNumbers = Number(price)
        let quantityInNumbers = Number(quantity)
        if (quantityInNumbers < 1) quantityInNumbers = 1

        for (let item of this.items) {
            if (item.name === name) {
                item.quantity += quantityInNumbers;
                return "item added";
            }
        }
        this.items.push(new Item(name, priceInNumbers, quantityInNumbers))
        return "item added";
    }

    deleteItem = function (index) {
        this.items = [...this.items.slice(0, index), ...this.items.slice(index + 1)]
    }

    buyItem = function (name) {
        for (let index in this.items) {
            if (this.items[index].name === name) {
                if (this.items[index].quantity === 1) {
                    this.deleteItem(index)
                } else {
                    this.items[index].quantity--;
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

export default new Inventory();