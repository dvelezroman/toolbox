import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';
import { storeText, clearText } from '../action-creators/text';
import { connect } from 'react-redux';
import Formulario from './Formulario';
import ShowText from './ShowText';

const mapStateToProps = ({ text }) => ({
    text: text,
})

const mapDispatchToProps = (dispatch) => ({
    storeText: (text) => dispatch(storeText(text)),
    clearText: () => dispatch(clearText()),
})

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_text : '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = event => {
        const text = event.target.value;
        console.log('value: ', text);
        this.props.storeText(text);
    }

    handleSubmit = evt => {
        evt.preventDefault();
        axios.post('/api/toolbox', { text: this.props.text })
            .then(res => {
                this.props.clearText();
                this.setState({ show_text: res.data.text });
            })
            .catch(err => err);
    }

    render() {
        console.log('Props: ', this.props);
        return(
        <div>
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                <div className=" col-lg-offset-2 col-lg-10">
                    <Formulario handleChange={this.handleChange} handleSubmit={this.handleSubmit} text={this.props.text}/>
                </div>
                </div>
            </div>
        </div>
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                <div className=" col-lg-offset-2 col-lg-10">
                    <ShowText text={this.state.show_text}/>
                </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);