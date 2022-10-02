import './Create.scss';
import '../components/Button.scss';

const Create = () => {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have created a new task.')
  }

  return (
    <div className="wrapper">
      <h1>Create your own custom task!</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Task Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button class='button' type="submit">Create</button>
      </form>
    </div>
  )
}

export default Create;
