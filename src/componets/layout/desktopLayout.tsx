import React, { createRef, useContext } from "react";
import { Container, Grid, GridColumn, Sticky } from 'semantic-ui-react';
import BotStatusComponet from '../botStatusComponet';
import {GlobalContext} from '../helpers/globalContext';


const RenderDesktop = (innerJSX: () => JSX.Element) => {
    const ref = createRef<HTMLDivElement>();
    const context = useContext(GlobalContext);
    return (
      <Grid>
        <Grid.Row>
          <GridColumn width={3}>
            <Sticky context={ref}>
              <Container id="desktop-bot-div">
                <BotStatusComponet desktop={true} inverted = {context.inverted}/>
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