
import Bar from '../Bar'
import './DashboardGraphRight.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'


const DashboardGraphRight =()=> {
    const [filsterdays, setFilsterdays] = useState('')

    const handlechange =(e)=> {
        if(e.target.type === 'select-one') {
            setFilsterdays(e.target.value)
        }
        console.log(e.target.value)
    }
    
    return(
        <div className="col-12 col-md-11  col-xl-12" >
        <div className="account-rightside">
            <div className="account-setting-grap-area col-md-12">
                <div className="account-stt-header-and-flow-dtls row mb-2 mb-md-4 ">
                    <div className="row">
                    <div className="grow-info col-md-4 col-md-12 col-xl-5">
                        <h4 className="grow-title" >Growth Overview - @insta_vuhu</h4>
                        <p className="grow-subtitle color-grey-3">Your account's follower growth over the last 28 days.</p>
                    </div>
                    <div className="account-fllowers-details text-center text-md-start col-12 col-md-8 col-xl-5  mt-xl-0 ">
                            <div className="row account-fllowers-info">
                                <h2 className="font-30">2.1k</h2>
                                <p className="color-grey-3">Followers</p>
                            </div>
                            <div className="row account-fllowers-info">
                                <h2 className="font-30">1.1k</h2>
                                <p className="color-grey-3">Followings</p>
                            </div>
                            <div className="row account-fllowers-info">
                                <h2 className="font-30">131</h2>
                                <p className="color-grey-3">Post</p>
                            </div>
                    </div>
                    <div className="pause-button-area col-12 col-md-4 col-xl-2 my-3 my-md-0 d-flex justify-content-center align-items-center">
                        <button className="pause-button color-bg-grey-5 color-grey-3"><FontAwesomeIcon icon={faPauseCircle} /> Push</button>
                    </div>

                    </div>
                </div>
                <div className="row">
                    <div className="check-grow-info d-flex align-items-center justify-content-md-end col-12 col-md-4 col-xl-3 mb-2">
                        <select className="grow-between-select" 
                        name="grow-between"
                        onChange={handlechange}
                        value={filsterdays}
                        id="grow-between">
                            <option>Last 28 days</option>
                            <option>Last 15 days</option>
                            <option>Last 7 days</option>
                        </select>
                    </div>
                </div>
                <div className="my-3 col-12">
                    <Bar />
                    {/* <canvas id="myChart" width="400" height="200"></canvas> */}
                </div>
            </div>
        </div>
    </div>
    )
}
export default DashboardGraphRight;