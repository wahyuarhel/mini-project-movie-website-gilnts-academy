import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from "../Redux/actions/HomePage";
import { Container, Spinner, CardBody, Col, Row, Jumbotron } from "reactstrap";
import { imgUrl } from '../Utils/constants';
import { Title, StyledCard, StyledImage, StyledP } from '../Assets/Styles/styled';

const Search = ({value, getMovies}) => {

    useEffect(() => {
        getMovies(value);
      }, [getMovies, value])

  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
            <Title className="display-5">Search Movie</Title>
        </Container>
      </Jumbotron>
      <Container>
          <Row>
          {value !== 0 ? value.map((movie) => (
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
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
      value: state.homePage.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getMovies: () => dispatch(getMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);