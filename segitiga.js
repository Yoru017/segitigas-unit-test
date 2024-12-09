const klasifikasiSegitiga = (a, b, c) => {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (a <= 0 || b <= 0 || c <= 0) {
        return "Tidak ada segitiga dapat dibangun";
    }

    let sides = [a, b, c].sort((x, y) => x - y); // Urutkan sisi
    let [x, y, z] = sides; // x <= y <= z

    if (z >= x + y) {
        return "Tidak ada segitiga dapat dibangun";
    }

    if (x === y && y === z) {
        return "Segitiga sama sisi";
    }

    if (x === y || y === z || x === z) {
        return "Segitiga sama kaki";
    }

    if (Math.pow(z, 2) === Math.pow(x, 2) + Math.pow(y, 2)) {
        return "Segitiga siku-siku";
    }

    return "Segitiga bebas";
};

module.exports = klasifikasiSegitiga;
