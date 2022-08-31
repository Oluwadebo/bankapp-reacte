import React from 'react'
import {useEffect,useState } from "react"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import imgavatar3 from './assets/pic/img_avatar3.png'
import svgexport1 from './assets/pic/svgexport-1.png'
import Otransfer from './assets/pic/Otransfer.png'
import paybill from './assets/pic/paybill.png'
import Addmoneytobalance from './assets/pic/Addmoneytobalance.png'
import App from '../App'

const Dashboard = (props) => {
    const navigate=useNavigate()
    const [allUser, setallUser] = useState([])
    const [currentuser, setcurrentuser] = useState('')
    const [currentuserdetails, setcurrentuserdetails] = useState([])
    const [User, setUser] = useState({})
    const [first, setfirst] = useState()
    const [amount, setamount] = useState(0)
    const [account, setaccount] = useState("")
    const [Error, setError] = useState('')

    useEffect(() => {
        if (localStorage.member && localStorage.signinEmail && localStorage.users) {
          setallUser(JSON.parse(localStorage.member))  
          setcurrentuser(JSON.parse(localStorage.signinEmail))  
          setcurrentuserdetails(JSON.parse(localStorage.users))
        }else{
            navigate('/SignIn')
        }
    }, [])
    // console.log(currentuserdetails);
    const logout = ()=>{
        localStorage.removeItem("signinEmail")
        navigate('/SignIn')
    }
    let myStyle = {
        fontSize:'20px',
    }
    const Confirm =()=>{
        if (account !=="" && amount !==""){
            let nn= parseInt(currentuserdetails.accountBalance)  - parseInt(amount)
            
            console.log(nn);
            // let hass = currentuserdetails.find((item,index)=>(index=index));
            // console.log(hass);
            let User = {account,amount}
            setallUser(()=>{
                let Customer = [...allUser,User]
                return Customer
            })
        }else{
            let err = "Please fill all your input outlet"
            setError(err)
        }
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
            <div className="container">
            <img src={svgexport1} alt="" className='img-fluid'/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item px-3">
                    <Link to="/Dashboard" className="nav-link text-dark" aria-current="page" style={myStyle}>Home</Link>
                </li>
                <li className="nav-item px-3">
                    <Link to="/SignIn" className="nav-link text-dark" style={myStyle}>SignIn</Link>
                </li>
                </ul>
                <span className="navbar-text">
                <button onClick={logout} className='btn form-control text-light' style={{background:'#1FC69D',border:'none'}}>Sign-Out</button>
                </span>
            </div>
            </div>
        </nav>
        <div className="mt-5">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-6 d-flex">
                        <img src={imgavatar3} alt="" className='img-fluid rounded-circle me-2' width="40" height="40"/>
                        <h5 className='pt-2'><b>{currentuserdetails.Lastname}</b></h5>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6"><h5 className='pt-2' style={{float:'right'}}>History</h5></div>
                            <div className="col-6"><h5 className='pt-2' style={{float:'right'}}>{currentuserdetails.history}</h5></div>
                        </div>                     
                    </div>
                </div>
                <div className="row my-3 p-3 shadow ad">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-9">
                                <p className='pt-2'>Account Number</p>
                            </div>
                            <div className="col-3">
                                <h5 className='pt-2' style={{float:'right'}}>{currentuserdetails.accountNumber}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-8">
                                <p className='pt-2'>Total Balance</p>
                            </div>
                            <div className="col-4">
                                <h5 className='pt-2' style={{float:'right'}}><b>₦</b> {currentuserdetails.accountBalance}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-md-5 mx-0">
                    <div className="col-4 col-md-4 mx-4 mx-md-auto">
                        <button type="button" className="btn asd" data-bs-toggle="modal" data-bs-target="#transfer">
                            <img src={Otransfer} alt="" className='img-fluid rounded-circle me-2' width="60" height="60"/>
                            <h5 className='pt-2'>Transfer</h5>
                        </button>
                        <div className="modal" id="transfer" data-bs-backdrop="static">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5>Transfer</h5>
                                    </div>
                                    <div className="modal-body">
                                    <div>
                                        <p><b className='text-danger'>{Error}</b></p>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Recipient Account</label>
                                            <input type="number" className="form-control" placeholder='Recipient Account Number' onChange={(e)=>setaccount(e.target.value)} style={{backgroundColor:'#F5F7FA'}}/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Amount</label>
                                            <input type="number" placeholder='Amount' className='form-control' onChange={(e)=>setamount(e.target.value)} style={{backgroundColor:'#F5F7FA'}}/>
                                        </div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Your Balance</label>
                                            <h5 className='pt-2'><b>₦</b> {currentuserdetails.accountBalance}</h5>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close transaction</button>
                                        <button type="button" className="btn btn-primary" onClick={Confirm}>Confirm transaction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-4 mx-4 mx-md-auto">
                        <button type="button" className="btn asd" data-bs-toggle="modal" data-bs-target="#Bills">
                            <img src={paybill} alt="" className='img-fluid rounded-circle me-2' width="60" height="60"/>
                            <h5 className='pt-2'>Bills</h5>
                        </button>
                        <div className="modal" id="Bills" data-bs-backdrop="static">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5>Bills</h5>
                                    </div>
                                    <div className="modal-body">
                                    <div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Recipient:</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="message-text" className="col-form-label">Message:</label>
                                            <textarea className="form-control" id="message-text" rows="10"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close transaction</button>
                                        <button type="button" className="btn btn-primary">Confirm transaction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-4 mx-4 mx-md-auto">
                        <button type="button" className="btn asd" data-bs-toggle="modal" data-bs-target="#AirTimes">
                            <img src={Addmoneytobalance} alt="" className='img-fluid rounded-circle me-2' width="60" height="60"/>
                            <h5 className='pt-2'>Recharge</h5>
                        </button>
                        <div className="modal" id="AirTimes" data-bs-backdrop="static">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">AirTimes and Data</h5>
                                    </div>
                                    <div className="modal-body">
                                    <div>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Recipient:</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="message-text" className="col-form-label">Message:</label>
                                            <textarea className="form-control" id="message-text" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close transaction</button>
                                        <button type="button" className="btn btn-primary">Confirm transaction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard