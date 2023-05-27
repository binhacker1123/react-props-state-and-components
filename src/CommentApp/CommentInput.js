import React, {Component} from 'react';

class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            user: '',
            rating:'',
            comments: '',
        }
    }
    handleSubmit () {
        if (this.props.onSubmit) {
            if(this.state.user&&this.state.rating){
                const {user,rating,comments} = this.state
                this.props.onSubmit({id:Math.random(),user,rating,comments})
            }
            else
                alert('请补全信息')
        }
        this.setState({ user:'', comments: '',rating:''})
    }
    handleUsernameChange (event) {
        this.setState({
            user: event.target.value
        })
    }
    handleContentChange (event) {
        this.setState({
            comments: event.target.value
        })
    }
    handleRatingChange (event) {
        this.setState({
            rating: event.target.value
        })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input  value={this.state.user} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评分：</span>
                    <div className='comment-field-input'>
                        <input  value={this.state.rating} onChange={this.handleRatingChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea  value={this.state.comments} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button  onClick={this.handleSubmit.bind(this)}>
                        提交
                    </button>
                </div>
            </div>
        );
    }
}

export default CommentInput;