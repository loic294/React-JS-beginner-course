/* jshint esnext : true */


/**** Tâche à compléter
  * Bien comprendre le code
  * Écrire le code qu'il faut pour qu'il soit possible de décrémenter le nombre
    * Le nombre ne peut pas être négatif
    * Afficher "Franchement Fred!" lorsque le nombre est de 69 ;) Indice : (x ? y : z)
****/


var Counter = React.createClass({

  getInitialState: function() {
    return {
      count : 0
    };
  },

  _incrementCount : function() {

    // Arranger cette méthode pour qu'elle effectue ce qui est attendu

    this.setState({
      count : this.state.count + 1
    });
  },

  _decrementCount : function() {

    // À coder !!!

  },

  render: function() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>


        <button onClick={this._incrementCount}>Incrémenter</button>
        {/* Ajouter un bouton pour décrémenter le nombre*/}

      </div>
    );
  }

});

ReactDOM.render(
  <Counter/>,
  document.getElementById("content")
);
