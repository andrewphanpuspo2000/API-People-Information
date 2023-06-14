import taskschema from "./model/task-schema.js";

export const inputdata = (data) => {
  return taskschema(data).save();
};

export const updateName = (id, name) => {
  return taskschema.findByIdAndUpdate(id, name);
};
