
type X = number
type Y = number

type XY = X & Y

type XorY = X | Y

const nothing = ''

const x = `something_${nothing}`

console.log(`${(({x}) => { return x })({x: 'x'})}`) 


