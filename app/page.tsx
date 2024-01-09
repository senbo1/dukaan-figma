import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Payment, columns } from '@/components/payments/columns';
import { DataTable } from '@/components/payments/data-table';

async function getData(): Promise<Payment[]> {
  return Array.from({ length: 19 }, () => ({
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionfees: "₹22",
  }));
}

export default async function Home() {
  const data = await getData();

  return (
    <section className="w-[1152px] mx-8 my-8">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-6">
          {/* Heading */}
          <div className="flex justify-between">
            <h2 className="text-xl font-medium">Overview</h2>
            <Select>
              <SelectTrigger className="w-[137px] text-[#4D4D4D]">
                <SelectValue placeholder="Last Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lastWeek">Last Week</SelectItem>
                <SelectItem value="lastMonth">Last Month</SelectItem>
                <SelectItem value="lastYear">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Stats */}
          <div className="flex gap-x-5">
            <div className="w-[566px] p-5">
              <p className="text-[16px] text-[#4D4D4D]">Online Orders</p>
              <p className="text-[32px] font-medium">231</p>
            </div>
            <div className="w-[566px] p-5">
              <p className="text-[16px] text-[#4D4D4D]">Amount received</p>
              <p className="text-[32px] font-medium">₹23,92,312.19</p>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex flex-col gap-y-5">
          <h2 className="font-medium text-xl">Transactions | This Month</h2>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </section>
  );
}
