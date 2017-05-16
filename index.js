function getFirstSelector(selector) {
  var selector = document.querySelector(selector)
  return selector
}

function nestedTarget() {
  var target = document.getElementById('nested').querySelector('div.target')
  return target
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n
  }
}

// that pulls out the most deeply nested child from div#grand-node

function deepestChild() {
  let current = document.getElementById('grand-node')
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
    }
    return current
  }
