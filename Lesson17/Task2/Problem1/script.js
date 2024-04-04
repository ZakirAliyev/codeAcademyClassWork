class Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discount, saleCount) {
        this.brand = brand;
        this.model = model;
        this.screenSize = screenSize;
        this.batteryLevel = batteryLevel;
        this.price = price;
        this.discount = discount;
        if (salePrice > this.price) {
            if (discount > 0) {
                this.salePrice = salePrice - (salePrice * this.discount / 100);
            } else {
                this.salePrice = salePrice;
            }
        } else {
            throw new Error('The sale price must not be less than or equal to the price.');
        }
        this.saleCount = saleCount;
    }

    calculateProfit() {
        let profit = (this.salePrice - this.price) * this.saleCount;
        if (profit >= 0) {
            return `Earned income: ${profit}`;
        } else {
            return `${profit * -1} manat was lost from product sales.`;
        }
    }
}

class Phone extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discount, saleCount, isSmart = false) {
        super(brand, model, screenSize, batteryLevel, price, salePrice, discount, saleCount);
        this.isSmart = isSmart;
    }
}

class Laptop extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, salePrice, discount, saleCount, isRGBkeyboard = false) {
        super(brand, model, screenSize, batteryLevel, price, salePrice, discount, saleCount);
        this.isRGBkeyboard = isRGBkeyboard;
    }
}

function filterbyPrice(array, price) {
    return array.filter((element) => element.price > price);
}

const phone1 = new Phone('Samsung', 'Galaxy S9', '1440x2960', 87, 1300, 2200, 10, 20,true);
const laptop1 = new Laptop('Dell', 'Inspiron', '1920x1080', 91, 2200, 3400, 70, 10);
const phone2 = new Phone('Samsung', 'Galaxy S8+', '1440x2960', 73, 900, 1900, 30, 50);
const laptop2 = new Laptop('HP', 'Pavilion', '1366x768', 77, 3400, 3700, 50, 25,true);

const devicesArray = [phone1, laptop1, phone2, laptop2];

try {
    devicesArray.forEach(element => {
        console.log(`Discount: ${element.discount}`);
        console.log(`Price: ${element.price}`);
        console.log(`Sale Price: ${element.salePrice}`);
        console.log(`Sale Count: ${element.saleCount}`);
        console.log(element.calculateProfit());
        console.log('--------------------------------------------------')
    });
    console.log(filterbyPrice(devicesArray, 2000));
} catch (err) {
    console.log(`Error: ${err.message}`);
}
