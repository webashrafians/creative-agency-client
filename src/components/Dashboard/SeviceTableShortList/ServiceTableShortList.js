import React from 'react';
import './ServiceTableShortList.css';

const ServiceTableShortList = ({ serviceTableData }) => {
    return (
        <table class="table table-bordered ml-3 mt-4">
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    serviceTableData.map((serviceTable) =>
                        <tr>
                            <td>{serviceTable.name}</td>
                            <td>{serviceTable.email}</td>
                            <td>{serviceTable.projectTitle}</td>
                            <td>{serviceTable.projectDetails}</td>
                            <td scope="col" span="1">
                                <select className="status-change">
                                    <option className="text-danger" >{serviceTable.status}</option>
                                    <option value="done">Done</option>
                                </select>
                               
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    );
};

export default ServiceTableShortList;