import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Menu, MenuItemProps } from 'semantic-ui-react'

type MenuState = {
  activeItem: string
  inverted?: boolean
}

export default class MenuComponet extends Component<{}, MenuState> {
  
  static defaultProps = {
    activeItem: 'welcome',
    inverted: true
  }

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
    const { activeItem, inverted } = this.state;
    return (
      <Menu inverted ={inverted}>
        <Link to ='/'>
          <Menu.Item
            name='welcome'
            active={activeItem === 'welcome'}
            onClick={this.handleItemClick}
          >
            Welcome
          </Menu.Item>
        </Link>

        <Dropdown inverted = {inverted} item text='Projects'>
          <Dropdown.Menu inverted = {inverted}>
            <Link to ='/projects/discordBot'>
              <Dropdown.Item inverted = {inverted}>Discord bot</Dropdown.Item>
            </Link>
            <Link to ='/projects/reactSite'>
              <Dropdown.Item inverted = {inverted}>This site!</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}