let ages = [
    15,
    22,
    19,
    24,
    20,
    10,
    18,
    25,
];

for (let i = 0; i < ages.length; i++){
    if (ages[i] >= 18){
        console.log(ages[i], "You can vote!");
    } else{
        console.log(ages[i], "You cannot vote!");
    }
}