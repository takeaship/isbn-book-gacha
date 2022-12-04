export const useIsbn = () => {
  const randomRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const calcCheckDigit = (isbn: string): number => {
    const digits = isbn.split("").map((digit) => parseInt(digit));
    const sum = digits.reduce((acc, digit, index) => {
      return acc + (index % 2 === 0 ? digit * 1 : digit * 3);
    }, 0);
    return (10 - (sum % 10)) % 10;
  };

  const generateIsbn = (): string => {
    const randomNumberAsStr = randomRange(0, 99999999)
      .toString()
      .padStart(8, "0");
    const isbn = `9784${randomNumberAsStr}`;
    return `${isbn}${calcCheckDigit(isbn)}`;
  };

  return { generateIsbn };
};
