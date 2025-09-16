# HashMap Implementation

This project provides a custom implementation of a HashMap data structure in JavaScript. It includes a `HashMap` class that uses linked lists to handle collisions and dynamically resizes the hash table when it becomes too full.

## Features

### HashMap

- **set(key, value)**: Add or update a key-value pair in the hash map.  
- **get(key)**: Retrieve a value by its key. Returns `null` if not found.  
- **has(key)**: Check if a key exists in the hash map. Returns `true` or `false`.  
- **remove(key)**: Remove a key-value pair by its key. Returns the removed node or `false` if not found.  
- **length()**: Returns the total number of key-value pairs in the hash map.  
- **keys()**: Returns an array of all keys.  
- **values()**: Returns an array of all values.  
- **entries()**: Returns an array of `[key, value]` pairs.  
- **clear()**: Resets the hash map back to its initial state.  
- **Dynamic Resizing**: Automatically resizes when the hash map reaches 75% capacity.  

### Linked Lists

- **append(value)**: Add a new node at the end.  
- **prepend(value)**: Add a new node at the beginning.  
- **removeAt(index)**: Remove a node at a specific index.  
- **getNode()**: Retrieve the head node.  
- **search / traversal**: Iterate or find elements in the list.  

## How It Works

1. **Hashing**: Keys are hashed with a custom function.  
2. **Buckets**: Each bucket is a linked list, allowing multiple entries per index.  
3. **Collision Resolution**: Collisions are handled via chaining (linked lists).  
4. **Dynamic Resizing**: When the table is 75% full, it resizes to the next prime number greater than the square of its current size.  

## Usage

### Example Code

```javascript
import { HashMap } from './src/HashMap.js'

const map = new HashMap()

// Adding key-value pairs
map.set('dog', 'bark')
map.set('cat', 'meow')

// Retrieving values
console.log(map.get('dog')) // "bark"
console.log(map.get('cat')) // "meow"

// Checking if a key exists
console.log(map.has('dog')) // true
console.log(map.has('bird')) // false

// Removing a key
map.remove('cat')
console.log(map.get('cat')) // null

// Getting all keys, values, and entries
console.log(map.keys())    // ["dog"]
console.log(map.values())  // ["bark"]
console.log(map.entries()) // [["dog", "bark"]]

// Clearing the map
map.clear()
console.log(map.length()) // 0
