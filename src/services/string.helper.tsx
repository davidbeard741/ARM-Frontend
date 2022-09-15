export function ellipsisText(txt: string) {
  let start = txt.substring(0, 6);
  let end = txt.substring(txt.length - 6, txt.length);
  return start + "..." + end;
}
