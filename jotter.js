
//     function num () {
//     let x = prompt ('give me a number')

//      if ( x % 2 === 0 && x % 3 === 0){
//         alert('fizzbuzz')
//     }
//    else if (x % 2 === 0){
//     alert('fizz')
// }
// else  if (x % 3 === 0){
//     alert('buzz')
// }
// else {
//     alert(x)
// }
// }
// num()





function num(){
    let x = prompt ('give me a number')
 x % 2 == 0 && x % 3 === 0 ? alert('fizzbuzz') : x % 3 == 0 ? alert('buzz') : x % 2 === 0 ? alert('fizz'): alert(x)
 
}
num()