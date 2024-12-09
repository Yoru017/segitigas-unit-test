const klasifikasiSegitiga = require('./segitiga');

test("Angka-angka nya bulat", () => {
    expect(klasifikasiSegitiga(3, 4, 5)).toBe("Segitiga siku-siku");
});
