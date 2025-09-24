import type {
	IExecuteFunctions,
	IHttpRequestOptions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class Random implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Random',
		name: 'random',
		group: ['transform'],
		version: 1,
		icon: 'file:random.svg',
		description: 'Gera número aleatório em um intervalo predefinido',
		defaults: {
			name: 'Random',
		},
		inputs: ['main'],
		outputs: ['main'],
		usableAsTool: true,
		properties: [
			{
				displayName: 'Operação',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'GET',
						value: 'get',
						description: 'True Random Number Generator',
						action: 'True Random Number Generator',
					},
				],
				default: 'get',
			},

			{
				displayName: 'De:',
				name: 'numberMin',
				type: 'number',
				required: true,
				default: '',
				displayOptions: {
					show: {
						operation: ['get'],
					},
				},
				placeholder: 'Defina o limite inferior',
				description: 'Defina o limite inferior',
			},
			{
				displayName: 'Até:',
				name: 'numberMax',
				type: 'number',
				required: true,
				default: '',
				placeholder: 'Defina o limite superior',
				description: 'Defina o limite superior',
			},
		],
	};

	// The function below is responsible for actually doing whatever this node
	// is supposed to do. In this case, we're just appending the `myString` property
	// with whatever the user has entered.
	// You can make async calls and use `await`.
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let responseData = [];
		const numberMin = this.getNodeParameter('numberMin', 0) as string;
		const numberMax = this.getNodeParameter('numberMax', 0) as string;

		const options: IHttpRequestOptions = {
			headers: {
				Accept: 'application/json',
			},
			method: 'GET',
			url: `https://www.random.org/integers/?num=1&min=${numberMin}&max=${numberMax}&col=1&base=10&format=plain&rnd=new`,
			json: true,
		};

		responseData = await this.helpers.httpRequest(options);

		return [this.helpers.returnJsonArray(responseData)];
	}
}
