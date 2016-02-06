"use strict";

var /* jshint esnext : true */

/**** Tâche à compléter
  * Bien comprendre le code
  * Écrire le code qu'il faut pour qu'il soit possible de décrémenter le nombre
    * Le nombre ne peut pas être négatif
    * Afficher "Franchement Fred!" lorsque le nombre est de 69 ;) Indice : (x ? y : z)
****/Counter = React.createClass({
  displayName: "Counter",

  getInitialState: function getInitialState() {
    return {
      count: 0
    };
  },

  _incrementCount: function _incrementCount() {

    // Arranger cette méthode pour qu'elle effectue ce qui est attendu

    this.setState({
      count: this.state.count + 1
    });
  },

  _decrementCount: function _decrementCount() {

    // À coder !!!

  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Count : ",
        this.state.count
      ),
      React.createElement(
        "button",
        { onClick: this._incrementCount },
        "Incrémenter"
      )
    );
  }

});

ReactDOM.render(React.createElement(Counter, null), document.getElementById("content"));