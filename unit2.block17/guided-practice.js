class Sentence {
  data;
wordsArray;
  constructor(givenData) {
    // the argument passed through the instructor
    this.data = givenData;
  }
  getWordCount() {
    // this function will access data
    if (this.data) {
      let wordsArray = this.data.split(" ");
      return wordsArray.length;
    }
    return 0;
  }
  hasLetter(letter) {
    return this.data.includes(letter);
  }
  getLetterCount(letter) {
    if (!this.hasLetter) {
      return 0;
    }
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === letter) {
        count++;
      }
    }
    stats(){
        if (this.getWordCount > 0){
            this.wordsArray.array.forEach(word => {
                if (obj[word] === undefined) {
                    obj[word] = 0;
                }
                obj[word]++;
            });
            return obj;
        }
    }
  }

}

let givenData = prompt("Enter a sentence");
const mySentence = new Sentence(givenData);
console.log(mySentence.getWordCount());
// this is a boolean, prints true if sentence has "z", and false if not
console.log(mySentence.hasLetter("z"));
console.log(mySentence.getLetterCount)("z");
