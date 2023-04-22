Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

var array = [52, 2049, 330, 30, 421, 100];

// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 100) {
//         array.remove(i);
//     }
// }

// alert(array);

for (let i = array.length; i >= 0; i--) {
    if(array[i] > 100) {
        array.remove(i);
    }
}

alert(array);