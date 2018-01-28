import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends React.Component {
	state = {
		succes: false
	};
	submit = data =>
		this.props
			.resetPasswordRequest(data)
			.then(() => this.setState({ succes: true }));
	render() {
		return (
			<div>
				{this.state.succes ? (
					<Message>Email has been sent.</Message>
				) : (
					<ForgotPasswordForm submit={this.submit} />
				)}
			</div>
		);
	}
}
ForgotPasswordPage.propTypes = {
	resetPasswordRequest: PropTypes.func.isRequired
};
export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);