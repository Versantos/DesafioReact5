import React, { Component } from "react";

class App extends Component {
  state = {
    filme: [
      {
        movie: "Encanto",
        lancado: 2022
      },
      {
        movie: "Respect",
        lancado: 2022
      },
      {
        movie: "Mother",
        lancado: 2017
      },
      {
        movie: "Her",
        lancado: 2013
      },
      {
        movie: "Encanto",
        lancado: 2022
      },
      {
        movie: "Encanto",
        lancado: 2022
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Meus filmes preferidos</h1>
        {this.state.filme.map((item) => (
          <div>
            <ul>
              <li>{item.movie}</li>
              <li>Lançado em {item.lancado}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
