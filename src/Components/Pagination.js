import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button, ButtonGroup } from 'reactstrap';
import { StyledNavbar } from '../Assets/Styles/styled';
import { getMovies } from '../Redux/actions/HomePage';

const PaginationMovie = ({getMovies}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies();
  }, [getMovies])

  const handlePage = (pg) => {
    setPage(pg);
    getMovies(pg)
  }

  return (
    <StyledNavbar>
      {page !== 0 && (
        <ButtonToolbar>
          <ButtonGroup>
            <Button outline color="info" onClick={() => handlePage(page - 1)}>Prev</Button>
            <Button outline color="info" onClick={() => handlePage(1)}>1</Button>
            <Button outline color="info" onClick={() => handlePage(2)}>2</Button>
            <Button outline color="info" onClick={() => handlePage(3)}>3</Button>
            <Button outline color="info" onClick={() => handlePage(4)}>4</Button>
            <Button outline color="info" onClick={() => handlePage(5)}>5</Button>
            <Button outline color="info" onClick={() => handlePage(page + 1)}>Next</Button>
          </ButtonGroup>
        </ButtonToolbar>
      )
      }
    </StyledNavbar>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (page) => dispatch(getMovies(page)),
  }
}

export default connect(null, mapDispatchToProps)(PaginationMovie);