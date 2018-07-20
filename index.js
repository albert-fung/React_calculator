import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
  
class Calcbutton extends React.Component
{
    render()
    {
    return(
     <button className={this.props.className} onClick={this.props.onClick} >{this.props.value}</button>
    );
  }
}

class Inputview extends React.Component
{
  render()
  {
    return(
      <pre id="CalcOutput">{this.props.Outputview}</pre>
    );
  }
}

class Calculator extends React.Component{
  constructor()
  {
    super()
    this.state=
    {
      output: ' ',
    };
  }
  /*Rendering number buttons */
  rendernumButton(i,className)
  {
    return <Calcbutton onClick={()=>this.outputview(i)} value={i} className={className}/>;
  }
  renderfunctionButton(i,className)
  {
    return <Calcbutton onClick={()=>this.functionbutton(i)} value={i} className={className}/>;
  }
  functionbutton(i)
  {
    if (i==="CLR")
    {
      this.setState({output:" "})
    }
    if(i==="=")
    {
      this.setState({output:eval(this.state.output)})
    }
  }
  outputview(i)
  {
    var newOutput = this.state.output + i
    this.setState({output:newOutput})
  }

  render()
  {
    return (
      <div id="CalcBody">
        <Inputview Outputview={this.state.output}/>
        <div className="CalRow">
        {this.rendernumButton(1,"SquareButton")}
        {this.rendernumButton(2,"SquareButton")}
        {this.rendernumButton(3,"SquareButton")}
        {this.renderfunctionButton("CLR","LongButton")}
        </div>
        <div className="CalRow">
        {this.rendernumButton(4,"SquareButton")}
        {this.rendernumButton(5,"SquareButton")}
        {this.rendernumButton(6,"SquareButton")}
        {this.rendernumButton("+","SquareButton")}
        {this.rendernumButton("-","SquareButton")}
        </div>
        <div className="CalRow">
        {this.rendernumButton(7,"SquareButton")}
        {this.rendernumButton(8,"SquareButton")}
        {this.rendernumButton(9,"SquareButton")}
        {this.renderfunctionButton("=","LongButton")}
        </div>
      </div>
    );
  }
}

  // ========================================
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  