"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { setQuery, fetchYoutubeVideos } from "../../redux/slices/searchSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { fetchGoogleSearchResults } from "@/redux/slices/googleSearchSlice";

type SearchFormValues = {
  query: string;
};

function Searchbar() {
  const { register, handleSubmit, reset } = useForm<SearchFormValues>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const searchCount = async (query: string) => {
    try {
      const response = await axios.post("/api/searchCount", { query });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<SearchFormValues> = (data) => {
    try {
      const { query } = data;
      // searchCount(query);
      dispatch(setQuery(query));
      dispatch(fetchYoutubeVideos(query)).then(() => {
        dispatch(fetchGoogleSearchResults(query)).then(() => {
          router.push("/results");
        })
        
      });
      reset();
    } catch (error) {
      console.error(error);
    }
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
