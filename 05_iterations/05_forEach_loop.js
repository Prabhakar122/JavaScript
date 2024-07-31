/***********For Each loop********** */

const myarray = ["wonder women", "Catwomen", "Poison ivy"]

myarray.forEach( function (params) {    //callback function
    // console.log(params);
})

myarray.forEach( (item) =>{             //Arrow function    
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}
myarray.forEach(printMe)

myarray.forEach( (item, index,arr ) => {
    // console.log(item, index, arr);
})

const lanuage = [
    {
        lanuageName : "javascript",
        lanuageFile : "jS"
    },
    {
        lanuageName : "python",
        lanuageFile : "py"
    },
    {
        lanuageName : "C++",
        lanuageFile : "cpp"
    }
]
lanuage.forEach((item) => {
    // console.log(item);      //denotes each object as item
    console.log(item.lanuageName);
});