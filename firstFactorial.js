function FirstFactorial(num) {
    let multiplication = 1
    for (let i = 1; i <= num; i++) {
      multiplication *= i
    }
    return multiplication;
  
  }