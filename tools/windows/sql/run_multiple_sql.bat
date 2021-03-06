REM Comment any files that should not be executed.
REM Host=127.0.0.1	Port=3306	User=root	Pwd=<empty>	Database=core
REM Run from within apps folder

REM Tables: These will replace current tables with the new table structures as stored in these files
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accommodations\models\tables\structures\sql\tbl_accommodation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accommodations\models\tables\structures\sql\tbl_kind_of_accommodation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accounts\models\tables\structures\sql\tbl_account.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accounts\models\tables\structures\sql\tbl_kind_of_account.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\activities\models\tables\structures\sql\tbl_activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\activities\models\tables\structures\sql\tbl_activity_source_target.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\activities\models\tables\structures\sql\tbl_kind_of_activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\amounts\models\tables\structures\sql\tbl_amount.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\amounts\models\tables\structures\sql\tbl_kind_of_amount.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\arrangements\models\tables\structures\sql\tbl_arrangement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\arrangements\models\tables\structures\sql\tbl_kind_of_arrangement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\assets\models\tables\structures\sql\tbl_asset.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\assets\models\tables\structures\sql\tbl_kind_of_asset.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\attendances\models\tables\structures\sql\tbl_attendance.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\attendances\models\tables\structures\sql\tbl_kind_of_attendance.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\batches\models\tables\structures\sql\tbl_batch.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cards\models\tables\structures\sql\tbl_card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cards\models\tables\structures\sql\tbl_kind_of_card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cases\models\tables\structures\sql\tbl_case.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cases\models\tables\structures\sql\tbl_case_step.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cases\models\tables\structures\sql\tbl_kind_of_case.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\contacts\models\tables\structures\sql\tbl_contact.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\contacts\models\tables\structures\sql\tbl_kind_of_contact.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\countries\models\tables\structures\sql\tbl_country.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\dates\models\tables\structures\sql\tbl_date.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\decks\models\tables\structures\sql\tbl_deck.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\decks\models\tables\structures\sql\tbl_deck_card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\drivers\models\tables\structures\sql\tbl_driver.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\drivers\models\tables\structures\sql\tbl_kind_of_driver.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\events\models\tables\structures\sql\tbl_event.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\events\models\tables\structures\sql\tbl_kind_of_event.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\expectations\models\tables\structures\sql\tbl_expectation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\expectations\models\tables\structures\sql\tbl_kind_of_expectation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\genders\models\tables\structures\sql\tbl_gender.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\geometries\models\tables\structures\sql\tbl_geometry.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\geometries\models\tables\structures\sql\tbl_kind_of_geometry.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\globals\models\tables\structures\sql\tbl_global.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\groups\models\tables\structures\sql\tbl_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\groups\models\tables\structures\sql\tbl_kind_of_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\hospitalities\models\tables\structures\sql\tbl_hospitality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\identities\models\tables\structures\sql\tbl_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\identities\models\tables\structures\sql\tbl_kind_of_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_date.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_gender.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_nationality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_individual_salutation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\tables\structures\sql\tbl_kind_of_individual.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\inputs\models\tables\structures\sql\tbl_input.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\inputs\models\tables\structures\sql\tbl_kind_of_input.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\journals\models\tables\structures\sql\tbl_journal.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\journals\models\tables\structures\sql\tbl_kind_of_journal.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\languages\models\tables\structures\sql\tbl_language.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\levels\models\tables\structures\sql\tbl_level.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\locations\models\tables\structures\sql\tbl_location.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\locations\models\tables\structures\sql\tbl_kind_of_location.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\lodgings\models\tables\structures\sql\tbl_lodging.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\managements\models\tables\structures\sql\tbl_management.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\memberships\models\tables\structures\sql\tbl_membership.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\memberships\models\tables\structures\sql\tbl_membership_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\metrics\models\tables\structures\sql\tbl_metric.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\metrics\models\tables\structures\sql\tbl_kind_of_metric.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\multimedias\models\tables\structures\sql\tbl_multimedia.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\multimedias\models\tables\structures\sql\tbl_kind_of_multimedia.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\nationalities\models\tables\structures\sql\tbl_nationality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\names\models\tables\structures\sql\tbl_name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\names\models\tables\structures\sql\tbl_kind_of_name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\organisations\models\tables\structures\sql\tbl_organisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\organisations\models\tables\structures\sql\tbl_kind_of_organisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\organisations\models\tables\structures\sql\tbl_organisation_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\organisations\models\tables\structures\sql\tbl_organisation_party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\outputs\models\tables\structures\sql\tbl_output.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\outputs\models\tables\structures\sql\tbl_kind_of_output.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\parties\models\tables\structures\sql\tbl_party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\parties\models\tables\structures\sql\tbl_party_arrangement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\parties\models\tables\structures\sql\tbl_kind_of_party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\participations\models\tables\structures\sql\tbl_participation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\participations\models\tables\structures\sql\tbl_kind_of_participation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\periods\models\tables\structures\sql\tbl_period.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\periods\models\tables\structures\sql\tbl_kind_of_period.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\tables\structures\sql\tbl_person.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\tables\structures\sql\tbl_kind_of_person.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\tables\structures\sql\tbl_person_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\tables\structures\sql\tbl_person_party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\photos\models\tables\structures\sql\tbl_photo.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\tables\structures\sql\tbl_plan.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\tables\structures\sql\tbl_plan_activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\tables\structures\sql\tbl_plan_driver_resource.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\tables\structures\sql\tbl_plan_event.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\tables\structures\sql\tbl_kind_of_plan.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\tables\structures\sql\tbl_product.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\tables\structures\sql\tbl_kind_of_product.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\tables\structures\sql\tbl_product_individual.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\tables\structures\sql\tbl_product_name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\programmes\models\tables\structures\sql\tbl_programme.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\programmes\models\tables\structures\sql\tbl_kind_of_programme.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\realisations\models\tables\structures\sql\tbl_realisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\realisations\models\tables\structures\sql\tbl_kind_of_realisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\references\models\tables\structures\sql\tbl_reference.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\references\models\tables\structures\sql\tbl_reference_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\registries\models\tables\structures\sql\tbl_registry.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\requirements\models\tables\structures\sql\tbl_requirement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\resources\models\tables\structures\sql\tbl_resource.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\resources\models\tables\structures\sql\tbl_resource_amount_metric.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\resources\models\tables\structures\sql\tbl_kind_of_resource.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\roles\models\tables\structures\sql\tbl_role.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\roles\models\tables\structures\sql\tbl_kind_of_role.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\salutations\models\tables\structures\sql\tbl_salutation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\scenarios\models\tables\structures\sql\tbl_scenario.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\scenarios\models\tables\structures\sql\tbl_scenario_case.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\schedules\models\tables\structures\sql\tbl_schedule.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\schedules\models\tables\structures\sql\tbl_schedule_activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\schedules\models\tables\structures\sql\tbl_kind_of_schedule.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\skills\models\tables\structures\sql\tbl_skill.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\sources\models\tables\structures\sql\tbl_source.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\sources\models\tables\structures\sql\tbl_kind_of_source.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\tables\structures\sql\tbl_step.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\tables\structures\sql\tbl_step_requirement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\tables\structures\sql\tbl_step_input.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\tables\structures\sql\tbl_step_output.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\tables\structures\sql\tbl_step_expectation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\tables\structures\sql\tbl_step_realisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\tables\structures\sql\tbl_kind_of_step.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tags\models\tables\structures\sql\tbl_tag.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tags\models\tables\structures\sql\tbl_tag_card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tags\models\tables\structures\sql\tbl_tag_deck.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\targets\models\tables\structures\sql\tbl_target.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\targets\models\tables\structures\sql\tbl_kind_of_target.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tests\models\tables\structures\sql\tbl_test.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tests\models\tables\structures\sql\tbl_test_scenario.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tests\models\tables\structures\sql\tbl_kind_of_test.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\times\models\tables\structures\sql\tbl_time.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\transportations\models\tables\structures\sql\tbl_transportation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\transportations\models\tables\structures\sql\tbl_kind_of_transportation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\whereabouts\models\tables\structures\sql\tbl_whereabouts.sql"

