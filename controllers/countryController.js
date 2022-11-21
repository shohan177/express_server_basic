const handelGet = (req, res) => {
    res.send('get route ');
}

const handelPost = (req, res) => {
    res.send('post route ');
}

const handelPut = (req, res) => {
    res.send(`my put route id ${req.params.id}`);
}

const handelPatch = (req, res) => {
    res.send(`my patch route id ${req.params.id}`);
}

const handelDelete = (req, res) => {
    res.send(`my delete route id ${req.params.id}`);
}

module.exports = {
    handelGet,
    handelPost,
    handelPut,
    handelPatch,
    handelDelete
}