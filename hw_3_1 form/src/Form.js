import React, { Component } from 'react';
import './Form.css';
import Input from './Input'
import { Toggler, TogglerItem } from './Toggler'
import InputFile from './InputFile';

class Form extends Component {

  state = {
      data: {
        user: '',
        password: '',
        age: '',
        language: '',
        layout: ''
      },
      activeLayout: "left",
      activeGender: "male",
      file: "",
      imagePreview: ""
    
		};
	
	
	handleChange = e => {
    let value = e.target.value
    let name = e.target.name

    this.setState({
      data:{
        ...this.state.data,
       [name]: value
      }});
  }
  
  changeStatus = (activeTogglerName) => (event) => {
    let TogglerValue = event.target.dataset.value;
    this.setState({
         ...this.state,
        [activeTogglerName]: TogglerValue
      });
  }
	
	handleFormSubmit = (e) => {
    console.log('DATA:', this.state)
		e.preventDefault();
  }

  handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreview: reader.result
      });
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.state.imagePreview = "";
    }

    console.log("image", this.state.file)
  }
  
  
	render() {
    let { activeLayout, activeGender, imagePreview  } = this.state;
    let { user, password, age, language} = this.state.data;
    
    let Preview = null;
    if (imagePreview) {
      Preview = (<img src={imagePreview} />);
    }
    
		return (
      <div className="container">
        <h3>Form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            label='Your name'
            name="user"
            type='text'	
            placeholder={'Type your name'} 
            value={user}
            handler={this.handleChange}
          />
          <Input
            label='Your password'
            name="password"
            type='password'	
            placeholder={'Create password'} 	
            value={password}
            handler={this.handleChange}
          />
          <Input
            label='Your age'
            name="age"
            type='number'	
            placeholder={'Type your age'} 	
            value={age}
            handler={this.handleChange}
          />
          <Input
            label='Your favourite language'
            name="language"
            type='text'	
            placeholder={'Language'} 	
            value={language}
            handler={this.handleChange}
          />
          <Toggler
              name='layout'
              label="Choose layout"
              activeTogglerName={activeLayout}
              changeStatus={this.changeStatus("activeLayout")}>
              <TogglerItem value="left"/>
              <TogglerItem value="center"/>
              <TogglerItem value="right"/>
              <TogglerItem value="baseline"/>
          </Toggler>

          <Toggler
              name='gender'
              label="Gender"
              activeTogglerName={activeGender}
              changeStatus={this.changeStatus("activeGender")}>
              <TogglerItem value="male"/>
              <TogglerItem value="female"/>
          </Toggler>

          <InputFile 
            label="Choose photo" 
            handler={this.handleImageChange}>
            {Preview}
          </InputFile>

            <Input type="submit" value="Submit"
                handler={this.handleImageChange}/>
        </form>
      </div>
		);
	}
}


export default Form;
