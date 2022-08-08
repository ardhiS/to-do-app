import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    alert(e.PropTypes);
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} text="add" color="green" />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
