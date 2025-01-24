// for (let i = 0; i < 3; i++) {
//     if(i==1){
//         break;
//     }
//     else{
//         continue;
//     }
//   console.log("Hello");
// }

// for (let i = 0; i < 3; i++) {
//     if(i==1){
//        return;
//     }
//   console.log("Yo");
// }

const shoe = {
    brandOptions: ["adidas", "nike", "sketchers"],
    brand: "",
    laces: true,
    velcro: false,
    color: "purple",
    activity: ["running", "fashion", "walking"],
    material: ["leather", "suede"],
    // wear: function(){console.log("Wear shoe")},
    // clean: function(){console.log("Clean shoe")}
    // wear(){console.log("Wear shoe")}
    console.table(brandOptions)
}   

shoe.brand = prompt("Choose from: "+ shoe.brandOptions[0] + " or "+ shoe.brandOptions[1])

// console.log(shoe.brand)
// shoe.brand = "nike";
// console.log(shoe)

// objects are made up of properties and behaviors using . notation or []

