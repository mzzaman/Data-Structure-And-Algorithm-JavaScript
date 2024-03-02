const my_array = [7, 12, 9, 41, 11, 2];
let minValue = my_array[0];

for (let i = 0; i < my_array.length; i++) {
  if (my_array[i] < minValue) {
    minValue = my_array[i];
  }
}
console.log(minValue);
