import { useState, useEffect } from 'react'
import { Icon, Image, Segment } from 'semantic-ui-react';

import { discordBotStatusUrl} from '../paths';

type BotStatus = {
    message: string;
    avatarURL: string;
  }

  //This will only be called when loaded, setSTatus and setAvatar will not change, but makes the linter happy
  const useMountEffect = (setStatus: (status: string) => void, setAvatar: (url: string) => void) => useEffect(()=>{
    loadBotStatus(setStatus, setAvatar);
  },[setStatus, setAvatar]);

async function loadBotStatus(setStatus: (status: string) => void, setAvatar: (url: string) => void){
    const repsone = await fetch(discordBotStatusUrl);
    if(repsone.ok){
      const bodyJson = await repsone.json() as BotStatus;
      if(bodyJson){
        setStatus(bodyJson.message);
        setAvatar(bodyJson.avatarURL);
      }
    }
  }

const BotStatusComponet = ({ inverted = true }) => {
    const [botAvatarUrl, setBotAvatarUrl] = useState<string | undefined>();
    const [botStatus, setBotStatus] = useState<string | undefined>();

    useMountEffect(setBotStatus, setBotAvatarUrl);

    const loaded = (
        <div>
            <Image src={botAvatarUrl} avatar floated='left'/>
            <Icon name="circle" id="bot-status-icon"/>
            {botStatus}
        </div>
        
    )
    const unloaded = (
        <div>
            <Icon name="spinner" id="bot-loading-icon"/>Loading ...
        </div>
    )

    const body = (
      <Segment inverted={inverted} id= 'bot-card-div'>
        {(botAvatarUrl && botStatus) ? loaded : unloaded}
      </Segment>
    )
  
    return body;
  }
  
  export default BotStatusComponet;
  