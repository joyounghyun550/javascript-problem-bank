/**
 * [(lv.2)객체와-loop.js]
 *
 * countProperties 함수를 작성하세요:
 * - 파라미터 obj
 * - for...in 루프를 사용하여 obj 객체의 소유 키 개수를 반환하세요.
 *
 * @param {object} obj
 * @returns {number}
 */
function countProperties(obj) {
  // TODO
  let count = 0; // 키 개수를 세기 위한 변수 초기화
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // obj의 소유 키인지 확인
      count++; // 소유 키일 경우 카운트 증가
    }
  }
  return count; // 최종 카운트 반환
}

export { countProperties };
