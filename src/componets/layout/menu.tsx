import { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, MenuItemProps } from 'semantic-ui-react'

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

        <Link to ='/contact'>
          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
          >
            ContactInfo
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}