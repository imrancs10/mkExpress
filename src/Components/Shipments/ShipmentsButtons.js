import React, { useEffect, useState } from 'react'
import './shipment.css'
import ButtonBox from '../Common/ButtonBox'
import { redirect } from 'react-router-dom'

export default function ShipmentsButtons({ selectedRows, loginDetails }) {
    const [permissionList, setPermissionList] = useState([]);
    var isRowSelected = selectedRows?.length > 0;
    useEffect(() => {
debugger;
        var permissionData = window.localStorage.getItem(process.env.REACT_APP_ACCESS_PERMISSION_KEY);
        try {
            permissionData = JSON.parse(permissionData);
            setPermissionList(permissionData?.filter(x => x?.menu?.menuPosition === "shipment_actions"));
        } catch (error) {
            redirect("/login");
        }
    }, [])
    return (
        <div className='card mb-2'>
            <div className='card-body' style={{ padding: '7px' }}>
                <div className='ship-btn-container'>
                    <div className="btn-group mb-1 btn-group-sm" role="group" aria-label="Second group" style={{ width: '100%', fontSize: '10px' }}>
                        {
                            permissionList?.map((ele, index) => {
                                return <ButtonBox key={index} modalId={"#" + ele?.menu?.link} className="btn btn-primary btn-sm" icon={ele?.menu?.icon} text={ele?.menu?.name} />
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
