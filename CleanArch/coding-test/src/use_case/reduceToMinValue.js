exports.reduceToMinValue = (obj, keyPath, nestedKeyPath) => {
  if (nestedKeyPath !== undefined) {
    return obj.reduce((min, j) => {
      if (j[keyPath][nestedKeyPath] < min) {
        return j[keyPath][nestedKeyPath]
      }
      return min
    }, obj[0][keyPath][nestedKeyPath])
  } else {
    return obj.reduce((min, j) => {
      if (j[keyPath] < min) {
        return j[keyPath]
      }
      return min
    }, obj[0][keyPath])
  }
}
