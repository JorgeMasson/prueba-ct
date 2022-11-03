create database if not exists db_prueba;

use db_prueba;

create table dbo_promociones(
	idProducto INT AUTO_INCREMENT PRIMARY KEY,
    producto varchar(50),
    importe float,
    moneda int(1),
    fechaInicio date,
    fechaFinal date,
    estatus int(1),
    comentario varchar(255)
);



