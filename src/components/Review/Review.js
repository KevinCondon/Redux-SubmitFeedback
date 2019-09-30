import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
// import '../App/App.css';
import { Button } from '@material-ui/core'

import axios from 'axios';
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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


class Review extends Component {
    
    checkout = (event) => {

        //SHOULD MAKE MORE DRY BUT IM OUT OF TIME
        let feeling = this.props.storeInstance.feelingReducer
        let content = this.props.storeInstance.contentReducer
        let support = this.props.storeInstance.supportReducer
        let comment = this.props.storeInstance.commentReducer

        let postData = {
            feeling: parseInt(feeling),
            content: parseInt(content),
            support: parseInt(support),
            comment: comment,
        }


        axios.post('/feedback', postData)
            .then((response) => {
                console.log('Checkout Page', response);
                this.props.dispatch(snackbar.show({
                    message: 'Successful Submission',
                    action: 'OK',
                    handleAction: () => { this.props.dispatch({ type: 'RESET_APP', payload: {}})}
                }))
            }).catch(error => {
                console.log('Error in the POST checkout', error);
                this.props.dispatch(snackbar.show({
                    message: 'Error Unsuccessful Submission',
                    action: 'ok',
                    // handleAction: () => {/* do something... */ }
                }))
            })
    } 

    render() {

        return (<>

            <h2 className="App-body">Review Your Feedback</h2>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <p>Feeling: {this.props.storeInstance.feelingReducer}</p>
                    <p>Content: {this.props.storeInstance.contentReducer}</p>
                    <p>Support: {this.props.storeInstance.supportReducer}</p>
                    <p>Comments: {this.props.storeInstance.commentReducer}</p>


                    
                    <Link to='/1'>
                        <Button onClick={this.checkout} variant='contained'>
                            Submit
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
export default connect(mapStateToProps)(Review);