REM Views: These will replace current views with the new views as stored in these files
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accommodations\models\views\structures\sql\accommodation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accommodations\models\views\structures\sql\kind_of_accommodation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accounts\models\views\structures\sql\account.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\accounts\models\views\structures\sql\kind_of_account.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\activities\models\views\structures\sql\activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\activities\models\views\structures\sql\activity_source_target.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\activities\models\views\structures\sql\kind_of_activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\amounts\models\views\structures\sql\amount.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\amounts\models\views\structures\sql\kind_of_amount.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\arrangements\models\views\structures\sql\arrangement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\arrangements\models\views\structures\sql\kind_of_arrangement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\assets\models\views\structures\sql\asset.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\assets\models\views\structures\sql\kind_of_asset.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\attendances\models\views\structures\sql\attendance.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\attendances\models\views\structures\sql\kind_of_attendance.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\batches\models\views\structures\sql\batch.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\batches\models\views\structures\sql\kind_of_batch.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cards\models\views\structures\sql\card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cards\models\views\structures\sql\kind_of_card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cases\models\views\structures\sql\case.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cases\models\views\structures\sql\case_step.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\cases\models\views\structures\sql\kind_of_case.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\contacts\models\views\structures\sql\contact.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\contacts\models\views\structures\sql\kind_of_contact.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\countries\models\views\structures\sql\country.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\countries\models\views\structures\sql\kind_of_country.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\creatures\models\views\structures\sql\creature.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\creatures\models\views\structures\sql\kind_of_creature.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\dates\models\views\structures\sql\date.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\dates\models\views\structures\sql\kind_of_date.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\decks\models\views\structures\sql\deck.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\decks\models\views\structures\sql\deck_card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\decks\models\views\structures\sql\kind_of_deck.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\drivers\models\views\structures\sql\driver.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\drivers\models\views\structures\sql\kind_of_driver.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\events\models\views\structures\sql\event.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\events\models\views\structures\sql\kind_of_event.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\expectations\models\views\structures\sql\expectation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\expectations\models\views\structures\sql\kind_of_expectation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\genders\models\views\structures\sql\gender.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\genders\models\views\structures\sql\kind_of_gender.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\geometries\models\views\structures\sql\geometry.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\geometries\models\views\structures\sql\kind_of_geometry.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\globals\models\views\structures\sql\global.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\groups\models\views\structures\sql\group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\groups\models\views\structures\sql\kind_of_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\hospitalities\models\views\structures\sql\hospitality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\hospitalities\models\views\structures\sql\kind_of_hospitality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\identities\models\views\structures\sql\identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\identities\models\views\structures\sql\kind_of_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_date.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_gender.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_nationality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\individual_salutation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\individuals\models\views\structures\sql\kind_of_individual.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\inputs\models\views\structures\sql\input.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\inputs\models\views\structures\sql\kind_of_input.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\journals\models\views\structures\sql\journal.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\journals\models\views\structures\sql\kind_of_journal.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\languages\models\views\structures\sql\language.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\languages\models\views\structures\sql\kind_of_language.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\levels\models\views\structures\sql\level.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\levels\models\views\structures\sql\kind_of_level.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\locations\models\views\structures\sql\location.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\locations\models\views\structures\sql\kind_of_location.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\lodgings\models\views\structures\sql\lodging.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\lodgings\models\views\structures\sql\kind_of_lodging.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\managements\models\views\structures\sql\management.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\managements\models\views\structures\sql\kind_of_management.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\memberships\models\views\structures\sql\membership.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\memberships\models\views\structures\sql\membership_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\memberships\models\views\structures\sql\kind_of_membership.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\metrics\models\views\structures\sql\metric.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\metrics\models\views\structures\sql\kind_of_metric.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\multimedias\models\views\structures\sql\multimedia.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\multimedias\models\views\structures\sql\kind_of_multimedia.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\names\models\views\structures\sql\name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\names\models\views\structures\sql\kind_of_name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\nationalities\models\views\structures\sql\nationality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\nationalities\models\views\structures\sql\kind_of_nationality.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\organisations\models\views\structures\sql\organisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\organisations\models\views\structures\sql\kind_of_organisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\outputs\models\views\structures\sql\output.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\outputs\models\views\structures\sql\kind_of_output.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\participations\models\views\structures\sql\participation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\participations\models\views\structures\sql\kind_of_participation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\parties\models\views\structures\sql\party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\parties\models\views\structures\sql\party_arrangement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\parties\models\views\structures\sql\kind_of_party.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\periods\models\views\structures\sql\period.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\periods\models\views\structures\sql\kind_of_period.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\views\structures\sql\person.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\views\structures\sql\person_group.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\views\structures\sql\kind_of_person.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\photos\models\views\structures\sql\photo.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\photos\models\views\structures\sql\kind_of_photo.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\views\structures\sql\plan.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\views\structures\sql\plan_activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\views\structures\sql\plan_driver_resource.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\views\structures\sql\plan_event.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\plans\models\views\structures\sql\kind_of_plan.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\views\structures\sql\product.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\views\structures\sql\kind_of_product.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\views\structures\sql\product_individual.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\products\models\views\structures\sql\product_name.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\programmes\models\views\structures\sql\programme.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\programmes\models\views\structures\sql\kind_of_programme.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\realisations\models\views\structures\sql\realisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\realisations\models\views\structures\sql\kind_of_realisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\references\models\views\structures\sql\reference.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\references\models\views\structures\sql\reference_identity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\references\models\views\structures\sql\kind_of_reference.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\registries\models\views\structures\sql\registry.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\registries\models\views\structures\sql\kind_of_registry.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\requirements\models\views\structures\sql\requirement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\requirements\models\views\structures\sql\kind_of_requirement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\resources\models\views\structures\sql\resource.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\resources\models\views\structures\sql\resource_amount_metric.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\resources\models\views\structures\sql\kind_of_resource.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\roles\models\views\structures\sql\role.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\roles\models\views\structures\sql\kind_of_role.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\salutations\models\views\structures\sql\salutation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\salutations\models\views\structures\sql\kind_of_salutation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\scenarios\models\views\structures\sql\scenario.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\scenarios\models\views\structures\sql\scenario_case.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\scenarios\models\views\structures\sql\kind_of_scenario.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\schedules\models\views\structures\sql\schedule.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\schedules\models\views\structures\sql\schedule_activity.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\schedules\models\views\structures\sql\kind_of_schedule.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\skills\models\views\structures\sql\skill.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\skills\models\views\structures\sql\kind_of_skill.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\sources\models\views\structures\sql\source.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\sources\models\views\structures\sql\kind_of_source.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\views\structures\sql\step.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\views\structures\sql\step_requirement.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\views\structures\sql\step_expectation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\views\structures\sql\step_realisation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\views\structures\sql\step_input.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\views\structures\sql\step_output.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\steps\models\views\structures\sql\kind_of_step.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tags\models\views\structures\sql\tag.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tags\models\views\structures\sql\tag_card.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tags\models\views\structures\sql\tag_deck.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tags\models\views\structures\sql\kind_of_tag.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\targets\models\views\structures\sql\target.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\targets\models\views\structures\sql\kind_of_target.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tasks\models\views\structures\sql\task.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tasks\models\views\structures\sql\kind_of_task.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tests\models\views\structures\sql\test.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tests\models\views\structures\sql\test_scenario.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tests\models\views\structures\sql\kind_of_test.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\times\models\views\structures\sql\time.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\times\models\views\structures\sql\kind_of_time.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\transportations\models\views\structures\sql\transportation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\transportations\models\views\structures\sql\kind_of_transportation.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\whereabouts\models\views\structures\sql\whereabouts.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\whereabouts\models\views\structures\sql\kind_of_whereabouts.sql"

REM Data: These will replace current data in the tables with new data as stored in these files
REM Only to be used with empty tables and/or lookup tables e.g. countries.
REM Be aware that keys will be assigned to the next increment (hence ids may change value!)

mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\countries\models\tables\data\en\sql\tbl_country_data.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\genders\models\tables\data\en\sql\tbl_gender_data.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\nationalities\models\tables\data\en\sql\tbl_nationality_data.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\salutations\models\tables\data\en\sql\tbl_salutation_data.sql"

REM Data: Samples !!! .... do not use in a production database
REM DEPRECATED mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\tables\data\en\sql\tbl_person_data.sql"
REM DEPRECATED mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\persons\models\tables\data\en\sql\tbl_person_group_data.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\groups\models\tables\data\en\sql\tbl_group_data.sql"
mysql --host=127.0.0.1 --port=3306 --user=root --database=core < ".\tests\models\tables\data\en\sql\tbl_kind_of_test_data.sql"

pause