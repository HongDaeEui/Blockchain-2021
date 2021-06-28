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