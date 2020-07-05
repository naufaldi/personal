import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const SkillContainer = styled.div`
  margin: 3rem 0;
`

const SkillHeading = styled.h1`
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

const Item = styled.div`
  position: relative;
  margin: 1.2rem 1.2rem;
`

const ItemImage = styled(Img)`
  border-radius: 50%;
  transition: 0.3s;
  z-index: 2;
  &:hover {
    transform: translateY(-40px);
    border: 0;
    outline: 0;
    opacity: 0.5;
  }
`

const ItemLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px 0;
  width: 100px;
  text-align: center;
  font-weight: bold;
`

const Skill = () => {
  const data = useStaticQuery(graphql`
    fragment squareImage on File {
      childImageSharp {
        fixed(width: 400, height: 400, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query SkillQuery {
      react: file(relativePath: { eq: "skills/react3.png" }) {
        ...squareImage
      }
      html: file(relativePath: { eq: "skills/html2.png" }) {
        ...squareImage
      }
      nodejs: file(relativePath: { eq: "skills/nodejs.jpg" }) {
        ...squareImage
      }
      css: file(relativePath: { eq: "skills/css2.png" }) {
        ...squareImage
      }
      gatsby: file(relativePath: { eq: "skills/gatsbyjs.jpg" }) {
        ...squareImage
      }
      javascript: file(relativePath: { eq: "skills/javascript.jpg" }) {
        ...squareImage
      }
      express: file(relativePath: { eq: "skills/expressjs.jpg" }) {
        ...squareImage
      }
      mongo: file(relativePath: { eq: "skills/mongodb.jpg" }) {
        ...squareImage
      }
    }
  `)
  return (
    <SkillContainer>
      <SkillHeading>🛠 My Skills</SkillHeading>
      <SkillList>
        <Item>
          <ItemImage
            fixed={data.react.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for react"
          />
          <ItemLabel>React</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.html.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for HTML"
          />
          <ItemLabel>HTML</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.nodejs.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Node JS"
          />
          <ItemLabel>Node JS</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.gatsby.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for Gatsby"
          />
          <ItemLabel>Gatsby JS</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.javascript.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for JavaScript"
          />
          <ItemLabel>JavaScript</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.css.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for CSS"
          />
          <ItemLabel>CSS</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.mongo.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for mongo db"
          />
          <ItemLabel>Mongo DB</ItemLabel>
        </Item>
        <Item>
          <ItemImage
            fixed={data.express.childImageSharp.fixed}
            style={{ width: "100px", height: "100px" }}
            alt="Logo for express js"
          />
          <ItemLabel>Express JS</ItemLabel>
        </Item>
      </SkillList>
    </SkillContainer>
  )
}

export default Skill