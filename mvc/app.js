(function() {
    let database = ['JS', 'Node.js', 'React.js', 'MVC'];

    let model = new Model(database);
    let view = new View(database);
    let controller = new Controller(model, view);
}());