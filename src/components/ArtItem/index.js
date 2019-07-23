import React, { Component } from 'react';
import './style.scss';

class ArtItem extends Component {
    render() {
        return (
            <div className="art-item">
                <div className="art-item-left">
                    <h1 className="title">一开始就怕输的人，怎么都很难赢</h1>
                    <p className="desc">前几天，一个学妹找到我，和我聊了很久。她今年大二下学期，马上就要大三了。现阶段她所在的学生组织向她抛出了橄榄枝，希望她能够留任，她本人也想</p>
                    <div className="auth">
                        <p className="txt">可儿echo</p>
                        <p className="ico">
                            <span className="iconfont icon-liuyan"></span>
                            <span className="num">12</span>
                        </p>
                        <p className="ico">
                            <span className="iconfont icon-aixin"></span>
                            <span className="num">12</span>
                        </p>
                    </div>
                </div>
                <div className="art-item-right">
                    <img src="//upload-images.jianshu.io/upload_images/3534836-9c327d0fc3525a98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt=""/>
                </div>
            </div>
        )
    }
}

export default ArtItem;