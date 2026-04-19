import { AddBookForm } from "@/components/forms/AddBookForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AddBook = () => {
  return (
    <div className="min-h-screen bg-muted/40 py-10">
      <div className="container mx-auto max-w-3xl px-4">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Add new book
          </h1>
          <p className="text-muted-foreground mt-1">
            Fill in the details of the book you want to add to the store.
          </p>
        </div>

        {/* Main Card */}
        <Card className="shadow-sm w-lg">
          <CardHeader>
            <CardTitle>Book Information</CardTitle>
          </CardHeader>
          <CardContent>
           <AddBookForm />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

