const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Socks',
			brand: 'Vue Mastery',
			// description: '100% Cotton Handmade socks.',
			url: 'https://google.com/',
			selectedVariant:0,
			// inventory: 10,
			// onSale: true,
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{id: 0o001, color: 'green', image: './src/assets/images/socks_green.jpg', quantity: 50},
				{id: 0o002, color: 'blue', image: './src/assets/images/socks_blue.jpg', quantity: 0},
			],
			sizes: ['S', 'M', 'L', 'XL']
			
		}
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		removeFromCart() {
			if (this.cart >= 1) {
				this.cart -= 1
			}
		},
		updateVariant(index) {
			this.selectedVariant = index;
			// console.log(index)
		}
	},
	computed: {
		title() {
			return this.brand + '' + this.product
		},
		image(){
			return this.variants[this.selectedVariant].image
		},
		inStock(){
			return this.variants[this.selectedVariant].quantity
		}
	}
})
