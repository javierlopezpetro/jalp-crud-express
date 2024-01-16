const {pool} = require('../db.js');

const getIndex = async (req, res) => {
      const [rows] = await pool.query('SELECT * FROM producto')
      res.render('index.ejs', {data: rows});
};

const guardar = async (req, res)=>{
      try {
            const data = req.body;            
            const result = await pool.query('INSERT INTO producto SET ? ', [data]);      
            res.redirect('/');
      } catch (error) {
            res.json({message: "Todo mal"})
      }
}

const eliminar = async (req, res)=>{
      try {
            
            const dato = req.params.id;
            const datoEliminado = await pool.query('DELETE FROM producto WHERE idProducto = ?', [req.params.id])
            res.redirect('/');

            
      } catch (error) {
            res.json({message: "Todo mal"})
      }
}

const actualizar = async (req, res)=>{
      try {
            const [data] = await pool.query('SELECT * FROM producto WHERE idProducto=?', [req.params.id])            
            //res.json(data[0]);
            res.render('editar_producto.ejs', {data: data[0]});
            
      } catch (error) {
            res.json({message: "Todo mal"})
      }
}

const editar = async (req, res)=>{
      try {
            const data = req.body;                                   
            const result = await pool.query('UPDATE producto SET nombre=?, precio=?, moto=? WHERE idProducto=? ', [data.nombre, data.precio, data.moto, req.params.id]);      
            res.redirect('/');
      } catch (error) {
            res.json({message: "Todo mal"})
      }
}


module.exports = {getIndex, guardar, eliminar, actualizar, editar};
