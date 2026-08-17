 const { DatabaseSync } = require('node:sqlite');
    const database = new DatabaseSync('database.db');

    // Execute SQL statements from strings.
    database.exec(`
    CREATE TABLE IF NOT EXISTS data(
        key INTEGER PRIMARY KEY,
        value TEXT
    ) STRICT
    `);
    // Create a prepared statement to insert data into the database.
    const insert = database.prepare('INSERT INTO data (value) VALUES (?)');
    // Execute the prepared statement with bound values.
    insert.run('hello');
    insert.run('world');
    // Create a prepared statement to read data from the database.
    const query = database.prepare('SELECT * FROM data ORDER BY key');
    // Execute the prepared statement and log the result set.
    console.log(query.all());
    // Prints: [ { key: 1, value: 'hello' }, { key: 2, value: 'world' } ]
