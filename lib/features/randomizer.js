const mRandSeed = 1234;

const createRandomizer = () => {
  const randomizer = {
    seed: mRandSeed,

    arrayShuffle(options) {
      const {arr, sampleSize} = options;
      for (let i = 0; i < sampleSize; i++) {

        this.seed = (214013 * this.seed + 2531011) % (1 << 31);
        let k = (this.seed >> 16) & 0x7fff;
        k = k % arr.length;

        /*
        this.seed = (214013 * this.seed + 2531011);
        this.seed = (this.seed >> 16) & 0x7FFF;
        let k = this.seed;
        k = k % arr.length;
        */

        let tmp = arr[i];
        arr[i] = arr[k];
        arr[k] = tmp;
      }
    }
  }
  return randomizer;
}

module.exports = {
  createRandomizer
}