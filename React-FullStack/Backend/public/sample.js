const div = document.getElementById("array-container");
const div1 = document.getElementById("fetch-container");
var data = ["BMW", "Audi", "Mustang", "Tata"];
var fetchArr = [];

function GenerateArray() {
  const ul = document.createElement("ul");
  data.forEach((data) => {
    const li = document.createElement("li");
    li.textContent = data;
    li.classList.add('li-style')
    ul.appendChild(li);
    console.log(data);
  });
  div.appendChild(ul);
}

GenerateArray();

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      fetchArr.push(...data); 
      console.log("Data fetched:", fetchArr);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}

function uploadData() {
  fetchArr.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item.title; 
    div1.appendChild(p);
    console.log("Appended:", item.title);
  });
}


fetchData().then(() => {
  uploadData();
});