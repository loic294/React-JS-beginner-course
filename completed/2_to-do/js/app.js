"use strict";

/* jshint esnext : true */

/**** Tâche à compléter
  * Coder la méthode pour ajouter un élément à la Liste
    * Quand la tâche est ajoutée, le "input" doit être remis à un string vide
  * Coder la méthode pour retirer une tâche de la Liste
    * Vous pouvez utiliser Underscore pour manipuler le array : http://underscorejs.org/#reject
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
      taches: ["Une tâche", "Une deuxième tâche"],
      value: ""
    };
  },

  _ajouterTache: function _ajouterTache(e) {
    var _this = this;

    e.preventDefault(); // Empêche le navigateur de reload la page en soumettant le formulaire

    var taches = this.state.taches.push(this.state.value);
    console.log(taches); // Pour test

    this.setState({
      taches: this.state.taches,
      value: ""
    }, function () {
      console.log(_this.state); //Pour tester
    });
  },

  _supprimerTache: function _supprimerTache(index) {

    this.state.taches.splice(index, 1);

    this.setState({
      taches: this.state.taches
    });
  },

  _handleChange: function _handleChange(e) {
    // Le e fait référence à l'élément qui a appelé la méthode (function). Dans ce cas c'est le "input".
    this.setState({ value: e.target.value });
  },

  render: function render() {
    var _this2 = this;

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
              { onClick: _this2._supprimerTache.bind(null, index), style: styles.delete },
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