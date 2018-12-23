import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as h from 'react-hyperscript-helpers';

const Main = () => { return h.div("[Main]") }
const Foo = () => { return h.div("[Foo]") }
const Bar = () => { return h.div("[Bar]") }

const Page = () =>
{
    console.log("PUBLIC_URL == " + process.env.PUBLIC_URL)

    return h.h(
        Switch,
        [
            h.h(
                Route,
                {
                    exact: true,
                    path: '/',
                    component: Main
                }
            ),
            h.h(
                Route,
                {
                    path: '/foo',
                    component: Foo
                }
            ),
            h.h(
                Route,
                {
                    path: '/bar',
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
            basename: process.env.PUBLIC_URL
        },
        [
            h.h(Page)
        ]
    ),
    document.getElementById('root')
);

