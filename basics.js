// const countLenOfNumber = (n) => {
//   let c = 0;
//   while (n != 0) {
//     n = Math.floor(n / 10);
//     c++;
//   }
//   return c;
// };
// const rotateANumber = (n, r) => {
//   let len = countLenOfNumber(n);
//   r = ((r % len) + len) % len;
//   let a = Math.floor(n / Math.pow(10, r));
//   let b = n % Math.pow(10, r);
//   return b * Math.pow(10, len - r) + a;
// };

// console.log(rotateANumber(12345, 2));
// console.log(rotateANumber(12345, -3));

// const rotateANumberWithoutPow = (n, r) => {
//   let len = countLenOfNumber(n);
//   r = ((r % len) + len) % len;
//   let mul = 1;
//   let div = 1;
//   for (let i = 1; i <= len; i++) {
//     if (i <= r) div *= 10;
//     else mul *= 10;
//   }
//   let a = Math.floor(n / div);
//   let b = n % div;
//   return b * mul + a;
// };

// console.log(rotateANumberWithoutPow(12345, 2));
// console.log(rotateANumberWithoutPow(12345, -3));

// const isPrime = (n) => {
//   if (n <= 1) return false;
//   if (n <= 3) return true;
//   for (let i = 2; i < n / 2; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// };

// const primeFactorsOfANumber = (n) => {
//   for (let i = 2; i * i <= n; i++) {
//     while (n % i == 0) {
//       console.log(i);
//       n /= i;
//     }
//   }
// };

// primeFactorsOfANumber(1440);

// const printStar1 = (n) => {
//     let nsp=n,nst=n;
//     for(let i=1;i<=n;i++){
//         for(let space = 1;space<=nsp;space++){
//             process.stdout.write('_')
//         }
//         for(let star=1;star<=nst;star++){
//             process.stdout.write('*')
//         }
//         console.log()
//         nsp+=0
//         nst+=0
//     }
// }

// printStar1(5)


// const printStar2 = (n) => {
//     let nsp=n-1,nst=1;
//     for(let i=1;i<=n;i++){
//         for(let space = 1;space<=nsp;space++){
//             process.stdout.write('_')
//         }
//         for(let star=1;star<=nst;star++){
//             process.stdout.write('*')
//         }
//         console.log()
//         nsp-=1
//         nst+=1
//     }
// }

// printStar2(5)

// const printStar3 = (n) => {
//     let nsp=n-1,nst=1;
//     for(let i=1;i<=n;i++){
//         for(let space = 1;space<=nsp;space++){
//             process.stdout.write('_')
//         }
//         for(let star=1;star<=2*nst-1;star++){
//             process.stdout.write('*')
//         }
//         console.log()
//         nsp-=1
//         nst+=1
//     }
// }

// printStar3(5)

// const printStar4= (n) => {
//     let nsp=0,nst=n;
//     for(let i=1;i<=n;i++){
//         for(let space = 1;space<=nsp;space++){
//             process.stdout.write('_')
//         }
//         for(let star=1;star<=2*nst-1;star++){
//             process.stdout.write('*')
//         }
//         console.log()
//         nsp+=1
//         nst-=1
//     }
// }

// printStar4(5)

// const printStar5= (n) => {
//     let nsp=n/2,nst=1;
//     for(let i=1;i<=n;i++){
//         for(let space = 1;space<=nsp;space++){
//             process.stdout.write('_')
//         }
//         for(let star=1;star<=nst;star++){
//             process.stdout.write('*')
//         }
//         console.log()
//         if(i<n/2){
//             nsp-=1
//             nst+=2
//         }else{
//             nsp+=1
//             nst-=2
//         }
//     }
// }

// printStar5(7)

// const printStar6= (n) => {
//     let nsp=1,nst=n/2+1;
//     for(let i=1;i<=n;i++){
//         for(let star=1;star<=nst;star++){
//             process.stdout.write('*')
//         }
//         for(let space = 1;space<=nsp;space++){
//             process.stdout.write('_')
//         }
//         for(let star=1;star<=nst;star++){
//             process.stdout.write('*')
//         }
//         console.log()
//         if(i<n/2){
//             nsp+=2
//             nst-=1
//         }else{
//             nsp-=2
//             nst+=1
//         }
//     }
// }

