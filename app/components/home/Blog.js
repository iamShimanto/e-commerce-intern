import BlogCards from '@/app/ui/BlogCard';
import React from 'react'
import blog1 from "@/public/images/blog1.png"
import blog2 from "@/public/images/blog2.png"
import blog3 from "@/public/images/blog3.png"

const Blog = () => {
    const blogs = [
      {
        image: blog1,
        date: "18",
        month: "NOV",
        category: "Food",
        admin: "Admin",
        comments: 65,
        title:
          "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      },
      {
        image: blog2,
        date: "23",
        month: "JAN",
        category: "Food",
        admin: "Admin",
        comments: 65,
        title:
          "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      },
      {
        image: blog3,
        date: "18",
        month: "NOV",
        category: "Food",
        admin: "Admin",
        comments: 65,
        title:
          "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
      },
    ];



  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="heading mb-11">
            <p className="text-center font-medium italic text-primary_color">
              BLOG
            </p>
            <h2 className="text-[40px] font-semibold text-black_main leading-[120%] text-center">
              Latest News
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((item, index) => (
              <BlogCards
                key={index}
                image={item.image}
                date={item.date}
                month={item.month}
                category={item.category}
                admin={item.admin}
                comments={item.comments}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog