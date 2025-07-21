// console.log("hello world")
// var firstName = "huda"
// var lastName = "Khalil"
// var fullName = `${firstName} ${lastName}`
// console.log(fullName)
// var n1 = 2;
// (n1 % 2 == 0) ? console.log("isEven") : console.log("isOdd")
// console.log(typeof n1)
// var isMale = prompt("gender?");
// // (isMale=="male")?console.log( true):console.log(flase)
// if (isMale == "male")
//     console.log("He is a male")

// else console.log("she is female")

// var char = prompt("Enter a charcter")
// switch (char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     case 'A':
//     case 'E':
//     case 'I':
//     case 'O':
//     case 'U': console.log("is vowel")
//         break
//     default: console.log("is not vowel")

// }
// var n = prompt("the sum of the pre number of ?")
// var sum = 0
// for (var i = 1; i < n; i++) {
//     sum += i
// }
// console.log(sum)

function looping(start , end , breakNum , contNum ){
    if (start  && end  && breakNum  && contNum )
        for (var i = start; i <= end; i++) {
            if (i == contNum) continue
            else if (i == breakNum)break
            else console.log(i)
        }
    else console.log("Enter all numbers")

}
looping(1, 8, 7, 3)
looping(1, 8, 7)
looping(1, 8)
looping(1)
looping()
