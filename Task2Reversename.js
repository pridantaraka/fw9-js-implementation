var str = 'Welcome to JavaScript';
    function reverseByWord(s){
    return s.split(" ").reverse().join(" ");
    }
  console.log(reverseByWord(str));