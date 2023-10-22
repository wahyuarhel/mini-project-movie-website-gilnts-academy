import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Button, CardBody, Col, Container, Row, Spinner, UncontrolledCarousel } from "reactstrap";
import { GroupButton, StyledCard, StyledGenre, StyledImage, StyledP, Title } from '../Assets/Styles/styled';
import PaginationMovie from '../Components/Pagination';
import { getGenreList, getMovieByGenre, getMovies } from '../Redux/actions/HomePage';
import { imgUrl, items } from '../Utils/constants';

const HomePage = ({ getGenreList, getMovieByGenre, getMovies, movies, genres }) => {

  useEffect(() => {
    getMovies();
  }, [getMovies])

  useEffect(() => {
    getGenreList();
  }, [getGenreList]);

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
      <StyledGenre>
        <p>Browse by Category</p>
      </StyledGenre>
      <Container >
        <userDetail></userDetail>
        {genres.length !== 0 ? (
          genres.map((genre) => (
            <GroupButton outline color="info" key={genre.id} onClick={() => getMovieByGenre(genre.id)}>{genre.name}</GroupButton>
          ))
        ) : <Spinner style={{ width: '3rem', height: '3rem' }} />}
        <p></p>
        <Row >
          {movies !== 0 ? movies.map((movie) => (
            <Col md={3} key={movie.id} >
              <Link
                to={`/detail-movie/${movie.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <StyledCard>
                  <StyledImage src={`${imgUrl}${movie.poster_path}`} />
                  <CardBody>
                    <Title>{movie.title}</Title>
                    <StyledP>{movie.release_date}</StyledP>
                  </CardBody>
                </StyledCard>
              </Link>
            </Col>
          )) : <Spinner style={{ width: '3rem', height: '3rem' }} />}
        </Row>
        <PaginationMovie />
        <Link to='/other-movie'>
          <Button outline color='info'>Special Movie</Button>
        </Link>
        <br />
        <br />
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.homePage.movies,
    genres: state.homePage.genres,
    value: state.homePage.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getMovies()),
    getGenreList: () => dispatch(getGenreList()),
    getMovieByGenre: (id) => dispatch(getMovieByGenre(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);