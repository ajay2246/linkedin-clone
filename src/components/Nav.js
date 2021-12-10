import {useState} from 'react';

function Navbar(props){
    const [search,setSearch] = useState("")
    return(
    <div style={{width:"100%",backgroundColor:"white",position:"fixed",top:"0px"}}>
        <div style={{display:"flex",alignItems:"center",padding:"8px",height:"55px",maxWidth:"80%",margin:"auto",backgroundColor:"white"}}>
           <div><img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1638941670~hmac=f5a72ff8898c9a6d9172b1b83f8a0d4b" alt="linkedin" height="40px"/></div>
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
                    <div><img src="https://cdn-icons.flaticon.com/png/512/3136/premium/3136102.png?token=exp=1638944295~hmac=b8020bb5c3e8e5eeee586511ebe99bef" alt="Home" height="22px"onClick={()=>props.setDisplay("My Network")}/></div>
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
                    <div><img src="https://cdn-icons.flaticon.com/png/128/1436/premium/1436388.png?token=exp=1638944438~hmac=256e796e29c22251bd71ed65a366cd93" alt="Home" height="22px" onClick={()=>props.setDisplay("Notification")}/></div>
                    <div style={{fontSize:"15px",fontWeight:500}}>Notification</div>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default Navbar;