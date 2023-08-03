import axios from 'axios';
import React from 'react';
//import image2 from '../images/image2.png'
import { ProdContainer, ProdWrapper, ProdName, ProdDesc, ProdType, ProdItem } from './ProductStyle';

class NewProd extends React.Component {

  state = {details: [],}

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => {})
  }
  render(){
    let prodt;
    return(
      <ProdContainer>
        {prodt} = {this.state.details.map((product, id) => (
        <ProdWrapper >
            <ProdItem key={id}> 

                    <div>
                        <ProdName>{product.name}</ProdName>
                        <ProdDesc>{product.description}</ProdDesc>
                        <ProdType>{product.type}</ProdType>
                        <div>{product.inStock}</div>
                    </div>
            
            </ProdItem>
        </ProdWrapper>
        
        ))}
        
      </ProdContainer>
    )
  }
  
}

export default NewProd;
