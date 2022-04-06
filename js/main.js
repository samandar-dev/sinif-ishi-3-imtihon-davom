let massiv = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
]


let list = document.querySelector('.box__list');
let btnL = document.querySelector('.btn-left');
let btnR = document.querySelector('.btn-right');

let arr = []

function addItems() {
  massiv.forEach((item) => {
    let li = document.createElement('li');
    li.className = "box__item";
    li.innerHTML = `
            <div class="item-box" onclick="activeFun(${item.id})">
              <p class="box__tit">${item.id}</p>
            </div>`;

    arr.push(item);
    list.appendChild(li);
  })
} addItems()

let count = 0
let son = 0;
let count2 = massiv.length

let item = document.querySelectorAll('.box__item');
let liCount = 0

item[0].classList.add('act')

function listTran() {
  btnR.addEventListener('click', () => {
    if (count2 - 2 >= son) {
      count += 245
      list.style.transform = `translateX(-${count}px)`
      son++
    }

    if (liCount + 1 <= massiv.length - 1) {
      liCount++
    }

    item.forEach((lii, inx) => {
      if (liCount == inx) {
        console.log('teng');
        lii.classList.add('act')
      } else {
        lii.classList.remove('act')
      }
    })
  })

  btnL.addEventListener('click', () => {
    if (son > 0) {
      count -= 245
      list.style.transform = `translateX(-${count}px)`
      son--
    }

    if (liCount > 0) {
      liCount--
    }

    item.forEach((lii, inx) => {
      if (liCount == inx && liCount >= 0) {
        console.log('teng');
        lii.classList.add('act')
      } else {
        lii.classList.remove('act')
      }
    })
  })
} listTran()





