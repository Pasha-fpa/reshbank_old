export interface textareaTypes {
	title: any;
	placeholder: any;
	value: any;
	setValue: (value: string) => void;
	removeFocus: (value: string) => void;
	onPressKeyArrow?: any;
	isValid: boolean | string;
}
