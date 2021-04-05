import React, { createRef, FunctionComponent } from 'react';
import { Container, Divider, Header, List, Sticky } from 'semantic-ui-react';
import BotStatusComponet from '../botStatusComponet';
import RenderDesktop from '../layout/desktopLayout';
import isMobile from '../helpers/mobilehelper';

type discordBotProps = {
  inverted?: boolean
}

const DiscordBotMobile = (inverted: boolean, ref: React.RefObject<HTMLElement>) => {
  return (
    <div>
      {renderInner(inverted, true, ref)}
    </div>
  )
}

const MobileDiscordBotSection = (inverted: boolean, ref: React.RefObject<HTMLElement>, isMobile: boolean) => {
  return (
    <>
      <Sticky context={ref}>
        <BotStatusComponet desktop={!isMobile} inverted={inverted} />
      </Sticky>
      <Divider hidden />
    </>
  )
}

const renderInnerDesktop = (inverted: boolean, ref: React.RefObject<HTMLElement>) => {
  return () => renderInner(inverted, false, ref)
}

const renderInner = (inverted: boolean, isMobile: boolean, ref?: React.RefObject<HTMLElement>) => {
  return (
    <>
      <Container text inverted={inverted}>
        <Header size={'large'} inverted={inverted}>How it started</Header>
        <Divider />
            Like I said on my welcome page I consider myself a back-end developer. I was given the task to work with another developer to set up
            a React app as a proof of concept for modernizing our internal UI. They have used React before and already prototyped a skeleton UI.
            <Divider hidden />

            However; as many UI's go the actual UI is only half the battle. I was brought on to help with the backend implimentation. In retrospect
            My boss probably assumed I would implement this backend with Java, as we were a primarly a Java based at the time, I was talked into
            implementing the back end in Node.js to keep the stack homogeneous.
            <Divider hidden />

            Boy, am I ever glad I was convinced to look into Node
            <Divider hidden />
      </Container>
      {isMobile && ref ? MobileDiscordBotSection(inverted, ref, true) : ""}
      <Container text inverted={inverted}>
        Around the same time Valerant was the new hotness as far as gaming went, and I was part of a large enough group that we could consitently
        have our own in house games. In the past I had built a bot to help with in house games, but used for league. It used a system where people could list
        their prefered roles and try and figure out how to make teams. This bot had some issues with it which I will get to later. With all this in mind
        I decided to kill two birds with one stone so to speak. Build a Bot to learn Node and help us spead up in house game creation.
            <Divider hidden />
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
            My old bot was very much coupled to League, as not every game has such hard defined roles like League.
              </List.List>
          <List.Item>
            Make the bot user friendly
              </List.Item>
          <List.List>
            Users should have direct interation with the team generation, or manually making teams shouldn't have to go thought the bot.
              </List.List>
          <List.Item>
            Make the bot require less set up
              </List.Item>
          <List.List>
            With my old script I had to maintain my own list of what users would like to play as well as manually add/remove people 
            from selection depending on who was playing. I want to be lazy too.
              </List.List>
        </List>
        <Header size='medium' inverted={inverted}>Writing the bot</Header>
        <Divider/>
        With the goals in mind I set out to start. As I said I had already been using Node.js at work for a bit, so before I dove into the Discord side of things,
        I set up a basic express app. It started as a way to keep my app running after whatever script I wrote finished executing, but it turned out to have some nice 
        side benefits like providing real-time data to the bot status card right at the top of this page! 
        <Divider hidden/>
        So we have a node app, great.. now what? Well if you google Discord bot node you will get a ton of results. <a href='https://discord.js.org'>Discord js</a>&nbsp;
        is the other main include for this project, there's not much to say about it other then it's a nice api to use to build any sort of discord bot using JavaScript.
        <Divider hidden/>
        For those who are not familier with games the idea of what can make a balanced game
        is a very complex system, but in our case we can boil it down to say our goal is to get the closer we get the teams to a 50% chance to win, the better the balance.
        Well how do we know what chance a team has to win? Enter the Elo system. Long story short Elo came up with a system to rank chess players. The higher the score the 
        better the player and you can figure out the chance of winning each player has based on the Elo differance. We can use this same concept to say okay a team's Elo is
        the sum of the Elo of the members and the chance of each team to win to be based on the differance in the teams Elo.
        <Divider hidden/>
        Okay, so now we have a bot up and running, enhancements from my old bot, and a basic backings on how to make a team now to figure out the work flow. 
        <List ordered inverted={inverted}>
          <List.Item>
            I post the start game command
          </List.Item>
          <List.Item>
            The bot sees everyone in the voice channel I'm in and what game I'm playing.
            <List.List>
              <List.Item>
                Check if the user has an Elo for this game and load it
              </List.Item>
            </List.List>
          </List.Item>
          <List.Item>
            divide up the teams so they are even.... realize this doesn't seem obvious found out it's horribly bad to implemnt, find out it's something called The Partition Problem,
            realize that your flawed approach is the best approximation that doesn't suck, and move on
          </List.Item>
          <List.Item>
            Move the users to the seperate voice channels
          </List.Item>
          <List.Item>
            Wait for the game to end by listening for a message
          </List.Item>
          <List.Item>
            move the users back and update there Elo
          </List.Item>
        </List>
        <Divider hidden/>
          I'm bad at wrapping this up so placeholder for now
      </Container>
    </>
  )
}

const DiscordBot: FunctionComponent<discordBotProps> = ({ inverted = true }) => {
  const ref = createRef<HTMLDivElement>();
  return (
    <div ref={ref}>
      {isMobile() ? DiscordBotMobile(inverted, ref) : RenderDesktop(inverted, renderInnerDesktop(inverted, ref))}
    </div>
  )
}

export default DiscordBot;