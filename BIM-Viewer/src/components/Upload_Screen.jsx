import { Link, Route } from 'react-router-dom'
import '../assets/css/upload_screen.css'
import { FaFileUpload } from "react-icons/fa";

export default function Upload_Screen() {


    return(
        <div className="container">
            <div className='divisor'></div>
            <div className='collum'>
                <h2>Insira o modelo da construção</h2>
                
                    <div>
                        <FaFileUpload size={48} color='grey'/>
                    </div>
            </div>
            <div className='divisor'></div>
            <div className='collum'>
                <h2>Insira a foto da construção</h2>
                <div>
                    <FaFileUpload size={48} color='grey'/>
                </div>
            </div>
            <div className='divisor'></div>
        </div>
    )
}