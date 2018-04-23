
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray
const arr1 = [5,12,3,10,22,18,7,2]

const map = (arr1, iteratee) => {
    // create varible with empty array
    var myNewArray = [];
    // loop array
    // let i equals 0; i is less the array, the loop will continue to run 
    for(let i = 0; i<arr1.length; i++) {
    // use the empty variable to push each loop and call iteratee() to pass the value in the array
        myNewArray.push(iteratee(arr1[i]));
    }
    // return
    return myNewArray;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
const filter = (arr1, iteratee) => {
    // create empty variable
    const newerArray = [];
    // loop arr1 and call iteratee for each value in the array
    for(let i = 0; i<arr1.length; i++) {
    // use if statement to determine if iteratee will reuturn T/F
        if(iteratee(arr1[i])) {
            // to push value if true to empty array
            newerArray.push(array[i]);
        }
    }
    return newerArray;
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
const find = (theArray, fnc) => {
    // create for loop
    for(let i = 0; i<theArray.length; i++) {
        // create if statement for fnc if fnc will return T/F
        if(fnc(theArray[i])) {
            return theArray[i];
        }
    }
}


//return the last item in theArray
const findLast = (theArray) => {
    // using theArray.length - 1; to find the last index in the array
    return theArray[theArray.length - 1];
}

//return the first element of the array
const head = (theArray) => {
    // the "0" index means the first # in the array
    return theArray[0]

}

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array
const reverse = (theArray) => {
    // create empty array
    const newArr2 =[];
    // use for loop to add item to the empty array
    // using .length - 1, which corresponds to the last index
    // As long as i is greater than or equals to 0, the loop will continue
    for(let i = 0; theArray.length - 1; i >= 0; i--) {
        // using push function to push the last index to return as first
        newArr2.push(theArray[i]);
    }
    return newArr2;

}

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
const tail = (theArray) => {
    const newArr3 = [];
    // creating for loop to add item to new array EXCEPT the first item
    // let i equals 1; if i(1) is less than the array,
    for(let i = 1; i < theArray.length; i++) {
        // push
        newArr3.push(theArray[i]);
    }
    return newArr3;
}

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray
const sort = (theArray) => {

}

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
