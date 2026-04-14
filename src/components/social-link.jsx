import { Github, Glitch, ItchIo, Twitter } from "./icons.jsx";

import A from "./anchor.jsx";

const SocialLink = ({ Social, children, ...props }) => (
  <>
    <A {...props}>
      {children} <Social />
    </A>
  </>
);

const GH = (props) => <SocialLink Social={Github} {...props} />;
const Tw = (props) => <SocialLink Social={Twitter} {...props} />;
const Gl = (props) => <SocialLink Social={Glitch} {...props} />;
const Itch = (props) => <SocialLink Social={ItchIo} {...props} />;

export { GH, Gl, Itch, Tw };
export default SocialLink;
