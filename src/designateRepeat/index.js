export function designateRepeat(str,target) {
    const regex = new RegExp(target, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}