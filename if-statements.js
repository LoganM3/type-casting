// let animal = 'cat'
// animal = 'dog'

// if (animal === 'dog'){
//     console.log('woof')
// }else {
//     console.log('your animal is ', animal)
// }
 
// let person = 'Mammal'

// if( person === 'mammal'){
//     console.log('yes thought so')
// }else if(person && false){
//     console.log('not sure')
// }else{
//     console.log('this is catch all')
// }

/*** Date */

const date = new Date()
console.log(date)

const time = date.getTime()
console.log(time)

const hours = date.getHours()
console.log(hours)

if(hours > 12){
    console.log( 'is past lunch time')
}else if(hours <= 11.5){
    console.log('is almost lunch time')
}

const today = date.getDate()
console.log(today)

if(today === 12) console.log('Happy july 12th')