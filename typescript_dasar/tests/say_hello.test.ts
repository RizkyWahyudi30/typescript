import { sayHello } from "../src/say_hello";

describe("sayHello", function () {
  it("should return hello wahyu", function () {
    expect(sayHello("wahyu")).toBe("Hello wahyu");
  });
});
