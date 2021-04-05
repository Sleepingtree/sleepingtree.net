import React, { createRef } from "react";
import { Container, Grid, GridColumn, Sticky } from 'semantic-ui-react';
import BotStatusComponet from '../botStatusComponet';


const RenderDesktop = (inverted: boolean, innerJSX: () => JSX.Element) => {
    const ref = createRef<HTMLDivElement>();
    return (
      <Grid>
        <Grid.Row>
          <GridColumn width={3}>
            <Sticky context={ref}>
              <Container id="desktop-bot-div">
                <BotStatusComponet desktop={true} inverted = {inverted}/>
              </Container>
            </Sticky>       
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