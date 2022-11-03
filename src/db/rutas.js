const router = require("express").Router();
const conexion = require("./config/conexion");

router.get("/", (req, res) => {
    let sql = "select * from db_prueba";
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json(rows);
        }
    });
});

router.post("/", (req, res) => {
    const {
        producto,
        importe,
        moneda,
        fechaInicio,
        fechaFinal,
        estatus,
        comentario,
    } = req.body;
    let sql = `insert into dbo_promociones (
    producto, 
    importe, 
    moneda, 
    fechaInicio, 
    fechaFinal, 
    estatus, 
    comentario
    ) values(
        '${producto}', 
        '${importe}', 
        '${moneda}', 
        '${fechaInicio}', 
        '${fechaFinal}', 
        '${estatus}', 
        '${comentario}'
    )`;
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err;
        else {
            res.json({ status: "empleado agregado" });
        }
    });
});
