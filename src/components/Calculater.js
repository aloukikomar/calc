import React, { Component } from "react";

import "./cal.css"



class Calculater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0',
            eq: '0'
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
            <div className="resultBox">
                <div className="result">ANS = {this.state.result}</div>
                <div className="equation">{this.state.eq} </div>

            </div>
        )
    }

    handleClick = (value) => {
        try {
            var { eq,result } = this.state;
            if (eq[0] === "0") {
                eq = eq.substring(1, eq.length)
                this.setState({ eq })
            }

            if (value === "=") {
                result = eval(eq)
                var eq =result
                this.setState({ result,eq })
            }
            if (value === "CE") {
                this.setState({ eq: eq.substring(0, eq.length - 1) })
            }
            else {
                if (isNaN(value) && isNaN(eq[eq.length - 1] && value !== "." && value !== "=")) {
                    result = result.substring(0, eq.length - 1)
                }
                eq = eq + value
                this.setState({ eq })
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
                            <button name="7" className="Numeric calbutton " onClick={(e) => this.handleClick(e.target.name)}>7</button>
                        </td>
                        <td>
                            <button name="8" className="Numeric calbutton " onClick={(e) => this.handleClick(e.target.name)}>8</button>
                        </td>
                        <td>
                            <button name="9" className="Numeric calbutton " onClick={(e) => this.handleClick(e.target.name)}>9</button>
                        </td>
                        <td>
                            <button name="/" className="action calbutton" onClick={(e) => this.handleClick(e.target.name)}>÷</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="Numeric calbutton" name="4" onClick={(e) => this.handleClick(e.target.name)}>4</button>
                        </td>
                        <td>
                            <button className="Numeric calbutton" name="5" onClick={(e) => this.handleClick(e.target.name)}>5</button>
                        </td>
                        <td>
                            <button className="Numeric calbutton" name="6" onClick={(e) => this.handleClick(e.target.name)}>6</button>
                        </td>
                        <td>
                            <button className="action calbutton" name="*" onClick={(e) => this.handleClick(e.target.name)}>×</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="Numeric calbutton" name="3" onClick={(e) => this.handleClick(e.target.name)}>3</button>
                        </td>
                        <td>
                            <button className="Numeric calbutton" name="2" onClick={(e) => this.handleClick(e.target.name)}>2</button>
                        </td>
                        <td>
                            <button className="Numeric calbutton" name="1" onClick={(e) => this.handleClick(e.target.name)}>1</button>
                        </td>
                        <td>
                            <button name="-" className="action calbutton" onClick={(e) => this.handleClick(e.target.name)}>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="Numeric calbutton" name="0" onClick={(e) => this.handleClick(e.target.name)}>0</button>
                        </td>
                        <td>
                            <button className="Numeric calbutton" name="." onClick={(e) => this.handleClick(e.target.name)}>.</button>
                        </td>
                        <td>
                            <button className="equal_btn calbutton" name="=" onClick={(e) => this.handleClick(e.target.name)}>=</button>
                        </td>
                        <td>
                            <button name="+" className="action calbutton" onClick={(e) => this.handleClick(e.target.name)}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button name="CE" className="action calbutton" onClick={(e) => this.handleClick(e.target.name)}>CE</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }


    render() {
        return (
            <div id="calcbody">
                {this.resutBox()}
                {this.keypad()}
            </div>

        )
    }

};

export default Calculater;