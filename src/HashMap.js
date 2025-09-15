import { linkedLists } from './linked-lists.js'

class HashMap {
  bucketSize = 39
  buckets = new Array(this.bucketSize)
  newBuckets

  reset(key, value) {
    const newKey = hash(key)
    const modelOfKey = newKey % this.newBuckets.length

    if (!(this.newBuckets[modelOfKey] instanceof linkedLists)) {
      this.newBuckets[modelOfKey] = new linkedLists()
    }

    this.newBuckets[modelOfKey].append({
      key: key,
      value: value,
    })
  }

  set(key, value) {
    if (if75PercentFull(this.buckets)) {
      const newSize = nextPrimeAfterSquare(this.bucketSize)
      this.newBuckets = new Array(newSize)

      for (let i = 0; i < this.buckets.length; i++) {
        let current = this.buckets[i]?.getNode()

        while (current) {
          const rekey = current.value.key
          const revalue = current.value.value

          this.reset(rekey, revalue)

          current = current.next
        }
      }
      this.buckets = this.newBuckets
      this.bucketSize = newSize
    }

    const newKey = hash(key)
    const modelOfKey = newKey % this.buckets.length

    if (!(this.buckets[modelOfKey] instanceof linkedLists)) {
      this.buckets[modelOfKey] = new linkedLists()
    }

    let current = this.buckets[modelOfKey]?.getNode()
    while (current) {
      if (current.value.key === key) {
        current.value.value = value
        return
      }
      current = current.next
    }

    this.buckets[modelOfKey].append({
      key: key,
      value: value,
    })
  }

  get(key) {
    const newKey = hash(key)
    const modelOfKey = newKey % this.buckets.length
    let bucket = this.buckets[modelOfKey]?.getNode()

    while (bucket) {
      if (bucket.value.key === key) {
        return bucket.value.value
      }
      bucket = bucket.next
    }
    return null
  }
}

function hash(key) {
  let hashCode = 0
  const primeNumber = 3
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i)
  }
  return hashCode
}

function nextPrimeAfterSquare(num) {
  let newNum = num * num + 1
  while (!isPrime(newNum)) {
    newNum++
  }
  return newNum
}

function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}

function if75PercentFull(arr) {
  let filled = 0
  arr.forEach((el) => {
    if (el !== undefined) filled++
  })

  return filled / arr.length >= 0.75
}

export { HashMap }
