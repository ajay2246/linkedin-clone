import {useState} from 'react';

function Navbar(props){
    const [search,setSearch] = useState("")
    return(
    <div style={{width:"100%",backgroundColor:"white",position:"fixed",top:"0px"}}>
        <div style={{display:"flex",alignItems:"center",padding:"8px",height:"55px",maxWidth:"80%",margin:"auto",backgroundColor:"white"}}>
           <div><img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1642439800~hmac=3d208391927053563948310b6515ccce" alt="linkedin" height="40px"/></div>
           <div style={{flex:1}}>
               <input type="text" placeholder="search" value={search} onChange={(e)=> setSearch(e.target.value)} style={{height:"35px",paddingLeft:"15px",marginLeft:"20px",borderRadius:"8px",border:"0px",fontSize:"20px",width:"250px",backgroundColor:"lightgrey"}}/>
            </div>
            <div >
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start", alignItems:"center"}}>
                    <div><img src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png" alt="Home" height="22px" onClick={()=>props.setDisplay("Home")}/></div>
                    <div style={{fontSize:"15px",fontWeight:500}}>Home</div>
                </div>
            </div>
            <div style={{paddingLeft:"30px"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start", alignItems:"center"}}>
                    <div><img src="https://cdn-icons.flaticon.com/png/128/3281/premium/3281275.png?token=exp=1642439662~hmac=a62d519400e72f5dfb4ca7b9c6cf0f89" alt="Home" height="22px"onClick={()=>props.setDisplay("My Network")}/></div>
                    <div style={{fontSize:"15px",fontWeight:500}}>MY Network</div>
                </div>
            </div>
            <div style={{paddingLeft:"30px"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start", alignItems:"center"}}>
                    <div><img src="https://cdn-icons-png.flaticon.com/128/1063/1063376.png" alt="Home" height="22px" onClick={()=>props.setDisplay("Jobs")}/></div>
                    <div style={{fontSize:"15px",fontWeight:500}}>Jobs</div>
                </div>
            </div>
            <div style={{paddingLeft:"30px"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start", alignItems:"center"}}>
                    <div><img src="https://cdn-icons.flaticon.com/png/128/2951/premium/2951033.png?token=exp=1638944395~hmac=2273ba02a920243c2e1523f423204dfc" alt="Home" height="22px" onClick={()=>props.setDisplay("Messaging")}/></div>
                    <div style={{fontSize:"15px",fontWeight:500}}>Messaging</div>
                </div>
            </div>
            <div style={{paddingLeft:"30px"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start", alignItems:"center"}}>
                    <div><img src="https://cdn-icons-png.flaticon.com/128/1182/1182718.png" alt="Home" height="22px" onClick={()=>props.setDisplay("Notification")}/></div>
                    <div style={{fontSize:"15px",fontWeight:500}}>Notification</div>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default Navbar;