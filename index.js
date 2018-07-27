import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import History from './history.js';

/*Creating all buttons on calculator */
class Calcbutton extends React.Component
{render(){return(<button className={this.props.className} onClick={this.props.onClick} >{this.props.value}</button>);}}
/*Creating calculator output view */
class Inputview extends React.Component
{render(){return(<pre id="CalcOutput">{this.props.Outputview}</pre>);}}

class Calculator extends React.Component{
  constructor(){
    super()
    this.state={
      //what gets outputted onto the screen
      output: ' ',
      //is entered the last thing clicked? 
      isEnterClicked:false,
      //history of your calculator 
      history:[]
    };}
 
/* clickhandler if button is a function button (CLR or = (enter)) */
  functionbutton(i)
  {
    if (i==="CLR"){
      this.setState({
        output:' ',
        isEnterClicked:false,})
      }
    if(i==="=")
    {
      try{
        //changing state for history whenever = is pressed
        var answer=eval(this.state.output)
        this.setState({
          history:this.state.history.concat([this.state.output])
        })
        this.setState({
          output:answer,
          isEnterClicked:true,
          })
      }
      catch(e)
      {
        this.setState({
          output:"Error",
          isEnterClicked:false,
          })
      }
    }
  }
  /*rerendering outputview */
  outputview(valueClicked,buttontype)
  {
    /*If a value button is clicked after pressing enter everything will be cleared and only the value will be present */
    if(this.state.isEnterClicked && buttontype==="value")
    {
        this.setState({
          output:valueClicked,
          isEnterClicked:false,
        })
    }
    else
    {
      var newOutput = this.state.output + valueClicked
      this.setState(
          {
          output:newOutput,
          isEnterClicked:false,
          })
    }

  }
   /*Rendering number and function buttons */
  rendernumButton(i,className,buttontype)
  {
    return <Calcbutton onClick={()=>this.outputview(i,buttontype)} value={i} className={className}/>;
  }
  renderfunctionButton(i,className)
  {
    return <Calcbutton onClick={()=>this.functionbutton(i)} value={i} className={className}/>;
  }

  render()
  {
    return (
      <div>
      <div id="CalcBody">
        <Inputview Outputview={this.state.output}/>
        <div className="CalRow">
        {this.rendernumButton("1","SquareButton","value")}
        {this.rendernumButton("2","SquareButton","value")}
        {this.rendernumButton("3","SquareButton","value")}
        {this.renderfunctionButton("CLR","LongButton","function")}
        </div>
        <div className="CalRow">
        {this.rendernumButton("4","SquareButton","value")}
        {this.rendernumButton("5","SquareButton","value")}
        {this.rendernumButton("6","SquareButton","value")}
        {this.rendernumButton("+","SquareButton","operation")}
        {this.rendernumButton("-","SquareButton","operation")}
        </div>
        <div className="CalRow">
        {this.rendernumButton("7","SquareButton","value")}
        {this.rendernumButton("8","SquareButton","value")}
        {this.rendernumButton("9","SquareButton","value")}
        {this.rendernumButton("*","SquareButton","operation")}
        {this.rendernumButton("/","SquareButton","operation")}
        </div>
        <div>
          {this.renderfunctionButton("=","ExtraLongButton","function")}
          {this.rendernumButton(".","SquareButton","value")}
        </div>
        
      </div>
      <History history={this.state.history}/>
</div>
    );
  }
}

  // ========================================
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  