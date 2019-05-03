export default (min = null, max = null) => {
    if (min === null || max === null) return Math.random()
    else if (min !== null && max !== null) {
        return Math.floor(Math.random() * (Math.abs(max - min)) + min)
    }
}