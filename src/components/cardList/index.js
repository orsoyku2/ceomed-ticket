import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TicketCard from '../ticketCard';
import TicketDetail from '../ticketDetail/index'

import { connect } from 'react-redux';


const CardList = (props) => {
  console.log(props.ticket[0])
  useEffect(() => {

  }, [])
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} lg={3}>
        <TicketCard />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <TicketDetail ticket={props.ticket[0]} />
      </Grid>
    </Grid>)
}

function mapStateToProps(state) {
  return {
    ticket: state.getTicketReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardList);

