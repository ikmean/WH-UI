import React from "react";
import { SocialMediaWrapper, Social } from "./SocialMediaStyles";
import { ReactComponent as Facebook } from "../../lib/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../lib/icons/Twitter.svg";
import { ReactComponent as Linkedin } from "../../lib/icons/linkedin.svg";
import { ReactComponent as Youtube } from "../../lib/icons/youtube.svg";
import { ReactComponent as Whatsapp } from "../../lib/icons/whatsapp.svg";

export default function SocialMedia() {
  return (
    <SocialMediaWrapper>
      <Social>
        <Facebook />
      </Social>
      <Social>
        <Twitter />
      </Social>
      <Social>
        <Linkedin />
      </Social>
      <Social>
        <Youtube />
      </Social>
      <Social>
        <Whatsapp />
      </Social>
    </SocialMediaWrapper>
  );
}
