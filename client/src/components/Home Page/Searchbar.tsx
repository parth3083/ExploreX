"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

type SearchFormValues = {
  query: string;
};

function Searchbar() {
  const { register, handleSubmit, reset } = useForm<SearchFormValues>();

  const onSubmit: SubmitHandler<SearchFormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="w-full lg:px-16 px-3 md:px-16  flex items-center gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("query", { required: true })}
        placeholder="search here to unlock the answers that you're seeking..."
        className="lg:w-[50vw] md:w-[80vw] w-96"
      />
      <Button type="submit">
        <span className="font-pop text-md">Search</span>
      </Button>
    </form>
  );
}

export default Searchbar;
