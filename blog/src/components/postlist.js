import React from 'react'
import { connect } from 'react-redux'
import { fetchposts } from '../actions'
import Fetchuser from './userlist'



class Postlist extends React.Component {

    componentDidMount() {
        this.props.fetchposts();
    }


    renderlist() {
        return this.props.posts.map(post => {
            return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Fetchuser userid={post.userId}/>
                </div>
            );
        });
    }


    render() {

        return (
            <div>
                {this.renderlist()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.post }
}



export default connect(mapStateToProps, { fetchposts })(Postlist)