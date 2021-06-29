/** 함수 주석 달기
 * 주어진 배열에서 연령대별 인원 수를 구하는 함수이다 - 함수 설명
 * @param {Array} users 파라미터 설명
 * @param {Number} keyAge 파라미터 설명
 * @returns {Array} 20대, 30대, 40대 별 명수 - 반환값 설명
 */
function getAgeGroup(users, keyAge) {
    let userAgeGroup = {};

    for (var user of users) {

        var ageGroup = "";
        if (user[keyAge] < 10) {
            ageGroup = "0";
        } else if (user[keyAge] >= 100) {
            ageGroup = user[keyAge].toString().Subst(0, 2) + "0";
        } else {
            ageGroup = user[keyAge].toString().charAt(0) + "0";
        }

        if (userAgeGroup[ageGroup]) {
            userAgeGroup[ageGroup] += 1;
        } else {
            userAgeGroup[ageGroup] = 1;
        }
    }

    return userAgeGroup;
}