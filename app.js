const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const mustache = require("mustache-express");
app.engine("mustache", mustache());
app.set("view engine", "mustache");

const uniModule = {
    WebDev: { name: "Web Application Development 2", moduleLeader: "Fiona Fairle", description: "This module equips the students with the knowledge and understanding to design, implement and deploy scalable web applications consisting of a web browser client interacting with a server which uses a database as well as external services." },
    RSPI: { name: "Reasearch Skills and Professional Issues", moduleLeader: "Mark Jenkins", description: "This module provides the research skills and professional issues knowledge necessary to underpin degree and honours level project work. " },
    AADP: { name: "Applciation Architecture and Design Patterns", moduleLeader: "Booby Law", description: "This module covers proven good software development practices used in the creation of software systems." },
    IP3: { name: "Integrated Project 3", moduleLeader: "Ryan Gibson", description: "The module offers students the opportunity to develop a solution to a realistic problem relevant to the domain of the student's programme of study and appropriate to the student's level of study."},
    DevOps: { name: "DevOps", moduleLeader: "Mark Jenkins", description: "This module is concerned with the software engineering Development and Operations (DevOps) approach used in the creation of software systems." },
    ITPM3: { name: "IT Project Management 3", moduleLeader: "Lisa Liu", description: "This module provides a solid foundation in Project Management within the context of IT Systems development and deployment." },
}

app.get("/module/:name", (req, res, next) => {
    
    const info = uniModule[req.params.name];
    console.log(req.params, info)
    if (!info) return next(); // will eventually fall through to 404
    res.render("modulePage", {
        moduleInfo: info,
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(
        `Express started on http://localhost:${port}` +
        "; press Ctrl-C to terminate."
    )
);