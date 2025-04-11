import Link from "next/link";
import React from "react";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to use Next.js?",
    description: "I want to learn Next.js, but I don't know where to start.",
    tags: [
      {
        id: "1",
        name: "Next.js",
      },
      {
        id: "2",
        name: "React",
      },
    ],
    author: {
      id: "1",
      name: "John Doe",
    },
    upvotes: 10,
    downvotes: 2,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to use React?",
    description: "I want to learn React, but I don't know where to start.",
    tags: [
      {
        id: "1",
        name: "React",
      },
      {
        id: "2",
        name: "JavaScript",
      },
    ],
    author: {
      id: "2",
      name: "Jane Smith",
    },
    upvotes: 20,
    downvotes: 5,
    answers: 10,
    views: 200,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{
    [key: string]: string;
  }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Welcome to DevFlow</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      {/* HomeFilter */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions?.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
