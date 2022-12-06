const arrows = document.querySelectorAll('.arrow')
const arrowsLeft = document.querySelectorAll('.arrow-left')
const movieLists = document.querySelectorAll('.movie-list')

arrows.forEach((arrow, index) => {
    const itemLength = movieLists[index].querySelectorAll('img').length
    let clickCounter = 0

    arrow.addEventListener('click', () => {
        clickCounter++
        if(itemLength - (4+clickCounter) > 0) {
            movieLists[index].style.transform = `translateX(${
            movieLists[index].computedStyleMap().get('transform')[0].x.value - 300}px)`
        } else if (itemLength - (4+clickCounter) === 0) {
            movieLists[index].style.transform = `translateX(${
            movieLists[index].computedStyleMap().get('transform')[0].x.value - 300}px)`
            arrow.style.transform = 'rotateY(180deg)'
        } else {
            movieLists[index].style.transform = 'translateX(0)'
            clickCounter = 0
            arrow.style.transform = 'rotateY(360deg)'
        }
    })
})