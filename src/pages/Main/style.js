import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    position: relative;
    top: 40px;
    width: 500px;
    height: 400px;
    background: #afd3ef;
    border: 3px solid #032e4f;
    margin: 0 auto;
    text-align: center;

    img {
        position: absolute;
        left: 170px;
        top: 90px;
        border: 5px solid #000;
        transform:rotateX(45deg) rotateY(45deg) scale(0.5);
        transition: all 1s linear;
    }

    &:hover img {
        transform:rotateX(-45deg) rotateY(-45deg) scale(1.5);
    }
`;
