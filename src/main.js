import { HashMap } from './HashMap.js'

const Map = new HashMap()

Map.set('s', 'nothing as now')
console.log(Map.get('s'))

// Test 1
Map.set('dog', 'first')
Map.set('god', 'also first')
console.log('dog:', Map.get('dog')) // "first"
console.log('god:', Map.get('god')) // "second"

// Test 2
Map.set('cat', 'meow')
Map.set('tac', 'reverse')
console.log('cat:', Map.get('cat')) // "meow"
console.log('tac:', Map.get('tac')) // "reverse"

// Test 3
Map.set('aa', 'double a')
Map.set('bb', 'double b')
console.log('aa:', Map.get('aa')) // "double a"
console.log('bb:', Map.get('bb')) // "double b"

// Test 4 (3 collisions in same bucket)
Map.set('x', 'are')
Map.set('u', 'you')
Map.set('k', 'kay')
console.log('x:', Map.get('x')) // "ex"
console.log('u:', Map.get('u')) // "you"
console.log('k:', Map.get('k')) // "kay"
