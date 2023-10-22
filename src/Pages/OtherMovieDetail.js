import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { Col, Container, Row, Spinner, Card, CardTitle, Button } from "reactstrap";
import { StyledCardBody } from '../Assets/Styles/styled';

const OtherMovieDetail = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(`https://bbm-warehouse.herokuapp.com/movies?${id}`);
          const movies = result.data.movies
          setMovies(movies);
          console.log('result users =>', movies);
      }
      fetchData();
  }, [id]);

  return (
    <>
        <Container >
        <p></p>
        <Row >
        {movies !== 0 ? movies.map((movie) => (
            <Col md={12} key={movie._id} >
            <Card>
                <StyledCardBody>
                <CardTitle>
                    <Link to='/other-movie/'>
                        <Button close />
                    </Link>
                </CardTitle>
                <h2>{movie.title}</h2>
                <h6>Genre : {movie.genre}</h6>
                <h6>Writer : {movie.writer}</h6>
                <h6>Director : {movie.director}</h6>
                <h6>Actor : {movie.actor}</h6>
                <h6>Studio : {movie.studio}</h6>
                <h6>Summary : {movie.plotsummary}</h6>
                </StyledCardBody>
            </Card>
            </Col>
          )) : <Spinner style={{ width: '3rem', height: '3rem' }} /> }
        </Row>
        <br/>
        <br/>
      </Container>
    </>
  )
}

export default OtherMovieDetail;