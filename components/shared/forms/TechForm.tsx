"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { CheckIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // 3. Render the form.
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[640px] mx-auto"
      >
        {/* Start Time */}

        <Button variant="outline" className="!bg-green-600 text-white">
          Start Time
        </Button>

        {/* Item #1 */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            // First Input
            <FormItem>
              <FormLabel>Serial Number</FormLabel>
              <FormControl>
                <Input placeholder="serial number" {...field} />
              </FormControl>

              <FormDescription>
                Find serial number on the top of printer.
                <br />
                Серийный номер Вы можете найти на крышке принтера.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Item #2 */}
        <div className="row max-w-[640px] mx-auto flex flex-row gap-2">
          <Select>
            <SelectTrigger className="max-w-[560px] mx-auto">
              <SelectValue placeholder="Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="402">402</SelectItem>
              <SelectItem value="404">404</SelectItem>
              <SelectItem value="452">452</SelectItem>
              <SelectItem value="454">454</SelectItem>
              <SelectItem value="277">277</SelectItem>
              <SelectItem value="255">255</SelectItem>
              <SelectItem value="4350">4350</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="max-w-[80px] mx-auto">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="D">D</SelectItem>
              <SelectItem value="DN">DN</SelectItem>
              <SelectItem value="DNE">DNE</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Item #3 */}
        <div className="grid grid-flow-col justify-stretch gap-3">
          <Card className="max-w-[320px]">
            <CardHeader className="bg-black text-white mb-3">
              <CardTitle>Before Start</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="flex flex-col justify-start items-start">
              <p>
                Return? -
                <Toggle
                  variant="outline"
                  aria-label="Toggle italic"
                  className="ml-3 mb-1"
                >
                  Yes
                </Toggle>
              </p>
              <p>Printer condition:</p>
              <ToggleGroup
                type="single"
                className="flex flex-row mt-3 mb-3 max-md:flex-col"
              >
                <ToggleGroupItem value="a">Good</ToggleGroupItem>
                <ToggleGroupItem value="b">Broken</ToggleGroupItem>
                <ToggleGroupItem value="c">Bended</ToggleGroupItem>
              </ToggleGroup>
              <Separator />

              <ToggleGroup
                type="single"
                className="flex flex-row mt-3 mb-3 max-md:flex-col"
              >
                <ToggleGroupItem value="a">Clean</ToggleGroupItem>
                <ToggleGroupItem value="b">Dirty</ToggleGroupItem>
                <ToggleGroupItem value="c">Very Dirty</ToggleGroupItem>
              </ToggleGroup>
              <Separator />
            </CardContent>

            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>

          <Card className="max-w-[320px]">
            <CardHeader className="bg-black text-white mb-3">
              <CardTitle>Refurbishing</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="flex flex-col justify-start items-start">
              <p>What was done:</p>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Test page
                {/* <CheckIcon className="mr-2 h-4 w-4" /> */}
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Solenoid #1
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Solenoid #2
              </Toggle>

              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Laser guard
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Roll #1
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Roll #2
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                USB Connection
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Network connection
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Usage Page printed
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                Double page printed
              </Toggle>
              <Toggle
                variant="outline"
                aria-label="Toggle italic"
                className="mb-1"
              >
                One side page printed
              </Toggle>
            </CardContent>

            {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
          </Card>
        </div>
        <Button variant="outline" className="!bg-red-600 text-white">
          Finish Time
        </Button>
        <Separator />
        {/* FINAL SUBMIT */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
