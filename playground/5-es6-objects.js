//Object property shorthand

const name = "Andrew"
const userAge = 27

const user = {
  name,     //shorthand 
  age: userAge,
  location: "Vaasa"
}

console.log(user)

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 200,
  salePrice: undefined,
  rating: 4.2
}

const {label: productLabel, stock} = product
console.log(productLabel)

const transaction = (type, {label, stock}) => {
  console.log(type, label, stock)
}

transaction('order', product)