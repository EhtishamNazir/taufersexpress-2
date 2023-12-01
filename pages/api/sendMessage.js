const accountSid = 'ACe2bc2e44f4b38a8a06d3f3c396079d66';
const authToken = '032a43dc531518851893a267f1d9129c';
const client = require('twilio')(accountSid, authToken);



client.messages
    .create({
        body: 'Hi, Thanks for placing order we will be dfelivering shortly',
        from: '+447723570814',
        to: '+393495686238'
    })
    .then(message => console.log(message.sid))
    .done();


