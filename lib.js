// 分割構文(destructuring)

const arr = [1 ,2 ,3]

const [a, b, c, d] = arr

console.log(a, b, c, d)
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

const obj = {
    name: 'Beppu',
    from: 'Japan'
}

// const {name, from} = obj





const fn = ({name, from}) => {
    console.log(`I'm ${name} from ${from}`)
}

fn({name: 'Beppu', from: 'Japan'})