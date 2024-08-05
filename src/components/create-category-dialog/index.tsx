import { useCallback, useState } from "react";
import { Button } from "../button";
import { Dialog } from "../dialog";
import { Title } from "../title";
import { Input } from "./../input/index";
import { Container } from "./style";

export function CreateCategoryDialog() {
	const [open, setOpen] = useState(false);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);

	const onSubmit = useCallback(() => {
		handleClose();
	}, [handleClose]);

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
			trigger={<Button>Nova categoria</Button>}
		>
			<Container>
				<Title
					title="Nova categoria"
					subtitle="Crie uma nova categoria para suas transações"
				/>
				<form>
					<div>
						<Input label="Nome" placeholder="Nome da categoria..." />
						<Input label="Cor" type="color" />
					</div>
				</form>
				<footer>
					<Button onClick={handleClose} variant="outline" type="button">
						Cancelar
					</Button>
					<Button onClick={onSubmit} type="button">
						Cadastrar
					</Button>
				</footer>
			</Container>
		</Dialog>
	);
}
