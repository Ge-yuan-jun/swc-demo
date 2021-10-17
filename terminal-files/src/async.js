const fetch = require('node-fetch')

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await res.json()
  console.log('data', json)
}

getData()