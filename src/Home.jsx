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
        <h3>{name}</h3>
        <h3>{rollno}</h3>

        </div>
    )
}