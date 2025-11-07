import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-6 pt-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-6 mb-8">
          <div className="aspect-[21/9] overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article */}
        <article className="container mx-auto px-6 max-w-4xl">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
            {post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-primary font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
          />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Related <span className="text-primary">Articles</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-primary font-semibold mb-2">{relatedPost.date}</p>
                      <h3 className="text-xl font-bold mb-3">{relatedPost.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline">
                          Read More <span className="ml-2">→</span>
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
