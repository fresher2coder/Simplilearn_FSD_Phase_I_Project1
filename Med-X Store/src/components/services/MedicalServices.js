import axios from 'axios';

const MEDICAL_API_BASE_URL = "http://localhost:8082/api/v2";

class MedicalServices {

    viewAllMedicines(){
        return axios.get(MEDICAL_API_BASE_URL);
    }

    saveMedicine(Pharmacy){
        return axios.post(MEDICAL_API_BASE_URL, Pharmacy);
    }

    viewMedicineById(medicineId){
        return axios.get(MEDICAL_API_BASE_URL + '/' + medicineId);
    }

    updateMedicineById(Pharmacy, medicineId){
        return axios.put(MEDICAL_API_BASE_URL + '/' + medicineId, Pharmacy);
    }

    deleteMedicine(medicineId){
        return axios.delete(MEDICAL_API_BASE_URL + '/' + medicineId);
    }
}

export default new MedicalServices()