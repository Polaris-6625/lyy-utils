export function repeat(str,frequency) {
    if (Number.isFinite(frequency)) {
        let result = "";
        for (let i = 0;i < frequency;i++) {
            result += str;
        }
        return result;
    }
    else {
        throw new Error(`${frequency} is not a Number`);
    }
}