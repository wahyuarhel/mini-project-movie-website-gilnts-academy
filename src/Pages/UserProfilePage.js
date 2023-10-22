import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {Container, Button, Row, Col, CardBody } from 'reactstrap';
import { StyledProfile, StyledWatchlist, GroupButton, StyledDetail, StyledBackground, Title, StyledP, WatchlistCard } from '../Assets/Styles/styled';
import imgProfile from '../Assets/Images/noprofile.png'

const UserProfilePage = () => {
    const imgUrl = "https://image.tmdb.org/t/p/w500";
  
    const [movies, setMovies] = useState(null);
  
    useEffect(() => {
      if (localStorage.getItem("watchlist")) {
        setMovies(JSON.parse(localStorage.getItem("watchlist")));
      }
    }, []);
  
    const handleRemove = (id) => {
      let watchlist = JSON.parse(localStorage.getItem("watchlist"));
      watchlist = [...watchlist.filter((movie) => movie.id !== id)];
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      setMovies(watchlist);
    };

    return (
        <StyledBackground>
            <StyledProfile>
                <StyledDetail>
                    <img src={imgProfile} alt='profilepage' />
                    <p>Username :</p>
                    <p>email :</p>
                    <Link to='/' ><GroupButton outline color='secondary'>Back</GroupButton></Link>
                    <Link to='/user-setting-page' ><GroupButton outline color='primary'>Update Profile</GroupButton></Link>
                </StyledDetail>
                <StyledWatchlist>
                <Container>
                {movies ? (
                    <Row>
                        {movies.map((movie) => (
                        <Col md={4} key={movie.id} >
                        <WatchlistCard>
                            <img src={`${imgUrl}${movie.poster_path}`} alt='movie poster'/>
                            <CardBody>
                                <Title>{movie.title}</Title>
                                <StyledP>{movie.release_date}</StyledP>
                                <StyledP>
                                <Link to={`/detail-movie/${movie.id}`}><Button outline color='info'>Detail</Button></Link>
                                <Button outline color='danger' onClick={() => {handleRemove(movie.id)}}>Remove</Button>
                                </StyledP>
                            </CardBody>
                        </WatchlistCard>
                        </Col>
                    ))}
                    </Row>
                ) : '' }
                </Container>
                </StyledWatchlist>
            </StyledProfile>
        </StyledBackground>
    )
}

export default UserProfilePage;