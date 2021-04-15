import { useState, useEffect, FunctionComponent } from 'react';
import { Icon, Image, Segment } from 'semantic-ui-react';
import ioClient from 'socket.io-client';

import '../css/discordBot.css'

import { discordBotUrl, ioConnectPath } from '../paths';

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
    const socket = ioClient(discordBotUrl, {path: ioConnectPath});
    socket.on('botStatus', (data) =>{
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
    <div className='bot-card-div'>
      <div className='bot-photo-div'>
        <Image src={response.avatarURL} avatar floated='left' />
        <span className='online-icon'/>
      </div>
      <div className={desktop ? 'ticker-wrap desktop' :'ticker-wrap mobile'}>
        <div className={response.message.length > 10 ? 'ticker' : ''} 
          style={{animationDuration : `${animationTimer}s`}}>
            {response.message}
        </div>
      </div>
    </div>
  )}

  const unloaded = (
    <div>
      <Icon name="spinner" id="bot-loading-icon" />Loading ...
    </div>
  )

  const body = (
    <Segment inverted={inverted}>
      {(response) ? loaded() : unloaded}
    </Segment>
  )

  return body;
}

export default BotStatusComponet;