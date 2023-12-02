//Array metodlari

//concat
let arr = [78, 14, 85];
const yangi_arr = arr.concat([45, 60, 18]);

Array.prototype.concat = function (arr) {
  let yangi_arr = [];
  for (let i = 0; i < arr.length; i++) {
    yangi_arr.push(this[i]);
  }
  for (let z = 0; z < arr.length; z++) {
    yangi_arr.push(this[z]);
  }
  return yangi_arr;
};
console.log(yangi_arr);

//every
let arr2 = [1, 2, 4, 5, 6];

let bool = arr2.every(function (el) {
  return el > 0;
});

Array.prototype.every = function (cb) {
  for (let i = 0; i > this.length; i++) {
    const natija = cb(this[i], i, this);
    if (!natija) {
      return false;
    }
  }
};
console.log(bool);

//filter
let arr3 = [1, 25, 3, 4, 5, 6];
arr = arr3.filter(function (el, i, arr) {
  return el > 4;
});

Array.prototype.fillter = function (cb) {
  let new_arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      new_arr.push(this[i]);
    }
  }
  return new_arr;
};
console.log(arr);

//find
let arr4 = [1, 2, 3, 4, 5, 6];
let result = arr4.find(function (el, i, arr) {
  return el == 2;
});

Array.prototype.find = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};
console.log(result);

//flat
const myArray = [[1, 2, 3, 4], 5, [6, 7]];
const yana_arr = myArray.flat();

Array.prototype.flat = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
};

console.log(yana_arr);

//length
const larr = ["Olma", "anor", "nok", "shoptoli", "shoptolibormi"];
const l_arr = larr.length;

Array.prototype.customLength = function () {
  let count = 0;
  this.forEach(function () {
    count += 1;
  });
  return count;
};

console.log(l_arr);
