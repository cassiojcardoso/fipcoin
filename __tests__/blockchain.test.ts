import Blockchain from "../src/lib/blockchain";

describe("Blockchain tests", () => {
  test("Should has genesis block", () => {
    const blockchain = new Blockchain();

    expect(blockchain.blocks.length).toEqual(1);

  })
})