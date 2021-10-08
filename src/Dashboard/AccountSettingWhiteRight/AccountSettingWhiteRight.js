import './AccountSettingWhiteRight.css'
const AccountSettingWhiteRight =()=> {
    return(
<section class="account-setting-section account-add-fav-aco">
<div class="container-fluid">
<div class="row">
{/* <!-- whitlist left side area -->

<!-- Whitlist Right side area  --> */}
<div class="col-12 col-md-9">
    <div class="row">
        {/* <!-- whitlist Right side part One --> */}
        <div class="col-12 col-md-12 col-xl-8">
            {/* <!-- whitlist part one title --> */}
            <div class="account-setting-wi-area col-md-12">
                <div class=" col-12 col-md-8 col-xl-12 ">
                    <h4 class="account-setting-wi-title font-24" >Whitelist</h4>
                    <div class="row">
                        <div class="col-3 col-md-2 pe-0">
                            <label>
                            <input class="whitelist-account-all me-2" type="checkbox" id="selectAllWhitelist"/>
                            All  </label>
                        </div>
                        <p class="col-9 col-md-6 ps-0">2.1k follower Selected</p>
                    </div>
                </div>
            </div>
            {/* <!-- whitlist part one card area   --> */}
            <div class="row whitelist-account-card-area">
                {/* <!-- whitlist sigle account -->
                <!-- start whitelist account single account--> */}
                    <div class="account col-12 col-md-6 col-xl-6 px-0 px-md-2 my-2">
                        <div class="alert-box col-12 ">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-10 px-0 px-md-2">
                                    <div class="row">
                                        <div class="col-3 col-md-4 px-0 px-md-2">
                                            <img class="alert-imag alert-fav-aco-img" src="images/insta.png" alt="insta" />
                                        </div>
                                        <div class="col-9 col-md-8 d-flex flex-column justify-content-center px-0 px-md-2  ">
                                            <h3 class="alert-title font-16">cristiano</h3>
                                            <p class="alert-sub-title font-14 mb-0">328m followers</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1 col-md-2 px-0 px-md-2 d-flex justify-content-center align-items-center"/>
                                    <input type="checkbox" class="whitelist-account" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end whitelist account single account-->
                        <!-- start whitelist account single account--> */}
                        <div class="account col-12 col-md-6 col-xl-6 px-0 px-md-2 my-2">
                        <div class="alert-box col-12 ">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-10 px-0 px-md-2">
                                    <div class="row">
                                        <div class="col-3 col-md-4 px-0 px-md-2">
                                            <img class="alert-imag alert-fav-aco-img" src="images/insta.png" alt="insta" />
                                        </div>
                                        <div class="col-9 col-md-8 d-flex flex-column justify-content-center px-0 px-md-2  ">
                                            <h3 class="alert-title font-16">cristiano</h3>
                                            <p class="alert-sub-title font-14 mb-0">328m followers</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-1 col-md-2 px-0 px-md-2 d-flex justify-content-center align-items-center"/>
                                    <input type="checkbox" class="whitelist-account" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end whitelist account single account-->  */}
            </div>
            <div class="whitlist-remove-button-area my-4 text-center text-md-start">
                <button class="whitlist-remove-button" >
                    Remove 1 user <br/> from whitelist
                </button>
            </div>

        </div>
        {/* <!-- end whitlist Right side part One --> */}
        <div class="col-md-12 col-xl-4">
            <h4 class="account-setting-wi-title font-18" >23 followers not in your whitelist</h4>
            <div class="row ">
                <div class="col-12 pe-0 mb-4">
                    <label>
                    <input class="whitelist-account-all me-2" type="checkbox" id="selectAllWhitelist" />
                    Select All  </label>
                </div>
                {/* <!-- follower not white list  --> */}
                <div class="">
                    <div class="row not-whitelist-account-card-area  mt-2">
                    {/* <!-- single card notwhitelsit card --> */}
                        <div class="col-8 col-md-6 col-xl-12 px-0 px-md-2 my-3">
                        <div class="not-whitelist-card col-12 ">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-3 col-md-2 px-0 px-md-2 d-flex justify-content-center align-items-center">
                                    <input type="checkbox" class="whitelist-account"/>
                                </div>
                                <div class="col-8 px-0 px-md-2">
                                    <div class="row">
                                        <div class="col-3 col-md-3 px-0 px-md-2 pe-md-0">
                                            <img class="not-whitelist-img alert-fav-aco-img" src="images/insta.png" alt="insta"/>
                                        </div>
                                        <div class="col-9 col-md-8 d-flex flex-column justify-content-center px-0 px-md-2  ps-md-0">
                                            <h3 class="alert-title font-16 mb-0">cristiano</h3>
                                            <p class="alert-sub-title font-14 mb-0">328m followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End single card notwhitelsit card -->
                        <!-- single card notwhitelsit card --> */}
                        <div class="col-8 col-md-6 col-xl-12 px-0 px-md-2 my-3">
                        <div class="not-whitelist-card col-12 ">
                            <div class="row justify-content-center justify-content-md-start">
                                <div class="col-3 col-md-2 px-0 px-md-2 d-flex justify-content-center align-items-center">
                                    <input type="checkbox" class="whitelist-account"/>
                                </div>
                                <div class="col-8 px-0 px-md-2">
                                    <div class="row">
                                        <div class="col-3 col-md-3 px-0 px-md-2 pe-md-0">
                                            <img class="not-whitelist-img alert-fav-aco-img" src="images/insta.png" alt="insta"/>
                                        </div>
                                        <div class="col-9 col-md-8 d-flex flex-column justify-content-center px-0 px-md-2  ps-md-0">
                                            <h3 class="alert-title font-16 mb-0">cristiano</h3>
                                            <p class="alert-sub-title font-14 mb-0">328m followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End single card notwhitelsit card --> */}
                    </div>
                </div>
            </div>
            <div class="not-whitelist-button text-center text-md-start my-md-3 mb-5 mt-2">
                <button class="whitlist-remove-button not-whitlist-button" >
                    Add
                </button> 
            </div>
        </div>
        {/* <!-- whitlist Right side part Two  --> */}
    </div>
</div>
{/* <!-- End whitlist Right side area  --> */}
</div>
</div>
</section>
    )
}
export default AccountSettingWhiteRight;