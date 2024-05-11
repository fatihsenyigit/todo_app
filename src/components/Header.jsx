import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Header = () => {
  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
      <h1>ToDo APP</h1>
      <div className="w-50 mt-3">
        <Form>
          <Form.Group className="d-flex">
            <Form.Control type="text" placeholder="Enter a note" />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Header;
