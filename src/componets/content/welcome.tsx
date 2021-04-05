import { FunctionComponent } from "react";
import { Container, Image } from 'semantic-ui-react';

import isMobile from '../helpers/mobilehelper';

import RenderDesktop from '../layout/desktopLayout'

import banner from '../../resorces/banner-2.png';
import avatarImage from '../../resorces/avatar 1.png';

type WelcomeProps = {
  inverted?: boolean
}

const Welcome: FunctionComponent<WelcomeProps> = ({inverted = true}) =>{
  return(
    <div>
      {isMobile() ? WelcomeMobile() : RenderDesktop(inverted, renderInner)}
    </div>
  )
}

const WelcomeMobile = () => {
  return (
    <div>
      {renderInner()}
    </div>
  )
}

const renderInner = () =>
  <Container floated='right'>
    <Image src={avatarImage} avatar size='small' floated='left' />
    <Container text right floated='right'>
      This site was made with TypeScript, React and Simantitic UI. The perpose of this site it to serve as a mixed personal and profesinal site.
      I consider myself more of a backend devloper then front end, but hopefully that doesn't show to much.
    </Container>
    <Image src={banner} centered />
  </Container>

export default Welcome;
