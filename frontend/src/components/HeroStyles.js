import { styled } from "styled-components";

export const HeroContainer = styled.div`
    background-color: #4B4E2B;
    color:#fff;
    padding: 10px 0;
`

export const HeroWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    
    gap: 10px;
    img{
    max-width: 100%;
    max-height: 400px;
    display: block;
    margin: 0 auto;
    }
    div:nth-child(1) {
    order: 2;
    }
    @media screen and (min-width: 768px) {
    grid-template-columns: 0.6fr 1.4fr;
    div:nth-child(1) {
        order: 0;
    }
    img{
        max-width: 100%;
    }
    }
`

export const HeroItem = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size:1.2rem;
    @media screen and (min-width: 768px) {
        font-size:2.8rem;
    }
`

export const Desc = styled.p`
    color:#aaa;
    font-size:1rem;
`
;