import react from "react";
import propTypes from 'prop-types'

const Login = (props) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button className="github" onClick={() => props.authenticate("Github")}>
            Log In with Github
        </button>
    </nav>
)

Login.propTypes= {
    authenticate: propTypes.func.isRequired
};

export default Login;