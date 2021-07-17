import React, { Component } from 'react'
import MedicalServices from '../services/MedicalServices'

class ViewMedicalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           medicineId: this.props.match.params.medicineId,
            Pharmacy: {}
        }
    }

    componentDidMount(){
        MedicalServices.viewMedicineById(this.state.medicineId).then((res) => {
            this.setState({Pharmacy: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <div className = "card col-md-7 offset-md-3">
                    <h1 className = "text-center">Medicine Details</h1>
                    <div className = "card-body">
                    <div className = "row">
                            <label className = "col-md-4 offset-md-3"> Medicine id: </label>
                            <div> { this.state.Pharmacy.medicineId}</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-3"> Medicine Name : </label>
                            <div> { this.state.Pharmacy.medicineName }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-3"> Medicine Dose : </label>
                            <div> { this.state.Pharmacy.medicineDose }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-3"> Medicine Cost: </label>
                            <div> { this.state.Pharmacy.medicineCost }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-4 offset-md-3"> Expiry Date :</label>
                            <div> { this.state.Pharmacy.expireDate }</div>
                        </div>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br>
            </div>
            
        )
    }
}
export default ViewMedicalComponent