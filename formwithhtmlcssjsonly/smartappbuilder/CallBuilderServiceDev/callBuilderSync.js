const saltedMd5 = require('salted-md5'),
    axios = require('axios');

const fetchFn = (url, json) => {
    const time = Math.floor((new Date()).getTime() / 1000);
    //const data = 's13c3u9wht9h' + time; // dsngr
    //const salt = '1hbaxuie7d6i9'; // bldr
	const data = '1hrm1ozc75rn8' + time; // dsngr
   const salt = 't4tg8eiovvaq'; // bldr
	
	//const data = '1h81zu8e9dgth' + time; // dsngr
    //const salt = '1hbiqjh970bp2'; // bldr
	
    const encryptedstring = saltedMd5(data, salt);
    console.log(encryptedstring)
    const headers = {
        'Content-Type': 'application/json',
        'timestamp': time,
        'encryptedstring': encryptedstring
    }
    return axios.post(url, json, {
        headers: headers
    })
};

//const body = {"data":{"table_name":"pfm_csp_50081","org_id":"11","user_id":"3875"}}

const body = {"data":{"table_name":"pfm_csp_488","org_id":"60","user_id":"465"}}
// const body1 = {"data":{"table_name":"pfm_csp_111675","org_id":"2","user_id":"406"}}
//const body = {"data":{"table_name":"pfm_csp_35913","org_id":"2","user_id":"7420"}}

const main = async() => {
    console.time("*")
	//const res = await fetchFn('https://tmpldev.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	// const res = await fetchFn('https://dev.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	
    // const res1 = await fetchFn('https://dev.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	// const res = await fetchFn('https://cs-sandbox-inhouse.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	
	//const res = await fetchFn('https://shell-prd.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	
	
	
	// const res = await fetchFn('https://release.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	
	// const res1= await fetchFn('https://release.chainsys.com/appbuilder/pfmtocouch/upsert', body);
    //const res = await fetchFn('https://dxshellapp.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	const res = await fetchFn('https://cs-prod-inhouse.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	
	//const res = await fetchFn('https://platform-prod1.chainsys.com/appbuilder/pfmtocouch/upsert', body);
	
	
	
    console.timeEnd("*")
    console.log('done')
	// console.log(res.data);
    // console.log(res1.data)
}

main();