import LaboratoryData2 from "./LaboratoryData2";
import LaboratoryData3 from "./LaboratoryData3";
import SingleLaboratoryDataSkeleton from "./SingleLaboratoryDataSkeleton";

class LaboratoriesData {
    static getLaboratories() {
        return [
            undefined,
            {},
            LaboratoryData2.getLaboratoryData2(),
            LaboratoryData3.getLaboratoryData3(),
            SingleLaboratoryDataSkeleton.getSingleLaboratoryDataSkeleton(),
        ]
    }
}

export default LaboratoriesData;