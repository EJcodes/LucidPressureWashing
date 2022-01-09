export const showMessage = (req, res) => {
    res.status(200).send(`Here is a thing i just learned:  ${req.params.message}`);
};