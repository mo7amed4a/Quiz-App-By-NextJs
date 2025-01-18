import axios from "axios";

async function getProfileData() {
        let data;
        await axios.get(`https://api.github.com/users/mo7amed4a`)
        .then(res => {
            data = res.data
        });
        return data
}

// async function getQuestionsApi(host,e) {
//     let data;
//     await axios.get(`${host}/api/${e}`)
//     .then(res => {
//         data = res.data
//     });
//     return data
// }


export {getProfileData};
