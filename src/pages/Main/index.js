import React from 'react';

import { Container } from './style';
import Bird from '../../assets/Bird.png'

function Main(){
    return (
        <Container>
            <img src={Bird} />
        </Container>
    );
}
export default Main;
