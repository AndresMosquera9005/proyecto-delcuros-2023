export const parseFloatNumber =(number, afterPoint) => {
    const result = parseFloatNumber(number).toFixed(afterPoint)
    return result === 'NaN' ? "-" : result
}