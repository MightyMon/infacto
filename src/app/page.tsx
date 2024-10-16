'use client'
import BarChart from "@/components/BarChart";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { CredInput } from "@/components/cred-input"
import app from "next/app";
import { Button } from "@/components/ui/button";

// import cors from "cors";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscription",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Mow",
    amount: "+573",
    discription: "+201 from last month",
    icon: Activity
  }
]
// app.use(cors());

const userSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    salesAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    salesAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    salesAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    salesAmount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    salesAmount: "+$39.00"
  }
];

export default function Home() {
  async function getHello() {
    const response = await fetch("http://127.0.0.1:8001/api/hello");
    const data = await  response.json();
    console.log(data);
  }      
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard"/>
         
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-2  ">
      <CredInput/>      
      </section>
      <section>
      <Button onClick={getHello}> click to fetch </Button>
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {userSalesData.map((data, index) => (
            <SalesCard
              key={index}
              email={data.email}
              name={data.name}
              salesAmount={data.salesAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  )


}
