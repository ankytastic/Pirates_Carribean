const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const panels = document.querySelectorAll('.panel')
let currentActive = 1
if (currentActive < 1) {
    currentActive = 1
}
if (currentActive > circles.length) {
    currentActive = circles.length
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('pactive')) {
            removeActiveClasses()
        }
        else {
            removeActiveClasses()
            panel.classList.add('pactive')
        }
        paneltostep(panel.id)
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('pactive')
    })
}

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
    steptopanel()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
    steptopanel()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('sactive')
        }
        else {
            circle.classList.remove('sactive')
        }
    })
    const actives = document.querySelectorAll('.sactive')
    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100) + '%'
    if (currentActive === 1) {
        prev.disabled = true
    }
    else if (currentActive === circles.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
}

function paneltostep(key1) {
    for (let i = 0; i < circles.length; i++) {
        if (circles[i].innerHTML === key1) {
            currentActive = i + 1
            update()
        }
    }
}

function steptopanel() {
    console.log(circles[currentActive - 1].innerHTML)
    for (let i = 0; i < panels.length; i++) {
        if (panels[i].id === circles[currentActive - 1].innerHTML) {
            removeActiveClasses()
            panels[i].classList.add('pactive');
        }
    }
}
