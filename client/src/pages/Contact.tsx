"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  review: z.string().min(5, "Message should be atleast 5 Characters long"),
});

function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      review: "",
    },
  });

  async function action(values: {}) {
    try {
      const response = await axios.post("/api/contactDetails", values);
      if (response.status === 200) {
        toast({
          description: "Your message has been sent",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      action(values);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="w-full  flex flex-col items-center font-pop gap-5 justify-center pt-10  ">
      <h1 className="font-pop text-4xl font-medium">Contact us </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border-gray-600 border rounded-md p-5  lg:w-1/2 md:w-2/3 "
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Parth Rajput" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="parth@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type here ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default Contact;
