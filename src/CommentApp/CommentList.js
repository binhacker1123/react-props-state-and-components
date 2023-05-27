import React, {Component} from 'react';
import {COMMENTS} from "./data";

class CommentList extends Component {
    render() {
        return (
            <div>{this.props.comments.map((comment, i) => {
                return (
                    <li key={i}>
                        {comment.user}：{comment.rating}
                        <div>{comment.comments}</div>
                    </li>
                )
            })}</div>
        )
    }
}
export default CommentList;