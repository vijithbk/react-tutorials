const { createElement } = React;
const { render } = ReactDOM;

const title = createElement(
    'h1',
    {id: 'title', className: 'header'},
    'Header'
);

render(
    <h1 className="header" style={{backgroundColor: 'red'}}>
        Header
    </h1>
    , document.getElementById('root'))