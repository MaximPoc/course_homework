var Word = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"]
var Aa_words = /^[^Aa]{6,}$/ // валідація на Аа та кількість символів 
for (var i = 0; i < Word.length; i++) { // цикл перевірок слів в масиві 
    if (Aa_words.test(Word[i])) { 
        console.log(Word[i]); // виводимо значення, акі пройшли валідацію
    }
}
