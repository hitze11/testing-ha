import { describe, it, expect } from "vitest";
import { validateScore } from "../src/validateScore";

describe("validateScore", () => {
  it("soll eine gültige Punktzahl akzeptieren", () => {
    const result = validateScore(75);
    expect(result.valid).toBe(true);
    expect(result.score).toBe(75);
    expect(result.passed).toBe(true);
    expect(result.grade).toBe("C");
  });

  it("soll eine Punktzahl unter 0 als ungültig markieren", () => {
    const result = validateScore(-5);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score muss zwischen 0 und 100 liegen");
  });

  it("soll eine Punktzahl über 100 als ungültig markieren", () => {
    const result = validateScore(105);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score muss zwischen 0 und 100 liegen");
  });

  it("soll eine Nicht-Zahlen-Eingabe als ungültig markieren", () => {
    const result = validateScore("abc");
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score muss eine Zahl sein");
  });

  it("soll eine strikte Validierung korrekt durchführen", () => {
    const result = validateScore(75.5, { strictMode: true });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Score muss eine ganze Zahl sein");
  });

  it("soll Bonuspunkte korrekt anwenden", () => {
    const result = validateScore(55, { bonusCategories: ["A", "B", "C"] });
    expect(result.score).toBe(61);
    expect(result.passed).toBe(true);
    expect(result.grade).toBe("D");
  });

  it("soll die Notenberechnung korrekt durchführen", () => {
    expect(validateScore(95).grade).toBe("A");
    expect(validateScore(85).grade).toBe("B");
    expect(validateScore(75).grade).toBe("C");
    expect(validateScore(65).grade).toBe("D");
    expect(validateScore(50).grade).toBe("F");
  });
});
