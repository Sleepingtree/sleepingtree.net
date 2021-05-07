import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Image, List } from 'semantic-ui-react';
import { discordBotPath } from '../../paths';
import { GlobalContext } from '../helpers/globalContext'

import httpOnly from '../../resorces/Http only access.png';

const ThisSiteProject = () => {
  const { inverted } = useContext(GlobalContext);
  return (
    <div>
      <Container text right floated='right'>
        <Header size={'large'} inverted={inverted}>About the stack</Header>
        <Divider />
      I think the only thing about this stack that is a little out there is semantic UI. Don't get me wrong, It's been super easy to work with, but I feel like having a decided design team would
      run circles around what Sematic offers. The biggest advantage is it give a nice foundation with little effort. What's more interesting (to me at least) is talking about the deployment stack.
      <Header size={'large'} inverted={inverted}>CI/CD</Header>
        <Divider />
      Since this is a personal site. I wanted to keep costs down, but at the same time I didn't want to host everything requiring me to have a computer running all the time. I thought about
      having my Raspberry Pi also run a Apache Httpd server, but I ultimitely decided against this when I ran into troubles compiling the typescript from my
      &nbsp;<Link to={discordBotPath}>Node discord bot.</Link> AWS free tier has gotten a lot better over the years, and with the low level of traffic I satarted with AWS.
      <Header size='medium' inverted={inverted}>S3</Header>
        <Divider />
      Since this is a static page hosting site, its using s3's option for static page hosting. The only thing the really had to be tooled with when using s3 for this stack is the fact that react routes
      will end up confusing the browser and request file paths that do not exist in s3. Using Appache httpd server allows for a higher degree of customization with their path rewrite engine, and while
      s3 offers a json rewite rules engine it is severely lacking. While it feels a little dirty, an easy option to avoid this is to have 403 and 404 error codes forward to index.html.
      <Divider hidden />
      And we are good right?
      <Divider hidden />
        <Image src={httpOnly} />
        <Divider hidden />
      Well, crap.
      <Divider hidden />
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
        <Divider />
        Route 53 is simply AWS's DNS server with a lot of nice quality of life features built into it. For example it comes with built in health checks, logging, sub net mapping and more. For this use I
        don't really care if the domain goes down. Realistically this would only happen if there's some back end AWS issues, and it's fine for my personal site to go down for a few minutes. I did have to mess
        with a bit of configuration to get the sub domain to go to my own personal raspbery Pi running the discord bot you see above, but it's not too complex to set up. With the domain registered, time to move on to the next part. HTTPS
        <Header size='medium' inverted={inverted}>Cloudfront</Header>
        <Divider />
        No one wants to see the http lock yelling at you, and I don't want anyone to think that I don't take security seriously. AWS is a well used stack, and after some <s>Googleing</s> research, Cloudfront + Route 53
        seems like the way to go. The reason I talked about Route 53 first is you have to own the domain before you can get a trusted cert for it. Self signed certs are something I'm familiar with, but wouldn't work as I'm operating
        outside of an corporate setting.
      </Container>
    </div>
  )
}
export default ThisSiteProject;