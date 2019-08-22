import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'cameras';

class Camera extends bookshelf.Model {

    get tableName() {
        return TABLE_NAME;
    }

    verifyPassword(password) {
        return this.get('password') === password;
    }
}

export default Camera;
