import Home from "./Home";


function Main(props){
    if(props.display==="Home"){
        return(<Home/>)
    }
    else if(props.display==="My Network"){
        return(<div>My Network</div>)
    }
    else if(props.display==="Jobs"){
        return(<div>jobs</div>)
    }
    else if(props.display==="Notification"){
        return(<div>Notification</div>)
    }
    else{
        return(<div>Messages</div>)
    }
    
}
export default Main