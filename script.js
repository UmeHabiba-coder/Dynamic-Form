function showForm(type) {
  const container = document.getElementById("form-container");
  let formHtml = "";

  if (type === "job") {
    formHtml = `
      <form>
        <h2>Add Job</h2>
        <label>Job Title</label>
        <input type="text" placeholder="e.g. Software Engineer" required>

        <label>Company</label>
        <input type="text" placeholder="e.g. Google" required>

        <label>Start Date</label>
        <input type="month" required>

        <label>End Date</label>
        <input type="month">

        <label>Description</label>
        <textarea rows="4" placeholder="Describe your responsibilities"></textarea>

        <button type="submit" class="submit-btn">Save Job</button>
      </form>
    `;
  } 
  
  else if (type === "education") {
    formHtml = `
      <form>
        <h2>Add Education</h2>
        <label>Institution</label>
        <input type="text" placeholder="e.g. Harvard University" required>

        <label>Degree</label>
        <input type="text" placeholder="e.g. B.Sc in Computer Science" required>

        <label>Start Year</label>
        <input type="number" min="1900" max="2099" step="1" required>

        <label>End Year</label>
        <input type="number" min="1900" max="2099" step="1">

        <button type="submit" class="submit-btn">Save Education</button>
      </form>
    `;
  } 
  
  else if (type === "language") {
    formHtml = `
      <form>
        <h2>Add Language</h2>
        <label>Language</label>
        <input type="text" placeholder="e.g. English" required>

        <label>Proficiency</label>
        <select required>
          <option value="">Select...</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Native</option>
        </select>

        <button type="submit" class="submit-btn">Save Language</button>
      </form>
    `;
  } 
  
  else if (type === "skills") {
    formHtml = `
      <form>
        <h2>Add Skill</h2>
        <label>Skill Name</label>
        <input type="text" placeholder="e.g. JavaScript" required>

        <label>Proficiency</label>
        <select required>
          <option value="">Select...</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
          <option>Expert</option>
        </select>

        <button type="submit" class="submit-btn">Save Skill</button>
      </form>
    `;
  }

  container.innerHTML = formHtml;
}
