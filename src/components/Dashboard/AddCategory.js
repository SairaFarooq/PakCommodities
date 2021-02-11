import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {addCategory, getAllCategories, deleteCategory}from '../../services/category.service';

class AddCategory extends Component{ 
    state={

        categoryName :'',
        categoryNameUrdu : '' ,
        allCategories : []      

    }

    componentDidMount=()=>{
        this.getAllCategories();
    }

    handleChange =(e)=>{
        //console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    /* Fetch All categories */
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
                    allCategories: categories, 
                     
                 });
           // }
    
            
    }

    /* Add category */
    addCategoryItem = async(e)=>{
        e.preventDefault();

        var addThisCategory = {
            categoryNameEng : this.state.categoryName,
            categoryNameUrdu : this.state.categoryNameUrdu,
        }
    
        //saving data in mongo
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(addThisCategory)
        };
        const response = await addCategory(requestOptions);
        const res = await response.json();
        console.log("response after addCategory", res)

        // after success set the values to null of the form

        
    }

    /* Delete category */
    deleteCategory = async(id)=>{
        console.log("catgeiory items id :: ",id)
         
         const requestOptions = {
            method: 'DELETE'
            // headers: { 'Content-Type': 'application/json' } 
        };
        const response = await deleteCategory(requestOptions,id);
        const data = await response.json();
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>

                {/* list of all catgeories */}
                <div className="col l4">
                <table>
                                <thead>
                                <tr>
                                    <th>CATEGORY</th>
                                    <th>URDU</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                    { this.state.allCategories.map((item,index) =>
                                        <tr key={item._id}>
                                            <td>{item.categoryNameEng}</td>
                                            <td>{item.categoryNameUrdu}</td>
                                            <td><i class="material-icons"><a className="edit" href="#" onClick = {() => this.openDialog('edit', item._id)}>create</a></i>
                                                <i class="material-icons"><a className="delete" href="#" onClick = {() => this.deleteCategory(item._id)}>delete</a></i>
                                            </td>
                                        </tr>                                
                                    )}                                
                                </tbody>
                            </table>
                </div>
   
                 {/* form to add new category */}
                <div className="col l6 addCategory">
                    <form onSubmit={this.addCategoryItem} className="grey lighten-1 col l8 offset-l1 s12 addCategoryForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD A CATEGORY</b></h5>


                         {/* Category name in english*/}
                        <div className="input-field">
                            <label htmlFor="categoryName" className="black-text">Category Name : </label>
                            <input type="text" id ="categoryName" onChange={this.handleChange}/>
                        </div>

                         {/* category name in urdu */}
                        <div className="input-field">
                            <label htmlFor="categoryNameUrdu" className="black-text">Category Name In Urdu: </label>
                            <input type="text" id ="categoryNameUrdu" onChange={this.handleChange}/>
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

export default AddCategory