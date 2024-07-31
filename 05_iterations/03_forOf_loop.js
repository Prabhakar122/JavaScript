/**For of loop**/

const myarray = ["wonder women", "Catwomen", "Poison ivy"]
for (const iterator of myarray) {
    // console.log(iterator);
}

const JustString = "hello world"
 for (const iterator of JustString) {
    // console.log(iterator);
 }

//  maps: A data type
const variable_map = new Map();
variable_map.set('USA', "United States of America")
variable_map.set('UAE', "United Arab Emirates")
variable_map.set('USA', "United States of America")
// console.log(variable_map);

for (const iterator of variable_map) {
    // console.log(iterator);
}
for (const [iterator, value] of variable_map) {
    console.log(iterator + ' ' + value);
}
