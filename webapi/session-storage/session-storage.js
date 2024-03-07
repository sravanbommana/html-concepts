const clickHandler = () =>{
  console.log(sessionStorage.length);
  const value = sessionStorage.setItem('name', JSON.stringify('pavan'));

}

function getData(key) {
  const value = JSON.parse(sessionStorage.getItem(key));
  console.log("GetData", value);
}

function updateData(key, val) {
  sessionStorage.setItem(key, JSON.stringify(val));
  console.log(sessionStorage);
}

function remove(key) {
  sessionStorage.removeItem(key);
  console.log(sessionStorage);
}

function clear() {
  sessionStorage.clear();
}