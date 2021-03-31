import { FunctionComponent } from "react";
import { Container, Grid, GridColumn, Image, Sticky } from 'semantic-ui-react';

import isMobile from '../helpers/mobilehelper'

import banner from '../../resorces/banner-2.png'
import avatarImage from '../../resorces/avatar 1.png'

type WelcomeProps = {
  inverted?: boolean
}



const Welcome: FunctionComponent<WelcomeProps> = () =>
  <div>
    {isMobile() ? WelcomeMobile() : RenderDesktop()}
  </div>

const WelcomeMobile = () => {
  return (
    <div>
      {renderInner()}
    </div>
  )
}

const RenderDesktop = () => {
  return (
    <Grid>
      <Grid.Row>
        <GridColumn width={2}>
          <Sticky >
            <Container className="mobile-hidden">
              <Image src={avatarImage} avatar floated='left' />Coco is playing somebody
            </Container>
          </Sticky>
        </GridColumn>
        <GridColumn width={13}>
          {renderInner()}
        </GridColumn>
      </Grid.Row>
    </Grid>
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
