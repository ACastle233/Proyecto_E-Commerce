CREATE DATABASE PresupuestosTecla;

USE ventas;

CREATE TABLE productos(
    idProducto INT NOT NULL IDENTITY(1,1),
    nombre VARCHAR(255) NOT NULL,
    precio money NOT NULL,
    stock INT NOT NULL,
    descripcion VARCHAR(255),
    PRIMARY KEY (idProducto) 
);

CREATE TABLE vendedores(
    idVendedor INT NOT NULL,
    tipoUsuario TINYINT NOT NULL,
    rating FLOAT,
    nombreTienda VARCHAR(255),
    PRIMARY KEY(idVendedor)
);

CREATE TABLE usuarios(
    idUsuario INT NOT NULL IDENTITY(1,1),
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    antiguedad TIMESTAMP NOT NULL,
    idVendedor INT,
    PRIMARY KEY(idUsuariSELECT * FROM usuarios INNER JOIN vendedores ON usuarios.idVendedor = vendedores.idVendedor;
o),
    FOREIGN KEY(idVendedor) REFERENCES vendedores(idVendedor)
);

INSERT INTO vendedores(
    idVendedor,tipoUsuario, rating,nombreTienda) VALUES(
        '1',
        '1',
        '4.0',
        'Colombus'
    );

    INSERT INTO vendedores(
    idVendedor,tipoUsuario, rating,nombreTienda) VALUES(
        '2',
        '1',
        '1.0',
        'Patito'
    );
INSERT INTO vendedores(
    idVendedor,tipoUsuario) VALUES(
        '3',
        '0'
    );

INSERT INTO usuarios(nombre,email,
    contraseña, direccion, antiguedad,
    idVendedor) VALUES(
        'Julio',
        'julio@gmail.com',
        '1234',
        'Lomas',
        DEFAULT,
        '1'
    );

INSERT INTO usuarios(nombre,email,
    contraseña, direccion, antiguedad,
    idVendedor) VALUES(
        'Maria',
        'maria@gmail.com',
        '2468',
        'Oaxaca',
        DEFAULT,
        '2'
    );

    INSERT INTO usuarios(nombre,email,
    contraseña, direccion, antiguedad,
    idVendedor) VALUES(
        'Juan',
        'juanes@gmail.com',
        '1234',
        'Villa Hermosa',
        DEFAULT,
        '1'
    );
INSERT INTO usuarios(nombre,email,
    contraseña, direccion, antiguedad) VALUES(
        'Cris',
        'cris@gmail.com',
        '1234',
        'Toluco',
        DEFAULT
    );

SELECT * FROM usuarios INNER JOIN vendedores ON usuarios.idVendedor = vendedores.idVendedor;

SELECT * FROM vendedores;
SELECT * FROM usuarios;


GO