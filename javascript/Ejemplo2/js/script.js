var msg = "en Global";
console.log("GLOBAL: mensaje = "+ msg);

// function a(){...}
var a = function (){
    var msg = " en a";
    console.log("a: mensaje = " + msg);

    function b(){
        console.log("b: mensaje = " + msg)
    }

    b();
}

a();