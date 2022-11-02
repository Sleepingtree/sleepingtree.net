import { useState, useEffect, FunctionComponent, useContext } from 'react';
import { Icon, Image, Segment } from 'semantic-ui-react';
import ioClient from 'socket.io-client';

import '../css/discordBot.css'

import { discordBotUrl, ioConnectPath } from '../paths';
import { GlobalContext } from './helpers/globalContext';

type BotStatus = {
  message: string;
  avatarURL: string;
}

const BotStatusComponet: FunctionComponent = () => {
  const [response, setRespose] = useState<BotStatus>();
  const { inverted } = useContext(GlobalContext);

  useEffect(() => {
    const socket = ioClient(discordBotUrl, { path: ioConnectPath });
    socket.on('botStatus', (data) => {
      if (data) {
        setRespose(data);
      }
    });
    return () => { socket.disconnect(); }
  }, []);

  const loaded = () => {
    if (!response) {
      return unloaded;
    }
    const animationTimer = response.message.length / 5;

    return (
      <div className='bot-card-div'>
        <div className='bot-photo-div'>
          <Image src={response.avatarURL} avatar floated='left' />
          <span className={inverted ? 'online-icon inverted' : 'online-icon'} />
        </div>
        <div className='ticker-wrap'>
          <div className={response.message.length > 10 ? 'ticker' : ''}
            style={{ animationDuration: `${animationTimer}s` }}>
            {response.message}
          </div>
        </div>
      </div>
    )
  }

  const unloaded = (
    <div>
      Loading ...
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