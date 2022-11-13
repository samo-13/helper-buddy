import "./Stepbox.scss";

import { useState } from "react";

const StepItem = ({ name, description }) => {
  const [open, setOpen] = useState(false);

  const closedStep = (
    <div className="stepbox" onClick={() => setOpen(true)}>
      <h3>{name}</h3>
    </div>
  );

  const openStep = (
    <div className="stepbox" onClick={() => setOpen(false)}>
      <h3>{name}</h3>
      <h4 className="expanded_step">{description}</h4>
      <button className='button' onClick={() => console.log("done")}>Done!</button>
    </div>
  );

  if (!open) {
    return closedStep;
  } else {
    return openStep;
  }
};

// return (
//     <Card style={{ width: '18rem' }}>
//       {open ?

//       <Card.Body
//       onClick={()=>setOpen(true)}
//       className="normal-card"
//       layoutId="expandable-card"
//       >
//     <h1 layoutId="expandable-card-h">{name}</h1>
//     </Card.Body>
//       :
//       <Card.Body
//        onClick={()=>setOpen(false)}
//       className='expanded-card'
//       layoutId="expandable-card">
//         <Card.Text
//         className='expanded-card-h'
//         layoutId="expandable-card-h">
//           {description}
//         </Card.Text>
//         {/* <p>{description}</p> */}
//       </Card.Body>
// }
// </Card>
//   )
// };

export default StepItem;