
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Header = ({ setDataList, dataList }) => {
    const [sameNote, setSameNote] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target[0].value;
    setSameNote(data.trim())
    if (data.trim() !== '' && data.trim()!==sameNote) {
setDataList([...dataList, data]);
    }
    
    e.target[0].value = "";
  };
  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">
      <h1>ToDo APP</h1>
      <div className="w-50 mt-3">
        <Form onSubmit={handleSubmit}>
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
