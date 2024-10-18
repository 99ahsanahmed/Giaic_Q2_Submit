// function addNewWork(){

//     let newNode = document.createElement("textarea")
//     newNode.classList.add("workexp");
//     newNode.setAttribute("row" , 4)

//     let workBtn = document.getElementById("work_btn");
//     let workDiv = document.getElementById("workExpDiv");

//     workDiv.insertBefore(newNode , workBtn)
// }

// // Acdemic Div
// function addNewAcad() {
//   let newQual = document.createElement("textarea");
//   newQual.classList.add("academic_qual");
//   newQual.id="academic_field";
//   newQual.setAttribute("row", 4);

//   let acadBtn = document.getElementById("academic_btn");
//   let academicDiv = document.getElementById("acad_div");

//   academicDiv.insertBefore(newQual, acadBtn);
// }

// Generate CV
function generate(){
  //let academic_div = document.getElementById("acad_div");
  let username = document.getElementById("username").value;
  let number = document.getElementById("number").value;
  let mail = document.getElementById("mail").value;
  let address = document.getElementById("address").value;
  let facebook = document.getElementById("facebook").value;
  let instagram = document.getElementById("instagram").value;
  let linkedin = document.getElementById("linkedin").value;
  let objective = document.getElementById("objective").value;
  let workexp_field = document.getElementById("workexp_field").value;
  let academic_field = document.getElementById("academic_field").value;

  document.getElementById("name_display").textContent = username;
  document.getElementById("number_display").textContent = number;
  document.getElementById("mail_display").textContent = mail;
  document.getElementById("address_dis").textContent = address;

  document.getElementById("fb_display").href = facebook;
  document.getElementById("insta_display").href = instagram;
  document.getElementById("linkedin_display").href = linkedin;

  document.getElementById("objective_dis").textContent = objective;
  document.getElementById("qualification_dis").textContent = workexp_field;
  document.getElementById("academics_dis").textContent = academic_field;

  document.getElementById("main").style.display="none";
  document.getElementById("cv-tempelate").style.display = "flex";
}

function printCv(){
  window.print()
}