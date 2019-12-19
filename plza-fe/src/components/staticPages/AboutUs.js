import React from "react";
import { Grid, Image, Button, Header, Reveal } from "semantic-ui-react";

//Importing profile images
import rf from "../../media/rf.jpg";
import jh from "../../media/jh.png";
import jl from "../../media/jl.jpg";
import cs from "../../media/cs.jpg";
import ss from "../../media/profile.png";
import placeholder from "../../media/logo.png"

//Constants for URLs
//Robin
const rfgh = "https://github.com/rfamilara";
const rfli = "https://www.linkedin.com/in/rf2017/";
const rftw = "https://twitter.com/Niborhoods";

//Jordan
const jhgh = "https://github.com/thejhubbs";

//Justin
const jlgh = "https://github.com/JCBLandry";
const jltw = "https://twitter.com/MelonRats";

//Curtis
const csgh = "https://github.com/curtdragon";
const cstw = "https://twitter.com/curtdragon";
const csli = "https://www.linkedin.com/in/curtis-scafe-web-developer/";
const csws = "https://curtiscancode.dev/";

//Spencer 
const ssgh = "https://github.com/grenuttag";
const ssws = "https://spencer.summerville.dev";

export default function AboutUs() {
  return (
    <div style={{ textAlign: "justify" }}>
      <Header textAlign="center" as="h1">Meet the Team</Header>
      <Grid columns="equal" stackable padded>
        <Grid.Row>
          <Grid.Column >
            <Header as="h3">
              Robin Familara
            </Header>

            <Reveal animated="rotate">
              <Reveal.Content visible>
                <Image circular size="small" src={placeholder} />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image circular size="small" src={rf} />
              </Reveal.Content>
            </Reveal>

            <Button
              basic
              href={rfgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={rftw}
              target="_blank"
              circular
              size="large"
              icon="twitter"
            />
            <Button
              basic
              href={rfli}
              target="_blank"
              circular
              size="large"
              icon="linkedin"
            />
            <p>
              I’m a loyal Pelicans/Saints fan. My hobby is watching epic battles
              among Marvel superheroes and villains on YouTube while eating
              pizza.
              <br></br>
              Online research beast. I love discussing and learning a tech
              stacks and other tech topics.
            </p>
          </Grid.Column>

          <Grid.Column >
            <Header  as="h3">
              Jordan Hubbard
            </Header>
            <Reveal animated="rotate">
              <Reveal.Content visible>
                <Image circular size="small" src={placeholder} />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image circular size="small" src={jh} />
              </Reveal.Content>
            </Reveal>
            <Button
              basic
              href={jhgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <p>
              I do art, tech, music, and tv. I like figuring out how things
              work, and then building and creating things with em.
            </p>
          </Grid.Column>

          <Grid.Column >
            <Header as="h3">
              Justin Landry
            </Header>
            <Reveal animated="rotate">
              <Reveal.Content visible>
                <Image circular size="small" src={placeholder} />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image circular size="small" src={jl} />
              </Reveal.Content>
            </Reveal>
            <Button
              basic
              href={jlgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={jltw}
              target="_blank"
              circular
              size="large"
              icon="twitter"
            />
            <p>Fighting games, LARP, Proper pizza</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column >
            <Header as="h3">
              Curtis Scafe
            </Header>
            <Reveal animated="rotate">
              <Reveal.Content visible>
                <Image circular size="small" src={placeholder} />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image circular size="small" src={cs} />
              </Reveal.Content>
            </Reveal>
            <Button
              basic
              href={csgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={cstw}
              target="_blank"
              circular
              size="large"
              icon="twitter"
            />
            <Button
              basic
              href={csli}
              target="_blank"
              circular
              size="large"
              icon="linkedin"
            />
            <Button
              basic
              href={csws}
              target="_blank"
              circular
              size="large"
              icon="globe"
            />
            <p>
              Born in Jamaica, grew up in NJ, currently in Nashville.
              <br></br>
              Gearhead\car guy. Love to hike. Foodie and runner.
            </p>
          </Grid.Column>

          <Grid.Column >
            <Header as="h3">
              Spencer Summerville
            </Header>
            <Reveal animated="rotate">
              <Reveal.Content visible>
                <Image circular size="small" src={placeholder} />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image circular size="small" src={ss} />
              </Reveal.Content>
            </Reveal>
            <Button
              basic
              href={ssgh}
              target="_blank"
              circular
              size="large"
              icon="github"
            />
            <Button
              basic
              href={ssws}
              target="_blank"
              circular
              size="large"
              icon="globe"
            />
            <p>Pizza and programming aficionado.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
