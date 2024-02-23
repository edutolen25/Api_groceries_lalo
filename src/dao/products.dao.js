import Product from '../models/products.model.js';
const productDAO={};
productDAO.getAll=async ()=>{ 
    const products=await Product.find();//buscamos los productos 
    return products;//retornamos los productos a quien invoque esta funcion que esta en el controlad 
};
productDAO.getOne=async (barcode)=>{
    const product=await Product.findOne({barcode:barcode});//un barcode es el parametro, y el otro es el atributo de la peticion
    return product;
};

productDAO.insertOne=async (product)=>{
    return await Product.create(product);
};

productDAO.updateOne=async (barcode, product)=>{
    return await Product.findOneAndUpdate({barcode:barcode}, product);
  
};
productDAO.deleteOne=async (barcode)=>{
    return await Product.findOneAndDelete({barcode:barcode});
};
export default productDAO;
