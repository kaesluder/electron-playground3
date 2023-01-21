import React, { useState } from 'react';
import { useEffect } from 'react';
import { DateTime } from 'luxon';

const App = function () {
    const nowtime = DateTime.now().toLocaleString();
    return (<div>Hello from React! {nowtime}</div>)

}

export default App