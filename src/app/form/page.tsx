import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormValues {
  name: string;
  email: string;
  age: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  age?: string;
}

const initialFormValues: FormValues = {
  name: '',
  email: '',
  age: '',
};

const UserForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate form inputs
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formValues.name) newErrors.name = 'Name is required';
    if (!formValues.email) newErrors.email = 'Email is required';
    if (!formValues.age || isNaN(Number(formValues.age))) newErrors.age = 'Age must be a number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Perform form submission logic (e.g., API call)
      console.log('Form Submitted', formValues);
      // Reset form values
      setFormValues(initialFormValues);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            aria-describedby="name-error"
          />
          {errors.name && <p id="name-error" className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            aria-describedby="email-error"
          />
          {errors.email && <p id="email-error" className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            aria-describedby="age-error"
          />
          {errors.age && <p id="age-error" className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
