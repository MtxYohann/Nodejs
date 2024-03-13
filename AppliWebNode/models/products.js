const pool = require('../util/database');

export class Product{
    constructor(id, title, price, description, imageUrl) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;    
    }
    
    save() {
        return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)', [this.title, this.price, this.description, this.imageUrl]);
    }

    update() {
        return db.execute('UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?', [this.title, this.price, this.description, this.imageUrl, this.id]);
    }

    static fetch(productId) {
        return db.execute('SELECT * FROM products WHERE id = ?', [productId]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static delete(productId) {
        return db.execute('DELETE FROM products WHERE id = ?', [productId]);
    }
}
