import { createRef, useContext } from "react";
import { Container, Divider, Header, Image, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { MobileContext } from '../helpers/mobilehelper';
import { GlobalContext } from '../helpers/globalContext';
import RenderDesktop from '../layout/desktopLayout';
import { thisSitePath, discordBotPath } from '../../paths';

import banner from '../../resorces/banner-2.png';
import avatarImage from '../../resorces/avatar 1.png';
import BotStatusComponet from "../botStatusComponet";


const Welcome = () =>{
  const ref = createRef<HTMLDivElement>();
  const globalContext = useContext(GlobalContext);
  const isMobile = useContext(MobileContext);
  
  const renderDiscordBot = () =>{
    return (
      <>
        <Divider hidden />
          <Sticky context={ref}>
            <BotStatusComponet/>
          </Sticky>
        <Divider hidden />
      </>
    )
  }
  
  const renderInner = () =>{
    return (
      <Container>
      <Image src={avatarImage} avatar size='small' floated='left' />
      <Header inverted={globalContext.inverted} size='large'>Welcome to my site</Header>
      <Container text floated='left'>
        This site was made with TypeScript, React and Semantic UI. The purpose of this site it to serve as a mixed personal and professional site.
        I consider myself more of a backend developer then front end, but hopefully that doesn't show to much.
        <Divider hidden/>
        If you want to learn more about this site you can read more about it's stack choices as well as how it's hosted <Link to={thisSitePath}>here </Link>
        If you are interested about what the status card {isMobile ? 'shown right below' : 'shown in the top left'} fine out more <Link to={discordBotPath}>here</Link>
      </Container>
      {isMobile && ref ? renderDiscordBot() : <Divider hidden />}
      <Container text>
        The bot status updates in real time based on what I am doing, or what ever music my friends are playing in discord. This is done via web-sockets instead of http
        and if you want to see the implementation details of both the bot repo that provides the status as well as the repo used to display the bot status they are public on my github. Though, the 
        back-end is used for more then just providing the status, and has a lot of other integration points.
      </Container>
      <Divider hidden/>
      <Image src={banner}/>
    </Container>
    )
  }  

  return(
    <div ref={ref}>
      {isMobile ? renderInner() : RenderDesktop(renderInner)}
    </div>
  )
}



export default Welcome;
