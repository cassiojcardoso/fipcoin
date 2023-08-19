/**
 * Block class
 */
export default class Block {
  public index: number = 1;
  public hash: string = "";

  /**
   * Create a new block
   * @param index C
   * @param hash 
   */
  constructor(index: number, hash: string) {
    this.index = index;
    this.hash = hash;
  }

  /**
   * Validate the block
   * @returns Returns true if the block is valid
   */
  isValid(): boolean {
    if (this.index < 0) return false;
    if (!this.hash) return false;
    return true;
  }
}