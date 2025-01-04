const inputBox = document.getElementById("input-container");
const semBox = document.getElementById("sem-container");
const semPoints = [];
const grade = ["O", "A+", "A", "B+", "B", "C", "RA"];
const creditHour = [4, 3, 2, 1];

const gradePoints = [10, 9, 8, 7, 6, 5, 0];

const userGrade = [];
const userCredit = [];
const usergradePoints = [];

async function addsem() {
  const numSem = document.querySelector("#inputbox").value;
  if (numSem.trim()) {
    for (var i = 1; i <= parseInt(numSem); i++) {
      const labelTag = document.createElement("label");
      labelTag.textContent = `Subject ${i}`;
      semBox.appendChild(labelTag);

      const selectTag = document.createElement("select");
      selectTag.setAttribute("name", "semdes");
      selectTag.classList.add("semGrade");

      const creditTag = document.createElement("select");
      creditTag.setAttribute("name", "creditHour");
      creditTag.classList.add("creditValue");

      grade.forEach((optionValue) => {
        const optionFeild = document.createElement("option");
        optionFeild.setAttribute("value", optionValue);
        optionFeild.textContent = optionValue;
        selectTag.appendChild(optionFeild);
        semBox.appendChild(selectTag);
      });

      const cTag = document.createElement("label");
      cTag.textContent = `Credit`;
      semBox.appendChild(cTag);

      creditHour.forEach((optionValue) => {
        const optionFeild = document.createElement("option");
        optionFeild.setAttribute("value", optionValue);
        optionFeild.textContent = optionValue;
        creditTag.appendChild(optionFeild);
        semBox.appendChild(creditTag);
      });

      inputBox.appendChild(semBox);
    }
    const logButton = document.createElement("button");
    logButton.textContent = "Log Values";
    logButton.onclick = logValues;
    semBox.appendChild(logButton);
  } else {
    console.log("Field is not to be Empty");
  }
}

// const grade = ["O", "A+", "A", "B+", "B", "RA"];
// const gradePoints = [10, 9, 8, 7, 6, 0];

async function logValues() {
  const selectValue = document.querySelectorAll(".semGrade");
  const selectCredit = document.querySelectorAll(".creditValue");
  selectValue.forEach((input) => {
    var grade = input.value;
    userGrade.push(grade);
    if (grade === "O") {
      usergradePoints.push(10);
    } else if (grade === "A+") {
      usergradePoints.push(9);
    } else if (grade === "A") {
      usergradePoints.push(8);
    } else if (grade === "B+") {
      usergradePoints.push(7);
    } else if (grade === "B") {
      usergradePoints.push(6);
    } else if (grade === "C") {
      usergradePoints.push(5);
    } else {
      usergradePoints.push(0);
    }
  });

  selectCredit.forEach((input) => {
    userCredit.push(input.value);
  });

  console.log("User Grade selected", userGrade);
  console.log("User Credit selected", userCredit);
  console.log("User Credit Points", usergradePoints);

  creditSelect(userGrade, userCredit, usergradePoints);
}

const result = [userCredit.length];
var totalsum = 0;
var totalCredit = 0;
async function creditSelect(userGrade, userCredit, usergradePoints) {
  for (var i = 0; i < userCredit.length; i++) {
    result[i] = userCredit[i] * usergradePoints[i];
    totalsum +=result[i];
  }
  for(var i=0;i<userCredit.length;i++){
    totalCredit = totalCredit + parseInt(userCredit[i]);
  }
  console.log("total sum",totalsum)
  console.log("total credit : ",totalCredit);

  finalGPA(totalsum,totalCredit);
}


async function finalGPA(totalsum,totalCredit){
  var result = totalsum / totalCredit;
  console.log("Final GPA  ",result);
  const heEle = document.createElement('h1');
  heEle.innerHTML = `GPA Semester is ${Math.ceil(result)}`;
  semBox.appendChild(heEle);
}