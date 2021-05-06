import React from 'react';

class BadgeForm extends React.Component{

   

    // state = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     jobTitle: "",
    //     twitter: ""
    // }
    

    // handleChange = (e) =>{
    //     // console.log ({ 
    //     //     name: e.target.name,
    //     //     value: e.target.value });

    //     this.setState({ 
    //         [e.target.name]: e.target.value,
    //     });
    // }

    handleClick = (e) =>{
        console.log("Button wan clicked")
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form was submitted");
        console.log(this.state);
    }
    render(){
        return(
            <>
                 <h1>New Attendant </h1>

                 <form onSubmit={this.handleSubmit}>
                     <div className="form-group">
                         <label>First Name </label>
                         <input className="form-control" onChange={this.props.onChange} type="text" name="firstName" value={ this.props.formValues.firstName } />
                     </div>
                     
                     <div className="form-group">
                         <label>Last Name </label>
                         <input className="form-control" onChange={this.props.onChange} type="text" name="lastName" value={ this.props.formValues.lastName }/>
                     </div>
                     <div className="form-group">
                         <label>email </label>
                         <input className="form-control" onChange={this.props.onChange} type="email" name="email" value={ this.props.formValues.email }/>
                     </div>
                     <div className="form-group">
                         <label>Job Title </label>
                         <input className="form-control" onChange={this.props.onChange} type="text" name="jobTitle" value={ this.props.formValues.jobTitle } />
                     </div>
                     <div className="form-group">
                         <label>Twitter </label>
                         <input className="form-control" onChange={this.props.onChange} type="text" name="twitter" value={ this.props.formValues.twitter } />
                     </div>
                     <button onClick={this.handleClick} className="btn btn-primary">Save</button> 
                 </form>
           
            </>
        )
    }
}

export default BadgeForm;