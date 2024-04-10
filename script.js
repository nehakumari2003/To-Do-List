const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask() {
  //This function is used to add a task to the todo lis
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  // to clear the input field after adding a task
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    // To check a task
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();

      // To remove a task
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// To save all task to a local storage in our browser
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

//To display the saved tasks whenever our browser is loaded
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();