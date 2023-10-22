import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component"

import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Jumbotron, Container, Media } from 'reactstrap';
import classnames from 'classnames';

import { getDetailMovieById, getReviewMovieById, getCastMovieById, getVideoMovieById } from "../Redux/actions/HomePage";
import { imgUrl, videoUrl } from "../Utils/constants";
import "../Assets/Styles/DetailPage.css"

const DetailMoviePage = ({ auth, movie, review, cast, video, getDetailMovieById, getReviewMovieById, getCastMovieById, getVideoMovieById }) => {
  const { id } = useParams();

  useEffect(() => {
    getDetailMovieById(id);
    getReviewMovieById(id);
    getCastMovieById(id);
    getVideoMovieById(id);
  }, [
    getDetailMovieById,
    getReviewMovieById,
    getCastMovieById,
    getVideoMovieById,
    id
  ])

  const renderImg = (img) => {
    let rendered =
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";

    if (img) {
      if (img.substring(1, 5) === "http") {
        rendered = img.substring(1);
      } else {
        rendered = `${imgUrl}${img}`;
      }
    }

    return rendered;
  };

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const addToWatchlist = (movie) => {
    if (localStorage.getItem("watchlist")) {
      let watchlist = JSON.parse(localStorage.getItem("watchlist"));
      watchlist = [...watchlist, movie];
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    } else {
      localStorage.setItem("watchlist", JSON.stringify([movie]));
    }
  };

  return (
    <div>
      {/* Banner movie */}
      <Jumbotron
        className="mb-3"
        style={{
          backgroundImage: `url(${imgUrl}/${movie.backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <Container>

          <div className="text-white">
            <h1>{movie.title}</h1>
            <ReactStars
              size={24}
              value={movie.vote_average / 2}
              edit={false}
              isHalf={true} />
            <span>{movie.vote_count} votes</span>
            <br /> <br />
            <p className="lead">{movie.tagline}</p>
            <div className="lead">
              {video.length === 0 ? null : (
                <Button className="mr-3" color="primary">
                  <a className="text-white text-decoration-none" href={`${videoUrl}${video[0].key}`} target="blank">Watch Trailer</a>
                </Button>
              )}
              {auth ? (
                <Button color="primary" onClick={() => { addToWatchlist(movie) }}>Add To Watch List</Button>
              ) :
                (<Button color="primary" disabled>Add To Watch List</Button>)
              }
            </div>
          </div>
        </Container>

      </Jumbotron>

      <Container>

        {/* Tab Detail */}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
              style={{ cursor: 'pointer' }}
            >
              Overview
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
              style={{ cursor: 'pointer' }}
            >
              Character
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
              style={{ cursor: 'pointer' }}
            >
              Review
          </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>

          {/* Overview */}
          <TabPane tabId="1">
            <Row className="my-4">
              <Col sm="12">
                <h3>Synopsis</h3>
                <span>{movie.overview}</span>
                <hr />
                <h4>Movie Detail</h4>
                <tr >
                  <th className="pr-3">Release Date</th>
                  <td className="pr-3"> : </td>
                  <td>{movie.release_date}</td>
                </tr>
                <tr >
                  <th className="pr-3">Duration</th>
                  <td className="pr-3"> : </td>
                  <td>{movie.runtime} minutes</td>
                </tr>
                <tr >
                  <th className="pr-3">Budget</th>
                  <td className="pr-3"> : </td>
                  <td>$ {movie.budget}</td>
                </tr>

              </Col>
            </Row>
          </TabPane>

          {/* Character */}
          <TabPane tabId="2">
            <div className="d-flex flex-wrap mt-3">
              {cast !== 0 ? cast.map((cast) => (
                <div className="mr-1 text-center" >
                  <div sm="12">
                    <img
                      className="img-card-character"
                      src={renderImg(cast.profile_path)}
                      alt="character"
                    />
                    <div className="name-cast">

                      <p>{cast.name}</p>
                    </div>
                  </div>
                </div>

              )) : ""}
            </div>
          </TabPane>

          {/* Review Form*/}
          < TabPane tabId="3" >
            <div className="mt-3 detail-page-content">
              {auth ? (<Media className="mt-1">
                <Media className="mr-3" left middle >
                  <img
                    className="img-card-review"
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="Generic placeholder"
                  />
                </Media>
                <Media body>
                  <Media heading>Name</Media>
                  <div className="review-form">
                    <form>
                      <textarea
                        className="form-control mb-3"
                        placeholder="leave comment here"
                      ></textarea>
                      <div className="d-flex justify-content-end">
                        <Button color="primary" size="sm">Add Review</Button>
                      </div>
                    </form>
                  </div>
                </Media>
              </Media>) : ""}

              {review.length === 0 ?
                <div className="no-review py-2">
                  <h3> {`No reviews in this Movie 😢`} </h3>
                </div>

                : review.map((review) => (
                  <div sm="12" key={review.id}>
                    <Media className="my-3">
                      <Media className="mr-3" left middle >
                        <img
                          className="img-card-review"
                          src={renderImg(review.author_details.avatar_path)}
                          alt="Generic placeholder"
                        />
                      </Media>
                      <Media body>
                        <h4>{review.author}</h4>
                        <ReactStars
                          size={18}
                          value={review.author_details.rating / 2}
                          edit={false}
                          isHalf={true} />
                        <p>{review.content.slice(0, 450)} ...</p>
                      </Media>
                    </Media>
                  </div>
                ))}


            </div>
          </TabPane>

        </TabContent>
      </Container>
    </div >
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.homePage.movie,
    review: state.homePage.review,
    cast: state.homePage.cast,
    auth: state.users.isAuthentificated,
    video: state.homePage.video
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewMovieById: (id) => dispatch(getReviewMovieById(id)),
    getDetailMovieById: (id) => dispatch(getDetailMovieById(id)),
    getCastMovieById: (id) => dispatch(getCastMovieById(id)),
    getVideoMovieById: (id) => dispatch(getVideoMovieById(id)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
