import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useActionData, useSubmit } from 'react-router-dom';

export default function ProfileForm() {
  const error = useActionData();
  const { register, handleSubmit } = useForm();
  const submit = useSubmit();

  useEffect(() => {
    console.log(error);
  }, [error]);

  async function mySubmit(data) {
    submit(data, {
      method: 'post',
    });
  }

  return (
    <>
      <h3 className="p-20">Profile Form</h3>
      <form onSubmit={handleSubmit((data) => mySubmit(data))} className="p-20">
        <input {...register('content')} type="text" className="mr-5" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
