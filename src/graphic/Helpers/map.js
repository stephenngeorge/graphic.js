// range_1 = range to be mapped, range_2 = range to be mapped to
export default (value, range_1A, range_1B, range_2A, range_2B) => {
  // get the ranges passed in from minimum and maximum values
  let Diff_1 = Math.abs(range_1A - range_1B)
  let Diff_2 = Math.abs(range_2A - range_2B)
  // get minimum value for each range (allows arguments to be passed in either order)
  let range_1_min = range_1A < range_1B ? range_1A : range_1B
  let range_2_min = range_2A < range_2B ? range_2A : range_2B
  // check if inital value exists in first range (must be true to calculate)
  let value_relative = value - range_1_min
  if (value_relative < 0) {
    console.error({
      status: 'ERROR',
      message: 'Could not calculate - the initial value must be within the first range'
    })
  }
  else {
    // get the passed value as a percentage of the first range
    let value_percentRange1 = ((value - range_1_min) / Diff_1) * 100
    // return that same percentage [line20] value of second range
    return ((Diff_2 / 100) * value_percentRange1) + range_2_min
  }
}