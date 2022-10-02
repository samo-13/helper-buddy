import './Create.scss';
import '../components/Button.scss';

const Create = () => {
  return (
    <div className="wrapper">
      <h1>Create your own custom task!</h1>
      <form>
      <fieldset>
         <label>
           <p>Task Name</p>
           <input name="task" />
         </label>
       </fieldset>
       <button class="button" type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create;
