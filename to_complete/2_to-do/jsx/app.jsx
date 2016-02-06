/* jshint esnext : true */


/**** Tâche à compléter
  * Coder la méthode pour ajouter un élément à la Liste
    * Quand la tâche est ajoutée, le "input" doit être remis à un string vide
  * Coder la méthode pour retirer une tâche de la Liste
    * Vous pouvez utiliser Underscore pour manipuler le array : http://underscorejs.org/#reject
****/

var styles = {
  delete : {
    color : "red",
    cursor : "pointer"
  }
};

var Counter = React.createClass({

  getInitialState: function() {
    return {
      taches : [
        "Une tâche",
        "Une deuxième tâche"
      ]
    };
  },

  _ajouterTache : function(e) {
    e.preventDefault(); // Empêche le navigateur de reload la page en soumettant le formulaire

    // À coder !!!

  },

  _supprimerTache : function() {

    // À coder !!!

  },

  _handleChange : function(e) {
    // Le e fait référence à l'élément qui a appelé la méthode (function). Dans ce cas c'est le "input".
    this.setState({  value : e.target.value});
  },

  render: function() {
    return (
      <div>
        <h2>Liste</h2>

        <ul>
          {this.state.taches.map((data,index) => {
            return <li key={index}>
              {data} -
              <span onClick={this._supprimerTache.bind(null,index)} style={styles.delete}>X</span>
            </li>;
          })}
        </ul>

        <form onSubmit={this._ajouterTache}>

          <input type="text" value={this.state.value} onChange={this._handleChange} />

          <button type="submit" onClick={this._incrementCount}>Ajouter</button>

        </form>

      </div>
    );
  }

});

ReactDOM.render(
  <Counter/>,
  document.getElementById("content")
);
