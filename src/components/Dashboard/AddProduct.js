import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {getAllCategories}from '../../services/category.service';
import {getAllProducts, addProduct,deleteProduct}from '../../services/product.service';

class AddProduct extends Component{ 
    state={

        productCategory :'',
        productName :'',
        productNameUrdu : '' ,
        allProducts :[] ,
        categories : []    

    }


    componentDidMount =()=>{
        this.getAllCategories();
        this.getAllProducts();

    }

    /* Fetch All categories from dB */
    getAllCategories = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllCategories(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
       // if(res.status === 'success') {
            var categories = [];
            for(let item of res){
                    categories.push(item)
                }

                this.setState({ 
                    categories: categories, 
                     
                 });
           // }
    
            
    }

    /* Fetch All Products from dB */
    getAllProducts = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllProducts(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
       // if(res.status === 'success') {
            var Products = [];
            for(let item of res){
                    Products.push(item)
                }

                this.setState({ 
                    allProducts: Products, 
                     
                 });
           // }
    
            
    }


    handleChange =(e)=>{
      //  console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    /* Add Product to dB */
    addProduct =async(e)=>{

        e.preventDefault();
        console.log('Product cat : ', this.state.productCategory);

        var saveProductCategory = {};
        for(let i = 0; i < this.state.categories.length; i++){ 
            // console.log(this.state.categories[i]);
            if(this.state.categories[i].categoryNameEng === this.state.productCategory){
                saveProductCategory = this.state.categories[i];
                // console.log("save Product catgeory", saveProductCategory)
            }
        }


        var addThisProduct = {
           productNameEng : this.state.productName,
           productNameUrdu : this.state.productNameUrdu,
           productCategory : saveProductCategory
        }
    
        //saving data in mongo
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(addThisProduct)
        };
        const response = await addProduct(requestOptions);
        // const res = await response.json();
        // console.log("response after addProduct", res)

        
    }

    /* Delete product from dB */
    deleteProduct = async(id)=>{
        
        const requestOptions = {
           method: 'DELETE'       
       };
       const response = await deleteProduct(requestOptions,id);
       const data = await response.json();
   }


    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
                {/* List of all Products */}
                <div className="col l4">
                <table>
                                <thead>
                                <tr>
                                    <th>CATEGORY</th>
                                    <th>PRODUCT</th>
                                    <th>URDU</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                    { this.state.allProducts.map((item) =>
                                        <tr key={item._id}>
                                            <td>CATEGORY</td>
                                            <td>{item.productNameEng}</td>
                                            <td>{item.productNameUrdu}</td>
                                            <td><i class="material-icons"><a className="edit" href="#" onClick = {() => this.openDialog('edit', item._id)}>create</a></i>
                                                <i class="material-icons"><a className="delete" href="#" onClick = {() => this.deleteProduct(item._id)}>delete</a></i>
                                            </td>
                                        </tr>                                
                                    )}                                
                                </tbody>
                            </table>
                </div>
   
                {/* Add a product form */}
                <div className="col l6">
                    <form onSubmit={this.addProduct} className="grey lighten-1 col l8 offset-l1 s12 addItemForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD A PRODUCT</b></h5>

                        {/* Select a catgeory */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" defaultValue={this.state.productCategory} id ="productCategory" onChange={this.handleChange}>
                                <option value="" disabled selected>Category</option>
                                {
                                    this.state.categories.map((item)=>
                                   
                                        <option value={item.categoryNameEng}>{item.categoryNameEng}  ||  {item.categoryNameUrdu}</option>
                                    )
                                }


                                {/* <option value="pulses">Pulses</option>
                                <option value="sugar">Sugar</option>
                                <option value="grains">Grains</option>
                                <option value="fodderSeeds">Fodder Seeds</option>
                                <option value="oilSeeds">Oil Seeds</option>
                                <option value="guar">Guar</option>
                                <option value="spices">Spices</option> */}
                            </select>                           
                        </div>

                         {/* Item name in english*/}
                        <div className="input-field">
                            <label htmlFor="productName" className="black-text">Product Name : </label>
                            <input type="text" id ="productName" onChange={this.handleChange}/>
                        </div>

                         {/* product name in urdu */}
                        <div className="input-field">
                            <label htmlFor="productNameUrdu" className="black-text">Product Name In Urdu: </label>
                            <input type="text" id ="productNameUrdu" onChange={this.handleChange}/>
                        </div>
                        
                         {/* Add button */}
                        <div className="input-field">
                            <button className="btn teal accent-4 z-depth-0 center">ADD</button>
                        </div>

                    </form>
                </div>
            </div>
        )}
}

export default AddProduct