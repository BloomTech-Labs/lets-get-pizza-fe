import React from "react";
import { Image, Button, Card } from "semantic-ui-react";
import SimpleContainer from "../main/SimpleContainer";

import rf from "../../media/robin.jpg";
import jh from "../../media/jordan.png";
import jl from "../../media/justin.jpg";
import cs from "../../media/curtis.jpg";
import ss from "../../media/spencer.jpg";

const teamMembers = [
  {
    key: "robin",
    image: rf,
    name: "Robin Familara",
    position: "Backend Developer",
    bio: `I'm a loyal Pelicans/Saints fan. My hobby is watching epic
    battles among Marvel superheroes and villains on YouTube while
    eating pizza.`,
    links: [
      { type: "github", url: "https://github.com/rfamilara" },
      { type: "linkedin", url: "https://linkedin.com/in/rf2017" },
      { type: "twitter", url: "https://twitter.com/Niborhoods" }
    ]
  },
  {
    key: "jordan",
    image: jh,
    name: "Jordan Hubbard",
    position: "Lead Backend Developer",
    bio: `I do art, tech, music, and TV. I like figuring out how things work,
    and then building and creating things with em.`,
    links: [{ type: "github", url: "https://github.com/" }]
  },
  {
    key: "justin",
    image: jl,
    position: "Backend Developer",
    bio: "Fighting games, LARP, Proper pizza",
    links: [
      { type: "github", url: "https://github.com/JCBLandry" },
      { type: "twitter", url: "https://twitter.com/MelonRats" }
    ]
  },
  {
    key: "curtis",
    image: cs,
    position: "Backend Developer",
    bio: `Born in Jamaica, grew up in NJ, currently in Nashville. Gearhead/car
    guy. Love to hike. Foodie and runner.`,
    links: [
      { type: "github", url: "https://github.com/curtdragon" },
      { type: "twitter", url: "https://twitter.com/curtdragon" },
      {
        type: "linkedin",
        url: "https://linkedin.com/in/curtis-scafe-web-developer"
      },
      { type: "globe", url: "https://curtiscancode.dev" }
    ]
  },
  {
    key: "spencer",
    image: ss,
    position: "Lead Frontend Developer",
    bio: `Pizza and programming aficionado. Northwest raised,
    currently residing in the deep south.`,
    links: [
      { type: "github", url: "https://github.com/grenuttag" },
      { type: "globe", url: "https://spencer.summerville.dev" }
    ]
  }
];

const AboutUs = () => (
  <SimpleContainer
    title="Meet the team"
    icon="users"
    description="Meet the fine people behind your new favorite app!"
  >
    <Card.Group centered>
      {teamMembers.map(member => (
        <Card key={member.key}>
          <Image src={member.image} wrapped />
          <Card.Content>
            <Card.Header>{member.name}</Card.Header>
            <Card.Meta>{member.position}</Card.Meta>
            <Card.Description>{member.bio}</Card.Description>
          </Card.Content>

          <Card.Content extra>
            {member.links.map(link => (
              <Button
                circular
                icon={link.type}
                href={link.url}
                target="_blank"
              />
            ))}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </SimpleContainer>
);

export default AboutUs;
