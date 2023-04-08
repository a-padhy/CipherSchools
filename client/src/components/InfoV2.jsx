import React from "react";
import SocialMediaInput from "./Input/SocialMediaInput";
const InfoV2 = () => {
  //   const [facebook, setFacebook] = React.useState("");
  //   const [instagram, setInstagram] = React.useState("");
  //   const [twitter, setTwitter] = React.useState("");
  //   const [youtube, setYoutube] = React.useState("");
  //   const [linkedin, setLinkedin] = React.useState("");
  //   const [pinterest, setPinterest] = React.useState("");
  return (
    <div className="p-10">
      <h2 class="text-lg font-semibold">ON THE WEB</h2>
      <div className="flex flex-wrap justify-between">
        <SocialMediaInput
          platform="facebook"
          label="Facebook"
          placeholder="Facebook"
          // value={facebook}
          // onChange={(e) => setFacebook(e.target.value)}
        />
        <SocialMediaInput
          platform="instagram"
          label="Instagram"
          placeholder="Instagram"
          // value={instagram}
          // onChange={(e) => setInstagram(e.target.value)}
        />
        <SocialMediaInput
          platform="twitter"
          label="Twitter"
          placeholder="Twitter"
          // value={twitter}
          // onChange={(e) => setTwitter(e.target.value)}
        />
        <SocialMediaInput
          platform="youtube"
          label="YouTube"
          placeholder="YouTube"
          // value={youtube}
          // onChange={(e) => setYoutube(e.target.value)}
        />
        <SocialMediaInput
          platform="linkedin"
          label="LinkedIn"
          placeholder="LinkedIn"
          // value={linkedin}
          // onChange={(e) => setLinkedin(e.target.value)}
        />
        <SocialMediaInput
          platform="pinterest"
          label="Pinterest"
          placeholder="Pinterest"
          // value={pinterest}
          // onChange={(e) => setPinterest(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InfoV2;
