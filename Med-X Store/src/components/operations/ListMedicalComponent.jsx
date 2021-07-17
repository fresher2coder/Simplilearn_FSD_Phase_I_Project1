import React, { Component } from 'react'
import MedicalServices from '../services/MedicalServices'

class ListMedicalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Pharma: []
        }
        this.saveMedicine = this.saveMedicine.bind(this);
        this.editMedicine = this.editMedicine.bind(this);
        this.deleteMedicine = this.deleteMedicine.bind(this);
    }
    
    deleteMedicine(medicineId){
        MedicalServices.deleteMedicine(medicineId).then( res => {
            this.setState({Pharma: this.state.Pharma.filter(Pharmacy => Pharmacy.medicineId !== medicineId)});
        });
    }
    viewMedicine(medicineId){
        this.props.history.push(`/view-Pharmacy/${medicineId}`);
    }
    editMedicine(medicineId){
        this.props.history.push(`/add-Pharmacy/${medicineId}`);
    }

    componentDidMount(){
        MedicalServices.viewAllMedicines().then((res) => {
            this.setState({ Pharma: res.data});
        });
    }

    saveMedicine(){
        this.props.history.push('/add-Pharmacy/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Medical List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.saveMedicine}> Add Medicine</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Medicine Name</th>
                                    <th> Medicine Dose </th>
                                    <th> Medicine Cost </th>
                                    <th> Expiry Date </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Pharma.map(
                                        Pharmacy => 
                                        <tr key = {Pharmacy.medicineId}>
                                             <td> {Pharmacy.medicineName} </td>   
                                             <td> {Pharmacy.medicineDose} </td>   
                                             <td> {Pharmacy.medicineCost}</td>
                                             <td> {Pharmacy.expireDate}</td>
                                             <td>
                                                 <button onClick={ () => this.editMedicine(Pharmacy.medicineId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMedicine(Pharmacy.medicineId)} className="btn btn-danger"><i class="far fa-trash-alt"></i>Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMedicine(Pharmacy.medicineId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMedicalComponent