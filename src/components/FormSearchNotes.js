import React from 'react';

class FormSearchNotes extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeKeywordHandler = this.onChangeKeywordHandler.bind(this);
  }

  onChangeKeywordHandler(event) {
    this.props.onSearchTitleHandler(event.target.value);
  }

  render() {
    return (
      <input type="text" placeholder="Cari Catatan" onChange={this.onChangeKeywordHandler}/>
    );
  }
}

export default FormSearchNotes;