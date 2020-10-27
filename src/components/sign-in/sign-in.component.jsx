import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
        email:'',
        password:''
        }     
    }
    
    
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                     handleChange={this.handleChange}
                     label="email" 
                     type="email" 
                     value={this.state.email}
                     name="email" 
                     required
                    />
                    
                    <FormInput 
                    handleChange={this.handleChange}
                     label="password"
                     type="password"
                     value={this.state.password} 
                     name="password" 
                     required 
                    />  
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        
                    </div>
                    
                </form> 
            </div>
        )
    }

}
export default SignIn;