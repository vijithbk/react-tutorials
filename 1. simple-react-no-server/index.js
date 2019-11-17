const { createElement } = React;
const { render } = ReactDOM;

const title = createElement(
    'h1',
    {id: 'title', className: 'header'},
    'Header'
);

render(title, document.getElementById('root'))