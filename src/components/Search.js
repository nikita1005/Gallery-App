import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "./imageResults";
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'20291868-eb97546514605d93328cafcf3', //17241914-90da7b93c0ccceb734849dcd1
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <section className="searchbox-wrap">
            <input type="text" 
        //     style=
        //     {{backgroundColor:'black',
        //     color:'white',
        //     marginLeft:570,
        //     marginTop:100,
        //     paddingTop:20,
        //     paddingLeft:70,
        //     fontSize:30,
        //     borderTopStyle:"hidden",
        //     borderRightStyle:"hidden",
        //     borderLeftStyle:"hidden",
        //     outline:"none",
        //     borderBottomStyle:"groove",

        
        // }}
        className="searchbox"
        placeholder="Search for images"
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
             />
<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
</section>

        )
    }
}



export default Search;



// import React from 'react'

// function Search (props) {
// 	const onChange = e => {
// 		props.onChange(e.target.value)
// 	  }
// 	return (
// 		<section className="searchbox-wrap">
// 			 <input
//    				 className="searchbox"
//    				 type="text"
//   			     placeholder="Search for a emoji..."
//  			    onChange={onChange}
//  			  />
// 		</section>
// 	)
// }

// export default Search