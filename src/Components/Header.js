import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, addButton, propShowAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={propShowAdd ? "red" : "green"} text={propShowAdd ? "Close" : "Add"} onClick={addButton} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
