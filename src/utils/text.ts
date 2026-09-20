export function getParticle(word: string) {
  if (!word) return "";

  const lastChar = word[word.length - 1];
  const code = lastChar.charCodeAt(0);

  // 한글 범위가 아닐 경우 기본 "가"
  if (code < 0xac00 || code > 0xd7a3) return "가";

  // 한글 종성 여부 계산
  const hasBatchim = (code - 0xac00) % 28 !== 0;

  return hasBatchim ? "이" : "가";
}
