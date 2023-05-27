import React, { Component } from 'react';
import CommentList from "./CommentList";
import CommentFilter from "./CommentFilter";
import CommentInput from "./CommentInput";
import {COMMENTS} from "./data";

class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            Comments:COMMENTS,
            peerHtml:null,
            peerData:COMMENTS
        }
    }
    handleSubmitComment (comment) {
        this.state.Comments.push(comment)
        this.setState({
            Comments: this.state.Comments,
            peerData:this.state.Comments
        })
    }
    handleFilterComment (rating) {
        const resultData = this.state.Comments;
        if(resultData.length<=0){
            return;
        }
        const peerHtml = [];
        let k = 0, length = resultData.length;
        for (; k < length; k++) {
            if(rating.indexOf(resultData[k].rating.toString())+1){
                peerHtml.push(resultData[k])
            }
        }
        this.setState({peerData:peerHtml})
        if(peerHtml.length>0){
            this.setState({peerHtml:null});
        }
    }

    render() {
        return (
            <div data-testid="app" className="app">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentFilter onFilter={this.handleFilterComment.bind(this)}/>
                <CommentList comments={this.state.peerData}/>
            </div>
    );
  }
}

export default CommentApp;
