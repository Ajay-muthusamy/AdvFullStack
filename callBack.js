// submitForm("Form Submitted Successfully", databaseSharing);

// const databaseSharing = () => {
//     console.log("Data Stored Successfully");
// };

// const submitForm = (formMsg, dbs) => {
//   setTimeout(() => {
//     dbs();
//     console.log(formMsg);
//   }, 2000);
// };

function handleDoctor(msg) {
    console.log(`D: Hi ${msg} I'm the doctor, how can i help you?`);

}

function handlePatent(name) {
  setTimeout(() => {
    console.log(`D : You will be alright! Take these medicines. Take Care !`);
  }, 2000);
}

function greetUser(name, doctorCB, patentCB) {
  console.log("U:Hello ", name);
  doctorCB(name);
  patentCB(name);
}

greetUser("Ajay", handleDoctor, handlePatent);
