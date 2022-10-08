// Create progress bar with dummy data to start

// --------------------------------------------------------------------------------------------------
// Stylesheets
import './ProgressBar.scss';
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

const ProgressBar = ({ backgroundcolor, progress, height }) => {

  const fullTaskLength = { // parent div
      height: height,
      width: '100%',
      backgroundColor: 'white',
      marginTop: 50,
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

    const taskPercentageLeft = {
      color: 'grey'
    }

  return (
  <div style={fullTaskLength}>
    <div style={taskProgressLength}></div>
    <span style={taskPercentageLeft}>{`${progress}%`}</span>
  </div>
  )
}

// --------------------------------------------------------------------------------------------------
export default ProgressBar;
