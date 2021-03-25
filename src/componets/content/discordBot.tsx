import { FunctionComponent } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

type discordBotProps = {
    inverted?: boolean
}

const DiscordBot: FunctionComponent<discordBotProps> = ({ inverted = true }) =>
    <div>
        <Container text right floated='right'>
            <Header size={'large'} inverted={inverted}>How it started</Header>
            <Divider />
          Like I said on my welcome page I consider myself a back-end devloper. I was given the task to work with another devloper to set up
          a React app as a proof of concept for modernizing our internal UI. They have used React before and already prototyped a skeleton UI.
          <br />
            <br />
          However; as many UI's go the actual UI is only half the battle. I was brough on to help with the backend implimentaiton. In retrospect
          My boss probably assumed I would implement this backend with Java, as we where a primarrly a Java based at the time, I was talked into
          implemneting the back in in Node.js to keep the stack homogeneous.
          <br />
            <br />
          Boy, am I ever glad I was conviced to look into Node
          <br />
            <br />
            Around the same time Valerant was the new hotness as far as gaming went, and I was part of a large enough group that we could consitently 
            have our own in house games.
        </Container>
    </div>

export default DiscordBot;