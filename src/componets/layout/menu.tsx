import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Menu, MenuItemProps } from 'semantic-ui-react'
import { GlobalContext } from '../helpers/globalContext';

type MenuState = {
  activeItem: string
}

export default class MenuComponet extends Component<{}, MenuState> {
  
  static defaultProps = {
    activeItem: 'welcome'
  }

  static contextType = GlobalContext;

  constructor(props: MenuState) {
    super(props);
    this.state = { ...props };
  }

  handleItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }: MenuItemProps) => {
    if (name) {
      this.setState({ activeItem: name });
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu inverted ={this.context.inverted}>
        <Link to ='/'>
          <Menu.Item
            name='welcome'
            active={activeItem === 'welcome'}
            onClick={this.handleItemClick}
          >
            Welcome
          </Menu.Item>
        </Link>

        <Dropdown inverted = {this.context.inverted} item text='Projects'>
          <Dropdown.Menu inverted = {this.context.inverted}>
            <Link to ='/projects/discordBot'>
              <Dropdown.Item inverted = {this.context.inverted}>Discord bot</Dropdown.Item>
            </Link>
            <Link to ='/projects/reactSite'>
              <Dropdown.Item inverted = {this.context.inverted}>This site!</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}