export const contain = (array = [], target) => {
    const size = array.length,
        first = array[0],
        last = array[size - 1];
    if (!size || typeof target !== 'number') {
        return false;
    } else if (target === first || target === last) {
        return true;
    } else if (target > first && target < last) {
        const index = ~~(size * .5),
            value = array[index];
        if (value === target) {
            return true;
        } else if (index) {
            return contain(target < value ? array.slice(0, index) : array.slice(index), target);
        }
    }
    return false;
};
