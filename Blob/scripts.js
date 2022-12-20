//Working
function fadeIn() {
  document.getElementById('message').classList.add('fade-in');
}

function countingTimer() {
  let count = 0;
  let maxCount = 4;
  let messages = ['inhale', 'hold breath', 'exhale'];
  let messageIndex = 0;

  setInterval(function() {
    document.getElementById('count').innerHTML = count;
    count++;

    if (count > maxCount) {
      if (maxCount === 4) {
        maxCount = 7;
        messageIndex = 1;
      } else if (maxCount === 7) {
        maxCount = 8;
        messageIndex = 2;
      } else {
        maxCount = 4;
        messageIndex = 0;
      }
      count = 0;
      setTimeout(function() {
        document.getElementById('message').innerHTML = messages[messageIndex];
        fadeIn();
      }, 1000);
    } else if (count === 1) {
      fadeIn();
    }
  }, 1000); // 1000 milliseconds = 1 second
}

countingTimer();


//Broken fade in and fade out

// function fadeOut() {
//   document.getElementById('message').classList.add('fade-out');
// }

// function fadeIn() {
//   document.getElementById('message').classList.add('fade-in');
// }

// function countingTimer() {
//   let count = 0;
//   let maxCount = 4;
//   let messages = ['inhale', 'hold breathe', 'exhale'];
//   let messageIndex = 0;

//   setInterval(function() {
//     document.getElementById('count').innerHTML = count;
//     count++;

//     if (count > maxCount) {
//       if (maxCount === 4) {
//         maxCount = 7;
//         messageIndex = 1;
//       } else if (maxCount === 7) {
//         maxCount = 8;
//         messageIndex = 2;
//       } else {
//         maxCount = 4;
//         messageIndex = 0;
//       }
//       count = 0;
//       fadeOut();
//       setTimeout(function() {
//         document.getElementById('message').innerHTML = messages[messageIndex];
//         fadeIn();
//       }, 250);
//       setTimeout(function() {
//         document.getElementById('message').classList.remove('fade-out');
//       }, 500);
//     }
//   }, 1000); // 1000 milliseconds = 1 second
// }

// countingTimer();

