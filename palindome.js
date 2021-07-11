

function palindrome(str) {

    
    const av = string.split('');
    const rav=av.reverse();
    const r = rav.join('');

    if(string == r) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
   const string = prompt('Enter a string: ');

palindrome(string);