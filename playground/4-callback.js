// setTimeout(() => {
//   console.log("hi")
// },2000)

// const names = []

const add = (a,b,callback) => {
  setTimeout(() => {
   callback(a+b)
  },2000)
}

add(1,4,(sum) => {
  console.log(sum)
})