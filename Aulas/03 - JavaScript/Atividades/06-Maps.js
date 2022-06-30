const funcionarios = new Map([
  ['Bruno', 'Admin'],
  ['Thiago', 'Admin'],
  ['Ana', 'User'],
  ['Marcus', 'User'],
  ['Jhone', 'User']
])

function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }

  return admins
}

console.log(getAdmins(funcionarios))
