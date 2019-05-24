function get(url){
  return fetch(url, {
    method: 'GET'
  }).then(res => res.json())
}

export default {
  get
}