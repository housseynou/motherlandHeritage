import React, {useContext} from 'react'
import {Container, Column} from '../CartStyles'
import { CartStatus } from '../CartStatus'


const Cart = () => {
    const {cartProducts} = useContext(CartStatus)
    return (
        <>
            <Container>
                <Column>
                    {!cartProducts?.length && (
                        <div>Votre panier est vide</div>
                    )}
                </Column>
                {!!cartProducts?.length && (
                <Column>

                    <input type='text' placeholder='Votre nom'></input>
                    <input type='text' placeholder='Votre prénom'></input>
                    <h2>Information sur votre Panier</h2>
                    <button>Payer</button>
                </Column>
                )}
            </Container>
        </>
    )
}

export default Cart
