const dotenv = require("dotenv");
dotenv.config();

require("./db/mongoose");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/orderModel");

const Users = require("./data/Users");
const Products = require("./data/products");

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createUser = await User.insertMany(Users);
    const productOwner = createUser[0]._id;

    // const createProduct = new Product({
    //   ...Products,
    //   User: productOwner,
    // });
    // await createProduct.save();
    const sampleData = Products.map((product) => {
      return {
        ...product,
        User: productOwner,
      };
    });
    await Product.insertMany(sampleData);
    console.log("Data Imported...");
    process.exit();
  } catch (e) {
    console.log(`Error : ${e}`);
    process.exit(1);
  }
};

const destoryData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data destoryed...");
    process.exit();
  } catch (e) {
    console.log(`Error : ${e}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destoryData();
} else {
  importData();
}
