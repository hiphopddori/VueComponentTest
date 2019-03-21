import axios from 'axios'

export default{

    getBranchs:(branchId) => {
        return axios.get('/org/branchs',{
                params: {
                    branchId:branchId
                }
        });
    }
    ,getTeams:(branchId,teamId) => {
        
        return axios.get('/org/teams',{
            params: {
                branchId:branchId
                ,teamId:teamId
            }
    });
    }

}