const Schema = require('./model/mongoSchema');

const router = require('express').Router();

router.post('data/InsertOne', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    // let email = req.body
    // let name = req.body;
    const user = new Schema({ name, email, age });
    await user.save();
    res.send(user);
  } catch (error) {
    console.log('Error while Inserting data into mongodb',error);
    res.status(500).send(error);
  }
});

router.get('/data/fetchData/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const users = await Schema.findById(id);
    res.send(users);
  } catch (error) {
    console.log('Error while Fetching data from mongodb',error);
    res.status(500).send(error);
  }
});

router.get('/data/fetchAll', async (req, res) => {
  try {
    const users = await Schema.find({});
    res.send(users);
  } catch (error) {
    console.log('Error while Fetching data from mongodb',error);
    res.status(500).send(error);
  }
});

router.put('/data/updateData/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = await Schema.findByIdAndUpdate(id, { name, email, age }, { new: true });
    res.send(user);
  } catch (error) {
    console.log('Error while Updating data into mongodb',error);
    res.status(500).send(error);
  }
});

router.delete('/data/deleteData/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const user = await Schema.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.log('Error while Deleting data from mongodb',error);
    res.status(500).send(error);
  }
});

router.put('/data/replaceData/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const updateValue = {
        $set: {
            userName: req.body.userName
        }
    }
    const options = { new: true };
    await Schema.findOneAndUpdate(id, updateValue, options)
    res.send(user);
  } catch (error) {
    console.log('Error while Updating data from mongodb',error);
    res.status(500).send(error);
  }
})



module.exports = router;