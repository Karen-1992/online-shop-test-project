export const getInitAttributes = (attributes) => {
    const arrayAttributes = {};
    for (const atr of attributes) {
        arrayAttributes[atr.name] = atr.items[0].displayValue;
    }
    return arrayAttributes;
};
