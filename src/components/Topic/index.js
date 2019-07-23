import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import defSmallImg from './../../static/img/def-small.jpg';

class Topic extends Component {
    render() {
        const { content } = this.props;
        return (
            <div className="topic-container">
                <div className="topic-conter">
                    <div className="img">
                        <img src={defSmallImg} alt=""/>
                    </div>
                    <p className="txt">{content.title}</p>
                </div>
            </div>
        )
    }
};

Topic.propTypes = {
    content: PropTypes.object.isRequired
}

export default Topic;