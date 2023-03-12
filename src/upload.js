// import PocketBase from 'pocketbase';

// const pb = new PocketBase('https://immense-scooter.pockethost.io');

// TODO: AUTHENTICATION

/*
GET TEAMS FROM DATABASE, OR GENERATE NEW TEAMS

*/

/*
GENERATE FIELD STATES
scoring grid for red and blue alliance as two Array[27] grids
*/

/*
LOOP OVER EVENTS AND CREATE NEW EVENT RECORDS

const eventIds = [];
 
const data = {
    "type": "itemPickup",
    "team": "RELATION_RECORD_ID",
    "fieldState": "RELATION_RECORD_ID",
    "event": "JSON"
};

for event in events:
    let record = await pb.collection("events").create(<event_data>);
    add record.id to event ids
*/


// async function upload(match) {
//     let record = await pb.collection("games").create(match.serialize());
//     return record;
// }