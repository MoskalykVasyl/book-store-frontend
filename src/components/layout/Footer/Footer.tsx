import { GitBranch, BookOpen } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t mt-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />

              <h2 className="text-xl font-bold">BookStore</h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A pet project online bookstore built with React, NestJS, Prisma,
              and PostgreSQL.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Project Links</h3>

            <a
              href="https://github.com/MoskalykVasyl/book-store-nestjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <GitBranch className="w-4 h-4" />
              GitHub frontend repository
            </a> 
            <a
              href="https://github.com/MoskalykVasyl/book-store-nestjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <GitBranch className="w-4 h-4" />
              GitHub beckend repository
            </a>

          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-sm text-muted-foreground">
          © 2026 BookStore Pet Project. Built by Vasyl Moskalyk.
        </div>
      </div>
    </footer>
  );
};
