let commonMethods=require('./core/commonMethods');
// let moment = require('moment');
// let {Client}= require('pg');
// let timeOffSetDisplay = (offSet) => {
//     let offSetString = Math.floor(offSet / 60) + ':' + (offSet % 60);
//     if (offSet >= 0) {
//         offSetString = `+${offSetString}`
//     }
//     return offSetString;
// }
console.log(commonMethods.decrypt('YbWufHdTUiJ5JLf0PLa1/zu+rpbc3pYpKvXLepMY8zB4dQga', 'C16057d01000032'))
// console.log(timeOffSetDisplay(moment.tz('Africa/Banjul').utcOffset()));

// getDbDetails();
// async function getDbDetails() {
//     let timeZoneQuery = `select name, setting from pg_settings where name='TimeZone'`;
//     const client = new Client({
//         "database": `postgres`,
//         "protocol": `https`,
//         "host": `172.26.3.30`,
//         "port": `6542`,
//         "user": `perf_dist_ro`,
//         "password": `perf_dist_ro`,
//         "org_id": `5`,
//         "db_type": `POSTGRES`,
//         "code": ``
//     });
//     try {
//         client.connect();
//         let res = await client.query(timeZoneQuery);
//         console.log(res['rows'][0]['setting']);
//     } catch (err) {
//         throw err;
//     } finally {
//         client.end();
//     }
// }