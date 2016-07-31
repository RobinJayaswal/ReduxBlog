import React from 'react';

import PostCard from './post-card.js';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.posts = [
      { id: 1, title: 'first post', tags: 'words', content: 'this is a test post' },
      { id: 2, title: 'second post', tags: 'words', content: 'this is a test post' },
      { id: 3, title: 'third post', tags: 'words', content: 'this is a test post' },
    ];
  }

  render() {
    let posts = this.posts.map((post, index) => {
      return (
        <PostCard title={post.title} postId={post.id} tags={post.tags} id={index} />
      );
    });

    return (
      <div>
        {posts}
      </div>
    );
  }

}

export default Index;
