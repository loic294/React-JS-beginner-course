"use strict";

/* jshint esnext : true */

/**** Tâche à compléter
  * Coder la méthode pour ajouter un élément à la Liste
    * Quand la tâche est ajoutée, le "input" doit être remis à un string vide
  * Coder la méthode pour retirer une tâche de la Liste
    * Indice : La function splice est votre ami!
****/

var styles = {
  delete: {
    color: "red",
    cursor: "pointer"
  }
};

var Todo = React.createClass({
  displayName: "Todo",

  getInitialState: function getInitialState() {
    return {
      taches: ["Une tâche", "Une deuxième tâche"]
    };
  },

  _ajouterTache: function _ajouterTache(e) {
    e.preventDefault(); // Empêche le navigateur de reload la page en soumettant le formulaire

    // À coder !!!
  },

  _supprimerTache: function _supprimerTache() {

    // À coder !!!

  },

  _handleChange: function _handleChange(e) {
    // Le e fait référence à l'élément qui a appelé la méthode (function). Dans ce cas c'est le "input".
    this.setState({ value: e.target.value });
  },

  render: function render() {
    var _this = this;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Liste"
      ),
      React.createElement(
        "ul",
        null,
        this.state.taches.map(function (data, index) {
          return React.createElement(
            "li",
            { key: index },
            data,
            " -",
            React.createElement(
              "span",
              { onClick: _this._supprimerTache.bind(null, index), style: styles.delete },
              "X"
            )
          );
        })
      ),
      React.createElement(
        "form",
        { onSubmit: this._ajouterTache },
        React.createElement("input", { type: "text", value: this.state.value, onChange: this._handleChange }),
        React.createElement(
          "button",
          { type: "submit", onClick: this._incrementCount },
          "Ajouter"
        )
      )
    );
  }

});

ReactDOM.render(React.createElement(Todo, null), document.getElementById("content"));