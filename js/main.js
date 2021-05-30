let liczba = 150

function dowolna(n) {
    if (n > 100) {

        if (n <= 200) {
            let result = 'liczba znajduje sie w przedziale 100-200';
            return result;
        }
        else {
            let result = 'liczba NIE znajduje sie w przedziale 100-200';
            return result;
         }
    }

    else {
       let result = 'liczba NIE znajduje sie w przedziale 100-200';
       return result;
    }
}

console.log(dowolna(liczba));