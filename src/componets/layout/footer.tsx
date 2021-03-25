import React, { FunctionComponent } from "react";
import { Container, Grid, Header, Segment, Sticky } from "semantic-ui-react";

type FooterProps = {
  inverted?: boolean
}

const Footer: FunctionComponent<FooterProps> = ({ inverted = true }) =>
  <Sticky className='ui fixed bottom sticky' style={{ width: '100%' }}>
    <Segment inverted={inverted} vertical style={{ padding: '5em 0em' }}>
      <Container inverted={inverted}>
        <Grid divided inverted={inverted} stackable>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={5}>
              <Header as='h4' inverted={inverted}>
                Contact Info
                </Header>
              <Container text>
                Email: <a href='mailto:ajgrabow@gmail.com'>ajgrabow@gmail.com</a>
                <br />
                  GitHub: <a href='https://github.com/Sleepingtree'>https://github.com/Sleepingtree</a>
              </Container>
            </Grid.Column>
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </Sticky>

export default Footer;