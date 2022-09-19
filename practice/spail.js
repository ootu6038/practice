function checkSale(price) {
if(price >= 2000){
    console.log (`${price}円は、割引対象外です。`);
}
 else {
    console.log(`${price}円は、割引対象ではありません。`);
 }
}
//価格の確認を行う
checkSale(1800);
checkSale(1900);
checkSale(2000);
