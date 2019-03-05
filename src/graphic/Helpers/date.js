export default () => {
  const d = new Date()
  return {
    millis: d.getMilliseconds(),
    seconds: d.getSeconds(),
    minutes: d.getMinutes(),
    hours: d.getHours(),
    day: d.getDate(),
    month: d.getMonth() + 1,
    year: d.getFullYear(),
    today: d
  }
}