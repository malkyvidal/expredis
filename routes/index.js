module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;

function index(req, res){

    res.cookie('Index Cookie','desde el server');
    res.render('index', {title: 'Index', cookie: JSON.stringify(req.cookies), session: JSON.stringify(req.session)});
};

function loginProcess(req, res){
    return redirect('/');
};
function chat(req, res){
    res.render('chat', {title: 'Chat'});
};

function login(req, res){
    res.render('login', {title: 'Login'});
}