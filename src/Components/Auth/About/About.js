import React, { Component } from "react";

// import { Link } from "react-router-dom";

import { H1, H2, H3, Section, AboutContainer } from "./about-style.js";

import { List, Image, Divider } from "semantic-ui-react";

class About extends Component {
  render() {
    return (
      <div>
        <H1>"Meet The Team"</H1>
        <AboutContainer>
          <Section>
            <H2>William Soukkachang</H2>
            <Image
              circular
              onClick={this.toggleVisibility}
              src="https://www.imageupload.net/upload-image/2019/11/02/Will-squared.jpg"
              as="a"
              size="small"
              href="https://www.linkedin.com/in/wsoukkachang"
              target="_blank"
              rel="noopener noreferrer"
              bordered
            />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a href="https://github.com/Wsoukkachang" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="linkedin" />
                <List.Content>
                  <a
                    href="https://www.linkedin.com/in/wsoukkachang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Section>

          <Divider section />

          <Section>
            <H2>Shota Kikozashvili</H2>
            <Image
              circular
              onClick={this.toggleVisibility}
              src="https://img.imageupload.net/2020/07/18/ShotaProfile.jpg"
              as="a"
              size="small"
              href="https://www.linkedin.com/in/shotakikozashvili/"
              target="_blank"
              rel="noopener noreferrer"
              bordered
            />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a href="https://github.com/ShotaKiko" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="linkedin" />
                <List.Content>
                  <a
                    href="https://www.linkedin.com/in/shotakikozashvili/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Section>

          <Divider section />

          <Section>
            <H2>Dionuta (Tay) Burton</H2>
            <Image
              circular
              onClick={this.toggleVisibility}
              src="https://img.imageupload.net/2020/07/18/Tay.jpg"
              as="a"
              size="small"
              href="https://taycodes.com/"
              target="_blank"
              rel="noopener noreferrer"
              bordered
            />
            <H3>Full Stack Developer</H3>

            <List>
              <List.Item>
                <List.Icon name="github" />
                <List.Content>
                  <a href="https://github.com/Dionuta" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name="linkedin" />
                <List.Content>
                  <a
                    href="https://www.linkedin.com/in/dionuta/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </List.Content>
              </List.Item>
            </List>
          </Section>

          <Divider section />
        </AboutContainer>
      </div>
    );
  }
}

export default About;
