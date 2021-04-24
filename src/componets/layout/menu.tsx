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

  return(
    <Menu inverted ={context.inverted}>
        <Link to ='/'>
          <Menu.Item
            name='welcome'
            active={activeItem === 'welcome'}
            onClick={(_e, props) => setActiveItem((old) => props.name ?? old)}
          >
            Welcome
          </Menu.Item>
        </Link>

        <Dropdown inverted = {context.inverted} item text='Projects'>
          <Dropdown.Menu inverted = {context.inverted}>
            <Link to ='/projects/discordBot'>
              <Dropdown.Item inverted = {context.inverted}>Discord bot</Dropdown.Item>
            </Link>
            <Link to ='/projects/reactSite'>
              <Dropdown.Item inverted = {context.inverted}>This site!</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item style={darkModeToggleStyle}>
          <GlobalContext.Consumer>
              {(globalContext) =>(
                <DarkModeToggle className='dark-mode-toggle'
                  checked={globalContext.inverted}
                  onChange={globalContext.toggleInverted}
                />
              )}
          </GlobalContext.Consumer>
          
        </Menu.Item>
      </Menu>
  )
}

export default MenuComponet;