// printStar6(7)

//pattern 1 to 6 is done by using nst nsp method

//matrix method to print star

// const printStar7 = (n) => {
//   for (let r = 1; r <= n; r++) {
//     for (let c = 1; c <= n; c++) {
//       if (r == c) {
//         process.stdout.write("*");
//       } else {
//         process.stdout.write("_");
//       }
//     }
//     console.log();
//   }
// };

// printStar7(5);

// const printStar8 = (n) => {
//     for (let r = 1; r <= n; r++) {
//       for (let c = 1; c <= n; c++) {
//         if (r + c == n+1) {
//           process.stdout.write("*");
//         } else {
//           process.stdout.write("_");
//         }
//       }
//       console.log();
//     }
//   };
  
//   printStar8(5);

// const printStar8 = (n) => {
//     for (let r = 1; r <= n; r++) {
//       for (let c = 1; c <= n; c++) {
//         if (r == c || r+c==n+1) {
//           process.stdout.write("*");
//         } else {
//           process.stdout.write("_");
//         }
//       }
//       console.log();
//     }
//   };
  
//   printStar8(7);

//printStar8 using nsp method

// const printStar_8 = (n) => {
//   let nsp1 = 0,
//     nsp2 = n - 2;
//   for (let r = 1; r <= n; r++) {
//     for (let csp1 = 1; csp1 <= nsp1; csp1++) {
//       process.stdout.write("_");
//     }
//     process.stdout.write("*");
//     for (let csp2 = 1; csp2 <= nsp2; csp2++) {
//       process.stdout.write("_");
//     }
//     process.stdout.write("*");
//     console.log();
//     if (r < n / 2) {
//       nsp1++;
//       nsp2 -= 2;
//     } else {
//       nsp1--;
//       nsp2 += 2;
//     }
//   }
// };

// printStar_8(5);

//number patterns
// const numPattern1 = (n) => {
//   let inc = 1;
//   for (let r = 1; r <= n; r++) {
//     for (let c = 1; c <= r; c++) {
//       process.stdout.write(`${inc}`);
//       inc++;
//     }
//     console.log();
//   }
// };

// numPattern1(4);

// const numPattern2 = (n) => {
//     let nsp = n/2,nst = 1
//     for(let r=1;r<=n;r++){
//         for(let csp = 1;csp<=nsp;csp++){
//             process.stdout.write(" ");
//         }
//         for(let cst = 1;cst<=2*nst-1; cst++){
//             process.stdout.write(`${nst}`);
//         }
//         console.log()
//         if(r<n/2){
//             nsp--
//             nst++
//         }else{
//             nsp++
//             nst--
//         }
//     }
// }

// numPattern2(7)

// const numPattern3 = (n) => {
//     let nsp = n/2,nst = 1
//     for(let r=1;r<=n;r++){
//         let inc = r<=n/2+1?r:n-r+1
//         for(let csp = 1;csp<=nsp;csp++){
//             process.stdout.write(" ");
//         }
//         for(let cst = 1;cst<=2*nst-1; cst++){
//             process.stdout.write(`${inc}`);
//             if(cst<(2*nst-1)/2){
//                 inc++
//             }else{
//                 inc--
//             }
//         }
//         console.log()
//         if(r<n/2){
//             nsp--
//             nst++
//         }else{
//             nsp++
//             nst--
//         }
//     }
// }

// numPattern3(7)

