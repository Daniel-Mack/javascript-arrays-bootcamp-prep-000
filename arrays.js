var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
 var chocolateBars = [element, ...array]
 return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var myArray = [...array, element]
<<<<<<< HEAD
  return myArray
=======
 return myArray
>>>>>>> 572094b3cb6f11688bfd18abdc2f5711095e5d5d
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
<<<<<<< HEAD
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
return array.slice(0, array.length - 1)
=======
  chocolateBars[0]
return index
>>>>>>> 572094b3cb6f11688bfd18abdc2f5711095e5d5d
}