"use client"
import React from 'react'
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
      <div className='w-full  flex flex-col items-center font-pop gap-5 justify-center pt-10  '>
          <h1 className='font-pop text-4xl font-medium'>Contact us </h1>
              <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  w-1/2 ">
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
                <div>
                <FormLabel >Email</FormLabel>
            <FormControl>
              <Input placeholder="parth@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </div>
                <div>
                <FormLabel >Message</FormLabel>
            <FormControl>
            <Textarea placeholder='Type here ...'/>

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
  )
}

export default Contact