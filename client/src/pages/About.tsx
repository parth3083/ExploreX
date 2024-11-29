// import React from 'react'

// function About() {
//   return (
//       <main className='bg-red-500 p-5'>
//           <div className='w-full font-pop text-4xl font-semibold flex items-center justify-center'>About</div>
//     </main>
//   )
// }

// export default About
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 font-pop">
      <h1 className="text-4xl font-bold text-center mb-6">About ExploreX.</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is this ExploreX?</h2>
        <p className="text-lg leading-7">
          <span className="font-bold">ExploreX.</span> is designed to provide users with a seamless way to find
          information on any topic. By simply entering a topic name, users can explore
          curated results, including relevant <span className="font-bold">videos</span>, <span className="font-bold">blogs</span>, and <span className="font-bold">websites</span>. It
          also displays <span className="font-bold">trending news</span> to keep users updated with the latest events.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Problem Does It Cover?</h2>
        <p className="text-lg leading-7">
          In today's world of information overload, finding <span className="font-bold">trustworthy</span> and <span className="font-bold">relevant </span>
          content on a specific topic can be time-consuming. <span className="font-bold">ExploreX.</span> tackles that
          issue by aggregating and displaying <span className="font-bold">topic-specific</span> content from multiple
          sources, making the research process more <span className="font-bold">efficient</span> and <span className="font-bold">user-friendly</span>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works?</h2>
        <p className="text-lg leading-7">
        <span className="font-bold">ExploreX.</span>  integrates APIs and web scraping techniques to fetch data from various platforms. Users input the name of a topic in the search bar, and the system processes this query to retrieve videos via the <span className="font-bold">Youtube API</span> , as well as blogs and websites using <span className="font-bold">Puppeteer</span>  for web scraping. <span className="font-bold">Trending news</span>  on the homepage is dynamically fetched, ensuring that the content remains fresh, relevant, and up-to-date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <table className="table-auto w-full text-lg">
  <thead>
    <tr>
      <th className="border px-4 py-2">Category</th>
      <th className="border px-4 py-2">Technologies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">Frontend & Backend</td>
      <td className="border px-4 py-2">Next.js, TypeScript, ShadCN UI</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Database</td>
      <td className="border px-4 py-2">MongoDB</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">APIs</td>
      <td className="border px-4 py-2">Youtube API, Resend API</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Styling</td>
      <td className="border px-4 py-2">Tailwind CSS</td>
    </tr>
  </tbody>
</table>

      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About the Creator</h2>
        <p className="text-lg leading-7">
          This project was created by <span className="font-bold">Parth Rajput</span>, a
          passionate B.Tech student at GS Patel College of Engineering and Technology. Parth
          specializes in web development and AI/ML projects, with a keen interest in building
          innovative solutions to real-world problems. 
        </p>
        <p className="text-lg leading-7 mt-4">
          Parth has worked on several projects ranging from expense tracking applications to
          language learning tools. With a strong foundation in both backend and frontend
          development, Parth continually seeks to enhance user experiences through
          technology.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with the Creator</h2>
        <div className="flex justify-center space-x-4">
          <Button asChild variant="outline">
            <Link href="https://github.com/ParthRajput01" target="_blank">GitHub</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://linkedin.com/in/ParthRajput01" target="_blank">LinkedIn</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://medium.com/@ParthRajput01" target="_blank">Medium</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
