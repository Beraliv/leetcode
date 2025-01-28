import { createStringBuilder } from "../_util/createStringBuilder";

export {};

function intToRoman(num: number): string {
  let romanStringBuilder = createStringBuilder();
  let map = new Map<number, string>();

  map.set(1000, "M");
  map.set(900, "CM");
  map.set(500, "D");
  map.set(400, "CD");
  map.set(100, "C");
  map.set(90, "XC");
  map.set(50, "L");
  map.set(40, "XL");
  map.set(10, "X");
  map.set(9, "IX");
  map.set(5, "V");
  map.set(4, "IV");
  map.set(1, "I");

  for (let key of map.keys()) {
    const remainder = num % key;
    const times = (num - remainder) / key;
    romanStringBuilder.append(map.get(key)!.repeat(times));
    num = remainder;
  }

  return romanStringBuilder.toString();
}

console.log(intToRoman(1994));
