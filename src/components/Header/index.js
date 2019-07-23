import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFoucs, searchBlur, mouseEnter, mouseLeave, changePage } from './../../components/Header/reducer';
import './style.scss';
import logo from '../../static/img/nav-logo.png'

class Header extends Component {
    getListArea() {
        const { focused, mouseIn, searchHot, page, pageTotal, pageSize, mouseEnter, mouseLeave, changePage } = this.props;
        const hotArr = []
        if(searchHot.length) {
            for(let i = (page - 1) * pageSize; i < page * pageSize; i++) {
                searchHot[i] && hotArr.push(
                    <li key={searchHot[i]}>{searchHot[i]}</li>
                )
            }
        }
        if(focused || mouseIn) {
            return (
                <div className="search-hot" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <div className="triangle-up">
                        <span></span>
                    </div>
                    <div className="hot-title">
                        <div className="title">热门搜索</div>
                        <div className="change" onClick={()=>{changePage(page,pageTotal,this.icon)}}>
                            <span className="iconfont icon-fresh" ref={icon=>{this.icon=icon}}></span>
                            <span className="text">换一批</span>
                        </div>
                    </div>
                    <ul className="hot-list">
                        { hotArr }
                    </ul>
                </div>
            )
        }
        return null
    }
    render() {
        const { focused, searchHot, searchFoucs, searchBlur } = this.props;
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="container">
                    <ul className="nav">
                        <li className="nav-item">首页</li>
                        <li className="nav-item">下载APP</li>
                    </ul>
                    <div className={`search${focused?' foucsed':''}`} onFocus={()=>{searchFoucs(searchHot)}} onBlur={searchBlur}>
                        <input className="inp" type="text" placeholder="搜索" />
                        <span className="iconfont icon-sousuo"></span>
                        { this.getListArea() }
                    </div>
                </div>
                <div className="blank"></div>
                <div className="btns">
                    <div className="text iconfont icon-font"></div>
                    <div className="text">登录</div>
                    <div className="btn">注册</div>
                    <div className="btn fill"><span className="iconfont icon-xiezi"></span>写文章</div>
                </div>
            </div>
        )
    }
}

Header = connect(
    state => ({
        focused: state.header.focused,
        mouseIn: state.header.mouseIn,
        searchHot: state.header.searchHot,
        page: state.header.page,
        pageTotal: state.header.totalPage,
        pageSize: state.header.pageSize,
    }),
    { searchFoucs, searchBlur, mouseEnter, mouseLeave, changePage }
)(Header)

export default Header