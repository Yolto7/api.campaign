const model = require('../models/campaign');

class EntityRepository {
  static instance
  model

  constructor(model) {
    if(!!EntityRepository.instance) {
      return EntityRepository.instance;
    }

    EntityRepository.instance = this;
    this.model = model;
  }

  async get() {
    return await this.model.find();
  }

  async create(entity) {
    const campaign = new this.model(entity);
    return await campaign.save();
  }

  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity);
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = new EntityRepository(model);