// const numPattern4 = (n) => {
//     let nsp = n/2,nst = 1
//     for(let r=1;r<=n;r++){
//         let inc = r<=n/2+1?r:n-r+1
//         for(let csp = 1;csp<=nsp;csp++){
//             process.stdout.write(" ");
//         }
//         for(let cst = 1;cst<=2*nst-1; cst++){
//             process.stdout.write(`${inc}`);
//             if(cst<(2*nst-1)/2){
//                 inc--
//             }else{
//                 inc++
//             }
//         }
//         console.log()
//         if(r<n/2){
//             nsp--
//             nst++
//         }else{
//             nsp++
//             nst--
//         }
//     }
// }

// numPattern4(7)

// const numPattern5 = (n) => {
//     let nsp=2*n-3,nst=1;
//     for(let r=1;r<=n;r++){
//         for(let cst=1;cst<=nst;cst++){
//             process.stdout.write(`${cst}`);
//         }
//         for(let csp=1;csp<=nsp;csp++){
//             process.stdout.write(" ");
//         }
//         if(r==n)nst--
//         for(let cst=nst;cst>=1;cst--){
//             process.stdout.write(`${cst}`);
//         }
//         console.log()
//         nst++
//         nsp-=2
//     }
// }

// numPattern5(5)

// const numPattern6 = (n) => {
//     let f=0,s=1
//     for(let r=1;r<=n;r++){
//         for(let col=1;col<=r;col++){
//             process.stdout.write(`${f}`);
//             let t = f+s
//             f=s
//             s=t
//         }
//         console.log()
//     }
// }

// numPattern6(4)

// Pattern Questions ends

//Find number of occurence of a digit in a number

// const getFrequency = (n,d) => {
//     let occurence = 0;
//     while(n!==0){
//         let rem = n % 10
//         n = Math.floor(n/10)
//         if(rem===d)occurence++
//     }
//     console.log(occurence)
// }

// getFrequency(123455554333,5)

//decimal to binary

// const decimalToBinary = (n) => {
//     let ans = 0,i=1
//     while(n!=0){
//         let rem = n%2
//         n = Math.floor(n/2)
//         ans = (rem*i)+ans
//         i*=10
//     }
//     console.log(ans)
// }

// decimalToBinary(57)

// const binaryToDecimal = (n) => {
//     let ans = 0,i=1
//     while(n!=0){
//         let rem = n%10
//         n = Math.floor(n/10)
//         ans = rem*i+ans
//         i*=2
//     }
//     console.log(ans)
// }

// binaryToDecimal(111001)

// const decimalToAnyBase = (n,b) => {
//     let ans = 0,i=1
//     while(n!=0){
//         let rem = n%b
//         n = Math.floor(n/b)
//         ans = (rem*i)+ans
//         i*=10
//     }
//     console.log(ans)
// }

// decimalToAnyBase(57,8)

// const anyBaseToDecimal = (n,b) => {
//     let ans = 0,i=1
//     while(n!=0){
//         let rem = n%10
//         n = Math.floor(n/10)
//         ans = rem*i+ans
//         i*=b
//     }
//     console.log(ans)
// }

// anyBaseToDecimal(71,8)

// anyBaseToAnyBase will be done by converting first implememnting anyBaseToDecimal then decimalToAnyBase

//Add to decimal numbers

// const addTwoDecimalNumbers = (m,n) => {
//     let sum = 0,i=1
//     while(m!==0 || n!==0){
//         let rem1=0,rem2=0
//         if(m!=0){
//             rem1 = m%10
//             m = Math.floor(m/10)
//         }
//         if(n!=0){
//             rem2 = n%10
//             n = Math.floor(n/10)
//         }
//         sum = (rem1+rem2)*i+sum
//         i*=10
//     }

//     console.log(sum)
// }

// addTwoDecimalNumbers(20,1)

const subtractTwoDecimalNumbers = (m,n) => {
    let sum = 0,i=1
    while(m!==0 || n!==0){
        let rem1=0,rem2=0
        if(m!=0){
            rem1 = m%10
            m = Math.floor(m/10)
        }
        if(n!=0){
            rem2 = n%10
            n = Math.floor(n/10)
        }
        sum = (rem1-rem2)*i+sum
        i*=10
    }

    console.log(sum)
}

subtractTwoDecimalNumbers(180,10)