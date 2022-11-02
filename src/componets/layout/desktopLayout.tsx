import { createRef } from "react";
import { Container, Grid, GridColumn, Sticky } from 'semantic-ui-react';
import BotStatusComponet from '../botStatusComponet';


const RenderDesktop = (innerJSX: () => JSX.Element) => {
  const ref = createRef<HTMLDivElement>();
  return (
    <Grid>
      <Grid.Row>
        <GridColumn width={3}>
          <Container id="desktop-bot-div">
            <BotStatusComponet />
          </Container>
        </GridColumn>
        <GridColumn width={12}>
          <div ref={ref}>
            {innerJSX()}
          </div>
        </GridColumn>
      </Grid.Row>
    </Grid>
  )
}

export default RenderDesktop;