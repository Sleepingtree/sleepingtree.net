import { FunctionComponent, useContext } from "react";
import { Container, Grid, Header, Icon, Segment, Sticky } from "semantic-ui-react";
import { GlobalContext } from "../helpers/globalContext";

type FooterProps = {
  inverted?: boolean
}

const Footer: FunctionComponent<FooterProps> = () => {
  const context = useContext(GlobalContext);
  return (
    <Segment inverted={context.inverted} vertical style={{ padding: '3em 0em' }}>
      <Container inverted={context.inverted}>
        <Grid divided inverted={context.inverted} stackable>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={5}>
              <Header as='h4' inverted={context.inverted}>
                Contact Info
              </Header>
              <Container text>

              </Container>
            </Grid.Column>
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer;