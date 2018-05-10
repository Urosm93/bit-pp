"use strict";

(function () {


    function Product(name, price, expDate) {
        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expDate);

        this.getInfo = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            return firstLetter + lastLetter + this.id + ", " + this.name + " ," + this.price;
        }
    }
    function ShoppingBag() {
        this.productList = [];

        this.addProduct = function (product) {
            var productExpiration = product.expirationDate.getTime();
            var dateNow = new Date().getTime();
            if (dateNow < productExpiration) {
                return this.productList.push(product);
            }
        }

        this.averagePrice = function () {
            var totalPrice = 0;
            for (var i = 0; i < this.productList.length; i++) {
                var product = this.productList[i]
                totalPrice += product.price;
            }
            return totalPrice / this.productList.length;
        }
        this.getMostExpensive = function () {
            var max = this.productList[0].price;
            for (var i = 0; i < this.productList.length; i++) {
                if (max < this.productList[i].price) {
                    max = this.productList[i];
                }
            }
            return max;
        }

        this.calculateTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.productList.length; i++) {
                sum += this.productList[i].price;
            }
            return sum;
        }



    }

    function PaymentCard(balance, status, validation) {
        this.balance = balance.toFixed(2);
        this.validation = new Date(validation);
        this.status = function (){
                if(this.validation > Date.now()){
                    return "active";
                } else return "inactive";
        };
    }

    function checkoutAndBuy(ShoppingBag, PaymentCard) {
        if (this.myStatus.balance >= this.productList.price) {
            
        }
    }
    

    var mango = new Product("mango", 312.50, "10/12/2018");
    var papaja = new Product("papaja", 234.25, "11/11/2018");
    var dusek = new Product("dusek", 64444.25, "11/11/2018");

    var myStatus = new PaymentCard(550000, "6/6/2019");

    var myShoppingBag = new ShoppingBag();
    myShoppingBag.addProduct(mango);
    myShoppingBag.addProduct(papaja);
    myShoppingBag.addProduct(dusek);



    console.log(myShoppingBag.calculateTotalPrice());




    console.log(myStatus.validation);


})();

