export function setId (allComments) {
    let id = 0;
  for (let elem of allComments) {
    elem.setAttribute('id', id)
    id++
    console.log(elem)
  }
}