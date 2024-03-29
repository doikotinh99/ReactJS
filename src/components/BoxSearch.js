import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosAuth, axiosInstance } from "../utills/axios";
export default function BoxSearch(){
    const navigate = useNavigate()
    const [data, setData] = React.useState('')
    const [dataProduct, setDataProduct] = React.useState([])
    React.useEffect(()=>{
        if(data !== ''){
            axiosInstance.get(`http://localhost:8000/api/search/${data}/0`)
            .catch(error=>console.log(error))
            .then(res=>{
                setDataProduct(res['data'].product)
            })
        }
    }, [data])
    const keyPress = (e)=>{
        if(e.keyCode === 13){
            navigate(`/search/${data}`)
            document.getElementById('listDataS').classList.remove('show')
        }
    }
    return (
        <React.Fragment>
            <div style={{position: 'relative'}}>
                <input className="ipSearchHd" 
                onFocus={()=>{
                    document.getElementById('listDataS').classList.add('show')
                    }} 
                onBlur={()=>{
                    setTimeout(()=>{
                        document.getElementById('listDataS').classList.remove('show')
                    }, 100)
                    }} 
                onKeyUp={e=>keyPress(e)}
                value={data} onChange={e => setData(e.target.value)} placeholder='Search on Restaurant ....' />
                <div id="listDataS" className="listSearch">
                    <ul>
                        {dataProduct.map((val)=>{
                            return <li key={val.id}><Link to={'/product/' + val.slug}>{val.name}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}