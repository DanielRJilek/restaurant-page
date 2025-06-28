function menuCreate() {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.setAttribute('#main');
    content.appendChild(main);
    const menu = document.createElement('div');
    const beer = document.createElement('div');
    const food = document.createElement('div');
    alert('menu page loaded succesfully');
}

export { menuCreate };