const asyncHandler = require('express-async-handler');

exports.getAllTrainers = asyncHandler(async(req, res) => {
    res.render('trainer', { links: req.links });
});
