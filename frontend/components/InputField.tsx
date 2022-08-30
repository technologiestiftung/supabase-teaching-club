// taken from https://codesandbox.io/s/react-form-demo-wrybd?file=/src/index.js:711-1324
import { forwardRef } from "react";
import { splitFormProps, useField } from "react-form";

export const InputField = forwardRef((props, ref) => {
	// Let's use splitFormProps to get form-specific props
	const [field, fieldOptions, rest] = splitFormProps(props);

	// Use the useField hook with a field and field options
	// to access field state
	const {
		meta: { error, isTouched, isValidating },
		getInputProps,
	} = useField(field, fieldOptions);

	// Build the field
	return (
		<>
			<input {...getInputProps({ ref, ...rest })} />{" "}
			{isValidating ? (
				<em>Validating...</em>
			) : isTouched && error ? (
				<em>{error}</em>
			) : null}
		</>
	);
});
InputField.displayName = "InputField";
