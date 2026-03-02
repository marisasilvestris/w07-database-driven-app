export default function SubmitNote() {
  const form = document.getElementById(`submitForm`);

  async function submitHandle(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const userInput = Object.fromEntries(formData);
    const userInputJSON = JSON.stringify(userInput);

    const response = await fetch(`http://localhost:9001/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: userInputJSON,
    });
    const res = await response.json();

    window.location.reload();
  }
  console.log(form);

  //   form.addEventListener(`submit`, submitHandle);

  return (
    <>
      <div
        className={`border border-(--border) note vanilla mx-auto min-w-75 min-h-75`}
      >
        <form
          name="submitForm"
          id="submitForm"
          className="p-3 flex flex-col place-content-between h-full"
        >
          <div className="flex gap-2">
            <label htmlFor="title">Title</label>
            <input
              id="formTitle"
              name="title"
              type="text"
              placeholder="note title"
              className="grow"
              required
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="colour">Colour</label>
            <select id="noteColour" name="colour" className="grow">
              <option
                name="rating"
                value="blue"
                className="bg-[#5dd2e4] text-white"
                required
              >
                blue
              </option>
              <option
                name="rating"
                value="vanilla"
                className="bg-[#fdf4cc] text-[#f287b3]"
                required
              >
                vanilla
              </option>
              <option
                name="rating"
                value="yellow"
                className="bg-[#fdd96a] text-white"
                required
              >
                yellow
              </option>
              <option
                name="rating"
                value="pink"
                className="bg-[#f287b3] text-[#fdf4cc]"
                required
              >
                pink
              </option>
              <option
                name="rating"
                value="hotpink"
                className="bg-[#da3c76] text-white"
                required
              >
                hot pink
              </option>
            </select>
          </div>

          <div className="flex gap-2">
            <label htmlFor="body">Text</label>
            <textarea
              id="noteBody"
              name="body"
              placeholder="type ur review here pls!"
              className="grow min-h-32"
              required
            ></textarea>
          </div>
          <button name="submitBtn" type="submit" onClick={submitHandle}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
