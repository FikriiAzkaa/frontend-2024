/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */

const users = [{ 
  name:"Azka", 
  age :19,
  major :"Teknik Informatika"
},{
  name:"fadil", 
  age :12,
  major :"Teknik Informatika"
},{
  name:"vikri", 
  age :23,
  major :"Teknik Informatika"
},{
  name:"zia", 
  age :18,
  major :"Teknik Informatika"
},{
  name:"rabbani", 
  age :20,
  major :"Sistem Informasi"
},{
  name:"rio", 
  age :15,
  major :"Sistem Informasi"
} ]
 
console.log (users)
/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const user of users ){
    console.log (`Mahasiswa: ${user.name},umur: ${user.age}, Jurusan: ${user.major}`)
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user)=> {
  users.push(user)
  console.log (`berhasil menambahkan user dengan nama: ${user.name} berhasil menambahkan umur user: ${user.age} 
  berhasil menambahkan jurusan user: ${user.major}`)
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
 if (index >= 0 || index < users.length){
  users[index]=user
  console.log (`user di index ${index} user telah berhasil di update: ${user.name} 
  umur telah berhasil di update: ${user.age} jurusan telah berhasil di update ${user.major}`)
 }
 else {
  console.error(`user ${index} gagal diupdate`);
 }
}


/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  if (index >= 0 || index < users.length){
    users.splice(index, 2)[0]
    console.log (`user ${index.name} telah berhasil dihapus `)
  }
  else{
    console.error(`user ${index} gagal dihapus`);
  }
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
