
import React from 'react';
import Container from '../Container/Container';
import BlogPostCard from '../BlogPostCard/BlogPostCard';

const BlogPost = () => {
    return (
        <div>
        <div>
          <Container>
            <div className="flex flex-col justify-center items-center">
              <h2 className="py-4 text-4xl font-semibold">Recent Blog Post</h2>
              <p className="text-lg text-[#777777]">
                Have a look at our popular reason. why you should choose you bus.
                Just choose a Bus and
              </p>
              <p className=" text-lg text-[#777777]">
                get a ticket for your great journey. !
              </p>
              {/*blog card */}
              <BlogPostCard />
            </div>
          </Container>
        </div>
      </div>
    );
};

export default BlogPost;