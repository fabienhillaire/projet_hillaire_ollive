import React, { Component } from 'react';


function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}€`;
}

const ProductRender = (props) => (
	<ol className="liste-joueurs">
		<img src={props.image} alt={props.name} />
		<h3 className="game-name">
			{
				props.name
			}
			<span className="price">{formatPrice(props.price)}</span>
			<span className="price">{props.quantity}</span>
		</h3>
		<p>{props.desc}</p>
		{
			props.quantity > 0 && !props.editable ?
				<button onClick={props.onAdd} className="button1">Acheter</button>
			:
				null
		}
		{
			props.editable ?
				<button onClick={props.onEdit} className="button1">Modifier</button>
			:
				null
		}
		{
			props.editable ?
				<div>
					<button
						onClick={props.onDecrement} className="button1"
					>
						Retirer
					</button>
					<button
						onClick={props.onIncrement} className="button1"
					>
						Rajouter
					</button>
				</div>
			:
				null
		}
		{
			props.editable ?
				<button onClick={props.onDelete} className="button1">Supprimer</button>
			:
				null
		}
	</ol>
)


const ProductEditable = (props) => (
	<div
		className="liste-joueurs"
	>
		<input placeholder="Nom du joueur" className="styleEditableInput" type="text" value={props.name} onChange={(e) => props.onChangeName(e.target.value)}/><br/>
		<input placeholder="Prix" className="styleEditableInput" type="text" value={props.price} onChange={(e) => props.onChangePrice(e.target.value)}/><br/>
		<input placeholder="Statistiques" className="styleEditableInput" type="text" value={props.desc} onChange={(e) => props.onChangeDescription(e.target.value)}/><br/>
		<input placeholder="URL image" className="styleEditableInput" type="text" value={props.image} onChange={(e) => props.onChangeImage(e.target.value)}/><br/>
		{
			!props.add ?
				<button onClick={props.onCancel} className="button1">Annuler</button>
			:
				null
		}
		<button onClick={props.onAdd} className="button1">{ props.add ? "Ajouter" : "Confirmer" }</button>
	</div>
)


const Product = (props) => {
	if (props.edit) {
		return <ProductEditable {...props} />;
	}
	return <ProductRender {...props}/>
}

export default Product