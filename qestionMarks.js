function QuestionsMarks(s) {
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            for (let j = i + 1; j < s.length; j++) {
                if (!isNaN(s[j])) {
                    if (parseInt(s[i]) + parseInt(s[j]) === 10) {
                        if (s.slice(i, j).split("?").length - 1 !== 3) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}