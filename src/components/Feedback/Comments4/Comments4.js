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
});

class Comments4 extends Component {
    state = {
        commentLocal: ''
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            [propertyName]: event.target.value
        })
        console.log(`local state`, propertyName, 'is ', this.state);

    
    }
    handleSubmit = () => {
        this.props.dispatch({ type: 'SET_COMMENT', payload: this.state.commentLocal })
        console.log('Submitted', this.state);

    }

    render() {
        return (<>

            <h2 className="App-body">Any comments you want to leave?</h2>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        id="Uncontrolled"
                        label="Comments?"
                        // value={values.age}
                        onChange={(event) => this.handleChangeFor('commentLocal', event)}
                        InputLabelProps={{
                            shrink: true,
                        }}



                    />
                    <Link to='/Review'>
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
export default connect(mapStateToProps)(Comments4);