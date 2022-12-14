
// --------------------------------------------------------------------------------------------------
// PSEUDO CODE
// --- Shows the user a visual representation of their progress using a colored bar based on their task step completion status
// --- Also shows the user the % of completion
// --- Props that change the height/width/background color

// -- There is a:
// --- parent div to rep the whole progress bar
// --- child div to show the completed part
// --- span to show completed %

// --------------------------------------------------------------------------------------------------
// uses react inline styles, no associated scss file
const ProgressBar = ({ backgroundcolor, progress }) => {

  const fullTaskLength = { // parent div
      height: 20,
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 7,
      // border: '2px solid grey'
    }

    const taskProgressLength = { // child div
      height: '100%',
      width: `${progress}%`,
      backgroundColor: backgroundcolor,
      textAlign: 'center',
      borderRadius: 7,
      border: '2px solid #006450'
    }

    const taskPercentageLeft = { // child div % completed (progress)
      color: 'grey'
    }

  return (
  <div className="progress-bar" style={fullTaskLength}>
    <div style={taskProgressLength}></div>
    <span style={taskPercentageLeft}>{`${progress}%`}</span>
  </div>
  )
}

// --------------------------------------------------------------------------------------------------
export default ProgressBar;
