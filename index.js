const {
    guruhAnagramlar,
    chastotaSort,
    aylantir,
    umumiy,
    kopchilikElement,
    kichikRaqam,
    emailTekshir,
    juftIndexniQosh,
    harfniSanash,
    isomorfmi
} = require('./indx.js');

console.log(guruhAnagramlar(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(chastotaSort([4, 1, 2, 1, 2, 3, 3, 3]));
console.log(aylantir(3));
console.log(isomorfmi("egg", "add"));
console.log(isomorfmi("hello", "salom"));
console.log(umumiy([1, 2, 3], [2, 3, 4]));
console.log(kopchilikElement([3, 3, 4, 2, 3, 3, 3]));
console.log(kichikRaqam("1432119", 3));
console.log(emailTekshir("gulomovodilbek430@gmail.com"));
console.log(juftIndexniQosh([1, 2, 3, 4]));
console.log(harfniSanash(["hello", "string hello", "woreld is beautiful"], "e"));
