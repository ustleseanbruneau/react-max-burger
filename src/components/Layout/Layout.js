import React from 'react';

import Aux from '../../hoc/Auxiliary';

import classes from './Layout.css';

const layout = (props) => (
    <Aux>
    <main class="Content">
        {props.children}
    </main>
    </Aux>

);

export default layout;
