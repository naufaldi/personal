import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  FaSun as Sun,
  FaRegMoon as Moon,
  FaBars,
  FaTimes,
  FaCode,
} from "react-icons/fa"
import StyledText from "../components/styledText"

const ToggleButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  /* color: inherit; */

  color: ${({ theme }) => theme.navbarLink};

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.sidebarLink};

    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 1.3rem;
    z-index: 13;
  }

  transition: 1s;
  font-size: 1rem;
  transition: 0.5s;
  transform: ${({ light }) => (light ? "rotate(0deg)" : "rotate(180deg)")};
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`

const NavigationContainer = styled.div`
  width: 100%;
  & + div {
    @media (max-width: 768px) {
      filter: ${({ sidebarOpen }) => (sidebarOpen ? "blur(1px)" : "")};
      position: ${({ sidebarOpen }) => (sidebarOpen ? "fixed" : "")};
    }
  }
  /* background-color: ${({ theme }) =>
    theme.mode === "light" ? "white" : "inherit"}; */
    background: transparent;
  box-shadow: ${({ theme }) =>
    theme.mode === "light" ? "0 0 10px #ccc" : "0"};

  margin-bottom: 4rem;
  padding: 0.7rem 3rem;
  font-family: "Rowdies", sans-serif;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.7rem 1rem;
  }

  position: relative;
`

const NavLabel = styled.div`
  margin: 0;
  width: 20%;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    text-align: left;
    width: 100%;
  }
`

const NavbarNav = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;

  @media (max-width: 768px) {
    display: flex;
    top: 0;
    left: 0;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    /* background: ${({ theme }) => theme.bg}; */
    background: rgb(25,39,52);

    box-shadow: rgba(0, 0, 0, 0.1) 3px 0px 18px;

    transition: transform 0.5s;

    overflow-x: hidden;

    z-index: 10;
    transform: ${({ sidebarOpen }) =>
      sidebarOpen ? "translateX(0)" : "translateX(-100vw)"};
  }
`

const NavbarItem = styled(Link)`
  margin-right: 2rem;
  color: ${({ theme }) => theme.navbarLink};
  transition: opacity 0.2s;

  @media (max-width: 768px) {
    color: ${({ theme }) => theme.sidebarLink};
    margin: 2rem;
  }

  &:hover {
    opacity: 0.7;
  }
`

const ActiveNavbarItem = styled(NavbarItem)`
  color: ${({ theme }) => theme.primary};
`

const NavbarToggler = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    font-size: 1.3rem;
    z-index: 13;
    transition: 0.4s;
    transform: ${({ sidebarOpen }) => (sidebarOpen ? "rotateX(180deg)" : "")};
    cursor: pointer;

    /* color: ${({ theme }) => theme.navbarLink}; */

    @media (max-width: 768px) {
      color: ${({ theme, sidebarOpen }) =>
        sidebarOpen ? theme.sidebarLink : "inherit"};
    }
  }
`

const items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const Navigation = ({ location, toggleTheme, theme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }
  const handleToggle = () => {
    setSidebarOpen(false)
    toggleTheme()
  }
  return (
    <NavigationContainer sidebarOpen={sidebarOpen}>
      <NavLabel>
        <Link to="/" style={{ color: "inherit" }}>
          <StyledText>
            <FaCode /> John
          </StyledText>
        </Link>
      </NavLabel>

      <NavbarToggler onClick={toggleSidebar} sidebarOpen={sidebarOpen}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </NavbarToggler>

      <NavbarNav sidebarOpen={sidebarOpen}>
        {items.map((item, index) => {
          let loc = location.pathname
          if (loc.length > 1 && loc.endsWith("/")) {
            loc = loc.substring(0, loc.length - 1)
          }
          if (
            loc === item.link ||
            (loc.includes("/blog") && item.link === "/blog") ||
            (loc.includes("/tag") && item.link === "/blog")
          ) {
            return (
              <ActiveNavbarItem to={item.link} key={index}>
                <StyledText>{item.name}</StyledText>
              </ActiveNavbarItem>
            )
          } else {
            return (
              <NavbarItem to={item.link} key={index}>
                {item.name}
              </NavbarItem>
            )
          }
        })}
        <ToggleButton
          onClick={handleToggle}
          color={theme === "light" ? "black" : "yellow"}
          light={theme === "light" ? true : false}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </ToggleButton>
      </NavbarNav>
    </NavigationContainer>
  )
}

export default Navigation
