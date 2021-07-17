import React, { Component } from 'react'
import MedicalServices from '../services/MedicalServices'

class SaveMedicineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            medicineId: this.props.match.params.medicineId,
            medicineName: '',
            medicineDose: '',
            medicineCost: '',
            expireDate: ''

        }
        this.changeMedicineNameHandler = this.changeMedicineNameHandler.bind(this);
        this.changeMedicineDoseHandler = this.changeMedicineDoseHandler.bind(this);
        this.changeMedicineCostHandler = this.changeMedicineCostHandler.bind(this);
        this.changeExpireDateHandler = this.changeExpireDateHandler.bind(this);
        this.saveOrUpdatePharmacy = this.saveOrUpdatePharmacy.bind(this);
    }
    // step 3
    componentDidMount(){

        // step 4
        if(this.state.medicineId === '_add'){
            return
        }else{
            MedicalServices.viewMedicineById(this.state.medicineId).then( (res) =>{
                let Pharmacy = res.data;
                this.setState({medicineName: Pharmacy.medicineName,
                    medicineDose: Pharmacy.medicineDose,
                    medicineCost : Pharmacy.medicineCost,
                    expireDate : Pharmacy.expireDate

                });
            });
        }        
    }
    saveOrUpdatePharmacy = (e) => {
        e.preventDefault();
        let Pharmacy = {medicineName: this.state.medicineName, medicineDose: this.state.medicineDose, medicineCost: this.state.medicineCost, expireDate: this.state.expireDate};
        console.log('Pharmacy => ' + JSON.stringify(Pharmacy));

        // step 5
        if(this.state.medicineId === '_add'){
            MedicalServices.saveMedicine(Pharmacy).then(res =>{
                this.props.history.push('/store');
            });
        }else{
            MedicalServices.updateMedicineById(Pharmacy, this.state.medicineId).then( res => {
                this.props.history.push('/store');
            });
        }
    }
    
    changeMedicineNameHandler= (event) => {
        this.setState({medicineName: event.target.value});
    }

    changeMedicineDoseHandler= (event) => {
        this.setState({medicineDose: event.target.value});
    }

    changeMedicineCostHandler= (event) => {
        this.setState({medicineCost: event.target.value});
    }

    changeExpireDateHandler= (event) => {
        this.setState({expireDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/store');
    }

    getTitle(){
        if(this.state.medicineId === '_add'){
            return <h3 className="text-center">Add Medicine</h3>
        }else{
            return <h3 className="text-center">Update Medicine</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Medicine Name: </label>
                                            <input placeholder="Medicine Name" name="medicineName" className="form-control" 
                                                value={this.state.medicineName} onChange={this.changeMedicineNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Medicine Dose: </label>
                                            <input placeholder="Medicine Dose" name="medicineDose" className="form-control" 
                                                value={this.state.medicineDose} onChange={this.changeMedicineDoseHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Medicine Cost: </label>
                                            <input placeholder="Medicine Cost" name="medicineCost" className="form-control" 
                                                value={this.state.medicineCost} onChange={this.changeMedicineCostHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Expiry Date: </label>
                                            <input placeholder="Expiry Date" name="expireDate" className="form-control" 
                                                value={this.state.expireDate} onChange={this.changeExpireDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePharmacy}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default SaveMedicineComponent