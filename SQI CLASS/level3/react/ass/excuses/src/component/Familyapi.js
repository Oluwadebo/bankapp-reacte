import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const Api = () => {
    const [Excuses, setExcuses] = useState([])
    const family = "https://excuser.herokuapp.com/v1/excuse/family"
    const office = "https://excuser.herokuapp.com/v1/excuse/office"
    const children = "https://excuser.herokuapp.com/v1/excuse/children"
    const college = "https://excuser.herokuapp.com/v1/excuse/college"
    const party = "https://excuser.herokuapp.com/v1/excuse/party"
    const getFamily = () =>{
        axios.get(family).then((result)=>{
            let ans = result.data[0];
            let Family = ans.excuse;
            setExcuses(Family)
            console.log(Excuses);
        })
    }
    const getOffice = () =>{
        axios.get(office).then((result)=>{
        let ans = result.data[0];
        let Office = ans.excuse;
        setExcuses(Office)
        console.log(ans);
        })
    }
    const getChildren = () =>{
        axios.get(children).then((result)=>{
            let ans = result.data[0];
            let Children = ans.excuse;
            setExcuses(Children)
            console.log(ans);
        })
    }
    const getCollege = () =>{
        axios.get(college).then((result)=>{
            let ans = result.data[0];
            let College = ans.excuse;
            setExcuses(College)
            console.log(ans);
        })
    }
    const getParty = () =>{
        axios.get(party).then((result)=>{
            let ans = result.data[0];
            let Party = ans.excuse;
            setExcuses(Party)
            console.log(ans);
        })
    }
    return (
        <>
            <div className="container p-4 my-2 shadow" style={{background:"linear-gradient(120 deg, #ca6baf 0%, #5a8ce2 100%)"}}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <button onClick={getFamily} className="btn btn-primary mx-3 col-7 my-2">Family Excuses</button>
                        <button onClick={getOffice} className="btn btn-warning mx-3 col-7 my-2">Office Excuses</button>
                        <button onClick={getChildren} className="btn btn-secondary mx-3 col-7 my-2">Children Excuses</button>
                        <button onClick={getCollege} className="btn btn-success mx-3 col-7 my-2">College Excuses</button>
                        <button onClick={getParty} className="btn btn-danger mx-3 col-7 my-2">Party Excuses</button> 
                    </div>
                    <div className="col-12 col-md-8">
                        <h2 className="card p-2 mx-auto my-2 h-100 shadow bg-transparent text-light">{Excuses}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Api