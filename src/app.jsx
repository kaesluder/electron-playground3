import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DateTime } from 'luxon';

function render() {
    const nowtime = DateTime.now().toLocaleString();
    ReactDOM.render(<h2>Hello from React! {nowtime}</h2>, document.body);
}

render();