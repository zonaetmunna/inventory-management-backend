const Store = require("./store.model");

exports.getStoresService = async () => {
  const stores = await Store.find({});
  return stores;
};

exports.createStoreService = async (data) => {
  const store = await Store.create(data);
  return store;
};

exports.getStoreByIdService = async (storeId) => {
  const store = await Store.find({ _id: storeId });
  return store;
};


exports.updateStoreServiceById = async (storeId,updateData) => {
  const store = await Store.findByIdAndUpdate(storeId,updateData)
  return store;
};