describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });


  describe("Fizzbuzz", function() {
    it("returns fizz on numbers divisible by 3", function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });

    it("returns buzz on numbers divisible by 5", function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });

    it("returns fizzbuzz on numbers divisible by 3 and 5", function() {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });

    it("returns the number if no Fizz, buzz, fizzbuzz applies", function() {
      expect(fizzBuzz.play(2)).toEqual(2);
    })
  });
});
