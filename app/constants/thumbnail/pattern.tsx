const a: string = "a.png";
const b: string = "b.png";
const c: string = "c.png";
const d: string = "d.png";
const e: string = "e.png";
const f: string = "f.png";

const type1: Array<string> = [a, b, c];
const type2: Array<string> = [c, d, e];
const type3: Array<string> = [b, f, d];
const type4: Array<string> = [f, c, f];

const setOfPattern: Array<string> = [...type1, ...type2, ...type3, ...type4];

export { setOfPattern };
