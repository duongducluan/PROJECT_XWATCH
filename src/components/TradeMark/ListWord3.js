import React, { Component } from 'react';
import {addImg} from "../../actions/index";
import {connect} from "react-redux";
class ListWord extends Component {
  chooseTradeMark=(value)=>{
    this.props.addImages(value);
  }
  render() {
    return (
      <div>
            <div className="trade">
              THƯƠNG HIỆU
            </div>
            <div className="wp-word">
              <div className="list-word">
                <ul>
                  <li title="A" onClick={()=>this.chooseTradeMark("A")}>A</li>
                  <li title="B" onClick={()=>this.chooseTradeMark("B")}>B</li>
                  <li title="C" onClick={()=>this.chooseTradeMark("C")}>C</li>
                  <li title="D" onClick={()=>this.chooseTradeMark("D")}>D</li>
                  <li title="E" onClick={()=>this.chooseTradeMark("E")}>E</li>
                  <li title="F" onClick={()=>this.chooseTradeMark("F")}>F</li>
                  <li title="G" onClick={()=>this.chooseTradeMark("G")}>G</li>
                  <li title="H" onClick={()=>this.chooseTradeMark("H")}>H</li>
                  <li title="I" onClick={()=>this.chooseTradeMark("I")}>I</li>
                  <li title="J" onClick={()=>this.chooseTradeMark("J")}>J</li>
                  <li title="K" onClick={()=>this.chooseTradeMark("K")}>K</li>
                  <li title="L" onClick={()=>this.chooseTradeMark("L")}>L</li>
                  <li title="M" onClick={()=>this.chooseTradeMark("M")}>M</li>
                  <li title="N" onClick={()=>this.chooseTradeMark("N")}>N</li>
                  <li title="O" onClick={()=>this.chooseTradeMark("O")}>O</li>
                  <li title="P" onClick={()=>this.chooseTradeMark("P")}>P</li>
                  <li title="Q" onClick={()=>this.chooseTradeMark("Q")}>Q</li>
                  <li title="R" onClick={()=>this.chooseTradeMark("R")}>R</li>
                  <li title="S" onClick={()=>this.chooseTradeMark("S")}>S</li>
                  <li title="T" onClick={()=>this.chooseTradeMark("T")}>T</li>
                  <li title="U" onClick={()=>this.chooseTradeMark("U")}>U</li>
                  <li title="V" onClick={()=>this.chooseTradeMark("V")}>V</li>
                  <li title="W" onClick={()=>this.chooseTradeMark("W")}>W</li>
                  <li title="X" onClick={()=>this.chooseTradeMark("X")}>X</li>
                  <li title="Y" onClick={()=>this.chooseTradeMark("Y")}>Y</li>
                  <li title="Z" onClick={()=>this.chooseTradeMark("Z")}>Z</li>
                </ul>
              </div>
            </div>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
   return{
    addImages:(value)=>{
      dispatch(addImg(value))
    }
   }
}
export default connect(null,mapDispatchToProps)(ListWord);
