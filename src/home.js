function homeCreate() {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    content.appendChild(main);
    const logo_section = document.createElement('div');
    const description_section = document.createElement('div');
    const hours_section = document.createElement('div');
    const location_section = document.createElement('div');
    alert('home page loaded successfully');
}

export { homeCreate };