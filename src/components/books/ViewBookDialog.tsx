
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookData } from "./AddBookDialog";

interface ViewBookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: BookData | null;
}

const ViewBookDialog: React.FC<ViewBookDialogProps> = ({
  open,
  onOpenChange,
  book,
}) => {
  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{book.title}</DialogTitle>
          <DialogDescription>Book details</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Author:</span>
            <span className="col-span-2">{book.author}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Category:</span>
            <span className="col-span-2">{book.category}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Price:</span>
            <span className="col-span-2">{book.price}</span>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">Stock:</span>
            <span className="col-span-2">{book.stock}</span>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} className="bg-black hover:bg-gray-800">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewBookDialog;
