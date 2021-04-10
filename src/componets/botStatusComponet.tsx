import { useState, useEffect, FunctionComponent } from 'react';
import { Container, Icon, Image, Segment } from 'semantic-ui-react';
import ioClient from 'socket.io-client';

import { ioConnectPath } from '../paths';

type BotStatus = {
  message: string;
  avatarURL: string;
}

type BotStatusProps ={
  inverted: boolean;
  desktop: boolean;
}

const BotStatusComponet: FunctionComponent<BotStatusProps>  = ({ inverted = true, desktop}) => {
  const [response, setRespose] = useState<BotStatus>();

  useEffect(() => {
    const socket = ioClient({path: ioConnectPath});
    socket.on('botStatus', (data) =>{
      console.log(data);
      if(data){
        setRespose(data);
      }
    });
    return () => {socket.disconnect();}
  }, []);

  const loaded = () =>{
    if(!response){
      return unloaded;
    }
    const animationTimer = response.message.length / 5;

    return (
    <Container>
      <Container id='bot-photo-div' style={{float:'left'}}>
        <Image src={response.avatarURL} avatar floated='left' />
        <Icon name="circle" id="bot-status-icon" />
      </Container>
      <Container className={desktop ? 'ticker-wrap desktop' :'ticker-wrap mobile'}>
        <div className={response.message.length > 10 ? 'ticker' : ''} 
          style={{animationDuration : `${animationTimer}s`}}>
            {response.message}
        </div>
      </Container>
    </Container>
  )}

  const unloaded = (
    <div>
      <Icon name="spinner" id="bot-loading-icon" />Loading ...
    </div>
  )

  const body = (
    <Segment inverted={inverted} id='bot-card-div'>
      {(response) ? loaded() : unloaded}
    </Segment>
  )

  return body;
}

export default BotStatusComponet;