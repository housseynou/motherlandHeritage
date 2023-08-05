import styled from 'styled-components'

export const ProdContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px;
    padding: 20px 40px; 
    
`

export const ProdWrapper = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    
`

export const ProdItem = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    img{
    max-width: 100%;
    max-height: auto;
    }
    position: relative;
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

export const ProdInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Price = styled.div`
    padding-right: 3px;
`

export const Button = styled.button`
    color: orange;
    font-size: 20px;
    width: 40px;
    height: 40px;
    padding: 0;
`

export const ButCont = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    padding-right: 2px;
    
`
;