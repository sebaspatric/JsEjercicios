const {
    users,
    projects
   } = require('../models')
   const db = require('../models')
   const Project = db.projects
   const User = db.users
   // Crear y guardar un nuevo proyecto
   exports.createProject = (project) => {
    return Project.create({
    name: project.name,
    })
    .then(project => {
    console.log(`>> Creado el proyecto: ${JSON.stringify(project,
   null, 4)}`)
    return project
    })
    .catch(err => {
    console.log(`>> Error al crear el proyecto: ${err}`)
    })
   }
   // Agregar un Usuario al Poryecto
   exports.addUser = (projectId, userId) => {
    return Project.findByPk(projectId)
    .then((project) => {
    if (!project) {
    console.log("No se encontro el proyecto!");
    return null;
    }
    return User.findByPk(userId).then((user) => {
        if (!user) {
            console.log("Usuario no encontrado!");
            return null;
            }
            project.addUser(user);
            console.log('***************************')
            console.log(`>> Agregado el usuario id=${user.id} al proyecto
           con id=${project.id}`);
            console.log('***************************')
            return project;
            });
            })
            .catch((err) => {
            console.log(">> Error mientras se estaba agregando Usuario al Proyecto", err);
            });
           };
           // obtener los proyectos por id
           exports.findById = (Id) => {
            return Project.findByPk(Id, {
            include: [{
            model: User,
            as: "users",
            attributes: ["id", "name"],
            through: {
            attributes: [],
            }
            }, ],
            })
            .then(project => {
            return project
            })
            .catch(err => {
            console.log(`>> Error mientras se encontraba el proyecto:
           ${err}`)
            })
           }
           // obtener todos los Usuarios incluyendo los comentarios
           exports.findAll = () => {
            return Project.findAll({
            include: [{
            model: User,
            as: "users",
            attributes: ["id", "name"],
            through: {
                attributes: [],
            }
        }, ],
    }).then(projects => {
        return projects
    }).catch((err) => {
        console.log(">> Error Buscando los proyectos: ", err);
    });
}
