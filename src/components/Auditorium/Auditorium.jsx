import React, {useState} from "react";
import './Auditorium.css'



function Auditorium () {
    const [name, setName] = useState([]);
    console.log(name);
  
    function clica({ target }) {
      let newArr = [...name];
      if (newArr.indexOf(target.name) === -1) newArr.push(target.name);
      else {
        const removeName = newArr.filter((item) => item !== target.name);
        newArr = removeName;
      }
      setName(newArr);
    }
  
    return (
      <div className="App">

        <div className="assentos">
          <input
            type="button"
            name="1"
            onClick={clica}
            style={{
              backgroundColor: name.indexOf("1") === -1 ? "green" : "red"
            }}
          />
          <input
            type="button"
            name="2"
            onClick={clica}
            style={{
              backgroundColor: name.indexOf("2") === -1 ? "green" : "red"
            }}
          />
          <input
            type="button"
            name="3"
            onClick={clica}
            style={{
              backgroundColor: name.indexOf("3") === -1 ? "green" : "red"
            }}
          />
          <input
            type="button"
            name="4"
            onClick={clica}
            style={{
              backgroundColor: name.indexOf("4") === -1 ? "green" : "red"
            }}
          />
          <input
            type="button"
            name="5"
            onClick={clica}
            style={{
              backgroundColor: name.indexOf("5") === -1 ? "green" : "red"
            }}
          />
        </div>
      </div>
    );
}

export default Auditorium;
