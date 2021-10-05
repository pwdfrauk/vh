
import Bar from '../Bar'
import instaimg from './insta.png'
import './DashboardGraphRight.css'
import { useState } from 'react'


const DashboardGraphRight =()=> {
    const [filsterdays, setFilsterdays] = useState('')

    const handlechange =(e)=> {
        if(e.target.type === 'select-one') {
            setFilsterdays(e.target.value)
        }
        console.log(e.target.value)
    }


    return(
        <div className="col-12 col-md-12  col-xl-12" >
        <div className="account-rightside">
            <div className="account-setting-grap-area col-md-12">
                <div className="account-stt-header-and-flow-dtls row mb-5">
                    <div className="col-4 col-md-4 me-md-4 col-xl-2 me-xl-0">
                        <img className="fav-image" src={instaimg} alt="insta-img" />
                    </div>
                    <div className="col-8 col-md-4 col-xl-4 d-flex justify-content-start align-items-center">
                        <div>
                        <h2 className="fav-title">@insta_vuhu</h2>
                        <p className="fab-sub-title color-violet">14 days free trial</p>
                        </div>
                    </div>
                    <div className="account-fllowers-details text-center text-md-start col-12 col-md-12 col-xl-6 mt-4 mt-xl-0 col-xl-6">
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
                </div>
                <div className="row">
                    <div className="grow-info col-md-12 col-xl-8">
                        <h4 className="grow-title" >Growth Overview</h4>
                        <p className="grow-subtitle color-black-3">Your account's follower growth over the last 28 days.</p>
                    </div>
                    <div className="check-grow-info d-flex align-items-center justify-content-md-end col-12 col-md-12 col-xl-4 ">
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
                <div className="my-3">
                    <Bar />
                    {/* <canvas id="myChart" width="400" height="200"></canvas> */}
                </div>
            </div>
        </div>
    </div>
    )
}
export default DashboardGraphRight;