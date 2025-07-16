function guruhAnagramlar(sozlar) {
    let guruh = {};
    for (let soz of sozlar) {
        let kalit = soz.split("").sort().join("");
        if (!guruh[kalit]) guruh[kalit] = [];
        guruh[kalit].push(soz);
    }
    return Object.values(guruh);
}

function chastotaSort(arr) {
    let sonSoni = {};
    for (let son of arr) {
        sonSoni[son] = (sonSoni[son] || 0) + 1;
    }
    return arr.sort((a, b) => {
        if (sonSoni[b] === sonSoni[a]) return a - b;
        return sonSoni[b] - sonSoni[a];
    });
}

function aylantir(k) {
    let original = [1, 2, 3, 4, 5, 6, 7];
    let natija = [];
    let len = original.length;
    k = k % len;
    for (let i = 0; i < len; i++) {
        let yangiIndex = (i - k + len) % len;
        natija[i] = original[yangiIndex];
    }
    return natija;
}

function umumiy(arr1, arr2) {
    let natija = [];
    arr1.map(x => arr2.includes(x) && natija.push(x));
    return natija;
}

function kopchilikElement(arr) {
    let hisob = {};
    for (let son of arr) {
        hisob[son] = (hisob[son] || 0) + 1;
    }
    let maxSoni = 0, javob = null;
    for (let key in hisob) {
        if (hisob[key] > maxSoni) {
            maxSoni = hisob[key];
            javob = Number(key);
        }
    }
    return javob;
}

function kichikRaqam(num, k) {
    let stack = [];
    for (let raqam of num) {
        while (k > 0 && stack.length && stack[stack.length - 1] > raqam) {
            stack.pop();
            k--;
        }
        stack.push(raqam);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    while (stack[0] === '0') stack.shift();
    return stack.length ? stack.join("") : "0";
}

function emailTekshir(email) {
    if (!email.includes("@")) return false;
    if (!email.includes(".")) return false;
    if (email.endsWith(".")) return false;
    return true;
}

function juftIndexniQosh(arr) {
    let natija = arr.slice();
    for (let i = 0; i < arr.length; i += 2) {
        natija.push(arr[i]);
    }
    return natija;
}

function harfniSanash(arr, belgi) {
    let hisob = 0;
    for (let str of arr) {
        for (let harf of str) {
            if (harf === belgi) hisob++;
        }
    }
    return hisob;
}

function isomorfmi(s1, s2) {
    if (s1.length !== s2.length) return false;
    let map1 = {};
    let map2 = {};
    for (let i = 0; i < s1.length; i++) {
        let a = s1[i];
        let b = s2[i];
        if (!map1[a]) map1[a] = b;
        if (!map2[b]) map2[b] = a;
        if (map1[a] !== b || map2[b] !== a) return false;
    }
    return true;
}

module.exports = {
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
};
