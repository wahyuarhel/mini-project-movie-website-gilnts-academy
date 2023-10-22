import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { items } from '../Utils/constants';
import { Col, Row, UncontrolledCarousel, Spinner } from "reactstrap";
import { Title, StyledCard, StyledP, StyledContainer, StyledCardBody } from '../Assets/Styles/styled';

const OtherMoviePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(`https://bbm-warehouse.herokuapp.com/movies?page=1`);
          const movie = result.data.movies
          setMovies(movie);
          console.log('result users =>', movie);
      }
      fetchData();
  }, []);
  
  return (
    <>
      <style>
        {
          `.carousel img{
              max-width: 100%;
              height: 450px;
              object-fit: cover;
            }`
        }
      </style>
      <UncontrolledCarousel className='carousel' items={items} style={{ width: '100%', height: '400px' }} />
      <br />
        <StyledContainer>
        <p></p>
        <Row >
        {movies !== 0 ? movies.map((movie) => (
            <Col md={3} key={movie._id} >
            <Link
            to={`/other-movie/${movie._id}`}
            style={{ textDecoration: "none", color: "black" }}
            >
            <StyledCard>
                <StyledCardBody>
                <Title>{movie.title}</Title>
                <StyledP>Genre : {movie.genre}</StyledP>
                <StyledP>Writer: {movie.writer}</StyledP>
                <StyledP>Actor: {movie.actor}</StyledP>
                </StyledCardBody>
            </StyledCard>
            </Link>
            </Col>
          )) : <Spinner style={{ width: '3rem', height: '3rem' }} /> }
        </Row>
      </StyledContainer>
    </>
  )
}

export default OtherMoviePage;