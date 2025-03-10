// Iteration 1: Names and Input

let hacker1 = 'Kevin'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Pablo'

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, {hacker1.length} characters!`)
}

// Iteration 3: Loops

hacker1 = hacker1.toUpperCase()

let newString = ""

for (let i=0; i < hacker1.length; i++) {
newString = newString + (hacker1[i]) + ' '
}

console.log(newString)

let newString2 = ''

for (let u = hacker2.length - 1; u >= 0; u--) {
newString2 = newString2 + hacker2[u]
}

console.log(newString2)




if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.
`)
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log(`What?! You both have the same name?`)
}