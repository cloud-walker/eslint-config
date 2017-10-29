const arr = [1, 2, 3]

// array-callback-return
const normalDouble = arr.map(function(x) {
  x * 2
})

const arrowDouble = arr.map(x => {
  x * 2
})

// default-case
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

// for-direction
for (let i = 0; i < 10; i--) {}

// getter-return
const p = {
  get name() {},
}

async function foo(things) {
  const results = []
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing))
  }
  return baz(results)
}
