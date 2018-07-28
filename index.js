import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class History extends React.Component
{
 /*Function is any button on the history is clicked */
    render()
    {return(
     <div>
        <div>History</div>   
        {this.props.history.map(equation=>{
                return <li key={equation}><button value={equation} onClick={this.props.isClicked(this.value)}>{equation}={eval(equation)}</button></li>
            })}
    </div>
)}}

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
      isEnterClickedOrError:false,
      //history of your calculator 
      history:[]
    };}
 
/* clickhandler if button is a function button (CLR or = (enter)) */
  functionbutton(i)
  {
    if (i==="CLR"){
      this.setState({
        output:' ',
        isEnterClickedOrError:false,})
      }
    //if enter is clicked multiple times in a row it will not add to 
    if(i==="=" && !this.state.isEnterClickedOrError)
    {
      try{
        //changing state for history whenever = is pressed
        var answer=eval(this.state.output)
        this.setState({
          history:this.state.history.concat([this.state.output])
        })
        this.setState({
          output:answer,
          isEnterClickedOrError:true,
          })
      }
      //if equation is mathamatically incorrect
      catch(e)
      {
        this.setState({
          output:"Error",
          isEnterClickedOrError:true,
          })
      }
    }
  }
 
  /*rerendering outputview */
  outputview(valueClicked,buttontype)
  {
    /*If a value button is clicked after pressing enter everything will be cleared and only the value will be present */
    if(this.state.isEnterClickedOrError && buttontype==="value")
    {
        this.setState({
          output:valueClicked,
          isEnterClickedOrError:false,
        })
    }
    else
    {
      var newOutput = this.state.output + valueClicked
      this.setState(
          {
          output:newOutput,
          isEnterClickedOrError:false,
          })
    }
  }
  /*TODO  */
  histclicked(value)
  {
    console.log("hello");
    console.log(value);
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
      <ul>
      <History isClicked={()=>this.histclicked} history={this.state.history}/>
      </ul>
</div>
    );
  }
}

  // ========================================
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  