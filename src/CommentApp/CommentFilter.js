import React, {Component} from 'react';

class CommentFilter extends Component {

    handleFilter1 () {
        if (this.props.onFilter) {
            this.props.onFilter('12345')
        }
    }
    handleFilter2 () {
        if (this.props.onFilter) {
            this.props.onFilter('5')
        }
    }
    handleFilter3 () {
        if (this.props.onFilter) {
            this.props.onFilter('234')
        }
    }
    handleFilter4 () {
        if (this.props.onFilter) {
            this.props.onFilter('1')
        }
    }

    render() {
        return (
            <div className='comment-filter-button'>
                <button  onClick={this.handleFilter1.bind(this)}>
                    全部
                </button>
                <button  onClick={this.handleFilter2.bind(this)}>
                    好评
                </button>
                <button  onClick={this.handleFilter3.bind(this)}>
                    中评
                </button>
                <button  onClick={this.handleFilter4.bind(this)}>
                    差评
                </button>
            </div>
        );
    }
}

export default CommentFilter;