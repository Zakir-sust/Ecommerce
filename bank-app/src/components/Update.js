import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios'

const Update = () => {
  const navigate = useNavigate();
  const [id,setId]=useState('')
  const [amount, setAmount]=useState(0)
  function handleSubmit(e){
    e.preventDefault();
    const bid=localStorage.getItem('bid')
    
    let data = {
      user: id,
      amount: amount
    }
    console.log(data)
    axios.get(`http://localhost:5001/users/ha?user=${id}&amount=${amount}`)
    .then(res=>{
      console.log('updated ',res.data)
      navigate('/info');
    })
    .catch(res=>{
      console.log('wrong id')
      return
    })
    
  }
  return (
    <div className='auth-wrapper'>
        <div className='auth-inner'>
      <form>
        <h3>Update</h3>

        <div className="mb-3">
          <label>User</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Id"
            onChange={e=>setId(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            onChange={e=>setAmount(e.target.value)}
          />
        </div>

        {/*remember functionalities */}
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
      </div>
      </div>
  )
}

export default Update