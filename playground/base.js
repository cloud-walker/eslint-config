const arr = [1, 2, 3]

const normalDouble = arr.map(function(x) {
  x * 2
})

const arrowDouble = arr.map(x => {
  x * 2
})

const defaultCase = (() => {
  switch (arr.length) {
    case 3:
      return 'wooot!'
  }
})()

const defaultCaseWithComment = (() => {
  switch (arr.length) {
    case 3:
      return 'wooot!'
    // no default
  }
})()
