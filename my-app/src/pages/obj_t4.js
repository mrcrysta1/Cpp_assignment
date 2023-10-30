import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

function ObjT4() {
  const [person, setPerson] = useState({
    firstname: "Ali",
    lastname: "Hassan",
    birth: "2/2/23",
  });
  const [propertyName, setPropertyName] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    displayProperties(); // Display default properties when the component initially loads
  }, []);

  const addProperty = () => {
    if (propertyName && propertyValue) {
      setPerson((prevPerson) => ({
        ...prevPerson,
        [propertyName]: propertyValue,
      }));
      setPropertyName("");
      setPropertyValue("");
      displayProperties();
    }
  };

  const updateProperty = (key, value) => {
    setPropertyName(key);
    setPropertyValue(value);
  };

  const deleteProperty = (key) => {
    const { [key]: deleted, ...rest } = person;
    setPerson(rest);
    displayProperties();
  };

  const displayProperties = () => {
    const properties = Object.keys(person).map((key) => (
       
            <tr key={key}>
              <th scope="col"> {key}: </th>
              <th scope="col">{person[key]}</th>
              <th scope="col">
                <button
                  className="btn btn-warning "
                  onClick={() => updateProperty(key, person[key])}
                >
                  Edit
                </button>
              </th>
              <th scope="col">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProperty(key)}
                >
                  Delete
                </button>
              </th>
            </tr>
          
    ));
    setAnswer(properties);
  };
  return (
    <Layout>
      <h1>Task 3</h1>
      <div className="container d-flex flex-column">
        <div className="form-floating"></div>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPropertyName(e.target.value)}
              value={propertyName}
              placeholder="Property Name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPropertyValue(e.target.value)}
              value={propertyValue}
              placeholder="Property Value"
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              className="btn btn-outline-success"
              onClick={addProperty}
              type="button"
            >
              Add Property
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={displayProperties}
              type="button"
            >
              Display Property
            </button>
          </div>
          <h4>Person infomation</h4>
          <div />
          <table className="table table-bordered border-primary table-hover">
          <tbody>
          {answer}
          </tbody>
        </table>
        </div>
      </div>
    </Layout>
  );
}

export default ObjT4;
