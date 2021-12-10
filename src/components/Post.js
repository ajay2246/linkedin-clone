
import {useState} from 'react';
function Post(props){
    const [like,setLike] = useState(false)
    let container={
        maxWidth:"450px",
        margin:"auto",
        backgroundColor:"white",
        marginTop:"10px",
    }

    return(
        <div style={container}>
            <div style={{display:"flex",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div style={{paddingLeft:"10px",}}><img src={props.author.avator} alt="" height="55px" style={{borderRadius:"25px"}}/></div>
                    <div>
                        <span style={{color:"red",fontSize:"20px"}}>{props.author.name}</span>
                        <br/>
                        <span style={{fontSize:"12px",textAlign:"justify"}}>{props.content}</span>
                        <br/>
                        <span style={{fontSize:"12px",textAlign:"justify",color:"blue"}}>{props.time}</span>
                    </div>
                </div>
            </div>
            <img src="https://media-exp1.licdn.com/dms/image/C5622AQGtNjNqMrV8mA/feedshare-shrink_800/0/1638858659966?e=1642032000&v=beta&t=OqrBg2o_8Z5Nnu-J-j2uh7x4LI9l7aMVvzpKdZ_uSKA" alt="" height="500px" width="400px" padding="20px"/>
            {
                like===false?(
                    <div style={{paddingLeft:"20px"}}>{props.likes} has liked the post</div>
                ):(
                    <div style={{paddingLeft:"20px"}}>You and {props.likes} has liked the post</div>
                )
            }
            <div style={{display:"flex",justifyContent:"space-evenly",padding:"10px",fontWeight:"bold"}}>
                <div style={{color: like?"blue":"black"}} onClick={()=>{
                    setLike(!like);
                }}>like</div>
                <div>share</div>
                <div stylr={{flex:1}}>send</div>
                <div>comment</div>
            </div>
        </div>
    )
}
export default Post