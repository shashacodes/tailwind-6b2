// createElement

const body = document.querySelector('body')
const unordered = document.createElement('ul')
const list = document.createElement('li')

body.append(unordered)
unordered.append(list)

unordered.setAttribute('class', 'food drink')

const myName = 'sharon ibanga'
const age = 50

list.textContent = 'sharon ibanga'
list.textContent = `my name is ${myName.toUpperCase()},and it has ${myName.length} characters, my age has ${age}. my name contains a country named ${myName.slice(7,10)}. I can change iba with ma to get ${myName.replace('iba', 'ma').toUpperCase()}.Does my name start with 's', ${myName.startsWith('s')}. The character at number 10 is ${myName.charAt(10)}.The last character in my name is ${myName[myName.length-1]}`

const aph = 'the quick brown fox jumps over the lazy dog'


// list.textContent = aph[aph.indexOf('h')] +
// aph[aph.indexOf('e')] + aph[aph.indexOf('l')] +
// aph[aph.indexOf('l')] + aph[aph.indexOf('o')] + 
// aph[aph.indexOf(' ')] + aph[aph.indexOf('u')] + 
// aph[aph.indexOf('n')] + aph[aph.indexOf('i')] + 
// aph[aph.indexOf('v')] + aph[aph.indexOf('e')] + 
// aph[aph.indexOf('l')]


const food = document.getElementsByClassName('food')

food[0].style.background = "purple"
food[0].style.padding = "5em"
// food[0].style.textTransform = "uppercase"
food[0].style.fontSize = "5rem"
food[0].style.color = "yellow"
