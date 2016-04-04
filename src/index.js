export default (a, b, c, d) => {
  String.prototype.is = { to: (x) => a += ` is to ${x}` }
  String.prototype.as = (y) => a += ` as ${y}`
  return `${a.is.to(b).as(c).is.to(d)}<br>`
}
