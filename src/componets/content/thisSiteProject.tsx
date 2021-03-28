import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

const ThisSiteProject = ({ inverted = true }) => <div>
  
      <Container text right floated='right'>
      <Header size={'large'} inverted={inverted}>About the stack</Header>
      <Divider />
        I think the only about this stack that is a little out there is semantic UI. Don't get me wrong, It's been super easy to work with, but I feel like having a decided design team would
        run circles what Sematic offers. The biggest advantage is it give a nice foundation with little effort. What's more interesting (to me at least) is talking about the deployment stack.

        <Header size={'large'} inverted={inverted}>CI/CD</Header>
      <Divider />
        place holder
      </Container>
  </div>

  export default ThisSiteProject;