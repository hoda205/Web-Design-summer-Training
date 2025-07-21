// function is_find(arr ,num){
// var find_element=arr.find((item)=>item>num)   
// if(find_element!= undefined)
//     return true
// else{ arr.push(++num)
//     return false
// }


// }


// var num=prompt()
// var arr=[5,2,3,9,8,7,100,26,45]
// console.log(is_find(arr,num))
// console.log(arr)
function adduser(Name, id, balance, users) {
    let user = {
        Name: Name,
        ID: id,
        Balance: balance

    };
    users.push(user)

}
function editBalanceById(users) {
  do { var id = prompt("Enter valid id of user to change balance")
    var newBalance = prompt('Enter the new balance')
    var index = users.findIndex((item) => item.ID == id)}
    while (index == -1) 
    users[index].Balance = newBalance
}
function deleteUser(users) {
   do{ var id = prompt('Enter valid id that will be deleted')
    var index = users.findIndex((item) => item.ID == id)}
    while (index == -1) 
       
    
    users.splice(index, 1)

}

var usersNumber = prompt("enter users number")
var users = []
for (var i = 0; i < usersNumber; i++) {
    var Name = prompt("enter your name")
    var id = prompt("enter your id")
    var balance = prompt("enter your balance")
    adduser(Name, id, balance, users)
}
console.table(users)
editBalanceById(users)
console.table(users)
deleteUser(users)
console.table(users)