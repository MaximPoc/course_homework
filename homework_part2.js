var Word = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"]
var Aa_words = /^[^Aa]{6,}$/
var WithoutAa = []
for (var i = 0; i < Word.length; i++) {
    if (Aa_words.test(Word[i])) {
        console.log(Word[i]);
    }
}
