import React from 'react';

const START_TIME = 9.5;
const END_TIME = 18;

var TaskCreator = React.createClass({
  
  getInitialState() {
    return {
      startTime: START_TIME,
      taskName: "",
      taskDuration: 0.5,
    }
  },


  handleTaskCreation(startSlotID, duration, name) {
    this.props.createTask(this.state.taskName, this.state.taskDuration, this.state.startTime);
  },

  handleTaskNameChange(event) {
    this.setState({
      taskName: event.target.value
    })
  },

  handleTaskDurationChange(event) {
    this.setState({
      taskDuration: event.target.value
    })
  },

  handleStartTimeChange(event) {
    this.setState({
      startTime: event.target.value
    })
  },

  formatTime(time) {
    if (Number.isInteger(time))
      return time + ":00";
    else
      return ((time - 0.5) + ":30");
  },

  render() {
    const startTimes = [];

    for (let i = START_TIME; i < END_TIME; i += 0.5) {
      startTimes.push(<option value={i} key={i}> { this.formatTime(i) } </option>);
    }
    
    return (
      <form className='task-creator'>
        <div className='task-creator__task-name'>
          <input 
            type='text'
            placeholder='task...'
            value={this.state.taskName}
            onChange={this.handleTaskNameChange}
          />
        </div>
        <div className='task-creator__duration'>
          <select value={this.state.taskDuration} onChange={this.handleTaskDurationChange}>
            <option value="0.5"> 30 minutes </option>
            <option value="1"> 1 hour </option>
            <option value="1.5"> 1 hour, 30 minutes </option>
            <option value="2"> 2 hours </option>
            <option value="2.5"> 2 hours, 30 minutes </option>
            <option value="3"> 3 hours </option>
          </select>
        </div>
        <div className='task-creator__start-time'>
          <select value={this.state.startTime} onChange={this.handleStartTimeChange}>
            { startTimes }
          </select>
        </div>
        <div className='task-creator__add-btn'>
          <button type='button' onClick={this.handleTaskCreation}> Add </button>
        </div>
      </form>
    )
  }
})

export default TaskCreator;
