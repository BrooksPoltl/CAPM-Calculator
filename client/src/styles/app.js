import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    height: 100vh;
    background: linear-gradient(black, purple);
`
export const InnerContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    border: 3px solid purple;
    padding: 20px;
    background-color: white;
`