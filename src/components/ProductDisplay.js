app.component('product-display',{
	template:
	
		`<div class="product-display">
			<div class="product-container">
				<div class="product-image">
					<img v-bind:src="image" alt="socks">
					<!--				<img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image" alt="img-socks">-->
				
				</div>
				<div class="product-info">
					<h1>{{title}}</h1>
					<p v-if="onSale">{{saleMessage}}</p>
					<!--				<p v-if="inventory>10">In Stock</p>-->
					<!--				<p v-else-if="inventory<=10 && inventory>0">Almost sold out!</p>-->
					<p v-if="inStock">In Stock</p>
					<p v-else>Out of Stock</p>
					<ul>
						<li v-for="detail in details">{{detail}}</li>
					</ul>
					
					<div
						v-for="(variant,index) in variants"
					:key="variant.id"
					@mouseover="updateVariant(index)"
					class="color-circle"
					:style="{backgroundColor:variant.color}">
				</div>
				
				
				<button class="button"
				:class="{disabledButton: !inStock}"
				:disabled="!inStock"
				v-on:click="addToCart">
				Add to Cart
			</button>
			<!--				<button class="button" @click="removeFromCart">Remove Item</button>-->
		</div>
</div>
</div>`,
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
	},
	data() {
		return {
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