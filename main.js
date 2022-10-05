const app = Vue.createApp({
	data() {
		return {
			product: 'Socks',
			description: '100% Cotton Handmade socks.',
			url: 'https://google.com/',
			image: './src/assets/images/socks_green.jpg',
			inStock: true,
			inventory: 100,
			onSale: true,
			details: ['50% cotton,30% wool,20% polyester'],
			variants: [
				{id: 0o001,color: 'green'},
				{id: 0o002,color: 'blue'},
			],
			sizes:['S','M','L','XL']
			
		}
	}
})
