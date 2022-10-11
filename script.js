var selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
  }
}

// retreive data
function readFormData() {
  var formData = {};
  FormData["studentId"] = document.getElementById("studentId").value;
  FormData["fullName"] = document.getElementById("fullName").value;
  FormData["course"] = document.getElementById("course").value;
  FormData["age"] = document.getElementById("age").value;
  return formData;
}

// insert data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);

  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.studentId;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.fullName;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.course;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.age;

  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button>Edit</button> <button>Delete</button> <button>Save</button>`;
}
