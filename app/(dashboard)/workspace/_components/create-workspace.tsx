import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormField } from "@/components/ui/form";

const CreateWorkSpace = () => {
  const [open, setOpen] = useState(false);

  const form = useForm();

  function onSubmit() {
    console.log("data");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-12 rounded-xl border-2 border-dashed 
             border-muted-foreground/50
             hover:!border-foreground hover:!text-foreground 
             hover:rounded-xl cursor-pointer transition-all duration-200"
            >
              <Plus className="size-5" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Create Workspace</p>
        </TooltipContent>
      </Tooltip>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            <h3>Create Workspace</h3>
          </DialogDescription>

          <DialogDescription>
            Workspace creation form will go here.
          </DialogDescription>
        </DialogHeader>
        
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkSpace;
