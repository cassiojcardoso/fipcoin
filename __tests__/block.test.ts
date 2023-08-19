import Block from "../src/lib/block";

describe("Block test", () => {
  test('Shoud be valid', () => { 
    const block1 = new Block(1, "abc");
    const valid = block1.isValid();

    expect(valid).toBeTruthy();
  })

  test("Should not be valid hash", () => {
    const block1 = new Block(1, "");
    const valid = block1.isValid();

    expect(valid).toBeFalsy();
  })
  
  test("Should not be valid index", () => {
    const block1 = new Block(-1, "abc");
    const valid = block1.isValid();

    expect(valid).toBeFalsy();
  })
})