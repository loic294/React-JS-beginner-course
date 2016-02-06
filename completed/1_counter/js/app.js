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
    this.setState({
      count: this.state.count + 1
    });
  },

  _decrementCount: function _decrementCount() {

    this.setState({
      count: this.state.count === 0 ? 0 : this.state.count - 1
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Count : ",
        this.state.count != 69 ? this.state.count : "Franchement Fred!"
      ),
      React.createElement(
        "button",
        { onClick: this._incrementCount },
        "Incrémenter"
      ),
      React.createElement(
        "button",
        { onClick: this._decrementCount },
        "Decrémenter"
      )
    );
  }

});

ReactDOM.render(React.createElement(Counter, null), document.getElementById("content"));