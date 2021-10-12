5.times do
	@user = User.create(
		name: Faker::FunnyName.name,
	)

	5.times do@user.medications.create
		ser