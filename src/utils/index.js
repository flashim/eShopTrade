import Link from "next/link";
import { useRouter } from "next/router";


export function formatCurrency(currency='', symbol='₹', spacing=''){
    return `${symbol}${spacing}${currency}`
}

export function to2Decimal(val=0) {
    return (val).toFixed(2);
}

export function evalDiscount(mrp, price){
    return Math.round(((mrp - price)/mrp) * 100)
}

export function unique(arr){
    return Array.from(new Set(arr))
}

export const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? ""
            : ""
        } ${className} `}
      >
        {children}
      </a>
    </Link>
  );
};

export async function fetchDataAsync(url) {
  const response = await fetch(url);
  const data = await response.json(); 
  return data
}