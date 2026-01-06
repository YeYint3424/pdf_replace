"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="min-h-screen py-8 md:py-12 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-md mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          PDF Generator
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="pt-4">
            <Link
              href={{
                pathname: "/pdf",
                query: { name, age },
              }}
              className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition duration-200 ${
                name && age
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              View PDF
            </Link>
            {(!name || !age) && (
              <p className="text-sm text-gray-500 mt-2 text-center">
                Please fill in both fields
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
