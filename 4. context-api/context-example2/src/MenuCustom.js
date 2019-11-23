// Context with Functional component using useContext hook
import React, { useContext } from 'react';

import ThemeContext from './ThemeContext';

const MenuCustom = () => {
    const item = useContext(ThemeContext);

    return (
        <div>{item.menu}</div>
    )
}

export default MenuCustom;