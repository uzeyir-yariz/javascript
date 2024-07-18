// birden fazla satır
const demo = (a, b) => {
    console.log(a + b);
}
demo(2, 2);

// tek satır
const one_line_arr = demo => console.log(demo);
one_line_arr("merhaba dünya");

// kısaltılmış kod
const shor = () => 'say my name';
console.log(shor());

// örnek kod
const fatura = (products, tax) => {
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        sum += products[i] +  products[i] * tax;
    }
    return sum;
}
