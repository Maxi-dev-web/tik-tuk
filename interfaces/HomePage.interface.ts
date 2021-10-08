export interface ICurrencies {
	RUB: number;
	EUR: number;
}

export interface ICurrencyData {
	disclaimer: string;
	license: string;
	timestamp: number;
	base: string;
	rates: ICurrencies;
}