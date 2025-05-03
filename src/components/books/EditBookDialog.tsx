
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { BookData } from "./AddBookDialog";

interface EditBookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: BookData | null;
  onUpdateBook: (updatedBook: BookData) => void;
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author name must be at least 2 characters.",
  }),
  category: z.string().min(2, {
    message: "Category must be at least 2 characters.",
  }),
  price: z.string().regex(/^\$?\d+(\.\d{1,2})?$/, {
    message: "Price must be a valid amount (e.g. $15.99 or 15.99).",
  }),
  stock: z.coerce.number().int().min(0, {
    message: "Stock must be a positive number.",
  }),
});

const EditBookDialog: React.FC<EditBookDialogProps> = ({
  open,
  onOpenChange,
  book,
  onUpdateBook,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: book?.title || "",
      author: book?.author || "",
      category: book?.category || "",
      price: book?.price?.replace("$", "") || "",
      stock: book?.stock || 0,
    },
  });

  // Reset form when book changes
  React.useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        category: book.category,
        price: book.price.replace("$", ""),
        stock: book.stock,
      });
    }
  }, [book, form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!book) return;
    
    // Format price to include $ if not present
    const formattedPrice = values.price.startsWith("$")
      ? values.price
      : `$${values.price}`;

    // Create updated book
    const updatedBook: BookData = {
      id: book.id,
      title: values.title,
      author: values.author,
      category: values.category,
      price: formattedPrice,
      stock: values.stock,
    };

    onUpdateBook(updatedBook);
    onOpenChange(false);
    toast({
      title: "Book Updated",
      description: `"${values.title}" has been updated.`,
    });
  };

  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogDescription>
            Update the details for this book. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Book title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Author name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="E.g. Fiction, Non-Fiction, Self-Help" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="$0.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min={0}
                      placeholder="0" 
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="bg-black hover:bg-gray-800">
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookDialog;
