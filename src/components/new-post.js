import React from 'react';

class NewNote extends React.Router {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  onTitleChange(ev) {
    this.setState({
      title: ev.target.value,
    });
  }

  onTagsChange(ev) {
    this.setState({
      title: ev.target.value,
    });
  }

  onContentChange(ev) {
    this.setState({
      title: ev.target.value,
    });
  }

  render() {
    return (
      <div className="new-container" >
        <div className="new-header">
          <span>Create A New Post</span>
        </div>
        <div className="new-input-field">
          <input placeholder="title" value={this.state.title} onChange={this.onTitleChange} />
        </div>
        <div className="new-input-field">
          <input placeholder="tags" value={this.state.tags} onChange={this.onTagsChange} />
        </div>
        <div className="new-input-field">
          <input placeholder="content" value={this.state.content} onChange={this.onContentChange} />
        </div>
      </div>
    );
  }
}

export default NewNote;
