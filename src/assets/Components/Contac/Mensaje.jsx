export default function Message({msj,color}){

    let stilo={
     backgroundColor:color,
     padding:"1rem",
     marginBottom:"1rem",
     textAlign:"center",
     color:"#fff",
     fontWeight :"bold",
     marginLeft:"35%",
     width: "30%"

    }
    
    return(
    <div style={stilo}>
        <p>{msj} </p>
    </div>
    )
    }