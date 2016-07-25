/**
 * Abstract persistence manager module
 */
define(function () {

  return class AbstractPersistenceManager {

    /**
     * Constructor
     */
    constructor() {

      if (new.target === AbstractPersistenceManager) {
        throw new TypeError("Cannot construct AbstractPersistenceManager instances directly");
      }

      if (this.persist === undefined) {
        throw new TypeError("persist must be implemented");
      }

      if (this.load === undefined) {
        throw new TypeError("load must be implemented");
      }
    }
  }
});
