'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Payment = {
  orderId: string;
  orderDate: string;
  orderAmount: string;
  transactionfees: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'orderId',
    header: 'Order Id',
  },
  {
    accessorKey: 'orderDate',
    header: () => (
      <div className='flex gap-x-1 items-center'>
        <p>Order Date</p>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409V6.23409Z"
            fill="#4D4D4D"
          />
        </svg>
      </div>
    ),
  },
  {
    accessorKey: 'orderAmount',
    header: 'Order Amount',
  },
  {
    accessorKey: 'transactionfees',
    header: () => (
      <div className="flex items-center gap-x-1 justify-end">
        <p>Transaction fees</p>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_0_1590)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99995 1.63336C4.03602 1.63336 1.63328 4.0361 1.63328 7.00003C1.63328 9.96396 4.03602 12.3667 6.99995 12.3667C9.96388 12.3667 12.3666 9.96396 12.3666 7.00003C12.3666 4.0361 9.96388 1.63336 6.99995 1.63336ZM0.699951 7.00003C0.699951 3.52063 3.52056 0.700027 6.99995 0.700027C10.4793 0.700027 13.3 3.52063 13.3 7.00003C13.3 10.4794 10.4793 13.3 6.99995 13.3C3.52056 13.3 0.699951 10.4794 0.699951 7.00003Z"
              fill="#4D4D4D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.99995 6.62365C7.25768 6.62365 7.46662 6.83259 7.46662 7.09032L7.46663 9.44587C7.46663 9.7036 7.25769 9.91253 6.99996 9.91254C6.74223 9.91254 6.53329 9.7036 6.53329 9.44587L6.53329 7.09032C6.53328 6.83259 6.74222 6.62366 6.99995 6.62365Z"
              fill="#4D4D4D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.52777 4.75836C7.52777 5.04985 7.29146 5.28616 6.99997 5.28616C6.70847 5.28616 6.47216 5.04985 6.47216 4.75836C6.47216 4.46686 6.70847 4.23055 6.99997 4.23055C7.29146 4.23055 7.52777 4.46686 7.52777 4.75836Z"
              fill="#4D4D4D"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1590">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-right">{row.original.transactionfees}</div>
    ),
  },
];
