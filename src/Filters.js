import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Rechercher ..." value={this.props.filterText}/>
                <p>
                    <input type="checkbox"  checked={this.props.inStockOnly} /> Produits en stock uniquement
                </p>
            </form>
        );
    }
}

export default Filters;