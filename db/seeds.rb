User.destroy_all

@user = User.create(
	email: "admin@test.com",
	password: "password",
	first_name: "Frank",
	last_name: "Abagnale Jr",
	age: 34,
	height: %q[6'2"],
	weight: 215.4,
	gender: "Male",
	blood: "B+",
	address: "5678 Nice St, Anywhere, USA",
	phone: "800-867-5309"
)

	@medication1 = @user.medications.create(
			name: "Ibuprofen",
			nickname: "Pain Reliever",
			strength: "200mg",
			dosage: "As needed, up to 800mg every 6 hours"
		)
	
		@medication1.comments.create(
				title: "Headaches",
				description: "600mg seems to do the trick for headaches"
			)
	
	@medication2 = @user.medications.create(
			name: "Amoxicillin",
			nickname: "Antibiotic",
			strength: "875mg",
			dosage: "875mg once daily for 10 days",
		)
		
		@medication2.comments.create(
					title: "Ear Infection",
					description: "Went to urgent care with ear pain. Doctor prescribed this."
				)
	
	@medication3 = @user.medications.create(
		name: "Atorvastatin",
		nickname: "Cholesterol Med",
		strength: "10mg",
		dosage: "20mg, twice daily",
	)
		
			@medication3.comments.create(
				title: "Been taking for awhile",
				description: "Have been on this med for awhile. No side effects."
			)
	
	@medication4 = @user.medications.create(
		name: "Omeprazole",
		nickname: "Heartburn",
		strength: "20mg",
		dosage: "20mg, daily for 6 weeks",
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