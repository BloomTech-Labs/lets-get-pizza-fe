import React from "react";
import { Image, Button, Card } from "semantic-ui-react";
import SimpleContainer from "../main/SimpleContainer";

import rf from "../../media/robin.jpg";
import jh from "../../media/jordan.png";
import jl from "../../media/justin.jpg";
import cs from "../../media/curtis.jpg";
import ss from "../../media/spencer.jpg";

const LinkButton = ({ href, icon }) => (
  <Button circular size="large" icon={icon} href={href} target="_blank" />
);

const AboutUs = () => (
  <SimpleContainer
    title="Meet the team"
    icon="users"
    description="Meet the fine people behind your new favorite app!"
  >
    <Card.Group centered>
      <Card>
        <Image src={rf} wrapped />
        <Card.Content>
          <Card.Header>Robin Familara</Card.Header>
          <Card.Meta>Backend Developer</Card.Meta>
          <Card.Description>
            I&rsquo;m a loyal Pelicans/Saints fan. My hobby is watching epic
            battles among Marvel superheroes and villains on YouTube while
            eating pizza.
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <LinkButton href="https://github.com/rfamilara" icon="github" />
          <LinkButton href="https://linkedin.com/in/rf2017/" icon="linkedin" />
          <LinkButton href="https://twitter.com/Niborhoods" icon="twitter" />
        </Card.Content>
      </Card>

      <Card>
        <Image src={jh} wrapped />
        <Card.Content>
          <Card.Header>Jordan Hubbard</Card.Header>
          <Card.Meta>Lead Backend Developer</Card.Meta>
          <Card.Description>
            I do art, tech, music, and TV. I like figuring out how things work,
            and then building and creating things with em.
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <LinkButton href="https://github.com/thejhubbs" icon="github" />
        </Card.Content>
      </Card>

      <Card>
        <Image src={jl} wrapped />
        <Card.Content>
          <Card.Header>Justin Landry</Card.Header>
          <Card.Meta>Backend Developer</Card.Meta>
          <Card.Description>
            Fighting games, LARP, Proper pizza
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <LinkButton href="https://github.com/JCBLandry" icon="github" />
          <LinkButton href="https://twitter.com/MelonRats" icon="twitter" />
        </Card.Content>
      </Card>

      <Card>
        <Image src={cs} wrapped />
        <Card.Content>
          <Card.Header>Curtis Scafe</Card.Header>
          <Card.Meta>Backend Developer</Card.Meta>
          <Card.Description>
            Born in Jamaica, grew up in NJ, currently in Nashville. Gearhead/car
            guy. Love to hike. Foodie and runner.
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <LinkButton href="https://github.com/curtdragon" icon="github" />
          <LinkButton href="https://twitter.com/curtdragon" icon="twitter" />
          <LinkButton
            href="https://linkedin.com/in/curtis-scafe-web-developer/"
            icon="linkedin"
          />
          <LinkButton href="https://curtiscancode.dev/" icon="globe" />
        </Card.Content>
      </Card>

      <Card>
        <Image src={ss} wrapped />
        <Card.Content>
          <Card.Header>Spencer Summerville</Card.Header>
          <Card.Meta>Lead Frontend Developer</Card.Meta>
          <Card.Description>Pizza and programming aficionado.</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <LinkButton href="https://github.com/grenuttag" icon="github" />
          <LinkButton
            href="https://www.linkedin.com/in/spencer-summerville-4281a092/"
            icon="linkedin"
          />
          <LinkButton href="https://spencer.summerville.dev" icon="globe" />
        </Card.Content>
      </Card>
    </Card.Group>
  </SimpleContainer>
);

export default AboutUs;
