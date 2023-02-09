import React from "react";

export const Application = () => {
  return (
    <>
      <h1> Job application</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select name="" id="name">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">Grait Britain</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" id="terms" />I agree to the rerms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
