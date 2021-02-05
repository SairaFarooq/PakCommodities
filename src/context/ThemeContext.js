import {createContext,Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state={

        isLightTheme : false,
        light : {body:"white", color:'black'},
        dark  : {body:"black", color:'white'}
    }
    render(){
        return(
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>

        )
    }
}


export default ThemeContextProvider;