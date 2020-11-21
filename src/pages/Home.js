import React from "react";
import styled from "styled-components";

import Header from "../components/header"; // Temporary while under construction

const HeroSection = styled.section`
    width: 100%;
    height: 80vh;
    padding: 2rem;

    background-color: #1E88E5;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 2.5em;
        margin: 0;
        margin-bottom: 0.5em;
    }

    p {
        font-family: "Red Hat Display", sans-serif;
        font-size: 1.5em;

        margin: 0;
        margin-bottom: 2em;
    }

    input {
        display: block;
        border: none;
        padding: 1em;
        font-size: 1em;
        font-family: inherit;

        width: 100%;
        max-width: 600px;

        border-radius: 0.5em;
        box-shadow: 0 0.4em 1em rgb(0 0 0 / 0.25);

        &:focus {
            /* Override user-agent focus style/ring */
            outline: none;
            box-shadow:
                0 0 0 0.2em #90CAF9,
                0 0.4em 1em rgb(0 0 0 / 0.25);
        }
    }
`;

const Hero = () => (
    <HeroSection>
        <h1>Belum pernah melakukan sesuatu?</h1>
        <p>Jangan malu untuk bertanya!</p>
        {/* <label htmlFor="searchquery">Tanyakan di sini!</label> */}
        <input type="text" placeholder="Tanyakan di sini!" autoFocus />
    </HeroSection>
);

const HomePage = props => (
    <React.Fragment>
        <Header /> {/* Temporary while still under construction; Will be moved to inside App.js instead */}
        <Hero />
    </React.Fragment>
)

export default HomePage;