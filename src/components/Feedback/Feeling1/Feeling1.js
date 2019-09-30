import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
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
});


class Feeling1 extends Component {

    state = {
        feelingLocal: ''
    }

    handleChangeFor = (propertyName, event) => {
        if (event.target.value <= 5 && event.target.value >= 0){
        this.setState({
            [propertyName]: event.target.value
        })
        console.log(`local state`, propertyName, 'is ', this.state);
        }
    }

    handleSubmit = () => {
        this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feelingLocal })

    }

    render() {
        return (<>

            <h2 className="App-body">How are you feeling today? </h2>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        id="standard-number"
                        label="Feeling?"
                        value={this.state.feelingLocal}
                        onChange={(event) => this.handleChangeFor('feelingLocal', event)}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    
                    <Link to='/2'>
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
export default connect(mapStateToProps)(Feeling1);