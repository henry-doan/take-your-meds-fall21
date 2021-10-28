User.destroy_all

@user = User.create(
	email: "Meg2@test.com",
	password: "password",
	first_name: "Meg",
	last_name: "Graham ",
	age: 34,
	height: %q[5'1"],
	weight: 115.4,
	gender: "Female",
	blood: "A+",
	address: "5678 Nice St, Anywhere, USA",
	phone: "800-867-5309"
)

	@medication1 = @user.medications.create(
			img: "https://images.unsplash.com/photo-1587854680352-936b22b91030?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGlsbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", 
			name: "Ibuprofen",
			nickname: "Pain Reliever",
			strength: "200mg",
			dosage: "As needed, up to 800mg every 6 hours",
			currently_taking: true
		)
	
		@medication1.comments.create(
				title: "Headaches",
				description: "600mg seems to do the trick for headaches"
			)
	
	@medication2 = @user.medications.create(
		img: "https://images.unsplash.com/photo-1583088580009-2d947c3e90a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGlsbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
			name: "Amoxicillin",
			nickname: "Antibiotic",
			strength: "875mg",
			dosage: "875mg once daily for 10 days",
			currently_taking: true
		)
		
		@medication2.comments.create(
					title: "Ear Infection",
					description: "Went to urgent care with ear pain. Doctor prescribed this."
				)
	
	@medication3 = @user.medications.create(
		img: "https://images.unsplash.com/photo-1594362323815-70c3944df76a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGlsbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
		name: "Atorvastatin",
		nickname: "Cholesterol Med",
		strength: "10mg",
		dosage: "20mg, twice daily",
		currently_taking: true
	)
		
			@medication3.comments.create(
				title: "Been taking for awhile",
				description: "Have been on this med for awhile. No side effects."
			)
	
	@medication4 = @user.medications.create(
		img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGlsbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
		name: "Omeprazole",
		nickname: "Heartburn",
		strength: "20mg",
		dosage: "20mg, daily for 6 weeks",
		currently_taking: true
	)
		
			@medication4.comments.create(
				title: "Day 1",
				description: "no noticeable effect"
			)
			@medication4.comments.create(
				title: "Day 2",
				description: "no noticeable effect"
			)
			@medication4.comments.create(
				title: "Day 3",
				description: "slight decrease in heartburn"
			)
			@medication4.comments.create(
				title: "Day 4",
				description: "no heartburn at dinner"
			)

puts "Db seeded"