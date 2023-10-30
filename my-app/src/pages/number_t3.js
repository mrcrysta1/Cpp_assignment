import React,{useState} from 'react'
import Layout from '../components/Layout'

function NumberT3() {
    const [input, setInput] = useState('');
const [answer, setAnswer] = useState('');
let split_var = input.split('');

const sumNum = () => {
    var sum = 0;
    for (const key in split_var) {
            const element = parseInt(split_var[key]);
            var sum = sum + element;
    }
    setAnswer(" sum of all array elements: "+sum);
}
const avrgNum = () => {
    var sum = 0;
    for (const key in split_var) {
            const element = parseInt(split_var[key]);
            var sum = sum + element;
    }
    let avrg = sum / split_var.length ;
    setAnswer(" Average of all array elements: "+avrg);
}
const maxnum = () => { 
    let max = [0];
    for (const key in split_var) {
        if (max < split_var[key]) {
        max = split_var[key];            
        }
        }
    setAnswer( "Maximum Number " + max);  

}
  return (
    <Layout>
<h1>Task 3</h1>
<div className="container d-flex flex-column">
        <div className="form-floating">
          <textarea
          value={input}
            className="form-control"
            placeholder="Add string value"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea2">Add Numeric value</label>
        </div>
        <div
          className="btn-group my-4"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger"  onClick={sumNum}>
           
          Sum of Numbers
          </button>
          <button type="button" class="btn btn-warning" onClick={avrgNum}>
          
          Average of Numbers
          </button>
          <button type="button" class="btn btn-success" onClick={maxnum}>
           
          Maximum number
          </button>
        </div>
        <h3 className="text-success">{answer}</h3>
      </div>
    </Layout>
  )
}

export default NumberT3