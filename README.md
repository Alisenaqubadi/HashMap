# HashMap Implementation

This project provides a custom implementation of a HashMap data structure in JavaScript. It includes a `HashMap` class that uses linked lists to handle collisions and dynamically resizes the hash table when it becomes too full.

## Features

### HashMap
- **Set Key-Value Pairs**: Add key-value pairs to the hash map.
- **Get Values**: Retrieve values by their keys.
- **Dynamic Resizing**: Automatically resizes the hash table when it reaches 75% capacity.
- **Collision Handling**: Uses linked lists to handle hash collisions.

### Linked Lists
- **Append and Prepend**: Add elements to the end or beginning of the list.
- **Search**: Check if a value exists or find its index.
- **Size and Traversal**: Get the size of the list and traverse its elements.
- **Node Management**: Access and manipulate nodes directly.

## How It Works

1. **Hashing**: Keys are hashed using a custom hash function.
2. **Buckets**: The hash map uses an array of buckets, where each bucket is a linked list.
3. **Collision Resolution**: When multiple keys hash to the same bucket, their values are stored in the linked list.
4. **Dynamic Resizing**: When the hash map is 75% full, it resizes to the next prime number greater than the square of its current size.

## Usage

### Example Code
```javascript
import { HashMap } from "./src/HashMap.js";

const map = new HashMap();

// Adding key-value pairs
map.set("dog", "bark");
map.set("cat", "meow");

// Retrieving values
console.log(map.get("dog")); // Output: "bark"
console.log(map.get("cat")); // Output: "meow"

// Handling collisions
map.set("god", "reverse");
console.log(map.get("god")); // Output: "reverse"

// Dynamic resizing
map.set("x", "value1");
map.set("y", "value2");
map.set("z", "value3");