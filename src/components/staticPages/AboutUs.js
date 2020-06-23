import React from "react";
import { Image, Button, Card } from "semantic-ui-react";
import SimpleContainer from "../main/SimpleContainer";

// import rf from "../../media/robin.jpg";
// import jh from "../../media/jordan.png";
// import jl from "../../media/justin.jpg";
// import cs from "../../media/curtis.jpg";
// import jm from "../../media/spencer.jpg";


// import ba from '../../media/buddy.png';
// import ch from '../../media/cody.jpg';
// import ft from '../../media/freddie.jpg';
// import jo from '../../media/jeff.png';
// import jc from '../../media/John-C.png';
// import jm from '../../media/John-M.png';
// import kd from '../../media/me.png';


const teamMembers = [
  {
    key: "buddy",
    // image: rf,
    name: "Buddy Agyin",
    position: "Full-Stack Web Developer",
    bio: `The Coding God! He has mastered the art of turning coffee into code. Lover of all things Lakers, Coffee, and Kanye West.`,
    links: [
      { type: "github", url: "github.com/agyin3" },
      { type: "linkedin", url: "https://linkedin.com/in/buddy-agyin" }
    ]
  },
  { //needs image only//
    key: "jeff",
    // image: jo,
    name: "Jeff Orndorff",
    position: "Full-Stack Web Developer",
    bio: `The Testing God - do not test him. He will win.`,
    links: [
      { type: "github", url: "www.github.com/jeffreyo3" },
      { type: "linkedin", url: "https://linkedin.com/in/jeffrey-orndorff" },
      { type: "globe", url: "www.jeffreyorndorff.com"}
    ]
  },
  { //only needs image//
    key: "cody",
    // image: ch,
    name: "Cody Hayes",
    position: "Full Stack Web Developer",
    bio: `Southern California, Passion for learning and bettering himself. Javascript and guitar are his two favorite things.`,
    links: [
      { type: "github", url: "https://github.com/Cody-Hayes97" },
      { type: "twitter", url: "https://twitter.com/CodyHayesJS" },
      { type: "linkedin", url: "https://www.linkedin.com/in/cody-hayes-b34722191/"},
      { type: "globe", url: "https://www.codyhayesdeveloper.com/"}
    ]
  },
  { //only needs image//
    key: "john c",
    // image: cc,
    name: "John Chaing",
    position: "Full-Stack Web Developer",
    bio: `John Chaing is a Full Stack Web Developer. He enjoys all things Marvel, BBQs, sports and most of all, entertaining his family.`,
    links: [
      { type: "github", url: "https://github.com/jchaing" },
      { type: "twitter", url: "https://twitter.com/johnchaing" },
      {type: "linkedin",url: " https://www.linkedin.com/in/john-chaing/"},
      { type: "globe", url: "http://www.johnchaing.com/" }
    ]
  },
  {
    key: "katrina",
    // image: ss,
    name: "Katrina Dierking",
    position: "Full-Stack Web Developer",
    bio: `Pizza and programming aficionado. Northwest raised,
    currently residing in the deep south.`,
    links: [
      { type: "github", url: "https://github.com/Katrina-Dierking"},
      { type: "linkedin", url: "https://www.linkedin.com/in/kalynn-dier/"},
      { type: "globe", url: "https://spencer.summerville.dev" }
    ]
  },

  {
    key: "freddy",
    // image: jm,
    name: "Freddy Thompson",
    position: "Full-Stack Web Developer",
    bio: `Pizza and programming aficionado. Northwest raised,
    currently residing in the deep south.`,
    links: [
      { type: "github", url: "https://github.com/grenuttag" },
      { type: "globe", url: "https://spencer.summerville.dev" }
    ]
  },

  { //only needs image//
    key: "john m",
    // image: jm,
    name: "Justin McCutcheon",
    position: "Project Lead for Plza Team | Full-Stack Web Developer",
    bio: `Leading the crew to success, John is a Web Dev genius who loves his dog -- and pizza.`,
    links: [
      { type: "github", url: "https://github.com/Jtmccutcheon" },
      {type: "linkedin", url: "https://www.linkedin.com/in/justinmccutcheon/"},
      { type: "globe", url: "https://justinweb.dev" }
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
