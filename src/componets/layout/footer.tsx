import React, { FunctionComponent } from "react";
import { Container, Grid, Header, Icon, Segment, Sticky } from "semantic-ui-react";

type FooterProps = {
  inverted?: boolean
}

const Footer: FunctionComponent<FooterProps> = ({ inverted = true }) =>
  <Sticky className='footer' style={{ width: '100%' }}>
    <Segment inverted={inverted} vertical style={{ padding: '3em 0em' }}>
      <Container inverted={inverted}>
        <Grid divided inverted={inverted} stackable>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={5}>
              <Header as='h4' inverted={inverted}>
                Contact Info
              </Header>
                <Container text>
                <Icon name={"mail"}/>Email: <a href='mailto:ajgrabow@gmail.com' target='new'>ajgrabow@gmail.com</a>
                <br />
                <Icon name={"github"}/>GitHub: <a href='https://github.com/Sleepingtree' target='new'>github.com/Sleepingtree</a>
                <br/>
                <Icon name={"linkedin"}/>Linkedin: <a href='https://linkedin.com/in/AaronGrabow' target='new'>linkedin.com/in/AaronGrabow</a>
              </Container>
            </Grid.Column>
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </Sticky>

export default Footer;