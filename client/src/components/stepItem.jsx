import './Stepbox.scss';

import {useState} from 'react';

import Card from 'react-bootstrap/Card';



const StepItem = ({ name, description }) => {

  const [open, setOpen]=useState(false);
  if (!open) {
    return (
      <div className='stepbox' onClick={()=>setOpen(true)}>
        <h3>{name}</h3>
        </div>
        )
        } else {
          return (
        <div className='stepbox' 
        onClick={()=>setOpen(false)}
        >
          <h3>{name}</h3>
          <h4>{description}</h4>
          <button onClick={()=>console.log("button!")}>Button!</button>
      </div>
          )
      }
      }

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