import React, { Component } from "react";





class Calculater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0'
        }
    }

    num = {
        background: "#f1f3f4",
        color: "#202124",
        border: "1px solid #f1f3f4",
        "border-radius": "4px"
    }

    resutBox = () => {
        return (
            <div>
                {this.state.result}
            </div>
        )
    }

    handleClick =(value)=>{
        try{
        var {result} =this.state;
        if(result[0] === "0"){
            result=result.substring(1,result.length)
            this.setState({result})
            
        }
        else{
        if (value ==="="){
            console.log(eval(result))
            result=eval(result)
            this.setState({result})
        }
        if (value ==="CE"){
            this.setState({result:result.substring(0,result.length-1)})
        }
        else{
            if (isNaN(value) && isNaN(result[result.length-1] && value !=="." && value !=="=")){
                result=result.substring(0,result.length-1)
            }
            result=result+value
            this.setState({result})
        }
    }
}
catch{
    console.log("err")
}

    }

    keypad = () => {
        return (
            <div className="keypad">
                <table>
                <tr>
                        <td>
                            <button name="7" style={this.num} onClick={(e)=>this.handleClick(e.target.name)}>7</button>
                        </td>
                        <td>
                            <button name="8" onClick={(e)=>this.handleClick(e.target.name)}>8</button>
                        </td>
                        <td>
                            <button name="9" onClick={(e)=>this.handleClick(e.target.name)}>9</button>
                        </td>
                        <td>
                            <button name="/" onClick={(e)=>this.handleClick(e.target.name)}>÷</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button name="4" onClick={(e)=>this.handleClick(e.target.name)}>4</button>
                        </td>
                        <td>
                            <button name="5" onClick={(e)=>this.handleClick(e.target.name)}>5</button>
                        </td>
                        <td>
                            <button name="6" onClick={(e)=>this.handleClick(e.target.name)}>6</button>
                        </td>
                        <td>
                            <button name="*" onClick={(e)=>this.handleClick(e.target.name)}>×</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button name="3" onClick={(e)=>this.handleClick(e.target.name)}>3</button>
                        </td>
                        <td>
                            <button name="2" onClick={(e)=>this.handleClick(e.target.name)}>2</button>
                        </td>
                        <td>
                            <button name="1" onClick={(e)=>this.handleClick(e.target.name)}>1</button>
                        </td>
                        <td>
                            <button name="-" onClick={(e)=>this.handleClick(e.target.name)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button name="0" onClick={(e)=>this.handleClick(e.target.name)}>0</button>
                        </td>
                        <td>
                            <button name="." onClick={(e)=>this.handleClick(e.target.name)}>.</button>
                        </td>
                        <td>
                            <button name="=" onClick={(e)=>this.handleClick(e.target.name)}>=</button>
                        </td>
                        <td>
                            <button name="+" onClick={(e)=>this.handleClick(e.target.name)}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button name="CE" onClick={(e)=>this.handleClick(e.target.name)}>CE</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }


    render() {
        return (
            <div>
                {this.resutBox()}
                {this.keypad()}
            </div>

        )
    }

};

export default Calculater;