const req = {
    body: {
        name: 'Azka',
        age: 20,
        major: 'informatika'
    }
}

const {name, age: umur, major} = req.body
console.log(name, umur, major)

const family = ['Michael','Hannah','Jonas']

const [suami, istri, anak] = family
console.log(suami, istri, anak)