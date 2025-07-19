function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}


function sumOfodd(n)
{
    let sum = 0;
    for( let i = 1; i<=n; i++)
    {
        sum = sum + i;
    }
    return sum;
}


// Nhập mảng số nguyên
let numbers = [3, -1, 4, 7, 10, -5, 0, 8];

// In ra các số chẵn
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Các số chẵn:", evenNumbers);

// Tìm số lớn nhất trong mảng
let maxNumber = Math.max(...numbers);
console.log("Số lớn nhất:", maxNumber);

// Tạo mảng mới chứa các số lớn hơn 0
let positiveNumbers = numbers.filter(num => num > 0);
console.log("Các số lớn hơn 0:", positiveNumbers);