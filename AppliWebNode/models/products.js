import  {pool} from '../util/database.js';

export class Product{
    constructor(id, title, price, description, imageUrl) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;    
    }
    
    save() {
        return pool.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)', [this.title, this.price, this.description, this.imageUrl]);
    }

    update() {
        return pool.execute('UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?', [this.title, this.price, this.description, this.imageUrl, this.id]);
    }

    static fetch(productId) {
        return pool.execute('SELECT * FROM products WHERE id = ?', [productId]);
    }

    static fetchAll() {
        return pool.execute('SELECT * FROM products');
    }

    static delete(productId) {
        return pool.execute('DELETE FROM products WHERE id = ?', [productId]);
    }
}
