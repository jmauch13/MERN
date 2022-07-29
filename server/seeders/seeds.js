const userSeeds = require('./userSeed.json');
const jobSeeds = require('./jobSeeds.json');
const db = require('../db/conn');
const {JobPost, User} = require('../models'); 

db.once('open', async() => {
    try {
        await JobPost.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i=0; i < jobSeeds.length; i++) {
            const { _id, jobPostAuthor } = await JobPost.create(jobSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: jobPostAuthor },
                {
                    $addToSet: {
                        jobPosts: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(e);
        process.exit(1);
    } 
    process.exit(0);
})