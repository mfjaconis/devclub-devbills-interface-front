import { InputMask } from "@react-input/mask";
import { Button } from "../../components/button";
import { CreateCategoryDialog } from "../../components/create-category-dialog";
import { Input } from "../../components/input";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { Transaction } from "../../components/transaction";
import { ButtonIcon } from "./../../components/button-icons/index";
import { Card } from "./../../components/card/index";
import {
	Aside,
	Balance,
	ChartAction,
	ChartContainer,
	ChartContent,
	Filters,
	Header,
	InputGroup,
	Main,
	SearchTransaction,
	Section,
	TransactionGroup,
} from "./styles";

export function Home() {
	return (
		<>
			<Header>
				<Logo />
				<div>
					<Button>Nova transação</Button>
					<CreateCategoryDialog />
				</div>
			</Header>
			<Main>
				<Section>
					<Filters>
						<Title title="Saldo" subtitle="Receitas e despensas no periodo" />
						<InputGroup>
							<InputMask
								component={Input}
								mask="dd/mm/aaaa"
								replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
								variant="dark"
								label="Inicio"
								placeholder="dd/mm/aaaa"
							/>
							<InputMask
								component={Input}
								mask="dd/mm/aaaa"
								replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
								variant="dark"
								label="Fim"
								placeholder="dd/mm/aaaa"
							/>

							<ButtonIcon />
						</InputGroup>
					</Filters>
					<Balance>
						<Card title="Saldo" amount={1000000} />
						<Card title="Saldo" amount={1000000} variant="incomes" />
						<Card title="Saldo" amount={1000000} variant="expenses" />
					</Balance>
					<ChartContainer>
						<header>
							<Title
								title="Gastos"
								subtitle="Despesas por categoria no período"
							/>
						</header>
						<ChartContent></ChartContent>
					</ChartContainer>
					<ChartContainer>
						<header>
							<Title
								title="Evolução financeira"
								subtitle="Saldo, Receitas e Gastos no ano"
							/>
							<ChartAction>
								<InputMask
									component={Input}
									mask="aaaa"
									replacement={{ a: /\d/ }}
									variant="black"
									label="Ano"
									placeholder="aaaa"
								/>
								<ButtonIcon />
							</ChartAction>
						</header>
						<ChartContent></ChartContent>
					</ChartContainer>
				</Section>
				<Aside>
					<header>
						<Title title="Transações" subtitle="Receita e Gastos no período" />
						<SearchTransaction>
							<Input variant="black" placeholder="Procurar transações" />
							<ButtonIcon />
						</SearchTransaction>
					</header>
					<TransactionGroup>
						<Transaction
							id={1}
							amount={20000}
							category={{ title: "Alimentação", color: "#ff33bb" }}
							date="09/09/2023"
							title="Mercado"
						/>
						<Transaction
							id={1}
							amount={20000}
							category={{ title: "Alimentação", color: "#ff33bb" }}
							date="09/09/2023"
							title="Mercado"
						/>
						<Transaction
							id={1}
							amount={20000}
							category={{ title: "Alimentação", color: "#ff33bb" }}
							date="09/09/2023"
							title="Mercado"
						/>
					</TransactionGroup>
				</Aside>
			</Main>
		</>
	);
}
