import { FunctionComponent } from "react";

type WelcomeProps = {
  inverted?: boolean
}

const Welcome: FunctionComponent<WelcomeProps> = ({inverted = true}) => {
    return (
      <div>
        <body className={inverted? 'dark': ''}>
          this is a Welcome page
        </body>
      </div>
    )
  }
  
  export default Welcome;
  