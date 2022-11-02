import React, { Component } from "react";
import AddData from './AddData';
import Display from "./Display";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import ApiData from "./ApiData";

export default class App extends Component {
  state = {
    personData: []
  }

  addData = (user) => {
    console.log(user);
    let personData = [...this.state.personData, user];

    this.setState({
      personData
    });
  }

  render() {
    return (
      <div>
        <AddData addData={this.addData} />
        <Display personData={this.state.personData} />

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>

        </Card>

        <ApiData />

      </div>
    )
  }
}




//lifecycle component method in reactjs (initializtaion, mounting, updation, unmounting)


// promises in js