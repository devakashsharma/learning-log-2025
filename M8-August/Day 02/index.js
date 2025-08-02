// A simple callback example
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Honey", function() {
    console.log("Welcome to backend learning!");
});