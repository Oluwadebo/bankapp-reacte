import React from 'react'
import { useState,useEffect } from "react"
import Footer from '../component/Fter'
import {Link} from 'react-router-dom'
import imgavatar3 from './assets/pic/img_avatar3.png'
import svgexport1 from './assets/pic/svgexport-1.png'
import Otransfer from './assets/pic/Otransfer.png'
import paybill from './assets/pic/paybill.png'
import Addmoneytobalance from './assets/pic/Addmoneytobalance.png'

const Dashboard = () => {
    const [allUser, setallUser] = useState([])
    const [User, setUser] = useState({})
    const [current, setcurrent] = useState('')
    const [first, setfirst] = useState()
    useEffect(() => {
        if (localStorage.member && localStorage.signinEmail) {
          setallUser(JSON.parse(localStorage.getItem("member")))  
          setcurrent(JSON.parse(localStorage.getItem("signinEmail")))  
        //   const found = allUser.find((element,index) => {
        //     return (element.email === current)
        //    });
        //    console.log(found);
        //    setUser(found)    
        }
    }, [])

    // let index = allUser.findIndex((contact)=>contact.email == current)
    // console.log(index);
       
        // setUser(found)
        // console.log(User);
    let myStyle = {
        fontSize:'20px',
    }
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light fixed-top shadow">
            <div class="container">
            <img src={svgexport1} alt="" className='img-fluid'/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item px-3">
                    <Link to="/" class="nav-link text-dark" aria-current="page" style={myStyle}>Home</Link>
                </li>
                <li class="nav-item px-3">
                    <Link to="/SignIn" class="nav-link text-dark" style={myStyle}>Merchants</Link>
                </li>
                </ul>
                <span class="navbar-text">
                <Link to="/SignIn"><button className='btn form-control text-light' style={{background:'#1FC69D',border:'none'}}>Sign-Out</button></Link>
                </span>
            </div>
            </div>
        </nav>
        <div className="mt-5">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-6 d-flex">
                        <img src={imgavatar3} alt="" className='img-fluid rounded-circle me-2' width="40" height="40"/>
                        <h5 className='pt-2'><b>ADE</b></h5>
                    </div>
                    <div className="col-6">
                        <h5 className='pt-2' style={{float:'right'}}>Transfer History</h5>
                    </div>
                </div>
                <div className="row my-3 p-3 shadow ad">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-9">
                                <p className='pt-2'>Account Number</p>
                            </div>
                            <div className="col-3">
                                <h5 className='pt-2' style={{float:'right'}}>0987654324</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-9">
                                <p className='pt-2'>Total Balance</p>
                            </div>
                            <div className="col-3">
                                <h5 className='pt-2' style={{float:'right'}}>#90,000</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-md-5">
                    <div className="col-4 mx-auto">
                        <button type="button" class="btn asd" data-bs-toggle="modal" data-bs-target="#transfer">
                            <img src={Otransfer} alt="" className='img-fluid rounded-circle me-2' width="60" height="60"/>
                            <h5 className='pt-2'>Tansfer</h5>
                        </button>
                        <div class="modal" id="transfer" data-bs-backdrop="static">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5>Tansfer</h5>
                                    </div>
                                    <div class="modal-body">
                                    <div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Message:</label>
                                            <textarea class="form-control" id="message-text" rows="10"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close transaction</button>
                                        <button type="button" class="btn btn-primary">Confirm transaction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mx-auto">
                        <button type="button" class="btn asd" data-bs-toggle="modal" data-bs-target="#Bills">
                            <img src={paybill} alt="" className='img-fluid rounded-circle me-2' width="60" height="60"/>
                            <h5 className='pt-2'>Bills</h5>
                        </button>
                        <div class="modal" id="Bills" data-bs-backdrop="static">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5>Bills</h5>
                                    </div>
                                    <div class="modal-body">
                                    <div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Message:</label>
                                            <textarea class="form-control" id="message-text" rows="10"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close transaction</button>
                                        <button type="button" class="btn btn-primary">Confirm transaction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 mx-auto">
                        <button type="button" class="btn asd" data-bs-toggle="modal" data-bs-target="#AirTimes">
                            <img src={Addmoneytobalance} alt="" className='img-fluid rounded-circle me-2' width="60" height="60"/>
                            <h5 className='pt-2'>AirTimes and Data</h5>
                        </button>
                        <div class="modal" id="AirTimes" data-bs-backdrop="static">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">AirTimes and Data</h5>
                                    </div>
                                    <div class="modal-body">
                                    <div>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Recipient:</label>
                                            <input type="text" class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Message:</label>
                                            <textarea class="form-control" id="message-text" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close transaction</button>
                                        <button type="button" class="btn btn-primary">Confirm transaction</button>
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