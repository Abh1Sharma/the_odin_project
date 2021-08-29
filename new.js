// function favoriteAnimal(animal) {
//     console.log(animal + " is my favorite animal!")
//   } and add five
  
//   favoriteAnimal('Goat')
  
//       function add7(a){
//           console.log(a+7)
//       }
//       add7(4);
  
//       function multiply(a,b){
//           result = a*b;
//           console.log(result);
//       }
//       multiply(3,4) and add 2
  
//       function capitalize(input){
//           return input.charAt(0).toUpperCase() + input.slice(1);
//       }
      
//       console.log(capitalize('guys'));
      
//   //     function capitalizeFirstLetter(string) {
//   //   return string.charAt(0).toUpperCase() + string.slice(1);
//   // }
  
//   // console.log(capitalizeFirstLetter('het')); // Foo
  
//       // function lastLetter(input){
//       //     var = "these nuts";
  
//       //     index = input.length - 1;
//       //     return input - input.charAt(index) + input.charAt(index).toUpperCase() ;
          
//       // }
//       //     console.log(lastLetter('heyy'));
  
  
//           // function capitalizeLast(input){
//           //     return input.charAt(input.length) + string.slice(-1);
  
//           // }
  
//           // console.log(capitalizeLast('hiii'));
  
//   // //capitalize only the first letter of the string. 
//   // function capitalizeFirstLetter(string) {
//   //     return string.charAt(0).toUpperCase() + string.slice(1);
//   // }
//   // //capitalize all words of a string. 
//   // function capitalizeWords(string) {
//   //     return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
//   // };
  
//   // const string4 = "tHIS STRING'S CAPITALISATION WILL BE FIXED."
//   // const string4 = string[0].toUpperCase() + string.slice(1)
  
  
  
//   // function last(inputString){
  
//   //     newString = inputString - (inputString.charAt(inputString.length - 1))
//   //     + inputString.charAt(inputString.length - 1).toUpperCase()
  
//   //     return newString;
//   //     console.log(last(inputString));
//   // }
  
//   // console.log(last("hi"));
  
  
//   const upperLower = function(string){
//     let newString ="", newChar ="";
//     for (let i=string.length; i > 0; i--) {
//       if (string.charAt(i) === " ") {
//         newChar = " "
//       } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
//         newChar = string.charAt(i).toLowerCase()
//       } else {
//         newChar = string.charAt(i).toUpperCase()
//       }
//      newString += newChar;
//     }
  
//     return newString;
//   }
  
//   console.log(upperLower("hELLO"));
  
  
//   let myWord = prompt('Enter a word. The last letter will be returned.');
  
//       lastLetter(myWord);
  
//       function lastLetter(myWord) {
//         let letter = myWord.slice(-1);
//         console.log(letter);
//         return letter;
//       }

    //   function titleCase(str) {
    //     var splitStr = str.toLowerCase().split(' ');
    //     for (var i = str.length-1; i > 0; i--) {
    //         // You do not need to check if i is larger than splitStr length, as your for does that for you
    //         // Assign it back to the array
    //         splitStr[i] = splitStr[i].charAt(str.length-1).toUpperCase() + splitStr[i].substring(1);     
    //     }
    //     // Directly return the joined string
    //     return splitStr.join(' '); 
    //  }
     
    //  console.log(titleCase("hiii"));
  
  
    //   function lastLetter(string){
    //       let x= string.charAt(string.length-1).toUpperCase();
    //       return string.slice(0,string.length-1) + x;

          
    //   }
    //   console.log(lastLetter("junne is gay"));

    //   function lastLetters(string2){
    //     for(let i = 0; i<string2.length-1; i++){
    //         if(i = " "){

    //         }
    //     }

        
    // }
    // console.log(lastLetter("junne is happpy"));

    // function titleCase(str) {
    //     let splitStr = str.toLowerCase().split(' ');
    //     for (let i = splitStr.length-1 ; i > 0 ; i--) {
    //         // You do not need to check if i is larger than splitStr length, as your for does that for you
    //         // Assign it back to the array
    //         splitStr[i] = splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);     
    //     }
    //     // Directly return the joined string
    //     return splitStr.join(' '); 
    //  }
     
    //  console.log(titleCase("I'm a little tea pot"));

    //  function toLower(stry){

        
    //       splitted = stry.toUpperCase().split(' ');
    //       console.log(splitted.length);
    //       for(let i = 0; i<=splitted.length; i++){
    //           if(splitted.charAt(i) = splitted.charAt(i) )
    //       }
    //  }
    //  console.log(toLower("hi i am gat"));

    // //  for(let i = 0; i<splitted.length)



    // function converting(string){
    //     splitted = string.split(' ');
    //     for(let i = 0; i<=splitted.length-1; i++){
    //         for(let j = 0; j<=)
    //     }
    // }
    // console.log(converting("hii my name is abhi"))
// console.log("hi");


// function yay () {
//     var input = "party like its 2015";
  
//     input = input.toLowerCase().split(" ");
//     for(let i = 0 ; i < input.length ; i++){
//       let len = input[i].length-1;
//       input[i] = input[i].substring(0, len) + input[i].substr(len).toUpperCase();
//     }
//     return input.join(" ");
//   }
  
//   console.log(yay());

  function changer(inputs){
      inputs= inputs.toLowerCase().split(" ");
      for(let z = 0; z<inputs.length ; z++){
          let lent = inputs[z].length-1;
          inputs[z] = inputs[z].substring(0,lent) + inputs[z].substring(lent).toUpperCase();
      }
      return inputs.join(" ");
  }

  console.log(changer("Hii my name is abhi"));



  function okay(stringyy){
    let lengthy = stringyy.charAt(stringyy.length-1).toUpperCase();
    return stringyy.slice(0,stringyy.length-1) + lengthy;
  }
  console.log(okay("Hi my name is abhi"));