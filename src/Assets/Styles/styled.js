import styled from 'styled-components';
import { Button, Card, CardBody, CardImg, Container } from 'reactstrap';
import background from '../Images/background.jpg';

export const StyledNavbar = styled.div`
    display: flex;
    list-style: none;
    justify-content: space-around;
    padding: 10px;
`
export const StyledImg = styled.img`
    width: 50px;
    padding: 0;
`
export const StyledGenre = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 80px;
    font-size: 20px;
`
export const StyledSignUp = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h5`
    font-size: 100%;
    font-weight: bolder;
    text-align: center;
`
export const StyledInput = styled.input`
/* width: 100%; */
    width: 300px;
    border-radius: 10px;
    border: 1px solid grey;
    outline: none;
    padding: 5px;
`
export const StyledButton = styled.button`
    width: 80px;
    background-color: white;
    color: black;
    border: none;
    font-weight: bolder;
    padding-top: 5px;
`
export const GroupButton = styled(Button)`
    opacity: 0.8;
    margin: 5px;
    padding: 5px;
    border-radius: 15px;
    text-align: center;
`
export const StyledSign = styled.button`
    padding-left: 5px;
    color: blue;
    border: none;
    background-color: white;
`
export const StyledProfile = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
    padding: 20px;
    border: 1px solid #c5d0e0;
    background-color: #c5d0e0;
    opacity: 0.8;
    justify-content: left;
    border-radius: 20px;
`
export const StyledWatchlist = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    justify-content: center;
    background-color:#c5d0e0;
`
export const StyledDetail = styled.div`
    background-color: #aebed6;
    padding: 20px;
    border-radius: 20px;
`
export const StyledBackground = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url(${background});
    padding: 20px;
    background-position: contain;
    height: max-content;
    margin-bottom: 50px;
    margin-top: 20px;
`
export const StyledCard = styled(Card)`
    margin-bottom: 30px;
    border-radius: 20px;
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 101%;
    }
`
export const StyledImage= styled(CardImg)`
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    opacity: 0.9;
    &:hover {
        opacity: 1;
    }
`
export const StyledP = styled.p`
    text-align: center;
`
export const StyledContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`
export const StyledCardBody = styled(CardBody)`
    background-color: white;
    &:hover {
        background-color: #f2f1e4;
    }
`
export const WatchlistCard = styled(Card)`
    img {
        height: 3100%;
    }
    width: 250px;
    height: max-content;
    margin-bottom: 10px;
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 251px;
        height: max-content;
    }
`