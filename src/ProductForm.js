import React, { Component } from 'react';

class ProductForm extends Component {
    render() {
        return(
            <form>
                <h3>Ajouter un nouveau produit : </h3>
                <p>
                    <label>
                        Nom :<br />
                        <input type="text" name="name" />
                    </label>
                </p>
                <p>
                    <label>
                        Catégorie :<br />
                        <input type="text" name="category" />
                    </label>
                </p>
                <p>
                    <label>
                        Prix :<br />
                        <input type="text" name="price" />
                    </label>
                </p>
                <p>
                    <label>
                        En stock ?<br />
                        <input type="checkbox" name="stocked" />
                    </label>
                </p>
                <input type="submit" value="Save" />
            </form>
        );
    }
}

export default ProductForm;