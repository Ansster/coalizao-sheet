function change(id, value) {
  const el = document.getElementById(id);
  let current = parseInt(el.innerText);
  el.innerText = current + value;
}
