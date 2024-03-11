
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

export const sortDescending = (des) =>{
    return des.sort(function(a,b){return b-a})
}


export const upVowels = (up) =>{
    return up.replace(/[aeiou]/gi, function(l) {
        return l.toUpperCase();
    });
}