import React, { useState } from "react";

const TestDiv = () => {
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    setSkills([...skills, "New Skill"]); // Add a new skill to the list
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index)); // Remove the skill at the specified index
  };

  return (
    <div>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          skill={skill}
          onRemove={() => removeSkill(index)}
        />
      ))}
      <AddSkillButton onAdd={addSkill} />
    </div>
  );
};

const SkillItem = ({ skill, onRemove }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div onClick={toggleForm}>
        <p>{skill}</p>
      </div>
      {showForm && <SkillForm />}
      <div onClick={onRemove}>Remove</div>
    </div>
  );
};

const AddSkillButton = ({ onAdd }) => {
  return <div onClick={onAdd}>Add Skill</div>;
};

const SkillForm = () => {
  return (
    <form>
      <input type="text" placeholder="Skill Name" />
      <button type="submit">Save</button>
    </form>
  );
};

export default TestDiv;
