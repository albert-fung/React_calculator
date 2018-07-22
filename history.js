import React from 'react';

export default class History extends React.Component
{
    constructor(){
        super()
    }
    render()
    {return(
     <div>
        <div>History</div>
        <ol>
            {this.props.history}
        </ol>
    </div>
)}}