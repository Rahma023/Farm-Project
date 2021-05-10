class Mkulima{
    constructor(){
        this.product=[];
        this.vendor=[];
        this.farms=[];
    }

addFarm(farmerId,farmerName,phoneNumber,address){
    var farmname={
        farmerId:farmerId,
        farmerName:farmerName,
        phoneNumber:phoneNumber,
        address:address,
    }
    this.farms.push(farmname);
    return this.farms
}
    removeFarm(farmerId){
        let remove=this.farms.find(remove=>remove.farmerId==farmerId)
    return  delete this.farms [remove]
    }
    updateFarm(farmerId,farmerName,phoneNumber,address,farmName){
    let newfarms=this.farms.find(newfarms=>newfarms.farmerId==farmerId)
         newfarms={
            farmerId:farmerId,
            farmerName:farmerName,
            phoneNumber:phoneNumber,
            address:address,
            farmName:farmName,
            
        }
    return newfarms
}
getFarm(farmerId){
    let newfarms2=this.farms.find(newfarms=>newfarms.farmerId==farmerId)
    return newfarms2
}


addProduct(productId,productName,price){
    var prodct={
        productId:productId,
        productName:productName,
        price:price,
    }
    this.product.push(prodct)
    return this.product
}
removeProductId(productId){

    let rm=this.product.find(rm=>rm.productId==productId)
    return delete this.product[rm]
}
updateProduct(productId,productName,price){
    let newproduct=this.product.find(newproduct=>newproduct.productId==productId)
    newproduct={
        productId:productId,
        productName:productName,
        price:price,
    }
    return newproduct
    
}    
getProduct(productId){
    let newproduct2=this.product.find(newproduct2=>newproduct2.productId==productId)
    return newproduct2
}
printProducts(){
    for(let items of this.product){
        console.log(items.name +" "+ items.price)
    }

}
calculateOrderCost(productId,quantity){
    let products=this.product.find(products=>products.productId==productId)
    return products.price*quantity
}}
let mkulima= new Mkulima([],[],[]);
console.log(mkulima.addFarm(37257767,"Timothy","0728927387","Mark","2020"));
console.log(mkulima.addFarm(47820184,"Husni","0712345647","Aluel","2023"));
console.log(mkulima.addFarm(87389990,"Bafda","0753692910","Trivor","2025"));
console.log(mkulima.removeFarm(37257767));
console.log(mkulima.updateFarm(37489307,"Saadia","0728927387","3987","Samuel"));
console.log(mkulima.getFarm(47820184));
console.log(mkulima.addProduct(27849,"Mchicha",100));
console.log(mkulima.addProduct(83920,"Sukumawiki",50));
console.log(mkulima.addProduct(26837,"Tomatoe",120));
console.log(mkulima.removeProductId(83920));
console.log(mkulima.updateProduct(84920,"cabbage",60));
console.log(mkulima.getProduct(27849));
mkulima.printProducts()
console.log(mkulima.calculateOrderCost(26837,7));


    