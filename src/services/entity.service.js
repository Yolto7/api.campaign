const entityRepository = require('../repositories/entity.repository');

class EntityService {
  static instance
  entityRepository

  constructor(entityRepository) {
    if(!!EntityService.instance) {
      return EntityService.instance;
    }

    EntityService.instance = this;
    this.entityRepository = entityRepository;
  }

  async get() {
    return await this.entityRepository.get();
  }

  async create(entity) {
    return await this.entityRepository.create(entity);
  }

  async update(id, entity) {
    return await this.entityRepository.update(id, entity);
  }

  async delete(id) {
    return await this.entityRepository.delete(id);
  }
}

module.exports = new EntityService(entityRepository);