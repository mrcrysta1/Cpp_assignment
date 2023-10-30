import React,{useState} from "react";
import Layout from "../components/Layout";

function StringT2() {
 const [input, setInput] = useState('');
const [answer, setAnswer] = useState('');

const Reversefun = () => {
    let str_split_re = input.split('').reverse().join('');
 setAnswer("(Rev) " + str_split_re);
 }

 const Vowelsfun = () => {
    let vowels = input.match(/[aeiouAEIOU]/g);
    let vowelCount = vowels ? vowels.length : 0;
    setAnswer(vowelCount + ' vowels');
 }

 const Spacefun = () => {
    var space_rem = input.replace(/\s+/g, "");
    setAnswer(space_rem + ': Space removed');
 }
  return (
    <Layout>
      <h1>Task 2</h1>
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
          <label htmlFor="floatingTextarea2">Add string value</label>
        </div>
        <div
          className="btn-group my-4"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger"  onClick={Reversefun}>
           
            Reverse the string
          </button>
          <button type="button" class="btn btn-warning" onClick={Vowelsfun}>
          
            Count the No of Vowels
          </button>
          <button type="button" class="btn btn-success" onClick={Spacefun}>
           
            Remove all spaces
          </button>
        </div>
        <h3 className="text-success">{answer}</h3>
      </div>
    </Layout>
  );
}

export default StringT2;
