(function chaiOne() {
    console.log("function chaiOne() - DB Connected");
})();

(function () {
    console.log("function() - DB Connected");
})();

(() => {
    console.log("() => - DB Connected");
})();

((name) => {
    console.log(`() => - DB Connected by ${name}`);
})("Shinigami");
