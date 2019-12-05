import React, {Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';


export default class extends Component {

  render() {
    return <Fragment>
  <Grid container justify="space-around">
    <form action="./././feedbacks" method="POST">
        <TextField
          id="vardas-input" name="vardas" required
          type="text"
          label="Vardas"
          style={{ margin: 8 }}
          placeholder="Jonas"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="pastas-input" name="pastas" required
          type="email"
          label="El.paštas"
          style={{ margin: 8 }}
          placeholder="Jonas@gmail.com"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
           }}
         />
         <TextField
         id="komentaras-input" name="komentaras" required
         type="text"
         label="Komentaras"
         style={{ margin: 8 }}
         placeholder="Noreciau pasakyti"
         fullWidth
         margin="normal"
         InputLabelProps={{
           shrink: true
          }}
        />
        <Button
        type="submit"
        >Išsiusti</Button>
    </form>
    </Grid>
    </Fragment>
  }
}
