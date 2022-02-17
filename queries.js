const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

  const sendDetails = (request, response) => {
    const { firstname, lastname, email, message } = request.body
  
    pool.query('INSERT INTO details (firstname, lastname, email, message) VALUES ($1, $2, $3, $4)', [firstname, lastname, email, message], (error, results) => {
      if (error) {
        response.status(200).json("Details added!")
      }
      response.status(200).json("Details added!")
    })
  }

  const getDetails = (request, response) => {
    pool.query('SELECT * FROM details ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const userDetail = (request, response) => {
    pool.query('SELECT * FROM userdetails ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const userDetails = (request, response) => {
    const { firstname, lastname, email, country, sector, phone  } = request.body
  
    pool.query('INSERT INTO userdetails (firstname, lastname, email, country, sector, phone) VALUES ($1, $2, $3, $4, $5, $6)', [firstname, lastname, email, country, sector, phone], (error, results) => {
      if (error) {
        response.status(200).json("User details added!")
      }
      response.status(200).json("User details added!")
    })
  }

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    sendDetails,
    getDetails,
    userDetails,
    userDetail
  }