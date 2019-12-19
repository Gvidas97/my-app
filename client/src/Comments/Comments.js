import React from "react";

export default class Comments extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          body: {}
      };
  };

  componentWillMount() {
    fetch('http://localhost:3212/feedbacks')
        .then(res => res.json())
        .then(res => {
            this.setState({
                ...this.state,
                body: res
            })
        })
        .catch((error => {
            console.error(error);
        }));
}


render() {
    console.log(this.state)
    return (
        <div>
            <p><strong>Vardas: {this.state.body.komentaras}</strong></p>
            <p>Komentaras: {this.state.body.vardas}</p>
        </div>
    );
}
}
