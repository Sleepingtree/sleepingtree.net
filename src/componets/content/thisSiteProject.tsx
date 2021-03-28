import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Image, List } from 'semantic-ui-react';

import httpOnly from '../../resorces/Http only access.png';

const ThisSiteProject = ({ inverted = true }) => <div>
  
      <Container text right floated='right'>
      <Header size={'large'} inverted={inverted}>About the stack</Header>
      <Divider />
        I think the only about this stack that is a little out there is semantic UI. Don't get me wrong, It's been super easy to work with, but I feel like having a decided design team would
        run circles what Sematic offers. The biggest advantage is it give a nice foundation with little effort. What's more interesting (to me at least) is talking about the deployment stack.

        <Header size={'large'} inverted={inverted}>CI/CD</Header>
      <Divider />
        Since this is a personal site. I wanted to keep costs down, but at the same time I didn't want to host everything requireing me to have a computer running all the time. I thought about 
        having my Raspberry Pi also run a Apache Httpd server, but I ultimitly decided agenst this when I ran into trobles compliling the typescript from my
        &nbsp;<Link to ='/projects/discordBot'>Node discord bot.</Link> AWS free teir has gotten a lot better over the years, and with the low level of trafic.
        <Header size='medium' inverted={inverted}>S3</Header>
        <Divider/>
        Since this is a static page hosting it using s3's option for static page hosting. The only thing the really had to be tooled with when using s3 for this stack is the fact that react routes 
        will end up confuing the browser and request file paths that do not exist in s3. Using Appache httpd server allows for a higher degree of custimization with there path rewrite engine, and while
        s3 offers a json rewite rules engine it is severely lacking. While it feels a little dirty an easy option to advoid this is to have 403 and 404 error codes forward to index.html. 
        <Divider hidden/>
        And we are good right?
        <Divider hidden/>
        <Image src={httpOnly}/>
        <Divider hidden/>
        Well, crap.
        <Divider hidden/>
        Two issues here.
        <List ordered inverted={inverted}>
          <List.Item>
            The URL
          </List.Item>
          <List.Item>
            The unsecure padlock of http shame
          </List.Item>
        </List>
        <Header size='medium' inverted={inverted}>Route 53</Header>
        <Divider/>
        Route 53 is simply AWS's DNS server with a lot of nice quality of life features built into it. For example it comes with built in health checks, logging, sub net mapping and more. For this use case I 
        don't really care if the domain goes down. Realistically this would only happen if there's some back end AWS issues, and it's fine for My personal site to go down for a few miniutes. With the domain registered time to
        move on to the next part. HTTPS
        <Header size='medium' inverted={inverted}>Cloudfront</Header>
        <Divider/>
        No one wants to see the http lock yelling at you, and I don't want anyone to think that I don't take security seriously. AWS is a well used stack, and after some <s>Googleing</s> research, Cloudfront + Route 53 
        seems like way to go. The reason I talked about Route 53 first is you have to own the domain before you can get a trusted cert for it. Self signed certs are something I'm familure with, but wouldn't work as I'm operating 
        outside of an corperate setting.
      </Container>
  </div>

  export default ThisSiteProject;