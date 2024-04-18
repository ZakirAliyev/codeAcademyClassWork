class Product {
    static id = 0;
    constructor(name, imgSrc, costPrice, salePrice, discountPercentage) {
        this.id = Product.id++;
        this.name = name;
        this.imgSrc = imgSrc;
        this.costPrice = costPrice;
        if (costPrice > salePrice) {
            throw new Error('Cost price cannot be less than sale price');
        } else {
            this.salePrice = salePrice;
        }
        if (discountPercentage >= 0 && discountPercentage <= 100) {
            this.discountPercentage = discountPercentage;
        } else {
            throw new Error('Discount percentage should be between 0-100');
        }
    }

    calcProfit() {
        return this.salePrice - this.costPrice - (this.salePrice * this.discountPercentage / 100);
    }
}

export default Product;