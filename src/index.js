import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as h from 'react-hyperscript-helpers';

const Main = () => { return h.div("[Main]") }
const Foo = () => { return h.div("[Foo]") }
const Bar = () => { return h.div("[Bar]") }

const Page = () =>
{
    return h.h(
        Switch,
        [
            h.h(
                Route,
                {
                    exact: true,
                    path: '/demo-router',
                    component: Main
                }
            ),
            h.h(
                Route,
                {
                    path: '/demo-router/foo',
                    component: Foo
                }
            ),
            h.h(
                Route,
                {
                    path: '/demo-router/bar',
                    component: Bar
                }
            )
        ]
    )
}

ReactDOM.render(
    h.h(
        BrowserRouter,
        {
            basename: '/demo-router'
        },
        [
            h.h(Page)
        ]
    ),
    document.getElementById('root')
);

