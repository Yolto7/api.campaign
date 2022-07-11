const entityService = require("../services/entity.service");

class Controller {
  static instance
  entityService

  constructor(entityService) {
    if(!!Controller.instance) {
      return Controller.instance;
    }

    Controller.instance = this;
    this.entityService = entityService;
  }

  async get(req, res) {
    try {
      const data = await this.entityService.get();
      return res.status(200).json({ data, status: true });
    } 
    catch (err) {
      return res.status(400).json({ msg: err.message, status: false });
    }
  }

  async create(req, res) {
    const { name, startDate, endDate, details } = req.body;

    try {
      const data = { name, startDate, endDate, details };
      const result = await this.entityService.create(data);
      return res.status(200).json({ data: result, status: true });
    } 
    catch (err) {
      return res.status(400).json({ msg: err.message, status: false });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, startDate, endDate, details } = req.body;

    try {
      const data = { name, startDate, endDate, details };
      const result = await this.entityService.update(id, data);
      return res.status(200).json({ data: result, status: true });
    } 
    catch (err) {
      res.status(400).json({ msg: err.message, status: false });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const data = await this.entityService.delete(id);
      return res.status(200).json({ data, status: true});
    } 
    catch (err) {
      return res.status(400).json({ msg: err.message, status: false });
    }
  }
}

module.exports = new Controller(entityService);
