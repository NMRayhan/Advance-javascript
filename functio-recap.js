let mobiles= [
    {name:"Samsung", price: 29000, camera: "16MP", productFrom: "Taiwan", memory: "6GB"},
    {name:"HTC", price: 39000, camera: "32MP", productFrom: "Taiwan", memory: "8GB"},
    {name:"Nokia", price: 55000, camera: "64MP", productFrom: "China", memory: "4GB"},
    {name:"lenovo", price: 45000, camera: "64MP", productFrom: "India", memory: "6GB"},
    {name:"Redmi", price: 48000, camera: "32MP", productFrom: "China", memory: "4GB"},
]

function lowestMobile(phones) {
    let lowestPhone = phones[0];
    for(const phone of phones ){
        if(lowestPhone.price > phone.price){
            lowestPhone = phone
        }
    }
    return lowestPhone;
}
console.log(lowestMobile(mobiles));