import React from "react";
import { Cabecalho } from "../components/cabecalho";
import { Lateral } from "../components/MenuLateral";


export function PagHome (props) {


	return(
		
		<div className="principal">
		<Lateral/>
		<div>
			<Cabecalho/>
		</div>
		</div>
	);
}