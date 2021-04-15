import React, { createRef, FunctionComponent } from "react";
import { Container, Divider, Header, Image, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import isMobile from '../helpers/mobilehelper';
import RenderDesktop from '../layout/desktopLayout';
import { thisSitePath, discordBotPath } from '../../paths';

import banner from '../../resorces/banner-2.png';
import avatarImage from '../../resorces/avatar 1.png';
import BotStatusComponet from "../botStatusComponet";

type WelcomeProps = {
  inverted?: boolean
}

const Welcome: FunctionComponent<WelcomeProps> = ({inverted = true}) =>{
  const ref = createRef<HTMLDivElement>();
  return(
    <div ref={ref}>
      {isMobile() ? WelcomeMobile({inverted: inverted}, ref) : RenderDesktop(inverted, () => renderInner({inverted: inverted}, false))}
    </div>
  )
}

const WelcomeMobile = ({inverted = true}, ref: React.RefObject<HTMLElement>) => {
  return (
    <div>
      {renderInner({inverted: inverted}, true, ref)}
    </div>
  )
}

const renderDiscordBot = (inverted: boolean, ref?: React.RefObject<HTMLElement>) =>{
  return (
    <>
      <Divider hidden />
        <Sticky context={ref}>
          <BotStatusComponet desktop={!isMobile} inverted={inverted} />
        </Sticky>
      <Divider hidden />
    </>
  )
}

const renderInner = ({inverted = true}, isMobile: boolean, ref?: React.RefObject<HTMLElement>) =>
  <Container>
    <Image src={avatarImage} avatar size='small' floated='left' />
    <Header inverted={inverted} size='large'>Welcome to my site</Header>
    <Container text floated='left'>
      This site was made with TypeScript, React and Simantitic UI. The purpose of this site it to serve as a mixed personal and professional site.
      I consider myself more of a backend developer then front end, but hopefully that doesn't show to much.
      <Divider hidden/>
      If you want to learn more about this site you can read more about it's stack choces as well as how it's hosted <Link to={thisSitePath}>here </Link>
      If you are interested about what the status card {isMobile ? 'shown right below' : 'shown in the top left'} fine out more <Link to={discordBotPath}>here</Link>
    </Container>
    {isMobile && ref ? renderDiscordBot(inverted, ref) : <Divider hidden />}
    <Container text>
      The bot status updates in real time based on what I am doing, or what ever music my friends are playing in discord. This is done via web-sockets instead of http
      and if you want to see the implimentation details both the bot repo that provides the stats as well as the repo used to display the bot status. Though the 
      backend has a lot of differnt intergration points.
    </Container>
    <Divider hidden/>
    <Image src={banner}/>
  </Container>

export default Welcome;
