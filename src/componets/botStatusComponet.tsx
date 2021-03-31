import { useState } from 'react'
import { Icon, Image } from 'semantic-ui-react';

import { discordBotStatusUrl} from '../paths';

type BotStatus = {
    message: string;
    avatarURL: string;
  }

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

const BotStatusComponet = () => {
    const [botAvatarUrl, setBotAvatarUrl] = useState<string | undefined>();
    const [botStatus, setBotStatus] = useState<string | undefined>();
    //TODO look into not calling this on re-render
    loadBotStatus(setBotStatus, setBotAvatarUrl);

    const loaded = (
        <div>
            <Image src={botAvatarUrl} avatar floated='left'/>
            {botStatus}
        </div>
        
    )
    const unloaded =(
        <div>
            <Icon name="spinner"/>Loading ...
        </div>
    )
  
    return (botAvatarUrl && botStatus) ? loaded : unloaded;
  }
  
  export default BotStatusComponet;
  