const loginBlocker = (req, res) => {
    if(!req.session.isLoggedIn) {
        req.flash('message', 'Login dulu!')
        res.redirect('/login')
    }
}

module.exports = loginBlocker;