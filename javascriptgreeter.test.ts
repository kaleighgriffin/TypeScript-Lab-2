// import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./javascriptgreeter";

describe("JavaScriptGreeter", function () {

    test("Greeting 4", () => {
        let jsGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
        expect(jsGreeter.greet("Kaleigh")).toBe("console.log('Hello, Kaleigh!')");
    });

    test("Greeting 5", () => {
        let jsGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hi");
        expect(jsGreeter.greet("friend")).toBe("console.log('Hi, friend!')");
    });

    test("Greeting 6", () => {
        let jsGreeter: JavaScriptGreeter = new JavaScriptGreeter("What's up");
        expect(jsGreeter.greet("dude")).toBe("console.log('What's up, dude!')");
    });

});