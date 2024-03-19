function sum(...numbers){
     let hasil = 0;

     for (const number of numbers){
        hasil += number;
     } 
     return hasil;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12));



function showFamilies(suami,istri, ...children) {
    console.log(`Suami: ${suami}`);
    console.log(`Istri: ${istri}`);

    for (const child of children) {
        console.log(`Anak: ${child}`);
    }

}

showFamilies("Azka","Icha","Rabbani","Violet")