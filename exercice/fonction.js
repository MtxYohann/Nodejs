
// Exercice 1
export const add = (a, b) => a + b;

// Exercice 2
export const getMaxValue = (t) => {
    return Math.max(...t);
}

// Exercice 3 
export const deleteVowels = (str) =>{
    return str.replace(/[aeiou]/gi, '');
}

// Exercice 4
export const sortSentence = (alp) =>{
    return alp.sort()
}

// Exercice 5
export const convertNumber = (num) =>{
    if (num === 1)
    return "un"
    if (num === 2)
    return "deux"
    if (num === 3)
    return "trois"
    if (num === 4)
    return "quatre"
    if (num === 5)
    return "cinq"
    if (num === 6)
    return "six"
    if (num === 7)
    return "sept"
    if (num === 8)
    return "huit"
    if (num === 9)
    return "neuf"
    if (num === 10)
    return "dix"
    if (num === 11)
    return "onze"
}
// correction
export const numberToWord =(n) => {
    const numbers = [
        "zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf"
    ]
    const tens = [
        "","dix",""
    ]
    if (n<20) {
        return numbers[n]
    }
    if (n<100) {
        const unit = n % 10
        const ten = Math.floor(n / 10)
        if (unit === 0) {
            return tens[ten]
        }
        if (unit ===1) {

        }
    }
}

//Exercice 6
export const getKey = (t,key) => {
    const newYo= t.map((obj) => {
    return obj[key]})
    return newYo
}

// Exercice 7
export const sortDescending = (des) =>{
    return des.sort(function(a,b){return b-a})
}

// Exercice 8
export const setCapitalVowels = (otherString) =>{
    return otherString.replace(/[aeiou]/gi, function(l) {
        return l.toUpperCase();
    });
}

// Exercicie 9
export const countVowels = (vow) =>{
    // return vow.math(/[aeiou]/gi).length
    let vowelsCount = 0
    const vowels = ['a','e','i','o','u','y']
    for (let char of vow){
        if (vowels.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount
}

// Exercice 10
export const upconsonants = (cons) =>{
    return cons.replace(/[bcdfghjklmnpqrstvwxyz]/gi, function(l) {
        return l.toUpperCase();
    });
}