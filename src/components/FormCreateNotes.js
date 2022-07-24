import React from 'react';

class FormCreateNotes extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      charactersLeft: 50
    };

    this.onSubmitCreateHandler = this.onSubmitCreateHandler.bind(this);
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
  }

  onSubmitCreateHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  onChangeTitleHandler(event) {
    this.setState((prevState) => {
      let titleValue = event.target.value;
      let titleLength = titleValue.length;
      let charactersLeft = 50 - titleLength;
      if (charactersLeft < 0) {
        titleLength = 50;
        charactersLeft = 0;
      }
      titleValue = titleValue.slice(0, titleLength);
      return {
        title: titleValue,
        charactersLeft
      };
    });
  }

  onChangeBodyHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      };
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitCreateHandler}>
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.charactersLeft}</p>
        <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onChangeTitleHandler}/>
        <textarea placeholder="Isi Catatan" rows="10" value={this.state.body} onChange={this.onChangeBodyHandler}></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default FormCreateNotes;