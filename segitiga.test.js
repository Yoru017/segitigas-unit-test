const klasifikasiSegitiga = require('./segitiga');

describe("Segitiga", () => {
  it("Should return 'Tidak ada segitiga dapat dibangun'", () => {
    expect(klasifikasiSegitiga(0, 0, 0)).toBe("Tidak ada segitiga dapat dibangun");
  })

  it("Should return 'Tidak ada segitiga dapat dibangun'", () => {
    expect(klasifikasiSegitiga(1, 1, 3)).toBe("Tidak ada segitiga dapat dibangun");
  })

  it("Should return 'Segitiga sama sisi'", () => {
    expect(klasifikasiSegitiga(2, 2, 2)).toBe("Segitiga sama sisi");
  })

  it("Should return 'Segitiga sama kaki'", () => {
    expect(klasifikasiSegitiga(2, 2, 3)).toBe("Segitiga sama kaki");
  })

  it("Should return 'Segitiga siku-siku'", () => {
    expect(klasifikasiSegitiga(3, 4, 5)).toBe("Segitiga siku-siku");
  })

  it("Should return 'Segitiga siku-siku'", () => {
    expect(klasifikasiSegitiga(2.7, 4.2, 4.8)).toBe("Tidak ada segitiga dapat dibangun");
  })

  it("Should return 'Segitiga sama sisi'", () => {
    expect(klasifikasiSegitiga(2.99, 3.01, 3.00)).toBe("Segitiga sama sisi");
  })
})
