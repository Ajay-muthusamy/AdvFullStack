// locationFinder = () => {
//   let train = 7;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (train == 7) {
//         resolve("Train Arrived");
//       } else {
//         reject("Train is not Arrived");
//       }
//     }, 2000);
//   });
// };
// // locationFinder()
// //   .then((resolveMsg) => {
// //     console.log(resolveMsg);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// console.log(locationFinder())

function isTimeExit(time) {
  t1 = 999;
  return t1 <= time;
}
function isValidLocation(loc) {
  location = "vagamon";
  return loc == location;
}
function locationMap() {
  loc = "vagamon";
  time = 1000;

  return new Promise((locFound, locNotFound) => {
    setTimeout(() => {
      if (isValidLocation(loc) && isTimeExit(time)) {
        locFound("location Found");
      } else {
        locNotFound("Location is not Found !");
      }
    }, time);
  });
}
locationMap()
  .then((resolvedMsg) => {
    console.log(resolvedMsg);
  })
  .catch((e) => {
    console.log(e);
  });


//Task