
function convertToRoman() {
    let rom = ["MMM", "MM", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let arab = [3000,2000,1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let str = '';
    let resultado = document.querySelector('.conversor__resultado');
    let input = document.getElementById('numArab');
    let num = input.value;
    let regex = /[0-9]/g;
    if(regex.test(num)=== false|| num === '' || num == 0){
        resultado.innerHTML = 'Digite um número de 1 a 3999.'
    }else if(num > 3999){
        resultado.innerHTML = 'Digite um número menor que 3999';
    }else{
        for(let i = 0;i<arab.length;i++){
            if(num>=arab[i]){
                while(num>=arab[i]){
                num = num-arab[i];
                str = str+rom[i];
                }
            }
        }
        resultado.innerHTML = str;
    }
    
  }

  document.getElementById('btn').addEventListener('click', convertToRoman);