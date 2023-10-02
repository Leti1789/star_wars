const { Schema } = require("mongoose");

const characterSchema = new Schema({
  "_id": String,
  "name": String,
  "height": String,
  "mass": String,
  "hair_color": String,
  "skin_color": String,
  "eye_color": String,
  "birth_year": String,
  "gender": String,
  "homeworld": { type: String, ref: "Planet" }, // REFERENCIA AL ID DE PLANETAS
  "films": [{ type: String, ref: "Film" }] // ARRAY DE REFERENCIAS A PELICULAS
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
}

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
}

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
}


// UPDATE (PUT - Actualizar un planeta completo)
characterSchema.statics.update = async function (id, updatedCharacterData) {
  return await this.findByIdAndUpdate(id, updatedCharacterData, { new: true })
      .populate("homeworld", ["_id", "name"])
      .populate("films", ["_id", "title"]);
}

// PATCH (Actualizar parcialmente el planeta)
characterSchema.statics.patch = async function (id, updatedData) {
  return await this.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
      .populate("homeworld", ["_id", "name"])
      .populate("films", ["_id", "title"]);
}

// DELETE (Eliminar un planeta)
characterSchema.statics.delete = async function (id) {
  return await this.findByIdAndDelete(id);
}

module.exports = characterSchema;

