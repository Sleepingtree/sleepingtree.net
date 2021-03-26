import { FunctionComponent } from 'react';
import { Container, Divider, Header, List } from 'semantic-ui-react';

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
            have our own in house games. In the past I had built a bot to help with in house games, but for league. It used a system where people could list
            their prefired roles and try and figure out how to make teams. This bot had some issues with it which I will get to later. With all this in mind
            I decided to kill two birds with one stone so to speak. Build a Bot to learn Node and help us spead up in house game creation.

            
            <Header size='medium' inverted={inverted}>Initial Goals for the bot</Header>
            <Divider />
      <List ordered inverted={inverted}>
        <List.Item>
          Learn about Node.js
              </List.Item>
        <List.List>
          I was already using Node for work to help with the react project, but I didn't quite feel at home.
              </List.List>
        <List.Item>
          Make the bot work with every game.
              </List.Item>
        <List.List>
          My old bot was very much cupled to League, as not every game has such hard defined roles like League.
              </List.List>
        <List.Item>
          Make the bot user friendly
              </List.Item>
        <List.List>
          Users had no direct interation with the team generation. I just had to post the teams in the chat channel
              </List.List>
        <List.Item>
          Make the bot require less set up
              </List.Item>
        <List.List>
          I had to maintain my own list of what users would like to play as well as manually add/remove people from selection depending on who was playing
              </List.List>
      </List>
    </Container>
  </div>

export default DiscordBot;