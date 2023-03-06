export function randInt(a: number, b: number) {
  return Math.trunc(Math.random() * (b - a + 1)) + a;
}

export function shuffle<T>(list: T[]) {
  for (let i = 0; i < list.length; i++) {
    const j = randInt(0, list.length - 1);
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }
}
