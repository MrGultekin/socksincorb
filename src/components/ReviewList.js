app.component('review-list', {
	props: {
		reviews: {
			type: Array,
			required: true,
		}
	},
	template:
		 `
			 <div class="review-container">
			 <h3>Reviews</h3>
			 <ul>
				 <li v-for="(review,index) in reviews" :key="index">
					 {{review.name}} gave: {{review.rating}} stars.
					 <br/>
					 And says: "{{review.review}}"
					 <br>
					 Is it recommendation: "{{review.recommendation}}"
			 </ul>
			 </div>
		 
		 `
})