import React, { FunctionComponent } from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";

type FooterProps = {
    inverted?: boolean
}

const Footer: FunctionComponent<FooterProps> = ({inverted = true}) => 
    <aside>
        <Segment inverted ={inverted} vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={10}>
                <Header as='h4' inverted>
                  Contact Info
                </Header>
                <p>
                  Email: <a href ='mailto:ajgrabow@gmail.com'>ajgrabow@gmail.com</a>
                  <br/>
                  GitHub: <a href='https://github.com/Sleepingtree'>https://github.com/Sleepingtree</a>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
  </aside>
  
  export default Footer;