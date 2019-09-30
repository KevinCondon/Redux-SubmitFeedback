import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
// import '../App/App.css';
import { Button } from '@material-ui/core'

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#808080',
        },
        secondary: { main: '#000000' },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    }
})


class Support3 extends Component {
    state = {
        supportLocal: ''
    }

    handleChangeFor = (propertyName, event) => {
        if (event.target.value <= 5 && event.target.value >= 0) {

        this.setState({
            [propertyName]: event.target.value
        })
        console.log(`local state`, propertyName, 'is ', this.state);
    }
    }

    handleSubmit = () => {
        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.supportLocal })
        console.log('Submitted', this.state);

    }



    render() {
        return (<>

            <h2 className="App-body">How well are you being supported?</h2>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        id="standard-number"
                        label="Support?"
                        // value={values.age}
                        onChange={(event) => this.handleChangeFor('supportLocal', event)}
                        type="number"
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}



                    />
                    <Link to='/4'>
                        <Button onClick={this.handleSubmit} variant='contained'>
                            Next
                        </Button>
                    </Link>
                </MuiThemeProvider>
            </Router>
        </>
        );
    }
}
const mapStateToProps = (storeInstance) => ({
    storeInstance
})

export default connect(mapStateToProps)(Support3);