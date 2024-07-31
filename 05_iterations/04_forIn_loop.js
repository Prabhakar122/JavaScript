/*******For In loop******* */

const Myobject = {
    USB : "Universal Serial Bus",
    OTG : "On The Go",
    RJ : "Registered Jack"
}

for (const key in Myobject) {
    // console.log(key);               //keys
    // console.log(Myobject[key]);     //values
}

const myarray = ["wonder women", "Catwomen", "Poison ivy"]
for (const key in myarray) {
    console.log(key);               //keys
    console.log(myarray[key]);     //values
}