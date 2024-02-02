import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Home = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-between py-2 mt-[64px] mb-[32px]">
        <h1 className="text-xl text-light">Results</h1>
        <div className="samp">Filter</div>
      </div>
      <div className="container mx-auto flex flex-col py-2 ">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Tech Name</TableHead>
              <TableHead>Qtty</TableHead>
              <TableHead>Everage time</TableHead>
              <TableHead className="text-right">Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Alex</TableCell>
              <TableCell>3</TableCell>
              <TableCell>22 mins.</TableCell>
              <TableCell className="text-right">3.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Bakha</TableCell>
              <TableCell>5</TableCell>
              <TableCell>17 mins.</TableCell>
              <TableCell className="text-right">4.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Michael</TableCell>
              <TableCell>2</TableCell>
              <TableCell>17 mins.</TableCell>
              <TableCell className="text-right">3.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Vitalli</TableCell>
              <TableCell>2</TableCell>
              <TableCell>24 mins.</TableCell>
              <TableCell className="text-right">3.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Vlad</TableCell>
              <TableCell>5</TableCell>
              <TableCell>14 mins.</TableCell>
              <TableCell className="text-right">4.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kee</TableCell>
              <TableCell>7</TableCell>
              <TableCell>19 mins.</TableCell>
              <TableCell className="text-right">3.8</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Home;
