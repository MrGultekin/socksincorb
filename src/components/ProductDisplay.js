app.component('product-display', {
	props: {
		premium: {
			type: Boolean,
			required: true,
		}
	},
	
	template:
		`
				<div class="product-display">
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
						<p>Shipping: {{shipping}}</p>
						<!--						<ul>-->
						<!--							<li v-for="detail in details">{{detail}}</li>-->
						<!--						</ul>-->
						<product-details :details="details"></product-details>

						<div
								v-for="(variant,index) in variants"
								:key="variant.id"
								@mouseover="updateVariant(index)"
								class="color-circle"
								:style="{backgroundColor:variant.color}">
						</div>


						<button
								class="button"
								:class="{disabledButton: !inStock}"
								:disabled="!inStock"
								v-on:click="addToCart">
							Add to Cart
						</button>
						<button
								class="button"
								:class="{disabledButton: !inStock}"
								:disabled="!inStock"
								@click="removeFromCart">
							Remove Item
						</button>
					</div>
				</div>
				<review-list v-if="reviews.length" :reviews="reviews"></review-list>
				
<!--				added :reviews as props and passes this reviews[] -->
				<review-form @review-submitted="addReview"></review-form>
<!--				listen here review-submitted that triggers addReview method-->
				</div>`,

	data() {
		return {
			product: 'Socks',
			brand: 'Vue Mastery',
			// description: '100% Cotton Handmade socks.',
			url: 'https://google.com/',
			selectedVariant: 0,
			// inventory: 10,
			// onSale: true,MUSTAFA GULTEKIN
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{id: 1111, color: 'green', image: './src/assets/images/socks_green.jpg', quantity: 50},
				{id: 2222, color: 'blue', image: './src/assets/images/socks_blue.jpg', quantity: 0},
			],
			sizes: ['S', 'M', 'L', 'XL'],
			reviews:[],
			
		}
	},
	methods: {
		addToCart() {
			// this.cart += 1
			this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
		},
		removeFromCart() {
			// if (this.cart >= 1) {
			// 	this.cart -= 1
			// }
			this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
		},
		updateVariant(index) {
			this.selectedVariant = index;
			// console.log(index)
		},
		addReview(review){
			this.reviews.push(review)
			// we got review from event payload(means productReview)
		
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].image
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity
		},
		shipping() {
			if (this.premium) {
				return 'Free'
			}
			return 2.99 + '€'
		}
	}
})