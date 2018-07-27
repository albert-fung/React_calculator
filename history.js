import React from 'react';


export default class History extends React.Component
{
//<div><button value onClick={()=>histclicked()}>{equation}={eval(equation)}</button></div>

    render()
    {return(
     <div>
        <div>History</div>
        <ol>
        {this.props.history.map(equation=>{
                return createHistory(equation);


            })}
        </ol>
    </div>
)}}