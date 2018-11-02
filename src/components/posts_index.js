import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.renderMap();
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCu-tLmj9OBHwd8LwyDcHQcP7a1G8jVvvM&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
          let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </li>
        // <div>
        //   <div className="text-xs-right">
        //     <Link className="btn btn-primary" to="/posts/new">
        //       Add a Post
        //     </Link>
        //   </div>
        //   <h3>Posts</h3>
        //   <ul className="list-group">
        //     {this.renderPosts()}
        //   </ul>
        // </div>
      )
    })
  }

   render() {
     return (
       <main>
         <div id="map"></div>
       </main>
     )
   }
}

function loadScript(url){
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//     async defer></script>

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);
