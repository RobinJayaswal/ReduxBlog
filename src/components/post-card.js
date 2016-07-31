import React from 'react';

export default function PostCard(props) {
  return (
    <div className="post-card" >
      <a href={`posts/${props.id}`}>{props.title}</a>
      <span>{props.tags}</span>
    </div>
  );
}
