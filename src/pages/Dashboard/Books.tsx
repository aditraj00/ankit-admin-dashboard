
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AddBookDialog, { BookData } from '@/components/books/AddBookDialog';
import { toast } from '@/hooks/use-toast';

const BooksPage: React.FC = () => {
  const [isAddBookDialogOpen, setIsAddBookDialogOpen] = useState(false);
  const [books, setBooks] = useState<BookData[]>([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", price: "$15.99", stock: 45 },
    { id: 2, title: "Educated", author: "Tara Westover", category: "Non-Fiction", price: "$14.99", stock: 32 },
    { id: 3, title: "Atomic Habits", author: "James Clear", category: "Self-Help", price: "$18.99", stock: 67 },
    { id: 4, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", price: "$19.99", stock: 28 },
    { id: 5, title: "The Silent Patient", author: "Alex Michaelides", category: "Thriller", price: "$16.99", stock: 53 },
    { id: 6, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", price: "$13.99", stock: 41 },
  ]);

  const handleAddBook = (newBook: BookData) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Manage Books</h1>
          <p className="text-muted-foreground">Add, edit, and manage your book inventory</p>
        </div>
        <Button 
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setIsAddBookDialogOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Book
        </Button>
      </div>

      <AddBookDialog 
        open={isAddBookDialogOpen} 
        onOpenChange={setIsAddBookDialogOpen}
        onAddBook={handleAddBook}
      />

      <Card>
        <Tabs defaultValue="all">
          <div className="border-b px-6 pt-6">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-black data-[state=active]:text-white">All Books</TabsTrigger>
              <TabsTrigger value="fiction" className="data-[state=active]:bg-black data-[state=active]:text-white">Fiction</TabsTrigger>
              <TabsTrigger value="non-fiction" className="data-[state=active]:bg-black data-[state=active]:text-white">Non-Fiction</TabsTrigger>
              <TabsTrigger value="self-help" className="data-[state=active]:bg-black data-[state=active]:text-white">Self-Help</TabsTrigger>
            </TabsList>
          </div>
          <CardContent className="pt-4">
            <TabsContent value="all">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {books.map((book) => (
                      <TableRow key={book.id}>
                        <TableCell className="font-medium">{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell>{book.price}</TableCell>
                        <TableCell>{book.stock}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="fiction">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {books.filter(book => book.category === "Fiction").map((book) => (
                      <TableRow key={book.id}>
                        <TableCell className="font-medium">{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell>{book.price}</TableCell>
                        <TableCell>{book.stock}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="non-fiction">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {books.filter(book => book.category === "Non-Fiction").map((book) => (
                      <TableRow key={book.id}>
                        <TableCell className="font-medium">{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell>{book.price}</TableCell>
                        <TableCell>{book.stock}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value="self-help">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {books.filter(book => book.category === "Self-Help").map((book) => (
                      <TableRow key={book.id}>
                        <TableCell className="font-medium">{book.title}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell>{book.price}</TableCell>
                        <TableCell>{book.stock}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default BooksPage;
