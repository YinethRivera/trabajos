const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize("crudExpress", "Yineth", "yineth0311", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// Definir el modelo de datos para 'User'
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "users", // Nombre personalizado para la tabla
  }
);

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize
  .sync()
  .then(() => console.log("Conectado a la base de datos y sincronizado."))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));
// Rutas CRUD
// Obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Actualizar un usuario
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.email = email;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un usuario
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});



// Definir el modelo de datos para 'Cliente'
const Cliente = sequelize.define(
  "Cliente",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    identification: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "clientes", // Nombre de la tabla
  }
);

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize
  .sync()
  .then(() => console.log("Conectado a la base de datos y sincronizado."))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

// Rutas CRUD
// Obtener todos los clientes
app.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo cliente
app.post("/clientes", async (req, res) => {
  const { name, email, city, address, age, identification } = req.body;
  try {
    const newCliente = await Cliente.create({
      name,
      email,
      city,
      address,
      age,
      identification,
    });
    res.status(201).json(newCliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Actualizar un cliente existente
app.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, city, address, age, identification } = req.body;
  
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    await cliente.update({
      name,
      email,
      city,
      address,
      age,
      identification,
    });

    res.json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un cliente existente
app.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    await cliente.destroy();
    res.status(204).json(); // No se retorna contenido, solo un estado 204 No Content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});