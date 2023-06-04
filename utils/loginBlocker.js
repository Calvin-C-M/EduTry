const loginBlocker = (req, res) => {
    if(!req.session.isLoggedIn) {
        req.flash('message', 'Login dulu!')
        res.redirect('/autentikasi')
    }
}

module.exports = loginBlocker;