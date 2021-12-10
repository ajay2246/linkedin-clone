

function Left(){

    return(
    <div>
        <div style={{height:300,width:200,backgroundColor:"white",margin:"10px"}}>
            <div style={{textAlign:"center"}}><img src="https://media-exp1.licdn.com/dms/image/C560BAQG6mt48AM9YUw/company-logo_100_100/0/1614418318525?e=1646870400&v=beta&t=E98IvTd_r1S3CQ8gerh39kyvQewr_ngQwY6IDK6dFZM" alt="" height="40px" style={{border:"1px solid black",borderRadius:"20px",marginTop:"20px"}}/></div>
            
            <div style={{textAlign:"center"}}>
                Welcome <span style={{color:"red"}}>Kartik</span>
                <br/>
                Add a Photo
            </div><hr/>
            <div>
                <div style={{display:"flex"}}>
                    <div style={{flex:1,paddingLeft:10}}>Connections</div>
                    <div style={{paddingRight:10,color:"red"}}>300</div>
                </div>
                <div style={{textAlign:"center"}}>Grow your Network</div>
            </div>
            <hr/>
            <div>Try primium for free</div>
            <div>list of items</div>
            <hr/>
            <div style={{textAlign:"center",color:"pink"}}>Items</div>
        </div>
        <div style={{height:300,width:200,backgroundColor:"white",margin:"10px",position:"fixed",top:"370px"}}>
            <div style={{padding:"20px"}}>Recents</div>
            <div style={{paddingLeft:"20px",color:"grey"}}># Job Searches</div>
            <div style={{paddingLeft:"20px",color:"grey"}}># Markets</div>
            <hr/>
            <div style={{paddingLeft:"20px",color:"blue"}}>Groups</div>
            <div style={{paddingLeft:"20px",color:"blue",paddingTop:"10px"}}>Events</div><hr/>
            <div style={{paddingLeft:"20px",color:"blue",paddingTop:"10px"}}>Followed Hash Tags</div>
            <div style={{paddingLeft:"20px",color:"grey"}}># Job Searches</div>
            <div style={{paddingLeft:"20px",color:"grey"}}># Markets</div>
        </div>
    </div>
    )
}
export default Left;