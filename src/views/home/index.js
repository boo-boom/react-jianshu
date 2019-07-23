import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopics } from './reducer';
import Swiper from './../../components/Swiper';
import Topic from './../../components/Topic';
import ArtItem from './../../components/ArtItem';
import './style.scss';

class Home extends Component {
    componentWillMount() {
        this.props.getTopics()
    }
    render() {
        const { topics } = this.props;
        return (
            <div className="home-container">
                <div className="home-left">
                    <Swiper/>
                    <div className="home-topic">
                        {
                            topics.map(item => {
                                return <Topic key={item.topid} content={item}/>
                            })
                        }
                        <div className="home-topic-more">更多热门专题 <span className="iconfont icon-arrow-right"></span></div>
                    </div>
                    <div className="art-list">
                        <ArtItem/>
                        <ArtItem/>
                        <ArtItem/>
                        <ArtItem/>
                    </div>
                </div>
                <div className="home-right">
                    right
                </div>
            </div>
        )
    }
}

Home = connect(
    state => ({
        topics: state.home.topics
    }),
    { getTopics }
)(Home);

export default Home;