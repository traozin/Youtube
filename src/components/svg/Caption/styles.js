import styled from "styled-components";

export const Container = styled.svg`
    /* width: 100%; */
    /* max-width: 80px; */
    @media (min-width: 600px) {
      /* width: 100%; */
      /* max-width: 127px; */
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"}; 
    }
`   