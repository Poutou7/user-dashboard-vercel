import type {
  RevenueForecast,
  AnnualProfit,
  SalesFromLocation
} from "@/types/components/dashboard/dashboard2";

const RevenueForecastData: RevenueForecast[] = [
  {
    icon: "pie-chart-2-linear",
    subtext: "FreePlan",
    profit: "$96,640",
    bgcolor: "bg-grey100",
    color: "text-textPrimary",
  },
  {
    icon: "dollar-minimalistic-linear",
    subtext: "PlusPlan",
    profit: "$48,820",
    bgcolor: "bg-lightprimary",
    color: "text-primary",
  },
  {
    icon: "database-linear",
    subtext: "ProPlan",
    profit: "$58,820",
    bgcolor: "bg-lighterror",
    color: "text-error",
  },
];

const SalesFromLocationData: SalesFromLocation[] = [
  {
      name: 'SA',
      percentage:'28%',
      color:'primary',
  },
  {
      name: 'AE',
      percentage:'21%',
      color:'secondary',
  },
  {
      name: 'QA',
      percentage:'18%',
      color:'error',
  },
  {
      name: 'BH',
      percentage:'15%',
      color:'warning',
  },
  {
      name: 'KW',
      percentage:'33%',
      color:'success',
  },
  {
      name: 'OM',
      percentage:'17%',
      color:'muted',
  },

];

const AnnualProfitData: AnnualProfit[] = [
  {
    title: "CashierPayment",
    subtitle: "NoProfit",
    price: "$21,120.70",
    percent: "+13.2%",
    color: "success",
  },
  {
    title: "OnlinePayment",
    subtitle: "CommissionProfit",
    price: "$16,100.00",
    percent: "-7.4%",
    color: "error",
  },
  {
    title: "Playgrounds",
    subtitle: "Total",
    price: "$6,400.50",
    percent: "+9.3%",
    color: "success",
  },
];

export { RevenueForecastData, AnnualProfitData, SalesFromLocationData };
