import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react'
import { GlobalContext } from '../helpers/globalContext';
import DarkModeToggle from 'react-dark-mode-toggle';

const MenuComponet = () => {
  const [activeItem, setActiveItem] = useState('welcome');
  const context = useContext(GlobalContext);

  const darkModeToggleStyle = {
    padding: 0,
    marginLeft: 'auto'
  }

  return (
    <></>
  )
}

export default MenuComponet;