const arr = [];
const form = document.getElementById("root-form");
const ul = document.getElementById("list-of-inputs");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target: { email },
    target,
  } = e;
  if (email.value !== "") {
    arr.push(email.value);
    ul.append(createItemLi(email.value));
    target.reset();
  }
});

function createItemLi(value) {
  const li = document.createElement("li");
  li.setAttribute('id',arr);
  li.classList.add("rendered-lis");
  const text = document.createTextNode(value);
  li.append(text);
  li.append(createDltBtn());
  updateBtnList();
  return li;
}

function createDltBtn() {
  const dltBtn = document.createElement('button');
  const text = document.createTextNode("Delete");
  dltBtn.classList.add('delete-btn');
  dltBtn.append(text);
  dltBtn.addEventListener('click', deleteLi());
  return dltBtn
}

function deleteLi({target:{parentElement: parent}}) {
 parent.remove();
}


