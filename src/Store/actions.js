import reducer from "./reducer";
//https://stackoverflow.com/questions/53148972/best-way-to-setup-a-react-usereducer

const mapDispatch = dispatch => ({
  login: () => dispatch({ type: "LOGIN" }),
  logout: () => dispatch({ type: "LOGOUT" })
});

export default mapDispatch;
