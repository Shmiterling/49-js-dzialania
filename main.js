function myFunction(x,y){
  let a = (x + y);
  let b = (x - y);
  let c = (x * y);

  if (a < 0) {
    return "Wynik jest nieprawidłowy";
  } else if (b < 0) {
    return "Wynik jest nieprawidłowy";
  } else if (c < 0) {
    return "Wynik jest nieprawidłowy";
  } else {
    return "Wynik dodawania wynosi " + a + 
    "\nWynik odejmowania wynosi " + b +
    "\nWynik mnożenia wynosi " + c; 
  }
}

console.log(myFunction(10,15));