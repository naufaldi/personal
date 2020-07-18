import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/Button"
import {
  Input,
  InputGroup,
  InputBox,
  InputLabel,
  TextArea,
} from "../components/InputBox"
import SocialButtons from "../components/SocialButtons"
import SectionHeading from "../components/sectionHeading"

const ContactContainer = styled.div`
  margin: 2rem 0;
  max-width: 750px;
  width: 100%;
  padding: 1px;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const ContactText = styled.p`
  margin-bottom: 2rem;
  /* text-align: center; */
  opacity: 0.8;
`

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Me" />
      <ContactContainer>
        <form onSubmit={handleSubmit}>
          <SectionHeading>Contact Me</SectionHeading>
          <ContactText>
            Contact me job offers, collaboration and hmm ... Just anything.
            Robots aren't welcome, BTW.
          </ContactText>
          <div style={{ textAlign: "center" }}>
            <SocialButtons darkenOnHover />
          </div>
          <ContactText>Or use the form below</ContactText>
          <InputGroup>
            <Input>
              <InputBox type="text" placeholder=" " required name="name" />
              <InputLabel>Name</InputLabel>
            </Input>
            <Input>
              <InputBox type="email" placeholder=" " required name="email" />
              <InputLabel>Email</InputLabel>
            </Input>
          </InputGroup>
          <TextArea>
            <InputBox
              as="textarea"
              rows="8"
              placeholder=" "
              required
              name="message"
            />
            <InputLabel>Message</InputLabel>
          </TextArea>
          <ButtonWrapper>
            <Button type="submit">
              <span className="fas fa-paper-plane" /> Send message
            </Button>
          </ButtonWrapper>
        </form>
      </ContactContainer>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
