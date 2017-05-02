const people = [
  { name: 'John', age: 25 },
  { name: 'Sam', age: 23 },
  { name: 'Esther', age: 27 },
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}
