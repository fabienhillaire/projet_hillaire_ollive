import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { Switch, Link, Route, Redirect } from "react-router-dom";

import { store_change_name_store, store_valid_store_name } from "../services/store/actions";


class StoreSelection extends Component {

	state = {
		redirect: false
	}

	constructor(props) {
		super(props);
		this.onClickValidationStore = this._onClickValidationStore.bind(this);
	}

	_onClickValidationStore() {
		this.props.store_valid_store_name();
		this.setState({
			redirect: true
		})
	}

	render() {
		return (
			<div
				style={{background: 'none'}}
			>
				<div className = "recherche">
					<input type="text" placeholder = "Marché des transferts" value={this.props.store.name} 
						   onChange={(e) => this.props.store_change_name_store({ name: e.target.value })}
						   className= "zonetxt" />
					<button
						onClick={() => this.onClickValidationStore()}
						className = "button"
					>
						Chercher
					</button>
				</div>
				{
					this.state.redirect ?
						<Redirect to="/store" />
					:
						null
				}
			</div>
		);
	}

}


const mapStateToProps = (state) => ({
	store: state.store
});


const mapActionsToProps = (dispatch) => ({
	store_change_name_store: bindActionCreators(store_change_name_store, dispatch),
	store_valid_store_name: bindActionCreators(store_valid_store_name, dispatch)
});


export default connect(mapStateToProps, mapActionsToProps)( StoreSelection );