import React from "react";
import styled from "styled-components";
import { Image, Button, Card } from "semantic-ui-react";
import SimpleContainer from "../main/SimpleContainer";

// import rf from "../../media/robin.jpg";
// import jh from "../../media/jordan.png";
// import jl from "../../media/justin.jpg";
// import cs from "../../media/curtis.jpg";
// import jm from "../../media/spencer.jpg";


import ba from '../../media/buddy.png';
import ch from '../../media/cody.jpg';
import ft from '../../media/freddie.jpg';
import jo from '../../media/jeff.png';
import jc from '../../media/john.png';
import jm from '../../media/justin.png';
import kd from '../../media/me.png';

const Team = styled.div`
  border:.5px solid grey;
  box-shadow: 5px 8px 5px slategrey;
  padding:2%;
  margin:1%;
`

const teamMembers = [
  {
    key: "buddy",
    image: ba,
    name: "Buddy Agyin",
    position: "Full-Stack Web Developer",
    bio: `The Coding God! He has mastered the art of turning coffee into code. Lover of all things Lakers, Coffee, and Kanye West.`,
    links: [
      { type: "github", url: "github.com/agyin3" },
      { type: "linkedin", url: "https://linkedin.com/in/buddy-agyin" }
    ]
  },
  {
    key: "jeff",
    image: jo,
    name: "Jeff Orndorff",
    position: "Full-Stack Web Developer",
    bio: `The Testing God - do not test him. He will win.`,
    links: [
      { type: "github", url: "www.github.com/jeffreyo3" },
      { type: "linkedin", url: "https://linkedin.com/in/jeffrey-orndorff" },
      { type: "globe", url: "www.jeffreyorndorff.com"}
    ]
  },
  { 
    key: "cody",
    image: ch,
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
  {
    key: "john c",
    image: jc,
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
    image: kd,
    name: "Katrina Dierking",
    position: "Full-Stack Web Developer",
    bio: `When design, coding, and marketing collide to create beautifully optimized sites, Katrina was there.`,
    links: [
      { type: "github", url: "https://github.com/Katrina-Dierking"},
      { type: "linkedin", url: "https://www.linkedin.com/in/kalynn-dier/"},
      { type: "globe", url: "https://www.notes.hertimetocode.com" }
    ]
  },

  {
    key: "freddie",
    image: ft,
    name: "Freddie Thompson",
    position: "Full-Stack Web Developer",
    bio: `A self-taught developer with enthusiasm for full stack development 
    and curiosity to learn new tools and technologies. Freddie is familiar with the entire 
    software development process from design and development to testing and deployment. 
  `,
    links: [
      { type: "github", url: "https://github.com/freddiet803" },
      { type: "linkedin", url: " https://www.linkedin.com/in/fredrick-thompson-b9ab4666/"}
    ]
  },

  {
    key: "john m",
    image: jm,
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
        <Team>
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
        </Team>
      ))}
  
    </Card.Group>

    
  </SimpleContainer>
 
);

export default AboutUs;
