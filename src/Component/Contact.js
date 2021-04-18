import React , {useState} from 'react'
function Contact() {
    const [input, setInput] = useState('')
    const submitForm = (e) => {
            e.preventDefault();
            alert(input);
            setInput('')
    }
    const inputField = (e) => {
        setInput(e.target.value)
        console.log(input);
    }
    return (
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
            <div className="fluid-container">
                <div className='row'>
                    <div className="col-md-6 col-10 mx-auto">
                    <form  onSubmit={submitForm}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={input}
                    onChange={inputField}
                    />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
                </div>

                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;
  