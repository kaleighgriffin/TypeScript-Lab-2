// import { Greeter } from "./greeter";
import { LoudGreeter } from "./loudgreeter";

describe("LoudGreeter", function () {

    test("greet without addVolume", () => {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        expect(loudGreeter.greet("Kaleigh")).toBe("Hi, Kaleigh!!!");
    });

    test("greet with addVolume x1", () => {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        loudGreeter.addVolume();
        expect(loudGreeter.greet("Kaleigh")).toBe("Hi, Kaleigh!!!!");
    });

    test("greet with addVolume x3", () => {
        let loudGreeter: LoudGreeter = new LoudGreeter("Hi");
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        loudGreeter.addVolume();
        expect(loudGreeter.greet("Kaleigh")).toBe("Hi, Kaleigh!!!!!!");
    });

});