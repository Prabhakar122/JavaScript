// Immediately Invoked Function Expression (IIFE)

// named IIFE
(function DBconnection() {
    console.log(`DB is connected`);
})();


// Arrow IIFE with parameter
(  (name) => {
    console.log(`DB is connected ${name}`);
    
})("Successfully")