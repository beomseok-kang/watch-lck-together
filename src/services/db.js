
import { db } from "./services/firebase";

var docRef = db.collection('t1').doc('ji43cWGav8GTCcYU1Mtn');
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log(doc.data());
    } else {
        console.log("nodata");
    }
}).catch(function(err) {
    console.log("Error getting doc")
});

db.collection('t1').get().then(function(docs) {
    if(docs.exists) {
        console.log(docs.data());
    } else {
        console.log('nodata')
    }
}).catch(function(err) {
    console.log("Error getting doc")
});