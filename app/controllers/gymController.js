const asyncHandler = require('express-async-handler');

exports.getAllGyms = asyncHandler(async(req, res) => {
    res.render('gym', { links: req.links });
});
