import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';

var date = new Date();

class AddBlog extends Component{ 

    
    state={

        category : '',
        subCategory:'',
        blogTitle :'',
        blogContent : '',
        blogContentUrdu : '',
        blogImage: '',
        date: ''      

    }

 
    handleChange =(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    /* Add Blog to API */
    addBlog =()=>{
        
    }

    render(){
    
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   
                <div className="col l10">
                    {/* <form action="add-post.php" method="post" enctype="multipart/form-data">*/}
                    <form onSubmit={this.addBlog()} className="grey lighten-1 col l4 offset-l4 s12 addBlogForm">
                        <h5 className="grey-text text-darken-3 center"><b>POST A BLOG</b></h5>
                        {/* category */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" value="" onChange={this.handleChange}>
                                <option value="" disabled selected>Category</option>
                                <option value="pulses">Pulses</option>
                                <option value="sugar">Sugar</option>
                                <option value="grains">Grains</option>
                                <option value="fodderSeeds">Fodder Seeds</option>
                                <option value="oilSeeds">Oil Seeds</option>
                                <option value="guar">Guar</option>
                                <option value="spices">Spices</option>
                            </select>                           
                        </div>

                        {/* subcategory */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" value="" onChange={this.handleChange}>
                                <option value="" disabled selected>Sub Category</option>
                                <option value="redChilli">Red Chilli</option>
                                <option value="corriander">Corriander</option>
                                <option value="turmeric">Turmeric</option>
                            </select>                           
                        </div>

                        {/* Title */}
                        <div className="input-field">
                            <label htmlFor="blogTitle" className="black-text">Title : </label>
                            <input type="text" id ="blogTitle" onChange={this.handleChange}/>
                        </div>

                        {/* Blog Content in English */}
                        <div className="input-field">
                            <label htmlFor="blogContent" className="black-text">Blog Content : </label>
                            <input type="text" id ="blogContent" onChange={this.handleChange}/>
                        </div>

                        {/* Blog Content in Urdu */}
                        <div className="input-field">
                            <label htmlFor="blogContentUrdu" className="black-text">Blog Content In Urdu: </label>
                            <input type="text" id ="blogContentUrdu" onChange={this.handleChange}/>
                        </div>

                        {/* Image upload*/}
                        <div className="input-field">
                            <span><label htmlFor="blogImage" className="black-text bold">IMAGE: </label></span>
                            <input type="file" id ="blogImage" onChange={this.handleChange}/>
                        </div>

                        {/* date */}
                        <label htmlFor="date" className="black-text">Date : </label>
                        <div className="input-field">
                            <input type="date" id ="date" defaultValue={this.state.date} onChange={this.handleChange}/>
                        </div>

                        {/* post button */}
                        <div className="input-field">
                            <button className="btn teal accent-4 z-depth-0 center">POST</button>
                        </div>

                    </form>
                </div>
            </div>
        )}
}

export default AddBlog