
const toRegister = (req, res) => {
    res.send('api/veterinarians');
}

const profile = (req, res) => {
    res.send('api/veterinarians/profile');
}

export {
    toRegister,
    profile
}