// Exercise 1
// An array is a listing of items in a certain order.

// Exercise 2

var groceryList = []
groceryList[0] = 'grapes'
groceryList[1] = 'bread'
groceryList[2] = 'bacon'
groceryList[3] = 'ribeyes'
groceryList[4] = 'brussels sprouts'
groceryList[5] = 'popcorn'
groceryList[6] = 'carrots'
groceryList[7] = 'pomegranates'
groceryList[8] = 'cheese'
groceryList[9] = 'hummus'

console.log(groceryList)
console.log(groceryList[0])
console.log(groceryList[4])

// Exercise 3

var numList1 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
var numList2 = []
var i = 0

while (i < numList1.length) {
  var item = numList1[i]
  numList1.unshift(item)
  console.log(i + ' - ' + item)
  // console.log(i + ' : ' + numList1[i])
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // increment i for the next iteration
  i++
}

console.log(numList2)

// Exercise 4

var people = [
  {
    firstName: 'Lucas',
    lastName: 'Xun'},
  {
    firstName: 'Michaela',
    lastName: 'Devlin'},
  {
    firstName: 'Mose',
    lastName: 'Bodrogi'},
  {
    firstName: 'Heidi',
    lastName: 'Funar'},
  {
    firstName: 'Bede',
    lastName: 'Abasolo'}
];
people.forEach(function(name, index, array) {

}
