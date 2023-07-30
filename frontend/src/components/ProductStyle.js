import styled from 'styled-components'

export const ProdContainer = styled.div`
    Background-color: #222
    
    
`

export const ProdWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    
`

export const ProdItem = styled.div`
    background-color: #fff;
    
    
    
    border-radius: 10px;
    img{
    max-width: 100%;
    max-height: 180px;
    }
`

export const ProdName = styled.h3`
    font-weight: normal;
`

export const ProdDesc = styled.p`
    font-size: 0.8rem;
`

export const ProdType = styled.p`
    font-size: 0.8rem
`

export const ProdTitle = styled.h2`
    color: orange;
`
;