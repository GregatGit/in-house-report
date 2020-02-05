// find out name by email

export function findUserName(email, arr) {
  for (let i = 0; i < arr.length; i++){
    if( arr[i].email === email){
      return arr[i].name
    }
  }
  return null
}