import React from "react";
import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    /* height: 3rem; */
    padding: 1rem;

    background-color: #1E88E5;

    display: flex;
    align-items: center;
`;

const TempLogo = styled.h1`
    display: block;
    margin: 0 1em;

    font-weight: 900;
    font-style: italic;

    color: white;
    text-shadow: 0 3px 4px rgb(0 0 0 / 0.5);
`;

const SubContainer = styled.div`
    display: flex;
    align-items: center;

    &.left {
        a {
            color: white;
            text-decoration: none;
            margin: 0 0.5em;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const Header = () => (
    <Container>
        <SubContainer className="left">
            <TempLogo>tanyakan.id</TempLogo>
            <a href="#">Jelajahi topik</a>
            <a href="#">Tentang kami</a>
            <a href="#">Ingin berkontribusi?</a>
        </SubContainer>
    </Container>
);

export default Header;