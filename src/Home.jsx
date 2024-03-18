import Item from "./Item"

export default function Home({name,rollno}){
    
    return (
        <div >
            {/* <style>
                {`h5{
                    border:2px solid red;
                }
                h6{
                    border:4px solid black;
                }
                `}
            </style> */}
            <h5>{name}</h5>
            <h6>{rollno}</h6>
        </div>
    )
}