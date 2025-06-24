
import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const posts = [
  {
    title: "AI क्या है?",
    category: "Tech",
    description: "AI यानी Artificial Intelligence एक तकनीक है जो मशीनों को सोचने और निर्णय लेने में सक्षम बनाती है।",
  },
  {
    title: "5G इंटरनेट का भविष्य",
    category: "Internet",
    description: "5G तकनीक मोबाइल इंटरनेट को कई गुना तेज बनाती है और नई संभावनाओं को जन्म देती है।",
  },
  {
    title: "2025 के बेस्ट मोबाइल ऐप्स",
    category: "Apps",
    description: "जानिए 2025 में कौन-कौन से मोबाइल ऐप्स आपके लिए सबसे उपयोगी साबित हो सकते हैं।",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gray-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to Our Blog</h1>
        <p className="text-sm mt-2">React JS + Tailwind CSS Modern Blog</p>
      </header>

      <main className="p-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-blue-600 mb-1">{post.category}</p>
                <p className="text-gray-700 text-base">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white text-center p-4 mt-6">
        <p>© 2025 LUMO Blog - All rights reserved.</p>
      </footer>
    </div>
  );
}
