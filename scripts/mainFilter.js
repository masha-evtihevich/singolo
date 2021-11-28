const filterBox = document.querySelectorAll('.main__img');

document.querySelector('.main__list').addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') {
        return false;
    }
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide')
        } else {
            elem.classList.remove('hide')
        }
    })
});