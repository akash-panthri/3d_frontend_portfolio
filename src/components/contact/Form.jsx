"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {required: true})} />
      <input type="email" placeholder="email" {...register("email", {required: true})} />
      <textarea {...register("message", {required: true, max: 256, min: 50})} />

      <input type="submit" />
    </form>
  );
}