import React from "react";
import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;

    background-color: #1E88E5;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

const Logo = styled.h1`
    font-weight: 900;
    font-style: italic;
    font-size: 3em;

    display: block;
    margin: 0;

    text-shadow: 0 4px 6px rgb(0 0 0 / 0.5); /* TODO: Convert all of them to em unit */
`;

const DescriptionText = styled.p`
    display: block;

    margin: 0;
    margin-top: 1em;
`;


const UnderConstructionPage = () => (
    <Container>
        <div>
            <Logo>gimana.id</Logo>
            <DescriptionText>Situs ini sedang dalam pengerjaan. Terima kasih atas pengertiannya.</DescriptionText>
        </div>
    </Container>
);

export default UnderConstructionPage;