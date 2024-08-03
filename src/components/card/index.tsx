import {
	ArrowCircleDownRight,
	ArrowCircleUpRight,
	CurrencyCircleDollar,
} from "@phosphor-icons/react";
import { formatCurrency } from "../../utils/format-currency";
import { Container } from "./style";

type CardProps = {
	variant?: "balance" | "incomes" | "expenses";
	title: string;
	amount: number;
};

const iconsMap = {
	balance: <CurrencyCircleDollar />,
	incomes: <ArrowCircleUpRight />,
	expenses: <ArrowCircleDownRight />,
};

export function Card({ amount, title, variant = "balance" }: CardProps) {
	return (
		<Container $variant={variant}>
			{iconsMap[variant]}
			<span>{title}</span>
			<strong>{formatCurrency(amount)}</strong>
		</Container>
	);
}
