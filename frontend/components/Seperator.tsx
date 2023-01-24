export function Seperator(text: string) {
	return (
		<div className="row">
			<div className="row-item" style={{ borderTop: "solid 1px" }}>
				<strong>{text}</strong>
			</div>
		</div>
	);
}
