const input = document.querySelector('#input-arab');
const resultArea = document.querySelector('#result');

let r = [
   'I', 'V', 'X', 'L', 'C', 'D', 'M'
]

function convert() {
   if (input.value.length === 1) {
      let number = +input.value;

      switch (number) {
         case 1:
            resultArea.innerHTML = r[0];
            break;
         case 2:
            resultArea.innerHTML = r[0] + r[0];
            break;
         case 3:
            resultArea.innerHTML = r[0] + r[0] + r[0];
            break;
         case 4:
            resultArea.innerHTML = r[0] + r[1];
            break;
         case 5:
            resultArea.innerHTML = r[1];
            break;
         case 6:
            resultArea.innerHTML = r[1] + r[0];
            break;
         case 7:
            resultArea.innerHTML = r[1] + r[0] + r[0];
            break;
         case 8:
            resultArea.innerHTML = r[1] + r[0] + r[0] + r[0];
            break;
         case 9:
            resultArea.innerHTML = r[0] + r[2];
            break;
      }

      input.value = ''

   } else if (input.value.length === 2) {

      let numbers = input.value.split('');

      let d = +numbers[0];
      let u = +numbers[1];

      switch (d) {
         case 1:
            resultArea.innerHTML = r[2];
            break;
         case 2:
            resultArea.innerHTML = r[2] + r[2];
            break;
         case 3:
            resultArea.innerHTML = r[2] + r[2] + r[2];
            break;
         case 4:
            resultArea.innerHTML = r[2] + r[3];
            break;
         case 5:
            resultArea.innerHTML = r[3];
            break;
         case 6:
            resultArea.innerHTML = r[3] + r[2];
            break;
         case 7:
            resultArea.innerHTML = r[3] + r[2] + r[2];
            break;
         case 8:
            resultArea.innerHTML = r[3] + r[2] + r[2] + r[2];
            break;
         case 9:
            resultArea.innerHTML = r[2] + r[4];
            break;
      }

      switch (u) {
         case 1:
            resultArea.innerHTML += r[0];
            break;
         case 2:
            resultArea.innerHTML += r[0] + r[0];
            break;
         case 3:
            resultArea.innerHTML += r[0] + r[0] + r[0];
            break;
         case 4:
            resultArea.innerHTML += r[0] + r[1];
            break;
         case 5:
            resultArea.innerHTML += r[1];
            break;
         case 6:
            resultArea.innerHTML += r[1] + r[0];
            break;
         case 7:
            resultArea.innerHTML += r[1] + r[0] + r[0];
            break;
         case 8:
            resultArea.innerHTML += r[1] + r[0] + r[0] + r[0];
            break;
         case 9:
            resultArea.innerHTML += r[0] + r[2];
            break;
      }

   } else if (input.value.length === 3) {
      let numbers = input.value.split('');

      let c = +numbers[0];
      let d = +numbers[1];
      let u = +numbers[2];

      switch (c) {
         case 1:
            resultArea.innerHTML = r[4];
            break;
         case 2:
            resultArea.innerHTML = r[4] + r[4];
            break;
         case 3:
            resultArea.innerHTML = r[4] + r[4] + r[4];
            break;
         case 4:
            resultArea.innerHTML = r[4] + r[5];
            break;
         case 5:
            resultArea.innerHTML = r[5];
            break;
         case 6:
            resultArea.innerHTML = r[5] + r[4];
            break;
         case 7:
            resultArea.innerHTML = r[5] + r[4] + r[4];
            break;
         case 8:
            resultArea.innerHTML = r[5] + r[4] + r[4] + r[4];
            break;
         case 9:
            resultArea.innerHTML = r[4] + r[6];
            break;
      }

      switch (d) {
         case 1:
            resultArea.innerHTML += r[2];
            break;
         case 2:
            resultArea.innerHTML += r[2] + r[2];
            break;
         case 3:
            resultArea.innerHTML += r[2] + r[2] + r[2];
            break;
         case 4:
            resultArea.innerHTML += r[2] + r[3];
            break;
         case 5:
            resultArea.innerHTML += r[3];
            break;
         case 6:
            resultArea.innerHTML += r[3] + r[2];
            break;
         case 7:
            resultArea.innerHTML += r[3] + r[2] + r[2];
            break;
         case 8:
            resultArea.innerHTML += r[3] + r[2] + r[2] + r[2];
            break;
         case 9:
            resultArea.innerHTML += r[2] + r[4];
            break;
      }

      switch (u) {
         case 1:
            resultArea.innerHTML += r[0];
            break;
         case 2:
            resultArea.innerHTML += r[0] + r[0];
            break;
         case 3:
            resultArea.innerHTML += r[0] + r[0] + r[0];
            break;
         case 4:
            resultArea.innerHTML += r[0] + r[1];
            break;
         case 5:
            resultArea.innerHTML += r[1];
            break;
         case 6:
            resultArea.innerHTML += r[1] + r[0];
            break;
         case 7:
            resultArea.innerHTML += r[1] + r[0] + r[0];
            break;
         case 8:
            resultArea.innerHTML += r[1] + r[0] + r[0] + r[0];
            break;
         case 9:
            resultArea.innerHTML += r[0] + r[2];
            break;
      }
   }
}