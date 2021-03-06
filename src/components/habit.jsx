import React,{Component, useState} from 'react';

const Habit = (props)=>{

    handleIncrement = ()=>{
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = ()=>{
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = ()=>{
        this.props.onDelete(this.props.habit);
    };

    return(
        <li>
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button 
            className='habit-button habit-increase' 
            onClick={.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button 
            className='habit-button habit-decrease' 
            onClick={.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button 
            className='habit-button habit-delete'
            onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
}


// class Habit extends Component {

//     // component가 ui 상에 등록이 되었을 때
//     componentDidMount(){
//         console.log(`habit: ${this.props.habit.name} mounted`);
//     }

//     componentWillUnmount(){
//         console.log(`habit: ${this.props.habit.name} will unmount`);
//     }

//     handleIncrement = ()=>{
//         this.props.onIncrement(this.props.habit);
//     }

//     handleDecrement = ()=>{
//         this.props.onDecrement(this.props.habit);
//     }

//     handleDelete = ()=>{
//         this.props.onDelete(this.props.habit);
//     };
//     render(){
//         const {name, count} = this.props.habit;
//         return (
//         <li>
//             <span className="habit-name">{name}</span>
//             <span className="habit-count">{count}</span>
//             <button 
//             className='habit-button habit-increase' 
//             onClick={this.handleIncrement}>
//                 <i className="fas fa-plus-square"></i>
//             </button>
//             <button 
//             className='habit-button habit-decrease' 
//             onClick={this.handleDecrement}>
//                 <i className="fas fa-minus-square"></i>
//             </button>
//             <button 
//             className='habit-button habit-delete'
//             onClick={this.handleDelete}>
//                 <i className="fas fa-trash"></i>
//             </button>
//         </li>
//         );
//     }
// }

export default Habit;