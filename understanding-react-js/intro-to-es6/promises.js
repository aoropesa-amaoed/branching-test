// let arrived = true;
// const grabRide = new Promise((resolve, reject) => {
// if (arrived) {
// resolve('Driver picked you up') // the driver pick u up
// } else {
// reject('Driver cancelled your ride') // the driver cancelled your ride
// }
// })

// grabRide.then((message) => console.log(message)).catch(error => console.log(error))

function getItemFromMarikina() {
    // -> this is the implem for arrow function

    // return new Promise((resolve, reject) => {
    // console.log('retrieving')
    // setTimeout(() => {
    // const item = { brand: 'Nike', price: 7000 }

    // if (item) {
    //     resolve(item)
    // } else {
    //     reject('Failed getting the item')
    // }
    //     console.log('Hello Code Runners after 2.5 seconds')
    // }, 2500)
    // })

    // this is the implem for normal function
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // const item = { brand: 'Nike', price: 7000 }

            // if (item) {
            //     resolve(item)
            // } else {
            //     reject('Failed getting the item')
            // }
            console.log('Hello Code Runners after 2.5 seconds')
        }, 2500)
    })
}

function greet() {
    console.log('Hello World!')
}

getItemFromMarikina()
    .then((item) => console.log('Item successfully retrieved: ', item))
    .catch((error) => console.log('Error: ', error))

greet()