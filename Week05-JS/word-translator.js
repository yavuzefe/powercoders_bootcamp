const helloWorld = (lang) => {
    switch (lang) {
        case "de":
            console.log("Hallo Welt");
            break;
        case "tr":
            console.log("Merhaba Dunya");
            break;
        case "es":
            console.log("Hola Mundo");
            break;
        default:
            console.log("Hello World");
            break;
    }
}
helloWorld();
helloWorld("es");
helloWorld("de");
helloWorld("tr");
