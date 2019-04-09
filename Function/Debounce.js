const debounce = (fn, ms) => {
    let timeoutId;
    return function (args) {
        clearTimeout(timeoutId);
        setTimeout(() => fn(args), ms);
    }
};

const resize = (event) => {
    console.log(event, window.innerHeight, window.innerWidth);
}

window.addEventListener('resize', debounce(resize, 1000));