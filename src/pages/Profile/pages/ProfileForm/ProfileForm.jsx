import React from 'react';
import { useForm } from 'react-hook-form';
import { useActionData, useSubmit } from 'react-router';

function ProfileForm() {
  const actionData = useActionData();
  const submit = useSubmit();
  const { register, handleSubmit } = useForm();

  async function mySubmit(data) {
    submit(data, { method: 'POST' });
  }

  return (
    <>
      <h3>ProfileForm</h3>
      <form onSubmit={handleSubmit((data) => mySubmit(data))} className="p-20">
        <input {...register('content')} type="text" className="mr-5" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default ProfileForm;
