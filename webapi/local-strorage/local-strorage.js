const clickHandler = () =>{
  console.log(localStorage.length);
  const value = localStorage.setItem('name', JSON.stringify('pavan'));

}

function getData(key) {
  const value = JSON.parse(localStorage.getItem(key));
  console.log("GetData", value);
}

function updateData(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
  console.log(localStorage);
}

function remove(key) {
  localStorage.removeItem(key);
  console.log(localStorage);
}

function clear() {
  localStorage.clear();
}

function printItemsFromLocalStorage() {
  let keys = Object.keys(localStorage);
  for(let key of keys) {
    consolelog(key. localStorage.getItem(key))
  }
}