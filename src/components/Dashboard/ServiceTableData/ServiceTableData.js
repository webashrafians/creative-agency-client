import Sidebar from '../SideBar/Sidebar';
import React, { useState, useEffect } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ServiceTableDataInfo from '../ServiceTableDataInfo/ServiceTableDataInfo';

const ServiceTableData = () => {
    const [serviceTableData, setServiceTableData] = useState([]);
    useEffect(() => {
        fetch('https://pure-inlet-65517.herokuapp.com/fullOrderList')
            .then(response => response.json())
            .then(data => setServiceTableData(data))
    }, [])

    return (
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-2 pr-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-xs-10 pl-0" style={{ backgroundColor: '#F4F7FC', height: '100vh' }} >
                <DashboardHeader title={'Services List'}></DashboardHeader>
                <ServiceTableDataInfo serviceTableData={serviceTableData}></ServiceTableDataInfo>
            </div>
        </div>
    );
};

export default ServiceTableData;