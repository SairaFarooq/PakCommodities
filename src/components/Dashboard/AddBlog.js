import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {getAllCategories}from '../../services/category.service';


class AddBlog extends Component{ 

    
    state={

        formInUrdu : false,
        category : '',
        product:'',
        blogTitle :'',
        blogContent : '',
        blogContentUrdu : '',
        blogImage: '',
        date: '' ,
        productList : [],
        categories : []     

    }

    componentDidMount = () => {
        var today = new Date();
        var month;
        if((today.getMonth()+1) < 10) {
            month = "0"+(today.getMonth() + 1);
        } else {
            month = today.getMonth() + 1;
        }
        var dateString = today.getFullYear() + "-" + month + "-" + today.getDate()
        console.log("date string : ", dateString)
        this.setState({
            date: dateString
        });

        //initial subcategory is pulses
        this.setState({
            subCategoryList : ['Ali','Bilal', 'Call', 'Dad'] 
        })

        //fetch categories
        this.fetchAllCategories();
    }

    // English/Urdu Form
    onToggle =(e)=>{
        this.setState({
            formInUrdu : !this.state.formInUrdu
        })

    }
 
    handleChange =(e)=>{
        console.log(e.target.value);

        this.setState({
            [e.target.id] : e.target.value
        });

        if(e.target.value === 'pulses'){
            this.setState({
                productList : ['PulsesAli','pulsesBilal', 'pCall', 'pDad'] 
            })
        }else if(e.target.value === 'sugar'){
            this.setState({
                productList : ['sugarAli','sugarBilal', 'sCall', 'sDad'] 
            })
        }
    }

    // fetch All categories 
    fetchAllCategories  =async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllCategories(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
      
            var categories = [];
            for(let item of res){
                    categories.push(item)
                }

                this.setState({ 
                    categories: categories, 
                     
                 });
            
    }

    /* Add a Blog*/
    addBlog =()=>{
        
    }

    render(){
    
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   
                <div className="col l10">
                    {/* toggle button for english/urdu forms */}
                <div class="switch">
                    <label>
                         English
                        <input type="checkbox" checked={this.state.formInUrdu} onChange={this.onToggle}/>
                        <span class="lever"></span>
                         Urdu
                    </label>
                </div>

                 {/* <form action="add-post.php" method="post" enctype="multipart/form-data">*/}
                {/* form in English */} 
                {!this.state.formInUrdu ? 
                   
                    <form onSubmit={this.addBlog()} className="grey lighten-1 col l4 offset-l4 s12 addBlogForm">
                        <h5 className="grey-text text-darken-3 center"><b>POST A BLOG IN ENGLISH</b></h5>
                        {/* category */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" id="category" defaultValue={this.state.category} onChange={this.handleChange}>
                                <option value="" disabled selected>Category</option>
                                {
                                    this.state.categories.map((item)=>
                                   
                                        <option value={item.categoryNameEng}>{item.categoryNameEng}</option>
                                    )
                                }
                            </select>                           
                        </div>

                        {/* product */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" id="product" defaultValue={this.state.product} onChange={this.handleChange}>
                                <option value="" disabled selected>Product</option>
                                {this.state.productList.map((product,index) =>
                                     <option value={product}>{product}</option>
                                )}
                                
                               
                                {/* <option value="corriander">Corriander</option>
                                <option value="turmeric">Turmeric</option> */}
                            </select>                           
                        </div>

                        {/* Title */}
                        <div className="input-field">
                            <label htmlFor="blogTitle" className="black-text">Title : </label>
                            <input type="text" id ="blogTitle" onChange={this.handleChange}/>
                        </div>

                        {/* Blog Content in English */}
                        <label htmlFor="blogContent" className="black-text">Blog Content : </label>
                        <div className="input-field">
                            <textarea id ="blogContent" onChange={this.handleChange}/>
                        </div>

                        {/* Image upload*/}
                        <div className="input-field">
                            <span><label htmlFor="blogImage" className="black-text bold">IMAGE: </label></span>
                            <input type="file" accept="image/*" id ="blogImage" onChange={this.handleChange}/>
                        </div>

                        {/* date */}
                        <label htmlFor="date" className="black-text">Date : </label>
                        <div className="input-field">
                            <input type="date" id ="date" defaultValue={this.state.date} disabled/>
                        </div>

                        {/* post button */}
                        <div className="input-field">
                            <button className="btn teal accent-4 z-depth-0 center">POST</button>
                        </div>

                    </form> :

                    // form in urdu

                    <form onSubmit={this.addBlog()} className="grey lighten-1 col l4 offset-l4 s12 addBlogForm">
                    <h5 className="grey-text text-darken-3 center"><b>POST A BLOG IN URDU</b></h5>
                    {/* category */}
                    <div className="input-field">
                        {/* <label htmlFor="category" className="black-text"></label> */}
                        <select className="browser-default" id="category" defaultValue={this.state.category} onChange={this.handleChange}>
                            <option value="" disabled selected>قسم</option>
                                {
                                    this.state.categories.map((item)=>
                                   
                                        <option value={item.categoryNameUrdu}>{item.categoryNameUrdu}</option>
                                    )
                                }
                        </select>                           
                    </div>

                    {/* product */}
                    <div className="input-field">
                        {/* <label htmlFor="category" className="black-text"></label> */}
                        <select className="browser-default" id="product" defaultValue={this.state.product} onChange={this.handleChange}>
                            <option value="" disabled selected>پروڈکٹ</option>
                            {this.state.productList.map((product,index) =>
                                 <option value={product}>{product}</option>
                            )}
                            
                           
                            {/* <option value="corriander">Corriander</option>
                            <option value="turmeric">Turmeric</option> */}
                        </select>                           
                    </div>

                    {/* Title */}
                    <div className="input-field">
                        <label htmlFor="blogTitle" className="black-text">Title : </label>
                        <input type="text" id ="blogTitle" onChange={this.handleChange}/>
                    </div>

                    {/* Blog Content in Urdu */}
                    <label htmlFor="blogContentUrdu" className="black-text">Blog Content In Urdu: </label>
                    <div className="input-field">
                        <textarea id ="blogContentUrdu" onChange={this.handleChange}/>
                    </div>

                    {/* Image upload*/}
                    <div className="input-field">
                        <span><label htmlFor="blogImage" className="black-text bold">IMAGE: </label></span>
                        <input type="file" accept="image/*" id ="blogImage" onChange={this.handleChange}/>
                    </div>

                    {/* date */}
                    <label htmlFor="date" className="black-text">Date : </label>
                    <div className="input-field">
                        <input type="date" id ="date" defaultValue={this.state.date} disabled/>
                    </div>

                    {/* post button */}
                    <div className="input-field">
                        <button className="btn teal accent-4 z-depth-0 center">POST</button>
                    </div>

                </form>}

                </div>
            </div>
        )}
}

export default AddBlog