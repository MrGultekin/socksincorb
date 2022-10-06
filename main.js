const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Socks',
			description: '100% Cotton Handmade socks.',
			url: 'https://google.com/',
			image: './src/assets/images/socks_blue.jpg',
			inStock: true,
			inventory: 100,
			onSale: true,
			details: ['50% cotton','30% wool','20% polyester'],
			variants: [
				{id: 0o001, color: 'green', image:'./src/assets/images/socks_green.jpg'},
				{id: 0o002, color: 'blue',image:'./src/assets/images/socks_blue.jpg'},
			],
			sizes: ['S', 'M', 'L', 'XL']
			
		}
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		removeFromCart() {
			if (this.cart >=1){
				this.cart -= 1
			}
		},
		updateImage(variantImage) {
			this.image = variantImage
		}
	}
})
