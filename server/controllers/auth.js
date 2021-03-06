import User from '../models/user'

export const register = async (req, res) => {
    console.log(req.body);
    const {firstName, lastName, mobilePhone, email, address, city, zipCode, yourState, squareFootage, password } = req.body;

    //validation

    if(!firstName) return res.status(400).send('First name is required')
    if(!lastName) return res.status(400).send('Last name is require')
    if(!password || password.lendth < 6)
    return res.status(400).send('Password is required and should be min of 6 characters long');
    let userExist = await User.findOne({email}).exec();
    if(userExist) return res.status(400).send('Email already exists');
    //register
    const user = new User(req.body);
    try{
        await user.save();
        console.log('USER CREATED', user);
        return res.json({ok: true});
    }catch (err) {
        console.log('CREATE USER FAILED', err)
        return res.status(400).send('Error. Try again.')
    }
};