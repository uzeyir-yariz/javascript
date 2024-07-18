/*
    normal func kullanırken func istenilden yerden çağırabilir ama const yani değişken olanlar çağrılmasında sorun yaşar

    ! uyarı: eğer 21. satırda bir kod sorunu yaşanır ise diğer aşağıda ki kodlar çalışmaz
*/

demo();

function demo() {
    let test = 10;
    console.log(test);
}

demo();

const test_func = function(){
    console.log("demo");
} 
test_func();

const demo_2 = function(){
    console.log("demo");
} 
demo_2();

var var_demo = function(){
    console.log("var demo");
} 
var_demo();