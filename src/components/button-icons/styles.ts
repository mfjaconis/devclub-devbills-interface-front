import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 0.25rem;
    background-color: ${theme.colors.primary};
    border: none;
    padding: 0 0.75rem;
    transition: all 100ms;
    border-color: ${theme.colors.primary} ;
    transition: all 100ms;

    &:hover{
        background-color: ${theme.colors.primaryDark};
    }

    svg{
        fill:${theme.colors.black};
        width: 3rem;
        height: 1.25rem;
    }
`;
