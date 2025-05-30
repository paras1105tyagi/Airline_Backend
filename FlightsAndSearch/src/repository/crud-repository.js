class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Sonething went wrong in crud repository");
    }
  }

  async destroy(modelId) {
    try {
      await this.model.destroy({
        where: {
          id: modelId,
        },
      });

      return true;
    } catch (error) {
      console.log("Sonething went wrong in crud repository");
    }
  }

  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log("Sonething went wrong in crud repository");
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("Sonething went wrong in crud repository");
    }
  }

  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });

      return result;
    } catch (error) {
      console.log("Sonething went wrong in crud repository");
    }
  }
}



module.exports = CrudRepository; 