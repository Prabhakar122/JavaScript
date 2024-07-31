/********For Loop************ */

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    // console.log(`multiplication table of ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop ${i} and ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }   
}

let justAarray = ["Ironman", "Thor", "Captain"]
for (let index = 0; index < justAarray.length; index++) {
    const element = justAarray[index];
    console.log(element);
}

// Break and continue

for (let index = 0; index <10; index++) {
    if (index == 5) {
        // console.log(`${index} is detected`);
        break;
    }
    // console.log(index);
}

for (let index = 0; index <10; index++) {
    if (index == 5) {
        console.log(`${index} is detected`);
        continue;
    }
    console.log(index);
}