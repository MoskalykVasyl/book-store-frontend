// import { useParams } from 'react-router';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';

export const BookPage = () => {
  //   const {id} = useParams();
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT - IMAGE */}
          <div className="flex justify-center items-start">
            <img
              src="https://ksd.ua/storage/products/gallery/medium/0QjjMg1C754OAeypQcQBP3BSdX4QyvfDzTANd5ZR.jpg.webp?v=1733324810"
              alt="Book cover"
              className="w-full max-w-sm object-contain rounded-xl shadow"
            />
          </div>

          {/* RIGHT - INFO */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-3xl font-bold">Game of Thrones</h1>

            <p className="text-muted-foreground">George R. R. Martin</p>

            <div className="text-2xl font-semibold">20 $</div>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-2">
              <Button className="flex gap-2 cursor-pointer">
                <ShoppingCart className="w-4 h-4" />
                Add to cart
              </Button>

              <Button variant="outline" size="icon" className='cursor-pointer'>
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* DESCRIPTION */}
            <Card className="mt-4">
              <CardContent className="p-4 text-sm leading-relaxed text-muted-foreground">
                Long description of the book. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </CardContent>
            </Card>

            {/* EXTRA INFO */}
            <div className="text-sm space-y-1">
              <p>
                <span className="font-medium">Genre:</span> Fantasy
              </p>
              <p>
                <span className="font-medium">Pages:</span> 864
              </p>
              <p>
                <span className="font-medium">Language:</span> English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
