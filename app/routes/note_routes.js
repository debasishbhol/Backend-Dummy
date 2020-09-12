module.exports = function(app, db) {

    app.get("/getJob", (req, res) => {
        let obj = {
            "name": "Debasish",
            "title": "Bhol"
        }
        console.log(obj);
        res.send(obj);  
    });


    app.post('/addJob', (req, res) => {
        console.log(req.body);
        res.send('Hello');
    })

    
}